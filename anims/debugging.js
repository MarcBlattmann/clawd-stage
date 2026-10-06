// A test fails, the bug crawls out of the laptop, dodges two swats, SQUASH, tests pass.
$cdA("debugging",{title:"Debugging",w:50},function(c){
var R=c.R,T=c.T,P=c.P,M=Math.round,X=c.clamp(c.x,16,c.mx-16),L=X+10,x=X,o=0,d=1,s,bx=-9,by=6,bg="¤",bc,tp=5,ly=-7,ln=[],cu,ps=[],t=0,
I="inactive",Wn="warning",Tx="text",Ok="success",lc=I,Bo={b:1},SW=c.hsv(R(150,420),.6,1),BG="#96e650",
r=P("right"),ru=P("right","one-up"),lu=P("left","up"),lf=P("left"),cl=P("closed"),wk=P("wink"),wu=P("wink","one-up"),f=c.walk(c.x,X),k,b0;
function rp(s,n){return Array(n+1).join(s)}
function sp(){ps.push([t].concat([].slice.call(arguments),0))}
function B(q){return[T(x+4,2,q,Wn,Bo)]}
function dust(p){for(var i=-.5;i<1;i++)sp(p,5,i,-.2,4,"░·",I)}
function A(e,ms,ex){
for(var m=-~(ms/100),q=0;q++<m;t+=M(ms/m)){
var pr=[T(L-1,6+ly,rp("▀",16),I)],h=4+o,H=d>0?x+8:x+1,j,v,u,z=rp("─",12);
if(tp>4)pr.push(T(L,5+ly,rp("▄",14),lc));
else{pr.push(T(L,tp,"┌"+z+"┐",lc),T(L,5,"└"+z+"┘",lc));
for(j=tp+1;j<5;j++)pr.push(T(L,j,"│            │",lc,{o:1}));
if(tp<2){for(v=ln.slice(-3),j=0;j<v.length;j++)pr.push(T(L+1,2+j,v[j][0],v[j][1]));
cu&&t/240&1&&pr.push(T(L+1+(j?v[j-1][0].length:0),1+(j||1),"▌",Tx))}}
function S(a,z){pr.push(T(a,h-3,z,SW),T(a,h-2,z,SW))}
if(s==1)pr.push(T(H,h-1,"│",I)),S(H-1,"▒▒▒");
if(s>1&&s<4)u=(2*s-5)*d,pr.push(T(H+u,h-1,u>0?"╱":"╲",I)),S(H+(u>0?2:-3),"▒▒");
if(s>4)pr.push(T(x+4+5*d,5,d>0?"╲":"╱",I),T(x+3+7*d,6,"▓▓▓",SW));
pr.push(T(bx,by,bg,bc||BG,Bo));
ps.forEach(function(p){var a=(t-p[0])/50;a<p[5]&&pr.push(T(M(p[1]+a*p[3]),M(p[2]+a*p[4]+p[8]*a*a/2),p[6][a/p[5]*p[6].length|0],p[7]))});
f.push({x:x,offset:o,pose:e,ms:M(ms/m),props:pr.concat(ex||[])});
}
}
function ty(s,col){var l=["",col],n=0;ln.push(l);while(n<s.length)n+=R(1,2),l[0]=s.slice(0,n),A(R(0,9)?n%2?ru:r:cl,R(40,75));A(r,R(80,160))}
function run(z,col){cu=0;for(k=1;k<4;k++)ln.push([rp("·",k),I]),A(r,130),ln.pop();ln.push([z,col])}
function W(n){while(x!=n)x+=x<n?1:-1,A(P(d>0?"right":"left",s?"up":"down",x%2?"left":"right"),s?100:60)}
while(ly<0)ly++,A(r,40);
dust(L+16);A(cl,120);A(wk,200);
while(tp>1)tp--,A(r,60);
cu=1;A(r,150);
"fn sum(a){| let s=0| for x in a|  s+=x| return s|}".split("|").slice(0,R(3,5)).forEach(function(z,n){ty(z,n%2?Tx:"permission")});
ty("$ test",I);run("✗ 1 failing","error");
A(r,250);A(cl,300);
// the bug
bx=L+R(5,9);by=4;
for(k=0;k<4;k++)bc=k%2?"error":0,A(r,120);
while(bx>L-1)bx--,A(r,R(60,90),bx<L&&B("!"));
while(by<6)by++,A(r,70,B("!"));
while(bx>X-8){bx--;k=bx-x;o=-(k>-2&&k<9)-(k>0&&k<8);A(o?P("closed","up"):lf,40)}
A(lf,250);A(lf,350,B("!"));
s=1;d=-1;for(k=0;k<4;k++)sp(x+1,1,k-1.5,-.3,4,"✦·",SW);A(lu,400);
W(bx+3);
s=2;A(lu,300);
for(k=0;k<7;k++)bx--,s=k<2?2:k<3?3:5,k-3||dust(x-3),A(k<3?lu:cl,k-3?40:60,k<2&&[T(bx,5,"!",Wn,Bo)]);
A(lf,300);s=1;A(lu,400,B("?"));
for(k=R(2,3)*2;k--;)by=k%2?5:6,k%4||sp(bx,5,.1,-.3,6,"♪",Tx),A(lu,110);
s=2;A(lu,200);
while(bx<x+11){bx++;k=bx-x;k+3||(s=3);k+1||(s=5,dust(x-3));A(k<-1?lu:k<3?cl:P(),k<-6?70:30)}
A(lf,300);s=1;A(lu,300,B("??"));
d=1;A(ru,450,B("!"));
// SQUASH
sp(bx,5,.2,-.3,6,"♪♫",Tx);A(ru,400);
s=2;A(wu,650);
s=3;A(ru,40);
s=5;b0=bx;bx=-9;for(k=0;k<8;k++)sp(b0,5,k/7-.5,-R(3,6)/10,5,"*·",BG,.1);
for(k=0;k<6;k++)A(k?wk:cl,110,[T(b0-4,2,"SQUASH!",k%2?Wn:"error",Bo)]);
s=1;bx=b0-1;bg="·✕·";A(ru,350);A(wu,350);
s=0;sp(x+8,2,-.5,-.7,8,"╱─╲│",SW,.05);A(ru,250);
bc="subtle";A(r,300);bx=-9;
W(X);
cu=1;ty("$ test",I);run("✓ tests pass",Ok);lc=Ok;
for(k=0;k<8;k++)sp(L+R(0,13),0,R(-1,1)/5,0,6,"✦✧·",k%2?Ok:"chromeYellow");
for(k=0;k<10;k++)o=-"0121001210"[k],A(P(k>4?"wink":0,"up"),70,[T(L+6,0,"✓",Ok,Bo)]);
A(wk,300);
while(tp<5)tp++,A(ru,50);
A(r,250);
while(ly>-7)ly--,A(r,40);
A(wk,300);
f.push({x:x,pose:"default",ms:200});
return f;
});
