// Full-width night swamp: Clawd copies a frog hopping lily pads, falls short, pops up wearing a pad (frog too).
$cdA("swamp-lilypads",{ scene: 1,title:"Swamp hop",w:70},function(c){
var f=[],W=c.W,G=c.G,M=Math,P=c.P,X=c.T,S=M.sin,U=M.round,T=0,o=0,A=0,H=0,hd,wt,i,j,k,
R=c.rng(c.R(1,9e3)),r=(a,b)=>a+(R()*(b-a+1)|0),
d=c.x<c.mx/2?1:-1,EY=d>0?"right":"left",EB=d>0?"left":"right",Y=P(EY),CL=P("closed"),x=c.x,
x0=d>0?M.min(x,c.mx-46):M.max(x,46),D=d>0?c.mx-x0:x0,
m=c.clamp(U((D-6)/16)-1,2,5),g=M.min(20,(D-6)/(m+1)|0),TG=x0+d*(g*m+g+6),
PD=[TG],DP=[],TR=[],CT=[],MI=[],FF=[],Q=[],BD="",
PC="#3fa34d",FG="#9ccc3c",LB="#7fc4dc",WC="#2f7391",
pd=w=>"▗"+"▄".repeat(w-2)+"▖",PS=pd(9),
L=(a,b,fn)=>{for(var i=r(0,a);i<W-4;i+=r(a,b))fn(i)},
FL={x:x0+d*g+3,y:6,w:"ribbit"},FS=[FL],
SC=()=>{var C=[],K={},Z=[],l=M.max(0,x+4-A*W|0),e=x+4+M.ceil(A*W),s,k,
pt=(x,y,t,col,z)=>{var k=[z,y,col],a=K[k];a||C.push(a=K[k]=[y,col,z,Array(W).fill(" ")]);for(var i=0;i<t.length;i++)t[i]>" "&&(a[3][x+i]=t[i])};
pt(W*.6|0,0,"●","#f3ecc2");pt(0,3,BD,"#4d7a3e");
TR.map(([q,h])=>{pt(q,h,"▄███▄","#2f6046");pt(q,h+1,"¦▀█▀¦","#7d9a7d");for(s=h+2;s<4;s++)pt(q+1,s,s>2?"▟█▙":" █","#6b5440")});
CT.map((q,k)=>pt(q,2,S(T/700+k)>.2?"▐":"▌","#9a6a3a"));
MI.map(([q,y,v])=>{q=((q+T/v)%(W+8)|0)-5;(y<5||q>64||q<6)&&pt(q,y,"░▒▒░","#77878f")});
FF.map(([q,y,p])=>S(T/260+p)>-.3&&pt(q+U(3*S(T/1100+p)),y+(S(T/800+p*2)>.4),"·","#eef27a"));
k=T/300|0;s=c.tile("≈~-~≈~~-",0,0,k).t;pt(0,6,s.slice(0,10)+"      ~".repeat(9).substr(k%7,55)+s.slice(65),WC);
DP.map(([q,w,l])=>{pt(q,6,pd(w),PC);l&&pt(q+w-2,5,"✿","#f49ac1")});
PD.map((q,k)=>H&&!k||pt(q,6,PS,PC));
hd||o||PD.includes(x)&&pt(x,6,"▗  ▄▄▄  ▖",PC,1);
FS.map(J=>{var k=J.c>T||(J.p+T)%2600<450;pt(J.x,J.y-1,k?"^▄^":"°▄°",FG);pt(J.x,J.y,J.a?"/ \\":"▟█▙",FG);k&&pt(J.x-1,J.y-3,J.w,FG)});
wt&&!hd&&pt(x-1,6,"≈".repeat(11),WC,1);
Q=Q.filter(q=>q[6]-->0&&(pt(U(q[0]),U(q[1]),q[4],q[5],1),q[0]+=q[2],q[1]+=q[3],q[3]+=q[7],1));
C.map(a=>e>l&&Z.push(X(l,a[0],a[3].slice(l,e).join(""),a[1],a[2]?{}:{z:-1})));return Z},
F=(p,ms,ex)=>{FL.r&&(FL.x=x+3,FL.y=G-1+o);var Z=SC();H&&Z.unshift(X(x,G-1+o,PS,PC,{z:-1}));
f.push({x,pose:p,offset:o,ms,hide:hd,props:Z.concat(ex||[])});T+=ms},
ar=(a,b,fn)=>{for(var n=M.max(3,M.abs(b-a)+1>>1),s=1;s<=n;s++)fn(U(c.lerp(a,b,s/n)),s/n,S(M.PI*s/n),s)},
fh=(b,h,p,y)=>{y=FL.y;FL.r=0;ar(FL.x,b,(q,t,u)=>{FL.x=q;FL.y=U(c.lerp(y,6,t)-u*h);FL.a=t<1;F(p,35)})},
hop=(b,h,ms)=>ar(x,b,(q,t,u,s)=>{x=q;o=-U(u*h);F(P(EY,"up",s%2?"left":"right"),ms)}),
dr=(n,v)=>{for(j=0;j<n;j++)Q.push([x+4+r(-3,3),5,(R()-.5)*v,-1-R()*1.5,"·°'"[r(0,2)],j%3?LB:"text",r(4,7),.45])},
bb=(q,y,ch)=>Q.push([q,y,0,-.4,ch,LB,3,0]);
// seeded layout
for(i=0;i<=m;i++)PD.push(x0+d*g*i);
for(i=0;i<W;i++)BD+="|▁▂▂▃▂▁|│▁"[r(0,9)];
L(20,34,i=>TR.push([i,r(0,1)]));L(6,13,i=>CT.push(i));
L(8,16,i=>M.abs(2*i-x0-TG)>M.abs(TG-x0)+22&&(i<3||i>64)&&DP.push([i,k=r(4,7),R()<.5])&&k>5&&FS.length<2+(W>110)&&FS.push({x:i+1,y:6,p:r(0,2600),w:"croak"}));
for(i=0;i<3+W/35;i++)FF.push([r(2,W-3),r(0,2),r(0,99)]),MI.push([r(0,W),[0,1,2,5][i%4],r(200,500)]);
// rise, walk, spot the frog
for(i=0;i<13||x-x0;i++){A=M.min(1,i/12);k=x0-x;x+=M.sign(k);F(k?P(EB,0,i%2?"left":"right"):P(i%8<4?EB:EY),k?55:110)}
FL.c=T+700;F(Y,350);F(Y,450,[X(x+4,G-1,"?","text",{b:1})]);
// copy its hops
for(k=1;k<=m;k++){fh((PD[k+2]||TG)+3,k<m?2:3,Y);F(Y,r(120,300));R()<.4&&(FL.c=T+400);
o=1;F(CL,110);hop(PD[k+1],g>15?3:2,40);o=1;dr(3,4);F(Y,80);o=0;F(Y,r(90,220))}
// big gap: splash
FL.c=T+800;F(Y,500);F(P("wink"),450);o=1;F(CL,300);
hop(x+d*(g/2+3|0),2,45);o=0;F(P(0,"up"),320,[X(x+4,G-2,"!","error",{b:1})]);
wt=1;dr(12,3);[1,2,3].map(v=>{o=v;F(P("closed","up"),60)});
// swim under its pad
hd=1;for(;x-TG;)x+=c.clamp(TG-x,-2,2),bb(x+4,5,"°"),F(Y,90);
for(j=0;j<4;j++)bb(x+j%2*7+1,6,"o"),F(Y,120);
FL.w="!?";FL.c=T+600;fh(FL.x,1,Y);FL.w="ribbit";
// pad hat, frog and all
hd=0;H=FL.r=1;dr(8,3);[2,1].map(v=>{o=v;F(CL,200)});
F(CL,600);FL.c=T+900;F(P(),1100);
fh(PD[m+1]+3,3,P(EB));FL.c=T+600;F(P(EB),700);F(CL,200);F(P("wink"),600);
// fade, frisbee the pad
for(i=12;i>=0;i--)A=i/12,F(P(i>9?"wink":0),85);
wt=o=H=0;F(P(),150,k=[X(x,G-1,PS,PC)]);F(P(0,"up"),250,k);
for(j=0;j<13;j++)F(P(EB,j<2?"up":"one-up"),45,[X(x-d*3*j+j%2*2,G-2-(j>>2),j%2?"─═══─":PS,PC)]);
F(P("wink"),600,[X(x+1,G-2,"ribbit",FG)]);f.push({x,pose:"default",ms:250});
return f});
