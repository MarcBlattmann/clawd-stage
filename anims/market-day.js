// Market day: striped stalls unroll across the stage, Clawd shops along the lane and his wobbly armful topples.
$cdA("market-day",{ scene: 1,title:"Market day",w:70},function(c){
var W=c.W,M=Math,P=c.P,R=c.rng(c.R(1,1e6)),f=[],T=0,EX=1e9,X=c.x,L=W+9,st=[],bk=[],S=[],fl=[],fx=[],amp=0,ph=0,ln=0,FC=0,PL="│           │",i,k,
Q=b=>b?"left":"right",Z=M.round,
rep=(p,n)=>p.repeat(n).slice(0,n),
K=[["Apples","●","#e63c37"],["Bread","▟█▙","#d7a05a"],["Roses","✿❀","#f078aa"],["Grapes","♣","#aa6ee1"],["Lemons","●","#fad746"],["Carrots","▼","#fa8c28"],["Cheese","◢█◣","#f5c850"]],
AW=["#c83732","#3c6ed2","#32965a","#9650b4","#e17d28"],
VC=["permission","success","autoAccept","#e682b4"],
n=(W-2)/17|0,sp=(W-2)/n,o=R()*7|0,
dy=x=>(x=x/W*700,-M.ceil(4*M.min(1,M.max(0,1-(T-x)/250,(T-EX-x)/250)))),
say=(s,q,d)=>{s.q=q;s.e=T+d},
sc=()=>{var A=[],d;
st.map(s=>{d=dy(s.x);d<-3||A.push(c.T(s.x,d,rep((T/350+s.h|0)%2?"▌":"▐",13),s.a,{bg:"#eee4cd",z:-1}),c.T(s.x+1,3+d,rep(s.k[1],11),s.k[2]),...c.art(s.x,1+d,[PL,PL],"#966e4b",{z:-1}))&&s.e>T&&A.push(c.T(s.x+(13-s.q.length>>1),d,s.q,"text",{b:1,bg:s.a}))});
bk.map(b=>dy(b[0])||A.push(c.T(b[0],5,rep(b[1][1],4),b[1][2],{z:-1}),c.T(b[0],6,"▙▄▄▟","#a0734b",{z:-1})));
return A},
fr=(p,ms,e=[],o=0)=>{
fl.map(q=>{var g=q.f||6;q.x+=q.vx;q.y+=q.vy+=.45;if(q.y>=g){q.y=g;q.vx*=.6;q.vy>1&&fx.push([q.x+1|0,g-1,R()<.5?"·":"*",3]);q.vy=q.vy>1?-q.vy*.35:0}});
fx=fx.filter(z=>z[3]-->0);
f.push({x:X,pose:p,ms,offset:o,hide:X<-6,props:sc().concat(
S.map((t,i)=>c.T(X+4-t[2]+Z((amp*M.sin(ph)+ln)*(i+1)*.6),3-i+o,t[0],t[1])),
fl.map(q=>c.T(Z(q.x),Z(q.y),q.t,FC||q.c)),fx.map(z=>c.T(z[0],z[1],z[2],"inactive")),e),
actors:st.map(s=>({x:s.x+2,offset:dy(s.x)-3,color:s.v,pose:P((T/90+s.h*7|0)%31?Q(X+4<s.x+6):"closed",s.e>T?"one-up":"down")}))});T+=ms},
arc=(x0,y0,x1,y1,n,t,col,p)=>{for(var j=1,q;j<=n;j++)q=j/n,fr(p,45,[c.T(Z(x0+(x1-x0)*q),M.max(0,Z(y0+(y1-y0)*q-8*q*(1-q))),t,col)])},
buy=(s,z)=>{var rt=s.p<s.x,e=Q(!rt),hx=rt?s.x+2:s.x+10,t=s.k[1],it=[t=t.length>2?t:rep(t,5),s.k[2],t.length>>1],A=S.length||!rt?"up":"one-up",m=S.length?"up":"down";
say(s,s.k[0]+"!",1600);
fr(P(e,m),300);fr(P("wink",m),150);
arc(X+(rt?8:0),4,hx,2,5,"$","chromeYellow",P(e,A));
say(s,z?"Last one!":"Thanks!",1100);fx.push([hx,1,"✦",3]);
fr(P(e,A),220);
arc(hx,1,X+4-it[2],3-S.length,7,t,it[1],P(e,"up"));
S.push(it);amp=1.6;fr(P("closed","up"),70,[],1);
for(k=0;k<7;k++)amp*=.72,ph+=1.3,fr(P(Q(k%2),"up"),80);
z||fr(P("wink","up"),250)};
for(i=0;i<n;i++)st.push({x:1+Z(i*sp+R()*(sp-14)),k:K[(i*3+o)%7],a:AW[(i+o)%5],v:VC[(i+o)%4],h:R()*9});
bk.push([1+R()*4|0,K[R()*7|0]]);
for(i=W>78?67+R()*5|0:W;i+5<W;i+=8+R()*12|0)bk.push([i,K[R()*7|0]]);
while(T<1300)fr(P(T<450?"left":T<850?"right":"wink",T<850?"down":"up"),T<850?150:110);
// One lap along the lane, wrapping at the edge, up to four stops.
var u=0,v=W>150?2:1,ms=c.clamp(4500*v/L|0,30,55),lu=-99,
cs=st.map(s=>(s.p=s.x>6?s.x-7:s.x+12,s.u=(s.p-c.x+L)%L,s)).sort((a,b)=>a.u-b.u).filter(s=>s.u-lu>9&&(lu=s.u,1)),
N=M.min(4,cs.length),SP=[...Array(N)].map((_,j)=>cs[Z(j*(cs.length-1)/(N-1||1))]);
SP.map((s,j)=>{
while(u<s.u){u=M.min(u+v,s.u);X=(c.x+9+u)%L-9;ph+=.6;amp=S.length*.2;
st.map(t=>(k=t.x+6-X)>4&&k<24&&!t.d&&(t.d=1,say(t,t==s?t.k[0]+"!":c.pick(["Fresh!","Psst!","Ripe!","Sale!","Hi!","Yum!"]),1200)));
fr(P("right",S.length?"up":"down",Q(f.length%2)),ms)}
buy(s,j==N-1)});
var s=SP[N-1],d=R()<.5?-1:1,de=Q(d<0);
say(s,"Whoa!",2500);
for(k=0;k<14;k++)amp=.5+k*.13,ph+=.85,k%3||(X=c.clamp(X+(M.sin(ph)>0?1:-1),0,c.mx)),fr(P(Q(k%2),"up",Q(k%2)),95-k*3);
for(k=1;k<4;k++)amp=0,ln=d*k*.7,fr(P(de,"up"),110,[c.T(X+(d>0?-1:9),3,"!","error",{b:1})]);
S.map((t,i)=>{var h=i>N-2;fl.push({x:X+4-t[2]+(h?0:Z(ln*(i+1)*.6)),y:3-i,vx:h?0:d*(.7+i*.4+R()*.4),vy:h?-1.6:-.3-R()*.6,f:h?3:6,t:t[0],c:t[1]})});S=[];ln=0;
for(k=0;k<16;k++)fr(P("closed",k<4?"up":"down"),55,[],k<4?1:0);
st.map(t=>M.abs(t.x-X)<36&&say(t,"Haha!",1300));
fr(P(de),400);fr(P(Q(d>0)),300);fr(P("closed"),350);fr(P("wink","up"),500);
for(k=0;k<6;k++)FC=k<3?"inactive":"subtle",fr(P(),80);
fl.map(q=>fx.push([Z(q.x)+1,Z(q.y),"·",3]));fl=[];
EX=T;while(T<EX+1000)fr(P(Q(T<EX+500)),100);
f.push({x:X,pose:"default",ms:200});
return f});
