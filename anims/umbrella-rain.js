// Rain soaks Clawd blue; he opens a striped umbrella, the cloud rains out, the sun dries him, he flings the umbrella away... plip.
$cdA("umbrella-rain", { title: "Rainy day", w: 50 }, function (c) {
var R=c.R,T=c.T,M=Math.random,mn=Math.min,mx=Math.max,i,k,P=[],N=[],X=[],RC="#78a5f0";
// stand where the cloud (x-5..x+21) and the rain on both sides of the umbrella stay on stage
var x=c.clamp(c.x,6,c.mx-13),m=x+8,f=c.walk(c.x,x),d=c.pick([-1,1]),L=["left","right"];
var E=L[+(d<0)],O=L[+(d>0)],sx=x+26<c.W?x+19:x-9,SE=L[+(sx>x)];
var cl=x-5-22*d,g=80,r=0,u=-1,ub=4,dn=0,s=0,w=0,z=0,j=0,pd=0,ph=M()*9,C="▗";
function B(i){return i%24>1&&Math.sin(i*.6+ph)+.6*Math.sin(i*1.4+ph*2)>-.2}
for(i=1;i<26;i++)C+=B(i)?B(i-1)?B(i+1)?"█":"▙":"▟":"▄";
C=[C+"▖","▝"+"▀".repeat(25)+"▘"];
var U="▄█▄,▝▛▘,▗▟█▙▖,▝▀▀▛▀▀▘,▗▄▟███▙▄▖,▝▀▀▀▀▛▀▀▀▀▘,▗▄▟███████▙▄▖,▝▀▀▀▀▀▀▛▀▀▀▀▀▀▘".split(",");
var ST=c.pick(["error text","chromeYellow rainbow_orange","autoAccept rainbow_violet","success rainbow_green"]).split(" ");
function D(a,b,t,e,v,l){N.push({x:a,y:b,t:t,d:e||0,v:v||1,c:l||RC});}
// one frame: sun, cloud, puddles, umbrella (shaft at column m, handle on row ub), particles, extras X
function F(e,ms,o,ft,a){
var p=[],wt=w,h=u>0?U[2*u-1].length>>1:-1,q=pd|0,pu="▂".repeat(q),um=m+j;
if(s)p.push(T(sx+2,1,"▐█▌",s<2?"#966e28":"chromeYellow"));
if(s>2)p=p.concat(c.art(sx,0,f.length/3&1?" \\   /\n\n /   \\":"   │\n─     ─\n   │","warning"));
if(g)p=p.concat(c.art(cl,0,C.map(function(t){return t.replace(/\S/g,function(h){return M()<z?" ":h;});}),c.rgb(g,g,g+12)));
if(q)p.push(T(x-q,6,pu,RC),T(x+9,6,pu,RC));
if(u>0)[0,1].forEach(function(y){
var t=U[2*u-2+y],b=t.length>>1;
for(k=-b;k<=b;k++)p.push(T(um+k,2+y,t[k+b],ST[(Math.abs(k)+1)/3&1]));
});
// closed: tip up "▲█▌" or planted tip down "╮█▼"; open: just the handle
if(u>=0)for(k=u?2:0;k<3;k++)p.push(T(um,ub-2+k,(dn?"╮█▼":"▲█▌")[k],k==2-2*dn?"inactive":ST[0]));
for(k=M()+r;k-->=1;)D(cl+R(1,25),2,"│");
if(r)pd=mn(4,pd+.08);
// drops end on the canopy (glint, spray off its tips), his head (soaks him) or the ground
P=P.concat(N,N=[]).filter(function(q){
var fl=q.v<0?2-!g:q.x>um-h-2&&q.x<=um+h?1:q.x>=x&&q.x<=x+8?3:6;
if(q.v>0?q.y<=fl:q.y>=fl)return p.push(T(q.x,q.y,q.t,q.c)),q.t=="│"&&q.y>2&&p.push(T(q.x,q.y-1,"│","#3b5a8f")),q.y+=q.v,q.x+=q.d,1;
if(q.v<0)return;
if(fl==3&&u<0)w=mn(1,w+.07);
if(fl>1)return!p.push(T(q.x-1,fl,fl>3?"·.·":"· ·",RC));
var t=U[2*u-2][q.x-um+(U[2*u-2].length>>1)];
t&&p.push(T(q.x,2,t,"#c8dcff"));
u>3&&M()<.4&&D(q.x<um?um-8:um+8,3,"·",q.x<um?-1:1);
});
p=p.concat(X);
f.push(Object.assign({x:x+j,pose:c.P(e,a||(u<0||dn?"down":"one-up"),ft),ms:ms,props:p},wt>.02&&{paint:function(cc,y){
var t=c.clamp(wt*1.6-y*.3,0,1);
return c.rgb(215-110*t,119+26*t,87+153*t);
}},o));
}
// a cloud drifts in, rumbles and flashes; one fat drop lands on his head
for(i=0;i<22;i++)cl+=d,g+=4,z=mx(0,1-i/12),F(i>6&&i<18?E:"open",70);
for(i=0;i<5;i++)g=i==3?240:160-12*i,cl+=i&1||-1,F(i==3?"closed":"open",i==3?80:160,i==3&&{color:"text"});
D(x+4,2,"│");
F("open",110);F("open",110);F("closed",100);F("closed",130,{offset:1});F("open",450);
// downpour: he shields his head, squints, gets soaked, shivers
for(i=0;i<34;i++)r=mn(3,r+.3),j=i>20&&i&1,F(i%7<5?"closed":"open",55,0,i>12?L[i&1]:"both",i<12&&"up");
// idea! umbrella out, fwump
j=0;X=[T(x+4,3,"!","warning",{b:1})];F("open",320);
u=0;F("right",200);X=[];
for(i=1;i<5;i++)u=i,F("closed",50);
for(i=0;i<25;i++)F("wink open left open right".split(" ")[i/5|0],65);
// it rains out, drifts off and falls apart; the sun comes out
for(i=0;i<16;i++)r=mx(0,r-.2),g+=3,F("open",70);
for(i=0;i<26;i++)cl+=d,z=mx(0,(i-15)/10),s=mn(3,mx(0,(i-7)/3|0)),F(i>11?SE:O,70);
g=0;
for(i=0;i<8;i++)F(i>4?"wink":SE,130);
// close, shake and plant the umbrella, steam dry while the puddles shrink
for(i=3;i>=0;i--)u=i,F("open",70);
for(i=0;i<4;i++)j=i&1,D(m+1+j,2+j,"·",1),F("closed",60);
j=0;ub=5;F("open",70,0,0,"down");
m=x+9;ub=6;dn=1;F("open",120);
for(i=0;i<14;i++)w=mx(0,w-.08),pd=mx(0,pd-.3),w&&M()<.7&&D(x+R(1,7),3,c.pick("~°~"),0,-1,"inactive"),F(i<9?"closed":"wink",100);
// crouch, hop and fling the umbrella spinning up and away
F("open",160,{offset:1});
[-1,-2,-2,-1,0,1,0].forEach(function(o,i){dn=i&1;ub=5-2*i;m=x+9+i;F(i<5?"open":"closed",i<6?70:120,{offset:o},0,"up");});
u=-1;
// sunny again... plip: one last drop
F("wink",300);D(x+4,0,"│");
for(i=0;i<4;i++)F("wink",60);
F("closed",100);F("closed",130,{offset:1});w=.4;F("open",600);
s=2;w=.2;F("open",200);s=1;w=.1;F("closed",260,0,0,"up");s=0;w=0;F("wink",400);
return f;
});
