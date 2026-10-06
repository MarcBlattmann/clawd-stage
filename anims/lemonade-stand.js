// Clawd runs a lemonade stand: a friend pays a coin, gulps, puckers and staggers off; Clawd counts his coin and sells out.
$cdA("lemonade-stand", { title: "Lemonade stand", w: 40 }, function (c) {
var R=c.R,T=c.T,P=c.P,K=c.pick,W=c.W,M=Math.round,
x=c.clamp(c.x,1,c.mx-15),f=c.walk(c.x,x),X=x+14,h="─".repeat(12),
O="open",E="right",L="left",C="closed",V="wink",U="one-up",D="up",Y="chromeYellow",Q="text",I="inactive",H="rainbow_yellow",lm="#cfe04a",wd="#b07a45",
fc=K(["permission","success","autoAccept"]),
tb=0,pl=0,sy=-9,sg=0,sk=Y,sw="LEMONADE",pt=0,cu=0,cx=x+11,cy=5,cg="▄",cc=I,co=0,F=W,fp,fk=fc,t=0,ps=[],i,j,k,s;
function r(a){return R(-a,a)/10}
function sp(u,v,h,k,l,s,o,g){ps.push([t,u,v,h,k,l,s,o,g||0])}
function S(z,s,o){return T(c.clamp((z?F:x)+4-(s.length>>1),0,W-s.length),3,s,o||(z?fk:"clawd_body"))}
function A(a,b,ms,e,o){
for(var m=-~(ms/120),d=M(ms/m),q,y;m--;t+=d){
q=[];
ps.forEach(function(s){var e=(t-s[0])/100,v=s[2]+M(e*s[4]+s[8]*e*e);e<s[5]&&v<7&&q.push(T(s[1]+M(e*s[3]),v,s[6][e|0]||s[6].slice(-1),s[7]))});
tb&&q.push(T(x-1,6,("▛"+"▀".repeat(12)+"▜").slice(0,tb),wd));
for(y=0;y<pl;y++)q.push(T(x-1,5-y,"│",wd));
q.push(T(x-1,sy,"╭"+h+"╮",Q),T(x-1,sy+1,"│",Q),T(x+12,sy+1,"│",Q),T(x-1,sy+2,"├"+h+"╯",Q));
sg&&q.push(T(x+2,sy+1,sw.slice(0,sg),sk,{b:1}));
pt&&q.push(T(x+9,pt>1?4:5,pt>2?"▜▀":"█▘",Y));
pt>2&&q.push(T(x+11,4,"¦",Y));
cu&&q.push(T(cx,cy,cg,cc));
co&&q.push(T(x+8,3+(o|0),"●",Y,{b:1}));
f.push({x:x,pose:P(a,b),ms:d,offset:o|0,props:q.concat(e||[]),actors:F<W?[{x:F,pose:fp,color:fk}]:[]})}}

// Set up: table, pole, sign.
A(E,0,200);
A(O,D,150,[T(x+12,4,"✦",Y)]);
for(tb=1;tb<15;tb++)A(E,D,30);
A(E,0,150,[T(x+13,5,"✦",Y)]);
for(pl=1;pl<4;pl++)A(L,0,80);
for(sy=-3;sy<2;sy++)A(sy>0?C:L,0,50);
sy=0;A(O,0,200);
for(sg=1;sg<9;sg++)A(O,0,60);
for(i=0;i<4;i++){sk=i%2?Y:Q;A(V,D,100,0,-(i%2))}
sk=Y;
// Squeeze a lemon, pour a cup.
pt=cu=1;for(i=0;i<6;i++)sp(x+9+R(0,2),5,r(4),-R(1,5)/10,R(2,4),"✦✧·",K([Y,Q]));
A(E,0,300);
A(E,U,200,[T(x+9,4,"●",Y)]);
for(i=0;i<3;i++){for(j=0;j<3;j++)sp(x+9,4,r(5),R(-4,6)/10,R(2,3),"'·",Y);A(C,U,120,[T(x+9,4,"●◆•"[i],Y),S(0,"squish!",H)])}
sp(x+10,4,1.4,-.8,6,"•",Y,.25);A(V,0,300);
pt=2;A(E,U,180);
pt=3;for(i=0;i<6;i++){cc=i<2?I:i<4?H:Y;sp(x+11,5,r(6),-.3,2,"·",Y);A(E,U,110)}
pt=2;A(E,U,120);pt=1;A(V,0,300,[T(x+12,4,"✦",Y)]);
// Hum; a customer hurries in and orders.
s=R(3,6);for(i=0;i<s;i++)A(i%2?L:E,0,160,[T(x+3+i%2,3,"♪♫"[i%2],I)]);
for(j=0;F>X;j++){k=F-X;F-=k>40?3:k>16?2:1;fp=P(L,0,j%2?L:E);A(k<14?O:E,k<14&&j%4<2?U:0,k>16?30:50,k<14?[S(0,"hi!")]:0)}
fp=P(L);A(E,0,500,[S(1,K(["one please!","a cup, pls!","so thirsty!"]))]);
A(V,U,400,[S(0,K(["5¢!","1 coin!"]))]);
// Coin toss.
fp=P(L,D);A(E,0,200,[T(X,3,"●",Y)]);
for(k=X-1;k>x+8;k--)A(E,k<x+11?U:0,35,[T(k,3,"●│"[k%2],Y,{b:1})]);
co=1;for(i=0;i<4;i++)sp(x+8,3,r(6),-R(2,5)/10,3,"✦·",Y);
fp=P(L);A(V,U,350,[S(0,"ching!",Y)]);
// The cup slides over. Gulp... SOUR!
cx=x+12;A(E,U,150,[T(x+11,5,"≡",I)]);
fp=P(L,D);cx=X-1;cy=4;A(E,U,250);
cg="▀";s=R(2,4);for(i=0;i<s;i++){cc=i<s-1?Y:H;fp=P(C,D);A(E,U,220,[S(1,i%2?"gulp":"glug",I)])}
cc=I;cg="▄";fp=P(O,D);A(E,U,450,[S(1,"...",I)]);
s=K(["SOUR!","sooo sour!","ZING!","pucker!"]);fk=lm;
for(i=0;i<12;i++){F=X+i%2;cx=F-1;fp=P(i%3?C:V,D);sp(i%2?F-1:F+9,4,i%2?-.7:.7,-R(1,5)/10,3,"*·",lm);A(i<4?C:E,U,45,[S(1,s,lm)])}
F=X;cx=X-1;
A(V,U,450,[S(0,K(["oops","sugar?","hehe"]))]);
fp=P(V,D);A(E,U,400,[S(1,K(["..thanks","w-wow","refreshing"]),lm)]);
cx=x+12;cy=5;fp=P(L);A(E,U,200);
// The friend staggers off; Clawd waves, counts his coin, flips the sign.
for(j=0;F<W;j++){k=F-X;F+=k>40?3:k>12?2:1;fk=j<8?lm:fc;fp=P(j%6?E:C,0,j%2?L:E);A(E,j%4<2?D:U,k>12?30:55,j<10?[T(F-1,5,"≈",lm),S(0,"bye!")]:0)}
A(E,U,450,[S(0,"1..",I)]);
A(O,U,350,[S(0,"1!")]);
for(i=0;i<6;i++){i%2&&sp(x+10,3,R(5,12)/10,-R(2,5)/10,4,"♥✦·",K(["error",Y]));A(i%2?V:O,i%2?D:U,130,0,-(i%2))}
co=0;A(V,0,250,[T(x+8,3,"✦",Y)]);
for(;sg;sg--)A(L,0,30);
sw="SOLD OUT";sk="error";for(;sg<9;sg++)A(L,0,50);
A(V,0,500);
// Pack up.
cu=pt=0;for(i=0;i<8;i++)sp(x+R(9,12),5,r(4),-R(1,4)/10,R(2,4),"✧·",K([Y,Q]));
for(;sy>-3;sy--)A(L,0,40);
for(;pl;pl--)A(L,0,50);
for(;tb>0;tb-=2)A(E,0,25);
tb=0;A(V,0,350);
return f.concat({x:x,pose:"default",ms:200});
});
