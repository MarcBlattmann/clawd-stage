// Clawd sunbathes in shades till lobster-red, then dashes under the umbrella.
$cdA("beach-day", { title: "Beach day", w: 50 }, function (c) {
var R=c.R,T=c.T,P=c.P,G=c.G,M=Math.random,i,k,X,Q=[],d=c.x*2>c.mx?-1:1,x=c.clamp(c.x,d>0?2:17,c.mx-(d>0?17:2)),
cx=x,m=x+4+14*d,sx=x+R(2,4),f=c.walk(c.x,x),E=d>0?"right":"left",K=P(E),B=P(d>0?"left":"right"),W="warning",Y="chromeYellow",I="inactive",
N="text",H="error",V="suggestion",C=P("closed"),CU=P("closed","up"),OU=P(0,"up"),ST=c.pick([[H,N],["permission",N],["success",Y]]),
TW=c.pick([[W,H],["rainbow_blue",N],["success",Y]]),
se=0,sy=4,uy=-9,un=0,tl=0,rl=0,gm=0,gx,gy,bt=0,sh=1,sb=0,Z={z:-1},U="subtle",GL="██▀██▀",GC="#505068";
function D(a,b,t,v,l,q){Q.push({x:a,y:b,t:t||"°",v:v||-1,l:l||2,c:q||I})}
function J(e,k){return P(e,k&1?"up":"one-up",k&1?"left":"right")}
// draw the beach
function F(ms,a,o,ex){
o|=0;
var p=[],j,L,h,n=f.length,s,bc=bt||sh<1?c.rgb((215+20*bt)*sh,(119-75*bt)*sh,(87-50*bt)*sh):"clawd_body";
se&&p.push(T(0,3,"~~   -   ".repeat(21).substr(n/2%9|0,c.W),se,Z));
p=p.concat(c.art(sx,sy,["▄██▄","▀██▀"].slice(0,4-sy),c.rgb(255,215-35*sy+40*sb,60-7*sy+110*sb),Z));
sy<1&&p.push(T(sx-2,n&1,"─      ─",Y,Z),T(sx-1,2,n&1?"/    \\":" '  '",Y,Z));
un>2&&uy==2&&p.push(T(m-4,6,"░".repeat(9),U,Z));
if(uy>-9)for(j=0;j<5;j++){L=j>1?"│":un?j?"▝"+(s="▀".repeat(2*un))+"▛"+s+"▘":"▗▄"+"█".repeat(4*un-3)+"▄▖":j?"█":"▲";for(h=L.length>>1,k=-h;k<=h;k++)p.push(T(m+k,uy+j,L[k+h],j>1?I:ST[(k<0?-k:k)+1>>1&1],Z))}
for(k=0;k<=tl;k++)(k<tl||rl)&&p.push(T(x-2+k,6,k<tl?"▄":"●",TW[k>>1&1],Z));
gm&&p.push(gm<2?T(cx+2,G+o,GL,GC,{bg:bc}):T(gx,gy,GL,GC,gy>5&&Z));
Q=Q.filter(function(q){return q.l-->0&&p.push(T(q.x,q.y,q.t,q.c))&&(q.y+=q.v,1)});
f.push({x:cx,pose:a,offset:o,ms:ms,color:bc,props:p.concat(ex||[])});
}
// dawn, stretch
se=U;F(300);se="#468ce1";F(300,K);
for(i=3;i>=0;i--)sy=i,F(i?R(300,400):200,P(i<2?"closed":0));
F(450,CU,-1);F(250,CU);F(300,P("wink"));
// umbrella thunks in, opens
for(i=-4;i<3;i++)uy=i,F(45,P(i<0?0:E));
for(k=2;k<4;k++)D(m-k,5,"·",0,0,W),D(m+k,5,"·",0,0,W);
F(70,C,1);F(260,K);
for(i=1;i<4;i++)un=i,F(i<3?60:90,K);
F(300,P("wink"),0,[T(m,1,"✦",N)]);
// towel unrolls, hop
for(rl=1,i=0;i<13;i++)tl=i,k=i-2,X=k>0&&k<8,F(45,P(k<4?"left":"right",X?"up":0),X?-1:k?0:1);
rl=0;tl=13;F(250);
// shades on, lie down
gm=2;gx=x+4;gy=G-1;F(260,P(0,"one-up"),0,[T(cx+10,G-2,"✦",N)]);F(160,P(E,"one-up"));
gm=1;F(80,P(),1);F(380,P(),0,[T(cx+3,G-1,"✦",N)]);
F(120,P(),1);F(450,CU,1,[T(cx+9,G,"~",I)]);
// sunbathe and cook
for(k=R(18,24),i=0;i<k;i++){
bt=sb=i/(k-1);
M()<.7&&D(sx+R(0,3),2,"·'|"[R(0,2)],1,3,Y);
M()<bt-.2&&D(x+R(1,7),G,"°~"[R(0,1)]);
F(R(130,190),P("closed",i==9?0:"up"),1,i>2&&i<6?[T(x+9+(i&1),G+3-i,"♪",V)]:i==8?[T(x+3,G,"✦",N)]:0);
}
// sizzle, jolt
for(k=0;k<5;k++)bt=k&1?1.12:1,F(80,CU,1,[T(x+R(1,7),G,"*",W)]);
bt=1;F(350,CU,1);
gm=2;gx=x+2;gy=G+1;X=[T(x+4-6*d,G-2,"!",H,{b:1})];
F(140,OU,-2,X);gy=6;F(120,OU,-2,X.concat(T(gx-1,6,"·",I),T(gx+6,6,"·",I)));F(60,OU,-1);F(60,C);
// hot hops, dash
for(k=0;k<6;k++)D(x+R(1,7),G-1),F(70,J("closed",k),-(k&1),k&1?0:[T(x+(k&2?-1:9),G-1,"!",H)]);
F(220,K);F(100,K,1);
for(k=0;cx!=m-4;k++)cx+=d,D(cx+4,G-1),F(32,J(E,k),0,[T(cx+4-6*d,G+1,"≡",I)]);
F(70,K,0,[T(cx+4+5*d,6,"·",W)]);
// cool down
sh=.8;F(90,C,1);F(400,CU,1,[T(cx+9,G,"~",I)]);
for(i=0;i<11;i++)bt=sb=1-i/10,M()<bt&&D(cx+R(1,7),G,0,0,1),F(150,P(i<8?"closed":0,"up"),1);
F(500,P("wink","up"),1,[T(cx+9,G,"♪",V)]);F(200);
// pack up, sunset
for(i=2;i>=0;i--)un=i,F(70);
sh=1;
for(i=3;i<8;i++)uy=i,F(70,C,0,[T(m-5,6,"·",W),T(m+5,6,"·",W)]);
uy=-9;
for(rl=1,i=12;i>=0;i--)tl=i,gm=i>9?2:0,F(40,B);
rl=0;F(80,B,0,[T(x-2,6,"·",I)]);
for(i=1;i<5;i++)sy=i,F(250);
se=U;F(300);se=0;F(300,P("wink"));F(300);
return f;
});
