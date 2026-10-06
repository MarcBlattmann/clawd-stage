// Floor piano: a giant keyboard unrolls edge to edge, Clawd hops a tune, races a glissando across it and lands a big chord.
$cdA("floor-piano", { title: "Floor piano", w: 64 }, function (c) {
var M=Math,W=c.W,R=c.R,T=c.T,P=c.P,CY="chromeYellow",i,j,k,q,
N=M.floor((W+1)/6),o0=M.floor((W+1-6*N)/2),
kc=k=>o0+6*k+2,kx=k=>c.clamp(kc(k)-4,0,c.mx),kat=x=>c.clamp(M.round((x+2-o0)/6),0,N-1),
hue=(k,v)=>c.hsv(k*320/N,.6,v||1),
lit=[],nt=[],k0=kat(c.x),x=kx(k0),lo=k0+1,hi=k0,o=0,ps="default",pr=-1,
f=c.walk(c.x,x,{turn:1}),
// One frame: keyboard (white keys on the ground row, black keys behind), rising notes, extras.
F=(ms,ex)=>{var p=[],k,l;
for(k=lo;k<=hi;k++){l=lit[k]||0;
p.push(T(o0+6*k,6,"▀▀▀▀▀",l?hue(k,l>300?1:.7):"text",{z:-1,b:l?1:0}));
k<hi&&+"1101110"[k%7]&&p.push(T(o0+6*k+4,5,"▄▄▄","inactive",{z:-1}));
lit[k]=M.max(0,l-ms)}
nt=nt.filter(n=>{p.push(T(n.x,n.y,n.g,n.c,{b:1,z:-1}));for(n.t+=ms;n.t>130;n.t-=130)n.y--,n.x+=n.y%2*R(-1,1);return n.y>=0});
f.push({x,offset:o,pose:ps,ms,props:p.concat(ex||[]),paint:pr<0||o||!lit[pr]?void 0:(u,v)=>v>1?hue(pr):void 0})},
note=(k,y)=>nt.push({x:kc(k)+R(-1,1),y,g:c.pick("♪♫"),c:hue(k),t:R(0,60)}),
press=(k,l)=>{pr=k;lit[k]=l||900;note(k,M.abs(kc(k)-x-4)<6?3:5)},
rip=k=>[T(x-1,5,"(",hue(k)),T(x+9,5,")",hue(k))],
// Hop to key k2 (arc grows with distance), land, press it, hold.
hop=(k2,hold,ms)=>{var x1=x,d=kx(k2)-x1,n=M.max(3,M.ceil(M.abs(d)/2)),h=M.min(3,1+(M.abs(d)>6)+(M.abs(d)>12)),e=d<0?"left":d>0?"right":"open",t;
pr=-1;for(i=1;i<n;i++)t=i/n,x=x1+M.round(d*t),o=-M.round(h*4*t*(1-t)),ps=P(e,h>1?"up":"one-up",i%2?"left":"right"),F(ms);
x=x1+d;o=0;ps=P(c.pick(["open","closed","wink",e]),R(0,2)?"down":"one-up");press(k2);
F(70,rip(k2));F(hold-70,[T(x-3,5,"(","subtle"),T(x+11,5,")","subtle")])},
// Run along the keys, 2 columns a frame, pressing each key passed.
run=(to,a,b)=>{var x1=x,x2=kx(to),d=x2>x1?1:-1,n=M.ceil(M.abs(x2-x1)/2),lk=kat(x),kk;
for(q=1;q<=n;q++){x=q<n?x1+2*d*q:x2;kk=kat(x);kk!=lk&&press(kk),lk=kk;
ps=P(d>0?"right":"left",q>>1&1?"up":"one-up",q%2?"left":"right");
F(M.round(c.lerp(a,b,q/n)),[T(d>0?x-2:x+9,4,"≡","subtle"),T(d>0?x-4:x+11,4,"-","subtle")])}};
// Stomp, and the keyboard unrolls from under Clawd to both edges.
o=-1;ps=P("open","up");F(140);o=0;ps=P("closed");F(70);
for(lo=hi=k0;;lo=M.max(0,lo-1),hi=M.min(N-1,hi+1)){
F(40,[T(kc(lo)-4,6,"✦",CY),T(kc(hi)+4,6,"✦",CY),T(kc(lo)-5,5,"·",CY),T(kc(hi)+5,5,"·",CY)]);if(!lo&&hi>N-2)break}
ps=P("open","up");F(220,[T(x+8,3,"!","warning",{b:1})]);ps="look-left";F(320);ps="look-right";F(320);
// Careful toe taps.
ps=P("open","down","left");F(240);ps=P("closed");press(k0);F(80,rip(k0));F(260);
ps=P("open","down","right");pr=-1;F(160);ps=P("wink","one-up");press(k0);F(80,rip(k0));F(320,[T(x+8,3,"♥","error")]);
// The tune: first half slow, second half quicker.
var m=c.pick(["00445543322110","223443210012211","2101222111244"]),b=c.clamp(k0-2,0,N-6);
for(j=0;j<m.length;j++)q=j>=m.length/2,hop(b+ +m[j],q?140:250,q?38:52);
// Speeds up into a run to the near edge, then a glissando across the whole keyboard.
var e=kat(x),nr=e<N/2?0:N-1,fr=N-1-nr;
run(nr,50,34);hop(nr,150,36);run(fr,30,24);
// Big leap, then the chord rolls across the full width.
o=1;pr=-1;ps=P("closed");F(180);
[-1,-2,-3,-3,-3,-2,-1].forEach((v,n)=>{o=v;ps=P(n>1&&n<5?"closed":"open","up");F(n>1&&n<5?80:45)});
o=0;ps="arms-up";
var chord=l=>{for(var r=0,a,d;r<=N;r+=2){var sp=[];for(a=0;a<N;a++)if((d=M.abs(a-fr))>=r&&d<r+2)
lit[a]=M.max(lit[a]||0,l),+"1010100"[a%7]&&press(a,l*2),sp.push(T(kc(a),4,"✦",hue(a)));
pr=fr;F(45,r?sp:sp.concat([T(x-2,5,"*",CY),T(x+10,5,"*",CY),T(x-1,3,"\\",CY),T(x+9,3,"/",CY)]))}};
note(fr,2);note(fr,1);chord(1100);
for(q=0;q<9;q++)ps=P(q%3?"wink":"closed",q%2?"up":"one-up"),o=q==3?-1:0,q==4?chord(700):F(130);
// Lights fade, the keyboard rolls back in to Clawd's feet.
pr=-1;ps=P(fr?"left":"right");F(500);
while(lo<=hi){k=fr?lo++:hi--;F(32,[T(kc(k)-2,6,"░░░░░","subtle",{z:-1})])}
ps=P("closed");F(120,[T(x-1,6,"·         ·","subtle")]);
while(nt.length)F(90);
o=1;F(380);o=0;ps=P("wink","one-up");F(380);
f.push({x,pose:"default",ms:200});
return f;
});
