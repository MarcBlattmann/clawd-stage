// Space fades in; helmeted Clawd floats on a tether, sees a comet, spins, waves at a satellite.
$cdA("space-walk",{ scene: 1,title:"Space walk",w:70},function(c){
var W=c.W,G=c.G,T=c.T,R=c.R,M=Math,sn=M.sin,rd=M.round,fl=M.floor,Z={z:-1},I="inactive",rn=c.rng(R(1,1e6)),
x0=c.clamp(c.x,1,c.mx-1),f=c.walk(c.x,x0),x=x0,o=0,ph=0,hO=-9,an=0,dr=0,tm=0,lv=0,cu=-1,sc=-99,bp=0,
cd=c.pick([1,-1]),t0=R(0,6),CN=26+fl(W/10),pd=x0+4<W/2?1:-1,dS=pd>0?x0>25?-1:1:x0+37>W?-1:1,
Pp=x0+4+dS*19,ob=dS==pd?Pp+pd*3:pd>0?x0+14:x0-6,
ps=pd>0?M.max(W-16-R(0,W/8),ob+2):M.min(2+R(0,W/8),ob-15),dm=M.max(0,pd>0?ps-ob-2:ob-ps-14),
L=[],S=[],i,h,p,ey=v=>v<x?"left":v>x+8?"right":0;
// Far stars tile; near stars scroll faster and twinkle.
for(i=0;i<4;i++){for(p="",h=31+i*11;h--;)p+=rn()<.06?"·":" ";L.push(p)}
for(i=0;i<W/9;i++)S.push([R(0,W-1),R(0,6),R(0,10),R(0,8)*45,c.pick("++*·")]);
var chx=()=>(h=rd(cu*(W+24)/CN),cd>0?h-12:W+12-h),
bg=()=>{var a=[],py=rd(lv*4-4),px=ps-pd*M.min(fl(tm/1100),dm),t=tm/1400+t0,k=sn(t),
 m=c.art(px+5+rd(9*M.cos(t)),py+1+rd(k),["▟█▙","▜█▛"],"#c8ccd6",Z),q,u;
 if(lv>.1)L.map((s,y)=>a.push(c.tile(s,y,c.hsv(220,.2,.6*lv),pd*fl(tm/480),Z))),
  S.map(s=>(q=((s[0]-pd*fl(tm/200))%W+W)%W,u=(fl(tm/130)+s[2])%11,s[1]<4||(q<9||q>65)&&M.abs(q-x0-4)>7)&&
   a.push(T(q,s[1],u?u>1?s[4]:"✧":"✦",c.hsv(s[3],.3,(u>1?.7:1)*lv),Z)));
 // Comet, ringed planet, orbiting moon, satellite.
 if(cu>=0)h=chx(),q=fl(cu*3/CN),a.push(T(h,q,"✸","text",Z)),
  ["≡≡≡","===","-·-"].map((s,j)=>a.push(T(h-cd*(1+3*j)-(cd>0)*2,q,s,c.hsv(205,.4,1-j*.3),Z)));
 a=a.concat(k<0?m:[],[T(px,py+1,"·══       ══·","#d8c8a0",Z),T(px+4,py,"▄███▄","#f0c080",Z),
  T(px+3,py+1,"═══════","#fff0d0",{z:-1,bg:"#e0a060"}),T(px+4,py+2,"▀███▀","#c08048",Z)],k<0?[]:m);
 if(sc>-90)u=fl(tm/250)%2,a.push(T(sc-3,1,"▓▓   ▓▓","#6a9bcc",Z),T(sc-1,1,"─◆─","#d0d4dc",Z),
  bp?T(sc-2,0,"beep!","success",Z):T(sc,0,u?"•":"·",u?"error":I,Z),
  T(sc-dS*6-1,1,bp?dS>0?"(((":")))":" ","success",Z));
 return a},
// Frame: scenery, tether, helmet.
fr=(e,ar,ms,ex,ft)=>{
 if(dr)ph+=ms/600,x=c.clamp(x0+rd(2*sn(ph)),1,c.mx-1);
 var a=bg(),q=x0+4,k=6,d;
 if(an)for(a.push(T(q-1,6,"─┴─",I,Z));--k>6+o;)
  d=c.clamp(x+4-q,-1,1),q+=d,a.push(T(q,k,d>0?"╱":d<0?"╲":"│",I,Z));
 if(hO>-9)a=a.concat(c.art(x-1,G-1+o+hO,["╭─────────╮","│         │","╰         ╯"],"#9fd8ff"));
 f.push({x:x,offset:o,pose:e.facing?e:c.P(e,ar,ft),ms:ms,props:a.concat(ex||[])});tm+=ms};
// Fade in; the helmet drops on.
for(i=1;i<15;i++)lv=M.min(1,i/12),fr(i<4?0:i<8?"left":i<12?"right":0,0,80);
for(hO=-5;hO<0;hO++)fr(0,hO>-3&&"up",60);
fr("closed",0,140,[T(x-3,G-1,"✧             ✧","text")]);
fr("wink",0,300);
// Crouch, push off.
an=o=1;fr("closed",0,240);
for(i=0;i<4;i++)o=-i,p=i<3?"°":"·",fr(0,"up",120+i*60,[T(x0-i,6,p+" ".repeat(7+2*i)+p,I)]);
// Float.
for(dr=1,i=0;i<20;i++)o=-3+(sn(i*.5)>.7),fr(i<5?"closed":0,i%8<4?"up":0,110,0,i%4<2?"left":"right");
// Comet: eyes follow it.
for(o=-3,cu=0;cu<=CN;cu++)fr(ey(chx()),0,40);
cu=-1;fr("wink","up",350,[T(x+11,1,"!","#ffcc55")]);
// Slow spin.
p="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ");
(R(0,1)?p.reverse():p).map(z=>{o=-3+/ba|ed/.test(z);fr({facing:z},0,z=="back"?320:150)});
o=-3;fr(0,0,200);
// Satellite slows by: wave, beep, heart; it zooms off.
var A=dS>0?W+4:-4,B=W-1-A,n1=12+fl(M.abs(A-Pp)/6),n3=10+fl(M.abs(B-Pp)/6);
for(i=0;i<=n1;i++)sc=rd(c.lerp(A,Pp,sn(i/n1*M.PI/2))),fr(i>n1/3?ey(sc):0,0,45);
for(i=0;i<14;i++)sc=Pp-dS*rd(i/6),bp=i>3&&i<10&&i%4<2,
 fr(i>9?"wink":ey(sc),i%2?(dS>0?"one-up":"up"):0,120,i>9&&[T(x+4+dS*9,1-(i>11),"♥","error")]);
for(bp=0,i=1;i<=n3;i++)sc=rd(c.lerp(Pp-dS*2,B,i*i/n3/n3)),fr(ey(sc),0,45);
// Drift down, land.
for(sc=-99,dr=0,o=-3;o<1;o++)x+=(x0>x)-(x0<x),fr(0,"up",o<0?300:140,0,o%2?"left":"right");
o=1;fr("closed",0,100,[T(x0-1,6,"·         ·",I)]);
o=an=0;fr("wink",0,250,[T(x0+4,6,"✦","#ffcc55")]);
// Helmet off, fade out.
for(hO=-1;hO>-6;hO--)fr(0,"up",70);
for(hO=-9,i=12;i--;)lv=i/12,fr(i>8?"wink":i>4?ey(ps+6):0,0,85);
f.push({pose:"default",ms:300});
return f;
});
