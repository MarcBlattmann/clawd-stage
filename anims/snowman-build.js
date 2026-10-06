// Snow falls; Clawd rolls growing snowballs, stacks a snowman, adds coal eyes, carrot and sticks; a gust brings a hat, it winks back, the sun melts it.
$cdA("snowman-build",{title:"Snowman",w:48},c=>{
var M=Math,O=M.round,R=c.R,W=c.W,f=[],B=[],D=[],q=0,i,u,b,hx,Y="chromeYellow",I="inactive",rt="right",H="▄███▄",HU="▀███▀",A="one-up",
S=c.clamp(c.x+27+R(-2,2),30,W-7),st=M.max(1,O((W-S)/18)),m={x:c.x,p:c.P()},
CO="#5f5f73",BR="#a57046",OR="#ff8728",HC=c.hsv(R(0,359),.6,.9),
K=(a,g,b)=>c.rgb(a*(1-q*.45)|0,g*(1-q*.25)|0,b),
F=i=>i%2?"left":rt,
T=(x,y,t,k)=>({x,y,t,c:k||"text"}),
pb=(a,b,u,k)=>O(a+(b-a)*u-k*M.sin(M.PI*u)),
// balls: half-row pixel ellipses, shaded, speck while rolling; q = melt
rd=()=>{var g={},o=[],x,y,a,s=1+q/2,z=1-q;
B.map(b=>{var rx=b.w*s/2,ry=M.max(1,b.h*z)/2,cx=S+(b.x-S)*s,yb=O(13-(13-b.y)*z),cy=yb-ry+.5,
k=b.a&&O(cx+rx*.5*M.sin(b.a))+W*O(cy-ry*.5*M.cos(b.a));
for(y=M.ceil(cy-ry);y<=yb;y++)for(x=M.ceil(cx-rx);x<=cx+rx;x++){var U=(x-cx)/rx,V=(y-cy)/ry;
if(U*U+V*V<=1)g[x+W*y]=U+V>.8||k==x+W*y?K(150,172,215):K(235,242,255)}});
for(y=0;y<7;y++)for(a=0,x=S-22;x<S+10;x++){var t=g[x+2*y*W],d=g[x+(2*y+1)*W],h=t||d,bg=t&&d!=t?d:void 0,ch=t?t==d?"█":"▀":"▄";
if(!h)a=0;else if(a&&a.c==h&&a.bg==bg)a.t+=ch;else o.push(a={x,y,t:ch,c:h,bg})}
D.map(d=>{x=d.t[1]?d.x:S+O((d.x-S)*s);y=O(6-(6-d.y)*z);o.push({x,y,t:d.t,c:d.c,bg:g[x+2*y*W]})});
return o},
E=(ms,p,e,a,o,t)=>{if(e)m.p=c.P(e,a,t);f.push({x:m.x,pose:m.p,offset:o|0,ms,props:rd().concat(p||[])})},
go=(t,ms,e)=>{for(var d=t>m.x?1:-1;m.x!=t;)m.x+=d,E(ms,0,e||(d>0?rt:"left"),"down",0,F(m.x));m.p=c.P(rt)},
roll=(n,w)=>{B.push(b={x:m.x+9,y:13,w:1,h:1,a:.1});E(180,[T(m.x+10,5,"*",I)],"closed",0,1);E(90,0,rt);
for(i=1;i<=n;i++)m.x++,b.w=1+O((w-1)*i/n),b.h=M.min(4,M.ceil(b.w*.7)),b.x=m.x+9+(b.w-1)/2,b.a+=2/b.w,E(40+b.w*7,i%2&&[T(m.x-1,6,"·",I)],rt,"down",0,F(i));
b.a=0},
// lift onto the stack
arc=(ty,pk,os)=>{var x0=b.x,n=S-x0,y,k;E(250,0,"closed",0,1);
for(i=1;i<=n;i++)b.x=x0+i,b.y=M.max(b.h-1,pb(13,ty,i/n,pk)),E(40+i*3,0,rt,"up",-os[i-1]);
y=b.y>>1;k=(b.w>>1)+2;[1,-1,0].map((d,j)=>{b.x=S+d;E(j<2?70:200,j<2&&[T(S-k-j,y-j,"·"),T(S+k+j,y-j,"·")],"wink","up")})},
dig=(t,k)=>{for(i=0;i<3;i++)E(60+R(0,40),[T(m.x-1-i,4-i%2,"·"),T(m.x-i,5,"*",I)],"closed",0,1);E(250,[T(m.x+8,3,t,k),T(m.x+9,2,"✦",Y)],"open",A)},
fly=(t,k,x1,y1,pk,tw)=>{var x0=m.x+8,n=x1-x0;for(i=1;i<=n;i++)E(36,[T(x0+i,M.max(0,pb(3,y1,i/n,pk)),tw?"─\\│/"[i%4]:t,k)],rt,A);
D.push(T(x1,y1,t,k));E(120,[T(x1+1,y1-1,"✦",Y)],rt)},
sun=k=>[T(W-2,0,k%2?"☀":"☼",Y)],
X=()=>[T(m.x+4,2,"!","warning")];

// a flake lands on his head: idea
for(i=0;i<4;i++)E(i?110:250,[T(m.x+4,i,"❄")]);
E(250,[T(m.x+4,3,"·")],"closed");
u=[T(m.x+4,2,"!",Y)];E(150,u,"wink","up",-1);E(300,u);
// base, middle, head
go(S-27,45);roll(14,9);E(300,[T(S+3,4,"✦",Y)],"wink");
go(S-29,35);roll(9,7);arc(9,3,"111");
go(S-24,45);roll(6,5);arc(5,5,"12221");
go(S-13,50);
// coal eyes, carrot, sticks
dig("●",CO);fly("●",CO,S-1,1,2);E(160,[T(m.x+8,3,"●",CO)],"open",A);fly("●",CO,S+1,1,2);
dig("◀",OR);fly("◀",OR,S,2,2);
dig("\\",BR);D.push(T(S-5,2,"\\",BR),T(S-4,3,"\\",BR));E(130,[T(S-6,1,"·")],rt,A,-1);E(120);
fly("/",BR,S+5,2,4,1);D.push(T(S+4,3,"/",BR));
// a gust brings a hat
E(250,[T(m.x+4,2,"?",I)]);
for(hx=W;hx>S-2;)hx=M.max(S-2,hx-st),E(45,[T(hx,hx<S+6?0:hx>>1&1,hx>>1&1?H:HU,HC),T(hx+6,1,"~",I),T(hx+8,0,"~",I)]);
D.push(T(S-2,0,H,HC));
E(150,[T(S-3,0,"✦",Y),T(S+3,0,"✦",Y)],"wink","up",-1);E(250);
// it winks back
go(S-16,80,rt);E(250);
var eR=D[R(0,1)],aR=D[5];
eR.t="─";E(400);E(110,X(),"open",0,-1);E(250,X());
eR.t="●";E(300,0,"closed");E(220,0,rt);
eR.t="─";for(i=0;i<6;i++)aR.y=2+i%2,aR.t=i%2?"─":"/",E(140,i>1&&[T(S-7,3-(i>>1),"♥","error")],i>1?"wink":rt,i>1?"up":"down",-(i==3));
eR.t="●";aR.y=2;aR.t="/";E(250);
// the sun melts it, a gust takes the hat
var tm=f.reduce((s,r)=>s+r.ms,0);
E(250,sun(1));E(220,sun(0).concat(X()),"open");
for(i=1;i<=8;i++)q=i/8,E(130,sun(i).concat(i%3?[]:T(S+R(-4,4),6,"·","#8ab4f8")),i>3?"closed":rt);
E(350,sun(0));D.pop();
for(hx=S-2,i=0;hx<W||D[0];i++)hx+=st,B.map(b=>b.w*=.85),i%2&&D.shift(),E(55,sun(i>>2).concat(T(hx,M.max(1,6-i),i&2?H:HU,HC),T(hx-2,M.max(1,7-i),"~",I),T(S+R(-3,3),5-i%4,i%3?"~":"°",I)),rt,i>3?A:"down");
B=[];E(200,[T(W-2,0,"·",Y)],"open");E(450,0,"wink","up");
f.push({pose:"default",ms:250,props:[]});
// snowfall
var t=0,fl=[];for(i=0;i<W/6;i++)fl.push([R(0,W-2),R(0,3e3),R(160,320),c.pick("··*❄")]);
f.map(r=>{fl.map(s=>{var k=(t+s[1])/s[2]|0,y=k%9,st=(k-y)*s[2]-s[1];if(y<7&&st>=0&&st+7*s[2]<tm)r.props.unshift({x:s[0]+(k>>2)%2,y,t:s[3],c:"text",z:-1})});t+=r.ms});
return f});
