// Four Clawds across the stage toss a sizzling hot potato ever faster until it pops into popcorn on one, and all laugh.
$cdA("hot-potato",{title:"Hot potato",w:64},c=>{
var G=c.G,U=G-1,P=c.P,R=c.R,T=c.T,M=Math.round,L=c.lerp,I="inactive",Y="chromeYellow",Z="closed",Q="error",E="left",H="right",O="one-up",V="up",K="text",N="wink",f,ps=[],tx=[],po=0,q=0,i,j,k,ms,nd,nx,
X=[0,1,2,3].map(k=>1+M(k*(c.mx-2)/3)),
m=c.clamp(M(c.x*3/c.mx),0,3),cur=m,
C=["permission","success","autoAccept"],
D=X.map((x,k)=>({x,o:k-m?-7:0,p:P(),c:k-m?C.shift():"clawd_body"})),
rn=a=>(Math.random()-.5)*a,
em=(x,y,t,k,vx,vy,l,g=0)=>ps.push({x,y,t,k,vx,vy,l,g}),
tt=(x,y,t,k)=>tx.push(T(x,y,t,k,{b:1})),
du=(x,w)=>[-1,1].map(s=>em(x+w*s,6,"·",I,s*.8,0,4)),
S=ms=>{var pr=tx,a=[],mm;tx=[];
 ps=ps.filter(p=>(pr.push(T(M(p.x),M(p.y),p.t,p.k,{z:-1})),p.x+=p.vx,p.y+=p.vy,p.vy+=p.g,p.y>6&&(p.y=6,p.vx=p.vy=p.g=0),--p.l>0));
 if(po){pr.push(T(po.x,po.y,"●",q>.8&&R(0,1)?Y:c.rgb(170+85*q,120-90*q,60-40*q),{b:1}));
  R(0,9)<2+7*q&&em(po.x+rn(2),po.y-1,c.pick("~°·"),c.pick([I,K]),rn(.6),-.5,R(2,4))}
 D.map((d,k)=>{var o={x:d.x,offset:d.o,pose:d.p,color:d.c};d.s&&(o.paint=(x,y)=>y?d.c:I);
  d.h&&pr.push(T(d.x+2,U+d.o,"✿ ✿ ✿",K));k-m?a.push(o):mm=o});
 f.push(Object.assign(mm,{ms,props:pr,actors:a}))},
// lk: watch/duck, A: arc, J: juggle
lk=x=>D.map((d,k)=>{var dx=x-d.x-4,dk=nd.indexOf(k)<0&&po&&po.y<G&&dx*dx<9;d.o=d.o<-6?d.o:dk?1:0;d.p=P(dk?Z:dx<-2?E:dx>2?H:0)}),
A=(sx,sy,ex,ey,h,n)=>{for(j=1;j<=n;j++){var t=j/n;tx.push(T(po.x,po.y,"·","subtle"));
 po={x:M(L(sx,ex,t)),y:M(L(sy,ey,t)-h*Math.sin(3.14*t))};
 lk(po.x);D[nx].p=P(D[nx].p.eyes,t>.4&&V);t>.4&&q>.4&&tt(X[nx]+4,G-3,"!","warning");S(ms)}},
J=(k,n,ms)=>{var d=D[k],w=c.pick(["hot!","ow!","ah!","eek!"]);nd=[k];for(i=0;i<n;i++){j=i%4;lk(d.x+4);d.o=j==1?-1:0;
 po={x:d.x+[1,4,8,4][j]+(q>.8?R(-1,1):0),y:U+d.o-j%2};d.p=P(i%2?Z:0,V,j<2?E:H);
 i%4<3&&tt(d.x+3,0,w,Q);S(ms)}};
f=c.walk(c.x,X[m],{ms:30});
// friends drop in
nd=[];D.map((d,k)=>{k-m&&[-7,-6,-4,-2,0,1,0].map(o=>{lk(d.x+4);d.o=o;d.p=P(o<0?Z:0,o<-1&&V);
 o>0&&du(d.x+4,5);S(o<0?40:90)})});
for(i=0;i<4;i++){D.map((d,k)=>d.p=P(i%2?N:0,(i+k)%2&&O));S(110)}
// a potato drops in: hot!
var d=D[m];nd=[m];
for(i=-1;i<G;i++){po={x:d.x+4,y:i};lk(po.x);d.p=P(0,i>0&&V);S(70)}
d.o=1;S(90);d.o=0;
for(i=0;i<4;i++){d.p=P(i%2?E:H,V);tt(d.x+7,G-3,"?",I);S(140)}
q=.15;d.p=P(Z,V);tt(d.x+6,G-3,"!!",Q);S(260);
// toss, faster and faster
for(var NT=R(7,9),k=0;k<NT;k++){q=.15+.75*k/NT;
 J(cur,M(L(6,2,q))+R(0,2),M(L(80,40,q)));
 nx=(cur+R(1,3))%4;var sx=X[cur]+4,ex=X[nx]+4,dd=nx-cur,n=c.clamp(M(Math.abs(ex-sx)/4)+4,6,20),b=cur+Math.sign(dd),bx=X[b]+4;
 ms=M(L(48,20,q));nd=[cur,nx];
 if(dd*dd>1&&R(0,1)){nd.push(b);A(sx,U,bx,U,3,n>>1);
  D[b].o=1;D[b].p=P(Z);po.y=G;tt(bx-1,G-3,"ow",Q);for(j=0;j<4;j++)em(bx,U,c.pick("*✦·"),Y,rn(2),rn(1),3);S(ms*3);
  A(bx,U,ex,U,3,n>>1)}
 else if(dd*dd<2&&!R(0,2)){bx=sx+ex>>1;A(sx,U,bx,6,2,n>>1);du(bx,1);A(bx,6,ex,U,3,n>>1)}
 else A(sx,U,ex,U,3,n);
 D[nx].o=1;po.y=G;S(ms*2);cur=nx}
// it trembles, others cower
q=1;var u=D[cur];J(cur,5,45);
for(i=0;i<9;i++){D.map((d,k)=>{d.o=k-cur?1:0;d.p=P(k-cur?Z:0,V)});
 po={x:u.x+4+R(-1,1),y:U};tt(u.x+1+i%2,G-3,i<5?"!":"!!!",Q);S(70)}
// POP! the sooty one sees stars; all laugh
po=0;u.s=u.h=1;u.p=P(Z);
for(j=0;j<12+c.W/8;j++)em(u.x+4,U,c.pick("✿❀*o•✿"),R(0,2)?K:Y,rn(c.W/18),rn(1.1)-.85,R(20,40),.18);
for(i=0;i<22;i++){
 i<5&&tt(u.x+2,G-3,"POP!",Y);i<2&&tt(u.x,G-2,"✸ ✸   ✸ ✸",Y);
 D.map((d,k)=>{if(k-cur||i>11){d.o=i<2?1:(i+k)%3?0:-1;d.p=P(i%4<2?Z:N,V,(i+k)%2?E:H);
  i>2&&(i+k)%3==0&&em(d.x+R(1,5),G-2,c.pick(["ha","ha!","HA"]),d.c,0,-.3,4)}});
 if(i<12){u.o=i<2?1:0;u.p=P(i%6<4?Z:0);i>4&&tx.push(T(u.x+1+[0,2,4,6,4,2][i%6],G-2,"✦",Y));
  i<6&&em(u.x+3+R(0,2),G-2,"░",I,rn(.4),-.4,R(3,5))}
 S(105)}
// shake off, friends hop away
D.map(d=>{d.o=0;d.p=P()});u.p=P(Z);u.h=0;
for(i=0;i<4;i++){u.x+=i%2?-1:1;em(u.x+4,G,"░",I,rn(3),-.3,3);em(u.x+2+i,U,"✿",K,rn(2),-.6,6,.3);S(70)}
u.s=0;u.p=P(N);S(300);
D.filter((d,k)=>k-m).map(d=>{for(i=0;i<6;i++){d.o=[0,1,-1,-3,-5,-7][i];d.p=P(i?Z:N,i>1?V:O);
 D[m].p=P(d.x<D[m].x?E:H,O);S(i?60:200)}});
while(ps.length)S(60);
f.push({pose:"default",ms:300});return f});
