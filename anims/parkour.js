// Full-width parkour: crate vault, wall run, canal leap, rail grind, flip, hero landing.
$cdA("parkour",{title:"Parkour",w:70},c=>{
var M=Math,rd=M.round,rn=M.random,sn=t=>M.sin(M.PI*t),W=c.W,mx=c.mx,f=[],P=[],O=[],H=Array(W+9).fill(0),
d=c.x<mx/2?1:-1,X=d>0?c.x:mx-c.x,sh=0,sk=0,n=0,tm=-1,tr=0,sp=W>120?2:1,j,k,o,u,
Y="warning",S="subtle",I="inactive",G="success",BL="#5aa0e6",B={b:1},Z={z:-1},R="right",L="left",U="up",C="closed",
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
tx=c.pick(["NEW PB!","FLAWLESS","10/10"]),
T=(u,y,t,cl,e)=>c.T((d>0?rd(u):W-rd(u)-t.length)+sh,y,t,cl,e),
Q=(e,a,ft)=>c.P(d<0&&{left:R,right:L}[e]||e,a,ft),
Qr=i=>Q(R,U,i%2?L:R),
A=(x,y,vx,vy,g,cl,l,gr=0)=>P.push({x,y,vx,vy,g,cl,l,gr}),
D=(u,w)=>{for(var q=6;q--;)A(q&1?u-1:u+w,6,(q&1?-.7:.7)*(.6+rn()),-rn()*.3,"░",I,4)},
hg=x=>M.max(...H.slice(x,x+9)),
F=(p,ms,o,pr)=>{var r=[];n++;
 O.map(b=>b.g&&b.dy||b.a.map(l=>{var y=l[0]+b.dy+sk;y>=0&&y<7&&r.push(T(b.u,y,l[3]?" "+l[1].substr(n%3,l[3])+" ":l[1],l[2]||b.cl,Z))}));
 tm<0||r.push(T(1,0,"◷"+(tm/1e3).toFixed(2),tr?"text":n%4<2?G:Y,B));tr&&(tm+=ms);
 P=P.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=q.gr,--q.l>0&&q.y<6.6));
 P.map(q=>q.y>-.5&&r.push(T(q.x,rd(q.y),q.g,q.cl,Z)));
 f.push({x:d>0?X:mx-X,pose:p,ms,offset:o,props:r.concat(pr||[])})},
Rn=to=>{for(;X<to;)X=M.min(to,X+sp),n%3||A(X+1,6,-.5,-.15,"·",S,3),F(Q(R,n%4<2&&"one-up",n%2?L:R),34+sp*3,0,[T(X-2,5,"≡",S)])},
J=(dx,of,pf,ms,ef,N=dx)=>{for(var x0=X,i=1,t;i<=N;i++)t=i/N,X=x0+rd(dx*t),F(pf(t,i),ms,M.min(rd(of(t)),-hg(X)),ef&&ef(t,i))},
cs=[...W>170?"cwcwg":W>110?"cwcg":"cwg"],gw=c.clamp(W/10|0,5,12),rl=c.clamp(W/8|0,8,22),
pr={c:11,w:9,g:8},po={c:5,w:6,g:gw-1},ru=mx-rl-7,fl=8,cx=0;
cs.map(k=>ru-=pr[k]+po[k]);fl+=ru%(j=cs.length);ru=ru/j|0;
cs.map(k=>{cx+=ru;u=cx+pr[k];cx=u+po[k];
 var h=k>"g"?4:k<"d"?c.R(2,3):0,w=k>"g"?3:h?4:gw;
 O.push({u,h,w,k,dy:-8,g:!h,cl:h>3?"#b5654a":"#c08a4a",a:h>3?[[3,"▀▀▀",I],[4,"▓▒▓"],[5,"▒▓▒"],[6,"▓▒▓"]]:
  h?[[7-h,"╔══╗"],[5,h>2?"╠══╣":"╔══╗"],[6,"╚══╝"]]:[[6,"▓"+" ".repeat(gw-2)+"▓",I],[6,"≈~~".repeat(5),BL,gw-2]]});
 H.fill(h,u,u+w)});
