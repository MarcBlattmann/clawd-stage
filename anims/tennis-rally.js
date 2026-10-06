// Tennis with a friend across a net: the rally speeds up, the friend whiffs a smash on Clawd's lob, "15-0", Clawd celebrates.
$cdA("tennis-rally",{title:"Tennis rally",w:50},c=>{
var f,G=4,W=c.W,R=c.R,P=c.P,T=c.T,M=Math.round,Q=Math.random,C=c.clamp,i,j,k,d,l,h,v,a,b,bx,pts,px,py,pr,
D=C(W-18,30,40),x=C(c.x,0,c.mx-D-2),fx=x+D,N=x+fx+8>>1,A=x+11,B=fx-3,
Y="#d7fa46",I="inactive",U="subtle",CY="chromeYellow",X="text",bo={b:1},fc=c.pick(["permission","autoAccept"]),
E="closed",Op="open",Wk="wink",OU="one-up",Lf="left",Rg="right",F=i=>i%2?Lf:Rg,m={r:-1,o:0},n={x:W,r:0,o:0},nh=0,zc=0,
// racket: ready, up, hit, follow-through
K=[[9,1,"╱╲",10,0],[8,-1,"││",8,-2],[9,1,"──",10,1],[9,-1,"╱╲",10,-2]],
rk=(a,Z,e,q=K[a.r],F=d=>e?Z+8-d:Z+d)=>a.r<0||Z>=W?[]:[T(F(q[0]),G+a.o+q[1],q[2][e],I,bo),T(F(q[3]),G+a.o+q[4],"○",X,bo)],
st=(a,r,e)=>{a.r=r;a.p=P(e||(a==m?Rg:Lf),r%2?a==m?OU:"up":"down")},
du=[T(N-1,6,"· ·",U)],ds=k=>[k,k-1].map(i=>pts[i][1]>5&&pr.push(T(pts[i][0]-1,6,"· ·",U))),
ba=(p,y,ch)=>T(p,y,ch||"●",Y,bo),
S=(ms,pr=[])=>f.push({x,pose:m.p,offset:m.o,ms,props:[..."┬┼┴"].slice(0,nh).map((t,k)=>T(N,7-nh+k,t,k?I:X)).concat(rk(m,x,0),rk(n,n.x,1),pr,zc?c.art(N-3,0,["╭────╮","│15-0│","╰────╯"],zc,bo):[]),actors:n.x<W?[{x:n.x,pose:n.p,offset:n.o,color:fc}]:[]}),
pa=(a,b,y,z,H,o=[])=>{for(var k=o[0]?1:0,L=Math.abs(b-a),q;k<=L;k++)q=k/L,o.push([a+(b>a?k:-k),M(y+(z-y)*q-4*H*q*(1-q))]);return o};
f=c.walk(c.x,x);m.p=P(Rg);
// net rises, racket drops in, friend arrives
for(;nh<3;)nh++,S(110,du);
S(250);m.p=P(Op,OU);S(150);
for(i=-4;i<1;)S(70,rk({r:1,o:i++},x,0));
st(m,1);S(250,[T(x+10,1,"✦",CY)]);st(m,0);S(200);
k=C(1200/(W-fx)|0,20,45);
for(i=0;n.x>fx;S(k))n.x-=n.x-fx>12?2:1,n.p=P(Lf,"down",F(i++));
st(n,0);S(300);n.p=P(E);S(150);st(n,0);
for(i=5;i--;)m.o=n.o=-(i%2),S(110);
// serve, then a rally that speeds up
st(m,1,Op);
[..."3210012"].map((y,i)=>S(i>2&&i<5?140:80,[ba(x+9,+y)]));
S(70,[ba(x+9,2,"✶")]);
for(j=0;j<2*R(2,3);j++){
l=j%2;h=l?n:m;v=l?m:n;a=j?l?B:A:x+9;b=l?A:B;bx=a+M((b-a)*(.7+Q()/9));
pts=j&&R(0,9)<j?pa(a,b,5,5,2.4):pa(bx,b,6,5,1,pa(a,bx,j?5:2,6,j?4.6-j*.2+Q()/2:2));
for(k=1;k<pts.length;k++){
l=pts.length-1-k;
st(h,k<3?3:0);st(v,l>3?0:l?1:2,l?0:E);v.o=-(k==1);h.o=0;
pr=[ba(...pts[k],l?0:"✶")];
k>1&&pr.push(T(...pts[k-1],"·",I));k>2&&j>2&&pr.push(T(...pts[k-2],"·",U));
ds(k);S(l?52-6*j:90,pr)}}
// lob: the friend whiffs the smash
l=C(W-2,fx+13,fx+18);pts=pa(l+7,l+11,6,6,1,pa(l,l+7,6,6,2,pa(A,l,5,6,5.5)));
st(m,3);
for(k=1;k<pts.length;k++){
[px,py]=pts[k];d=n.x-px;if(px>W)break;
pr=[T(px,6,"_",U,{z:-1}),ba(px,py),T(...pts[k-1],"·",I)];
k>2&&st(m,0);
if(px<=N)st(n,0);
else if(d>5&&n.x<fx+2)n.x++,n.r=1,n.p=P(Lf,"up",F(n.x));
else if(d>5)st(n,1);
else if(d>3)n.o=1,st(n,1,E);
else if(d>1)n.o=-1,st(n,1);
else if(d>-3){n.o=-2+(d<0);st(n,2,E);if(d>0)pr.push(T(n.x-2,2+n.o,"(",U),T(n.x-3,3+n.o,"(",U))}
else n.o=d>-5?-1:d==-6?1:0,st(n,0,Rg);
ds(k);S(62-6*py,pr)}
n.o=0;st(n,0,E);S(400,[T(n.x+4,3,"?",I)]);
// 15-0, Clawd celebrates
S(90,[T(N-1,1,"✦",CY,bo)]);S(90,[T(N-2,1,"15-0",CY,bo)]);
for(m.r=i=1;i<15;i++){m.o=-[0,1,2,1][i%4];m.p=P(i%4==2?Wk:Rg,"up");
n.p=P(i<7?E:i<11?Lf:Wk);zc=i%2?CY:X;
for(pr=[],j=0;j<3;j++)pr.push(T(N+R(-8,7),R(0,3),"✦✧*·"[R(0,3)],c.rainbow(R(0,9))));
S(i%4==2?140:90,pr)}
m.o=0;st(m,1,Wk);S(400);
// friend leaves, net sinks, racket tossed to the stars
l=W-n.x;k=C(1000/l|0,20,45);
for(i=0;n.x<W;i++)zc=[CY,X,I,U][i*4/l|0],n.x+=i>9?2:1,n.p=P(i<6?Lf:Rg,i%6<3?OU:"down",F(i)),S(k);
zc=0;st(m,0);S(150);
for(;nh>0;nh--)S(120,du);
S(250);st(m,1,Op);S(150);m.r=-1;m.p=P(Op,"up");
[12,10,-10].map(q=>S(70,[T(x+8,q/10|0,"○",X,bo),T(x+8,q%10,"│",I)]));
S(300);S(250,[T(x+8,0,"✦",CY)]);S(150,[T(x+8,0,"·",U)]);
m.p=P(Wk);S(400);m.p=P();S(200);
return f});
