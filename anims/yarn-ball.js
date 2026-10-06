// A yarn ball unrolls across the stage; Clawd chases it, trips, spins into a cocoon, wriggles free.
$cdA("yarn-ball",{title:"Ball of yarn",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,W=c.W,mx=c.mx,G=c.G,f=[],P=[],
d=c.x<=mx/2?1:-1,// -1 mirrors
SW={"▐":"▌","▌":"▐","╲":"╱","╱":"╲","<":">",">":"<","(":")",")":"("},
T=(x,y,t,cl,e)=>(x=rd(x),d>0?c.T(x,y,t,cl,e):c.T(W-x-t.length,y,/\w/.test(t)?t:[...t].reverse().map(h=>SW[h]||h).join(""),cl,e)),
E=e=>d<0&&{left:"right",right:"left"}[e]||e,
Q=(e,a,ft)=>c.P(E(e)||"open",a||"down",E(ft)||"both"),
Y="#ff7eb6",YD="#b8457a",X="text",S="inactive",Z={z:-1},B={b:1},
rg=c.rng(c.R(1,999)),TH="",i,j,k,p,o,x,b0,bx=-6,bs=3,rc=0,L=0,BE=W-5,R=0,
h=k=>(rn()-.5)*k,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ");
for(i=0;i<W;i++)p=rg(),TH+=p<.06?" ":p<.7?"~":"─";
// Frame + ball, thread, bits.
var F=(pose,ms,o,ex,hd)=>{
 if(R&&bx<BE)bx=M.min(BE,bx+c.clamp((BE-bx)/6,.5,2)),rc++,bs=bx>BE*.72?2:3;
 var b=rd(bx),pr=[],q="╲│╱─"[rc&3],g={bg:Y};
 b>L&&pr.push(T(L,6,R?TH.slice(L,b):"─".repeat(b-L),Y,Z));
 bs>2?pr.push(T(b,5,"▄  ▄",Y),T(b,6,"▀  ▀",Y),T(b+1,5,q+q,YD,g),T(b+1,6,q+q,YD,g)):
 bs>1?pr.push(T(b,6,"▐ ▌",Y),T(b+1,6,q,YD,g)):bs&&pr.push(T(b,6,"●",Y));
 P=P.filter(p=>(p.x+=p.vx,p.y=M.min(6,p.y+p.vy),p.vy+=.25,p.y>5.9&&(p.vx*=.4),--p.l>0&&pr.push(T(p.x,rd(p.y),p.l<4?"·":p.g,p.c,Z))));
 f.push({x:d>0?x:mx-x,pose,ms,offset:o||0,props:pr.concat(ex||[]),hide:!!hd})},
Pp=(x,y,vx,vy,l,g,c)=>P.push({x,y,vx,vy,l,g,c}),
// Cocoon; s flips weave, ey = eyes.
CO=(ms,dx,o,s,ey,ex)=>F("default",ms,0,["   ▄▄▄   "," ▐▓▒▓▒▓▌ ","▐▒▓▒▓▒▓▒▌"," ▀▓▒▓▒▓▀ "].map((r,j)=>T(x+dx,G-1+j+o,s?r.replace(/[▒▓]/g,m=>m=="▒"?"▓":"▒"):r,Y)).concat(T(x+dx+3,G+o,ey,X,B),ex||[]),1),
K=(t,y)=>T(x+4,y||G-2,t,"warning",B),
U=(x,y)=>[T(x,y,"●",Y)];
x=d>0?c.x:mx-c.x;
if(x<14)f=f.concat(c.walk(c.x,d>0?14:mx-14)),x=14;
// Hum; the ball rolls in, he hops it.
for(i=0;i<7;i++)F(Q(i==4&&"closed",0,i%2&&"left"),130,0,[T(x+9+i%2,G-1-i%2,"♪♫"[i%2],X)]);
for(R=1;bx<x+11;){k=bx-x;o=k<-8?0:k<-5?1:-rd(3.4*M.sin(M.PI*(k+5)/17));
 F(Q(k<-22?0:k<3?"left":"right",o<0&&"up"),k<-30?30:45,o,k>-23&&k<-7&&[K("!")])}
F(Q("closed","up"),60,1);
for(i=0;i<7;i++)F(Q("right",i>3&&"up",i%2&&"left"),i?80:200,+(i>5),[K(i>2?"!!":"!",G-2-i%2)]);
// Chase.
var x0=x,TX=rd(x+(BE-9-x)*(.58+rn()*.14)),N=M.ceil((TX-x)/1.5);
for(i=1;i<=N;i++){x=rd(c.lerp(x0,TX,i/N));i%3||Pp(x,6,-.4,-.5,5,"°",S);
 F(Q(i%11<1?"closed":"right",i%4<2?"up":"one-up",i%2?"left":"right"),35,0,[T(x-3+i%2,G+1,"≡",S)].concat(i%14<6?K("♥",G-1-(i%14>2)):[]))}
// Snag: thread goes taut.
R=0;
F(Q("closed","up","right"),90,0,[K("!"),T(x+1,6,"@",Y,B)]);
F(Q("left","up","left"),70,-1,[K("!!",G-3)]);
F(Q("closed","up"),110,1);
// Spin, winding it all in.
b0=bx;k=14;N=3*k;
for(i=0;i<=N;i++){p=i/N;L=rd(p*x);bx=c.lerp(b0,x+9,p);rc--;bs=M.min(bs,p<.55?2:p<.85?1:0);
 o=[T(x-1,G+i%3,"(",S),T(x+9,G+2-i%3,")",S)];
 for(j=0;j<M.floor(p*7);j++)o.push(T(x+1+j%2,G+[1,0,2][j%3],"─~─~─~─".substr(j%2,6),Y));
 F(i%k<k-1?{facing:FC[i%k]}:"default",rd(78-45*p),0,o)}
// Cocooned: blink, wriggle.
L=W;
CO(450,0,0,0,"• •");CO(130,0,0,0,"- -");CO(500,0,0,0,"• •",K("?",G-3));
for(i=0;i<10;i++)CO(65,[0,1,0,-1][i%4],0,i%2,"> <",T(x+2,G-3+i%2,"mmf",S));
CO(300,0,0,0,"• •");
for(i=0;i<10;i++)Pp(x+c.R(0,8),G,h(2),-.9,9,"~",Y),CO(55,c.R(-1,1),-(i%2),i%2,"> <",T(x+1,G-3,"MMF!",X,B));
// POP! The last scrap lands on his head.
for(i=0;i<22;i++)Pp(x+4+h(9),G-1+rn()*2,h(3.4),-rn()*1.6-.4,c.R(12,24),c.pick("~─°•~"),i%3?Y:YD);
F(Q("closed","up"),70,-2,[T(x+1,G-4,"POP!",X,B)]);
F(Q("wink","up"),90,-1);F(Q(0,"up"),80);
for(i=0;P.length||i<12;i++)F(Q(i<6?i%4<2?"left":"right":i<9?"closed":0,0,i<6&&i%2?"left":0),i<6?90:i<9?120:70,+(i==6),U(x+4,i<6?[1,0,0,1,2,2][i]:3));
F(Q("wink"),450,0,U(x+4,3));
// Tip it off; it rolls away.
for(i=0,k=x;k<W+1;i++)k=i<5?x+[5,7,9,10,11][i]:k+2,F(Q("right",i<3&&"up"),i<5?80:30,0,U(k,i<5?[3,3,4,5,6][i]:6));
F(Q("right"),300,0,[T(x+9,G-1,"bye",S)]);
F(Q("wink","one-up"),450);F("default",200);
return f});
