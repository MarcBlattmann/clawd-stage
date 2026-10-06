// Clawd carves a full-width figure eight on a lit rink, triple-spins for the judges, jumps, slips and slides on his back into the boards.
$cdA("ice-skating",{title:"Ice skating",w:64},function(c){
var W=c.W,M=Math,f=[],P=c.P,T=c.T,R=c.rng(c.R(1,1e6)),Z={z:-1},rd=M.round,
xL=5,xR=W-6,xC=W>>1,RV=W-xC,rv=0,ch=0,tk=0,bk=0,cut=[],fx=[],N=[],CR=[[],[],[],[]],
IC="#bfe6ff",SV="#d4e2f0",TL=20+W/6|0,CU=P("closed","up"),CL=P("closed"),
FL="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),RT=FL.slice(1,12),
BT=" ▀▀   ▀▀|  ▀▀  ▀▀|  ▀▀ ▀▀|   ▀  ▀|   ▀ ▀| ▀▀|      ▀▀".split("|"),
k,j,p,q,r,d,e,s,t,X,L,x=c.x,
sg=(a,b,r,d)=>{for(p=a;p!=b+d;p+=d)N.push([p,r,d])},
fd=a=>{for(k=1;k<15;k++)rv=rd((a?k:14-k)*RV/14),add(0,P(k<5?"left":k<10?"right":"open"),60)};
for(q=2+R()*5|0;q<W-2;q+=4+R()*8|0)CR[R()*4|0].push(q);
var WI="─".repeat(W),HS=CR.map(Q=>[" o ","\\o/"," O "].map(v=>WI.replace(/./g,(h,i)=>v[Q.includes(i+1)?0:Q.includes(i)?1:Q.includes(i-1)?2:3]||" "))),LS=[1,4].map(b=>WI.replace(/./g,(h,i)=>i%6-b?" ":"●")),BD="▀".repeat(W),SB="▌"+" ".repeat(W-2)+"▐",
gl=(p,r)=>p==xL?"╭╰"[r]:p==xR?"╮╯"[r]:p==xC?"╲╱"[r]:p==xC+1?"╱╲"[r]:"─",
cv=(p,r,g)=>{cut=cut.filter(q=>q[0]-p||q[1]-r);cut.push([p,r,g||gl(p,r),tk])},
em=(n,x,y,vx,sv,up,s="*·",c=IC)=>{while(n--)fx.push({x,y,vx:vx+(R()-.5)*sv,vy:-up*(.3+R()),a:0,h:s[R()*s.length|0],c})},
bl=(o,p,F)=>o<0?[T(x,7+o,BT[p.facing?"0123432103210"[FL.indexOf(p.facing)]:(F=p.feet)=="left"?5:F=="right"?6:0],SV)]:[],
UD=k=>[T(x+k%2,3," ▄▄   ▄▄",SV),T(x+k%2,4," ▗▗   ▗▗","clawd_body")].concat(c.art(x,5,["▗▟██████▄"," ▐▙███▙█"],"clawd_body")),
add=(o,p,ms,ex,hd)=>{tk++;var A=[],b,lo=M.max(0,xC-rv),B=[..."012345"].map(()=>Array(W).fill(" ")),
L=(y,s,c)=>rv&&A.push(T(lo,y,s.slice(lo,xC+rv),c,Z));
cut=cut.filter(q=>{var i=(tk-q[3])*3/TL|0;return i<3&&(i&&q[0]%2||(B[i*2+q[1]][q[0]]=i>1?"·":q[2]))});
L(0,WI,"subtle");
for(b=0;b<4;b++)b<2&&L(0,LS[b],c.hsv(b*120+(ch==1?tk:tk>>2)%2*50,.7,1)),L(1-(ch==1&&(b+tk)%2),HS[b][ch],c.hsv(b*90,.45,1));
L(2,BD,SV);for(b=3;b<7;b++)L(b,SB,bk?"warning":SV);
for(b=6;b--;)L(5+b%2,B[b].join(""),[IC,"#6f9fc0","subtle"][b>>1]);
fx=fx.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=.15,++q.a<10&&q.y<7&&A.push(T(rd(q.x),rd(q.y),q.h,q.c,Z))));
bk&&bk--;f.push({x,offset:o,pose:p,ms,hide:!!hd,props:A.concat(bl(o,p),ex||[])})};
fd(1);
var p0=c.clamp(x+4,xL+1,xR-1),MS=c.clamp(3600/W|0,20,55),tn=0;
add(1,CL,110);x=p0-4;em(6,p0,6,0,3,.7,"✧*·");add(-1,P("wink","up"),320);
// figure eight: far row 5, near row 6; both end turns, stop at the crossing
sg(xL+1,xC,0,1);sg(xC+1,xR-1,1,1);N.push([xR,1,0],[xR,0,0]);sg(xR-1,xC+1,0,-1);sg(xC,xL+1,1,-1);N.push([xL,1,0],[xL,0,0]);
L=N.length;
for(j=N.findIndex(n=>n[1]&&n[0]==p0),k=0;;j++){[p,r,d]=N[j%L];x=p-4;cv(p,r);
if(!d){if(r){tn++;em(8,p,5,p>xC?.8:-.8,1.2,.8);(p>xC?RT:RT.slice().reverse()).map((F,i)=>add(i<5?-1:-2,{facing:F},45))}continue}
X=N[(j+L-1)%L][1]!=r;e=M.min(p-xL,xR-p);q=k>>3&3;
(e<6||X||++k%2)&&add(r-2,P(X?"wink":d>0?"right":"left",q&1?q>2?"one-up":"up":0,q&1?0:q?"right":"left"),e<6?MS+25:MS);
if(X&&r&&tn>1)break}
// triple spin, judges' cards
add(-1,CL,160);
for(k=0;k<42;k++)em(1,x+4,3+R()*3|0,0,3,.4,"✦✧*·",c.pick([IC,"text","warning"])),add(-1,k%14?{facing:FL[k%14-1]}:CU,70-k);
ch=1;var SC=[0,1,2].map(i=>T(xC-13+i*10,0,"["+(5.75+R()*.3).toFixed(1)+"]","text",{b:1,o:1}));
for(k=0;k<8;k++)add(-1,P(k%3?"wink":"open","up",k%2?"left":"both"),k?120:300,SC);
// jump, wobble, fall
s=c.pick([-1,1]);var av=xR-xC,ey=s>0?"right":"left";ch=0;
for(k=M.max(3,av*.15|0);k--;)x+=s,cv(x+4,1),add(-1,P(ey,k%6<3?0:"up",k%6<3&&"left"),MS+15);
add(-1,CL,150);em(6,x+4,6,-s,1.5,.8);
[..."2344432"].map((o,i)=>{x+=s*(av>40?2:1);ch=i>2|0;add(-o,{facing:FL[s>0?i*2:12-i*2]},75)});
x+=s;em(10,x+4,6,0,3,.9,"*✦·");add(-1,CU,110);ch=2;
["left","right","closed",ey].map((e,i)=>{x+=s;cv(x+4,1,"~");add(-1,P(e,i%2?"one-up":"up",i%2?"right":"left"),110,[T(x+4,2,"!","error",{b:1})])});
x+=s;add(0,CU,70);x+=s;em(6,x+4,6,0,2,.6);add(1,CU,70);
// slide on his back
var x1=x,D=M.abs((s>0?c.mx-1:1)-x),nS=M.max(4,M.ceil(D/1.4));
for(k=1;k<=nS;k++)t=k/nS,x=x1+s*rd(D*(t*.6+.4*t*(2-t))),cv(x+4,1,"═"),em(1,s>0?x+9:x-1,5,s*1.2,.6,.6),add(0,P(),30+t*30|0,UD(k),1);
bk=4;ch=1;q=s>0?W-2:1;em(6,q,4,-s*.7,1.2,.8,"✦★*","warning");em(5,q,5,-s*.7,1.2,.6,"✦·");
for(k=0;k<8;k++)add(0,P(),k?90:150,UD(k).concat(k<4?T(s>0?W-9:3,1,"BONK!","warning",{b:1,o:1}):[]),1);
// dizzy, bow, rink folds
ch=0;add(1,CL,160);add(0,CL,140);
for(k=0;k<16;k++)add(0,P(["left","closed","right","closed"][k>>2]),75,[0,3].map(j=>(t=k*.6+j,T(x+4+rd(M.cos(t)*5),M.sin(t)>0?3:2,j?"✦":"★","chromeYellow"))));
add(0,P(),220);ch=1;
for(k=0;k<6;k++)add(0,P(k%2?"wink":"open","up"),130);
ch=0;add(0,P(),200);fd(0);
f.push({x,pose:"default",props:[],ms:300});
return f});
