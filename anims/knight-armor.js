// Armor flies onto Clawd; a tiny dragon flames his shield, then they make friends.
$cdA("knight-armor",{title:"Knight",w:48},c=>{
var M=Math,R=c.R,T=c.T,G=c.G,x=c.clamp(c.x,2,c.mx-16),f=c.walk(c.x,x),
SI="#c8ccd8",Y="chromeYellow",GR="success",RD="error",BL="permission",FM="fastMode",DN="down",IN="inactive",O="open",Z="closed",RT="right",LT="left",UP="up",WK="wink",TX="text",
co=0,ey=O,ar=DN,hl=0,sh=0,sw=0,vs=0,sc=-99,dg=0,dd=0,de=RD,fl=0,fy=0,U=[],n=0,q,k,i,D="22100012",E="10001222",sd=c.pick([-15,17]),
Bu=(u,v,m,g,C)=>{while(m--)U.push([u,v,R(-9,9)/10,-R(2,8)/10,R(3,6),g||"✦*·",C||Y,.2])},
Sm=(u,v,m,g,h,y,C)=>{while(m--)U.push([u+R(-1,1),v,R(-h,h)/10,-y,R(3,6),g,C||IN,0])},
B=(u,v,k,p,j)=>{q.push(T(u,v,"┼",Y));for(j=1;j<3;j++)q.push(T(u+(D[k]-1)*j,v+(E[k]-1)*j,"─╱│╲"[k%4],SI,{b:1}));p&&q.push(T(u+1-D[k],v+1-E[k],"•",Y))},
H=(u,v)=>q.push(T(u,v,"▗▟███▙▖",SI),T(u+3,v-1,"▟▀",RD)),
K=(u,v)=>q.push(T(u,v," ✚ ",Y,{bg:BL,o:1}),T(u,v+1,"▜█▛",BL)),
PF=(s,v)=>(C,r,a=C+r<s)=>C+r==s?TX:v&&!r&&C>1||a&&r==1&&C>1&&C<7?SI:a&&r>1?IN:void 0,
S=(ms,ex,j,u,v)=>{n++;q=[];
U=U.filter(z=>{z[0]+=z[2];z[1]+=z[3];z[3]+=z[7];var L=z[4]--;q.push(T(M.round(z[0]),M.round(z[1]),z[5].slice(-L)[0],z[6]));return L>1});
hl&&H(x+1,G-1+co);sh&&K(x+9,G+co-(ar>DN));sw&&(sw[0]?B(...sw,1):B(x,G-1+co,2));fy&&fy[3](...fy);
if(dg){u=dg[0];v=dg[1]-(dg[2]&&n>>2&1);q.push(T(u+2,v,n>>1&1?"▚▞":"▞▚",GR),T(u,v+1,dd?"▗▄▄▟█▶":"◀█▙▄▄▖",GR),T(u+(dd?4:1),v+1,"•",de,{bg:GR}));
for(j=0;j<fl;j++)q.push(T(u-1-j,v+1,j==fl-1&&n%2?"*":"▓▒░░"[j],[Y,FM,RD,RD][j]))}
f.push({x,offset:co,pose:c.P(ey,ar),ms,paint:PF(sc,vs),props:q.concat(ex||[])})},
A=(e,ms,o,ex)=>{ey=e;co=o|0;S(ms,ex)},
L=(sx,sy,tx,ty,a,cb,m,j,t)=>{for(m=M.max(M.abs(tx-sx),M.abs(ty-sy),1),j=0;j<=m;j++)t=j/m,cb(M.round(sx+(tx-sx)*t),M.round(sy+(ty-sy)*t-a*4*t*(1-t)),(86-m+j)%8,j)},
Fy=(d,sx,sy,tx,ty,a)=>{L(sx,sy,tx,ty,a,(u,v,k)=>{fy=[u,v,k,d];Sm(u+1,v,1,"✧·",0,0,Y);A(u<x?LT:u>x+5?RT:O,35)});fy=0},
Sn=(u,v)=>{Bu(u,v,7);A(Z,60,1);A(O,110)},
W=d=>{ar=DN;sw=[x-1,G-1,6];Sm(x-1,G+2,3,"·",8,0);S(80);sw=d||[x-1,G,6];ar=d?UP:DN},
Sw=(a,b,d)=>{for(sc=a;sc!=b;sc+=d){Bu(x+sc,G+1,1,"✦·",TX);S(40)}sc=d*99},
X=(u,v,t,C)=>[T(u,v,t,C||Y,{b:1})];
// Summon.
A(LT,300);A(RT,300);ar=UP;Bu(x+4,G-1,8);A(WK,120,-1);A(O,250);ar=DN;S(150);
// Armor.
Fy(H,x+sd,-2,x+1,G-1,1);hl=1;Sn(x+4,G-1);A(WK,R(300,450));
Fy(K,x+24,-2,x+9,G,1);sh=1;Sn(x+10,G);ar="one-up";A(RT,R(300,450));ar=DN;
Fy(B,x-1+R(-4,4),-4,x-1,G,0);sw=[x-1,G,6];Sm(x-1,G+2,6,"·",8,0);A(Z,80,-1);A(LT,R(400,600));
// Knight!
W(2);A(O,150);Sw(-1,11,1);Bu(x+4,G-2,12,"★✦*·");A(WK,90,-1);A(WK,R(500,700));ey=O;W(0);S(R(300,500));
// Dragon.
L(M.min(c.W+1,x+40),-3,x+16,G-1,0,(u,v,a,j)=>{dg=[u,v,1];j%7||Bu(u-1,v+1,2,"*·",FM);A(RT,45,0,j<9&&X(x+4,G-3,"!"))});
A(Z,70,-1);A(RT,200);
// Face-off.
W(2);S(150);vs=1;Bu(x+4,G,4,"✦·",TX);S(200);
for(k=0;k<R(8,12);k++){k%4||Sm(x+16,G-1,1,"°°·",2,.3);S(90)}
// FWOOSH.
dg=[x+17,G-1,0];S(R(250,400));dg[0]--;
for(k=1;k<13;k++){fl=M.min(k,4);k>3&&Bu(x+12,G,2,0,k%2?Y:RD);A(k>2?Z:RT,55)}fl=0;
Sm(x+10,G-2,4,"▒░·",2,.3);A(RT,300,0,X(x+11,G-1,"✦",TX));
dg[2]=1;Sm(x+15,G,2,"°°·",3,.3);S(300);S(R(300,500),X(x+19,G-3,"?"));
// Friends.
vs=0;A(O,250);W(0);S(150);A(WK,450);de=Y;A(RT,300,0,X(x+17,G-2,"♥",RD));
L(x+16,G-1,x+2,G-3,2,(u,v)=>{dg=[u,v,1];A(u>x+5?RT:O,55)});
for(k=0;k<8;k++){i=k%2;dg=[x+2,G-3-i,0];ar=i?UP:DN;i||Sm(x+R(2,7),G-3,1,"♥♥·",2,.25,RD);A(i?WK:Z,i?110:140,-i)}
ar=DN;A(O,300);
// Bye.
dd=1;L(x+2,G-4,x+26,-3,-2,(u,v,a,j)=>{dg=[u,v,1];ar=j>>2&1?"one-up":DN;A(RT,50)});dg=0;ar=DN;S(300);
// Unarm.
Sw(11,-2,-1);sw=0;Fy(B,x-1,G,x-1+R(-6,6),-4,0);sh=0;Fy(K,x+9,G,x+24,-3,1);hl=0;Fy(H,x+1,G-1,x+sd,-3,1);
ey=WK;while(U.length)S(70);A(O,300);
return f});
