// Clawd poses in a viewfinder; friends sneak in from both edges to photobomb him, flash after flash, until he chases them off edge to edge.
$cdA("photo-bomb",{title:"Photobomb",w:64},c=>{
var M=Math,rd=M.round,W=c.W,mx=c.mx,P=c.P,T=c.T,R=c.R,f,ps=[],gs=[],
Y="chromeYellow",S="subtle",X="text",E="error",H="#fff0dd",K="clawd_body",Lf="left",Rt="right",U="up",D="down",O="one-up",C="closed",B={b:1},Z={z:-1},
q=["permission","success"],x=c.clamp(c.x,rd(mx*.3),rd(mx*.7)),b0=x+10,fL,fR,fs=0,lab="",fl=0,i,k,a,b,u,
ft=i=>i%2?Lf:Rt,wk=(e,i)=>P(e,D,ft(i)),
ac=(x,o,p,s)=>({x:x,offset:o,pose:p,color:q[s]}),
pt=(...a)=>ps.push(a),
// F adds flash, viewfinder, label, photos and particles.
F=(p,ms,ac,pr,o,cl,j)=>{pr=[pr].flat(9).filter(Boolean);
 for(j=1;fl&&j<7;j++)pr.push(T(fL,j," ".repeat(fR-fL+1),X,{bg:fl>1?"#fff4d6":"#8c8474",o:1,z:-1}));
 fl&&fl--;
 fs&&pr.push(T(fL,1,"┌─",S,Z),T(fR-1,1,"─┐",S,Z),T(fL,6,"└─",S,Z),T(fR-1,6,"─┘",S,Z));
 lab&&pr.push(T(rd((fL+fR+1-lab.length)/2),1,lab,Y,B));
 gs.forEach(g=>pr.push(T(rd(g.x+(g.t-g.x)*(j=M.min(1,++g.k/9))),rd(3-3*j+g.y),g.m,g.c,Z)));
 ps=ps.filter(q=>(q[0]+=q[5]||0,q[1]+=q[6]||0,--q[4]>0&&pr.push(T(rd(q[0]),rd(q[1]),q[2],q[3],Z))));
 f.push({x:x,pose:p||P(),ms:ms||60,offset:o||0,actors:[ac].flat().filter(Boolean),props:pr,color:cl||K})},
fla=n=>{fl=2;lab="CLICK"+"!".repeat(n);for(k=0;k<5;k++)pt(R(fL+2,fR-2),R(1,3),"✦*✧·"[R(0,3)],Y,R(2,4))},
cd=(p,N,g,pr)=>{for(i=0;i<=N;i++)lab="- "+"321"[M.min(2,i*3/N|0)]+" -",F(p.call?p(i/N):p,40,g(i/N,i),pr())},
ph=(m,s,cl)=>gs.push({x:x+3,t:rd(W*([0,3,1,2][s]+.5)/4)-2,k:0,y:0,m:"[●"+m+"]",c:cl}),
// Friend s: 0 left, 1 right. A photo: sneak in, pop up, n flashes.
hm=s=>s?b0:x-9,
sn=(s,u,i)=>ac(rd(hm(s)+((s?W:-9)-hm(s))*(1-u)),s+1,wk(s?Lf:Rt,i),s),
gg=(s,h,k)=>s?ac(b0,-h,P("wink",U),1):ac(x-9,0,P(k%2?"open":"wink",O),0),
gp=(s,h)=>s?[T(b0-1,3-h,"✦",Y),T(b0+9,3-h,"✦",Y),h&&T(b0+2,1,"ta-da!",X)]:T(x-1,3,"╭────V",q[0],B),
sht=(ss,p,n,pr=()=>0,e)=>{e=p.call?p(1):p;cd(p,c.clamp(rd(M.max(...ss.map(s=>s?W-b0:x))/2.2),14,24),(u,i)=>ss.map(s=>sn(s,u,i)),pr);
 lab="";F(e,150,ss.map(s=>gg(s,0,1)),pr());F(e,250,ss.map(s=>gg(s,1,0)),[ss.map(s=>gp(s,1)),pr()]);
 for(b=0;b<n;b++)for(fla(b+1),k=0;k<4;k++)u=(k+b+1)%2,F(P([C,Lf,Rt][b],e.arms),k?70:50,ss.map(s=>gg(s,u,k)),[ss.map(s=>gp(s,u)),pr()],0,!k&&H);lab=""},
af=(s,t,cl)=>{for(i=1;i<14;i++)a=hm(s)+(s?3:-3)*i,u=i>8&&s,F(u?wk(C,i):P(s?Rt:Lf),i<9?50:120,a>-9&&a<W&&ac(a,1-s,wk(s?Rt:Lf,i),s),i>8&&T(x+3,2,t,cl,B),u&&i%2)},
tz=i=>ac(b,-((i>>1)%2),P(Lf,U),1),ny=()=>T(b+1,2,"nyah!",X);
R(0,1)&&q.reverse();
f=c.walk(c.x,x,{ms:40});
fs=1;for(i=0;i<=10;i++)u=1-(1-i/10)**2,fL=rd((x-11)*u),fR=rd(W-1-(W-20-x)*u),F(P(i<4?Lf:i<8?Rt:0),50);
// V-sign + bunny ears; wink + jazz hands; both, rapid fire.
sht([0],P("open",O),1,()=>T(x+8,3,"v",K,B));ph("V",0,q[0]);af(0," ?",X);
sht([1],P("wink"),1);ph("✦",1,q[1]);af(1,"#@!",E);
F(P(Lf),350);F(P(Rt),350);
sht([0,1],0,3);ph("!",2,E);
for(i=0;i<9;i++)pt(x+R(1,7),3,"░",S,4,0,-.5),F(wk(C,i),70,[ac(x-9,0,P(i<4?Rt:C),0),ac(b0,0,P(i<4?Lf:C),1)],[T(x+3,2,"!!!",E,B),i>4&&[T(x-5,3,"!",X,B),T(b0+4,3,"!",X,B)]],i%2,E);
// Chase left, then across the whole stage.
a=x-9;b=b0;
for(i=0;x>0;i++)x=M.max(0,x-2),a-=3,b=M.min(b+3,mx-2),k=b<mx-2,i%2&&pt(x+8,6,"°",S,3,.5),
 F(P(Lf,U,ft(i)),25,[a>-9&&ac(a,0,wk(Lf,i),0),k?ac(b,0,wk(Rt,i),1):tz(i)],[T(x+9,4,"≡",S),!k&&ny()]);
F(P(C,U),100,tz(0),[T(9,6,"°·",S),ny()]);
F(P(Rt),300,tz(2),[T(4,2,"!",E,B),ny()]);
for(i=0;x<mx;i++)x=M.min(mx,x+2),k=x>b-28,k&&(b+=3),i%2&&pt(x,6,"°",S,3,-.5),
 F(P(Rt,U,ft(i)),25,b<W&&(k?ac(b,0,wk(Rt,i),1):tz(i)),[T(x-1,4,"≡",S),k?b<W&&T(b+4,2,"!!",X,B):ny()]);
F(P(C,U),100,0,T(x-2,6,"·°",S));
for(i=0;i<5;i++)F(P(i%2?C:Lf,i%2?O:D),140,0,T(x-3,2,"hmph!",X));
// Pan over, a solo shot, wrap up.
a=fL;b=fR;k=x;
for(i=1;i<13;i++)u=i/12,x=k-i,fL=rd(a+(x-11-a)*u),fR=rd(b+(x+19-b)*u),F(wk(Lf,i),55);
sht([],u=>P(u<.3?Lf:u<.6?Rt:"wink",u<.6?D:U),1);ph("♥",3,E);
for(i=0;i<10;i++)F(P(0,U),80,0,i<7&&T(x+(i%2?-2:10),R(2,4),"✦",Y),-"0121001"[i]||0);
a=fL;b=fR;
for(i=1;i<18;i++)u=M.min(1,i/10),fL=rd(a-(a+3)*u),fR=rd(b+(W+2-b)*u),fs=u<1,gs.forEach((g,s)=>i>s*2&&(g.y+=.7)),gs=gs.filter(g=>g.y<6.5),F(P(i%6<3?Lf:Rt),60);
F(0,300);
return f});
