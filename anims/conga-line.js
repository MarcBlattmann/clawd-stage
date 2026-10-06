// Clawd calls a conga: colored friends dance in one by one and grab on, the line kicks across the stage, then the friends twirl and conga off and he tosses them his maraca.
$cdA("conga-line",{title:"Conga line",w:50},c=>{
var G=c.G,P=c.P,R=c.R,T=c.T,M=Math.round,E="left",H="right",U="one-up",f,i,k,b=4*R(0,1),ps=[],tx=[],rx=0,mar=0,rev=0,
n=c.clamp((c.W-30)/10|0,2,4),
xs=c.clamp(c.x,10*n+1,Math.min(c.mx-12,10*n+6)),
C="permission success autoAccept error chromeYellow".split(" ").sort(()=>R(-1,1)),q=0,
A={x:xs,o:0,c:"clawd_body",l:1,e:H},L=[A],
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
em=(x,y,t,k,v,h,l)=>ps.push({x,y,t,c:k,v,h,l}),
rc=()=>c.rainbow(R(0,9)),
nt=d=>em(d.x+R(1,6),G-1+d.o,c.pick("♪♫"),rc(),-.5,(R(0,4)-2)/4,R(4,7)),
sp=(x,y)=>{for(let j=4;j--;)em(x,y,c.pick("✦*·+"),rc(),(R(0,4)-2)/3,(R(0,6)-3)/2,3)},
say=(t,k,x=A.x+1)=>tx.push(T(x,G-2,t,k,{b:1})),
S=(ms,pr=tx,a=[])=>{tx=[];
 ps=ps.filter(p=>(pr.push(T(M(p.x),M(p.y),p.t,p.c,{z:-1})),p.x+=p.h,p.y+=p.v,--p.l>0));
 L.map((d,k)=>{k&&d.x>-9&&!d.h&&(d.l&&L[k-1].l&&L[k-1].o==d.o&&pr.push(T(d.x+8,G+d.o,"▄▄▄",rev?L[k-1].c:d.c)),a.push({x:d.x,offset:d.o,pose:d.p,color:d.c}))});
 mar&&pr.push(T(A.x+8,G-1+A.o,"●","error"));
 f.push({x:A.x,offset:A.o,pose:A.p,ms,props:pr,actors:a})},
// one "1-2-3-kick!" beat for the line; mv = columns per step
K=(ms,mv)=>{var s=b%4,sd=b>>2&1,V=L.filter(d=>d.l&&d.x>0);
 L.map((d,k)=>{if(d.l){d.p=P(k?rev?k<2&&b%8>4?H:E:H:A.e,k?rev?"down":U:s>2?"up":U,s<3?b%2?E:H:sd?E:H);
  s>2?tx.push(sd?T(d.x+8,6,"▀▘",d.c):T(d.x-1,6,"▝▀",d.c)):d.x+=mv}});
 if(s>2){V.map((d,j)=>j%2||nt(c.pick(V)));A.l&&tx.push(T(A.x+7+2*sd,G-2,"'","inactive"))}
 b++;S(s>2?ms*1.7|0:ms)};
f=c.walk(c.x,xs,{ms:(c.x-xs)**2>1600?22:32});
A.p=P(H);S(180);
A.p=P(H,U);mar=1;sp(xs+8,G-1);S(160);
for(i=0;i<6;i++){A.p=P(i%2?"wink":H,U);tx.push(T(xs+7+i%2*2,G-2,"'","inactive"));i%2&&nt(A);S(100)}
for(i=0;i<4;i++)K(115,0);
A.e=E;A.p=P(E,U);say("?","inactive",xs+3);S(450);
A.p=P("closed","up");A.o=1;S(140);A.o=0;
for(i=0;i<5;i++){A.p=P("open","up");say("conga!","warning");S(110)}
// friends dance or hop in from the left and grab the shoulder in front
for(k=1;k<=n;k++)L.push({x:-9,o:0,c:C[k],h:1,s:xs-10*k,y:R(0,1)});
L[1].h=0;A.e=H;
while(!L[n].l){
 L.map((d,k)=>{if(k&&!d.h){if(!d.l){d.x=Math.min(d.x+2,d.s);d.o=d.y&b%2?-1:0;d.p=P(H,"up",b%2?E:H);
   if(d.x==d.s){d.l=++q;d.o=0;rx=5;sp(d.x+9,G);em(d.x+9,G-1,"♥",d.c,-.4,0,6)}}
  (d.l&&rx<2||d.x>16)&&L[k+1]&&(L[k+1].h=0)}});
 A.e=rx>3?E:rx>1?"wink":H;rx--;
 K(100-5*q,0)}
// climax: the full line kicks in place, then kicks across the stage, "hey!"
A.e=H;
for(i=0;i<4;i++)K(84,0);
var xe=Math.min(c.mx,xs+12);
while(A.x<xe)K(76,1);
[1,0,-1,-1,0].map((o,i)=>{L.map(d=>{d.o=o;d.p=P(i>1?"open":"closed","up")});i>1&&tx.push(T(A.x-6,G-3,"hey!","warning",{b:1}));i==2&&sp(A.x-6,G-2);S(i>1?110:70)});
// Clawd lets go; the friends twirl and conga off left
rev=1;L.map(d=>d.l=0);A.p=P(E,U);S(200);
for(i=0;i<13+2*n;i++){L.map((d,k)=>{if(k){var o=i-2*k+2;d.p=o<0?P(H,U):o<13?{facing:FC[o]}:P(E)}});i%3||nt(L[R(1,n)]);S(45)}
for(k=1;k<=n;k++)L[k].l=1;
for(i=0;L[1].x>-9;i++){A.p=P(i<14?"open":E,i%4<2?"up":U);i<14&&say("bye!","text");K(70,-2)}
// he still has their maraca: toss it after them
A.p=P(E,U);S(300);A.p=P(H,U);say("!","warning",A.x+5);S(320);
A.p=P("closed","up");A.o=1;S(160);A.o=0;mar=0;
var x0=A.x+8,N=x0+4>>1,Y=i=>G-1-M(3*Math.sin(Math.PI*i/N));
for(i=1;i<=N;i++){A.p=P(E,i<4?"up":"down");tx.push(T(x0-2*i+2,Y(i-1),"·","subtle"),T(x0-2*i,Y(i),"●","error"));S(35)}
for(i=0;i<8;i++){i%3||em(R(0,3),G-1,c.pick("♪♫"),rc(),-.5,.3,6);i>1&&i<7&&say("thx!",C[1],0);A.p=P(i>4?"wink":E);S(120)}
while(ps.length)S(70);
f.push({pose:"default",ms:300});return f});
