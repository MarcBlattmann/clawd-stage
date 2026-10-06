// Ski slalom: mountains, a chairlift, pines and gates rise; Clawd rides a chair up, slaloms down, spins a 360 off a kicker, hockey-stops.
$cdA("ski-slalom",{ scene: 1,title:"Ski slalom",w:70},function(c){
var W=c.W,M=Math,R=c.rng(c.R(1,1e6)),f=[],A,T=0,OUT=1e9,L=0,x=c.x,o=0,sp=-1,hat=9,sk=0,j,k,u,
E=x+4<W/2?0:c.mx;E=M.abs(x-E)<16?c.mx-E:E;
var s=E?-1:1,ey=E?"left":"right",ue=E?"right":"left",SD=s,bx=E?8:0,x0,
NS=(M.ceil(W/26)+2)*26,O0=x+34+s*26,
D=c.mx-5,UR=D-26,n=M.max(2,(UR-18)/22+1|0),gp=(UR-18)/(n-1),rx=E+s*UR+4,
H={},G=[],S=[],Q=[],MS=28+1e3/W,CC=["#e8453c","#f2b233","#3d7bfd"],Z={z:-1},WH="#e6f0ff",YL="#ffd23c",IN="inactive",
rd=M.round,cl=v=>v<0?0:v>1?1:v,
vs=d=>cl((T-d)/500)*(1-cl((T-OUT-d)/500)),
t=(X,y,q,col,e)=>A.push(c.T(X,y,q,col,e||Z)),
B=q=>Array(W).fill(q),
em=(m,X,y,vx,sv,up)=>{while(m--)Q.push({x:X,y:y,vx:vx+(R()-.5)*sv,vy:-up*(.3+R()),a:0})},
TA=[0,0,0,0].map(()=>B(" ")),CB=B("─"),TW=B(" ");
// ridge: random walk 0..3 with momentum, pre-rendered per sink level
for(k=2,u=1,j=-1;j<=W;j++)H[j]=k,R()<.25&&(u=R()<(k+.5)/4?-1:1),k=c.clamp(k+u,0,3);
var MT=[0,1,2,3].map(m=>[1,2,3].map(r=>{for(var q="",a=4-r+m,j=0;j<W;j++)q+=H[j]<a?" ":H[j-1]<a?H[j+1]<a?"▲":"◢":H[j+1]<a?"◣":"█";return q}));
for(j=6+R()*20|0;j<W;j+=45+R()*30|0)CB[j]="╤",TW[j]="║";
CB=CB.join("");TW=TW.join("");
for(j=2+R()*4|0;j<W-2;j+=8+R()*W/8|0)if(j<8||j>66)["▲","◢█◣","◢███◣","█"].forEach((q,r)=>{for(k=0;k<q.length;k++)TA[r][j-r%3+k]=q[k]});
TA=TA.map(a=>a.join(""));
for(j=0;j<W/15;j++)S.push([R()*W|0,150+R()*200,R()*8,R(),c.pick("❄**··")]);
k=c.R(0,1);for(j=0;j<n;j++)u=rd(10+j*gp),G.push({u:u,x:E+s*u+4,n:(j+k)%2,h:-1e9,c:CC[j%2*2]});
var add=(p,ms,e)=>{var v=vs(0),h=M.ceil(4*(1-v)),g=M.ceil(4*(1-vs(250))),i,r,l=rd(M.abs(M.cos(sp))*10)+1,q="──  ───  ──",
// far gates sit higher behind Clawd, near ones in front
gt=nr=>G.forEach(e=>{if(e.n==nr)for(r=0;r<3;r++)t(e.x,3+nr+g+r,r?"│":(T-e.h<300?E?"\\":"/":"│")+"▶",e.c,nr&&{})});A=[];
MT[M.ceil(3*(1-v))].forEach((q,r)=>t(0,r+1,q,["text","#b9c8de","#7487a8"][r]));
S.forEach(e=>e[3]<v&&t(e[0]+rd(M.sin(T/600+e[2])),((T/e[1]+e[2])%8|0)-1,e[4],WH));
t(0,-h,CB,IN);for(r=1;r<4;r++)t(0,r-h,TW,IN);
for(i=0;i<NS/26;i++)r=rd(((i*26-s*L+O0)%NS+NS)%NS-26),t(r,1-h,i%2?"│●":"│",CC[i%3]),t(r-1,2-h,"╘═╛",CC[i%3]);
TA.forEach((q,r)=>t(0,3+r+g,q,[WH,"#2f7d4f","#2f7d4f","#7a5230"][r]));
t(rx-!!E,6+g,E?"█◣":"◢█",WH);t(rx+s,5+g,E?"◣":"◢",WH);gt(0);
sk&&(sp<0?t(x-(SD>0?1:2),6+o,SD>0?q+"╯":"╰"+q,YL,{}):t(x+4-(l>>1),7+o,"─".repeat(l),YL,{}));
hat<9&&(t(x+2,3+o+hat,"▗▟█▙▖",CC[0],{}),t(x+4,2+o+hat,"●","text",{}));
o<-1&&t(x+3,6,"░░░","subtle");gt(1);
Q=Q.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=.2,++q.a<11&&q.y<7&&t(rd(q.x),rd(q.y),q.a<3?"*":q.a<7?"•":"·",q.a<5?"text":"#a9c4e8",{})));
f.push({x:x,offset:o,pose:p,ms:ms,props:A.concat(e||[])});T+=ms;L+=ms/150},
a=(ms,e,r,ft,ex)=>add(c.P(e,r,ft),ms,ex);
add("default",500);add("look-left",400);add("look-right",400);
for(k=-5;k<1;k++)hat=k,a(70,"open");
o=1;a(90,"closed");o=0;a(300,"wink");o=-1;add("arms-up",90);o=0;sk=1;em(6,x+4,6,0,4,.5);a(300,ey);
// grab a chair, ride to the top edge
while(L<24)a(70,ey,0,(T/280|0)%2?"left":0);
o=1;a(120,ey);L=26;o=-1;SD=-s;x0=x;a(100,"wink","one-up");
for(u=0;x!=E;u++)k=M.abs(x-E),x-=s*M.min(k,k>30?2:1),L=26+M.abs(x-x0),a(40,u%9<6?ue:"wink","one-up",u%4<2?"left":"right");
a(220,ue,"one-up");o=0;add("arms-up",70);o=1;em(5,x+4,6,0,2,.6);a(100,"closed");
o=-1;sp=1.57;add({facing:"edge"},80);sp=-1;o=0;SD=s;a(250,ey);a(200,"wink");
// slalom
for(j=-9,u=1;u<=UR;u++){x=E+s*u;k=u<UR?0:-1;G.forEach(g=>{g.u-u||(g.h=T);M.abs(u-g.u)<gp/2&&u<UR-4&&(k=-g.n)});
if(k!=o)j=u,em(5,x+(E?7:1),6+o,-s*.9,1.2,.9);o=k;u%2&&em(1,x+bx,6+o,-s*.7,.5,.4);a(M.max(MS,150-u*20),ey,u<6&&u%2?"up":0,u-j<3?o?"left":"right":0)}
// kicker 360, land, hockey stop, cheer
var FC="right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30".split(" ");E&&FC.reverse();
em(6,x+4,5,-s*.5,1.5,1);
for(k=0;k<13;k++)x+=s*(k<4?2:1),o=k&&k<10?-3:k<12?-2:-1,sp=k%12?k*.52:-1,add(k%12?{facing:FC[k-1]}:c.P(k?"wink":ey,"up"),60);
x+=s;o=1;em(8,x+4,6,0,3,1);a(110,"closed");o=0;
for(u=M.abs(x-E),k=0;u<D;u++,k++)x=E+s*u,em(1,x+bx,6,-s*.6,.5,.4),a(MS+k*14,ey);
em(16,x+8-bx,6,s*1.4,2,1.3);o=1;a(200,"closed","one-up");o=0;a(350,ue);a(200,ey);
var tm="★ "+(38+c.R(0,1999)/100).toFixed(2)+" ★";
for(k=0;k<8;k++)j=k%4==1,o=-j|0,a(j?90:130,k%2?"wink":"open","up",0,[c.T(x-1,1,tm,k%2?YL:"text",{b:1,o:1})]);
OUT=T;for(k=1;k<6;k++)hat=-k,add("arms-up",70);hat=9;sk=0;em(8,x+4,6,0,4,.6);a(90,"wink");
while(T<OUT+1300)add(T-OUT<900?"look-left":"look-right",100);
f.push({x:x,pose:"default",ms:250});
return f});
