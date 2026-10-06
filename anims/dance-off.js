// A purple rival drops in for a dance-off: every move gets one-upped on a sky scoreboard, a synced finale ties, they hug.
$cdA("dance-off",{title:"Dance off",w:50},c=>{
var f,G=c.G,P=c.P,R=c.R,M=Math.round,E="left",H="right",U="one-up",N="wink",K="closed",Sb="subtle",bg="#342e46",i,k,o,j,
x=c.clamp(c.x,0,c.mx-22),m=x+15,q=R(0,3),
A={x,o:0,p:P(),e:H,d:1,c:"clawd_body"},Z={x:x+22,o:-7,p:P(E),e:E,d:-1,c:"autoAccept"},
s=[0,0],fl,B,L,Lc="inactive",ps=[],tx=[],t=0,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
ft=i=>i%2?E:H,
T=(...a)=>tx.push(c.T(...a)),
rc=()=>c.rainbow(R(0,9)),
em=(x,y,t,k,v,h,n)=>ps.push({x,y,t,c:k,v,h,n}),
sp=(x,y,n,v)=>{while(n--)em(v?m+R(-24,24):x,y,c.pick("✦✧*·+"),rc(),v?-1:-R(3,10)/10,v?0:(R(0,8)-4)/3,R(3,6))},
nt=(a,l)=>em(a.x+(l?0:8),G-1+a.o,c.pick("♪♫"),rc(),-.5,l?-.4:.4,7),
ac=(a,q=t)=>({x:a.x,offset:a.o,pose:a.p,color:a.c,paint:a.r?(u,r)=>c.rainbow(u+r-q):void 0}),
S=(ms,n=1)=>{while(n--){t++;var pr=tx,a=ac(Z),fr=ac(A);tx=[];
ps=ps.filter(p=>(p.y+=p.v,p.x+=p.h,pr.push(c.T(M(p.x),M(p.y),p.t,p.c,{z:-1})),--p.n>0));
if(B){pr.push(c.T(m-4,0,"    :    ",Lc,{bg,o:1}),c.T(m-(L.length>>1),1,L,Lc));
for(j=0;j<2;j++)pr.push(c.T(m-3+5*j,0,(s[j]+"")[j?"padEnd":"padStart"](2),[A,Z][j].c,{bg:fl[j]-->0?"#96701a":bg,b:1,o:1}))}
a.front=1;fr.ms=ms;fr.props=pr;fr.actors=Z.h?[]:[a];f.push(fr)}},
// moves: [steps, flashy steps, (actor, step, flashy) => ms]; the rival always answers flashy
MV=[[8,12,(a,i,l)=>{a.p=P(l&&i%4==3?N:a.e,i%2?U:l&&"up",ft(i));a.o=l?-(i%2):0;(l||i%2)&&nt(a,i%4>1);return l?90:140}],
[9,13,(a,i,l)=>{o=a.o=(l?"5543210012345":"543223454")[i]-4;a.p=o>0?P(a.e):l&&o<0?{facing:FC[M((i-3)*12/7)]}:P(a.e,"up");o>0&&i>2&&T(a.x-1,6,"▒         ▒",Sb);return o>0?130:60}],
[8,12,(a,i,l)=>{var g=(i/(l?3:2)|0)%2?-a.d:a.d;a.x+=g;a.p=P(g>0!=!!l?H:E,l&&U,ft(i));l?T(g>0?a.x-2:a.x+10,G+1,"≡",Sb):i%2&&nt(a);return l?55:95}],
[14,27,(a,i,l)=>{var n=l?26:13;a.p=i<n?{facing:FC[i%13]}:P(N,l?"up":U);a.o=l&&i>12&&i<n?-1:0;l&&i%3==0&&sp(a.x+4,G+a.o,1);i%7==6&&nt(a);return l?40:70}]],
go=(n,l,w,cb)=>{var M=MV[n%4],ms;for(let i=0;i<M[l];i++){w.map(a=>{a.r=l;ms=M[2](a,i,l)});cb&&cb(i);S(ms)}w.map(a=>{a.o=a.r=0;a.p=P(a.e)})},
pt=(j,v,a)=>{s[j]+=v;fl[j]=5;em(a.x+3,G-2,"+"+v,a.c,-.34,0,7)};
f=c.x-x?c.walk(c.x,x):[];S(200);
for(o=-7;o<1;o++){Z.o=o;A.p=P(o>-4?H:"open");T(Z.x+4-(9+o>>1),6,"·".repeat(9+o),Sb,{z:-1});o<0&&o>-6&&T(Z.x+2,G+o-1,"¦    ¦",Sb);S(o<-5?160:45)}
Z.o=1;A.p=P(K,"up");A.o=-1;T(Z.x-3,6,"░▒           ▒░",Lc);T(x+4,G-2,"!","warning",{b:1});S(90);
Z.o=A.o=0;A.p=P(H);S(250);
for(i=0;i<5;i++){Z.p=P(i%2?N:E,i%2&&U);T(Z.x-1,G-2,"dance off?",Z.c);S(160)}
Z.p=P(E);A.o=1;S(200);A.o=0;A.p=P(N,U);for(i=0;i<3;i++){T(x,G-2,"bring it!",A.c);S(170)}
B=fl=[6,6];sp(0,6,4,1);A.p=P(H);
for(k=0;k<2;k++){L="round "+(k+1);
Z.p=P(E,U);S(300);Z.p=P(E);A.o=1;S(140);A.o=0;
go(q+k,0,[A]);
var a1=R(2,3)+k;pt(0,a1,A);sp(0,6,2,1);A.p=P(N,U);S(100,3);
A.p=P(H);Z.p=P(K);T(Z.x+2,G-2,k?"heh.":"pfft",Z.c);S(360);Z.p=P(E);S(110);
go(q+k,1,[Z],i=>A.p=P(i>4&&i<9?"open":H));
pt(1,a1+R(1,2),Z);Z.p=P(N,"up");sp(Z.x+4,G,6);sp(0,6,6,1);S(100,4);
Z.p=P(E);A.p=P(K);A.o=1;k&&em(x+8,G,"'","permission",.5,0,4);S(320);
A.o=0;A.p=P(k?N:E);S(200);A.p=P(H);S(100)}
L="final";Lc="warning";S(300);A.o=Z.o=1;S(150);A.o=Z.o=0;A.p=Z.p=P(N);S(200);
// final: unused moves in sync, both scores land on the same number at the last beat
var top=s[1]+R(2,4),b=[...s],g=0,F=MV[(q+2)%4][1]+MV[(q+3)%4][1],v;
for(k=2;k<4;k++)go(q+k,1,[A,Z],i=>{g++;for(j=0;j<2;j++)(v=b[j]+((top-b[j])*g/F|0))-s[j]&&(s[j]=v,fl[j]=2);sp(0,6,1,1)});
A.p=P(H);Z.p=P(E);S(250);T(A.x+4,G-2,"?",A.c,{b:1});T(Z.x+4,G-2,"?",Z.c,{b:1});S(400);L="tie!";
for(i=0;i<5;i++){Lc=i%2?"warning":"text";fl=[i%2,i%2];A.p=Z.p=P(i%2?"open":K,"up");sp(0,6,2,1);S(130)}
A.p=P(H);Z.p=P(E);S(180);
for(i=0;i<7;i++){A.x++;Z.x--;A.p=P(H,0,ft(i+1));Z.p=P(E,0,ft(i));S(70)}
for(i=0;i<7;i++){A.p=P(i%4==3?N:K,U);Z.p=P(K,"up");i%2&&em(A.x+8,G-1,"♥","error",-.5,0,6);S(140)}
B=0;for(i=-4;i<5;i+=2)em(m+i,0,"✦✧*·+"[i/2+2],rc(),R(2,6)/10,i/3,6);T(m-3,0,"* ✸ ✸ *","warning",{b:1});A.p=Z.p=P(N);S(220);
for(i=0;i<3;i++){Z.x++;Z.p=P(E,0,ft(i));S(80)}
for(i=0;i<4;i++){A.p=P(H,i%2&&U);Z.p=P(E,A.p.arms);S(140)}
Z.o=1;S(150);
for(o=-1;o>-8;o--){Z.o=o;Z.p="arms-up";T(Z.x+2,G+o+3,"¦    ¦",Sb);S(45)}
Z.h=1;[..."·✧✦"].map((g,i)=>em(Z.x+4,0,g,Z.c,0,0,7-2*i));A.p=P(H,U);S(350);A.p=P(N);while(ps.length)S(80);
f.push({pose:"default",ms:250});return f});
