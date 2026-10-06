// A mirror appears; the reflection copies Clawd, starts lagging, falls for a fake-out jump, winks and walks out.
$cdA("mirror-mime",{title:"Mirror mime",w:50},c=>{
var G=c.G,P=c.P,R=c.R,M=Math.round,mo=R(0,1),f=[],ps=[],tx=[],H=[],L=0,Mg=0,fd=0,gl=-1,t=0,i,j,k,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
X=c.x,s=X>c.mx-17?-1:X<17?1:c.pick([1,-1]),Mx=X-3+14*s,R0=X+14*s,
E=s>0?"right":"left",Q=s>0?"left":"right",U="up",Y="warning",K="closed",O="open",
sw=e=>e==E?Q:e==Q?E:e,
mp=p=>p.facing?{facing:FC[12-FC.indexOf(p.facing)]}:P(sw(p.eyes),p.arms,sw(p.feet)),
A={x:X,o:0,p:P()},B={},
TOP="╔"+"═".repeat(13)+"╗",
T=(x,y,t,k,e)=>tx.push(c.T(x,y,t,k,e)),
q=(t,k)=>T(A.x+4,G-2,t,k||"text",{b:1}),
em=(x,y,t,k,h,v,n)=>ps.push({x,y,t,k,h,v,n}),
sp=(x,y,n)=>{while(n--)em(x,y,c.pick("✦✧*·"),c.pick([Y,"text"]),(R(0,6)-3)/3,-R(1,5)/8,R(3,6))},
pf=(q,d)=>(u,r)=>d<3?c.rgb(40+35*d,60+40*d,90+45*d):(u-2*r+q)%11?"rgb(150,185,230)":"rgb(230,240,255)",
S=(ms,n=1)=>{while(n--){t++;H.push({x:A.x,o:A.o,p:A.p});
 if(!B.own){var h=H[Math.max(0,H.length-1-L)];B.x=R0-h.x+X;B.o=h.o;B.p=mp(h.p)}
 var pr=tx,lo=Math.max(0,7-2*Mg),y,g;tx=[];
 if(Mg){pr.push(c.T(Mx+lo,2,TOP.slice(lo,15-lo),Y));
  for(y=3;y<Mg-1&&y<7;y++)pr.push(c.T(Mx,y,"║",Y),c.T(Mx+14,y,"║",Y));
  Mg>7&&pr.push(c.T(Mx+7,1,"✶",Y,{b:1}));
  if(gl>=0){for(y=3;y<7;y++){g=M(gl)+6-y;g>0&&g<14&&pr.push(c.T(Mx+g,y,"/","inactive",{z:-1}))}gl=gl>18?-1:gl+ms/45}}
 ps=ps.filter(p=>(p.x+=p.h,p.y+=p.v,p.v+=.12,pr.push(c.T(M(p.x),M(p.y),p.t,p.k)),--p.n>0));
 f.push({x:A.x,offset:A.o,pose:A.p,ms,props:pr,actors:fd&&!B.h?[{x:B.x,offset:B.o,pose:B.p,paint:pf(t,fd)}]:[]})}},
Z=(e,ms,a,ft)=>{A.p=P(e,a,ft);S(ms)},
ft=i=>i%2?"left":"right",
mv=[
()=>{for(i=0;i<6;i++)Z(i%2?K:O,130,i%2?0:U)},
()=>{[1,1,-1,-1,0,1,0].forEach(o=>{A.o=o;Z(o<0?O:E,o<0?100:80,o<0&&U)})},
()=>{for(i=0;i<8;i++)Z(i%2?E:Q,120,0,ft(i))},
()=>{FC.forEach(F=>{A.p={facing:F};S(45)})},
()=>{for(i=0;i<4;i++){A.x+=i%3?-s:s;Z(E,110,0,ft(i))}}],
fold=(a,b,d)=>{for(Mg=a;Mg!=b;Mg+=d)S(45)};
// 1. sparkles gather, the frame draws itself, the reflection fades in
for(i=0;i<7;i++){em(Mx+R(1,13),R(2,6),c.pick("✦✧·*"),c.pick([Y,"text"]),0,-.12,R(2,3));Z(i>3?E:O,80)}
fold(1,9,1);Mg=8;
sp(Mx+7,1,6);gl=0;A.o=1;Z(K,90,U);A.o=0;Z(E,200);
for(fd=1;fd<4;fd++)S(140);
// 2. is that me? blink, glance, step closer, wink: all copied
q("?");S(450);Z(K,110);Z(E,200);Z(Q,250);Z(E,120);
A.x+=s;Z(E,110,0,"left");Z(E,200);Z("wink",350);Z(E,120);
// 3. perfect sync: three random moves
mv.slice().sort(()=>Math.random()-.5).slice(0,3).map((m,n)=>{m();n==1&&(gl=0);Z(E,200)});
// 4. it starts to lag
L=1;q("♪");mv[0]();Z(E,130);q("?",Y);S(500);
L=2;mv[1]();Z(E,90);S(90);Z(K,150);q("??",Y);Z(E,450);
// 5. the test: jumps in sync, then a fake-out
L=0;
for(k=R(1,2);k>=0;k--){A.o=1;Z(E,k?140:220);if(k){A.o=-1;Z(O,150,U);A.o=0;Z(E,160)}}
B.own=1;B.o=-1;B.p=P(O,U);S(280);B.o=0;B.p=P(Q);S(80);T(B.x+8,G,"'","permission");S(500);
A.o=0;q("!","error");Z(E,500,U);
B.p=P(E);T(B.x+6,G-1,"♪","text");S(300);B.p=P(Q);S(220);
B.p=P("wink","one-up");T(B.x+7,G-1,"✧","text");S(500);B.p=P(Q);S(100);
// 6. the reflection strolls out of the mirror
A.p=P(E);for(i=0;s>0?B.x<c.W:B.x>-9;i++){j=(B.x-R0)*s;j==12&&[3,4,5,6].map(y=>em(s>0?Mx+14:Mx,y,"✧",Y,s/2,-.12,6));
 j=j>11?2:1;B.x+=s*j;B.p=P(i<6||mo?Q:E,i<6&&i>>1&1?"one-up":0,ft(i));
 j>1&&T(s>0?B.x-2:B.x+10,G+1,"≡","subtle");S(j>1?30:70)}
B.h=1;S(350);Z(K,110);Z(E,200);
// 7. empty glass: nothing waves back, so the mirror folds away
A.x+=s;Z(E,120,0,"left");gl=0;Z(E,200);mv[0]();q("?");Z(O,500);Z(E,200);
fold(8,0,-1);sp(Mx+7,2,8);A.o=1;Z(K,90,U);A.o=0;A.p=P(E);while(ps.length)S(70);
Z("wink",450);
f.push({pose:"default",x:A.x,ms:300});return f});
