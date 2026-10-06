// Pong edge to edge: Clawd and a friend float as paddles, the rally speeds up, the friend misses Clawd's smash, the sky score ticks up, both bow.
$cdA("pong-match",{title:"Pong",w:64},c=>{
var W=c.W,G=c.G,R=c.R,T=c.T,P=c.pick,K=c.clamp,N=W>>1,M=Math.round,Mx=Math.max,sg=Math.sign,i,j,t,n,by,
s=c.x*2>c.mx?1:0,fc=P(["permission","success","autoAccept"]),
EL=["right","left"],ME=EL[s],FE=EL[1-s],AR=["one-up","down"],CY="chromeYellow",X="text",I="inactive",U="subtle",bo={b:1},
pl=EL.map((e,i)=>({x:i*c.mx,o:0,p:0,h:0,e,a:"down"})),me=pl[s],fr=pl[1-s],hx=fr.x,cx=[10,W-11],sc=[R(0,4),R(0,4)],nh=0,sv=0,fl=0,ball=0,tr=[],
DU="█▀█▀█ ▀▀█▀▀██ ██▀▀",DL="█▄█▄█▄█▄▄▄██▀▀█▄▄█",
f=c.walk(c.x,me.x,{ms:K(1500/(Math.abs(c.x-me.x)+1)|0,20,50)}),
// paddle beside the inner hand, grows from the bottom
pad=(p,i)=>[2,1,0].slice(0,p.p).map(r=>T(i?p.x-1:p.x+9,G+p.o+r,"█",p.h?CY:X,bo)),
// two-row score digits either side of the net
dig=i=>[DU,DL].map((d,r)=>T(i?N+3:N-5,r,d.substr(sc[i]*3,3),sv>0?i==s?fl?CY:"clawd_body":fc:sv,{b:1,z:-1})),
po=p=>c.P(p.e,p.a,p.ft||(p.o<0&&f.length>>2&1?"left":"both")),
sp=(n,a,b,y)=>{for(var r=[];n--;)r.push(T(R(a,b),R(0,y),P("✦✧*·"),c.rainbow(R(0,9))));return r},
S=(ms,ex=[])=>{var r=[],q;
for(q=0;q<nh;q++)r.push(T(N,q,"╎",U,{z:-1}));
sv&&r.push(...dig(0),...dig(1));
r.push(...pad(pl[0],0),...pad(pl[1],1),...tr.map((q,i)=>T(q[0],q[1],"·",i?U:I)));
ball&&r.push(T(...ball,bo));
f.push({x:me.x,offset:me.o,pose:po(me),ms,props:r.concat(ex),actors:fr.x>-9&&fr.x<W?[{x:fr.x,offset:fr.o,color:fc,pose:po(fr)}]:[]})};
fr.x=s?-9:W;
// the net draws down, the old score lights up
while(nh<7)nh++,S(45);
S(120,[T(N-4,0,"✦       ✦",CY)]);sv=1;S(300);
// the friend walks in at the far edge
for(i=0;fr.x!=hx;i++)fr.x+=sg(hx-fr.x),fr.ft=EL[i%2],S(45);
fr.ft=0;S(200);
// paddles slide in, both float to mid-court
me.a=fr.a="up";
for(i=1;i<4;i++)me.p=fr.p=i,S(80);
pl.map((p,i)=>p.a=AR[i]);
for(i=1;i<3;i++)me.o=fr.o=-i,S(90,pl.map(p=>T(p.x+3,6,"· ·",U)));
me.e="wink";S(260);me.e=ME;
// serve: the ball blinks on Clawd's paddle
by=5+me.o;
for(i=0;i<3;i++)ball=i%2?0:[cx[s],by,"●",X],S(150);
// rally: each return is faster, the comet tail grows
var nS=2*R(2,4)+1,sh=s,n0=16+(W-21)/8|0,last,hs,rc,A,B,y0,D,yA,tg,ms,L,bx,l,ex=[];
for(j=0;j<nS;j++){
last=j==nS-1;hs=pl[sh];rc=pl[1-sh];A=cx[sh];B=cx[1-sh];y0=by;
n=Mx(M(n0*(1-j*.07)),9);ms=Mx(40-2*j,26);yA=last?P([0,6]):R(0,6);
// smash: Clawd winks, the friend is fooled
if(last)n=Mx(M(n*.7),10),ms=34,tr=[],hs.e="wink",hs.a="up",hs.h=1,S(280,[T(A+(sh?-1:1),by-1,"✦",CY),T(A,by+1,"*",CY)]);
D=P([yA-y0,-yA-y0,12-yA-y0]);tg=K(yA-5,-4,0);
for(t=1;;t++){
L=n-t;bx=L<0?B-2*L*sg(B-A):M(A+(B-A)*t/n);
if(bx<-1||bx>W)break;
last?(l=K(Math.abs(bx-ball[0]),1,14),ex=[T(B>A?bx-l:bx+1,by,"─".repeat(l),"warning")]):(tr.unshift(ball),tr.splice(2+(j>>1)));
by=L<0?yA:(by=(M(y0+D*t/n)%12+12)%12)>6?12-by:by;
ball=[bx,by,L||last?"●":"✶",last?"error":L?X:CY];
hs.a=t<3?"up":AR[sh];hs.h=t<2;t>2&&!last&&(hs.e=EL[sh]);
t%2&&(hs.o+=sg(-2-hs.o));
if(last){L<0||(rc.o+=sg((L>2?-4-tg:tg)-rc.o));rc.e=L<2?"closed":FE}
else if(t>n/3)rc.o+=sg(tg-rc.o);
L||last||(rc.h=1,rc.a="up");
S(L?ms:last?240:ms+40,ex);
if(!L&&!last)break}
sh=1-sh}
// missed! the friend stares after the ball
ball=0;fr.e=ME;
S(400,[T(s?fr.x+11:fr.x-3,G+fr.o,"?",I,bo)]);
// score ticks up, Clawd cheers, the friend sinks
for(i=0;i<12;i++){i==3&&sc[s]++;fl=i%2;me.a="up";me.e=i%4==2?"wink":"open";me.o=-2-fl;fr.e="closed";fl&&fr.o&&fr.o++;
S(i<3?120:90,sp(3,N-14,N+13,3).concat(i>2&&i<9?[T(s?N+3:N-5,i<6?3:2,"+1",CY,bo)]:[]))}
fl=0;me.e=ME;fr.e=FE;
while(me.o||fr.o)me.o+=sg(-me.o),fr.o+=sg(-fr.o),S(80);
for(i=3;i--;)me.p=fr.p=i,S(70);
me.a=fr.a="down";S(200);
// both bow, confetti over the whole stage
for(i=0;i<2;i++)me.o=fr.o=1,me.e=fr.e="closed",S(480,sp(8,0,W-1,3)),me.o=fr.o=0,me.e=ME,fr.e=FE,S(260,sp(3,0,W-1,2));
// wave, the friend walks off, net and score fade
for(i=0;i<4;i++)fr.a=me.a=i%2?"down":"one-up",me.e=i%2?"wink":ME,S(150);
for(i=0;fr.x>-9&&fr.x<W;i++)fr.x+=s?-1:1,fr.e=ME,fr.ft=EL[i%2],fr.a="down",nh&&nh--,sv=i<2?I:i<5?U:0,S(55);
me.e="open";me.a="down";S(300);
return f});
