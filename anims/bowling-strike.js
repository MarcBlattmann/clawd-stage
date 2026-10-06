// Pins drop onto the lane, Clawd aims, swings and rolls a spinning ball: pins scatter everywhere, a giant "STRIKE!" and a happy dance.
$cdA("bowling-strike",{title:"Strike!",w:50},c=>{
var f=[],W=c.W,R=c.R,M=Math.round,rn=Math.random,r="right",U="one-up",w="warning",n="inactive",C="closed",i,k,q,v,G,L,DM,Z={z:-1},
x=c.clamp(c.x,3,W-44),Q=x+26+R(0,3),
bc=c.pick(["autoAccept","permission","success"]),st=[],fl=[],ly=[],cf=[],b=0,ty=0,tn=0,tc=0,sp=0,sx,
m={x,p:c.P(),o:0},
Y=(e,a,t)=>m.p=c.P(e,a,t),
T=(x,y,t,k,e)=>c.T(x,y,t,k||"text",e),
D=(x,s)=>T(x,6,s||"·  ·",n),
FN=[31183,29842,27565,29847,23469,31143,9346],
S=(ms,pr)=>{var a=[],k,j,q,s;
b&&a.push(T(b.x,b.y,"●",bc,{b:1,z:b.z}));
st.map(p=>a.push(T(p.x+(p.h|0),p.y,"▗▖"),T(p.x+(p.h>>1),p.y+1,"▐▌","error"),T(p.x,p.y+2,"██")));
ly.map(p=>a.push(T(p.x,6,"▄▄▖",p.c,Z)));
fl.map(p=>a.push(T(M(p.x),M(p.y),"│/─\\"[p.a&3],p.a&4?"error":"text")));
sp-->0&&cf.push({x:R(sx,sx+26),y:-1,t:c.pick("*·•✦"),c:c.rainbow(R(0,9))});
cf=cf.filter(p=>(p.y+=.5)<7);cf.map(p=>a.push(T(p.x+(M(p.y)&1),M(p.y),p.t,p.c,Z)));
for(k=0;k<tn;k++)for(j=0;j<3;j++){for(s="",q=0;q<3;q++)s+=" ▀▄█"[(FN[k]>>14-6*j-q&1)+2*(j<2&&FN[k]>>11-6*j-q&1)];a.push(T(sx+4*k,ty+j,s,c.rainbow(tc-k),{b:1}))}tc++;
f.push({x:m.x,pose:m.p,offset:m.o,ms,props:a.concat(pr||[])})};
f=f.concat(c.walk(c.x,x));
Y(r);for(k=0;k<4;k++)st.push({x:Q+3*k,y:-3-2*k});
for(i=0;i<14;i++){q=[];st.map(p=>p.y<4&&++p.y>3&&q.push(D(p.x-1)));S(i<13?55:250,q)}
Y("wink");S(350);
Y(0,U);S(200);
for(k=-1;k<4;k++)b={x:x+8,y:k},S(50);
m.o=1;Y(C,U);b.y=4;S(90);
m.o=0;b.y=3;Y("wink",U);S(150,[T(x+9,2,"✦",w)]);S(250,[T(x+9,2,"·",w)]);
// aim, swing, release
Y(r);b={x:x+9,y:5};S(250);
for(k=1;k<=(Q-x-12)/2;k++)S(k>(Q-x-14)/2?500:30,[T(x+11,6,"· ".repeat(k),"subtle")]);
S(200);
[[8,6],[4,6],[0,6],[-1,5],[-2,4]].map((q,i)=>{b={x:x+q[0],y:q[1]};S(i>3?R(300,600):60)});
[[-1,5,0],[1,6,1],[5,6,1],[8,6,2,-1],[11,6,2]].map((q,i)=>{m.x=x+q[2];m.o=i>3|0;Y(r,i>3?U:0,i%2?"left":r);b={x:x+q[0],y:q[1],z:q[3]};S(i>3?150:45)});
v=R(35,50);
for(k=0;b.x<Q-1;k++){b.x++;k==4&&(m.o=0);Y(r,k<4||k>9?U:0,k>9?k&2?"left":r:0);
S(v,[T(b.x-1,6,"⠋⠙⠸⠴⠦⠇"[k%6],n,Z),T(b.x-5,6,"- -","subtle",Z)])}
// ten pins fly; he ducks when one comes close
G=rn()<.5;L=st[3];st=G?[L]:[];
for(k=0;k<10;k++)fl.push({x:Q+R(0,10),y:R(4,5),vx:rn()*3.6-1.2,vy:-.8-rn()*1.8,a:R(0,7)});
for(i=0;fl.length&&i<40||i<12;i++){
fl=fl.filter(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.4;p.a++;if(p.y>=6){p.y=6;if(p.bn)return ly.push({x:M(p.x),c:"text"}),0;p.bn=1;p.vy*=-.45;p.vx*=.6}return p.x>-3&&p.x<W+1});
k=fl.some(p=>p.x>m.x-2&&p.x<m.x+10&&p.y>2);
b&&++b.x>Q+12&&(b=0);
m.o=i==1?-1:k|0;Y(k?C:i<2?0:r,i<6?"up":0);
q=[];if(i<4)for(k=0;k<6;k++)q.push(T(Q+5+M(Math.cos(k)*i*2),5+M(Math.sin(k)*i),i<3?"✦":"·",w));
S(i<2?70:45,q)}
b=0;fl=[];
// one pin may stay up: a stomp shakes it over
if(G){Y(r);for(i=0;i<6;i++)L.h=i%2,S(R(150,300));
Y(C,"up");m.o=-1;S(160);m.o=0;Y(C);
for(k=m.x+9;k<L.x;k+=2)S(30,[T(k,6,"~",w),D(m.x,"·       ·")]);
Y(r);L.h=1;S(120);L.h=2;S(80);st=[];ly.push({x:L.x,c:"text"});Y();S(300,[D(L.x-1,"·   ·")])}
sx=c.clamp(M((m.x+Q+20)/2)-13,m.x+10,W-27);Y(0,"up");
for(tn=1;tn<8;tn++)m.o=-"00001210"[tn],S(70);tn=7;sp=30;
DM=[()=>[-1,-2,-1,0].map(o=>{m.o=o;Y(0,"up");S(80)}),
()=>{for(k=0;k<6;k++)Y(k%2?"wink":0,k%2?U:"up",k%2?"left":r),m.x+=k%2*2-1,S(130)},
()=>{"right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ").map(F=>{m.p={facing:F};S(45)});Y("wink","up");S(250)},
()=>{for(k=0;k<4;k++)Y(C,k%2?"up":0,k%2?r:"left"),m.o=-(k&1),S(150);m.o=0}];
for(i=0;i<4;i++)DM[i?R(0,3):0]();
Y("wink");sp=0;
for(;ty>-3;ty--)S(90);tn=0;
[n,"subtle"].map(k=>{ly.map(p=>p.c=k);S(200)});ly=[];
while(cf.length)S(50);
Y();S(300);
return f});
