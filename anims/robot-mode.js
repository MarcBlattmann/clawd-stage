// Chrome beam + antenna: robot Clawd beeps, dances stiffly, shorts out, shakes it off.
$cdA("robot-mode",{title:"Robot mode",w:44},c=>{
var M=Math,R=c.R,T=c.T,G=c.G,pk=c.pick,Z=M.random,
x=c.clamp(c.x,1,c.mx-14),f=c.walk(c.x,x),
MT=["#dde1e8","#a9b0bc","#7c8492"],GY="inactive",CY="#6fe3ff",Y="chromeYellow",RD="error",TX="text",GN="success",V="#2a0a0a",K={z:-1},
N={c:"closed",l:"left",r:"right",w:"wink",u:"up",1:"one-up"},
dx=0,of=0,ey,ar,ft,mk=[],sw=-9,sh=-9,gl=0,fl=0,an=0,al=0,tx="",tc=CY,vs=-1,bm=-1,U=[],tm=0,i,j,k,
B=(u,v,m,g,C,s,gr,e)=>{while(m--)U.push([u,v,R(-s,s)/10,-R(1,s)/10,R(3,6),g||"✦*·",C||Y,gr||0,e])},
J=(u,v)=>B(u,v,2,"*·",Y,6,.15),
Sm=u=>U.push([u,G-2,R(-2,2)/10,-.3,R(3,6),"▒░·",GY,0]),
// Frame; holds split while particles fly.
S=(ms,ex)=>{while(ms>0){let d=U.length&&ms>90?60:ms,X=x+dx,t=G+of,q=[],p=[],j;tm+=d;ms-=d;
 U=U.filter(z=>{z[0]+=z[2];z[1]+=z[3];z[3]+=z[7];var L=z[4]--;q.push(T(M.round(z[0]),M.round(z[1]),z[5].slice(-L)[0],z[6],z[8]));return L>1});
 for(j=0;j<t&&bm+1;j++)q.push(T(X+bm,j,j<t-1?"│":"▼",CY));
 an&&q.push(an>4?T(X+4,t-1,"╭─•",GY):T(X+4,t-1," ╻│╲╱"[an],MT[1]));
 an>1&&an<5&&q.push(T(X+4+[0,0,0,-1,1][an],t-2,"●",al||(tm/250&1?RD:GY)));
 tx&&q.push(T(X+6,t-2,an?")":" ",GY),T(X+8,t-2,tx,tc,{b:1}));
 vs+1&&q.push(T(X+2,t,"──────","#a03030",{bg:V,o:1}),T(X+2+vs,t,"■",RD,{bg:V,b:1}));
 for(j=0;j<27;j++)p.push(fl||(gl&&Z()<gl?pk([RD,Y,CY,TX]):j%9==sw?TX:mk[j]?(j%9+(j/9|0)==sh?TX:MT[j/9|0]):0));
 f.push({x:X,offset:of,pose:c.P(N[ey],N[ar],ft),ms:d,paint:(a,b)=>p[b*9+a]||void 0,props:q.concat(ex||[])})}},
E=(e,ms,ex)=>{ey=e;S(ms,ex)};
// Charge up, pop.
S(R(300,500));E("c",110);E(0,250);E("l",250);E("r",250);
ey="c";of=1;
for(k=0;k<10;k++){for(j=k<8&&2;j--;){var L=R(4,6),a=Z()*6.3,d=R(6,11),u=M.cos(a)*d,v=M.sin(a)*d/2.5;U.push([x+4+u,G+1+v,-u/L,-v/L,L,"·*✦",Y,0])}S(70)}
of=-1;ar="u";ey=0;fl=TX;B(x+4,G,10,0,0,10);S(60);fl=0;S(90);of=0;S(120);
// Beam sweeps chrome on; eyes follow.
for(k=0;k<10;k++){sw=bm=k;for(i=0;i<27;i++)if(i%9<k)mk[i]=1;B(x+k,G-1,1,"✦·",CY,4,.1);E(k<3?"l":k>5?"r":0,k?75:150)}
sw=-9;bm=-1;ar=0;S(200);E("l",400);E("r",400);ey=0;
for(sh=-1;sh<12;sh++)S(35);sh=-9;E("w",450,[T(x+9,G-1,"✧",TX)]);
// Antenna boing.
ey="c";an=1;S(90);an=2;S(80);[3,4,3,4,2].map(a=>{an=a;S(60)});E(0,350);
// BEEP BOOP.
tx="BEEP";al=RD;ar=1;J(x+9,G);E("l",450);tx+=" BOOP";al=GN;ar="u";J(x-1,G);E("r",550);tx="";al=ar=0;E(0,250);
// Robot dance: snap, freeze.
pk(["1+u+d-l-ru","lr++1u--d1","u+d+1-r-ld"]).split("").map(m=>{
 if(m<"0"){ft="right";S(60);x+=m<","||-1;ft=0;B(x+4,G+2,2,"·",GY,4,0,K);S(R(160,260));return}
 var w=/[lr]/.test(m);w?ey=m:(ar=m,m>"d"&&J(x-1,G),m!="d"&&J(x+9,G));
 dx=w||-1;S(40);dx=0;S(R(180,320))});
ey=ar=0;S(200);
// Visor scan, then malfunction.
for(k=0;k<16;k++){vs=5-M.abs(5-k%10);S(55)}
for(k=0;k<28;k++){var e=k/28;gl=.1+.6*e;dx=Z()<.3+.5*e?R(-1,1):0;vs=k<10?R(0,5):-1;
 Z()<e&&(ar=pk("du1"));ey=pk("olrc");an=R(2,4);al=pk([RD,Y,GN,0]);
 tx=["BEEP?","B-B-BEEP","BOOP BZZT","ERR!!"][k/7|0];tc=pk([CY,RD,Y]);
 Z()<.5+e/2&&J(x+4+dx,G-2);k>14&&Sm(x+5+dx);S(R(35,80))}
// ZAP, droop, smoke.
dx=gl=0;vs=-1;tx="";ey="c";ar="u";of=-1;fl=TX;B(x+4,G-2,14,0,0,12,.1);S(70);fl=Y;S(50);fl=of=0;
an=5;ar=0;for(k=0;k<9;k++){k%3||Sm(x+6);S(90)}
E(0,350);E("c",120);E(0,300);
// Shake off chrome; antenna flies.
an=0;U.push([x+5,G-2,pk([-.8,.8]),-1,14,"●●●●●●●●●●●●*·",GY,.2]);
for(k=0;k<16;k++){dx=k%2||-1;ey=k&2?0:"c";
 for(j=0;j<27;j++)if(mk[j]&&Z()<.1+k/40){mk[j]=0;B(x+dx+j%9,G+(j/9|0),1,"▝▘·",MT[1],7,.25,K)}S(40)}
mk=[];dx=ey=0;S(60);
// Orange again; one stray beep.
S(300);E("l",300);E("r",300);E(0,200);
tx="beep";tc=GY;of=-1;fl=MT[1];E("c",90);fl=of=0;S(450);tx="";E(0,250);E("w",600);E(0,300);
return f});
