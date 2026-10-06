// Clawd rafts a full-width river, bonks rocks, spins and goes over the waterfall.
$cdA("waterfall-raft",{title:"Rapids",w:70,scene:1},function(c){
var f=[],W=c.W,M=Math,G=c.G,X=c.T,T=0,n=0,k,o,r,Z,px,sp,RB=0,PS=9,U=M.round,
WE=W-17,XT=WE-9,XF=WE+2,x=c.x,lo=0,hi=0,H=-9,
g=c.rng(c.R(1,9e5)),A=Array(W+3).fill(" "),B=A.slice(),RK=[],FL=[],TU=[],
Y="#ffcc33",D="#c68a4b",O="#e8f6ff",GR="#5fbf5a",BL="#3b8fd9",TR="#2e8b57",
// scenery clipped to lo..hi
P=(x,y,t,C,F)=>{var a=M.max(lo-x,0),e=M.min(hi-x,t.length);a<e&&Z.push(X(x+a,y,t.slice(a,e),C,F?{}:{z:-1}))},
// splash drops, t frames after launch
SPR=(cx,cy,t,N,s,h=c.rng(s),a=[])=>{for(var q=0,u,y;q<N;q++)y=U(cy-(h()+.4)*t+.3*t*t),u=h()-.5,y>cy||a.push(X(U(cx+3*u*t),y,"°·'*"[q%4],q%3?O:"#7cc4ff",{z:-1}));return a},
// paddle: 1 dips right, -1 left, 0 level
PD=(s,y,d)=>(d=s>0?"╲":"╱",s?[X(x-3,y+1-s,"█"+d,D),X(x+10,y+1+s,d+"█",D),X(x+4+8*s,y+1,"°",O)]:[X(x-3,y+1,"█──",D),X(x+9,y+1,"──█",D)]),
sw=n=>[1,0,-1,0][n&3],
S=o=>{Z=[];var w=c.tile("≈~~≈~-~≈~~-",3,0,-n).t,j;
P(0,0,c.tile("  ☁☁              ☁                 ",0,0,-T/500).t,"text");
P(0,0,A,TR);P(0,1,B,TR);P(0,2,"▄".repeat(W),GR);P(0,3,w.slice(0,WE),BL);
P((T/90|0)%(W+20)-10,0,n&2?"v":"^","inactive");
FL.map(p=>P((p+n)%WE,3,"≈≈",O));
RK.map(r=>{P(r.x,3,"▟▙","#8b8f98");P(r.x+n%2*2,2,n&2?"'":"°",O)});
TU.map(t=>P(t[0],6,t[1],GR));
for(j=3;j<6;j++)P(WE,j,"║│¦║│".substr((j-n%3+3)%3,3),O),P(WE-3,j+1,"▓▓▓","#7d6e5d");
P(WE,6,w.slice(0,W-WE),BL,1);P(WE,6,n&1?"≈°≈":"°≈°",O,1);P(WE+3+n%3,5,"·",O);
H>-2&&P(x,H,"▛▀▀▀▀▀▀▀▜",Y,1);
RB&&Z.push(X(x-1,M.max(3,G+o+2),"▙"+"▄".repeat(9)+"▟",Y));PS<2&&(Z=Z.concat(PD(PS,G+o)))},
F=(e,a,o,ex,ms=50,h)=>{S(o);f.push({x,pose:e.facing?e:c.P(e,a),offset:o,props:Z.concat(ex||[]),ms,hide:!!h});T+=ms;n++};
// seeded forest, rocks, foam, tufts
for(k=g()*4|0;k<W;k+=4+g()*11|0)B.splice(k,3,...(g()<.6?(A[k+1]="▲","▟█▙"):"▄█▄"));
A=A.join("");B=B.join("");
for(k=19+g()*8|0;k<XT-2;k+=16+g()*14|0)RK.push({x:k,b:!RK.length||g()<.5});
c.pick(RK.filter(r=>r.b)).s=1;
for(k=0;k<W/20;k++)FL.push(g()*WE|0);
for(k=g()*3|0;k<WE-4;k+=4+g()*9|0)(k<9||k>65)&&TU.push([k,"\"'♣✿,"[g()*5|0]]);
// river floods in, Clawd leaps out the top
for(;hi<W;)hi=M.min(W,hi+M.ceil(W/12)),F("left",0,0,0,70);
F("open",0,0,[X(x+4,3,"!","warning")],300);F("right",0,0,0,200);
F("closed",0,1,0,150);[-2,-4,-6].map(o=>F("open","up",o,0,50));
// raft drifts in, he drops into it
RB=1;for(px=-9;px<3;px+=2)x=px,F("",0,-3,0,60,1);
x=3;PS=0;[-7,-6,-5,-4].map(o=>F("open","up",o,0,60));
for(k=0;k<6;k++)F(k<2?"closed":k<4?"right":"wink",0,k==1?-2:-3,SPR(x+4,3,k+1,9,7),k<2?70:180);
// shoot the rapids
px=3;sp=(XT-15)/M.max(40,(XT-3)/1.7|0);
for(;px<XT-12;){
px+=sp;x=U(px);PS=sw(n>>1);
r=RK.find(r=>!r.d&&x+10>=r.x);
if(r&&(r.d=1)&&r.b){
x-=2;px=x;PS=0;
for(k=0;k<4;k++)F("closed","up",k?-3:-4,[X(x+9,0,"BONK!","warning")].concat(SPR(r.x,3,k+1,6,r.x)),k?70:90);
if(r.s){"right-30 right-75 edge back-125 back left-75 left-30 left-12".split(" ").map((v,j)=>(PS=sw(j),F({facing:v},0,-3,0,55)));
PS=0;for(k=0;k<8;k++)F(k&1?"closed":"open",0,-3,[X(x+1+k*3%7,0,"✦",Y),X(x+7-k*3%7,0,"✧","text")],110);
for(k=0;k<4;k++)F(k&1?"right":"left",0,-3,0,70);
F("wink","up",-3,[X(x+3,0,"hup!","text")],250);sp=M.min(sp*1.25,1.9)}
else for(k=0;k<3;k++)F("left",0,-3,[X(x+4,0,"?","inactive")],160);
continue}
F(n%17?"right":"closed",0,n%13?-3:-4,0,50)}
// the edge! back-paddle in vain
PS=0;F("right",0,-3,[X(x+4,0,"!!","error")],450);
for(sp=(XT-px)/14,k=0;k<14;k++)px+=sp,x=U(px),PS=n&1||-1,F("closed",0,-3,[X(x-1-n%2,1+n%2,"'",O)],40);
x=XT;PS=0;F("open",0,-3,0,600);F("closed",0,-3,0,150);
// over the falls
for(PS=9,k=0;k<9;k++)o=M.max(k-5,-3),x=M.min(XT+U(k*1.8),XF),F("open","up",o,[X(x-3-2*k,1-k/2|0,"█──█",D)].concat(o<1?X(x+2,G+o-1,"AAAH","text"):[]),60);
RB=0;for(k=0;k<12;k++)F("",0,3,SPR(x+4,6,k+1,14,3).concat(X(x+3-(k>>1),6,"(",O),X(x+5+(k>>1),6,")",O)),60,1);
// pop up, raft lands on his head
[2,1,0,0].map((o,k)=>F(k<3?"closed":"open",0,o,SPR(x+4,G+o,k+1,8,9),k<3?90:250));
for(H=-1;H<4;H++)F("open",0,0,0,60);
H=4;F("closed",0,1,0,120);H=3;
F("wink","up",0,[X(x-2,2,"✦",Y),X(x+10,1,"✧","text")],700);
// river drains away
for(;lo<W;)lo=M.min(W,lo+M.ceil(W/12)),F(lo<x?"left":"open",0,0,0,70);
f.push({x,pose:"default",ms:300});
return f});