u=cx+1;O.push({k:"r",u,dy:-8,w:rl,cl:I,a:[[5,"═".repeat(rl)],[6," ║"+" ".repeat(rl-4)+"║ "]]});H.fill(1,u,u+rl);
// Jog to the start, the course thuds down, countdown.
for(;X>0;)X=M.max(0,X-2),F(Q(L,0,n%2?L:R),30);
F(Q(R),250);
for(k=0;k<3*O.length+6;k++){o=0;O.map((b,j)=>k<3*j||b.dy<0&&!(b.dy+=2)&&(o=1,D(b.u,b.w)));
 sh=o&&k%2*2-1;F(Q(o?C:R,o&&U),o?80:55);sh=0}
F(Q("wink"),300);
[..."321","GO!"].map((s,j)=>F(Q(R,j>2&&U),j>2?150:380,j<3?1:-1,[T(X+4-(j>2),2,s,j>2?G:Y,B)]));
tm=0;tr=1;
O.map(b=>{u=b.u;k=b.k;
 k=="c"&&(Rn(u-11),J(16,t=>-(b.h+.6)*sn(t),(t,i)=>Q(t>.4&&t<.6?"wink":R,t<.85&&U,i%2?L:R),40),D(X+1,7));
 // Wall run, perch, drop.
 if(k=="w"){Rn(u-9);[..."01122334"].map((o,i)=>{A(u-1,6-o,-.3,0,"·",S,4,.3);F(Qr(i),55,-o)});
  J(6,t=>-4,t=>Q(R,U),45);F(Q("wink",U),260,-4);F(Q(R),120,-4);
  J(9,t=>-4*M.min(1,2.2-2.2*t),t=>Q(t>.6?C:R,U,L),45);D(X+1,7);F(Q(C),60,1)}
 // Canal leap, rail grind, flip.
 k=="g"&&(Rn(u-8),F(Q(R),90,1),J(gw+7,t=>-3.5*sn(t),(t,i)=>Qr(i),40,(t,i)=>(i-3||A(u+gw/2,6,0,-1.1,"°",BL,7,.3),[T(X-3,4+rd(-3.5*sn(t)),"≡",S)])));
 if(k=="r"){for(;X<u+rl-2;)X++,A(X+1,5,-1-rn(),-.2-rn()*.6,c.pick("*✦·"),Y,5,.15),F(Q(n%8<5?R:"wink",U),W>120?28:36,-1,[T(X-4,3,"≡",S)]);
  var fo=t=>t-1-3.6*sn(t);d<0&&FC.reverse();
  J(fl,fo,(t,i)=>i>1&&i<15?{facing:FC[i-2]}:Q(i>14?C:R,U),50,t=>(A(X+4,3+rd(fo(t)),0,0,"·",Y,5),[]),16)}});
// Hero landing, PB, cleanup.
tr=0;
for(j=10;j--;)o=j&1?-1:1,A(X+4+o*5,6,o*(.8+rn()),-rn()*.2,"▒░"[j>>1&1],I,6),j<5&&A(X+4,5,rn()*2-1,-1-rn(),"•",S,7,.4);
for(sh of[1,-1])F(Q(C),60,1);sh=0;
F(Q(C),600,1);F(Q(),250,1);F(Q(),200);
for(j=0;j<W/5;j++)A(rn()*W,-rn()*6,rn()*.3-.15,.3+rn()*.2,c.pick("*✦•·♦"),c.rainbow(j),40);
for(k=0;k<14;k++)F(Q(k%5>2&&"wink",k%4<2?U:"one-up"),110,-(k%4==1),[T(X+1,2-(k%4==1),tx,k%2?G:Y,B)]);
F(Q(L),300);tm=-1;
for(k=0;k<24&&(sk<5||P.length);k++)sk<3&&k%4<1&&O.map(b=>D(b.u,b.w)),k%2&&sk++,F(Q(k<12&&L),60);
P=[];F("default",300);
return f});
