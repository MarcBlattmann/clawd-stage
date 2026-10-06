// Rack + mirror: Clawd tries six outfits, nods or shakes, keeps the crown, struts; it flies off.
$cdA("wardrobe-change",{title:"Wardrobe",w:44},function(c){
var G=c.G,R=c.R,T=c.T,x=c.clamp(c.x,12,c.mx-15),f=c.walk(c.x,x),m=x-12,rk=c.W,mo=6,on=-1,out={},
r="right",C="closed",O={b:1},l="left",U="one-up",GD="#ffcd32",Y="warning",X="text",S="subtle",MC="#a5b9e1",H="─",L=H.repeat(10),B=" ".repeat(9),
V="│"+B+"│",W="│ "+B+"│",RA=["┌"+L+"┐",W,"├"+L+"┤",W,"○"+L+"○"],MA=["╭"+H.repeat(9)+"╮",V,V,V,V,"┴"+B+"┴"],
M={left:r,right:l},k,n,s,cx,cy,w;
// color, worn [dx,dy,text..], rack dx,dy, icon
var I=[["#b0703c",[2,-2,"▗▄▄▄▖",0,-1,"▄▄█████▄▄"],1,3,"▄█▄"],
["rainbow_blue",[4,-2,"●",2,-1,"▟▓▓▓▓▙"],5,3,"▟▙"],
["error",[3,1,"▶●◀"],1,5,"▶◀"],
["success",[1,1,"▓▒▓▒▓▒▓",5,2,"▓"],4,5,"▓▓"],
["#787896",[1,0,"▀██▀██▀"],7,5,"■─■"],
[GD,[2,-1,"▙▟▙▟▙▟"],8,3,"▙▟▙"]];
function wear(ax,o,bc,mr,p){if(on>=0)for(var it=I[on],a=it[1],q=0;q<a.length;q+=3)
p.push(T(ax+(mr?9-a[q]-a[q+2].length:a[q]),G+a[q+1]+o,a[q+2],it[0],a[q+1]>>1?O:{bg:bc}))}
function F(e,a,ms,ex,o,ft){o=o||0;var p=[],ac=[];
if(rk<c.W){p=c.art(rk,2,RA,"inactive");I.forEach(function(it,j){out[j]||j==on||p.push(T(rk+it[2],it[3],it[4],it[0],O))})}
if(mo<6)p=p.concat(c.art(m,1+mo,MA,"inactive",{z:-1}));
if(!mo){ac.push({x:m+1,offset:o,color:MC,pose:c.P(M[e]||e,a,M[ft]||ft)});wear(m+1,o,MC,1,p)}
wear(x,o,"clawd_body",0,p);
f.push({x:x,pose:c.P(e,a,ft),ms:ms,offset:o,props:p.concat(ex||[]),actors:ac})}
function sp(q,ax,ay,w,h){for(var z=[];q--;)z.push(T(ax+R(0,w),ay+R(0,h),c.pick("✦✧*·"),c.pick([GD,X,Y])));return z}
function mk(t,col){return[T(x+4,1,t,col,O)]}
function zz(a){return[T(a,3,"≡",S),T(a,5,"≡",S)]}
function nod(ms){for(k=0;k<4;k++)F(k%2?l:C,0,ms,mk("✓","success"),1-k%2)}
// a: rack -> Clawd, b: Clawd -> rack
function fly(a,b){out[a]=out[b]=1;on=-1;for(s=1;;s++){var ex=[];
[a,b].forEach(function(n,i){if(n>=0){var it=I[n],ax=x+3,ay=G+it[1][1],d=rk+it[2]-ax,t=i?s/d:1-s/d;
t>0&&t<1?ex.push(T(ax+Math.round(d*t),Math.round(ay+(it[3]-ay)*t-10*t*(1-t)),it[4],it[0],O)):i?out[n]=0:on=n}});
if(!ex.length)break;F(on<0?r:0,s<3&&U,28,ex)}}

// Rack rolls in.
F(r,0,250,[T(c.W-2,5,"·",S)]);
for(;rk>x+11;)rk-=c.clamp(rk-x-11>>2,1,4),F(r,0,24,zz(rk+12));
rk++;F(r,0,90,[T(rk,6,"·",S),T(rk+11,6,"·",S)]);
F(r,"up",120,mk("!",Y),-1);F(r,"up",200,mk("!",Y));
// Mirror rises.
F(l,0,220);
for(;mo;)mo--,F(l,0,70,[T(m+R(0,10),6,"·",S)]);
F(l,0,160,[T(m+10,0,"✦",X)]);F("wink",U,380);
// Outfits: mirror check, shake or nod.
for(n=0;n<6;n++){
F(r,!n&&U,R(120,240),sp(2,rk+I[n][2]-1,I[n][3]-1,3,0));
fly(n,n-1);
F(C,0,70,sp(3,x,G+I[n][1][1]-1,8,0),1);F(0,0,110);
F(l,0,R(260,380));
R(0,1)&&F(l,c.pick(["up",U]),R(220,320),0,0,c.pick([l,r]));
if(n>4)break;
if(R(0,2))for(k=R(0,3)?4:6;k--;)F(k%2?l:r,0,80,mk("✗","error"));
else nod(110),F(r,0,240,mk("?",X));
}
// Crown! Hops, nod, kiss.
F(l,0,420,mk("!",GD));
for(k=0;k<6;k++)F(k%4<2?"wink":l,"up",90,sp(2,x-3,0,1,2).concat(sp(2,x+9,0,2,2)),-(k%2));
nod(120);F("wink",U,380,[T(x-1,2,"♥","error")]);
// Mirror sinks, rack leaves, strut.
for(;mo<6;)mo++,F(r,0,60);
for(;rk<c.W;)rk+=4,F(r,U,22,zz(rk-1));
for(s=c.clamp(R(3,6),0,c.mx-x)*2,k=0;k<s;k++){if(k%2)x++;
F(k%4<2?C:"wink",k%4>1&&U,90,k%4?[]:[T(x+9,2+R(0,1),c.pick("♪♫"),"suggestion")],0,k%2&&(k%4<2?l:r))}
// Winged crown escapes.
F(0,0,280);
for(on=-1,cx=x+2,cy=3,k=0;cy>-2;k++){if(k==2||k==3)cy--;if(k>3)cx++,cy-=k%3<1;w=k%2?"◤◥":"◣◢";
F(k<4?0:r,k==3&&"up",k<4?150:70,[T(cx-1,cy,w[0]+"      "+w[1],X),T(cx,cy,I[5][1][2],GD,O)].concat(k==2?mk("!",Y):k>4?[T(cx-2,cy+1,"·",GD)]:[]),k==3?-1:0)}
F(r,0,400);F(C,"up",320);F("wink",0,380);F(0,0,150);
return f});
