// A feather tickles Clawd's nose: "ah... ah...", leaning back, ACHOO! The wave blows the sparkles away and the recoil skids him back.
$cdA("big-sneeze",{title:"Mega sneeze",w:50},function(c){
var M=Math.round,G=c.G,T=c.T,R=c.R,W=c.W,B={b:1},C="closed",O="open",E="right",K="wink",U="up",D="down",N="one-up",
x=c.clamp(c.x,10,c.mx-c.clamp(c.mx>>1,22,40)),X=x,o=0,tk=0,wf=0,ox,ps=[],cl="clawd_body",k,j,i,q,fe,wc=c.hsv(R(180,200),.35,1),f=c.walk(c.x,x);
function sp(a,b,u,v,t,k,n,w){var p={x:a,y:b,u:u,v:v,t:t,k:k,n:n||1e4,w:w,h:R(0,3),d:R(1,5)};ps.push(p);return p}
// sparkles and dust motes twinkle in on the right, dust bunnies on the ground
for(k=x+12;k<W-1;k+=R(2,5)){j=R(0,2);sp(k,R(0,3),0,0,"·",j?c.hsv(R(35,55),.5,1):"inactive",0,j);if(k>40&&!R(0,3))sp(k,6,0,0,c.pick(["░▒░","▒░","░"]),"subtle")}
function add(e,a,ms,q,ft){
tk++;var z=[],l=ps,j,d,h;ps=[];
l.forEach(function(p){
if(wf&&p.x<=wf&&!p.b){p.b=1;p.u=R(20,32)/10;p.v=R(-5,2)/10}
p.x+=p.u;p.y+=p.v;var y=M(p.y);
if(p.x>=W||y<0||y>6||!--p.n)return;ps.push(p);
if(tk>=p.d)z.push(T(M(p.x),y,p.w?"✦✧·✧"[(tk+p.h)%4]:p.t,p.k))});
// sneeze wave: arc growing from the nose, dim echo behind
if(wf)for(j=0;j<7;j++){d=j-3;h=wf-M(d*d*.3);if(d*d*4<=(wf-ox+2)*(wf-ox+2)){if(h>ox)z.push(T(h,j,")",wc,B));if(h-3>ox)z.push(T(h-3,j,")","inactive"))}}
f.push({x:X,offset:o,pose:c.P(e,a,ft),ms:ms,props:z.concat(q||[]),color:cl})}
// feather zigzags onto his nose
function fall(m){fe=sp(0,0,0,0,"~","text");for(i=0;i<=m;i++){j=m-i;fe.x=X+8+M(j*.5+Math.sin(j*.9)*1.4);fe.y=i*G/m|0;add(i<m-3?E:O,D,110)}}
// admire the sparkles
add(E,D,400);add(O,D,250);add(C,D,120);add(E,D,350);
fall(12);
// tickle tickle
for(i=0;i<8;i++){fe.x=x+8+i%2;fe.t=i%2?"~":"∽";add(i<2?E:i%2?K:C,D,i<2?200:110)}
// ah... ah... leaning back, flushing red
var n=R(2,3),S=["ah.","ah..","ahh...","AHH..."].slice(4-n);
for(i=1;i<=n;i++){
cl=c.rgb(215+13*i,119-16*i,87-12*i);X--;if(i>1)o=-1;
sp(X+15,G,-1,0,"·","inactive",5);sp(X+16,G+1,-1,0,"·","inactive",6);
add(C,i>1?U:N,160,0,"left");
q=[T(X+2,G-1+o,S[i-1],i==n?"warning":"inactive",i==n?B:{})];
for(k=0;k<3;k++)add(k%2?C:K,i>1?U:N,R(150,220),q);
if(i<n)add(O,N,130)}
// peak: tremble
for(k=0;k<6;k++){X+=k%2?-1:1;add(C,U,60,[T(X+2,G-1+o,S[n-1],"warning",B)])}
// sometimes: false alarm...
if(R(0,1)){o=0;cl="clawd_body";X++;add(O,D,600,[T(X+3,G-1,"...","inactive")]);add(E,D,450,[T(X+4,G-1,"?","inactive")]);add(O,D,250);add(C,D,90)}
else add(C,U,300);
// ACHOO! wave blasts right, recoil skids him back
X+=2;o=1;cl=c.rgb(255,170,140);ox=X+9;wf=X+10;
for(k=0;k<8;k++)sp(X+10,G+R(-1,1),0,0,c.pick("°·∘"),wc);
var r=[0,1,1,1,1,0,1,0,1,0,0,1],sx=X+9,ac=c.pick(["ACHOO!","AH-CHOO!","HA-TCHOO!"]);
for(k=0;wf<W+4;k++){
q=[];if(k<16)q.push(T(sx+k%2,G-2,ac,k<10?"error":"inactive",B));
if(k<3)q.push(T(ox+k*2,G+1-(k>0),"≡≡≡",wc),T(ox+k*2,G+2-(k>0),"≡≡",wc));
if(r[k]){X--;j=sp(X+8,6,1,0,"°","subtle",2);j.b=1;q.push(T(X+10,G,"≡","inactive"))}
add(C,k&&k<7?U:D,k?40:200,q);o=0;cl="clawd_body";wf+=2}
wf=0;
// dazed, stars circling
for(k=0;k<10;k++){q=[];for(j=0;j<2;j++){i=k*.8+j*3.1;q.push(T(X+4+M(Math.cos(i)*4),G-1-(Math.sin(i)>0),j?"·":"✦","chromeYellow"))}add(k<7?C:O,D,120,q,k%2?"left":E)}
// sees the clean stage, sniffs, wipes his nose
add(E,D,500);add(O,D,200);add(C,N,300,[T(X+9,G-1,"snf","inactive")]);add(O,D,200);add(K,D,350);
// aftershock
if(R(0,1)){o=1;sp(X+9,G+1,1,-.4,"°",wc,4);add(C,D,150,[T(X+10,G,"choo","inactive")]);o=0;X--;add(C,D,110);add(O,D,300)}
// the feather returns... uh oh. Blow it away
fall(8);add(O,D,400,[T(X+4,G-1,"!","warning",B)]);add(C,D,250,[T(X+2,G-1,"ah..","inactive")]);
fe.u=1.3;fe.v=-.6;
for(k=0;k<8;k++)add(k<3?K:E,D,k<3?110:80,k<3?[T(X+9+k,G,"≈","inactive")]:0);
add(K,U,450);
f.push({x:X,pose:"default",ms:300});
return f});
