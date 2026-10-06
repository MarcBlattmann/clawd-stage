// Snake: Clawd races across the stage gobbling pellets while his segmented tail grows, then dives into his own tail: GAME OVER.
$cdA("snake-game",{title:"Snake",w:64},function(c){
var M=Math,A=M.abs,W=c.W,G=c.G,T=c.T,R=c.R,CP=c.P,f=[],x=c.x,o=0,i,k,s,
 d=x+4<W/2?1:-1,dr=d,tr=[],L=7,gr=0,sc=0,g=M.round(W/5),P=0,pa=[],
 Y="warning",E="error",S="subtle",X="text",PE=c.rgb(255,180,120),Z={z:-1},B1={b:1},
 I="inactive",hc=I,bt=0,by=0,bc="success",tc=0,CL=CP("closed"),
 ey=()=>dr>0?"right":"left",ft=()=>x/2&1?"left":"right",
 box=(bx,s,y,cl,b)=>c.art(bx,y,["╭───────────╮","│"+(b="      ",b+s+b).substr(s.length+1>>1,11)+"│","╰───────────╯"],cl,{o:1,b:1}),
 // cells -> one prop per row+color
 gp=(s,k)=>{var m={},r=[],z,a;s.forEach((q,i)=>{if(a=k(q,i)){z=q[1]+"|"+a[1];(m[z]=m[z]||Array(W).fill(" "))[q[0]]=a[0]}});for(z in m)a=z.split("|"),r.push(T(0,+a[0],m[z].join(""),a[1],Z));return r},
 tt=()=>tr.slice(tr.length-L),
 dc=j=>j/3&1?"clawd_body":PE,
 tl=()=>{var s=tt(),n=s.length;return gp(s,(q,i)=>{var j=n-1-i,cl=tc?tc(q,j):dc(j);return j&&cl&&[i?"■":"•",cl]})},
 pl=()=>P?[T(P.x,P.y,P.a<2?"·•"[P.a]:P.g,P.c,B1)].concat(P.a++<3?[T(P.x-2,P.y,"✦   ✦",X)]:[]):[],
 pp=()=>(pa=pa.filter(p=>p.l-->0)).map(p=>T((p.x+=p.vx)+.5|0,(p.y+=p.vy)+.5|0,p.g,p.c,Z)),
 pt=(x,y,vx,vy,g,c,l)=>pa.push({x,y,vx,vy,g,c,l}),
 bu=(x,y,n)=>{for(var i=0,a;i<n;i++)a=i/n*6.3,pt(x,y,M.cos(a)*1.6,M.sin(a)*.7,c.pick("*✦·"),c.pick([Y,X,E,PE]),R(2,4))},
 F=(pose,ms,xs)=>{f.push({x,offset:o,pose,ms,props:(xs||[]).concat(bt?box(W/2-6|0,bt,by,bc):[],tl(),pl(),pp(),hc?[T(W-9,0,"SCORE "+("0"+sc).slice(-2),hc,Z)]:[])});if(bc==Y&&bt&&--by<-2)bt=0},
 mv=(dx,dy)=>{dx?x+=dx:o+=dy;tr.push([x+4,G+o+1]);if(gr>0)L++,gr--},
 pe=(px,py,v)=>{P={x:px,y:py,a:0,v,g:v>1?"★":"●",c:v>1?Y:E}},
 // chase the pellet; fin: dive until he hits his tail
 ch=fin=>{for(var q=0,an=fin;q<500;q++){var cx=x+4,cy=G+o+1,dx=P.x-cx,dy=P.y-cy,h=M.sign(dx),v=dy&&(h&&h!=dr||A(dx)<2||!fin&&M.random()<.06);
  if(v&&an)an=0,F(CP("wink","up"),300,[T(dr>0?x+9:x-1,G+o,"!",Y,B1)]);
  v?mv(0,M.sign(dy)):mv(dr=h||dr,0);cx=x+4;cy=G+o+1;
  if(fin&&(o>=0||tt().some((p,i)=>L-i>10&&A(p[0]-cx)<4&&A(p[1]-cy)<2)))return cy;
  if(!fin&&A(P.x-cx)<5&&A(P.y-cy)<2){sc+=P.v;gr+=g*(P.v+1)/2;bu(P.x,P.y,7);pt(P.x-1,M.max(0,P.y-2),0,-.4,"+"+P.v,Y,6);P=0;return F(CP("closed",0,ft()),80)}
  F(v&&dy<0?CP(0,"up"):CP(ey(),0,v?0:ft()),M.max(24,42-sc*2))}};

// Title, dash to the start edge, countdown.
var x0=d>0?3:c.mx-3;bt="S N A K E";
for(by=-3;by<0;)by++,F(CP(),90);F(CP(),300);
while(x!=x0)k=x0>x?1:-1,x+=A(x0-x)>1?2*k:k,F(CP(k>0?"right":"left",0,ft()),30);
for(i=7;i--;)tr.push([x+4-d*i,G+1]);
"READY? 3 2 1 GO!".split(" ").forEach((s,i)=>{bt=s;bc=i>3?Y:"success";o=i==3?1:0;F(CP(i?ey():"wink",i>3&&"up"),i?i>3?120:340:700)});
o=0;

// Lane 1: pellets up to the far edge, one golden.
var n1=4+(W>150),gd=R(1,n1-1);
for(i=1;i<=n1;i++){pe(i<n1?x0+4+d*((W-11)*(i-M.random()*.35)/n1|0):d>0?W-2:1,R(4,5),i==gd?3:1);ch()}
// Lane 2: back through the sky.
for(i=0;i<1+(W>140);i++){pe(x+4-d*R(W/7|0,W/5|0),R(1,2),1);ch()}
// Bait under the old tail: dive, BONK.
k=x+4;pe(k-d*R(5,M.max(6,A(k-tt()[0][0])/3|0)),6,1);
var cy=ch(1),cx=x+4,hy=G+o-1,gx=(cx<W/2?(cx+5+W)/2:(cx-5)/2)-6|0,
 go=(cl,xs)=>box(gx,"GAME OVER",0,cl).concat(xs||[]);
tc=(q,j)=>j>9&&A(q[0]-cx)<7&&A(q[1]-cy)<2?E:dc(j);bu(cx,cy+1,9);
for(k=0;k<5;k++)F(CP("closed","up"),k?45:150,[T(x+2,M.max(0,hy),"BONK!",X,B1)]),x+=k%2?-1:1;
x--;o--;
// GAME OVER, tail blinks, dizzy stars.
for(k=0;k<12;k++)tc=()=>k%2?0:E,hc=k%2?E:I,F(CP(k%3?"closed":"wink"),150,go(k%2?X:E,[T(x+1,M.max(0,hy-1),"✦ · ✧ · ✦ · ".substr(k%4,7),Y,{o:1})]));
// Tail dissolves from the tip.
tc=0;k=M.ceil(L/8);
while(L>0)i=tr.length-L,s=tr.slice(i,i+k),L-=k,F(CL,55,go(E,gp(s,()=>["·",S])));
// He drops onto the bait anyway.
while(o<0)o++,F(CP(),45,go(E));
P=0;pt(x+6,3,0,-.4,"+0",S,4);pt(x-1,6,-1,0,"°",S,3);pt(x+9,6,1,0,"°",S,3);
o=1;F(CL,90,go(E));o=0;F(CP("wink"),320,go(E));
[["left",I],["right",S]].forEach(a=>{hc=a[1];F(CP(a[0]),400,go(a[1],[T(x+4,G-2,"?",X)]))});
hc=0;F(CL,300);F(CP("wink","one-up"),400);
f.push({x,pose:"default",ms:300});
return f});
