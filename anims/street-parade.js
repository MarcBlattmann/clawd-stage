// City street parade: it halts under Clawd's balcony, he leaps down, catches the baton and leads it off.
$cdA("street-parade", { scene: 1, title: "Parade", w: 70 }, function (c) {
var f=[],W=c.W,M=Math,R=c.rng(c.R(1,1e6)),Q=c.T,Z=c.P,T=0,DN=1e9,C0=1e9,C1=1e9,i,j,w,
cl=v=>v<0?0:v>1?1:v,rd=M.round,rb=c.rainbow,
N=v=>(v=M.sin(v*127.1)*43758.5)-M.floor(v),
x0=c.clamp(c.x,20,c.mx-30),B=[],S=[],U=[],L=0,Y="chromeYellow",X="text",O="one-up",
sp=(a,n)=>a+" ".repeat(n)+a,E=(x,y,t)=>Q(x,y,t,"warning",{b:1}),
mk=(x,w,h,dr)=>{var b={x,w,h,c:c.hsv(R()*360,.35,.36),d:dr?0:R()*500,r:[]},p=R()*3|0,y,m,t;
for(y=0;y<h*2;y++){for(t="",m=0;m<w;m++)t+=m&&m<w-1&&(p?m%3!=p:m%2)&&!(dr&&m>1&&m<11)&&R()>.3?"■":" ";b.r.push(t)}B.push(b)},
bld=(a,b)=>{for(i=a;i<b-2;i+=w+(R()*2|0))mk(i,w=M.min(8+(R()*10|0),b-i),1+(R()<.5)+(R()<.2))};
bld(-(R()*4|0),x0-2);bld(x0+11,W);mk(x0-2,13,3,1);
for(i=1;i<W;i+=w+2)S.push({x:i,n:w=M.min(8+(R()*8|0),W-i),c:rb(S.length*2),d:i/W*600});
for(i=0;L<M.max(60,W*.5)||i<5;i++){var k=i?i%4>2?3:c.pick([0,1,1,2]):0;if(i)L+=k>2?20:12;
U.push({k,o:L,c:rb(c.R(0,9)),d:c.hsv(c.R(0,359),.5,.7),b:rb(c.R(0,9)),f:c.R(0,1),ph:M.random()})}
var bat=(x,y,k)=>(k&=3,[Q(x,y-1,"│╱─╲"[k],X),Q(x+(k>0),y-[2,2,1,0][k],"●",Y)]),
scene=()=>{var A=[],q=(x,y,t,cc,g)=>y<4&&A.push({x,y,t,c:cc,bg:g,o:g,z:-1});
B.forEach((b,n)=>{var k=M.ceil(4*M.max(1-cl((T-b.d)/350),cl((T-DN-b.d)/350))),y;
for(y=0;y<b.h;y++)q(b.x,3-y+k,b.r[y*2+(N(n+y+((T+b.d*7)/1900|0))<.5)],"#ffd27a",b.c);
q(b.x,3-b.h+k,"▄".repeat(b.w),b.c)});
T>350&&T<DN&&q(x0-1,3,"▀".repeat(11),"inactive");
S.forEach((g,n)=>{var p=(T/400+n)&1;T>600+g.d&&T<DN+g.d&&q(g.x,0,"▼▽".repeat(9).slice(p,g.n+p),g.c)});
return A},
cx=c.x,co=0,P=-12,s=0,mus=1,LB=0,CB=-1,st=W>100?2:1,
add=(pose,ms,ex)=>{var A=scene(),C=[],m,p,q,a,n,y;
U.forEach((u,n)=>{var x=P-u.o,b=s&1,y,a,h=!n&&LB;
if(x<-18||x>W)return;
if(u.k>2){A.push({x,y:5,t:" ✿ ★".repeat(4)+" ",c:X,bg:u.d,o:1},Q(x+2,6,sp(b?"✚":"✕",11),"inactive"),Q(x+1,2,sp("●",13),u.b));
for(y=3;y<5;y++)A.push(Q(x+1,y,sp("│",13),"subtle"));
C.push({x:x+4,offset:-2,color:u.c,pose:Z(s%8<2?"wink":"open",s>>2&1?"up":O)});return}
C.push({x,color:u.c,pose:Z("right",h?LB>1||b?O:"up":u.k||b?O:"down",h?"both":b?"left":"right")});
if(!u.k)A.push(Q(x+9,5,"▐█▌","error"));
if(h)LB>1&&(A=A.concat(bat(x+8,4,0)));
else if(!u.k)A.push(b?Q(x+9,4,"╲",X):Q(x+10,4,"*",Y));
else if(u.k<2){A.push(Q(x+9,4,"═◀",Y));if(mus)for(y=0;y<2;y++){a=(T/1100+u.ph+y/2)%1;A.push(Q(x+11+(a*3|0),3-(a*4|0),y?"♫":"♪",X))}}
else{y=1+((s>>2)+u.f)%2;A.push(Q(x+8,y,"●",u.b));for(;++y<4;)A.push(Q(x+8,y,"│","subtle"))}});
for(m=0;m<W/12;m++){p=1e3+N(m)*800;q=T+N(m+.3)*p;a=q%p;n=q/p|0;y=a*7/p|0;
T-a>C0&&T-a<C1&&A.push(Q(N(m*3.1+n*.7)*W+(y>>1&1)|0,y,"▘▝▖▗•"[(m+n)%5],rb(m+n)))}
CB<0||(A=A.concat(bat(cx+8,4+co,CB)));
f.push({x:cx,offset:co,pose,ms,props:A.concat(ex||[]),actors:C});T+=ms},
wk=(a,b,o)=>c.walk(a,b,o).forEach(r=>{cx=r.x;add(r.pose,r.ms||60)});
wk(c.x,x0);
while(T<900)add(Z(),100);
add("look-left",300,[Q(1,4,"♪",X),Q(3,2,"♫",X)]);
add(Z("left"),250,[E(x0+4,3,"!")]);
[1,-2,-4,-5,-4].forEach(o=>{co=o;add(Z(o>0?"closed":"open",o>0?"down":"up"),o>0?140:60)});
C0=T+300;
while(P<x0-1){P=M.min(P+st,x0-1);s++;add(Z(s%20<3?"wink":"left",s>>2&1?"up":O),55)}
for(j=0;j<4;j++){s++;add(Z("open","up"),130)}
mus=0;LB=1;
for(j=0;j<4;j++){s++;add(Z(j>1?"wink":"open"),150,[E(x0+10,0,"!")])}
co=-3;add(Z("closed"),120);
[-5,-4,-3,-2,-1,0].forEach(o=>{cx+=2;co=o;add(Z("right","up"),60)});
co=1;add(Z("closed"),90);co=0;LB=2;add(Z("left"),300);LB=0;
for(j=0;j<9;j++){var t=j/8;add(Z("left",j>6?O:"down"),70,bat(rd(c.lerp(x0+7,cx+8,t)),4-rd(M.sin(t*M.PI)*2.4),j))}
for(j=0;j<8;j++){CB=j;var bu=[E(cx+11,1,"HUP!")];for(i=0;i<8;i++)bu.push(Q(cx+4+rd(M.cos(i*.785)*j*1.6),3-rd(M.sin(i*.785)*j*.5),"*✦·"[i%3],rb(i)));add(Z(j&2?"wink":"open",O),70,bu)}
mus=1;
while(P-L<W){P+=st;s++;cx=M.min(cx+st,W);CB=s%8<4?s%4:0;add(Z(s%16<12?"right":"left",O,s&1?"left":"right"),55);P-L>W-50&&C1>T&&(C1=T)}
DN=T;CB=-1;
wk(W,c.mx-c.R(2,8),{turn:0});add(Z("right",O),350);
co=1;add(Z("closed"),250);co=0;add(Z("wink","up"),350);
while(T<DN+1000)add(Z(),100);
f.push({x:cx,pose:Z(),ms:200});
return f;
});
