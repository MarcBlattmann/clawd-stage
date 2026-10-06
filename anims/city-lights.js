// Dusk city: Clawd throws a giant switch, windows light up in a wave, neon flickers, a plane passes, the moon rises, lights go out.
$cdA("city-lights", { scene: 1, title: "City lights", w: 70 }, function (c) {
var I="inactive",Df="default",G="#2e323e",E="error",C="closed",f=[],W=c.W,M=Math,R=c.rng(c.R(1,1e6)),T=0,ON,OFF,DN=OFF=ON=1e9,PK=5,KN=3,i,j,k,w,b,n,a,
x=c.clamp(c.x,0,c.mx-4),P=x+11,kw=1500/M.max(P,W-P),dir=c.pick([1,-1]),B=[],St=[],Lp=[],mX=P<W/2?W*.72|0:W*.2|0,
WD="BAR HOTEL OPEN ♥ ★ PIZZA CAFE 24h JAZZ ♪♫".split(" "),
H=v=>(v=M.sin(v*127.1)*43758.5)-M.floor(v),
cl=v=>v<0?0:v>1?1:v,
sky=y=>c.rgb.apply(0,[[40,42,10,4],[30,17,12,4],[90,3,34,8]].map(([p,r,s,t])=>8+(c.lerp(p+r*y,s+t*y,n)-8)*a)),Rt=c.P("right");
// buildings: [dark,lit] rows
for(i=0;i<W;i+=w+(R()<.3)){
w=5+(R()*7|0);var hh=2+(R()*5|0),pt=[" ▀"," ▀▀"," ▐"," ▄"," ▘▝"][R()*5|0],wd=WD[R()*10|0];if(i<mX+4&&i+w>mX-1)hh=2;
b={x:i,w,f:hh>>1,h:hh&1,c:["#363a58","#443a5c","#2c3e54","#4a4664"][R()*4|0],l:["#ffd678","#ffb85a","#c4deff"][R()*3|0],d:R()*600,o:R()*2200,r:[],dl:M.abs(i+w/2-P)*kw};
for(j=0;j<b.f;j++){var t="",u="";for(k=0;k<w;k++){var ch=k&&k<w-1?pt[k%pt.length]:" ";t+=ch;u+=R()<.3?" ":ch}b.r.push([t,u])}
if(wd.length<w-1&&R()<.35)b.s={x:i+(w-wd.length>>1),t:wd,c:["#ff5ac8","#50ebff","#82ff8c","#ff825a"][R()*4|0],ts:b.dl+300+R()*900,br:R()<.3};
else if(b.f>2)b.an=i+(w>>1);
B.push(b)}
for(i=0;i<W/16;i++)St.push([R()*W|0,R()*1.6|0,R()]);
for(k=3;k<W-1;k+=22)if((k<8||k>66)&&(k<x-1||k>x+14))Lp.push([k,M.abs(k-P)*kw,R()*2200]);
var pxf=(p=(T-ON-1800)/4200)=>p>0&&p<1?M.round(dir>0?p*(W+6)-5:W-p*(W+6)):-99,
scene=()=>{
var A=[],q=(x,y,t,c,bg,o)=>y<7&&A.push({x,y,t,c,bg:bg||K[y],o,z:-1}),
sk=d=>M.ceil(4*M.max(1-cl((T-d)/400),cl((T-DN-d)/400))),y,px=pxf();
a=M.min(cl(T/800),1-cl((T-DN)/900));n=cl((T-ON+400)/2600);var K=[0,1,2,3].map(sky);
if(a>0)for(j=0;j<4;j++)A.push(c.tile(" ",j,"text",0,{bg:K[j],o:1,z:-1}));
St.forEach((s,i)=>n>s[2]*.7+.2&&T<DN+s[2]*500&&q(s[0],s[1],H(i*31+(T/260|0))<.12?"✦":"·",s[2]<.5?"text":I));
y=3-M.min(3,(T-ON-900)/800|0)+sk(0);
y<4&&q(mX,y,"▗▄▖","#faf0c8");y<3&&q(mX,y+1,"▝▀▘","#faf0c8");
B.forEach((b,bi)=>{
var k=sk(b.d),lit=T>ON+b.dl&&T<OFF+b.o,s=b.s,dt=T-ON-(s?s.ts:0);
b.r.forEach((r,j)=>{y=3-j+k;var on=lit&&T>ON+b.dl+j*70&&H(bi*7+j*3+(T/900|0))>.05;y<4&&q(b.x,y,r[on?1:0],on?b.l:"#222438",b.c,1)});
y=3-b.f+k;b.h&&y<4&&q(b.x,y,"▄".repeat(b.w),b.c);
y-=b.h;if(y>3)return;
s&&q(s.x,y,s.t,lit&&dt>0&&(dt>700?!s.br||H(bi+(T/80|0))>.12:H(bi*17+(T/60|0))>.5)?s.c:"#463c54");
b.an&&(T/500+bi)%2<1&&q(b.an,y,"•",E)});
if(px>-99){q(px,0,dir>0?"▙▄▄▖":"▗▄▄▟",I);(T/250|0)%2&&q(dir>0?px+4:px-1,0,"•",E)}
Lp.forEach(l=>{var k=sk(l[1]*.3),on=T>ON+l[1]&&T<OFF+l[2];q(l[0],4+k,on?"●":"○",on?"#ffdc8c":I);q(l[0],5+k,"│",I);q(l[0],6+k,"┴",I)});
if(PK<5){for(j=0;j<5;j++)q(x+10,2+j+PK,j+2==KN?"┤ │":j>3?"└─┘":j?"│ │":"┌─┐",I,G,1);
q(x+11,2+PK,"●",T<ON?E:"success",G);q(x+9,KN+PK,"●","warning",G)}
return A},
add=(pose,ms,o,ex)=>{f.push({x,pose,ms,offset:o||0,props:scene().concat(ex?ex():[])});T+=ms},
spk=()=>[0,1,2,3,4].map(()=>c.T(x+8+c.R(0,6),c.R(1,4),c.pick("✦*·+"),c.pick(["#ffe680","text"]))),
zz=()=>[0,1,2].slice(0,(T/300|0)%4).map(q=>c.T(x+6+q,3-q,q>1?"Z":"z",I));
c.walk(c.x,x).forEach(fr=>{fr.props=scene();f.push(fr);T+=fr.ms||60});
while(T<1400)add(T<700?Df:T<1050?"look-left":"look-right",90);
// switch: jump, pull
for(PK=4;PK>0;PK--)add(Rt,70);
add(Rt,350);add(c.P(C),90);add(Rt,250);
add(Rt,140,1);add(c.P("open","up"),70,-1);add(c.P(C,"up"),280,-1);
KN=4;add(c.P(C,"one-up"),90);
KN=5;ON=T;add(c.P(C,"one-up"),80,1,spk);add(c.P("wink","one-up"),220,1,spk);add(Df,160);
for(i=0;i<22;i++)add(i<7?c.P("left"):i<14?Rt:i&1?"arms-up":c.P("wink","up"),80,i>13?-(i&1):0);
while(T<ON+6600){var px=pxf(),d=px-x-3;
add(c.P(px<-90?(H(T)<.1?C:"open"):d<0?"left":"right",px>-99&&M.abs(d)<14+W/10?((T/200|0)%2?"up":"one-up"):"down"),70)}
// moon, yawn, lights out
add(c.P(mX<x?"left":"right"),600);add(c.P("wink"),300);
OFF=T+300;add(c.P(C,"up"),600);add(c.P(C),200);
while(T<OFF+2600)add(c.P(C),110,0,zz);
DN=T;
while(T<DN+1000){PK=M.min(5,(T-DN)/120|0);add(T-DN<500?c.P(C):Df,80)}
f.push({x,pose:Df,ms:300});
return f;
});
