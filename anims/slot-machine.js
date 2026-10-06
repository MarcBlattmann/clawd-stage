// A slot machine rises, Clawd flips in a coin and hauls the lever: 7, 7... 7! JACKPOT, coins rain over him.
$cdA("slot-machine",{title:"Jackpot",w:40},function(c){
var R=c.R,P=c.P,T=c.T,Y="chromeYellow",E="error",I="inactive",N="warning",D="subtle",G="right",U="one-up",Q="closed",O="open",W="wink",rn=Math.random,Mr=Math.round,
x=c.clamp(c.x,Math.min(6,c.mx-14),c.mx-14),m=x+10,f=c.walk(c.x,x),t,k,i,o,d,e,po,ex,pr,
S="7♦♣★$♥♠",K=[E,"permission","success",Y,"success","autoAccept","text"],
A=[[],[],[]],s=[R(9,12)],ps=[2,2,2],Z="═".repeat(11),V="║   │   │   ║",co=[],h={};
s[1]=s[0]+R(4,6);s[2]=s[1]+R(6,8);
// reel strips: a 7 only at each stop
for(i=0;i<3;i++){for(k=0;k<40;k++)A[i].push(R(1,6));A[i][s[i]+2]=0}
// machine+lever: y sunk, on 0 off/1 lit/2 win, n knob row
function M(y,on,t,n){var i,k,v,q="",p=c.art(m,1+y,["╔"+Z+"╗",V,V,V,"║ ╰───────╯ ║","╚"+Z+"╝"],on>1?c.rainbow(t):on?E:D);
for(i=0;i<3;i++)for(k=-1;k<2;k++){v=A[i][ps[i]+k];p.push(T(m+2+4*i,3-k+y,S[v],!on?D:k?I:on>1?(t%2?Y:E):K[v],{b:!k}))}
for(i=0;i<9;i++)q+=(i+t)%3?"·":"●";
if(on)p.push(T(m+2,y,on>1?"★JACKPOT★":q,on>1&&t%2?E:Y,{b:1}));
if(on>1)p.push(T(m+3,5,"●●●●●●●",Y));
n=n||2;for(i=n;i<5;i++)p.push(T(m-1,i+y,i>n?"│":"●",i>n?I:E,{b:1}));
p.push(T(m-1,5+y,n>4?"●":"╞",n>4?E:I));return p}
function F(p,ms,a,o){f.push({pose:p,ms:ms,props:a,offset:o||0})}
// rise
for(k=6;k--;)F(P(k>2?O:G),70,M(k,0,0).concat(k?[T(m-2,6,"░",I),T(m+13,6,"▒░",I)]:[]));
F(P(G),300,M(0,0,0));F(P(W),250,M(0,0,0));
// coin in, lights on
[[8,3],[8,2],[9,1],[10,0],[11,0],[11,1]].forEach(function(q,j){F(P(G,j<2?U:"down"),j?70:350,M(0,0,0).concat(T(x+q[0],q[1],"●",Y,{b:1})))});
for(t=0;t<6;t++)F(P(t>3?W:G),t?110:160,M(0,t?1:0,t).concat(t?[]:T(m+1,0,"✦",Y)));
// lever steps: offset+2,eyes,arms,knob,ms/10 (sometimes a missed hop first)
("201230 300212"+(rn()<.5?" 10128 200210 201225 300216":"")+" 10226 011222 11139 21149 311518 20034 20026").split(" ")
.forEach(function(q,j){F(P([G,Q][q[1]],["down",U,"up"][q[2]],q[0]<2?"left":"both"),q.slice(4)*10,M(0,1,j,+q[3]),q[0]-2)});
// spin; the last reel crawls and teases
for(t=1;t<=s[2];t++){
for(i=0;i<3;i++)ps[i]=2+(t>s[i]+1?s[i]:t);
d=t-s[1]-2;o=0;ex=[];po=P(G,"down",t%4<2?"left":G);
if(t>s[0]&&t<s[0]+4)po=P(G,U);
if(t>s[1]&&t<s[1]+4){po=P(O,"up");o=-(t<s[1]+3);ex=[T(x+4,2+o,"!",Y,{b:1})]}
if(d>1)po=P(G);
e=s[2]-t;if(e<2){po=e?P(Q,"up"):P(O);o=e;ex=e?[]:[T(x+4,2,"!",Y,{b:1})]}
F(po,e<2?(e?R(650,900):450):d>0?50+d*d*14:50,M(0,1,t).concat(ex),o)}
// JACKPOT!
function sp(){for(var a=[],n=0,l;n<4;n++)l=R(0,1),a.push(T(l?R(x-3,x+9):R(m+13,m+16),R(0,l?1:4),c.pick("✦✧*·"),c.rainbow(R(0,9))));return a}
[-1,-2,-2,-1,0,-1,-1,0].forEach(function(o,t){F(P(t%2?W:O,"up"),90,M(0,2,t).concat(sp()),o)});
// coins pour over him, most bonk off his head
for(t=0;t<45&&(t<20||co.some(function(q){return!q.l}));t++){
o=-(t%4>1);pr=M(0,2,t);
if(t<20)for(k=R(1,2);k--;)co.push({x:m+R(0,1),y:0,u:-.4-rn()*.8,v:-rn()*.5});
co.forEach(function(q){var a,b;
if(!q.l){q.v=Math.min(q.v+.35,1);q.x+=q.u;q.y+=q.v;a=Mr(q.x);b=Mr(q.y);
if(!q.b&&a>=x&&a<=x+8&&b>=3+o)if(q.b=rn()<.6?1:2,q.b<2){q.v=-.9;q.y=2+o;q.u-=.3}
if(b>5){q.l=1;q.x=a;q.y=h[a]?5:6;h[a]=1;q.w=R(1,10)}}
pr.push(T(Mr(q.x),Mr(q.y),"●",q.l?N:t%2?Y:N,q.l||q.b<2?{z:-1}:{b:1}))});
F(P(t%6<3?Q:W,"up"),55,pr,o)}
// pile twinkles away, machine sinks
function pl(k){var a=[];co.forEach(function(q){if(k<=q.w+1)a.push(T(q.x,q.y,k<q.w?"●":k>q.w?"·":"✦",k<q.w?N:Y,{z:-1}))});return a}
[0,-1,0,-1,0].forEach(function(o,t){F(P(W,"up"),100,M(0,2,t).concat(pl(0)),o)});
[1,0].forEach(function(v){F(P(G),250,M(0,v,0).concat(pl(0)))});
for(k=1;k<13;k++)F(P(k<7?G:"left"),80,(k<7?M(k,0,0):[]).concat(pl(k)));
F(P(W),300,[]);f.push({pose:"default"});return f});
