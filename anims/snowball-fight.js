// Snowball fight in falling snow: hits whiten faces, misses splat, a giant snowball chases the friend off.
$cdA("snowball-fight",{title:"Snowball fight",w:50},c=>{
var{min,max,abs,sin,cos,round:M}=Math,f=[],W=c.W,D=25,R=c.R,K=c.mx,C=c.clamp,O=Object.assign,mk=[],i,j,k,a=K-c.x,
// friend on the side with less (but enough) room; x is local, S() mirrors
d=(a<c.x)==(min(a,c.x)>D)?1:-1,
X=v=>d>0?v:K-v,
P=(e,a,t)=>c.P(e*d>0?"right":e*d<0?"left":e,a,t),
F=i=>i%2?"left":"right",
T=(x,y,t,o,z)=>({x,y,t,c:o||"text",z}),
Z=(q,k=q.w)=>({x:X(q.x),pose:q.p,offset:q.o,color:q.c,paint:k>0?(i,j)=>j||i<2||i>7?void 0:c.rgb(...q.C.map(v=>v+(255-v)*k)):void 0}),
m={x:X(c.x),p:P(),C:[215,119,87]},L=C(m.x,1,K-D-1),n={x:W,C:[87,105,247],c:"permission"},
S=(ms,pr=[])=>{var q=O(Z(m),{ms,props:mk.concat(pr).map(p=>d>0?p:O({},p,{x:W-p.x-p.t.length}))});if(n.x<W)q.actors=[Z(n)];f.push(q)},
B=(x,y,k)=>[0,1,2,3,4,5].map(a=>T(x+M(2*k*cos(a)),y+M(k*sin(a)),k?k>2?"·":"*":"✶")),
Y=(v,u)=>{
var A=v?n:m,V=v?m:n,s=v?-1:1,h=A.x+(v?1:8)-(d<0),g=A.x+4+5*s,o=[-2,7,-R(7,10)],z=R(2,3),k,q,y,e,px,py,qx,qy,tx,ty;
// crouch, scoop, lift to the hand, pack, wind up
A.p=P(s);A.o=1;S(140,[T(g,6,"°")]);A.p=P("closed");S(140,[T(g+s,5,"·"),T(g,6,"▄")]);
A.o=0;A.p=P(s);V.p=P(-s);S(110,[T(g,5,"•")]);A.p=P(s,"up");S(150,[T(h,3,"•")]);S(R(250,550),[T(h,3,"●")]);S(130,[T(h-s,2,"●")]);
// lunge, release, arc with a fading trail
A.x+=s;h+=s;S(40,[T(h,3,"●")]);A.p=P(s);qx=px=h;qy=py=3;tx=V.x+4+s*o[u];
if(tx<0|tx>=W)tx=V.x+4+s*o[u=2];
ty=u?6:4;e=abs(tx-h)-1;
for(k=0;k<=e;k++){q=k/e;y=M(c.lerp(3,ty,q)-4*z*q*(1-q));
if(u==1&&(V.o=C(20-e+k,0,2)))V.p=P("closed");
if(!u&&e-k<3)V.p=P("closed");
S(k<e?34:70,[T(qx,qy,"·","subtle"),T(qx=px,qy=py,"·","inactive"),T(px=h+s+s*k,py=y,"●")])}
if(u){for(k=0;k<4;)S(80,B(tx,6,k++));
if(tx>m.x)mk.push(T(tx-1,6,"▁▂▁","inactive",-1));
if(u<2){V.o=1;V.p=P(s);S(120);V.o=0;S(350)}
A.p=P("closed");V.p=P("wink","one-up");S(R(350,600))
}else{V.w=1;
for(k=0;k<4;k++){V.x+=k==1?s:k==3?-s:0;S(k?80:120,B(tx,ty,k))}
A.p=P("wink","up");A.o=-1;S(140);A.o=0;
for(k=4;k--;){V.w=k/4;V.p=P(k%2||-1);S(160)}}
A.x-=s;A.p=P(s);V.p=P(-s);S(200)};
[0,-1,1].map(e=>{m.p=P(e);S(380)});
for(i=0;i<4;)S(240,[T(m.x+3+i%2,i++,"❄")]);
m.p=P("closed");S(300,[T(m.x+4,3,"·")]);m.p=P("wink","up");m.o=-1;S(150);m.o=0;S(300);
for(j=L>m.x?1:-1;m.x!=L;){m.x+=j;m.p=P(j,"down",F(m.x));S(50)}
m.p=P(1);k=C(2400/(W-L-D)|0,22,50);
while(n.x>L+D){n.x=max(L+D,n.x-1-(n.x-L>70));n.p=P(-1,"down",F(n.x));S(k)}
n.p=P(-1);S(200,[T(n.x+9,6,"°")]);
for(i=0;i<4;i++){m.p=P(i%2||"wink",i%2?"down":"one-up");n.p=P(-1,i%2?"one-up":"down");S(170)}
for(j=R(2,3);j--;)Y((j+1)%2,j&&R(0,3)%3);
m.p=P("wink");S(500,[T(m.x+4,3,"!","warning")]);
m.p=P(1);m.o=1;S(160,[T(m.x+9,6,"°")]);S(160,[T(m.x+9,6,"●")]);m.o=0;
// the ball grows from a dot to a giant (with a rolling spot), Clawd lets go, it chases the friend off
var BL="●|▟█▙,▜█▛|▗███▖,█████,▝███▘|▗▄███▄▖,███████,▝▀███▀▘| ▗▄███▄▖ ,▐███████▌,▐███████▌, ▝▀███▀▘ ".split("|"),x=m.x+9;
for(i=0;x<W||n.x<W;i++,x++){
var bl=BL[min(4,i/3|0)].split(","),w=bl[0].length,h=bl.length,th=x/(w/2+.5),pr=c.art(x,7-h,bl);
if(h>1)pr.push(T(x+M((w-1)/2+(w-3)/2*sin(th)),7-h+M((h-1)/2*(1-cos(th))),"▒","inactive"));
mk=mk.filter(p=>p.x+2<x||p.x>x+w);
if(i<15){m.x=x-9;m.p=P(1,"down",F(i))}else{m.p=P("wink","up");m.o=-(i%4==1);pr.push(T(x-1-i%3,6-i%2,"·"))}
if(i==4)n.p=P(-1),pr.push(T(n.x+4,2,"!","warning"));n.o=-(i==4);
if(i>6){n.p=P(i%9<2?-1:1,"up",F(i));n.x=max(n.x+1,x+w+1)}
S(i<15?80:max(22,115-3*i),pr)}
// crash off the edge: burst plus chunks arcing back onto the stage
m.o=0;m.p=P("closed");
for(j=0;j<7;j++)S(70,(j<4?B(W-2,4,j):[]).concat([0,1,2].map(k=>T(W-2-(k+2)*j,M(4-(k+1)*j+.6*j*j),"❄*·"[k]))));
m.p=P(1);S(450);
// friend peeks back in, white with snow, shakes it off; both laugh
n.c="text";n.p=P(-1);for(n.x=W;n.x>W-5;S(70))n.x--;S(350);
for(k=0;k<4;k++){n.p=P(k%2||-1);S(130,[T(n.x+R(1,4),R(3,6),"·"),T(n.x+R(1,4),R(4,6),"·")])}
for(k=0;k<5;k++){n.p=P("closed","up");m.p=P("wink","up");m.o=n.o=-(k%2);S(k<4?190:300,k%2?[T(m.x+3,2,"ha"),T(n.x+1,2,"ha")]:[])}
for(n.p=P(1),m.p=P(1,"one-up");n.x<W;S(60))n.x++;
m.p=P();S(400);
var t=0,Tt=0,fl=[];f.map(q=>Tt+=q.ms);
for(i=0;i<W/7;i++)fl.push([R(0,W-2),R(0,3e3),R(250,420),c.pick("··*❄")]);
f.map(q=>{fl.map(s=>{var k=(t+s[1])/s[2]|0,y=k%9,st=(k-y)*s[2]-s[1];
if(y<7&&st>=0&&st+7*s[2]<Tt-700)q.props.unshift(T(s[0]+(k>>2)%2,y,s[3],"text",-1))});t+=q.ms});
return f});
