// Movie night: popcorn at a sky drive-in; the scary scene makes Clawd leap and the popcorn fly everywhere.
$cdA("popcorn-movie",{title:"Movie night",w:50},c=>{
var T=c.T,R=c.R,M=Math,U=M.round,f,i,j,p,t,
x=c.clamp(c.x,3,c.mx-26),X=x,S=x+14,N=18,o=0,RT="right",e=RT,a="down",ft,rw=0,sh=0,sf,st,BG,Z,P=[],Gd=[],
bx=x+9,by=5,bq="",hp="",hd=0,CR="#ffecaa",IN="inactive",Y="chromeYellow",E="error",W="text",B="permission",
RB=["▜█▛","▐█▌","▟█▙","▐█▌"],ln="─".repeat(N),
A=(q,t)=>[U(q[0]+(q[2]-q[0])*t),U(q[1]+(q[3]-q[1])*t-4*q[4]*t*(1-t))],
I=(q,r,s,co)=>{var u=M.max(0,-q),v=M.min(s.length,N-q);v>u&&Z.push(T(S+sh+1+q+u,r,s.slice(u,v),co,{bg:BG}))},
L=(...q)=>P.push(q.concat(0)),
V=s=>(sf=SC[s],st=0),
F=(ms,ex)=>{var Q=[],k,s=S+sh,q;
 if(rw){Z=[];rw>3&&sf(st++);Q.push(T(s,0,"┌"+ln+"┐",IN));
  for(k=1;k<rw-1;k++)Q.push(T(s,k,"│"+" ".repeat(N)+"│",IN,{bg:BG,o:1}));
  rw>1&&Q.push(T(s,rw-1,"└"+ln+"┘",IN));Q=Q.concat(Z)}
 for(q of Gd)Q.push(T(q,6,"o",CR,{z:-1}));
 hd&&(bx=X+3,by=3+o);
 if(bq){for(k=0;k<3;k++)Q.push(T(bx+k,by,bq[k],k%2?W:E));hp&&Q.push(T(bx,by-1,hp,CR))}
 for(k=P.length;k--;)q=P[k],++q[7]<q[5]?Q.push(T(...A(q,q[7]/q[5]),q[6]&&q[7]<2?"*":"o°"[q[2]&1],CR)):(P.splice(k,1),q[6]&&Gd.push(q[2]));
 f.push({x:X,offset:o,pose:c.P(e,a,ft),props:Q.concat(ex||[]),ms})},
SC=[
(t,k)=>{k=3-(t>>2);BG=t%4?"#4a4a4a":"#707070";I(5,1,"·  "+k+"  ·",W);I(9-2*k,2,"═".repeat(4*k),IN)},
t=>{BG="#2b5f8e";I(2,1,"☼",Y);I(14-(t>>2),1,"☁",W);I(t-1,1,"v^"[t%2],W);I(0,2,"▄▀▀▄▄▄▀▄▄".repeat(2),"success");I(4,2,"✿",E);I(12,2,"✿",Y)},
t=>{BG="#5c2346";p=M.min(t,7);I(1+p,1,"o",W);I(16-p,1,"o",W);I(1+p,2,"▲",B);I(16-p,2,"▲",E);t>7&&I(R(0,17),R(1,2),"♥",E)},
t=>{BG="#3d3d3d";p=U(t*1.6)-3;I(p,2,"▗▟█▙▄","warning");I(p-3,2,"≡",IN);I(p-11,2,"▗▟█▙▄",B);I(p-9,1,"•",t%2?E:B);I(p-14,2,"≡",IN)},
t=>{BG="#191c3a";I(14,1,"○",Y);I(12-t%16,1,t%2?"^v^":"v^v",IN);I(0,2,"▲▲ ▲ ▲     ▲ ▲▲ ▲▲","#2e6b40");t>5&&I(7,2,t>13?"●  ●":t>9?"•  •":"·  ·",t>13?E:"warning")},
t=>{var C=t%2?W:E;BG=t%2?E:W;gh?(I(4,1,"▐●█●▌  BOO!",C),I(4,2,"▀▄▀▄▀",C)):(I(4,1,"◥●◤    ◥●◤",C),I(3,2,"▼".repeat(12),C))},
(t,s)=>{BG="#404040";for(s="";s.length<36;)s+=c.pick(" ░▒▓");I(0,1,s.slice(18),IN);I(0,2,s,IN)},
()=>{BG="#262626";I(5,1,"THE  END",W);I(7,2,"· ♥ ·",E)}];

// Seat, bucket, screen, sit.
f=c.walk(c.x,x);
F(250);a="one-up";F(90,[T(x+10,4,"✦",Y)]);
bq=RB[0];F(90,[T(x+8,3,"✧   ✦",Y)]);hp="°o°";e="wink";F(300);e=RT;V(0);
for(;rw<4;)rw++,F(80);
o=1;by=6;F(120);a="down";

// Countdown + 2-3 films; munching, stray pops.
var ph=R(0,5);
[0,...[1,2,3].sort(_=>M.random()-.5).slice(R(0,1))].map(s=>{V(s);for(j=0;j<(s?14:12);j++){var k=(j+ph)%(s>2?4:6),ex=[];
 if(s==2&&j>7)a="down",e=j>9?"wink":RT,ex=[T(x+4,4-(j-8>>1),"♥",E)];
 else if(s||j>7)a=k?"down":"one-up",e=k==3?"closed":RT,k||L(x+9,4,x+5,4,2,4,0);
 s&&!R(0,4)&&(R(0,1)?L(x+10,4,x+R(12,15),6,R(1,2),R(4,6),1):L(x+10,4,x-R(1,3),6,3,8,1));
 F(s>2?70:110,ex)}});

// Spooky: frozen hand, eyes in the woods, trembling.
V(4);a="one-up";
for(j=0;j<18;j++)e=j%7>5?"closed":RT,X=j>13?x-j%2:x,F(j<14?200:110,[T(X+8,4,"°",CR),T(j>9?X-1:-9,4+j%2,"'",B)]);

// BOO: leap, popcorn burst, bucket spins onto his head.
var gh=R(0,1);X=x;V(5);e="open";F(260,[T(x+4,4,"!","warning",{b:1}),T(x+8,4,"°",CR)]);
hp="";for(i=0;i<18;i++)t=c.clamp(x+10+R(-22,22),0,c.W-1),L(x+10,5,t,6,R(1,5),3+(M.abs(t-x-10)>>1),1);
[..."02344321000000"].map((q,j)=>{o=j-12?-q:1;a=j<9?"up":"down";e=j<9?"closed":"open";ft=j<8?j%2?"left":RT:"both";sh=j<8?-(j%2):0;
 if(j<12)[bx,by]=A([x+9,6,x+3,3,5],(j+1)/12),bq=RB[j>10?2:j%4];else hd=1;
 F(j-12?55:160,[T(x+1,3,j-12?" ":"✦     ✧",Y)])});

// Film snaps, seeing stars, THE END.
V(6);e="closed";
for(j=0;j<6||P.length;j++)p=j%2*6,F(70,[T(x+1+p,3,"✦",Y),T(x+7-p,2,"·",Y)]);
V(7);e="open";F(300);e="left";F(500);e=RT;F(450);e="wink";F(400);

// Bucket back in hand, popcorn hops home, screen rolls up, poof.
hd=0;a="up";e="open";by=2;F(160);a="one-up";bq=RB[1];bx=x+8;by=4;F(70);bq=RB[0];bx=x+9;by=5;F(200);
for(j=0;rw||Gd.length||P.length;j++){j%2&&rw&&rw--;e=j%6<3?"left":RT;hp="°o°".slice(0,j>>2);
 for(i=0;i<2&&Gd.length;i++)p=Gd.splice(R(0,Gd.length-1),1)[0],L(p,6,x+10,4,3,4+(M.abs(p-x-10)/3|0),0);F(60)}
e="wink";F(400);bq=hp="";a="down";F(110,[T(x+9,4,"✦ ✧",Y)]);
f.push({x:X,pose:"default"});
return f});
