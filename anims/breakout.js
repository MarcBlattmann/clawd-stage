// Rainbow bricks fill the sky edge to edge; Clawd heads a pixel ball that zigzags along both rows smashing them to bits, and the last one bursts into full-width confetti.
$cdA("breakout",{title:"Breakout",w:64},c=>{
var M=Math,rd=M.round,R=c.R,W=c.W,T=c.T,mx=c.mx,f=[],P=[],K=[],Q=[],H,CL=0,
bw=M.max(6,W/13|0),n=(W-2)/bw|0,m=(W-n*bw+1)>>1,x=c.x,bx=x+4,by=7,
i,j,k,t,b,d,p,hy,su,sd,tx,x0,y0,X,Y,
dir=bx<W/2?1:-1,i0=c.clamp((bx-m)/bw|0,0,n-1),
// Particles: bits fall with gravity a, confetti (a=0) drifts down from above the stage.
burst=(x0,y0,w,N,a,col)=>{for(j=0;j<N;j++)P.push({x:x0+R(0,w),y:y0+(a?.4:-R(0,6)),u:(M.random()-.5)*(a?1.6:.3),v:a?M.random()*.3:.25+M.random()*.25,a:a,g:c.pick(a?"▘▝▖▗·*":"*✦·•°✧"),c:col||c.hsv(R(0,359),.6,1)})},
// Bricks, particles and extras for one frame; a flashed brick loses a hit point afterwards.
D=ex=>{var o=[];K.forEach(b=>{if(!b.s)return;o.push(T(b.x,b.y,(b.t?b.h>1?"▓":"▒":"█").repeat(bw-1),b.f?"text":b.t?"inactive":b.c));
 if(b.f&&!(b.f=0)&&!--b.h)b.s=0,burst(b.x,b.y,bw-2,3+bw/5|0,.15,b.t?"text":b.c)});
 P=P.filter(q=>(q.x+=q.u,q.y+=q.v,q.v+=q.a,q.y<7&&q.x>=0&&q.x<W));P.forEach(q=>o.push(T(rd(q.x),rd(q.y),q.g,q.c,{z:-1})));
 CL&&CL<50&&(CL++<40||CL%2)&&o.push(T((W-11)>>1,0,"★ CLEAR! ★",c.rainbow(CL),{b:1}));return o.concat(ex||[])},
ball=(X,Y)=>T(X,Y>>1,Y&1?"▄":"▀","text",{b:1}),
E=X=>X<x+2?"left":X>x+6?"right":"open",
F=(pose,ms,ex,o)=>f.push({x:x,pose:pose,ms:ms,offset:o||0,props:D(ex)});
for(j=0;j<2;j++)for(i=0;i<n;i++)K.push({x:m+i*bw,y:j,h:1,c:c.hsv(i*300/n+j*35,j?.5:.7,1)});
for(j=0;j<2;j++)b=K[R(0,n-1)],b.t=b.h=2;

// The wall builds in: top row from the left, second row from the right.
for(k=0;k<14;k++){t=W*(k+1)/12;K.forEach(b=>b.s=b.y?W-b.x-bw<t:b.x<t);F(c.P(E(t)),40,[T(rd(t),0,"✦","text"),T(rd(W-t),1,"✦","text")])}
F("default",350);
// A ball pops into his hand, a toss, it lands on his head; crouch to serve.
F(c.P("right","one-up"),140,[T(x+8,3,"✦","warning")]);F(c.P("right","one-up"),300,[ball(x+8,7)]);
[[8,6],[7,5],[6,5],[5,5],[4,6]].forEach(q=>F(c.P(E(x+q[0])),60,[ball(x+q[0],q[1])]));
F("default",120,[ball(x+4,9)],1);F(c.P("wink"),380,[ball(x+4,7)]);F("default",200,[ball(x+4,9)],1);

// Rally: up to a brick, bounce down onto his head; he slides under each landing spot.
for(i=i0;i>=0&&i<n;i+=dir)Q.push(K[n+i]);
for(i-=dir;i>=0&&i<n;i-=dir)Q.push(K[i]),K[i].t&&Q.push(K[i]);
for(i+=dir;i!=i0;i+=dir)Q.push(K[n+i]);
H=Q.map(b=>b.x+R(1,bw-3));
for(k=0;k<Q.length;k++){
 b=Q[k];hy=b.y*2+2;var L=k==Q.length-1;
 p=c.clamp(L?2*H[k]-bx:rd((H[k]+H[k+1])/2),4,W-5);tx=c.clamp(p-4+R(-1,1),0,mx);
 su=M.max(by-hy,M.ceil(M.abs(H[k]-bx)/2));sd=M.max(7-hy,M.ceil(M.abs(p-H[k])/2));x0=bx;y0=by;
 for(t=1;t<=su+sd;t++){
  d=t<=su?t/su:(t-su)/sd;
  X=rd(t<=su?x0+(H[k]-x0)*d:H[k]+(p-H[k])*d);Y=rd(t<=su?y0+(hy-y0)*d:hy+(7-hy)*d);
  if(t==su)b.f=1;
  // Last brick: rainbow burst, confetti over the whole width, shock waves racing to both edges.
  if(L&&t==su+1)for(burst(b.x,b.y,bw-2,14,.12,c.rainbow(R(0,9))),burst(0,0,W-1,12+W/5|0,0),CL=1,j=0;j<4;j++)P.push({x:H[k],y:j>>1,u:j&1?3:-3,v:0,a:0,g:"≈",c:"text"});
  d=tx-x;x+=M.sign(d)*M.min(2,M.ceil(M.abs(d)/(su+sd-t+1)));
  F(c.P(L&&t==su?"closed":E(X),t==su+sd||!k&&t<2?"up":"down",d?f.length%2?"left":"right":"both"),
   L&&t<=su?(t==su?500:70+t*25):t==su?60:rd(44-16*k/Q.length),[ball(X,Y)])}
 bx=p;by=7}

// Victory: hop with the ball on his head, head it out of the top... it falls back, bonk, and bounces off stage.
[0,-1,-2,-1,0,0,-1,-2,-1,0].forEach((o,j)=>F(c.P(j%5<2?"wink":"open","up"),70,[ball(x+4,7+2*o)],o));
F("default",160,[ball(x+4,9)],1);
[5,3,1,-1].forEach(y=>F(c.P("open","up"),45,y<0?[]:[ball(x+4,y)]));
for(j=0;j<12;j++)F(c.P(j<5?"open":"wink"),60);
[0,2,4,6].forEach(y=>F(c.P(y>3?"closed":"open"),40,[ball(x+4,y)]));
F(c.P("closed"),320,[ball(x+4,9),T(x+1,4,"✦","warning"),T(x+7,3,"✦","warning")],1);
for(d=bx<W/2?-1:1,j=1;(X=x+4+d*(3+W/100|0)*j)>-2&&X<=W;j++)F(c.P(E(X)),35,[ball(X,13-rd(9*M.pow(.75,j/7)*M.abs(M.sin(.73+.45*j))))]);
for(j=0;P.length||CL&&CL<50;j++)F(c.P(j<6?"open":["wink","left","open","right"][(j>>3)%4]),50);
f.push({x:x,pose:"default",ms:300});
return f});
