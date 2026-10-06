// Podium rises; friends take 2nd/3rd, Clawd leaps onto 1st, gets a trophy; confetti, anthem, exit.
$cdA("trophy-podium",{title:"Podium",w:48},function(c){
var G=c.G,P=c.P,T=c.T,R=c.R,W=c.W,M=Math.round,i,j,lf="left",rt="right",U="up",O="one-up",Z="closed",dn="down",
p=c.clamp(c.x-28,9,c.mx-28),S=p+28,f=c.walk(c.x,S),q=p>30,
K={x:S,o:0,s:P(lf)},A={x:-19,o:0,c:c.pick(["permission","autoAccept"])},B={x:-9,o:0,c:c.pick(["success","error"])},sp=R(0,1),
Y="#ffcd3c",V="▜█▛",D="inactive",bb={b:1},L=[[p+9,Y,"#ffe896"],[p,"#afb9c8","#e1e6f0"],[p+18,"#c87841","#eba56e"]],
H=[0,0,0],cf=[],nt=[],w=0,mu=0,tr=0,n=0,
// tr: 1 trophy up, 2 hugged
F=(ms,e)=>{var r=[],k;n++;
for(k=w;k--;)cf.push([R(p-9,p+36),0,R(0,9)]);
mu&&n%2&&(k=c.pick([[A,-1],[B,9],[K,-1],[K,9]]),nt.push([k[0].x+k[1],G+k[0].o,(k[1]-4)/10,R(0,9)]));
cf=cf.filter(q=>q[1]<7);nt=nt.filter(q=>q[1]>=0);
cf.map(q=>{r.push(T(q[0],q[1]|0,"▘▝▗▖"[n+q[0]&3],c.rainbow(q[2]),{z:-1}));q[1]+=.7});
nt.map(q=>{r.push(T(M(q[0]),M(q[1]),"♪♫"[q[3]%2],c.rainbow(q[3])));q[1]-=.5;q[0]+=q[2]});
L.map((b,k)=>{for(var t=7-H[k],y=t;y<7;y++)r.push(T(b[0],y,"▐███████▌",y>t?b[1]:b[2]));H[k]&&r.push(T(b[0]+4,t+!k,k+1+"","#5a3c1e",{bg:k?b[2]:b[1],b:1}))});
tr&&r.push(T(K.x+11-4*tr,G+K.o+2*tr-3,V,Y,bb));tr==1&&n%3<1&&r.push(T(K.x+(n%2?6:10),G+K.o-1,"✦","text"));
f.push({x:K.x,offset:K.o,pose:K.s,ms,props:r.concat(e||[]),actors:[A,B].filter(a=>a.x>-9&&a.x<W).map(a=>({x:a.x,offset:a.o,pose:a.s,color:a.c}))})},
go=(m,s,ms)=>{for(var b=1;b;F(ms)){b=0;m.map(([a,t])=>{var d=t-a.x;a.s=d?(b=1,a.x+=c.clamp(d,-s,s),P(d>0?rt:lf,n%4<2?dn:O,n%2?lf:rt)):P()})}},
hp=(a,x,o,h,ps)=>{for(var x0=a.x,o0=a.o,i=0,t;i++<5;){t=i/5;a.x=M(x0+(x-x0)*t);a.o=M(o0+(o-o0)*t-h*4*t*(1-t));a.s=ps||P(x>x0?rt:lf,U);F(45)}
a.o++;a.s=P(Z,ps&&ps.arms);F(70);a.o--;a.s=ps||P();F(60)},
X=(o,ps,ms,e)=>{K.o=o;K.s=ps;F(ms,e)},ro=P(rt,O),
fp=(a,b)=>{A.s=a;B.s=b},bang=y=>[T(S+4,y,"!","error",bb)];
F(200);
for(i=4;i--;)F(70,[T(p+R(0,26),6,"~",D),T(S+4,3,"!","warning",bb)]);
[2,1,0].map(k=>{for(j=1;j<4-k;j++){H[k]=j;F(80,[T(L[k][0]+R(1,4),6-j,"·  °",D)])}F(k?150:60)});
X(-1,P(lf,U),120,[T(p+13,3,"✦",Y)]);X(0,P(lf),300,[T(p+13,3,"✧",Y)]);
// friends
go([[B,p-9],[A,p-19]],1+q,q?25:35);
hp(B,p,-2,2);hp(B,p+9,-3,1.5);
B.s=P(rt,U);F(300);
X(-1,P(lf,U),90,bang(2));X(0,P(lf),220,bang(3));
B.s=P(Z);F(200);hp(B,p+18,-1,2);
go([[A,p-9]],1,35);hp(A,p,-2,2);
for(i=4;i--;)fp(j=P(rt,i%2?O:dn),j),F(130);
// leap
fp(P(rt),P(Z));X(1,P(Z),300);B.o=0;
for(i=0;i<10;i++){K.x=S-1-2*i;K.o=-"2344444333"[i];i-8||(B.o=-1,B.s=P(lf));
j=i>2&&i<7;X(K.o,sp&&j?{facing:"right-55 back-105 back left-55".split(" ")[i-3]}:P(lf,U),j?60:45,[T(K.x+9,G+K.o+1,"≡ -",D)])}
X(-2,P(Z),90,[T(p+18,3,"·",D)]);
fp(P(rt,U),P(lf,U));X(-3,"arms-up",400);
// trophy
fp(P(rt),P(lf));X(-3,P(),300);
for(i=4;i--;)X(-3,P(i<2?rt:"open"),100,[T(p+17,0,"✧✦✧·"[i],Y)]);
for(i=3;i--;)X(-2,ro,140,[T(p+14,0,i%2?" ✧▜█▛·":"✧ ▜█▛ ·",Y,bb)]);
F(160,[T(p+16,1,"▜█▛✦",Y,bb)]);
tr=1;X(-3,P("wink",O),350,[T(p+14,0,"✦     ✦",Y)]);
w=3;
for(i=10;i--;){j=i%2;A.o=j-3;B.o=j-2;fp(P(rt,j?dn:U),P(lf,j?dn:U));X(j-3,P(j?Z:"wink",O),110)}
// anthem
w=mu=1;tr=2;A.o=-2;B.o=-1;fp(P(Z),P(Z));j=R(9,12);
for(i=j;i--;)X(-3,P(i&&i<3?"wink":Z),150);
mu=w=0;tr=1;fp(P(rt),P(lf));X(-3,P("open",O),400);
// exit
hp(A,p-9,0,2);hp(B,p+27,0,2);
for(i=4;i--;){j=i%2;fp(P(rt,j?O:dn),P(lf,j?dn:O));X(-3,P(j?lf:rt,O),150)}
go([[A,-9],[B,W]],2,25);
tr=2;hp(K,p+18,-1,2,P(rt));hp(K,p+27,0,2,P(rt));tr=1;
for(i=3;i--;){H=H.map(h=>h&&h-1);X(0,P(lf,O),90,[T(p+R(0,26),6,"·",D)])}
X(0,ro,400,[T(p+35,2,"♥","error")]);tr=0;
for(i=3;i--;)X(0,P(rt,U),110,[T(p+34,i,V,Y,bb),T(p+35,i+1,"·",D)]);
for(i=3;i--;)F(130,[T(p+35,0,"·✧✦"[i],Y)]);
X(0,P("wink"),400);X(0,P(),200);
return f;
});
