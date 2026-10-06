// Clawd flips pancakes ever higher; one plops on his head, more pile on, a flipped syrup bottle drips down the stack, he eats it.
$cdA("pancake-flip",{title:"Pancake flip",w:40},function(c){
var M=Math.round,G=c.G,P=c.P,R=c.R,T=c.T,x=c.clamp(c.x,0,c.mx-9),f=c.walk(c.x,x),k,j,d,b,s=R(0,1),
Y=c.hsv(R(36,44),.6,.95),B=c.hsv(R(25,31),.7,.8),Q="#a04816",Z="#9696a5",I="inactive",C="closed",H="right",O="open",W="wink",E="left",X="text",L="▄▄▄▄▄",U="▂  ▂▂▂  ▂",V="◀██",
FL=[L,"▄▄▄▀▀","  █  ","▀▀▄▄▄"],BT=["▐█▌","▄█▀",V,"▀█▄"],fu=0,S=[],sy=0,bo=0,pu=0,w=0,e,pz,
A=(u,y,t,k,o)=>T(x+u,y,t,k,o),
ck=(u,y,h)=>A(u,y,FL[h&3],h+1&4?B:Y),
bt=(u,y,h)=>A(u,y,BT[h&3],Q),
st=(n,u,r)=>{for(var a=[];n--;)a.push(A(u+R(0,4),(r||G-1)-R(0,1),c.pick("~°·"),I));return a},
// props at body offset o: pan, head stack (w sways it), bottle, syrup puddle
sc=(o,ex)=>{
var y=G+o,n=S.length,a=[A(9,y,"▄▄","#7d502d"),A(11,y,"▙▄▄▄▄▄▟",Z)];
fu&&a.push(A(12,y,"▀▀▀▀▀",Y,{bg:Z}));
S.forEach((d,j)=>{var u=2+d+(j&&w),r=y-1-j,q=n-1-j;a.push(A(u,r,L,sy&&!q?Q:j&1?B:Y));sy>2*q+1&&a.push(A(u,r,"▌",Q),A(u+4,r,"▐",Q))});
bo&&a.push(A(3+b+w,y-1-n,"▜█▛",Q));pu&&a.push(A(0,6,U,Q,{z:-o}));
return a.concat(ex||[])},
F=(o,ex,ms)=>f.push({pose:P(e,"one-up"),offset:o,props:sc(o,ex),ms:ms,paint:pz}),
// arc (c0,r0)->(c1,r1) peaking near row ap in m steps; g draws the flyer
fl=(c0,r0,c1,r1,ap,m,ms,g,o)=>{for(var i=1,h=(r0+r1)/2-ap,t;i<m;i++){t=i/m;F(i<2?o:0,[g(M(c0+(c1-c0)*t),M(r0+(r1-r0)*t-4*h*t*(1-t)),i-m)],ms)}};

// setup: lift the pan, batter sizzles
f.push({pose:P(),props:sc(1),ms:250});e=O;F(0,[A(17,G-1,"✧",X)],300);e=H;fu=1;
for(k=R(5,7);k--;)F(0,st(2,12),110);
// build-up: two flips, each higher, back into the pan
[2,3+s].forEach((a,q)=>{
e=C;F(1,[],140+q*60);e=H;fu=0;
fl(12,G,12,G,G-a,2+a*2,75-q*10,ck,0);
fu=1;F(1,[A(17,G,"*","chromeYellow")],90);e=q?W:H;F(0,st(1,12),350)});
// the big one leaves the stage
e=C;F(1,[],450);e=H;fu=0;
for(k=0;k<7;k++)F(k<2?-1:0,[ck(12,G-1-k,k),A(14,G+1-k+(k<2)*9,"¦",I)],45);
[400,350,300,500].forEach((m,i)=>{e=i>2?O:i+s&1?E:H;F(0,[A(4,G-2,"?",X,{b:1})],m)});
// climax: it comes down on his head
d=R(0,1);for(k=-1;k<3;k++)F(0,[ck(2+d,k,k+1)],70);
S.push(d);e=C;F(1,[A(9,1,"plop!","warning",{b:1}),A(1,G,"·",Y),A(8,G,"·",Y)],260);
F(0,st(2,2,G-2),300);e=O;F(0,st(1,2,G-2),400);e=W;F(0,[],500);
// he stacks more on purpose, faster each time; the stack sways
for(j=0;j<2;j++){
e=H;fu=1;for(k=3;k--;)F(0,st(2,12),90-j*20);
F(1,[],90);fu=0;d=c.clamp(S[j]+R(-1,1),-1,2);
fl(12,G,2+d,G-1-S.length,0,7,60-j*10,ck,-1);
S.push(d);e=C;F(1,[],110);
[1,-1,0].forEach(v=>{w=v;e=v?W:O;F(0,[],80)})}
// syrup bottle flipped on top; it runs down the stack and over his face
e=W;F(0,[A(13,G-1,V,Q),A(17,G-2,"✧",X)],400);e=H;F(1,[A(13,G,V,Q)],100);
b=S[2];fl(13,G,3+b,0,-1,8,60,bt,-1);
bo=1;e=C;F(0,[A(9,0,"glug",I)],300);
for(sy=1;sy<14;sy++){
if(sy>7)pz=((v,d)=>(u,r)=>r<=v&&(u==2+d||u==6+d)?Q:void 0)(sy-8>>1,S[0]);
pu=sy>11;e=sy>7?C:O;F(0,sy&1?[A(9,0,"glug",I)]:[],130)}
e=W;for(k=0;k<6;k++)F(0,[A(10,G-2-(k>>1),"♥","error"),A(12,G-1,"mmm",X)],140);
// he eats the stack from the bottom up
for(j=0;j<3;j++){S.shift();e=C;F(1,[A(10,G-1,"nom",X),A(R(0,1),G-1,"·",Y),A(8,G-R(1,2),"'",Y)],160);e=O;F(0,[],180)}
// cleanup: empty bottle back into the pan, pan away, shake off the syrup
bo=0;e=H;fl(3+b,G-1,13,G-1,1,6,70,bt,-1);
F(0,[A(13,G-1,V,Q),A(12,G-2,"clink",I)],300);
f.push({pose:P(W),props:[A(12,G,"✦",X),A(0,6,U,"subtle")],paint:pz,ms:200});
for(k=0;k<4;k++)f.push({x:x+(k&1),pose:P(C,"down",k&1?E:H),paint:k<2?pz:void 0,ms:70,props:[A(R(-2,0),G+R(0,1),"·",Q),A(10,G+R(0,1),"·",Q)]});
f.push({x:x,pose:P(W),ms:500},{pose:"default"});
return f;
});
