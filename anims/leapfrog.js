// Clawd and a friend leapfrog across in arcs, about-face, leapfrog back; spinning finale and high five.
$cdA("leapfrog",{title:"Leapfrog",w:50},function(c){
var M=Math,f=[],G=c.G,W=c.W,R=c.R,P=c.P,T=c.T,I="inactive",S="subtle",Y="chromeYellow",O={b:1},s=10,mx=c.mx,x=c.x,i,k,wv,
N=M.min(R(3,4),(mx/s|0)-1),L=(N+1)*s,r=x+L<=mx,l=x>=L,
d=r&&l?c.pick([1,-1]):r?1:l?-1:2*x<mx?1:-1,X=d>0?M.min(x,mx-L):M.max(x,L),
nm=e=>e>0?"right":"left",fc=c.pick(["permission","success","autoAccept","professionalBlue"]),
a={x:X,o:0,p:P()},b={x:d>0?W:-9,o:0,p:P()},E=b.x,q=X+d*s,
FS="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
arc=(i,h)=>{var D=M.abs(10-i);return D>9?0:-M.min(10-D,D<3?2:M.min(h,D))},
F=(ms,pr,cl)=>f.push({x:a.x,offset:a.o,pose:a.p,ms:ms,color:cl||"clawd_body",props:pr||[],actors:[{x:b.x,offset:b.o,pose:b.p,color:fc}]}),
run=(to,e,ms)=>{for(k=0;b.x!=to;k++){var g=M.abs(b.x-to);b.x+=e*(g>16?3:g>6?2:1);b.p=P(nm(e),k>>1&1?"one-up":"down",k%2?"left":"right");
if(wv)a.p=P(nm(d),k>>2&1?"one-up":"down");F(g>6?ms:45,[T(e>0?b.x-2:b.x+10,G+1,"≡",I)])}},
dust=(V,e)=>[T(V.x-1,6,"°",I),T(V.x+9,6,"°",I),T(V.x+(e>0?10:-2),6,"·",I)];
function hop(V,C,e,ms,sp){
var x0=V.x,h=[],hk=sp?4:R(3,4),oof=!sp&&M.random()<.3,ef=nm(e),eb=nm(-e),pr,o,D,t,i,j;
V.o=0;V.p=P(sp?"wink":ef);C.o=1;C.p=P(eb);F(sp?500:R(80,170));
V.o=1;V.p=P("closed");F(sp?220:100);
for(i=1;i<=20;i++){
D=M.abs(10-i);o=arc(i,hk);V.x=x0+e*i;V.o=o;h.push([V.x,o]);
V.p=sp&&i>3&&i<17?{facing:FS[i-4]}:P(ef,D<3?"down":"up");
C.o=D?1:2;C.p=P(D<3?"closed":i<10?eb:ef);pr=[];
for(j=2;j<6&&j<h.length;j++){t=h[h.length-1-j];pr.push(T(t[0]+(e>0?-1:9),G+t[1]+1,sp?c.pick(["✦","✧","*"]):"·",sp?c.rainbow(i+j):j<4?I:S,{z:-1}))}
if(oof&&D<3)pr.push(T(C.x+(e>0?-4:10),5,"oof",I));
if(!D)pr.push(T(C.x,5,"·",I),T(C.x+8,5,"·",I));if(o)pr.push(T(V.x-o,6,"▁".repeat(9+2*o),S,{z:-1}));
F(ms+(D<3?25:o<-2?8:0)+(sp?14:0),pr,sp&&D<8?c.rainbow(i):0)}
V.o=1;V.p=P(eb);C.o=1;C.p=P(ef);F(sp?200:130,dust(V,e))}
f=c.walk(x,X);
// a friend runs in and skids to a stop
a.p=P();F(250);a.p=P(nm(d));F(200);
run(q,-d,22);
F(160,[T(q-1,6,"·",I),T(q+9,6,"·",I)]);
for(k=0;k<4;k++){b.p=P(nm(-d),k%2?"down":"one-up");a.p=P(nm(d),k==2?"one-up":"down");F(170)}
// friend crouches and shows the plan: a dotted arc over its back
b.p=P(nm(d));F(200);b.o=1;b.p=P(nm(-d));F(250);
var hint=[];for(i=2;i<=18;i+=2){hint.push(T(X+4+d*i,3-M.round(3*M.sin(M.PI*i/20)),"·",S));F(45,hint.slice())}
hint.push(T(X+4+d*20,3,d>0?"↘":"↙",S));
F(300,hint);F(250,hint.concat([T(X+4,G-1,"!","warning",O)]));
a.o=-1;a.p=P("open","up");F(120,[T(X+4,G-2,"!","warning",O)]);a.o=0;a.p=P(nm(d));F(150);
// leapfrog forward, getting faster
for(k=0;k<N;k++)hop(k%2?b:a,k%2?a:b,d,44-3*k);
// end of the line: stand, "!", look at each other, hop and about-face
var A=N%2?a:b,B=A==a?b:a;
a.o=b.o=0;a.p=b.p=P(nm(d));F(250);F(300,[T(A.x+4,G-1,"!","warning",O)]);A.p=P(nm(-d));F(250);
a.o=b.o=-1;a.p=b.p=P("closed","up");F(110);a.o=b.o=0;a.p=b.p=P(nm(-d));F(250,dust(A,-d).concat(dust(B,d)));
// leapfrog back; Clawd finishes with a spinning vault
for(k=0;k<N;k++)hop(k%2?B:A,k%2?A:B,-d,34-2*k,k==N-1);
// celebrate, high five, friend leaves
a.o=0;a.p=P("wink","up");F(300,[T(X+1,G-2,"✦",Y),T(X+7,G-1,"✧",Y)]);
b.o=0;b.p=P(nm(-d));F(250,[T(q+4,G-1,"!",fc,O)]);
var gp=X+4+d*5,hc=d>0?X+9:X-1;
[0,-1,-2,-1,0,-1,-2,-1,0].forEach((o,j)=>{a.o=b.o=o;a.p=b.p="arms-up";F(70,j>2?[T(gp,G-2+o,"♥","error")]:[])});
a.p=P(nm(d),d>0?"one-up":"up");b.p=P(nm(-d),d>0?"up":"one-up");F(160);
F(260,[T(hc,G,"✦",Y,O),T(hc-1,G-1,"\\|/","warning")]);F(140,[T(hc,G,"·",I)]);
a.p=P(nm(d),"one-up");b.p=P(nm(d));F(200);wv=1;
run(E,d,22);
f.push({x:X,pose:P("wink"),ms:400},{x:X,pose:"default",ms:200});
return f;
});
