// Sumo: Clawd and a big purple friend stomp, clash and shove across the ring; at the bales Clawd flips him out, cushions fly, they bow.
$cdA("sumo-match",{title:"Sumo",w:64},c=>{
var{round:M,sign:Q,max:X,min:N,sin,PI}=Math,f=[],G=c.G,P=c.P,R=c.R,C=c.T,W=c.W,m=W>>1,L=X(10,W/10|0),E=W-1-L,
lf="left",rt="right",cl="closed",U="up",O="one-up",Y="warning",
A={x:c.x,o:0,p:P(),c:"clawd_body",b:"permission",g:0,d:1},B={x:W,o:0,c:"autoAccept",b:"error",g:1,d:1},
ps=[],tx=[],rf=-3,bl,i,j,k,t,a,z,w,
T=(...a)=>tx.push(C(...a)),
K=(x,y,s)=>T(x,y,s,Y,{b:1}),
em=(x,y,s,k,u,v,n,g,h)=>ps.push({x,y,s,k,u,v,n,g:g||0,h}),
du=(x,n)=>{while(n--)em(x,6,c.pick("░▒·°"),"inactive",-R(0,4)/10,R(-9,9)/10,R(3,6),.1)},
sp=(x,y,n,k)=>{while(n--)em(x,y,c.pick("✦✧*·"),k||Y,R(-6,4)/10,R(-9,9)/10,R(3,5))},
bang=a=>K(a.x+4,G-2+a.o,"!"),
// belt, topknot, wide belly
dk=(a,y)=>(y=G+a.o,(a.d?[C(a.x+2,y+1,"▄▄▄▄▄▄",a.b,{bg:a.c}),C(a.x+4,y-1,"▄","#7a5a48")]:[]).concat(a.g&&a.x>-9&&a.x<W?[C(a.x-1,y+1,"▐",a.c),C(a.x+9,y+1,"▌",a.c)]:[])),
S=(ms,n=1)=>{while(n--){var r=[],y=rf,Z={z:-1};
 r.push(C(L-2,y,"◢"+"█".repeat(E-L+3)+"◣","#9a5b34",Z),C(L-2,y+1,"▀".repeat(E-L+5),"#7d4aa8",Z));
 [[L-2,"#2aa198"],[E+2,"error"]].map(([x,k])=>r.push(C(x,y+2,"│",k,Z),C(x,y+3,"●",k,Z)));
 bl&&[L,E].map(q=>r.push(C(q-1,6,"▄█▄","#d4b06a",Z)));
 ps=ps.filter(p=>(r.push(C(M(p.x),M(p.y),p.s,p.k)),p.x+=p.v,p.y+=p.u,p.u+=p.g,p.h&&p.y>6&&(p.y=6,p.u=p.g=p.v=0),--p.n));
 f.push({x:A.x,offset:A.o,pose:A.p,ms,props:r.concat(dk(A),B.h?[]:dk(B),tx).filter(p=>p.y>=0&&p.y<7),actors:B.h?[]:[{x:B.x,offset:B.o,pose:B.p,color:B.c}]})}tx=[]},
ft=k=>k%2?lf:rt,
// teeter at the bales
tt=(a,n,e)=>{for(i=0;i<n;i++){a.o=-(i%2);a.p=P(i%2?cl:e,i%2?U:O,i%2?lf:0);bang(a);S(130)}},
go=(a,b,ms,fa,fb,e)=>{for(k=0;A.x-a|B.x-b;k++){[[A,a,fa],[B,b,fb]].map(([o,q,w])=>{var d=q-o.x,s=Q(d);o.x+=d*d>99?2*s:s;o.p=P(d?s>0?rt:lf:w,e,d?ft(k):0);d&&o.g&&k%3<1&&du(o.x+4,1)});S(ms)}},
// shove the contact point to `to`
pu=(to,ms,ac,st)=>{for(k=0;t=to-B.x;k++){var s=Q(t),d=s*N(st,t*s);A.x+=d;B.x+=d;
 A.p=P(s>0?rt:cl,O,s>0?ft(k):0);B.p=P(s<0?lf:cl,U,s<0?ft(k):0);
 k%2&&du(s<0?A.x+1:B.x+7,1);k%3||(a=s<0?A:B,em(a.x+4,G-1,"'","permission",-.3,-.4*s,3));S(X(30,ms-k*ac))}};
// suit up, roof drops, bales, walk in
sp(A.x+4,G,6,"text");
for(;rf<0;rf++)S(70);
bl=1;du(L,4);du(E,4);S(120);
go(m-12,m+3,45,rt,lf);
// salt toss
A.p=P(rt,O);B.p=P(lf,U);
for(i=6;i--;)[[A.x+8,1],[B.x,-1]].map(([x,s])=>em(x,G-1,"·","text",-R(4,7)/10,s*R(2,9)/10,R(7,10),.15));
S(80,6);
// shiko stomps
for(j=0;j<4;j++){a=j%2?B:A;t=j<2?lf:rt;k=a.g;
 a.p=P(cl,U,t);z=t==lf;w=z?a.x+9+k:a.x-3-k;T(w+!z,G+1,z?"▄▀":"▀▄",a.c);T(w+2*z,G,"▄",a.c);S(280);
 a.o=1;a.p=P(a==A?rt:lf);du(a.x+(t==lf?6:1),k?9:4);k&&(A.o=-1,A.p=P(cl),bang(A));S(70);
 a.o=A.o=0;A.p=P(rt);S(190)}
// crouch, stare, charge, clash
A.o=B.o=1;A.p=P(rt);B.p=P(lf);S(420);A.p=P(cl);S(90);A.p=P(rt);S(240);
bang(A);bang(B);S(160);
A.o=B.o=0;A.p=P(rt,U);B.p=P(lf,U);
for(i=3;i--;){A.x++;B.x--;T(A.x-2,G+1,"≡","subtle");T(B.x+10,G+1,"≡","subtle");S(35)}
K(m-1,G,"✸");sp(m,G,8);A.x--;B.x++;A.p=B.p=P(cl,U);S(90);A.x++;B.x--;S(60);
for(i=0;i<4;i++){A.p=P(i%2?rt:cl,O);B.p=P(lf,U,i%2?lf:0);S(150)}
pu(m-4,120,4,1);
A.p=P(rt,O);bang(A);S(250);
pu(E-10,80,3,2);
tt(B,5,rt);
B.o=0;B.p=P(lf,U);S(200);
pu(L+11,90,5,2);
tt(A,6,lf);
// utchari: heave him over and out
A.o=1;A.p=P(cl,U);B.o=-1;B.p=P("open",U);S(150);
for(t=B.x,i=1;i<11;i++){B.x=M(c.lerp(t,X(0,L-12),i/10));B.o=-M(2.4*sin(PI*i/10))||0;B.p=P(i%2?cl:"open",i%2?U:0,ft(i));
 A.p=P(i<6?cl:lf,U);em(B.x+4,G+B.o+1,"·","subtle",0,0,4);S(55)}
B.o=1;B.p=P(cl);du(B.x+4,12);K(B.x+2,G-1,"✸ ✸");A.o=0;A.p=P(lf,U);S(90);
// cushions fly in, he sees stars
for(i=0;i<14;i++){i<8&&[0,W-3].map((x,s)=>em(x,R(3,4),"▄▄",c.rainbow(R(0,6)),-R(2,4)/10,(s?-1:1)*R(5,20)*W/800,40,.08,1));
 A.o=i%4==1?-1:0;A.p=P(i%4==1?"wink":lf,U);T(B.x+2+i%3,G-2+B.o,i%2?"✧ ✦":"✦ ✧",Y);S(90)}
A.o=B.o=0;for(i=0;i<4;i++){B.p=P(i%2?lf:rt);S(120)}
go(m-4,m-16,40,lf,rt);
// bow, friend leaves, pack up
S(250);A.o=B.o=1;A.p=B.p=P(cl);S(600);A.o=B.o=0;A.p=B.p=P("wink",O);T(m-6,G-2,"♥","error");S(450);
go(m-4,-9,40,lf,lf,O);B.h=1;
A.p=P();S(200);A.d=bl=0;sp(A.x+4,G,6,"text");du(L,3);du(E,3);A.p=P(cl);
for(;rf>-4;rf--)S(70);
while(ps.length)S(60);
f.push({x:A.x,pose:"default",ms:200});return f});
