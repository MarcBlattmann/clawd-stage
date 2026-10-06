// Blindfolded, Clawd zigzags the break across a full-width pool table; all nine balls drop one by one.
$cdA("billiards",{title:"Trick shot",w:64},c=>{
var W=c.W,R=c.R,T=c.T,P=c.P,K=c.clamp,Ma=Math,M=Ma.round,A=Ma.abs,rn=Ma.random,
FE="#20703f",Y="chromeYellow",WD="#7a4a24",LT="#f0e6c8",TR="#54a068",
H=W>>1,X=W-3,E=-1,F=0,D,aN=0,cu=0,st=0,bf=0,bg=0,Tb=1e9,BE,BP,
A0=M(W*.66),x=K(c.x,1,3),cb=x+18,
f=c.walk(c.x,x,{ms:K(1500/(A(c.x-x)+1)|0,20,50)}).filter((q,i)=>A(c.x-x)<60||i%2),
PO,OF=0,XP=[],B=[],TL=[],CF=[],AL=[],k,n,Q,O,mk,hp=0,d,nx,tn,
PL=[[1,1],[X+1,1],[X+1,6],[H,1],[H,6]],
CL="48 222 0 275 25 185 330".split(" ").map(h=>c.hsv(+h,.8,.95)).concat("#2c2c2c","#fff0a0"),
sg=()=>rn()<.5?1:-1,
// path folding = cushion bounces
fo=(u,a,L)=>{var Z=2*L,v=((u-a)%Z+Z)%Z;return a+(v>L?Z-v:v)},
im=(p,a,L,t)=>{var Z=2*L,q=2*a-p,u=p+Z*M((t-p)/Z),v=q+Z*M((t-q)/Z);return A(u-t)<A(v-t)?u:v},
// 8 subrows on rows 0-3
bs=(s,i)=>s%7==0&&(i<2||i>E-2||A(i-H+.5)<1)||s%5==1&&(i==0||i==E)?"#121212":s%7==0||!i||i==E?!s&&i*8%(W-1)<8?LT:WD:FE,
px=(i,s,k)=>{if(i>=0&&i<=E)D[s*W+i]=k},
S=ms=>{var p,r,i,a,q,n,k,u;D={};
 AL.slice(0,aN).map(a=>px(a[0],a[1],TR));
 TL.map((k,j)=>px(x+10+j,7,k));
 if(cu)for(i=x+9;i<=cu;i++)px(i,6,i==cu?"permission":i<x+11?"#38221a":"#e2c286");
 if(F-Tb>>>0<3)for(k=1;k<6;k++)px(A0-3+A(k-3),k,F>Tb?Y:LT);
 CF.map(q=>{q.s+=q.v;q.s>=0&&q.s<8&&px(q.i,q.s|0,q.k)});
 B.map(m=>{if(!m.v)return;k=F-m.t1-m.h;
  if(k>0)return k<4&&px(m.g[0],m.g[1]<3?0:7,k<3?m.c:LT);
  var t=K((F-m.t0)/(m.t1-m.t0),0,1),e=(2*t-m.q*t*t)/(2-m.q);
  t>0&&t<1&&m.l&&px(m.l[0],m.l[1],TR);
  m.l=[M(fo(m.a+(m.X-m.a)*e,1,X)),M(fo(m.b+(m.Y-m.b)*e,1,5))];px(m.l[0],m.l[1],m.c)});
 if(E!=BE)for(BE=E,BP=[],r=0;r<4;r++)for(i=0,n=0,q="";i<=E+1;i++){a=i>E?"":bs(2*r,i)+" "+bs(2*r+1,i);
  if(a!=q){n&&(u=q.split(" "),BP.push(T(i-n,r,"▀".repeat(n),u[0],{bg:u[1],z:-1})));q=a;n=0}n++}
 p=BP.slice();
 for(k in D)r=k/W>>1,i=k%W,p.push(T(i,r,"▀",D[2*r*W+i]||bs(2*r,i),{bg:D[2*r*W+W+i]||bs(2*r+1,i),z:-1}));
 st&&p.push(T(x+1,6,"▟▀▀▀▀▀▙",WD));
 bf&&p.push(T(x+2,4+OF,"▀▀▀▀▀▀","error",{bg:"clawd_body"}));
 bg&&p.push(T(x+4,3+OF,"!",Y,{b:1,bg:FE}));
 f.push({x,pose:PO,offset:OF,ms,props:p.concat(XP)});F++};
mk=(a,b,c,m={a,b,c,X:a,Y:b,t0:1e9,t1:2e9,q:0,h:1e9})=>B.push(m)&&m;
"031214212532344323".replace(/../g,(s,k)=>mk(A0+ +s[0],+s[1],CL[k/2]));
Q=mk(cb,6,"#f5f5eb");
// unroll, rack
PO=P("right","up");
while(E<W-1)E=Ma.min(W-1,E+(W>>4)+1),S(30);
PO=P("right");S(200);
B.map(m=>{m.v=1;S(m==Q?250:55)});
// step up, aim
st=OF=1;PO=P();S(140);OF=-2;S(70);OF=-1;S(160);
PO=P("right","one-up");
for(cu=x+9;cu<x+17;cu++)S(40);cu--;
n=K(M((A0-cb)/1.7),12,50);
Q.X=A0-1;Q.Y=im(3,1,5,6-(A0-1-cb)*.8);
for(k=0;k<=n;k++)AL.push([M(fo(cb+(Q.X-cb)*k/n,1,X)),M(fo(6+(Q.Y-6)*k/n,1,5))]);
for(aN=0;aN<=n;aN+=2)S(30);
S(400);aN=0;S(120);aN=n+1;S(160);aN=0;
// blindfold, strike
PO=P("wink","one-up");S(300);
bf=1;PO=P("closed","one-up");S(450);
for(k=0;k<3;k++)cu--,S(140);
S(420);cu=x+17;S(40);
Q.t0=F;Tb=Q.t1=F+n;
while(F<Tb)cu=F-Q.t0<5?x+18:0,S(28);
// break: a pocket, path and drop time per ball
n=F+R(6,9);
O=[..."01234567"].sort(()=>rn()-.5).concat(8).map((j,o)=>{var m=B[j],g=c.pick(PL),l=o>7,L;
 m.t0=Tb+m.a-A0;m.t1=n+=l?R(20,26):R(7,12);L=(m.t1-m.t0)*(l?6:R(8,14))*W/800;
 m.g=g;m.q=l?1:.7;m.h=l?6:1;
 m.X=im(g[0],1,X,m.a+L*(rn()<.7?1:-1)*R(5,9)/10);
 m.Y=im(g[1],1,5,m.b+sg()*((L*L-(m.X-m.a)**2)**.5||0));return m});
Object.assign(Q,{a:A0-1,b:3,t0:Tb,t1:Tb+M(W*.3)+36,q:1,X:2*W-4-cb,Y:im(6,1,5,3+sg()*W*.2)});
while(F<n+12){d=O.find(m=>F-m.t1-m.h==1);nx=O.find(m=>F<=m.t1+m.h);tn=nx==B[8]&&F>n-12;
 d&&(hp=4,TL.push(d.c),bf&&(bf=0,bg=6));
 OF=hp==4||tn?-2:-1;
 PO=P(bf?"closed":nx&&nx.l[0]<x+4?"left":"right",hp>1?"up":"down",tn?"left":"both");
 hp&&hp--;bg&&bg--;S(34)}
// perfect clear
for(k=0;k<W/3;k++)CF.push({i:R(0,W-1),s:-rn()*16,v:.25+rn()*.3,k:c.rainbow(k)});
for(k=0;k<36;k++){OF=k<6?-"233210"[k]:-(k>>2&1);k==2&&(st=0);
 PO=P(k%4<2?"wink":"open",k&2?"up":"one-up",OF?"both":k&2?"left":"right");
 XP=k>3&&k<34?[T(H-8,1,"★ PERFECT CLEAR ★",c.rainbow(k),{b:1,bg:FE})]:[];S(k<6?70:90)}
XP=[];CF=[];OF=0;PO=P("right");S(250);
while(E>=0)E-=(W>>4)+1,S(30);
PO="default";S(300);
return f});
