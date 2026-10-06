// Clawd's shadow runs off; he chases it edge to edge, it vaults him and mimics him late; he fakes a nap, pounces, and it snaps back.
$cdA("shadow-chase",{title:"Runaway shadow",w:64},c=>{
var G=c.G,P=c.P,R=c.R,K=c.clamp,mx=c.mx,M=Math,rd=M.round,ab=M.abs,f=[],ps=[],tx=[],H=[],
d=c.x<mx/2?1:-1,L="left",Rt="right",C="closed",O="open",U="up",DN="down",OU="one-up",B="both",I="inactive",Y="chromeYellow",X="error",
E=v=>v>0?Rt:L,F1=E(d),F0=E(-d),gp=()=>ab(S.x-A.x),A={x:c.x,o:0,e:O,a:DN,f:B},S={o:0,e:O,a:DN,f:B,h:1},
sun=3,base=1,sl=0,lag=0,t=0,i,j,k,n,
SC=k=>c.rgb(k=74+k*10,k,k+20),
T=(x,y,s,k,e)=>tx.push(c.T(x,y,s,k||"text",e)),
Q=(o,s,k)=>T(o.x+4-(s.length>>1),G-2+o.o,s,k,{b:1}),
pt=(x,y,vx,vy,l,g,k)=>ps.push({x,y,vx,vy,l,g,k}),
D=(x,v)=>pt(x,6,v,-.3,4,"·░"),
mv=(o,v,i)=>{o.x+=v;o.f=i%2?L:Rt;o.e=E(v);T(v>0?o.x-1:o.x+9,5,"≡","subtle");i%3||D(v>0?o.x:o.x+8,-v/3)},
Z=(ms,n)=>{for(n=n||1;n--;){var q=++t,pr,h,s;H.push([A.o,A.e,A.a,A.f]);
 if(lag)h=H[M.max(0,t-1-lag)],S.o=h[0],s=h[1],S.e=s==F0?F1:s,S.a=h[2],S.f=h[3];
 sun>=0&&T(d>0?1:c.W-2,rd(sun),"☀",Y,{b:1});
 base&&T(A.x-1,6,"▂▂  ▂▂▂  ▂▂",SC(0));
 sl&&T(d>0?A.x+10:A.x-1-sl,6,"▂".repeat(sl),SC(0),{z:-1});
 ps=ps.filter(p=>(p.x+=p.vx,p.y+=p.vy,T(rd(p.x),rd(p.y),p.g[p.l&1],p.k||I,{z:-1}),--p.l>0));pr=tx;tx=[];
 f.push({x:A.x,offset:A.o,pose:P(A.e,A.a,A.f),ms,props:pr,
  actors:S.h?[]:[{x:S.x,offset:S.o,pose:P(S.e,S.a,S.f),front:S.fr,paint:(u,r)=>SC((u+r+q)%3)}]})}},
// shadow runs to edge e, taunts; Clawd follows to gap g
run=(e,g,v)=>{for(v=e>A.x?1:-1,i=0;S.x-e||gp()>g;i++){
 S.x-e?mv(S,K(e-S.x,-2,2),i):(S.e=E(A.x-S.x),S.f=B,S.a=i%4<2?U:DN,S.o=-(i%4==1),Q(S,"nyah",I));
 k=i>2&&K(gp()-(S.x-e?13:g),0,i%3?2:1);k?(mv(A,k*v,i),A.a=i%2?U:OU):(A.f=B,A.a=DN,A.e=E(S.x-A.x),i<4&&Q(A,"!?",X));Z(n)}};
// 1. sunrise: humming, the shadow stretches, twitches
for(i=0;i<12;i++){sun=3-i*3/11;sl=i+2;A.e=i==8?C:O;T(A.x+7,3-(i>>1)%2,"♪♫"[(i>>2)%2]);Z(110)}
A.e=F1;for(i=0;i<4;i++){sl=13+i%2*2;i&&Q(A,"?");Z(110)}
// 2. it peels off the ground, giggles
S.h=0;S.x=A.x+d*12;S.e=F0;
[13,3,11,2,7,1,3,0,0,0].map((v,j)=>j%2?(S.o=v,Z(120)):sl=v);base=0;
Q(A,"?");Z(450);S.e="wink";S.a=OU;Q(S,"hehe",I);Z(450);
A.o=-1;A.a=U;A.e=O;Q(A,"!",X);Z(130);A.o=0;A.a=DN;Z(70);
// 3. it bolts to the far edge; chase!
k=d>0?mx:0;n=K(rd(2500/(ab(k-A.x)+9)),25,50);run(k,11);
// 4. cornered, it vaults him
S.o=1;S.e=F0;S.a=DN;A.e=F1;Z(180);k=S.x;S.a=A.a=U;
for(i=1;i<13;i++){S.x=k-rd(23*d*i/12);S.o=-rd(4*M.sin(M.PI*i/12));A.e=E(S.x-A.x);A.o=+(gp()<6);
 i<5&&Q(A,"!!",X);T(S.x+4+5*d,G+S.o+1,"~","subtle");Z(55)}
A.o=0;A.a=DN;S.o=1;D(S.x,-.4);D(S.x+8,.4);Z(90);S.o=0;
// 5. back across; he runs out of puff
run(d>0?0:mx,24);
// 6. wave, hop: it copies a beat late
lag=3;
for(i=0;i<4;i++){A.e=i%2?C:F0;i%2&&(Q(A,"huff",I),pt(A.x+4+4*d,3,d*.4,.3,3,"''","permission"));Z(150)}
A.e=F0;Q(A,"?");Z(400);[OU,DN,OU,DN].map(a=>{A.a=a;Z(120,3)});
Q(A,"??",Y);Z(350);[1,0,-1,-2,-1,0].map(o=>{A.o=o;A.a=o<0?U:DN;Z(80)});Z(80,3);
// 7. fake nap: it dozes too; tiptoe over
Q(A,"!",Y);A.e="wink";Z(350);A.e=C;
for(i=0;i<4;i++){i%2||pt(A.x+6,3,.3,-.4,5,"zZ");Z(130)}
for(i=0;gp()>11;i++){A.x-=d;A.f=i%2?L:Rt;i<6&&Q(A,"shh",I);i%4||pt(S.x+4,3,.2*d,-.35,5,"zZ");Z(95)}
// 8. pounce! tumble in a dust cloud
lag=0;A.f=B;A.e=F0;A.a=U;A.o=1;Z(150);n=S.x;k=n+3*d;
for(i=0;A.x-k;i++){A.x+=K(k-A.x,-2,2);A.o=ab(k-A.x)>2?-2:-1;i&&(S.e=O,S.a=U,S.f=B,Q(S,"!",I));Z(55)}
A.o=0;
for(i=0;i<10;i++){A.x=k-(i%3==1)*d;S.x=n+d*(i%3);S.fr=i%2;S.o=-(i%4==2);A.e=i%2?C:F0;A.a=i%2?U:OU;S.a=i%2?OU:U;S.e=F1;
 for(j=0;j<4;j++)T(k+R(-4,12),R(3,6),"░▒"[j%2],I,{z:-1}),j<2&&T(k+R(0,8),R(1,2),"✦*"[j],Y);Z(60)}
// 9. snap! back under his feet; dust off
S.fr=0;A.x=k;A.e=S.e=C;A.a=S.a=DN;for(i=1;i<4;i++){S.o=i;S.x=rd(n+(k-n)*i/3);Z(70)}S.h=1;base=1;
T(A.x-2,6,"✦           ✦",Y);Q(A,"snap!",Y);Z(160);A.e=O;Z(250);
for(i=0;i<4;i++){A.a=i%2?DN:OU;A.e=C;Z(120)}A.e="wink";A.a=OU;Z(450);A.a=DN;
// 10. sunset: it stretches, foot on it, dark
for(i=0;i<9;i++){sun=i*3/8;sl=i;A.e=i>4?F1:O;i==6&&Q(A,"!",X);A.f=i>6?F1:B;Z(110)}
sun=-1;base=sl=0;A.f=B;D(A.x-1,-.4);D(A.x+9,.4);Z(90);A.e=O;while(ps.length)Z(80);A.e="wink";Z(350);
f.push({x:A.x,pose:"default",ms:200});return f});
