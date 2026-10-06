// Three Clawds water-fight across the stage: squirt-gun arcs, a dodge, balloons, a soaked friend, then a giant bucket dumped on Clawd.
$cdA("water-fight",{title:"Water fight",w:64},function(c){
var f=[],W=c.W,G=c.G,P=c.P,T=c.T,K=c.mx,C=c.clamp,{round:mr,min:mn,max:mx,abs:ab,random:rn}=Math,
WC="#5aa0ff",LC="#9cd0ff",RC="#c8a069",X="text",u="up",o1="one-up",cl="closed",wk="wink",lf="left",rt="right",op="open",Zb={z:-1},
x=C(c.x,22,K-22),
N=(x,d,c,k)=>({x,d,c,k,o:0,w:0}),
m=N(x,1,[215,119,87],"chromeYellow"),A=N(-9,1,[78,186,101],"error"),B=N(W,-1,[180,120,230],"warning"),
Z=[m,A,B],pt=[],ex=[],i,j,k,y,
st=i=>i%2?lf:rt,
tp=(q,a)=>q.x+(q.d>0?9+a:-2-a/2),
pz=q=>P(q.e||(q.d>0?rt:lf),q.a||"down",q.f||"both"),
cz=q=>c.rgb(...q.c.map((v,i)=>mr(v+([70,140,255][i]-v)*q.w))),
pp=(x,y,u,v,h,c,l)=>pt.push({x,y,u,v,h,c,l}),
sp=(x,y,n,s)=>{while(n--)pp(x,y,(rn()-.5)*s,-rn()-.4,c.pick("·°'*·"),c.pick([WC,LC,X]),c.R(4,8))},
S=(ms,pr)=>{Z.map(q=>q.w>.6&&rn()<.4&&pp(q.x+c.pick([0,1,7,8]),G+q.o+1,0,0,"·",WC,3));pt=pt.filter(p=>p.l-->0);
f.push({x:m.x,offset:m.o,pose:pz(m),color:cz(m),ms,
props:ex.concat(Z.filter(q=>q.g).map(q=>T(tp(q,0),G+q.o+1,q.d>0?"╦═":"═╦",q.k)),pr||[],pt.map(p=>T(mr(p.x+=p.u),mr(p.y+=p.v+=.3),p.h,p.c))),
actors:[A,B].map(q=>({x:q.x,offset:q.o,pose:pz(q),color:cz(q)}))})},
M=(e,ms,pr)=>{m.e=e;S(ms,pr)},
Y=(x,t)=>T(x,G-1,t,"warning",{b:1}),
arc=(sx,sy,tx,ty,h,a,b,ch,cc)=>{for(var o=[],n=ab(tx-sx)||1,s=tx>sx?1:-1,i=mr(mx(0,a)*n),v,y,py=-9,q;i<=mr(mn(1,b)*n);i++){v=i/n;y=mr(sy+(ty-sy)*v-4*h*v*(1-v));
if(y==py){q.t+=ch;if(s<0)q.x--}else o.push(q=T(sx+s*i,y,ch,cc)),py=y}return o},
// squirt q->t: stream arcs over, hits (knockback, wetter), runs out
Q=(q,t,fx)=>{var s=q.d,sx=tp(q,2),tx=t.x+(s>0?1:7),d=ab(tx-sx),h=C(d/22,1,3),n=C(d/6|0,7,13);q.e=0;
for(k=0;k<n+10;k++){if(k==n){t.e=cl;t.w=mn(1,t.w+.3);t.x+=s}
if(k>=n&&k<n+6)sp(tx,G+1,2,2.5);fx&&fx(k,n);
S(k<n?30:45,arc(sx,G+1,tx,G+1,h,(k-n-4)/6,(k+1)/n,"~",k%2?WC:LC))}
t.x-=s;t.e=0},
L=(q,tx,ty,fx)=>{var sx=q.x+4,n=C(ab(tx-sx)/4|0,10,20);
q.a=u;q.e=0;S(350,[T(sx,3,"●",WC)]);q.a=o1;
for(k=1;k<=n;k++){fx&&fx(k,n);S(32,arc(sx,3,tx,ty,2.5,(k-3)/n,(k-1)/n,"·",LC).concat(arc(sx,3,tx,ty,2.5,k/n,k/n,"●",WC)))}
q.a=0;sp(tx,ty,14,3.5);S(70,[T(tx-1,ty,"*✶*",LC)])},
bu=(y,fl)=>{var b=m.x-1,o=[T(b+5,0,"╭"+"─".repeat(B.x-m.x+3)+"╮",RC)];
for(i=1;i<G+B.o;i++)o.push(T(B.x+8,i,"│",RC));
return y<-2?[]:o.concat(c.art(b,y,fl?[" ▟███████▙","▐█████████▌"]:[" ╭───┴───╮","▐         ▌"," ▜███████▛"],"error"),fl?[]:T(b+1,y+1,"~~~~~~~~~",WC))},
V=(d,fx)=>{for(k=0;k<10;k++){A.x+=d;B.x-=d;A.f=B.f=st(k);fx(k);S(52)}A.f=B.f=0};

f=f.concat(c.walk(c.x,x));
V(1,k=>m.e=k<5?lf:rt);M(0,300);
Z.map(q=>q.g=1);S(140,Z.map(q=>T(tp(q,2),G,"✦",X)));M(wk,450);
A.e=wk;S(300);M(lf,150);
Q(A,B,(k,n)=>{m.o=k<1||k>n+7?1:2;m.e=cl});
m.o=0;B.e=cl;M(rt,300,[Y(B.x+3,"!?")]);
B.e=0;m.a=u;M(op,450);m.a=0;
Q(B,m);M(cl,250);M(0,150);
Q(m,B);m.d=-1;S(200);
Q(m,A);S(200);
A.g=0;L(A,m.x+4,6,(k,n)=>{m.e=lf;if(k>n-7&&k<n-1)m.x++,m.f=st(k)});
m.f=0;ex.push(T(m.x-4,6,"▁▂▂▁",WC,Zb));M(wk,400);
m.g=0;L(m,A.x+4,G);A.w=1;A.e=cl;A.o=1;sp(A.x+4,G,10,4);S(200);A.o=0;S(500,[T(A.x+3,G-1,"...",LC)]);
B.g=0;B.a=o1;
for(k=0;k<8;k++){m.a=k%2?u:o1;m.f=st(k);A.e=k>4?wk:rt;M(k%4<2?wk:lf,220,bu(mr(-2+k*3/7)||1))}
m.a=m.f=0;B.e=wk;M(rt,450,bu(1));
M(op,350,bu(1).concat(Y(m.x+10,"!")));
B.o=1;B.e=cl;S(80,bu(1).concat(T(m.x+1,0,"° · °",LC)));
var bc=m.x+4,s=mx(2,mx(bc,W-bc)/15+1|0),wl,wr;
for(j=0;;j++){wl=bc-6-(j-3)*s;wr=bc+6+(j-3)*s;y=j<9?1:9-j;
if(j>3&&wl<-6&&wr>W+6&&y<-2)break;
var pr=bu(y,1);
if(j<8)for(i=3;i<=mn(6,3+j);i++)pr.push(T(m.x,i,"█▓▒░"[j>>1].repeat(9),WC));
if(j){m.w=1;m.o=+(j>1&&j<10);m.e=cl}
if(j==3){sp(bc-5,6,9,3);sp(bc+5,6,9,3);ex.push(T(m.x-1,6,"▁"+"▂".repeat(9)+"▁",WC,Zb))}
j>1&&j<7&&pr.push(T(bc+7,2,"SPLOOSH!",LC,{b:1}));
j>2&&pr.push(T(wl-2,6,"~^~··",WC),T(wr-2,6,"··~^~",WC));
A.o=j>2&&ab(wl-A.x-4)<5?-1:0;A.a=A.o?u:0;
B.o=j<2?1:j>2&&ab(wr-B.x-4)<5?-1:0;B.e=0;B.a=y>-3?o1:0;
S(j<4?70:40,pr)}
A.o=B.o=A.a=B.a=m.o=0;
M(cl,500);M(op,250);M(cl,110);M(op,300);
for(k=0;k<8;k++){m.x+=k%2?-1:1;m.w-=.07;sp(m.x+4,G+1,3,7);M(cl,55)}
for(k=0;k<6;k++){j=k%2;A.e=B.e=cl;A.a=B.a=j?u:0;A.o=B.o=-j;m.a=k>2&&j?u:0;m.w=mx(0,m.w-.07);
M(k>2?wk:op,170,(j?k>2?Z:[A,B]:[]).map(q=>T(q.x+3,q==m?2:1,"ha",X)))}
A.d=-1;B.d=1;A.e=B.e=A.a=B.a=A.o=B.o=0;
V(-1,k=>{m.a=k%4<2?o1:0;m.e=wk;m.w=mx(0,m.w-.06);if(k>5)ex=[]});
m.w=m.a=0;S(250);
f.push({x:m.x,pose:"default",ms:300});
return f});
