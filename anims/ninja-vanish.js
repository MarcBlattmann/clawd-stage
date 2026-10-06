// Clawd dons a ninja headband, slams a smoke bomb: POOF! Shuriken whiz by, the smoke clears on a log, he drops silently from above elsewhere.
$cdA("ninja-vanish", { title: "Ninja", w: 50 }, function (c) {
var P=c.P,T=c.T,R=c.R,K=c.pick,G=c.G,M=Math,Z=M.random,f=[],x=c.x,X=x,
 rr=c.mx-x,rl=x,rt=rr>15&&rl>15?Z()<.5:rr>rl,d=R(16,M.min(rt?rr:rl,40)),nx=rt?x+d:x-d,
 bk=rt?"left":"right",cp=P(),co=0,hd=0,hb=-9,bw=0,sm=[],lg=0,i,k,t,
 HB="#7b7be0",BD="▗▄▄▄▄▄▄",S="subtle",Y="warning",B={b:1},BR="#a0703c",GR=["#e0e0e8","#b0b0c0","#88889a"];
// lumpy smoke: p density, lt lightens
function cl(cx,cy,r,p,lt){for(var o=[],dy=-r,dx,e,q;dy<=r;dy++)for(dx=-2*r-1;dx<=2*r+1;dx++){e=(dx*dx/4+dy*dy)/(r*r);if(e<.75+Z()*.4&&Z()<p){q=M.min(4,(e<.3?0:e<.65?1:2)+lt);o.push(T(cx+dx,cy+dy,"▓▒░··"[q],GR[M.min(2,q)]))}}return o}
function LG(){return[T(x+1,G+1," ▄▄▄▄▄▖",BR),T(x+1,G+2,"○",'#e8c890'),T(x+2,G+2,"█▓█▓█▌",BR)]}
// frame: log, headband, smoke, extras
function F(ms,ex){var p=lg?LG():[],y=hb+co,tl=["~~","-~","~-"][f.length%3];
 if(hb>-9&&!hd)p.push(cp.eyes=="left"?T(X+1+bw,y,BD+tl,HB):T(X-1+bw,y,tl+BD,HB));
 f.push({x:X,pose:cp,offset:co,hide:!!hd,ms:ms,props:p.concat(sm,ex||[])})}
function U(a,b,g){return T(a,b,g,"text",B)}
function bm(bx,by,s){return[T(bx,by,"●","#9898b0")].concat(s?[T(bx+1,by-1,K("*✦·*"),K([Y,"error","chromeYellow"]))]:[])}

F(R(300,500));
// headband drifts down, he ties it on
for(k=0;k<G;k++){hb=k;bw=[1,0,-1,0][k];F(90)}
cp=P("closed","up");F(160);cp=P("closed","one-up");F(160);cp=P("wink");F(350);
// shifty eyes
[["left",230],["right",230],["left",130],["right",130],["open",250]].forEach(function(a){cp=P(a[0]);F(a[1])});
// smoke bomb, fuse fizzing
for(i=0;i<8;i++){cp=P(i<3?"right":i<6?"open":"wink","one-up");F(90,bm(X+8,G-1,1))}
co=1;cp=P("closed","one-up");F(260,bm(X+8,G,1));
co=0;cp=P("closed");F(40,bm(X+7,G+1,1));F(40,bm(X+5,G+2));F(50,[T(X+3,G+2,"·✸·",Y,B)]);
// POOF
for(k=1;k<5;k++){hd=k>1;sm=cl(X+4,G+1,k,1,0);F(50,k>2?[U(X+2,0,"POOF!")]:[])}
// eyes peek from the smoke, blink, gone; shuriken whiz by
var sh=[],n=R(3,5),D;
for(i=0;i<n;i++){k=Z()<.5?1:-1;sh.push({v:2*k,y:R(1,5),x:(k>0?-1:c.W)-k*(i*R(5,9)+R(0,3))})}
for(t=0;;t++){D=1;var e=t<8?[T(X+2,0,"POOF!",t<4?"text":S,B)]:[];
 if(t%3==0)sm=cl(X+4,G+1,4,.92,0);
 if(t>1&&t<25)e.push(U(X+(t<8?2:t<13?1:t<18?3:2),G,t>20&&t<23?"-   -":"•   •"));
 sh.forEach(function(s){s.x+=s.v;if(s.v>0?s.x<c.W+2:s.x>-3)D=0;e.push(T(s.x-s.v/2,s.y,"-",S),U(s.x,s.y,t%2?"✕":"✚"))});
 F(30,e);if(D&&t>24)break}
// smoke rises and thins: a log!
lg=1;
for(k=0;k<11;k++){sm=cl(X+4,G+1-(k/3|0),4+(k>5),1-k/11,k/3|0);F(85)}
sm=[];F(R(600,900));
// shadow at the new spot, silent drop
X=nx;cp=P("closed","up");
function sd(k){return[T(X+4-k,G+2,Array(2*k+2).join("·"),S)]}
for(k=0;k<2;k++)F(160,sd(k));
for(co=-6,hd=0;co<0;co++)F(45,sd(co<-3?1:2).concat([T(X+2,G+co-2,"│   │",S),T(X+2,G+co-3,"╵   ╵",S)]));
co=1;cp=P("closed","one-up");F(70,[T(X-1,G+2,"·",S),T(X+9,G+2,"·",S)]);F(R(600,800));
cp=P(bk,"one-up");F(400);
// stand, shuriken glints in hand, flick it at the log
co=0;var sp=X+8,L=M.abs(x+4-sp);
cp=P("open","one-up");F(350,[U(sp,G-1,"✚")]);F(120,[T(sp,G-1,"✦",Y,B)]);cp=P("wink","one-up");F(300,[U(sp,G-1,"✚")]);
cp=P(bk);
for(i=1;i<=L;i++)F(25,[U(M.round(c.lerp(sp,x+4,i/L)),G-2+M.round(3*i*i/L/L),i%2?"✕":"✚")]);
// thunk, the log goes poof
F(220,[U(x+4,G+1,"✚")]);
for(k=0;k<7;k++){lg=k<1;sm=cl(x+4,G+1,2,1-k/7,k/2|0);F(70,k<4?[T(x+3,G-1,"poof",S)]:[])}
sm=[];F(400);
// crane stance, wink
cp=P();F(250);cp=P("open","up","right");F(500);cp=P("wink","up","right");F(500,[T(X+8,G-1,"✦",Y)]);
// headband off, the wind takes it
cp=P("closed","up");F(250);for(k=G-2;k>-2;k--){hb=k;bw++;F(80)}
hb=-9;cp=P();F(400);
return f;
});
