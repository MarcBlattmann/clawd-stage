// Pigeons peck crumbs; Clawd tosses bread, the flock gathers, then he charges through and they burst up in a wave.
$cdA("pigeon-flock",{title:"Pigeons",w:64},function(c){
var M=Math,R=c.R,T=c.T,W=c.W,G=c.G,U=M.round,A=M.abs,Z={z:-1},rnd=M.random,
d=c.x<c.mx/2?1:-1,n=M.min(14,W>>3),h=n*2,nd=2*h+16,
x=d>0?M.min(c.x,W-nd-4):M.max(c.x,nd-4),f=c.walk(c.x,x,{ms:45}),
zc=x+4+d*(h+12),hx=d>0?x+8:x,P=[],cr=[],B=[],tk=0,e="open",a="down",ft="both",o=0,br="",cl=0,st,i,j,k,b,
YL=["#e0b46a","warning","#c99a5a"],D1=d>0?"right":"left",D0=d>0?"left":"right",TX="text";
function sg(v){return v<0?-1:1}
function cm(X,t){cr.push({x:c.clamp(X,0,W-1),t:c.pick("·.,·"),k:c.pick(YL),b:t||0})}
function S(X,Y,u,v,t,k,m,g,q){P.push({x:X,y:Y,u:u,v:v,t:t,k:k,n:m,g:g||0,c:q})}
function go(b,X,l,g){var D=A(X-b.x)+1;b.u=b.x;b.v=b.y;b.e=X;b.p=0;b.s=1;b.l=l;b.h=g||D<9?0:M.min(3.5,1+D/12);b.w=g||b.h?1/(4+D/6):.5/D;b.f=sg(X-b.x)}
function H(s){return B.some(function(b){return b.s==s})}
function F(ms,ex){
var p=[],q=a=="down";tk++;
if(cl)cr=cr.filter(function(){return rnd()>.25});
cr.forEach(function(q){tk<q.b||p.push(T(q.x,6,q.t,q.k,Z))});
P=P.filter(function(q){return q.c&&q.y>5.5?cm(U(q.x)):q.n-->0});
P.forEach(function(q){p.push(T(U(q.x),U(q.y),q.t,q.k,Z));q.x+=q.u;q.y+=q.v;q.v+=q.g});
B.forEach(function(b,i){
var X,Y,pk=0,m=0;
if(b.s==1&&b.l--<1){b.p=M.min(1,b.p+b.w);b.x=c.lerp(b.u,b.e,b.p);b.y=c.lerp(b.v,5,b.p)-b.h*M.sin(M.PI*b.p);b.s=b.p<1;pk=tk%2*2}
if(b.s==2){b.t++;b.x+=d*M.min(2.4+b.a/2,1+b.t*.18);b.y=M.max(b.a+M.sin(b.x*.25-tk*.5)*.9,5-b.t*.9);if(b.x<-3||b.x>W+2)b.s=3}
X=U(b.x);Y=U(b.y);
// peck, or waddle to a crumb bobbing the head
if(b.s==0&&!b.q){
if(b.k>0){b.k--;pk=1;cr=cr.filter(function(q){return A(q.x-X-2*b.f)>1})}
else if(rnd()<.25){cr.forEach(function(q){var v=q.x-X;if(tk>=q.b&&A(v)<9&&(!m||A(v)<A(m)))m=v});
if(A(m)>3){b.f=sg(m);if(B.every(function(o){return o==b||A((o.s==1?o.e:o.x)-X-b.f)>4}))b.x+=b.f,pk=2}else{if(m)b.f=sg(m);b.k=R(1,3)}}
else if(rnd()<.05)b.f=-b.f}
if(b.s>2)return;
if(b.s==2||Y<5)p.push(T(X-1,Y,(tk+i)%4<2?"▀ ▀":"▄ ▄",b.bc),T(X,Y,"●",b.hc));
else p.push(T(X-1,6,b.f>0?"◥██":"██◤",b.bc,Z),T(X+b.f*(pk?2:1),pk==1?6:5,"●",b.hc,Z))});
if(br)p.push(T(q?x+4+5*d:hx,q?G+1:G-1,br,"#d9a55b"));
f.push({x:x,offset:o,pose:c.P(e,a,ft),ms:ms,props:p.concat(ex||[])})}
// the flock glides in
for(k=0;B.length<n&&k<999;k++){j=R(2,W-3);if(A(j-x-4)>9&&B.every(function(b){return A(b.e-j)>4})){
b={x:j<W/2?-3:W+2,y:R(0,2),a:.5+rnd()*1.7,hc:c.hsv(R(150,290),.45,.8),bc:c.hsv(R(0,2)?230:25,.15,R(66,82)/100)};
go(b,j,R(0,20),1);B.push(b);cm(j+R(3,5),R(0,12));cm(j-R(3,7),R(0,12))}}
n=B.length;
for(i=0;i<44||H(1);i++){i%14||(e=c.pick([D0,D1,"open"]));if(i==30)e="wink",S(x+4,G-1,0,-.3,"♥","error",6);F(60)}
// all eaten: bread toss
e=D1;F(400,[T(x+4,G-1,"!",TX,{b:1})]);
for(j=0;j<6;j++){
br="▓▓▒▒░░"[j];a="down";F(150);a=d>0?"one-up":"up";
if(!j)B.sort(function(p,q){return p.x-q.x}).forEach(function(b,i){go(b,U(zc-h+i*2*h/(n-1||1)),R(4,18));if(i==n>>1)st=b});
for(k=0;k<4;k++)S(hx,G-1,(zc+R(-h,h)-hx)/13,-1,c.pick("·,.:"),c.pick(YL),40,.2,1);
F(90);F(90);e=j%3==2?"wink":D1;F(90)}
a="down";br="";
for(i=0;i<16||H(1);i++){e=i%20<12?D1:"open";F(70)}
// charge!
e=D1;F(500);e="open";F(400);e="wink";F(500);e=D1;o=1;F(140);o=0;F(120);o=1;F(320);o=0;
for(k=c.clamp(zc+d*(h+16),0,c.mx),i=0;x!=k;i++){
x+=d*M.min(2,A(k-x));ft=i%2?"left":"right";a=i%4<2?"up":"down";
B.forEach(function(b){if(!b.s&&b!=st&&d*(b.x-x-4)<7){b.s=2;b.t=0;S(b.x,3,rnd()*.4-.2,.12,c.pick("~,'"),b.bc,R(10,18))}});
if(i%2)S(x+4-5*d,6,-d*.4,-.1,c.pick("░·"),"subtle",3);
F(35)}
ft="both";a="down";F(120,[T(x+4-6*d,6,"≡","subtle")]);
for(i=0;i<8||H(2);i++){a=i>2?"up":"down";e=i>2?"wink":D1;F(60)}
// the straggler
a="down";e=D0;F(400);st.q=1;k=U(st.x)+st.f;F(500,[T(k,4,"?",TX,{b:1})]);st.f=d;F(300,[T(k,4,"!","warning",{b:1})]);
for(st.s=2,st.t=0;st.s==2;){j=st.x-x-4;o=+(A(j)<5);e=o?"closed":j*d<0?D0:D1;F(50)}
// a feather lands on his head
o=0;e="open";
for(i=0;i<16;i++)F(80,[T(x+4-(i<12&&(i>>2)%2),M.min(3,i>>2),"~",TX)]);
e="wink";F(500,[T(x+4,G-1,"~",TX)]);
o=-1;S(x+4,G-2,d*.6,-.2,"~",TX,6);F(80);o=0;cl=1;
while(cr.length||P.length)F(60);
f.push({x:x,pose:"default",ms:200});
return f;
});
