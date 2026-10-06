// A ball drops in, Clawd juggles, a goal rises; he dribbles, winds up and curls it in, the net bulges, GOAL! flashes and he knee-slides.
$cdA("soccer-goal",{title:"Soccer goal",w:50},c=>{
var f=[],R=c.R,P=c.P,W=c.W,M=Math,
D=R(9,13),F=R(12,17),x0=c.clamp(c.x,0,W-18-D-F),gx=x0+9+D+F,tx=gx-23,
x=x0,p=P(),o=0,bx=-9,by=6,L=5,B=0,ty=R(3,5),g=0,gk,wv=0,t,k,b0,N,h,q,tr,ft,
GL=["▄▀▀▀ ▄▀▀▄ ▄▀▀▄ █    █","█ ▄▄ █  █ █▄▄█ █    █","▀▄▄█ ▀▄▄▀ █  █ █▄▄▄ ▄"],
T=(x,y,t,c,b)=>({x,y,t,c:c||"text",b}),
Pr=(e,a,t)=>p=P(e,a,t),
st=()=>Pr("right","down",x%2?"left":"right"),
S=(ms,q=[])=>{var r=q.concat(T(gx,2+L,"╔════╗","text",1)),y,e,j;
 for(y=3;y<7;y++){e=M.max(0,B-M.abs(y-ty));r.push(T(gx,y+L,"║","text",1),T(gx+1,y+L,"┼".repeat(4+e),e?"text":"inactive"),T(gx+5+e,y+L,"│","inactive"))}
 for(j=0;j<g;j++)GL.map((s,y)=>r.push(T(tx+5*j,y+wv*((j+f.length)%2),s.substr(5*j,4),gk||c.rainbow(j+f.length),1)));
 r.push(T(bx,by+L*(bx>gx),"●"));
 f.push({x,pose:p,offset:o,ms,props:r})};
f=c.walk(c.x,x0);
// ball falls from the sky and bounces at his feet
bx=x+9;
[0,1,2,3,4,5,6,5,4,4,5,6,5,6].map((y,i)=>{by=y;Pr(i<4?"open":"right");S(y>5?70:40,y>5?[T(bx-1,6,"· ·","subtle")]:[])});
Pr("wink");S(350,[T(x+4,3,"!","warning",1)]);
// keepy-ups
for(k=R(2,3);k--;)[5,4,3,3,4,5,6].map((y,i)=>{by=y;Pr(y<4?"open":"right","down",i<2?"left":"both");S(i==3?90:45)});
// the goal rises out of the ground
Pr("right");S(350,[T(gx,6,"·  ·  ·","inactive"),T(x+4,3,"?","warning",1)]);
for(;L;)L--,S(80,L?[T(gx-1,6,"·░▒▒▒▒░·","inactive")]:[]);
Pr("wink");S(450);
// dribble with little taps
for(t=0,k=0;x<x0+D;t++){
 if(t%2)x++,st();
 if(k)bx++,k--;else if(bx<=x+9)k=R(2,3),Pr("right","down","left");
 S(55,k?[T(bx-1,6,"·","subtle")]:[]);
}
// stop, aim, step back, crouch, run-up
Pr("right");S(400);Pr("open");S(250);Pr("right");S(300);Pr("closed");S(120);Pr("right");S(350);
for(k=2;k--;)x--,st(),S(160);
o=1;Pr("right");S(R(300,700));o=0;
while(x<bx-9)x++,st(),S(50,[T(x-2,5,"≡","subtle")]);
Pr("right","one-up","left");ft=T(x+7,6,"▝▀","clawd_body");S(80,[T(bx,5,"✦","warning"),ft]);
// curling shot
b0=bx;N=gx+3-b0;h=R(3,4);tr=[];
for(k=1;k<=N;k++){q=k/N;tr=[T(bx,by,"·","subtle")].concat(tr).slice(0,3);bx=b0+k;
 by=M.max(M.round(6+(ty-6)*q-h*6.75*q*(1-q)*(1-q)),bx<gx?0:3);
 if(k==3)Pr("right");S(k<N/2?25:35,k<3?tr.concat(ft):tr)}
// net bulges, ball drops inside
[1,2,2,1,0,1,0].map(b=>{B=b;bx=gx+4+b;S(50+b*40,b>1?[T(gx+7,ty-1,"*","warning"),T(gx+7,ty+1,"·","warning")]:[])});
while(by<6)by++,S(60);
Pr("open");S(R(250,450));
// GOAL! letters pop in while he hops
for(k=1;k<6;k++)g=k,o=-(k%2),Pr("open","up"),S(90);
// run and knee-slide toward the goal
var xs=gx-11,n,sp=l=>[0,1,2].map(i=>T(i&&l?R(x-3,x+10):R(gx-1,gx+8),i&&l?4:R(0,1),c.pick("*✦·+"),c.rainbow(R(0,6))));
o=0;for(k=3;k--;)x++,Pr("open","up",x%2?"left":"right"),S(45,[T(x-2,5,"≡","subtle")]);
o=1;Pr("closed","up");
for(n=xs-x,k=1;x<xs;k++)x++,S(25+100*(k/n)*(k/n)|0,[T(x-3,6,"·░▒","inactive"),T(x-2-R(0,2),5-R(0,1),c.pick(",'`"),"success")]);
wv=1;for(k=0;k<6;k++)Pr(k%2?"wink":"closed",k%2?"up":"one-up"),S(160,sp(1).concat(k<2?[T(x-2,6,k?"·":"░▒","inactive")]:[]));wv=0;
o=0;Pr("wink","up");S(150,sp());o=-1;S(110,sp());o=0;S(200,sp());
// fade the text, the goal sinks away with the ball
gk="inactive";S(250);gk="subtle";S(250);g=0;
Pr("right");S(350);
for(;L<5;)L++,S(80,[T(gx-1,6,"·      ·","inactive")]);
Pr("wink");S(400);
f.push({x,pose:"default",ms:300});
return f});
