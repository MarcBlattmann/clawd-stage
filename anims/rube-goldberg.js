// A stage-wide contraption (marble, lever, boot, ball, bucket, gutter) pours water on Clawd. He shakes off; it collapses.
$cdA("rube-goldberg", { title: "Rube Goldberg", w: 64 }, function (c) {
var W=c.W,T=c.T,M=Math.random,mx=Math.max,mn=Math.min,rd=Math.round,i,k,t,d,f=[],P=[],ex=[],
X=c.mx-1,s=mx(3,rd(X*.05)),A=3*s,B=A+8,C=B+4+mx(12,rd(X*.28)),E=X+3,D=C-B-5,n=D/2+1|0,h=2+M()*.6,
BL="#5aa0ff",WD="#b08850",G="inactive",Y="warning",H="subtle",L="left",O="open",Z="closed",U="up",
Q="▙▟▛▜▌▐▖▗▘▝/\\┌┐",mi=c.x<c.mx/2,
mb=[0,0],lv=0,bt=-1,ba=[B+4,2],bk=0,wt=C+3,wh=0,cd=X,cp=0,pud=0,w=0,jx=0,dr=0,FL=0,st=0;
// the machine, left to right; the gutter ends over Clawd
function S(){
var q=[],p=[];
function a(x,y,t,l,z){q.push([x,y,t,l,z])}
for(k=0;k<3;k++)a(k*s,k+1,"▀".repeat(s),WD);
for(k=2;k<7;k++)a(0,k,"│",WD);
if(cd>2)a(1,0,"│",G),a(2,0,"─".repeat(cd-2)+(cd==X?"┐":""),H,1);
if(cd==X)for(k=1;k<4+cp;k++)a(X,k,k<3+cp?"│":"◆",k<3+cp?H:Y,1);
a(A+1,3,lv?"▄▄▄▲▀▀▀":"▀▀▀▲▄▄▄",G);
a(B-1,0,"─┬─",G);a(B+bt,1,"/│\\"[bt+1],H);a(B+2*bt,2,"▙▄","#b4643c");
a(B+3,3,"▀▀▀",WD);
ba&&a(ba[0],ba[1],"●","error");
d=bk&1;a(C+d,0,bk>1?"▛▀▀":"▌ ▐",G);bk<2&&a(C+1+d,0,"≈",BL);a(C+d,1,bk>1?"▙▄▄":"▙▄▟",G);
a(C,2,"▀".repeat(E-C+1),G);
if(wh>wt){for(t="",k=wt;k<wh;k++)t+=(k+st)%4?"≈":"~";a(wt,1,t,BL)}
mb&&a(mb[0],mb[1],"●","text");
// drop in (dr), fall away (FL)
q.forEach(function(e){var y=e[1]+(FL?mx(0,FL-(e[0]*8/X|0)):-mn(7,mx(0,(e[0]*12/W|0)+7-dr)));
y>=0&&y<7&&p.push(T(e[0],y,e[2],e[3],e[4]||FL?{z:-1}:0))});
return p}
// P = drops [x,y,vx,vy,ch,col], w = wetness
function F(e,ms,o,a,ft){
var p=S().concat(ex),ww=w,r;
P=P.filter(function(q){q[0]+=q[2];q[1]+=q[3];q[3]+=.3;var x=rd(q[0]),y=rd(q[1]),ok=y<7&&x>=0&&x<W;ok&&y>=0&&p.push(T(x,y,q[4],q[5]||BL));return ok});
pud&&p.push(T(X-pud,6,"▂".repeat(pud),BL),T(X+9,6,"▂",BL));
f.push(r={x:X+jx,pose:c.P(e,a,ft),ms:ms,offset:o||0,props:p});
if(ww>.02)r.paint=function(x,y){var t=c.clamp(ww*1.5-y*.3,0,1);return c.rgb(215-125*t,119+31*t,87+153*t)}}
function sp(y,v){d=M()<.5?-1:1;P.push([X+4+d*c.R(3,5),y,d*(.4+M()*v),-v*(.1+M()*.3),c.pick("·°'")])}
for(;dr<20;dr++)F(dr>9?L:O,35);
dr=99;F(L,350);F("wink",450,0,U);
// yank the cord: it zips back, opens the gate
F(O,160,0,U);cp=1;F(Z,110,1,U);F(Z,220,1,U);cp=0;
while(cd>2)cd=cd==X?X-1:mx(2,cd-6),F(L,25);
ex=[T(1,0,"✦",Y)];F(L,60);ex=[];
// the marble rolls onto the lever
for(i=1;i<=A+1;i++)mb=[i,mn(2,i/s|0)],F(L,mx(22,70-i*4));
lv=1;mb=[A+1,3];F(L,90);
// the boot swings, KICK, the ball arcs over
bt=0;F(L,70);bt=1;ex=[T(B+4,1,"✦",Y)];F(L,70,0,"one-up");ex=[];
for(i=1;i<=n;i++)t=i/n,ba=[B+4+rd(D*t),mx(0,rd(2-t-h*Math.sin(Math.PI*t)))],bt=i<12?[1,0,-1,0,1,0][i>>1]:0,F(L,35);
// bonk: the bucket tips
bt=ba=0;P.push([C-1,1,-.4,-.3,"●","error"]);ex=[T(C-1,0,"✦",Y)];bk=1;F(L,90,0,U);ex=[];
bk=0;F("wink",80,0,U);bk=1;F("wink",80,0,U);bk=2;wh=C+5;F(L,110,0,U);
// water races toward Clawd
while(wh<=E)wh=mn(E+1,wh+3),st++,F(wh>X-14?O:L,40);
ex=[T(X+4,3,"!",Y,{b:1})];F(O,380);ex=[];
P.push([X+4,2,0,0,"·"]);F(O,90);F(O,90);F(Z,130,1);F(O,90);
// the pour: stoic, blue, peeks
for(i=0;i<26;i++)wt=C+3+rd(mx(0,(i-8)/18)*(E-C-3)),st++,w=mn(1,w+.07),
ex=[T(X+4,2,i&1?"║":"│",BL),T(X+4,3,"│",BL)],sp(3,1),sp(3,1),F(i>21?"wink":Z,55,i<3?1:0);
wh=wt;ex=[];P.push([X+4,3,0,.2,"·"]);F(Z,300);
// soaked: stare, drips
for(i=0;i<12;i++)i%4||P.push([X-1,5,0,0,"·"],[X+9,5,0,0,"·"]),pud=mn(2,i/4|0),F(i<10?O:Z,i<10?90:60);
// shake it off
for(i=0;i<16;i++)jx=i&1||-1,w=mx(.08,w-.06),sp(4,1.5),sp(5,1.5),sp(4,1.5),F(Z,40,0,i&2?U:0,i&1?L:"right");
jx=0;F(O,200);w=0;F("wink",450,0,U);
// it all collapses
for(FL=1;FL<17;FL++)pud=mx(0,pud-(FL&1)),F(FL>3&&FL<8?Z:L,45,FL>4&&FL<7?1:0);
F("wink",400);F(O,200);
// mirror if Clawd starts on the left
if(mi)f.forEach(function(r){r.x=c.mx-r.x;r.pose.eyes={left:"right",right:L}[r.pose.eyes]||r.pose.eyes;
r.props.forEach(function(q){q.x=W-q.x-q.t.length;q.t=q.t.split("").reverse().map(function(h){k=Q.indexOf(h);return k<0?h:Q[k^1]}).join("")})});
return c.walk(c.x,mi?c.mx-X:X,{ms:30}).concat(f);
});
