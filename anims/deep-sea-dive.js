// Helmet on, the stage floods; Clawd follows a golden fish to a glowing pearl, then rides the draining sea down.
$cdA("deep-sea-dive", { scene: 1, title: "Deep sea dive", w: 70 }, function (c) {
var ft=i=>i&1?"left":"right",W=c.W,G=c.G,P=c.P,R=c.R,T=c.T,M=Math.random,U=Math.round,Z={z:-1},Q=[],K=[],S=[],tm=0,
d=c.x*2>c.mx?-1:1,L=R(14,20),x=c.clamp(c.x,d>0?0:L+7,d>0?c.mx-8-L:c.mx),
cx=x,cl=x+L*d+(d>0?10:-6),E=ft(d<0),B=ft(d>0),HA=d>0?"one-up":"up",
s=7,sd=0,hel=1,hy=-4,lid=0,pr=0,ph=0,px=cl+2,py=5,fx=-99,fy=2,fv=0,
Y="chromeYellow",BL="rgb(170,215,255)",N="text",f=c.walk(c.x,x),i,j,o,sand="",
PE=P(E),PH=P(E,HA),C=P("closed"),CH=P("closed",HA),WH=P("wink",HA),
D=(a,b,t,v,l,q)=>Q.push([a,b,t,v,l,q||BL]),H=(n,a,o,e)=>{while(n--)F(a,o,100,e)};
// seabed: sand, kelp, fish schools
for(i=0;i<W;i++)sand+=i<10||i>64?"░░▒░▓"[R(0,4)]:M()<.08?"·":" ";
for(i=R(1,4);i<W;i+=R(7,15))(i-cl-1)**2>16&&(j=i<9||i>64)|M()<.3&&K.push([i,j?R(2,4):2,R(0,1)]);
for(i=0;i<2+W/50;i++)S.push([R(1,2),M()<.5?1:-1,.008+M()*.012,M()*W,R(3,5),c.hsv(R(0,8)*45,.45,1)]);
function F(a,o=0,ms=90,e=[]){
tm+=ms;var p=[],V=(...v)=>p.push(T(...v)),r,k,A;
s<7&&p.push(c.tile("~~^~-~~^~  ",s,"rainbow_blue",tm/120|0,Z));
for(r=s+1;r<7;r++){A=Array(W).fill(" ");K.map(q=>{if(r>6-q[1])A[q[0]+(k=r+q[2]+(tm/400|0)&1)]=A[q[0]+k+1]=k?")":"("});V(0,r,A.join(""),c.rgb(60,250-18*r,110),Z)}
S.map(q=>{var b=(q[3]+q[2]*tm)%(W+30)-15,j;q[1]<0&&(b=W-b);for(j=0;j<q[4];j++)(r=q[0]+j%2)>s&&V(U(b-q[1]*(j*4+j%2)),r,q[1]>0?"><>":"<><",q[5],Z)});
hel&&!hy&&G-2+o>s&&M()<.35&&D(cx+4,G-2+o,"°",-.6,9);
if(s<1)for(j=0;j<W/70;j++)M()<.3&&D(R(0,W-1),5,"°o·"[R(0,2)],-R(4,9)/10,12);
Q=Q.filter(q=>(k=U(q[1]),q[4]-->0&&!(q[5]==BL&&k<=s)&&(V(q[0],k,q[2],q[5],Z),q[1]+=q[3],q[5]==BL&&M()<.25&&(q[0]+=R(-1,1)),1)));
ph&&(px=d>0?cx+8:cx,py=G-1+o);
pr&&M()<.6&&V(px+R(-1,1)*2,py-R(0,1),M()<.5?"✦":"·",Y,Z);
sd&&(k=c.hsv(340,.4,.4+.5*sd),V(0,6,sand.replace(/./g,(h,i)=>i%10<sd*10?h:" "),c.hsv(38,.48,.3+.5*sd),Z),sd>.7&&V(cl,5-lid,"◢▓▓▓◣",k,Z),V(cl,6,"◥▓▓▓◤",k,Z));
fx+=fv;k=tm/150&1;fy>s&&V(fx,fy,d>0?(k?">":"-")+"<(°>":"<°)>"+(k?"<":"-"),Y,{b:1});fv&&V(d>0?fx-2:fx+6,fy,"≡",BL);
if(hel){k=G-1+o+hy;V(cx+1,k,"╭─────╮","warning");hy||(a.arms!="up"&&V(cx,k+1,"(",BL),a.arms=="down"&&V(cx+8,k+1,")",BL))}
pr&&V(px,py,"●",tm/200&1?N:Y);
f.push({x:cx,pose:a,offset:o,ms:ms,props:p.concat(e)});
}
// helmet on
for(;hy<0;hy++)F(P(hy<-1?0:"closed"),0,60);
F(C,1,80,[T(cx-1,G,"*",Y),T(cx+9,G,"*",Y)]);F(C,0,150);H(2,P());H(4,P("wink","one-up"));
// flood, bob, settle
for(s=6;s>=0;s--)sd=.5+(6-s)/12,F(P(s<4?"closed":B),s<3?-1:0,110);
for(i=0;i<8;i++)F(P(0,i&1?"up":0),i>1&&i<6?-2:-1,120);
H(3,C,-1);H(3,C);F(P(),0,100,[T(cx,6,"·",BL),T(cx+8,6,"·",BL)]);
H(3,P(B));H(3,PE);F(C,0,80);H(2,P());
// golden fish arrives
for(fx=cl-(L+26)*d,i=0;i<13;i++)fx+=2*d,fy=i>10?3:2,j=(fx-cx-2)*d,F(P(j<-3?B:j>3?E:0),0,70);
H(4,P(E,"up"),-1,[T(cx+4,G-3,"!",Y,{b:1})]);H(2,PE);
// follow it to the clam
for(i=1;i<=L;i++)cx+=d,fx+=d,fy=3-(i>>2&1),F(P(E,0,ft(i)),-(i%4<2),80);
fy=4;H(3,PE,0,[T(cx+4,G-2,"?",N)]);
fy=2;fv=3*d;H(3,P(E,"up"),-1);F(C,0,80);
// clam opens: pearl!
H(3,PE,1);
for(i=0;i<4;i++)cl+=i&1?1:-1,F(PE,1,50);
lid=pr=1;
for(i=0;i<8;i++)F(P(i<2?"closed":E,"up"),-(i<2),90,i&1?[T(cl,3,"\\ │ /",Y,Z),T(cl-2,5,"─",Y,Z),T(cl+6,5,"─",Y,Z)]:[T(cl+1,3,"·✦·",Y,Z)]);
// pearl to hand, snap
for(i=1;i<6;i++)D(px,py,"·",0,3,Y),px=U(c.lerp(cl+2,d>0?cx+8:cx,i/5)),py=U(c.lerp(5,G-1,i/5))-(i>1&&i<5),F(PH,0,90);
ph=1;lid=0;
F(CH,-1,70,[T(cl+1,4,"*",Y),T(cl+3,4,"*",Y)]);F(CH,0,150);H(5,WH);
// kick up to the surface
for(i=0;i<10;i++)o=-((i+1)/3|0),i%3||D(cx+R(2,6),G+3+o,"°",-.7,6),F(P(E,HA,ft(i)),o,130);
H(3,WH,-3);
// drain, ride it down
for(s=1;s<8;s++)F(s>4?CH:PH,s>3?s-7:-3,140);
for(j of[-1,9])D(cx+j,5,"·",-.5,3,N);F(CH,1,80);
for(sd=.8;sd>.1;sd-=.2)F(P(0,HA),0,140);sd=0;
// helmet off, pocket pearl
for(hy=-1;hy>-6;hy--)D(cx+R(2,6),G+hy,"·",.8,3,N),F(P(0,"up"),0,70);hel=0;
for(i=0;i<6;i++)D(i&1?cx-1:cx+9,G+R(0,1),"'",-.4,2,N),F(P("closed",HA,ft(i)),0,50);
H(3,PH);H(4,WH);
pr=ph=0;for(j of"✦·")F(P(),0,100,[T(px,py,j,Y)]);F(P("wink"),0,300);
f.push({x:cx,pose:"default",ms:200});
return f;
});
