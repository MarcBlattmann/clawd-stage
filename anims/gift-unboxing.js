// Gift drops in; Clawd shakes it, listens, unties it: BOING, a jack-in-the-box! He jumps, then laughs.
$cdA("gift-unboxing",{title:"Surprise gift",w:40},function(c){
var R=c.R,T=c.T,P=c.P,M=Math.round,X=c.clamp(c.x<25?c.x:Math.max(c.x,51),3,c.mx-19),f=c.walk(c.x,X),x=X,t=0,ps=[],bx=X+10,by=-9,rb=1,lo=0,lh=0,js=-1,jd=0,fe="° °",i,k,n,o,
K="chromeYellow",D="inactive",F="error",G="right",C="closed",Q="one-up",U="up",O="open",W="wink",S="#ffe0c0",E={b:1},Z="✦✧·",Rb=c.rainbow,
h=c.pick([350,215,140,280]),B=c.hsv(h,.75,.8),L=c.hsv(h,.55,.95),Y=c.pick([K,"#ffa0d2","text"]),H=c.pick(["autoAccept","success","permission",F]),
sp=(a,b,dx,dy,l,s,col)=>ps.push([t,a,b,dx,dy,l,s,col]),V=(a,b)=>R(-a,b==null?a:b)/10,dust=q=>{for(q of[-2,8])sp(bx+q,6,(q-3)/12,0,3,"▒░·",D)},
lift=u=>{for(var q=1,j;q<10;q++)j=u?q:9-q,bx=X+10-j,by=Math.max(1,4-j),A(P(j>3?O:G,j>2?U:Q),50)},
step=a=>{for(k=a;k<X;)A(P(G,"down",k%2?"left":G),75,0,++k)};
// beat: pose,ms,offset,x,props
function A(e,ms,o,xx,g){
for(var m=Math.ceil(ms/120),d=M(ms/m),j=0,p,r,u=bx+2+jd,v=by-js;j++<m;t+=d){
x=xx==null?x:xx;p=[];
ps.forEach(q=>{var a=(t-q[0])/100;a<q[5]&&p.push(T(q[1]+M(a*q[3]),q[2]+M(a*q[4]),q[6][Math.min(a|0,q[6].length-1)],q[7]))});
rb&&p.push(T(bx+2,by-1,"▶●◀",Y,E));
p.push(T(bx-1+lo,by+lh,rb?"════╬════":"         ",Y,{bg:L,o:1}));
for(r=1;r<3;r++)p.push(T(bx,by+r,rb?"   ║   ":"       ",Y,{bg:B,o:1}));
for(r=0;r<js;r++)p.push(T(bx+3+(2*r>=js?jd:0),by-r,"§","text"));
js<0||p.push(T(u,v-1,"◢▲◣",H),T(u,v,fe,"#503030",{bg:S,o:1}),T(u+1,v,"●",F,{bg:S}));
f.push({pose:e.eyes?e:P(e),ms:d,offset:o,x:x,props:p.concat(g||[])})}}

// it drops: thud
A(O,400);sp(bx+3,0,0,0,4,Z,K);A(O,250);A(G,350,0,X,[T(X+4,3,"!",K,E)]);
for(by=-3;by<4;by++)A(G,45,0,X,c.art(bx+1,by-3,["·   ·","│   │"],D).concat(T(bx+2-(by>0),6,by>0?"·····":"···",D)));
dust();for(;by>2;by--)A(P(C,U),65,-1);by=4;A(C,100);A(G,350);A(O,200);A(G,300);
// shake it
A(P(G,Q),200);lift(1);A(P(O,U),200);
for(i=0,n=R(8,12);i<n;i++)bx=X+i%2*2,A(P(i%4<2?C:O,U),45,0,X,[T(X-2+i%2*11,2,i%2?"))":"((",D)]);
bx=X+1;A(P(G,U),300);lift(0);
// listen
A(G,150,0,X+1);
for(i=0;i<3;i++)sp(bx+R(1,5),3,V(2),-.4,8,"♪♫"[i%2],D),A(C,250);
A(G,400,0,X+1,[T(X+5,3,"?",K,E)]);A(O,200,0,X);
// untie, toss
A(P(G,Q),250);
for(i=1;i<4;i++)A(P(G,Q,i%2?"left":G),140,0,X-i,[T(X-i+9,4,"~".repeat(i),Y)]);
A(P(C,Q),200,0,X-3,[T(X+6,4,"~~~",Y)]);
rb=0;for(k=0;k<6;k++)sp(bx+3,3,V(9),V(6,1),3,Z,Y);
A(P(W,Q),350,0,X-3,[T(X+6,4,"~^~",Y)]);
sp(X+4,3,-.3,-.5,7,["~^~","^~^","~^","~"],Y);A(P(O,U),250);A(G,150);step(X-3);
// hum... silence
for(i=0;i<14;i++)bx=X+10+(i>7&&i%2),i%(i>7?1:2)||sp(bx+R(1,5),3,V(2),-.5,7,"♪♫"[R(0,1)],Rb(R(0,9))),A(P(G,i>10?Q:"down"),i>7?60:150,0,X+(i>10));
bx=X+10;A(P(G,Q),700);
// POP
for(k=0;k<8;k++)sp(bx+3,3,V(12),V(6,0),R(2,4),"✦*·",Rb(k));
for(i=0;i<5;i++)js=i<4?i+1:3,lo=i+1,lh=-js-2,n=X-Math.min(i,2),o=[-1,-2,-1,0,1][i],
 A(P(C,U),i<4?40:80,o,n,i?[T(bx+8,1,"BOING!",Rb(i*2),E),T(n+4,2+o,"!",F,E)]:0);
// wobble
for(i=0;i<14;i++)jd=[1,0,-1,0][i%4]*(i<11),js=i<7?[3,2,3,4][i%4]:3,
 A(i<5?P(C,U):i<9?G:O,60+i*7,1,X-2,i<10?[T(bx+8,1+(i>2),i<3?"BOING!":"oing",i<3?Rb(i*2):D,i<3&&E)]:0);
// laugh
A(G,300);fe="^ ^";A(W,300);
for(i=0;i<12;i++)js=3-i%2,i%2||sp(X+R(0,4),3,V(3),-.4,7,[c.pick(["ha","HA","ha!"])],K),A(P(C,i%4<2?U:Q),110,i%2);
js=3;A(W,400);
// lid shuts him in
lo=0;for(lh=-7;lh<1;lh++)js=Math.min(3,-lh-2),A(G,50);
dust();A(C,120);A(G,250);sp(bx+3,3,.2,-.4,6,"♪",D);A(G,400);A(W,250);
// pat: poof
step(X-2);A(P(G,Q),250);
for(k=0;k<27;k++)sp(bx-1+k%9,4+k/9|0,0,0,3,"▓▒░",D),k%2||sp(bx+R(-1,7),R(3,6),V(8),V(8,2),R(3,7),"✦*✧·",Rb(k));
by=-20;sp(X+4,2,0,-.4,6,"♥",F);A(P(W,U),300,-1);A(P(W,U),300);A(O,300);
return f.concat({pose:"default",ms:150});
});
