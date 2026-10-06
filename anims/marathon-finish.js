// Finish line + crowd; Clawd sprints in with a bib, breaks the tape, wins a medal, celebrates, laps.
$cdA("marathon-finish",{title:"Finish line",w:60},c=>{
var f=[],R=c.R,P=c.P,W=c.W,G=c.G,M=Math,T=c.T,pk=c.pick,rb=c.rainbow,Z={z:-1},Y="chromeYellow",X="error",Q="text",U="subtle",H={b:1},I="inactive",V="warning",rn=M.random,
d=c.x*2<c.mx?1:-1,D=d>0,E=D?"right":"left",B=D?"left":"right",
L=D?W-R(13,16):10,xh=D?L-8:L,
lo=D?L-R(18,24):0,hi=D?W-3:L+R(16,22),
x=c.x,p=P(),o=0,sy=-2,K=0,tb=0,bl=0,ex=0,cr=[],pt=[],bb=0,my=-9,tt=0,u,k,sp,
num=""+R(10,99),fr=D?9:-1,mc=D?4:5,
AR=[[" o "],["\\o "," o/"],["\\o/"," o ","\\o/","_o_"]],
rp=(e,k)=>P(e,k&2?"one-up":"down",k&1?"left":"right"),
ml=r=>T(r>0?x-2:x+10,5,"≡",U),
fl=()=>{var m=pk(cr);return rn()<.4&&m.v?[T(m.u+1,1,"✦",Q,H)]:[]},
S=(ms,q)=>{var r=[],e,s,j,y;tt+=ms;
 if(ex&&rn()<ex*ms/300&&(e=pk(cr)).v)pt.push([e.u+1,1,-1,pk("♪♫"),e.c]);
 cr.map(m=>m.v&&r.push(T(m.u,2,(j=AR[ex])[(tt/(ex>1?110:200)+m.k|0)%j.length],m.c,Z)));
 s=M.max(lo,L-bl);j=M.min(hi+3,L+bl);j>s&&r.push(T(s,3,"═".repeat(j-s),I,Z));
 pt=pt.filter(e=>(rn()<.6&&(e[1]+=e[2],e[2]>0&&!e[5]&&(e[0]+=R(-1,1))),e[5]&&e[1]>6&&(e[1]=6),!(e[1]&-8)));
 pt.map(e=>r.push(T(e[0],e[1],e[3],e[4],Z)));
 for(j=0;j<K;j++)y=2+j,(y<4||y>5||!tb)&&r.push(T(L,y,y<4?"│":y>5?"▚":"┃",y==4?X:y<4?I:Q,y<4||y>5?Z:0));
 tb>0&&r.push(T(x+fr,4,D?"╲":"╱",X),T(x+fr,5,D?"╱":"╲",Q));
 sy>-2&&r.push(T(L-3,sy,"▚".repeat(8),my>8&&ex>1?rb(tt/120|0):Q),T(L-3,sy+1," FINISH ",Q,{b:1,bg:X,o:1}));
 bb&&r.push(T(x+(D?6:2),G+1+o,num,X,{bg:Q,b:1}));
 my>-9&&(y=my>8?G+1+o:my,r.push(T(x+mc-1,y,"╲ ╱","permission"),T(x+mc,y,"●",Y,H)));
 f.push({x,pose:p,offset:o,ms,props:r.concat(q||[])})};
// sign drops, tape unrolls, he notices
S(R(200,400));
for(;sy<0;)sy++,S(80);
p=P(E);
for(;K<5;)K++,S(60);
S(300,[T(x+4,G-1,"!",V,H)]);
// barrier + crowd pop up and wave
for(u=lo+1;u<=hi;u+=R(3,4))M.abs(u+1-L)>2&&cr.push({u,c:rb(R(0,9)),v:0,k:R(0,3)});
for(;bl<30;)bl+=3,S(35);
cr.sort(()=>rn()-.5).map(m=>{m.v=1;S(45)});
ex=1;S(700);p=P("wink");S(350);
// dash off to the start
p=P("closed","up");S(250);p=P(B);S(200);o=1;S(150);o=0;
for(k=0;D?x>-9:x<W;k++)x=c.clamp(x-2*d,-9,W),p=rp(B,k),S(35,[ml(-d)]);
// pistol, sprint back in with a bib
ex=0;bb=1;S(R(400,700));
u=D?0:W-1;S(90,[T(u,3,"✶",V,H)]);S(300,[T(u,2,"°",U)]);
sp=c.clamp(M.round(2600/M.abs(xh-x)),22,40);
for(k=0;x!=xh;k++){x+=d;u=M.abs(xh-x);ex=u<20?2:1;
 p=rp(u<4?"closed":E,k);
 S(sp,[ml(d)].concat(k%3?[]:[T(x+(D?-1:9),6,"·",U)]))}
// slow-mo chest into the tape, SNAP, confetti
p=P("closed","up");tb=1;S(200);x+=d;S(260);
tb=-1;ex=2;
for(k=0;k<12;k++)pt.push([L+R(-9,9),R(0,2),1,pk("*✦·+"),rb(R(0,9))]);
for(k=0;k<3;k++)pt.push([L-d*k,3,1,"~",X,1],[L+d-d*k*2,4,1,"~",Q,1]);
S(90,[T(x+fr,4,"✦",V,H),T(x+fr+d,5,"*",Y),T(x+fr,6,"·",V)].concat(fl(),fl()));
[35,40,45,55,65,80,100,120,150].map((m,i)=>{x+=d;p=P("closed","up",i%2?"left":"right");S(m,fl())});
o=1;p=P("closed");S(110);o=0;
for(k=0;k<4;k++)p=P(k%2?"closed":"open"),S(200,[T(x+fr,G+k%2,"°",U)]);
// medal drops around his neck
p=P();S(250,[T(x+mc,0,"✦",Y)]);
for(my=0;my<G+1;my++)p=P(my<4?"open":"closed"),S(75,[T(x+mc,my-1,"·",Y)]);
my=9;o=1;S(100);o=0;p=P("wink");S(200,[T(x+mc,G+1,"✦",Y,H)]);
// hops, fist pumps, camera flashes
for(k=R(2,3);k--;)[0,-1,-2,-2,-1,0].map((v,i)=>{o=v;p=P(i%3?"closed":"wink","up");S(v<-1?110:60,fl())});
for(k=0;k<5;k++)p=P("wink",k%2?"up":"one-up"),S(160,fl());
// victory lap; the set packs up while he's gone
for(k=0;D?x<W:x>-9;k++)x+=d,p=rp(E,k),S(40,[ml(d)]);
bb=0;my=-9;ex=1;S(400);ex=0;
cr.map(m=>{m.v=0;S(30)});
for(;bl>0;)bl-=3,S(30);
pt=[];for(;K>0;)K--,S(40);
for(;sy>-2;)sy--,S(70);
f=f.concat(c.walk(x,D?c.mx-R(3,8):R(3,8),{ms:55}));
f.push({pose:P("wink"),ms:400},{pose:"default",ms:200});
return f});
