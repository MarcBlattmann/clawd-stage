// Clawd blows shimmering soap bubbles that pop into sparkles; a giant one drifts back, swallows him, lifts him and POPs.
$cdA("bubble-wand",{title:"Soap bubbles",w:40},function(c){
var G=c.G,T=c.T,R=c.R,Y="chromeYellow",I="inactive",V="warning",B={b:1},U="one-up",D="down",E="right",O="open",C="closed",
ps=[],tk=0,w=0,tv=0,o=0,hu=R(0,359),hb={},j,k,L,x=c.clamp(c.x,2,c.mx-16),tx=x+9,f=c.walk(c.x,x);
function sh(i,s){return c.hsv(hu+tk*25+i*50,s||.45,1)}
function sp(a,b,u,v,t,n,p,k){var q={x:a,y:b,u:u,v:v,t:t,n:n,p:p,k:k,h:R(0,359)};ps.push(q);return q}
// bubble n x h at (L,t), behind Clawd
function gb(L,t,n,h){
var d="─".repeat(n-4),s=" ".repeat(n-4),m="│ "+s+" │",r=h<4?["╭─"+d+"─╮",m,"╰─"+d+"─╯"]:[" ╭"+d+"╮","╭╯"+s+"╰╮",m,"╰╮"+s+"╭╯"," ╰"+d+"╯"];
if(h==4)r.splice(2,1);
return r.map(function(l,i){return T(L,t+i,l,sh(i),{z:-1})})}
function me(){return gb(x-2,G-1+o,13,5)}
// frame: shadow, tub, wand (dipped if arm down), bubbles wobble and pop to sparkles
function add(e,a,ms,p,ft){
var q=o<0?[T(x-o,6,"░".repeat(9+2*o),"subtle",{z:-1})]:[],l=ps,z=w>1||a==D;
tk++;
if(tv)q.push(T(tx,6,"╰   ╯","permission"),T(tx+1,6,"~~~",sh(0,.3)));
if(w)q.push(T(z?tx+1:x+10,z?6:G+o,"O",Y,B));
if(w==1)q.push(z?T(tx,5,"╲",I):T(x+9,G+o,"─",I));
ps=[];
l.forEach(function(b){
if(!b.n--){if(!b.p)return;b.p=0;b.n=1;b.u=b.v=0;b.t="✦";sp(b.x-1,b.y,-1,0,"·",2);sp(b.x+1,b.y,1,0,"·",2)}
ps.push(b);
q.push(T(Math.round(b.x),Math.round(b.y),b.t,b.k||c.hsv(b.h+tk*30,b.p?.4:.6,1)));
b.x+=b.u+(b.p?Math.sin(tk*.6+b.h)*.35:0);b.y+=b.v});
f.push({x:x,pose:c.P(e,a,ft),offset:o,ms:ms,props:q.concat(p||[])})}
function dip(){add(E,D,160);for(k=0;k<3;k++){sp(tx+1+R(0,2),5,R(-2,2)/10,-.6,"°",2);add(k%2?O:E,D,100)}sp(x+10,5,0,1,"·",2,0,"text");add(O,U,130)}
function watch(n){for(j=0;j<n;j++)add(hb.n>=0&&hb.n<2?C:j%9==7?"wink":j>n/2?O:E,U,90)}
// idea: tub + wand appear
add("left",D,220);add(E,D,220);add(O,D,350,[T(x+4,G-1,"!",V,B)]);
tv=w=1;
for(k=0;k<5;k++)sp(tx+R(0,5),R(4,6),R(-1,1),-.3,c.pick("✦✧*"),2);
add("wink",U,400);
// rounds: dip, inhale, blow, watch; last: one pops on his head
for(L=R(2,3);L--;){
dip();add(C,U,R(250,400));
for(k=R(3,5);k--;){sp(x+11,G,R(3,9)/10,-R(2,5)/10,c.pick(["°","o","○","O","()"]),R(8,18),1);add(E,U,70)}
if(!L)hb=sp(x+10,G-1,-.7,0,"o",11,1);
watch(L?R(6,8):15)}
// big breath: a giant bubble swells off the ring
dip();add("wink",U,300);add(C,U,600);
"°|o|○|()|4|6|8|11|13|12|13".split("|").forEach(function(s,i){
var n=+s,h=n<5?3:n<7?4:5;
add(i>7?O:E,U,90+i*15,n?gb(x+11,6-h,n,h):[T(x+11,G,s,sh(0))])});
add("wink",U,400,gb(x+12,0,13,5));
// breeze: it drifts back and settles over him
for(k=0;k<4;k++)sp(x+28+R(0,6),R(0,3),-1.4,0,"~",9,0,I);
for(L=x+12;L>=x-2;L--){
if(L==x+9){w=2;sp(tx+1,5,0,-.5,"°",2)}
add(L>x+9?E:L>x+4?O:C,w<2?U:D,90,gb(L,c.clamp((x+12-L)/4|0,0,3),13,5).concat(L>x+5&&L<x+10?T(x+4,G-1,"!",V,B):[]))}
add(O,D,350,me());add("left",D,250,me());add(E,D,250,me());
// lift-off, bob and kick
for(k=0;k<10;k++){o=k<1?-1:k%6<3?-2:-3;add(k%5==3?"wink":O,k>1&&k%4<2?"up":D,130,me(),k%2?"left":E)}
// glint, POP, hang, drop, dizzy
add(O,"up",250,me().concat(T(x+6,G-1+o,"✦","text",B)));
for(j=-1;j<2;j++)for(k=-1;k<2;k++)if(j||k)sp(x+4+6*j,G+1+o+2*k,j,k/2,c.pick("✦✧*·"),3);
sp(x+12,G+o,0,0,"POP!",2,0,V);add(O,"up",200);
while(o<0){o++;add(C,"up",50)}
sp(x,6,-1,0,"·",2,0,I);sp(x+8,6,1,0,"·",2,0,I);o=1;add(C,D,120);o=0;
for(k=0;k<5;k++)add(C,D,120,[T(x+1+k%4*2,G-1,"✦",V),T(x+7-k%4*2,G-1,"·",V)]);
add("left",D,250);add(E,D,250);add("wink","up",450);
// cleanup: poof
w=1;add(E,D,250);add("wink",U,350);tv=w=0;
for(k=0;k<7;k++)sp(tx+k,k<5?6:G,R(-1,1)/2,-.5,c.pick("✦✧·"),3);
for(k=0;k<4;k++)add(O,D,90);
f.push({x:x,pose:"default",ms:250});
return f});
