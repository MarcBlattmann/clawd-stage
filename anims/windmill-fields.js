// Dutch tulip fields and turning windmills scroll past; Clawd cycles by with a flower basket, rings his bell and ducks a windmill blade.
$cdA("windmill-fields",{title:"Tulip fields",w:70,scene:1},function(c){
var W=c.W,M=Math,R=c.rng(c.R(1,1e6)),P=c.P,f=[],T=0,S=0,V=0,O=1e9,X=M.max(1,c.x),H=-99,HB=0,i,j,k,d,A,
cl=v=>v<0?0:v>1?1:v,
Q=[355,45,330,275,25,60].map((h,i)=>c.hsv(h,i>4?.1:.72,.96)),
B=[],Wm=[],Cl=[],WT="rgb(235,230,220)",BL="rgb(190,195,210)",
g=i=>M.ceil(7*M.max(1-cl((T-i/W*600)/300),cl((T-O-i/W*600)/300))),
G=h=>g(c.clamp(h,0,W-1)),
q=(x,y,t,o,z)=>A.push({x:x,y:y,t:t,c:o,z:z}),
L=(x,y,a,o,z)=>a.map((t,j)=>q(x,y+j,t,o,z)),
st=(y,k,fn)=>{for(var p,i=0,u,r,d;i<W;i++){u=i+(S*k|0);r=fn(u,i);d=y+g(i);r&&d<7?p&&p.c==r[1]&&p.y==d&&p.x+p.t.length==i?p.t+=r[0]:A.push(p={x:i,y:d,t:r[0],c:r[1],z:-1}):p=0}},
ot=i=>i<10||i>64,
sc=()=>{A=[];var h,d,N=W+30;
Cl.map(o=>{h=((o[0]-S*.1-T*.003)%(W+12)+W+12)%(W+12)-8|0;G(h)<2&&q(h,0,o[1],WT,-1)});
st(3,.6,u=>u%14<12&&["▄",B[(u/14|0)&63]]);
Wm.map((o,j)=>{h=((o[0]-S*.3)%N+N)%N-12|0;d=G(h);L(h-2,2+d,[" ▐█▌","▟███▙"],o[1],-1);L(h-2,d,(T/170+j/2|0)%2?["\\   /","  ●","/   \\"]:["  │","──●──"],WT,-1)});
st(4,1,(u,i)=>ot(i)&&["▙▟"[u&1],B[(u/12|0)+7&63]]);
st(5,1,(u,i)=>ot(i)&&["▐▌"[u&1],"rgb(70,150,70)"]);
st(6,1.4,u=>(u>>1)%6<1&&["▙▟"[u&1],B[(u/12|0)+21&63]]);
h=H-(S|0);d=G(h);
if(h>-9&&h<W+9){L(h-3,3+d,["  ▐█▌"," ▗███▖"," ▐███▌","▟██▀██▙"],"rgb(185,70,55)",-1);L(h-4,d,(HB?HB&1:(T/230|0)%2)?["    │","    │","────●────"]:["\\       /","  \\   /","    ●","  /   \\","/       \\"],WT,-1)}},
bk=(x,y,s)=>{L(x-1,y+6,[s%2?"(✕)──┴──(✕)":"(✚)──┴──(✚)"],BL);q(x+8,y+5,"│",BL);q(x+9,y+5,"▓▓▓","rgb(200,150,80)");q(x+9,y+4,"▙▟",Q[0]);q(x+11,y+4,"✿",Q[1])},
ht=(x,y,u)=>q(x,y,u?"▝▜█▛▘":"▗▟█▙▖","rgb(240,200,110)"),
fr=(p,ms,o,e)=>{sc();e&&e();f.push({x:X,pose:p,ms:ms,offset:o|0,props:A});T+=ms;S+=V},
rd=(e,ms,o,x,y,u)=>fr(P(e,0,f.length%2?"left":"right"),ms,o,()=>{bk(X,0,S);ht(X+2,y==null?3+o:y,u);x&&x()}),
bell=i=>{i%4<2&&q(X+12,3,"tring!",Q[1]);q(X+10+(i>>1),2-(i>>2),"♪♫"[i&1],WT)},
pet=()=>[0,5].map(j=>{k=(f.length+j)%10;q(X+10-k*3,M.max(0,3-k),k<4?"✿":"·",Q[(f.length+j)/10%6|0])});
for(i=0;i<64;i++)B.push(Q[R()*6|0]);
for(i=4;i<W+12;i+=24+R()*24|0)Wm.push([i,c.hsv(20,R()*.5,.58)]);
for(i=0;i<W/40+1;i++)Cl.push([R()*W|0,"▄▟"+"█".repeat(2+R()*4|0)+"▙▄"]);
// fields grow in, Clawd makes room, a straw hat drops on
var xm=M.min(X,W-40);
for(i=0;i<12||X>xm;i++){k=X>xm;X-=k;fr(P(k||i<3?"left":i<6?"right":i==9?"closed":i>9?"wink":0,0,k?i%2?"left":"right":0),k?50:90,0,()=>i>5&&ht(X+2,M.min(i-6,3),i<9&&i%2))}
// bike rolls in, he hops on, rings the bell
var b0=M.min(-12,X-30),n=M.max(12,(X-b0)/6|0),J=[1,-1,-2,-3,-3,-2,-1];
for(i=0;i<=n;i++){k=i-n+6;d=k<0?0:J[k];fr(P(k<0?"left":k>5?"closed":0,k>0&&k<6?"up":0),k<0?45:70,d,()=>{j=b0+(X-b0)*i/n|0;bk(j,0,i);k<5&&q(j-4,6,"≡≡","inactive");ht(X+2,3+d)})}
for(i=0;i<8;i++)rd(i<2?"closed":"wink",80,-1,()=>bell(i));
// cruise until a big windmill comes close
var vm=M.max(1,W/80|0);
H=(S|0)+M.max(W+8,X+18+vm*50);
while((d=H-(S|0)-X)>13){V=M.min(vm,V+.2);rd(c.R(0,25)?d<34?"right":0:"closed",50,-1,pet)}
// near miss: he ducks, the hat flies and drops back
V=1;
while((d=H-(S|0)-X)>-14){j=10-d;HB=d<11&&d>-4&&1+j%2;
HB?rd("closed",70,0,0,+"21000000001233"[j],j>0&&j<11&&j%2):rd(d>10?"right":d>-8?"left":"wink",d>10?90:70,-1,()=>{d<13&&d>10&&q(X+4,1,"!",Q[0]);d<-3&&d>-8&&q(X+8,2,"°",BL);d<-7&&bell(-d)})}
HB=0;
for(i=0;i<20;i++){V=M.min(vm,V+.3);rd(i%7?0:"closed",50,-1,pet)}
// brake, everything sinks, the hat sparkles off
for(i=0;i<8;i++){V=M.max(0,V-vm/6);rd("right",60,-1,()=>i<6&&q(X-4,6,"≡≡","inactive"))}
V=0;O=T;
for(i=0;i<18;i++){d=G(X+4);k=M.min(0,d-1);fr(P(d>1?0:"right"),60,k,()=>{bk(X,d,0);ht(X+2,3+k)})}
fr(P("open","up"),200,0,()=>ht(X+2,2));
fr(P("wink","up"),250,0,()=>ht(X+2,1,1));
fr(P("wink","up"),120,0,()=>q(X+1,1,"·✦·✦·",Q[1]));
fr(P("wink"),120,0,()=>q(X,0,"·     ·",Q[1]));
f.push({x:X,pose:"default",ms:300});
return f});
