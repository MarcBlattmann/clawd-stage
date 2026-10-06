// Musical chairs across the stage: friends drop out, Clawd wins.
$cdA("musical-chairs",{title:"Musical chairs",w:64},c=>{
var G=c.G,P=c.P,R=c.R,T=c.T,C=c.clamp,N=c.pick,W=c.W,L=W+9,O=Math.round,E="left",H="right",U="one-up",
f,i,j,k,q,r,lo,Q,sh,b=0,mu,cy,ps=[],tx=[],K,V=3+W/80|0,
x0=C(c.x,3,W-36),D=Math.min(30,(L-x0-9)/3|0),
cl="permission success autoAccept chromeYellow".split(" ").sort(()=>R(-1,1)),
Pl=[0,1,2,3].map(i=>({u:i?D-9-i*D:x0,x:i?-99:x0,c:i?cl[i]:"clawd_body",y:i%3})),m=Pl[0],
pos=n=>[...Array(n)].map((_,j)=>O((j+.5)*W/n)-5),
dd=(p,j)=>Math.abs(K[j].x+1-p.x),
nd=p=>Math.min(...K.map((k,i)=>dd(p,i))),
X=(...a)=>tx.push(T(...a)),
em=(x,y,t,k,vx,vy,l)=>ps.push({x,y,t,k,vx,vy,l}),
du=x=>[-1,1].map(d=>em(x+4+5*d,6,"·","inactive",d*.7,0,3)),
rc=()=>c.rainbow(R(0,9)),
sp=(x,y,n)=>{while(n--)em(x,y,N("*✦·•"),rc(),R(-6,6)/4,R(-4,2)/4,R(3,6))},
see=(p,x)=>x<p.x?E:H,
ft=()=>b%2?E:H,
vis=p=>p.x>-9&&p.x<W,
say=(p,t)=>X(p.x+4,G-1+p.o,t,"warning",{b:1}),
go=(s,d)=>{lo.s="l";lo.sad=s;lo.o=0;lo.dir=d},
Z=(n,ms,fn)=>{for(i=0;i<n;i++){fn(i);S(ms>0?ms:ms(i))}},
S=ms=>{b++;var pr=[],a=[],g=mu>1;
 Pl.map((p,i,d,s=p.s)=>{
  if(s=="r"){p.x=p.u+=p.u<W-2?2:2-L;p.o=-(p.y>1&&b%4<1);
   p.p=P(b%11==i*3?"wink":H,p.y==1?b%4<2?"up":U:b&2?U:0,ft())}
  if(s=="w"){p.o=0;if(p.d>0&&!(K[p.j]||0).oc){p.d--;p.p=P(b&2?E:H);say(p,"?")}
   else{d=C(p.t-p.x,-2,2);p.x+=d;p.p=P(d<0?E:H,"up",ft());
    d?X(d>0?p.x-2:p.x+10,G+1,"≡","subtle"):p.h>=0?(p.s="s",p.o=-1,K[p.h].oc=1,du(p.x-1)):p.s="o"}}
  if(s=="l"){p.x+=p.dir?-V:V;p.p=P(p.sad?"closed":p.dir?H:E,p.sad?0:U,ft());
   p.sad&&X(p.x+3,G-2,"☁","inactive")&&X(p.x+3+b%2,G-1,"'","permission");
   vis(p)||(p.s=0)}});
 mu&&(g||(sh=-b),[0,1].map(y=>pr.push(c.tile("♪      ♫     ",y,g?"subtle":c.rainbow(4*y+(b>>2)),sh-5*y,{z:-1}))));
 K.map(k=>{k.y+=k.v;k.v>0&&k.y>=0&&(k.y=k.v=0,du(k.x));
  k.x+=C(k.tx-k.x,-3,3);k.v<0&&em(k.x+R(0,8),k.y+7,"·","subtle",0,0,2);
  pr.push(...c.art(k.x,4+k.y,["▐","▐"+"▀".repeat(8),"▐       ▐"],k.c,{z:-!k.oc}))});
 cy>=0&&X(m.x+3,Math.min(cy++,G-1+m.o),"▲▲▲","chromeYellow");
 ps=ps.filter(q=>(pr.push(T(O(q.x),O(q.y),q.t,q.k)),q.x+=q.vx,q.y+=q.vy,--q.l>0));
 Pl.map((p,i)=>i&&vis(p)&&a.push({x:p.x,offset:p.o,pose:p.p,color:p.c}));
 f.push({x:m.x,offset:m.o,pose:m.p,hide:m.x<-7||m.x>W-2,ms,props:pr.concat(tx),actors:a});tx=[]};
f=c.walk(c.x,x0,{ms:30});
K=pos(3).map((x,j)=>({x,tx:x,y:-7-3*j,v:1,c:c.hsv(24,.6,.7+j/9)}));
for(;q=K.find(k=>k.v);S(45))m.p=P(see(m,q.x));
m.p=P("wink","up");sp(m.x+4,G-1,6);S(320);
for(r=0;r<3;r++){
 Q=Pl.filter(p=>!(p.h<0));
 Q.map(p=>{r&&(p.u=p.x);p.s="r"});mu=1;
 for(j=r?R(14,24):R(8,16)+(3-Pl[3].u>>1);j--;S(50))b%3||(q=N(Q.filter(vis)))&&em(q.x+R(2,6),G-2+q.o,N("♪♫"),rc(),.3,-.4,4);
 mu=2;Q.map(p=>{p.s=0;p.p=P(0,p.p.arms,p.p.feet);say(p,"!")});S(450);mu=0;
 Q.map(p=>{p.s="w";p.d=R(0,2)});
 lo=Q.slice(1).sort((a,z)=>nd(z)-nd(a))[0];lo.h=-1;Q.filter(p=>p!=lo).sort((a,z)=>a.x-z.x).map((p,i)=>p.t=K[p.h=i].x+1);
 j=K.findIndex((k,i)=>dd(lo,i)==nd(lo));lo.j=j;lo.d=W;
 k=K[j].x;lo.t=k>5&&(lo.x<k||k>c.mx-11)?k-9:k+11;
 while(Q.some(p=>p.s=="w"))S(35);
 k=see(lo,k);
 Z(6,i=>i<3?200:110,i=>{Q.map(p=>p.s=="s"&&(p.p=P(i<3?p==m?"wink":0:see(p,lo.x),i<3?i%2?"up":U:0)));
  lo.p=P(i<3||r>1?k:"closed");lo.o=i>2&&r<2?1:0;i<3&&say(lo,i?"?!":"?")});
 if(r<2){
  Q.map(p=>p.h<0||(p.s=0,p.o=-2,p.p=P(0,"up"),K[p.h].oc=0));S(80);
  go(1,lo.x+4<W/2);Z(7,50,i=>Q.map(p=>p.h<0||(p.o=0,p.p=P(see(p,lo.x)))));
  j=R(0,2-r);K[j].v=-1;q=pos(2-r);K.filter(k=>!k.v).map((k,i)=>k.tx=q[i]);
  for(;K[j].y>-8;S(45))Q.map(p=>p.h<0||(p.p=P(see(p,K[j].x))));
  K.splice(j,1)}}
cy=0;Z(3,110,i=>m.p=P("closed"));
sp(m.x+4,2,8);for(q=R(0,4);q<W;q+=R(3,7))em(q,R(-3,0),N("*✦·•♦"),rc(),R(-1,1)/4,R(3,6)/10,R(8,14));
Z(11,110,i=>{m.p=P(i%4<2?"wink":0,i%2?"up":U);lo.p=P(see(lo,m.x),i%2?"up":0);i>4&&i<9&&X(lo.x+4,G-2,"♥","error")});
go(0,lo.x<m.x);
for(;Pl.some(p=>p.s=="l");S(45))m.p=P(see(m,lo.x),b&2?"up":U);
m.o=-2;m.p=P(0,"up");S(90);m.o=0;m.p=P();(k=K[0]).oc=0;du(m.x);S(140);
for(k.v=-1;k.y>-8;S(45))m.p=P("wink");K=[];
m.o=1;m.p=P("closed");S(300);m.o=0;cy=-9;m.p=P("wink","up");sp(m.x+4,G-1,10);
while(ps.length)S(60);
f.push({pose:"default",ms:300});return f});
