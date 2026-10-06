// DJ set: booth, headphones, rainbow EQ sky, scratching, build-up, THE DROP's bass shockwaves.
$cdA("dj-booth",{title:"DJ set",w:44},c=>{
var G=c.G,P=c.P,R=c.R,W=c.W,M=Math,Q="one-up",U="up",K="closed",H="right",N="wink",C="clawd_body",
x=c.clamp(c.x,W>83?68:7,c.mx-7),cx=x+4,mr=M.min(80,M.max(cx,W-cx)+3),f=c.walk(c.x,x,{ms:40}),
t=0,bs=2,bb=0,hy=-9,hw=0,la=0,ra=0,lv=0,rv=0,B=[],dk=2,hs=4,wv=[],ps=[],o=0,ln=0,pz=P(),cl=C,lc=0,i,j,k,n,d,
em=(a,b,s,k,u,v,n)=>ps.push({x:a,y:b,s,k,u,v,n}),
kick=(a,j)=>{for(j=0;j<W;j++)B[j]=M.max(B[j]||0,a>0?R(a>>1,a):-a)},
dust=()=>[-1,1].map(s=>em(cx+12*s,6,"░","inactive",s/2,0,3)),
note=()=>em(c.pick([x-5,x+13]),4,c.pick("♪♫"),c.rainbow(R(0,9)),R(-2,2)/10,-.3,12),
S=(ms,n)=>{for(n=n||1;n--;){t++;la+=lv;ra+=rv;
var p=[],y=5+bs-bb,r,s,j,k,u,d,T=(a,b,s,k,e)=>p.push(c.T(a,b,s,k,e)),Z={z:-1},bg={bg:"#423860",o:1},
g=a=>"|/-\\"[(M.floor(a)%4+4)%4],L=a=>lc?c.hsv(lc*40+a,.8,1):"subtle";
for(j in B)B[j]=M.max(0,B[j]-dk);
// EQ: 8 rainbow bands, gap over Clawd
for(r=0;r<4;r++){s="";for(j=0;j<W;j++){u=j%2||j>x-3&&j<x+11?0:(B[j]||0)-8*(3-r);s+=u<1?" ":u>7?"█":"▁▂▃▄▅▆▇"[u-1]}
for(k=0;k<8;k++){j=k*W>>3;u=s.slice(j,(k+1)*W>>3);u.trim()&&T(j,r,u,c.hsv(k*45+t*hs,.6,1),Z)}}
// rings bump the bars they pass
wv=wv.filter(d=>d<mr).map(d=>{k=c.hsv(190+d,.2+d/150,M.max(.45,1-d/100));s={z:-1,b:1};
for(r=0;r<7;r++){j=(6-r)*2;if(d>j){u=M.round(M.sqrt(d*d-j*j));T(cx-u,r,"(",k,s);T(cx+u,r,")",k,s)}}
for(j=-2;j<1;j++)B[cx+u+j]=B[cx-u-j]=26;return d+2});
ps=ps.filter(q=>(T(M.round(q.x),M.round(q.y),q.s,q.k,Z),q.x+=q.u,q.y+=q.v,--q.n>0&&q.y>-1&&q.y<7));
if(bs<2){T(x-7,y," ("+g(la)+") ¦ ","text",bg);T(x+9,y," ¦ ("+g(ra)+") ","text",bg);T(x-7,y+1,"         CLAWD         ","chromeYellow",bg);
for(j=0;j<3;j++)T(x-6+2*j,y+1,"•",L(j*50),bg),T(x+14-2*j,y+1,"•",L(j*50+180),bg)}
if(hy>-9){u=hw?G-1+o:hy;d=lc?L(0):"error";T(x+ln,u,"╭───────╮","#c8c8dc");T(x+ln,u+1,"▐       ▐",d)}
f.push({x:x+ln,pose:pz,offset:o,ms,props:p,color:cl})}};
// stomp, booth rises, headphones drop
pz=P(K);S(140);pz=P();S(200);o=1;S(120);o=0;
for(k=2;k--;){bs=k;dust();pz=P(K);S(110)}
pz=P("left");S(320);pz=P(H);S(320);pz=P();S(160);
for(hy=0;hy<G-1;hy++)S(80);
hw=1;pz=P(K);S(60);o=1;S(90);o=0;pz=P(N,Q);S(450);pz=P();S(150);
// groove: nod on the beat
lv=rv=.5;
for(k=0;k<4;k++)for(i=0;i<10;i++){
if(!i){kick(10+k*3);o=1;lc=k+1;pz=P(K,k%2&&Q);note()}
if(i==2){o=0;pz=P(k%2&&N,k%2&&Q)}
if(i==5)kick(6+k*2),note();
S(45)}
// scratch the right deck
pz=P(H);S(260);
for(k=0,n=R(10,14);k<n;k++){d=k%2;rv=d?-1.5:1.5;ln=d;pz=P(k%4==3?N:H,!d&&Q);
kick(R(4,14));d&&em(x+13,4,c.pick(["wik","ka","zk","wub"]),c.rainbow(k),.4,-.4,5);S(R(60,110))}
rv=.5;ln=0;pz=P();S(200);
// build-up: faster hits, crouch
for(k=0;k<16;k++){n=8>>(k>>2);dk=1;hs=4+k*2;lv=rv=.5+k*.06;kick(-6-k);lc=k;
pz=P(k%2&&K,k<5?0:k<10?Q:U);o=+(k>9);ln=o&&k%2;
em(R(0,W-1),6,"·","text",0,-.5,9);
for(i=0;i<n;i++)S(42)}
// silence... wink
B=[];ps=[];lv=rv=ln=lc=hs=0;pz=P(K,U);S(400);pz=P(N,U);S(260);
// THE DROP: shockwave + hop every beat
dk=2;hs=12;lv=rv=1;
for(k=0,n=R(6,8);k<n;k++)for(i=0;i<12;i++){
if(!i){wv.push(13);kick(32);bb=1;o=k?-1:-2;lc=k*2+1;k||(cl="text");pz=P(k%2&&K,k%2?Q:U);
for(j=0;j<4;j++)em(cx+R(-14,14),R(0,3),c.pick("✦*•·♪♫"),c.rainbow(R(0,9)),R(-6,6)/10,R(-4,4)/10,R(4,8))}
if(i==2)bb=0,cl=C;
if(i==4||i==6)o=M.min(0,o+1);
if(i==7)kick(14);
S(30)}
// payoff: fist pumps, toss headphones, bow
lc=0;em(x+9,G-1,"♥","error",.2,-.3,9);
for(i=0;i<12;i++){lv=rv*=.8;pz=P(i<8&&N,i%4<2&&Q);o=i%4==1?-1:0;S(70)}
pz=P(0,U);S(180);
hw=0;for(hy=G-1;hy>-2;hy--)S(60);hy=-9;
pz=P();S(160);
for(bs=1;bs<3;bs++){dust();S(110)}
o=1;pz=P(K);S(240);o=0;pz=P(N);while(ps.length||wv.length||B.some(v=>v>0))S(60);
f.push({pose:"default",ms:300});return f});
