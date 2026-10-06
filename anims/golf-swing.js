// Clawd tees up and swings a full arc; the ball flies to a far flag and drops in: HOLE IN ONE! Then the tossed club bonks him.
$cdA("golf-swing",{title:"Hole in one",w:60},function(c){
var T=c.T,R=c.R,M=Math,G=c.G,i,j,k,n,q,t,P=[],C=[],
x=c.clamp(c.x,4,c.W-50),X=x,hx=M.min(c.W-4,x+R(42,60)),bx=x+11,lx=hx-R(9,14),N=(x+9+hx>>1)-8,
o=0,e="right",a="down",fe,cl=-1,B=0,E=0,gw=0,fh=0,fw=1,tw=0,tc,GR="#2e7d32",S="inactive",W="text",Y="chromeYellow",
// club per swing pos SE,S,SW,W,NW,N,NE,E,SE': hex dx+3,dy+3,glyph
CS="c5\\d5▄|75▄|25/15▄|24─14─04▌|32\\21\\10▀|72│71│70▀|b2/c1/d0▀|c3─d3─e3▐|c5\\d5▀".split("|"),
f=c.walk(c.x,x);
function L(m,j,g,cc){var s=CS[m];return T(X+parseInt(s[j],16)-3,G+o+ +s[j+1]-3,g||s[j+2],cc)}
function F(ms,p){var j,s=CS[cl];p=p||[];
if(gw)j=" ".repeat(gw),p.push(T(hx-gw,6,j+"▄"+j,"#0f3a14",{bg:GR,o:1,z:-1}));
for(j=0;j<fh;j++)p.push(T(hx,5-j,"│",W));
fh&&p.push(T(hx+fw,6-fh,fw>0?"▶":"◀","error"));
B&&p.push(T(B[0],B[1],"●",W,B[1]>5&&B[0]>=hx-gw?{bg:GR}:{}));
E&&p.push(T(E[0],E[1],E[2],"warning"));
if(s)for(a=["down","up","one-up"]["000011120"[cl]],j=0;j<s.length;j+=3)p.push(L(cl,j,0,j+3<s.length?S:W));
for(j=0;j<tw;j++)p.push(T(N+j,1,"★ HOLE IN ONE! ★"[j],tc||c.rainbow(j+f.length),{b:1}));
C.forEach(function(d){d[1]<7&&p.push(T(d[0]+(d[1]*2&1),d[1]|0,d[2],d[3],{z:-1}));d[1]+=d[4]});
f.push({x:X,offset:o,pose:c.P(e,a,fe),props:p,ms:ms})}
function SP(x,y,g){var d="11─10/02│12\\".substr(g%4*3,3),p=[],j=-2;while(++j<2)p.push(T(x+j*d[0],y+j*(d[1]-1),d[2],S));return p}
function D(j,b,q){for(q=[];j<b;j+=2)q.push(T(P[j][0],P[j][1],"·",S));return q}
// flag, tee
for(k=1;k<10;k++)gw=M.min(k,6),fh=c.clamp(k-5,0,4),F(k>8?300:50);
o=1;a="one-up";F(160);
E=[bx,5,"┬"];F(100);E[1]=6;F(90,[T(bx-1,6,"· ·",S)]);
B=[x+9,5];F(160);B=[x+10,4];F(70);B=[bx,5];e="wink";F(220);
// club, waggle
o=0;e="open";F(350);
for(k=0;k<6;k++)F(k?45:90,SP(x+10,k-2,k));
cl=7;e="wink";F(220);cl=0;e="right";F(400);
for(n=R(2,4)*2,k=0;k<n;k++)cl=k%2?8:0,fe=k%2&&(k%4>2?"right":"left"),e=k==n-2?"closed":"right",F(140);
fe=0;e="closed";F(R(300,500));e="right";F(200);
// swing
for(k=1;k<6;k++)cl=k,F(k<3?150:100);
cl=4;F(R(400,700));
for(e="closed",k=4;k--;){for(q=[],j=4;j>k;j--)q.push(L(j,CS[j].length-3,"·",S));cl=k;F(32,q)}
B=0;F(50,q.concat(T(bx,5,"✸",Y,{b:1})));
// flight
for(t=R(46,62)/10,n=lx-bx,i=1;i<=n;i++){
k=i/n;P.push(B=[bx+i,M.round(5+k-4*t*k*(1-k))]);cl=i<2?7:6;e=i<2?"closed":"right";
i<5?E=[bx+i-1,+"5445"[i-1],"┤┴├┬"[i-1]]:E[1]=6;
F(24+24*M.sin(M.PI*k),D(0,i-1))}
// roll, plink
q=[[lx+1,5],[lx+2,4],[lx+3,5],[lx+4,6]];for(j=lx+5;j<hx;j++)q.push([j,6]);
for(cl=0,X=x+1,n=q.length,i=0;i<n;i++){B=q[i];
F(i<4?60:40+160/(n-i),D(P.length*(i+1)/n&-2,P.length).concat(i?[]:T(lx-1,6,"·°",S)))}
e="closed";fe="left";F(R(450,800));B=[hx,6];e="open";fe=0;F(110);B=0;
for(k=0;k<6;k++)fw=k%2?1:-1,F(70,[T(hx-1-k%2,5-(k>>1),k%2?"✦   ✧":"✦ ✧",Y)]);
// party
fw=1;F(250,[T(X+4,3,"!",Y,{b:1})]);cl=-1;X=x;
for(n=R(22,30),k=0;k<n;k++){
o=[0,-1,-2,-1][k%4];e=k%8<4?"open":"wink";a=k%4?"up":"one-up";tw=k<8?k*2:16;
k<18&&C.push([R(x,hx),0,c.pick("✦*•·°"),c.rainbow(k),R(4,8)/10]);
F(k%4-2?80:110,k<8?SP(X+10+(k>>1),2-k,k):[])}
// bonk
for(o=0,a="down",k=0;k<3;k++)e=["right","left","open"][k],tc=[S,"subtle"][k],tw=k<2?16:0,F(300,[T(X+4,3,"?",Y,{b:1})]);
for(k=0;k<7;k++)F(40,SP(X+4,k-4,k));
o=1;e="closed";F(260,SP(X+4,3,2).concat(T(X+1,4,"✦     *",Y)));
for(o=0,k=1;k<6;k++)F(50,SP(X+4-k,3-k,k+1));
for(k=0;k<10;k++)e=k%4<2?"closed":"open",F(90,[T(X+2+k%5,3,"✦",Y),T(X+6-k%5,3,"*",Y)]);
e="wink";F(400);
// pack up
for(e="right",k=5;k--;)fh=k,F(80);
E=0;F(80,[T(bx+3,6,"·",S)]);
for(;gw;gw--)F(40);
f.push({pose:c.P("wink"),ms:400},{pose:"default"});
return f});
