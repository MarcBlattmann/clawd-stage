// A partner brings a rose; two Clawds waltz, turn, twirl, dip, bow, and part.
$cdA("waltz",{title:"Waltz",w:60},function(c){
var f=[],G=c.G,W=c.W,R=c.R,P=c.P,T=c.T,pk=c.pick,i,j,k,t,ps=[],rh=0,
pc=pk(["autoAccept","permission","success","#ff96c8"]),pi="#ff6e96",
Q=c.mx-12,n=W<100?2:3,d=c.x*2<Q?1:-1,D=6*n+7,
s=d>0?c.clamp(c.x,0,Q-D):c.clamp(c.x,D+2,Q),X=s,E=s+12,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
lr=i=>i%2?"left":"right",bl=(x,y)=>y==1&&(x==1||x==7)?pi:"clawd_body",ro=(x,y)=>[T(x,y,"✿","error")],
CR=P("right"),CH=P("right","one-up"),PL=P("left"),PH=P("left","up"),PO=P("left","one-up"),CL=P("closed"),WK=P("wink"),
// Clawd cx/co/cp, partner px/po/pp (px>=W: gone)
F=(cx,co,cp,px,po,pp,ms,pr,pa)=>{pr=pr||[];if(rh)pr.push(T(cx+5,G-1+co,rh,"error"));ps=ps.filter(p=>p[1]>=0);
f.push({x:cx,offset:co,pose:cp,ms:ms,paint:pa,props:pr.concat(ps.map(p=>T(p[0],p[1],p[2],p[3]))),actors:px<W?[{x:px,offset:po,pose:pp,color:pc}]:[]});
ps.forEach(p=>{p[1]--;p[0]+=p[4]})},
S=(cp,ms,pa)=>F(X,0,cp,W,0,0,ms,0,pa),N=(x,y,ch,col,vx)=>ps.push([x,y,ch,col,vx]),
note=()=>{var l=R(0,1);N(l?X-2:X+19,G-1,pk("♪♫"),c.rainbow(R(0,6)),l?-R(0,1):R(0,1))};
f=f.concat(c.walk(c.x,s));
// partner strolls in with a rose
S(P(),250);
for(i=0,t=W;t>E;i++,t-=k?2:1){k=t-E>16;F(s,0,t<W-4?CR:P(),t,0,P("left","one-up",lr(i)),k?20:40,ro(t+8,G-1))}
F(s,-1,CR,E,0,PO,120,ro(E+8,G-1).concat(T(s+4,G-3,"!","warning",{b:1})));
F(s,0,CR,E,0,PO,300,ro(E+8,G-1));
// bow; the rose arcs onto Clawd's head
F(s,0,CR,E,1,P("closed","one-up"),500,ro(E+8,G));
F(s,0,CR,E,0,P("wink","one-up"),250,ro(E+8,G-1));
for(i=1;i<10;i++){t=i/9;F(s,0,i<5?CR:P(i<8?"open":"closed"),E,0,i<3?PO:PL,55,
ro(E+8-Math.round(15*t),G-1-Math.round(3*Math.sin(3.14*t))))}
rh="✿";F(s,1,CL,E,0,PL,80);
N(s+3,G-2,"♥",pi,0);
for(i=0;i<4;i++)F(s,i==2?1:0,P(i<2?"closed":"wink"),E,0,PL,i==2?90:220,0,bl);
// hands join
for(i=0;i<3;i++)F(s,0,i>1?CH:CR,E-i-1,0,P("left","up",lr(i)),110,0,bl);
F(X,0,CH,X+9,0,PH,300,[T(X+8,G-1,"✦","chromeYellow")]);
// 1-2-3: down, rise, rise, travelling; a turning bar between
var bar=()=>{for(k=0;k<3;k++){X+=d;if(!k)note();
F(X,k?-1:0,P(R(0,6)?"right":"wink","one-up",["both","left","right"][k]),X+9,k?-1:0,P("left","up",["both","right","left"][k]),k?160:280)}};
for(j=0;j<n;j++)bar();
for(i=0;i<14;i++){if(i%2)X+=d;if(i%5==0)note();k=i<13&&{facing:FC[i]};
F(X,0,k||CH,X+9,0,k||PH,80,[T(d>0?X-1:X+18,G+1,"~","inactive")])}
for(j=0;j<n;j++)bar();
// lifted spin, speeding up
F(X,1,CH,X+9,0,PH,220);
for(j=R(1,2);j>=0;j--)for(i=0;i<13;i++){if(i%3==0)N(X+R(0,8),G-2,pk("✦*·"),c.rainbow(R(0,6)),R(-1,1));
F(X,-1,{facing:FC[i]},X+9,0,PH,40+j*14,[T(X+2+i%2,G-3,"~ ~ ~","inactive")])}
F(X,0,P("closed","one-up"),X+9,0,P("open","up"),90);
F(X,1,P("closed","one-up"),X+9,0,P("open","up"),70);
F(X,0,P("wink","one-up"),X+9,0,PH,300);
// the dip, hearts burst
F(X-1,1,P("closed","up"),X+8,0,PL,140);
for(i=0;i<7;i++){if(i<4)N(X+7,G-1,"♥",i%2?pi:"error",i%2?1:-1);
F(X-1,1,P(i<4?"closed":"wink","up"),X+8,0,i<4?PL:CL,130)}
F(X,0,CH,X+9,0,PH,250);
// let go and bow
X--;F(X,0,CR,X+11,0,PL,300);
F(X,1,CL,X+11,1,CL,550);
F(X,0,WK,X+11,0,WK,400,0,bl);
// partner leaves, looks back, blows a kiss
for(i=0,t=X+11;t<W;i++,t+=k?2:1){k=t>X+24;
if(i==6){F(X,0,CR,t,0,PO,300);
for(j=t;j>X+6;j-=2)F(X,0,CR,t,0,P("wink","one-up"),45,[T(j,G-1,"♥",pi)]);
N(X+3,G-2,"♥",pi,0);F(X,-1,WK,t,0,PL,150,0,bl);F(X,0,WK,t,0,PL,250,0,bl)}
F(X,0,P("right",i>>2&1?"one-up":"down"),t,0,P("right","down",lr(i)),k?24:40)}
// dreamy sigh; petals drift off
S(CR,400);N(X+3,G-2,"♥",pi,0);rh="❀";
S(CL,350,bl);rh=0;
for(i=0;i<3;i++)N(X+4+i,G-1-i%2,"·","error",1);
for(i=0;i<4;i++)S(CL,110,bl);
S(WK,350);S(P(),200);
return f;
});
