// Clawd splits into a rainbow row of clones that dance staggered waves, jump together, then get sucked back in.
$cdA("clone-army",{title:"Clone army",w:50},c=>{
var f=[],G=c.G,R=c.R,T=c.T,M=Math,Z=M.random,O="clawd_body",i,k,t,g,V,
N=M.min(7,c.mx/10+1|0),sp=M.min(12,c.mx/(N-1)|0),L=c.mx-(N-1)*sp,J=c.clamp((c.x-L/2)/sp+.5|0,0,N-1),X0=c.clamp(c.x-J*sp,0,L),X=X0+J*sp,Dm=M.max(J,N-1-J)*sp,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
PL="error warning success #40d8d0 permission autoAccept".split(" "),B=[],ps=[],ab=[],m,
E={o:"open",l:"left",r:"right",c:"closed",w:"wink",u:"up",n:"one-up"},
P=s=>c.P(E[s[0]],E[s[1]],E[s[2]]),LR=d=>d<0?"r":"l",ft=t=>t%2?"l":"r",RA=()=>[...Array(27)].map(Z),
A=a=>({x:a.x,offset:a.o,pose:a.p,color:a.c,paint:a.pt,hide:a.h}),
S=(ms,pr=[])=>{ps=ps.filter(p=>(pr.push(T(p.x+.5|0,p.y+.5|0,p.t,p.c,{z:-1})),p.x+=p.u,p.y+=p.v,--p.n>0));f.push({...A(m),hide:V,ms,props:pr,actors:B.map(A)})},
Q=(p,ms,pr)=>{m.p=P(p);S(ms,pr)},
em=(x,y,t,c,u,v,n)=>ps.push({x,y,t,c,u,v,n}),
st=(s,g,b=ab.slice())=>(x,y)=>g&&g[y*9+x]<s/9?O:b[(x+y+s|0)%b.length],
bu=(y,n,cs)=>{while(n--)em(X+4,y,c.pick("✦✧*·"),c.pick(cs),R(-4,4)/2,R(-2,0)/2,R(3,5))},
all=fn=>B.forEach(a=>a!=m&&fn(a)),
wv=(n,fn,d,ms,rv)=>{for(t=0;t<(N-1)*d+n;t++){B.forEach((a,j)=>{var p=t-(rv?N-1-j:j)*d;p>=0&&p<n?fn(a,p):(a.o=0,a.p=P(p<0!=rv?"l":"r"))});
 t%3||(k=c.pick(B),em(k.x+R(1,7),G-2+k.o,c.pick("♪♫"),k.c,0,-.5,4));S(ms)}S(200)};
f=c.walk(c.x,X);Z()<.5&&PL.reverse();
for(i=0;i<N;i++)B.push({s:X0+i*sp,x:X,o:0,p:P("o"),c:i-J?PL[i-(i>J)]:O,h:1,d:i<J?-1:1});
m=B[J];
// charge
for(k of"olr")Q(k,300);Q("w",250,[T(X+4,G-1,"!","warning")]);m.o=1;Q("cu",300);m.o=0;
for(i=0;i<18;i++){m.pt=st(9-i/2,RA(),PL);m.x=X+(i>9?i%2:0);t=R(-1,1)*2;k=c.pick([-10,10]);em(X+4+k,G+1+t,"✦",c.pick(PL),-k/5,-t/5,5);S(i>9?40:70)}
m.x=X;m.pt=V;m.c="text";bu(G-1,10,PL);S(90);
// split
for(t=0;t<=Dm;t++){m.c=O;m.p=P("cu");
 all(a=>{var e=t-Dm+(a.s-X)*a.d,w;if(e<0)return;if(e<2){a.h=0;m.c=a.c;m.p=P("wu")}
  a.x=X+a.d*e;w=a.x!=a.s;a.p=P(w?LR(-a.d)+(e%4<2?"d":"n")+ft(e):"o");
  w?e%3==1&&em(a.x+4-5*a.d,6,"·","subtle",0,0,3):t==Dm&&em(a.x+4,G-1,"✦",a.c,0,-.5,3)});
 S(t<Dm?20+300/Dm|0:250)}
// roll call
g=c.pick(B.filter(a=>a!=m));m.c=O;Q("o",300);
for(k of[-1,1]){all(a=>a.d==k&&(a.p=P(LR(a==g?-k:k))));Q(LR(-k),400)}
g.p=P("c");S(150,[T(g.x+4,G-1,"!","warning")]);g.p=P(LR(g.d));S(300);
Q("wn",400);all(a=>a.p=P("on"));S(350);
// waves
g=Z()<.5;
wv(4,(a,p)=>{a.o=-(p%3>0);a.p=P((p-2?"o":"w")+(p%3?"u":"n"))},2,90,g);
wv(5,(a,p)=>{a.o=[1,-1,-2,-1,0][p];a.p=P(p?a.o<0?"ou":"o":"c")},R(1,2),60,!g);
wv(13,(a,p)=>{a.o=-(p>2&&p<10);a.p={facing:FC[p]}},1,45,g);
// all jump
[..."53211123454"].forEach((o,i)=>{o-=4;B.forEach((a,j)=>{a.o=o;a.p=P(o<0?i-4?"ou":"wu":o?"c":"o");a.pt=o<0?(x,y)=>c.rainbow(x+y+i*2+j*3):V});
 if(i>2&&i<7)for(k=4;k--;)em(R(X0,X0+N*sp),0,c.pick("*✦•·"),c.rainbow(k+i),R(-1,1)/3,.5,R(5,9));S(o<-2?120:i?60:280)});
B.forEach(a=>a.p=P("wu"));S(500);
// merge
all(a=>a.p=P(LR(a.d)));Q("o",300);
m.o=1;all(a=>{a.x+=a.d;a.p=P("cd"+ft(a.d))});Q("cu",400);
for(t=0;B.some(a=>!a.h);t++){g=[];m.c=O;m.o=0;
 all(a=>{if(a.h)return;a.x-=a.d;if(a.x==X){a.h=1;ab.push(a.c);m.c=a.c;m.o=1;bu(G-1,3,[a.c])}
  else{a.p=P(LR(a.d)+"u"+ft(t));g.push(T(a.x+4+5*a.d,G+1,"≡","subtle"))}});
 m.pt=ab[0]&&!m.o?st(t):V;S(m.o?60:16+300/Dm|0,g)}
// glow, fade, hic
for(i=0;i<9;i++){m.o=-(i<4);m.c=O;m.pt=st(i);i%3||bu(G-2,2,ab);Q(i<4?"wu":"ou",70)}
for(k=RA(),i=0;i<10;i++){m.pt=st(i,k);Q("o",70)}
m.pt=V;Q("o",250);Q("l",400);Q("r",400);Q("o",300,[T(X+4,G-1,"?","inactive")]);
for(i=R(1,2);i--;){m.o=-1;m.c=c.pick(ab);Q("c",110,[T(X+13<c.W?X+9:X-5,G-1,"hic!",m.c)]);m.o=0;m.c=O;Q("o",450)}
Q("wn",600);
f.push({pose:"default",ms:300});return f});
