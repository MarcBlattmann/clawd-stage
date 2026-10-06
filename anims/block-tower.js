// Blocks rain into a pile; Clawd stacks a tower to the sky, holds his breath as it wobbles, it topples, and the top block bonks him.
$cdA("block-tower",{title:"Block tower",w:46},c=>{
var M=Math,rd=M.round,T=c.T,i,k,t,b,h,n,ex,Q="inactive",S="chromeYellow",Z="closed",U="up",E="right",W="wink",L="left",
x=c.clamp(c.x,6,c.mx-17),X=x+10,f=c.walk(c.x,x),
C="red orange yellow green blue indigo violet".split(" ").sort(()=>M.random()-.5),
// Pile left of him, bottom first; the blocks drop in one by one.
B=[-6,-4,-2,-5,-3,-5,-3].map((q,j)=>({x:x+q,r:k=6-(j>2)-(j>4),y:k-7-2*j,c:"rainbow_"+C[j],g:"██"})),
TW=B.slice().reverse(),top=TW[6],
F=(e,a,ms,o,ex,col)=>f.push({pose:c.P(e,a),ms,offset:o||0,color:col||"clawd_body",
 props:(ex||[]).concat(B.filter(b=>b.y>-.5&&b.g).map(b=>T(rd(b.x),rd(b.y),b.g,b.c)))}),
// Fly a block along an arc of height h, one cell per frame.
arc=(b,tx,ty,h,fn)=>{for(var x0=b.x,y0=b.y,n=M.max(M.abs(tx-x0),M.abs(ty-y0)),i=1,u;i<=n;i++)u=i/n,b.x=rd(x0+(tx-x0)*u),b.y=rd(y0+(ty-y0)*u-h*4*u*(1-u)),fn(i,n)},
// Bend the lowest m blocks so the top one shifts s columns.
sway=(s,m=7)=>TW.forEach((b,j)=>{if(j<m)b.x=X+rd(s*j*j/36)}),
// Holding his breath turns him blue.
blu=u=>c.rgb(215-95*u,119-20*u,87+140*u),BL=blu(1);

for(t=0;t<20;t++){B.forEach(b=>b.y<b.r&&b.y++);F(t<3?0:L,0,45)}
F(E,0,260);F(W,U,380,0,[T(x+4,2,"!",S,{b:1})]);

// Build: grab, flip it onto his head, hop for the high ones, toss it on top.
for(k=0;k<7;k++){
 b=TW[k];h=M.max(0,k-3);n=k<4?24:30;
 F(L,0,70,1);
 arc(b,x+4,3,2,(i,m)=>F(i<m/2?L:0,U,n));
 for(i=1;i>=-h;i--){b.y=3+i;F(E,U,i>0?60+k*12:40,i)}
 arc(b,X,3-h,k<6,(i,m)=>F(E,i<3?"one-up":0,n+4,rd(h*i/m)-h));
 arc(b,X,6-k,0,()=>F(E,0,n));
 F(k>4?Z:0,0,50+k*25,0,[T(X-1,6-k,"·  ·",Q)]);
 if(k==5)[1,-1,0].forEach(s=>{sway(s,6);F(Z,0,75)})
}
F(W,U,450,0,[T(X-2,0,"✦",S),T(X+3,0,"✦",S)]);

// Wobble: eyes shut, sweating, turning blue... it settles. Phew. Creak!
for(n=c.R(24,30),t=0;t<n;t++){
 h=t<16?t*.19:M.max(0,3-(t-16)*.3);i=t%8;
 sway(rd(h*M.sin(t*.5)));F(t<4?E:Z,t>3&&U,75,0,t>3&&i<3&&[T(x-i,3+(i>>1),"'","permission")],blu(M.min(1,t/14)))
}
sway(0);F(Z,U,380,0,0,BL);F(W,U,320,0,0,BL);F(0,0,450,0,[T(x-5,3,"phew",Q)]);
sway(1);F(E,0,240,0,[T(x+4,3,"!","error",{b:1})]);F(Z,U,300,0,0,BL);
for(i=2;i<5;i++){sway(i);F(0,U,80,0,0,BL)}

// Topple: blocks fly, bounce and pile up; the top one shoots off the stage.
TW.forEach((b,k)=>{b.vx=k&&k*.17+M.random()*.35;b.vy=-k*.05;b.l=!k});
top.vx=-.3;top.vy=-1.5;
for(t=0;t<22;t++){
 ex=[];
 TW.forEach(b=>{
  if(b.l||b.y<-1)return;
  b.vy+=.3;b.x=M.min(b.x+b.vx,c.W-2);b.y+=b.vy;
  for(var g=6;TW.some(o=>o.l&&o.y==g&&M.abs(o.x-rd(b.x))<2);g--);
  if(b.y>=g){b.y=g;ex.push(T(rd(b.x)-1,g,"·  ·",Q));b.vy>1.2?(b.vy*=-.5,b.vx*=.6):(b.l=1,b.x=rd(b.x))}
 });
 F(t<3?0:E,t<6&&U,50,t&&t<3?-1:0,ex,t<3&&BL)
}
F(E,0,450);F(Z,0,550,0,[T(x+3,3,"...",Q)]);

// The lost top block drops onto his head: bonk, dizzy, ta-da.
top.x=x+4;
for(top.y=0;top.y<4;top.y++)F(E,0,top.y>2?40:70,0,top.y&&[T(x+4,top.y-1,"¦¦",Q)]);
top.y=4;F(Z,0,320,1,[T(x+9,1,"bonk!","warning",{b:1}),T(x+1,3,"✦",S),T(x+8,3,"*",S)]);
for(top.y=3,t=0;t<8;t++)i=t&1,k=t>>1&1,F([Z,L,Z,E][t%4],0,110,0,[T(x+7-6*i,2+k,"✦",S),T(x+1+6*i,3-k,"*","warning")]);
F(0,0,280);F(W,U,700,0,[T(x+7,2,"✦",S)]);

// Everything crumbles away, the hat last.
TW.forEach(b=>b.d=c.R(0,4));top.d=5;
for(t=0;t<9;t++){TW.forEach(b=>{i=t-b.d;b.g=i<0?"██":["▓▓","▒▒","░░"][i]});F(t<5?W:0,t<4&&U,85)}
F(0,0,300);f.push({pose:"default"});
return f});
