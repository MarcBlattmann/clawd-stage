// A rainbow drop floods Clawd with color; arcs pulse behind him as he grooves faster and faster to a big leap, then he shakes the color off.
$cdA("rainbow-groove",{title:"Rainbow groove",w:48},c=>{
var G=c.G,P=c.P,R=c.R,M=Math.round,Z={z:-1},I="right",J="left",U="up",O="one-up",K="closed",N="open",W="wink",
x0=c.clamp(c.x,12,c.mx-12),C=x0+4,f=c.walk(c.x,x0),
X=x0,o=0,p=P(),ph=R(0,359),sp=0,dr=R(0,1)*2-1,wp=-1,dn=0,i,hot=0,
L=[0,0,0,0],bl=0,lim=7,ps=[],tx=[],t=0,rq=[],
E=[[6,8,9,9],[8,10,11,11,11],[10,12,13,14,14,14],[12,14,15,16,16,16,16]],
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
hc=()=>c.hsv(R(0,359),.7,1),
em=(x,y,s,vx,vy,g,n,k=hc())=>ps.push({x,y,s,vx,vy,g,n,k}),
arc=(k,v)=>{var e=E[k],y=3-k,col=c.hsv(ph/3+(3-k)*70,.75,v),r=[],a,b,j,h;
 y<lim||r.push(c.T(C-e[0],y,"╭"+"─".repeat(2*e[0]-1)+"╮",col,Z));
 for(j=1;j<e.length;j++){a=e[j-1];b=e[j];h="─".repeat(b-a&&b-a-1);
  y+j<lim||r.push(c.T(C-b,y+j,a-b?"╭"+h+"╯":"│",col,Z),c.T(C+a,y+j,a-b?"╰"+h+"╮":"│",col,Z))}
 return r},
S=(ms,n=1)=>{while(n--){t++;ph+=sp;
 var pr=tx,q=ph,w=wp,d=dn,l,k;tx=[];
 for(k=0;k<4;k++)(l=L[k]=Math.max(rq.includes(t-k)?1:L[k]*.4,bl))>.2&&(pr=pr.concat(arc(k,.4+.6*l)));
 ps=ps.filter(s=>(pr.push(c.T(M(s.x),M(s.y),s.s,s.k,Z)),s.x+=s.vx,s.y+=s.vy,s.vy+=s.g,--s.n>0&&s.y<7));
 f.push({x:X,offset:o,pose:p,ms,props:pr,paint:(u,r)=>Math.abs(u-4)<=w&&r>=d?c.hsv(q+dr*u*32+r*18,.7,1):"clawd_body"})}},
mv=[
 i=>{o=1-i%2;p=P(i%4?N:K)},
 i=>{X=x0+[0,1,0,-1][i%4];p=P(i%4<2?I:J,0,i%2?"both":i%4?J:I)},
 i=>{p=P(i%4-3?N:W,["down",O,U,O][i%4]);o=i%2},
 i=>{p=P(i%2?I:J,O,i%2?J:I)}],
hop=i=>{o=-[0,1,2,1][i%4];p=P(o<-1?W:N,o?U:"down")},
go=(m,n,ms,B=2)=>{for(var j=0;j<n;j++){m(j);j%B||rq.push(t+1);j%2||em(X+(j%4?0:8),G-1+o,c.pick("♪♫"),j%4?-.5:.5,-.5,0,6);
 if(hot){var s=R(0,1);em(X-1+s*10,G+o+R(0,1),c.pick("·*+"),s*1.6-.8,-.4,.12,5)}S(ms)}X=x0;o=0;p=P()};
// 1. a rainbow drop arcs onto his head, color spreads from the middle out
S(350);var sd=R(0,1)*2-1;
for(i=0;i<9;i++){var py,dx=C+sd*(8-i),dy=M(3*i*i/64);tx=[c.T(dx,dy,"✦",c.hsv(ph+i*40,.7,1),{b:1})];
 i&&tx.push(c.T(dx+sd,py,"·","subtle"));py=dy;p=P(i<7?(sd>0?I:J):N);S(i<4?110:80)}
for(i=0;i<6;i++)em(C+(i>>1)*sd-sd,3,"·*"[i%2],(i-2.5)/2.5,-.3-R(0,3)/10,.15,5);
p=P(K);S(120);
for(wp=0;wp<5;wp++){o=wp<2|0;S(70)}o=0;
p=P();S(250);p=P(J);S(300);p=P(I);S(300);p=P();tx=[c.T(C,2,"!","warning",{b:1})];S(300);
p=P(W,O);em(x0+8,G-1,"♪",.5,-.5,0,6);S(350);
// 2. crouch, arms up: arcs shoot out of the ground
o=1;p=P(K);S(160);o=0;p=P(N,U);bl=1;for(lim=7;lim--;)S(55);S(250);bl=0;
// 3. four grooves, each faster; arcs ripple per bar, then per beat
[0,1,2,3].sort(()=>Math.random()-.5).forEach((m,j)=>{sp=6+j*6;go(mv[m],8,150-j*20,j<2?4:2)});
// 4. climax: hops, spin, hops, sparks
hot=1;bl=.3;sp=30;go(hop,8,75);sp=45;go(i=>{p={facing:FC[sd>0?i:12-i]}},13,45);go(hop,8,60);hot=0;
// 5. dead stop, crouch, big leap
sp=bl=0;L=[0,0,0,0];rq=[];p=P(I);S(220);p=P(J);S(220);o=1;p=P(K);S(260);sp=50;p=P(N,U);bl=1;
for(o=0;o>-3;)o--,S(50);
for(i=0;i<16;i++)em(C+R(-6,6),R(0,3),c.pick("✦*·+"),R(-10,10)/10,-R(3,9)/10,.12,R(8,14));
p=P(W,U);S(170,2);for(;o<0;)o++,S(50);o=1;p=P(K);S(160);o=0;
// 6. arcs sink, shake off, puddle
for(lim=0;lim<8;lim++){p=P(lim%2?K:N);S(80);sp*=.8}bl=0;
p=P(K);for(i=0;i<9;i++){dn=i/3+1|0;X=x0+i%2*2-1;em(X+(i%2?9:-1),G+R(0,1),"·",i%2?.8:-.8,-.3,.25,9);S(60)}X=x0;while(ps.length)S(60);
["▁▂▁","▂▃▂","▁▂▁"," ▁"].forEach((s,j)=>{for(i=0;i<3;i++)s[i]>" "&&tx.push(c.T(C-1+i,6,s[i],c.hsv(ph+i*60,.7,1)));p=P(N);S(j==1?400:200)});
p=P(J);S(260);p=P(I);S(260);p=P(W,O);em(x0+8,G-1,"♪",.5,-.5,0,6);S(400);
while(ps.length)S(80);
f.push({pose:"default",ms:300});return f});
