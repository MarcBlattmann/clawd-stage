// Storm at sea: Clawd lights the lighthouse lamp, sweeps the waves and guides a lost boat ashore as the sky clears.
$cdA("lighthouse-storm",{ scene: 1,title:"Lighthouse",w:70},function(c){
var f=[],W=c.W,M=Math,P=c.P,R=c.rng(c.R(1,1e6)),T=0,K=7,h=-1,st=0,sh=0,cs=0,cl=0,lp=0,L=0,th=-1.6,fl,wl,bl,bq,dr,i,j,k,Z,
d=c.x<c.mx/2?1:-1,x=d>0?1:c.mx-1,X=c.x,a=x-(d>0?1:3),b=a+12,LX=d>0?x+9:x-2,O=d>0?b+1:a-1,ML=d>0?W-1-O:O,hc=x+4,
se=d>0?"right":"left",U=d>0?"one-up":"up",bx,by=3,tl=0,
bs=O-(d<0)*6+d*((ML-8)*(.45+R()*.4)|0),
Y="#fff3b0",G="#9aa3b5",RD="error",D=[],S=[],Q=[...Array(4096)].map(R),
H=k=>Q[k&4095],
N=Q.map((_,k)=>M.sin(k*.23)+M.sin(k*.071+2)),
q=(u,y,t,C,n)=>{var e=n?1e4:h,l=M.max(u,hc-e),r=M.min(u+t.length,hc+e+1);r>l&&(t=t.slice(l-u,r-u)).trim()&&Z.push(c.T(l,y,t,C,{z:-1}))},
SR=(y,g,o,C)=>{for(var t="",i=0,k;i<W*(h>=0);i++)k=i+(o|0)+1e4,t+=i>=a-1&&i<=b+1||y>3&&i>9&&i<65&&H(k*.7+y)>.1?" ":g(k)||" ";q(0,y,t,C)},
Lh=(y,u,t,C)=>q(u,y+K,t,C,1),
V=e=>{Z=e||[];var u=M.round(cl*2),F=fl>=0;
S.map((s,i)=>i<cl*S.length&&(s[0]<a||s[0]>b)&&q(s[0],s[1],(T/250+s[2]|0)%6?"·":"✦","text"));
cl>.5&&q(W*(.5+d/5)|0,0,"●",Y);
SR(-u,k=>" ░▒▓█"[N[k&4095]*1.2+1.2+H(k)|0],cs,F?"text":"#7a8296");
SR(1-u,k=>" ░▒"[N[k+50&4095]*1.2-.4|0],cs*1.5,F?"text":"#5e6578");
F&&[..."╱╱╲✸"].map((s,y)=>q(fl+(y%3<1),y,s,Y));
if(L>0){var B=(y,s,C,t)=>L>s&&q(d>0?O+s:O-L+1,y,t.repeat(L-s),C);
B(1,0,Y,"▒");[0,2].map(y=>B(y,L/3|0,Y,"░"));q(O+d*(L-1)-2,3,"≈≈≈≈≈",Y)}
st>.25&&SR(2,k=>(j=k%12)<3&&H(k-j)<.45&&((T/300+H(k-j)*9|0)%2?"◢█◣":"▗▄▖")[j],sh*1.6,"text");
["~≈^-","≈~-~","~≈ ~","▒░▓▒"].map((p,y)=>SR(y+3,k=>p[H(k*(y+2))*4|0],sh*(1-y*.2),F?"text":c.hsv(212,.6,.85-y*.12)));
if(bx>=0){j=bl||F?["text","#e0704a"]:["#6a7284","#7a5044"];
q(bx+3+tl,by-2,"▲",j[0]);q(bx+2+tl,by-1,"◢█◣",j[0]);q(bx,by,"◥█████◤",j[1]);bq&&(T/300|0)%2&&q(bx+3,by-3,bq,"warning")}
Lh(3,a,"▀".repeat(13),G);[0,1,2].map(y=>Lh(y,a,"│           │",G));
Lh(0,LX,"◢◣",G);Lh(1,LX,L>0?(T/60|0)%2?"▓█":"█▓":"██",c.hsv(50,.3,.4+.6*lp));Lh(2,LX,"▐▌",G);
Lh(4,x+2,"▐███▌",RD);Lh(5,x+1,"▐█████▌","text");Lh(6,x+1,"▐█████▌",RD);Lh(6,x-1,"▄▟        ▙▄",G);
[4,5,6].map(y=>Lh(y,x+4,"■",wl==y?Y:"#4a5060"));
D.map((r,i)=>i<D.length*st&&q((r[0]-(j=r[1]+T*r[2]/90|0)+1e4)%W,j%9,"/","#8fb4e6"));
return Z},
A=(p,ms,o,hd,ex)=>{T+=ms;sh+=d*ms*(.25+st)/70;cs+=d*ms/300;by=3-(M.sin(T/170)>1-st*.6);tl=st>.4?M.round(M.sin(T/130)):0;
dr&&(bx=bs+M.round(M.sin(T/600)*3));f.push({x:X,pose:p,ms,offset:~~o,hide:hd,props:V(ex)})},
sp=n=>[...Array(n)].map(()=>c.T(LX+c.R(-2,3),c.R(0,2),c.pick("*✦·"),Y));
for(i=0;i<W/5;i++)D.push([R()*W|0,R()*9,1+R()]),i%2&&S.push([R()*W|0,R()*2|0,R()*9]);
// run in, climb up
for(k=M.abs(x-X)>30?2:1;X!=x;){X+=M.sign(x-X)*M.min(k,M.abs(x-X));K=M.max(0,7-T/110|0);A(P(x<X?"left":"right","down",f.length%2?"left":"right"),40)}
for(;K>0;K--)A(P(se),80);
A(P(se),300);A(P("closed"),150);
for(i=0;i<9;i++){wl=6-(i/3|0);st=(i+1)/9;h=W*st|0;dr=1;A("default",80,0,1)}
wl=0;
// storm
for(i=0;i<36;i++){fl=i==9||i==10?d>0?c.R(O+6,W-3):c.R(2,O-6):i==25?bx+c.R(-9,9):-1;i>8&&(bq="?");
A(fl>=0?P("closed"):i>10&&i<16?P(se,"up"):P((i+3)%12?se:"closed"),70,-4)}
fl=-1;
for(i=0;i<10;i++){lp=i/10;A(P(se,i%2?U:"down"),90,-4,0,sp(3))}
lp=1;A(P("wink",U),260,-4,0,sp(6));
for(i=0;;i++){th+=.16;L=M.max(0,M.cos(th))*ML|0;k=M.abs(bx+3-O)+1;bl=L>=k-3;if(th>4.7&&L>=k){L=k;break}
A(P(se,i%4<2?U:"down"),60,-4)}
bl=1;bq="!";dr=0;A(P("wink",U),240,-4);A(P(se,U),200,-4);bq=0;
var b0=bx,b1=d>0?b+2:a-8,n=c.clamp(M.abs(b0-b1),30,70);
for(i=1;i<=n;i++){k=i/n;bx=M.round(c.lerp(b0,b1,k*k*(3-2*k)));st=1-.85*k;L=M.abs(bx+3-O)+1;A(P(i%17==8?"closed":se,U),60,-4)}
L=0;
for(i=0;i<28;i++){cl=M.min(1,i/16);st=M.max(0,.15-i/40);
var hp=[];for(k=0;k<3;k++){j=i-k*5;j>=0&&j<8&&hp.push(c.T(bx+2+k,by-2-(j>3),"♥",RD))}
A(i<4?P("wink",U):i%6<3?"arms-up":P("wink","up"),70,-4,0,hp)}
lp=0;A(P("closed"),300,-4);A(P(se),200,-4);
// calm, fold away
for(i=0;i<9;i++){wl=4+(i/3|0);h=W*(8-i)/9-1|0;A("default",80,0,1)}
wl=0;h=-1;
for(K=0;K<8;K++)A(K<3?P(se):"default",80);
f.push({x,pose:"default",ms:300});
return f});
