// Pirate Clawd: hat + eye patch, "Arr!", reads a treasure map, digs at the X, a chest rises and spills gold.
$cdA("pirate-treasure",{title:"Pirate treasure",w:50},function(c){
var R=c.R,T=c.T,P=c.P,M=Math.round,U=[],t=0,X=c.clamp(c.x,0,c.mx-26),D=X+R(8,11),K=D+11,Q=K+8,f=c.walk(c.x,X),
hy=-9,pt,mp=0,sh=0,xm,pl,md=0,cy=9,co=0,cj=0,ge,ar,ft,i,k,q,s,L,RT="right",CL="closed",O="open",
B="#9a5b2a",Y="chromeYellow",DT="#a8743e",H="#4c4c70",PA="#ead8a8",Z={bg:"clawd_body"},
MP=["~♣  ▲▲  ~~","~ ·····╮ ~","~~ ♣   ✕ ~"];
// particle [x,y,vx,vy,life,life0,glyphs,color,gravity,coin 1 flying/2 landed]
function sp(x,y,u,v,l,s,C,g,k){U.push([x,y,u,v,l,l,s,C,g||0,k])}
function dt(x,n,s){for(var k=0;k<n;k++)sp(x+R(-1,1),6,R(-6,6)/10,-R(3,7)/10,300,s||"•·",DT,.2)}
function G(x,y){sp(x,y,0,-.3,400,"✦✧·",Y)}
function S(x,y,s){return[T(x,y,s,"text",{b:1})]}
// beat: eyes, ms (<=90ms frames), offset, props; draws the scene
function A(e,ms,o,ex){o|=0;
for(var m=Math.ceil(ms/90),d=M(ms/m);m--;t+=d){
var h=4+o,bk=[],pr=[],w,s,x=K-3+cj;
U=U.filter(function(p){var a=d/50;
p[9]>1||(p[0]+=p[2]*a,p[3]+=p[8]*a,p[1]+=p[3]*a,p[9]&&p[1]>5.5&&(p[1]=6,p[0]=M(p[0]),p[9]=2));
return(p[4]-=d)>0&&(p[9]>1?bk:pr).push(T(M(p[0]),M(p[1]),p[6][(1-p[4]/p[5])*p[6].length|0],p[7],{z:p[9]>1?-1:0}))});
if(pl)for(w=K-2;w>X+8;w-=2)bk.push(T(w,6,"·",PA));
xm&&bk.push(T(K,6,"✕",t%240<120?"error":Y,{b:1}));
for(q=0;q<2;q++)(w=md&&(q?(md>2)*(md*2-3):md*2+1))&&bk.push(T(Q-(w>>1),6-q,"▄"+Array(w-1).join("█")+"▄",DT));
sh>3&&bk.push(T(Q,3,"┬",DT),T(Q,4,"│",DT));
if(cy<9)pr.push(T(x,cy-co,"▗▄▄▄▄▄▖",B),T(x,cy+2,"█     █",Y,{bg:B,o:1}),T(x,cy+1,co?"█●"+(t%240<120?"✦●●":"●●✦")+"●█":"█══●══█",Y,{bg:B}));
co&&pr.push(T(x,cy,"▀▀▀▀▀▀▀",B,{bg:t%200<100?Y:"#fff0a0"}));
hy>-9&&pr.push(T(X+2,w=hy+o,"▄█ █▄",H),T(X+4,w,"✕","text",{bg:H}),T(X,w+1,"▙▄█████▄▟",H));
pt&&pr.push(T(X+2+(e==RT),h,"●","#202020",Z));
ge&&pr.push(T(X+6,h,"$",Y,Z));
if(mp)for(q=0;q<3;q++)pr.push(T(X+9,w=h-2+q,"▐",B),T(X+9+mp,w,"▌",B),T(X+10,w,MP[q].slice(0,mp-1),"#6b3e1e",{bg:PA,o:1}));
mp>8&&pr.push(T(X+17,h,"✕",t%300<150?"error":B,{bg:PA,b:1}));
if(sh%4)for(s=sh<3?"\\\\▼":"//▲",q=0;q<3;q++)pr.push(T(X+9+q,h+(sh<3?q:-q),s[q],q>1?"#c8c8d8":DT));
f.push({x:X,offset:o,ms:d,pose:P(e,ar||(mp||sh%4?"one-up":"down"),ft),props:bk.concat(pr,ex||[])})}}
// hat drops on, patch, "Arr!"
A(O,200);
for(hy=-1;hy<2;hy++)A(O,70);
G(X-1,4);G(X+9,4);A(CL,110,1);A(O,250);A(CL,120);
pt=1;G(X-1,4);A(O,300);
L=c.pick(["Arr!","Arrr!"]);ar="one-up";
for(k=1;k<=L.length;k++)A(O,70,0,S(X+10,3,L.slice(0,k)));
L=S(X+10,3,L);A(CL,120,-1,L);A(O,450,0,L);ar=0;
// the map: X blinks, "!"
for(mp=2;mp<11;mp++)A(RT,mp<3?250:55);
A(RT,350);A(CL,90);A(RT,250);
A(O,120,-1,S(X+4,0,"!"));A(RT,400,0,S(X+4,1,"!"));
for(;mp>1;mp--)A(RT,30);
mp=0;G(X+9,3);A(O,200);
// follow the dotted path to the X
xm=pl=1;G(K,5);A(RT,450);
while(X<D)X++,ft=X%2?"left":"right",A(RT,80);
ft=0;A(O,250);
// dig: stab, lift, fling dirt onto the mound
pl=0;sh=2;G(X+10,4);A(RT,300);
for(i=0;i<3;i++){
md=i;sh=2;A(RT,R(90,180));
xm=0;dt(K,3);A(RT,150,1);
A(RT,90,0,[T(X+12,5,"●",DT)]);
sh=3;for(k=0;k<5;k++)sp(K+R(0,1),1,R(7,12)/10,-R(3,7)/10,600,"●•·",DT,.25);
ar="up";A(CL,100);A(RT,160);ar=0;}
// CLONK! toss the shovel, hop back, a chest rises
md=3;sh=2;A(RT,200);
L=S(K-3,1,"CLONK!");
for(k=0;k<5;k++)sp(K,5,R(-10,10)/10,-R(2,8)/10,300,"✦*·",Y);
A(CL,90,1,L);A(O,500,0,L);
sh=0;sp(X+10,3,(Q-X-10)/8,-1.2,400,"/─\\│/─\\│",DT,.3);ar="up";A(O,400);ar=0;
sh=4;A(RT,150);
dt(K,3);A(O,250);
for(k=0;k<3;k++)X--,A(RT,70,-(k<2));
for(cy=7;cy>4;)cy--,dt(K-4,2),dt(K+4,2),A(RT,170);
A(RT,250);A(CL,90);A(O,200);A(RT,200);
for(k=0;k<7;k++)cj=k%2*2-1,A(RT,50);
cj=0;A(RT,200);
// lid opens: beams, coins, glitter, gold eye, hops
ar="up";
for(co=k=1;k<5;k++){for(L=[],q=1;q<=Math.min(k,3);q++)s=Array(q+1).join(" "),L.push(T(K-1-q,3-q,"\\"+s+"│"+s+"/",Y));A(CL,70,0,L)}
for(k=0;k<32;k++){
k<22&&sp(K+R(-1,1),3,R(-12,12)/10,-R(10,16)/10,1e6,"●",Y,.3,1);
k%2||sp(K+R(-3,3),3,R(-4,4)/10,-.3,R(400,900),"✦✧*·",c.pick([Y,"text","#ffe680"]));
ge=k>8;A(ge?O:CL,60,k>14?[0,0,-1,-1,0,0][k%6]:0)}
// coins twinkle out, chest sinks, mound pours back
ar=ge=0;U.forEach(function(p){p[9]>1&&(p[6]="●✦✧·",p[4]=p[5]=R(300,900))});
A("wink",450);
co=0;dt(K-4,1,"·");dt(K+4,1,"·");A(RT,250);
for(;cy<7;cy++)dt(K,2),A(RT,140);
cy=9;sh=0;sp(Q,3,(K-Q)/8,-.4,400,"/─\\│",DT,.2);
for(;md>0;md--){for(k=0;k<3;k++)sp(Q+R(-2,2),5,(K-Q)/8+R(-2,2)/10,-.6,400,"●•",DT,.2);A(RT,160)}
xm=1;A(RT,450);xm=0;A(O,150);
// patch off, wink, fling the hat
pt=0;G(X-1,4);A(O,250);A("wink",350);
ar="up";A(O,100,1);
for(;hy>-3;hy--)A(O,60);
hy=-9;ar=0;A(O,250);
f.push({x:X,pose:"default",ms:200});
return f});
