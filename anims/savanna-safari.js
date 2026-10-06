// Sunset savanna: a herd passes a huge sun; Clawd watches from his jeep until a lion yawns behind him and he floors it.
$cdA("savanna-safari",{ scene: 1,title:"Safari",w:70},c=>{
var W=c.W,T=c.T,R=c.R,M=Math,Z={z:-1},t=0,k=0,i,j,o,q,f,d=c.x<W/2?1:-1,D=d>0,
x=c.clamp(c.x,D?21:7,c.mx-(D?7:21)),x0=x,jx=x,xe=D?c.mx-7:7,fh=D?9:-1,rb=D?-6:14,
E=D?"right":"left",B=D?"left":"right",C="closed",U="up",Wk="wink",H="one-up",
rr=c.rng(R(1,9e5)),off=0,hy=0,bn=0,lh=4,la=0,lz=1,jz=Z,sp=0,yw="",du=[],A=[],LC=[215,150,70],
P="▟▙▐▌▗▖▝▘▛▜",rp=(s,n)=>s.repeat(n),
KC={},K=a=>KC[a+"|"+k]||(KC[a+"|"+k]=c.rgb(...a.map(v=>25+(v-25)*k))),
// Q: art beside Clawd, mirrored when he faces left.
Q=(ox,y,a,col,ex,X=x)=>{var w=M.max(...a.map(l=>l.length));return a.map((l,i)=>T(D?X+ox:X+9-ox-w,y+i,D?l:[...l.padEnd(w)].reverse().map(h=>(q=P.indexOf(h))<0?h:P[q^1]).join(""),K(col),ex))},
// Layers: art stamped into full-width rows.
cv=n=>[...Array(n)].map(()=>Array(W).fill(" ")),
st=(L,X,Y,a)=>a.map((l,y)=>[...l].map((h,j)=>{h>" "&&L[Y+y][X+j]&&(L[Y+y][X+j]=h)})),
J=L=>L.map(r=>r.join("")),out=(L,col)=>L.map((r,y)=>T(0,y,r,K(col),Z)),
cl=()=>{for(var s="";s.length<W+50;)s+=rp(" ",R(9,30))+rp("▀",R(3,14));return s},C0=cl(),C1=cl(),
SN=[9,15,19,21].map((n,i)=>rp(" ",(21-n)/2)+rp(i?"█":"▄",n)),
sx=D?M.min(W-22,x+R(18,40)):M.max(0,x-R(26,46)),
AR=[["▗▄▟▘","  ▐▌","  ▐█▄▄▄▖","  ▐▌ ▐▌|  ▌▐ ▌▐"],[" ▄▟██▙▄▄▄","▟▛▜"+rp("█",7)+"▌  ▗▟█▄▄▖","▌ ▐█▌ ▐█▌  ▘▐▌ ▐▌|▌  █▌  █▌  ▘ ▌▐ ▌"]],
L0=[" ▄▓▓▄","▓▓▓-▓▙▄","▀▓▓▓▀▀▀"],LA=[L0,L0.map(s=>s.replace("-","●")),["      ▗"," ▄▓▓▄▟▘","▓▓▓-▓","▀▓▓▓▀▀▘"]],
JP=["              ▗▖","▗█▖"+rp(" ",11)+"▐▙▄▄▄▖","▜"+rp("█",18)+"▛"],
TL=cv(4),GL=cv(7);
for(j=R(0,12);j<W;j+=R(22,40))st(TL,j,1,rr()<.5?["▗▄███▄▄██▄▖"," ▀▀▀▜▀▛▀▀▘","    ▝▌"]:["▄▄██▄▄","▀▀▜▛▀▀","  ▐"]);
for(j=0;j<W;j++)j>9&&j<65||(rr()<.07&&st(GL,j,5,["\\|/"]),GL[6][j]="wvW,'v"[rr()*6|0]);
for(j=R(0,15);j<W+20;j+=R(26,44))A.push([j,R(0,1)]);TL=J(TL);GL=J(GL);
// F: herd walks, sun sinks, clouds/birds drift, grass sways.
var F=(e,a,ms,ex)=>{t++;
 du=du.filter(o=>++o[2]<4);
 var p=[],s=t/60|0,b=M.round(t*.7)%(W+30)-15,w=sp?"✕✚"[t%2]:"●";
 SN.map((l,i)=>(q=i+s)<4&&p.push(T(sx,q,l,K([255,215-q*30,90-q*15]),Z)));
 p.push(c.tile(C0,0,K([235,140,140]),t*.15,Z),c.tile(C1,1,K([180,90,140]),t*.08,Z),...out(TL,[125,70,85]));
 A.map(o=>{o[0]-=o[1]?.22:.32;o[0]<-24&&(o[0]+=W+40);var X=M.round(o[0]);AR[o[1]].map((l,y)=>p.push(T(X,o[1]+y,l.split("|")[X&1]||l,K([150,80,115]),Z)))});
 p.push(
  ...[0,3,6].map((q,i)=>T(b-q,i%2,(t+i)&2?"v":"~",K([120,80,110]),Z)),
  ...[5,6].map(y=>c.tile(GL[y],y,K([200,160,70]),y<6&&t>>2&1,Z)),
  ...Q(-21,5,[(t&8?"~":"-")+rp("▄",7),rp("▀",15)],LC,0,x0),...Q(-14,lh-(la>1),LA[la],LC,0,x0),
  ...Q(-4,3,JP,[150,150,80],jz,jx),...Q(-2,6,[w+rp(" ",12)+w],[110,110,120],jz,jx),
  ...du.map(o=>T(o[0],o[1],"▓▒░·"[o[2]],K([200,170,120]))),
  ...Q(1,2+off+hy,[" ▄███▄ ",rp("▀",7)],[225,205,150]));
 bn&&p.push(T(x+2,3,t%23<2?"(✦)(●)":"(●)(●)",K([120,120,135])));
 yw&&p.push(T(D?x0-16:x0+18,1,yw,"warning",{b:1}));
 lz&&p.push(...Q(-8+(q=t%24>>3),lh-1-q,["zZ"[q&1]],[190,190,230],0,x0));
 f.push({x,pose:c.P(e,a),offset:off,ms,props:p.concat(ex||[])})};
f=c.walk(c.x,x);
// Fade in, hop into the jeep.
for(i=0;i<16;i++){k=i/15;F(i<6?0:i<10?E:i<13?B:Wk,i>13?H:0,70)}
[1,-2,-3,-2].map((v,i)=>{off=v;F(i>2&&E,i&&U,i&1?60:100)});
jz=0;off=-1;du.push([x-6,6,0],[x+15,6,0]);F(C,0,90);F(Wk,H,300);F(E,H,140);
// Binoculars; a heart.
for(i=0;i<70;i++){j=i>30&&i<46;bn=!j;F(j&&i%8>5?Wk:E,!j&&U,70,j&&i>33&&i<44?[T(x+fh,2-((i-34)/4|0),"♥","error")]:0)}
// Lion yawns, Clawd panics.
lz=0;la=1;lh=3;F(E,U,250);
la=2;for(i=1;i<7;i++){yw="YAAAWN".slice(0,i);F(E,U,i<6?90:450)}
bn=0;F(E,0,200);F(B,0,500);la=1;yw="";F(B,0,350);
o=[T(x+8-fh,1,"!","error",{b:1})];hy=-1;F(C,U,90,o);hy=0;F(B,U,250,o);
// Race across the savanna.
sp=1;for(i=0;i<6;i++){jx=x+=i&1?d:-d;du.push([x+rb,5,0]);F(E,U,60)}
for(i=0;x!=xe;i++){jx=x+=d*M.min(i<4?1:2,M.abs(xe-x)>8?2:1);du.push([x+rb,5+i%2,0]);i==10&&(la=0,lh=4,lz=1);
 F(i%6<3?C:E,U,40,i<14?[T(D?x-12:x+16,2,"aaah!","text")]:0)}
sp=0;du.push([x+rb,6,0]);F(C,0,120);F(C,H,600,[T(x+2,0,"phew!","text"),T(x+fh,2,"'","permission")]);
// Hop out, fade.
jz=Z;[-2,-3,-3,-3,-2,-1,0].map(v=>{off=v;x-=2*d;F(!v&&C,v&&U,v?50:120)});
du.push([x+2,6,0],[x+7,6,0]);F(B,0,400);
for(i=15;i>=0;i--){k=i/15;F(i>9?B:i>4?0:Wk,0,70)}
f.push({x,pose:"default",ms:300});
return f});
