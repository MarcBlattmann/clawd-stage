// Clawd is the pinball: plunger, bumpers dinging edge to edge, flippers, jackpot, drain, TILT.
$cdA("pinball",{title:"Pinball",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,R=c.R,T=c.T,Q=c.P,W=c.W,D=W>>1,f=[],P=[],L=[],B=[],fl=[0,0],DF="default",CU=Q("closed","up"),
s=0,ds=0,wv=0,rc=0,dd=0,tl=0,wf=0,mt=0,sh=0,jp=0,fr=0,x=c.x,o=0,cb,i,j,k,b,
Z={z:-1},O={o:1,b:1},n=c.clamp((D-15)/12+1|0,2,7),sp=(D-15)/(n-1),
FA="right-30 right-75 back-125 back left-75 left-30".split(" "),
fp=u=>u?"▄▄▀▀▀":"▀▀▀▄▄",
spk=(x,y,N)=>{for(j=0;j<N;j++)P.push({x,y,u:(rn()-.5)*2.4,v:-rn()*.6,g:c.pick("✦*·✧+"),c:c.hsv(R(25,60),.6,1)})},
// Machine frame; timers tick here.
S=ex=>{fr++;var a=[],y,u,t="",g=dd?"inactive":tl&&fr%2?"error":0,lt=y=>(y+fr)%3?"subtle":"warning";
P=P.filter(q=>(q.x+=q.u,q.y+=q.v,q.v+=.15,q.y<6.5&&q.x>=0&&q.x<W));P.forEach(q=>a.push(T(rd(q.x),rd(q.y),q.g,q.c,Z)));
for(y=7-wv;y<7;y++)u=6-y<mt,a.push(T(sh,y,"▐",g||(wf?"text":lt(y)),Z),T(W-1+sh,y,u?"█":"▌",g||(u?c.hsv(130-22*(6-y),.9,1):lt(y)),Z));
for(u=1;u<W-1;u++)t+=M.abs(u-D)<rc&&(u+(dd?0:fr))%6==0?"•":" ";
a.push(T(sh,0,t,g||"subtle"));
B.forEach(b=>{var l=b.l;b.v&&a.push(...c.art(b.x-2+sh,b.y,l?["▄███▄","▀███▀"]:["▄▀▀▀▄","▀▄▄▄▀"],g||(l?"text":b.c),O));l&&b.l--});
rc>12&&a.push(T(D-12+sh,6,"●"+fp(fl[0]),g||"text",Z),T(D+6+sh,6,[...fp(fl[1])].reverse().join("")+"●",g||"text",Z));
rc>6&&(ds=M.min(s,ds+M.max(10,(s-ds)/3|0)),a.push(T(D-5+sh,0,jp?"★JACKPOT!★":" ★"+(1e6+ds+"").slice(1)+"★ ",g||(jp?c.rainbow(fr):ds<s?"text":"chromeYellow"),O)));
L=L.filter(q=>q.k--);L.forEach(q=>a.push(T(q.x,2,q.t,"chromeYellow",Z)));
wf&&wf--;jp&&jp--;tl&&tl--;fl=fl.map(v=>v&&v-1);
return a.concat(ex||[])},
F=(p,ms,ex,h)=>f.push({x,offset:o,pose:p,ms,props:S(ex),hide:h}),
hit=b=>{b.l=5;cb++;s+=100*cb;L.push({x:b.x<D?b.x+6:b.x-10,t:"+"+100*cb,k:9});spk(b.x,2,5);F(cb>2?Q("wink","up"):CU,80)},
// md 0 launch, 1 floor bounce, 2 straight; sn spins.
go=(X,Y,ms,md,sn)=>{var x0=x,o0=o,d=X-x0,K=M.max(3,M.abs(d)+1>>1),t,p;
for(k=1;k<=K;k++)t=k/K,p=o,x=rd(x0+d*t),o=rd((o0+(Y-o0)*(md?t:t**4))*(md==1?M.abs(M.cos(M.PI*t)):1)),
F(sn?{facing:FA[(d<0?1e4-fr:fr)%6]}:Q(d<0?"left":"right",o<p?"up":"down"),ms,sn?[T(d<0?x+9:x-3,5+o,d<0?"≡≡·":"·≡≡","subtle")]:md&&!o?[T(x-1,6,"·         ·","subtle")]:0)},
ch=(si,N,ln)=>{var p=-1,q,u;cb=0;for(i=0;i<N;i++){q=p<0?R(1,n-1):rn()<.6?c.clamp(p+c.pick([-1,1]),0,n-1):R(0,n-1);q==p&&(q=(p+1)%n);p=q;b=B[si*n+q];
u=ln&&!i;go(b.x-4,-2,u?20:32-2*i,+!u,u);hit(b)}},
flip=(si,dx)=>{var e=dx>0?"right":"left";go(si?D+4:D-13,-1,28,1);F(Q("closed"),90);x+=dx;F(Q(e),150);x+=dx;F(Q(e),190);fl[si]=5;s+=50;spk(si?x+2:x+6,5,6);F(Q("wink","up"),50)};

for(i=0;i<2;i++)for(j=0;j<n;j++)B.push({x:i?W-6-rd(j*sp):5+rd(j*sp),y:0,c:c.hsv(i*190+j*25,.7,1),dl:R(0,4)});
// Power on, plunger, launch.
for(k=0;k<14;k++){rc=rd((k+1)*(D+2)/12);wv=M.min(7,k);B.forEach(q=>{!q.v&&M.abs(q.x-D)<rc&&(q.v=q.l=2,spk(q.x,2,2))});F(Q(k%6<3?"left":"right"),70)}
F(Q("wink"),300);
for(o=1;o<4;o++)F(CU,o>2?250:60,0,o>2);
for(x=c.mx-1,o=3;o>=0;o--)F(Q("left"),o?70:300);
for(k=1;k<13;k++)mt=k>>1,o=k<5?1:2,x=c.mx-1-(k>8&&k%2),F(Q(k<7?"left":"closed"),k<9?90:50);
mt=0;x=c.mx-1;spk(x+4,6,6);for(o=1;o>-2;o--)F(Q("open","up"),35,o<0?[T(x+3,6,"║ ║","subtle")]:0);
o=-1;go(1,-1,20,0,1);wf=4;s+=50;spk(1,4,6);F(CU,100);
ch(0,R(4,6));flip(0,1);ch(1,R(4,6),1);flip(1,-1);
// Jackpot, drain, TILT, power down.
go(D-5,-3,40,2,1);jp=16;s+=5000;spk(D,1,12);B.forEach(q=>q.l=9);F(CU,120);F(Q("wink","up"),350);F(Q("left"),220);F(Q("right"),220);
for(o=-2;o<4;o++)o%2&&(fl=[1,1]),F(o<0?Q("open","up"):CU,[150,100,80,70,90,110][o+2]);
o=0;spk(D,6,6);F(DF,200,0,1);
for(tl=8,k=0;k<16;k++)sh=k<8?k%2*2-1:0,F(DF,k<8?50:110,k%4<3?c.art(D-6+sh,2,["▀█▀ █ █   ▀█▀"," █  █ █▄▄  █ "],"error",{b:1}):0,1);
dd=1;for(k=0;k<12;k++)B.forEach(q=>{k>q.dl+1&&q.y++}),wv=M.max(0,7-k),rc=M.max(0,rc-(D/5|0)-1),F(DF,80,0,1);
for(x=D-5,o=3;o>0;o--)F(Q("closed"),120);
for(k=0;k<12;k++)F(Q(k<7?"closed":k<9?"left":k<11?"right":"wink"),k<7?90:200,k<8?[T(x+1+k%7,3,"✦","warning"),T(x+7-k%7,3,"✧","chromeYellow")]:0);
f.push({x,pose:DF,ms:300});
return f});
