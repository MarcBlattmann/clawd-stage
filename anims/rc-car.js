// RC car: zooms across, donuts round a cone, flips off a ramp, bonks Clawd's feet onto its roof; he rescues it.
$cdA("rc-car",{title:"RC car",w:64},function(c){
var M=Math,C=c.clamp,W=c.W,G=c.G,P=c.P,T=c.T,R=c.R,d=c.x+4<W/2?1:-1,e=M.round(c.mx*.15),
x=d>0?C(c.x,0,e):C(c.x,c.mx-e,c.mx),f=c.walk(c.x,x,{ms:40}),
EY=d>0?"right":"left",CC=c.hsv(R(0,359),.75,1),Z={z:-1},BW={b:1},Y="chromeYellow",
hm=x+4+d*8,bp=x+4+d*6,fc=d>0?W-9:8,rc=M.round((hm+fc)/2),VM=C(W/45,2,3.5),
p=hm,y=6,sh="n",cf=d,sp=0,rs=0,cn=-1,sk=0,cv=0,rm=0,wc="●",pt=[],i,k,o,
K="▗▖▙▟▛▜▝▘╲╱",RA=["","▁▁▂▂▂▁▁","▁▂▄▅▄▂▁","▁▃▅▇▅▃▁"],
mr=s=>[...s].reverse().map(h=>{var i=K.indexOf(h);return i<0?h:K[i^1]}).join(""),
S={n:["▗▄█▙▖"," ● ● "],u:[" ● ● ","▝▀█▛▘"],a:["  █● ","  █● "],b:[" ●█  "," ●█  "],v:[" ▄█▄ "," ● ● "]},
N="inactive",Q=(e,t)=>P(e||EY,"one-up",t),tp=u=>Q(0,u%4<2?"left":"right"),pf=(a,b)=>pt.push([a,b,0]),
car=()=>{var r=[],l=M.round(p)-2;S[sh].map((s,j)=>{s=cf>0?s:mr(s);
 r.push(T(l,y-1+j,s.replace(/●/g," "),CC),T(l,y-1+j,s.replace(/[^●]/g," ").replace(/●/g,wc),"text"))});
 sh=="n"&&r.push(T(l+(cf>0?1:3),y-2,sp>2?cf>0?"╲":"╱":"╻",N));
 sp>2&&y==6&&r.push(T(cf>0?l-4:l+6,5,"─ ─","subtle"));return r},
fr=(pose,ms,o,ex)=>{var r=[];o|=0;
 rs&&r.push(T(rc-3,6,RA[rs],"#c4884e",Z));
 sk&&r.push(T(fc-4,6,"≈≈≈≈ ≈≈≈≈",sk>1?"subtle":N,Z));
 cn>=0&&r.push(T(fc,cn,"▲","warning",Z));
 pt=pt.filter(q=>q[2]<5);pt.map(q=>{r.push(T(q[0],q[1],"▒░░··"[q[2]],N,Z));q[2]++%2&&q[1]--});
 rm&&r.push(T(x+9,G+o,"▆",N),T(x+9,G-1+o,"│",N),T(x+9,G-2+o,f.length%2?"•":"·",rm>1?"error":"success"));
 f.push({x,offset:o,pose,ms,props:r.concat(cv?car():[],ex||[])})},
// drive to p1; hJ = jump height off the ramp; ck(u,L,ex) = Clawd's pose
go=(p1,hJ,ck)=>{var dir=p1>p?1:-1,L=M.min(hJ*5+4,M.abs(rc-bp)*.55),u,ex,air;cf=dir;
 for(;(p1-p)*dir>0;){u=(p-rc)*dir;sp=M.min(sp+.35,u>=0&&u<L?2:VM);p+=dir*M.min(sp,(p1-p)*dir);u=(p-rc)*dir;
  air=u>=0&&u<L;y=u>=-3&&u<0?5:6;sh="n";ex=[];
  if(air)y=5-M.round(M.sin(M.PI*u/L)*hJ),hJ>1&&(sh="naubn"[u/L*5|0]);
  else pf(M.round(p)-dir*3,y),u>=L&&u<L+3&&ex.push(T(M.round(p)-3,5,"░ ░ ░",N));
  fr(ck(u,L,ex),air?55:35,0,ex)}sp=0;y=6;sh="n"};
// pull out the remote; ramp grows, cone and car drop in
fr("default",250);rm=1;
for(i=0;i<9;i++)cv=1,y=M.min(i-1,6),cn=y,rs=M.min(i>>1,3),i==7&&[p-2,p+2,fc-1,fc+1].map(q=>pf(q,6)),fr(Q(i<4&&"open"),i<7?50:140);
// rev
for(rm=2,i=0;i<8;i++)p=hm-d*(i%2),pf(p-d*3,6),fr(Q(i<5?0:"wink",i%2?"left":"right"),70);
p=hm;
// zoom across, hop the ramp
go(fc,1,tp);
// donuts round the cone
for(k=6+R(2,3)*8+4,i=6;i<k;i++){var t=i*M.PI/4,s=M.sin(t);p=fc+d*M.round(4*M.cos(t));y=s>.1?5:6;sh=s*s<.1?"v":"n";cf=s<0?d:-d;
 pf(p-cf*3,6);i>12&&(sk=1);fr(Q(i%4?0:"wink",i%2?"left":"right"),65)}
// back, big flip off the ramp, straight at Clawd
go(bp,3,(u,L,ex)=>{if(u>=0&&u<L)return u>L/2&&ex.push(T(M.round(p)+R(-3,3),R(0,2),c.pick("✦✧*"),Y)),P("wink","up");
 if(M.abs(p-bp)<20)return ex.push(T(x+4,G-2,"!","warning",BW)),P("open","up");return Q()});
// bonk! the car flips onto its roof
rm=1;
[[1,5,"n"],[2,4,"a"],[3,3,"a"],[4,4,"u"],[4,6,"u"]].map((q,j)=>{p=bp+d*q[0];y=q[1];sh=q[2];
 fr(P(j<3?"closed":"open","up"),j<2?60:90,j<3?-1:0,j<2?[T(x+4+d*4,5,"✶",Y),T(x+4,G-3,"!","warning",BW)]:[])});
pf(p,5);
for(i=0;i<14;i++)wc=i<11?"+×"[i%2]:"●",i%4||pf(p+R(-1,1),5),fr(Q(i==6&&"closed"),50+i*12,0,i>7?[T(x+4,G-2,"?","text")]:[]);
// pick it up, turn it over, hold it high
fr(Q(),220,1);
[[4,4,"u"],[2,3,"b"],[0,3,"n"]].map((q,j)=>{p=x+4+d*q[0];y=q[1];sh=q[2];j&&(cf=d);fr(q[0]?Q():"arms-up",110)});
for(i=0;i<12;i++)o=[0,-1,-1,0][i%4]*(i<8),y=3+o,fr(P(i>8?"wink":i%6<3?"left":"right","up"),110,o,i>3?[T(x+4,y-2-(i-4>>1),"♥","error"),T(x+R(0,8),R(0,2),"·",Y)]:[]);
// set it down and send it off again
[[3,4],[8,6]].map(q=>{p=x+4+d*q[0];y=q[1];fr(Q(),130,1)});
fr(Q("wink"),300);rm=2;
go(d>0?W+4:-5,1,tp);
// clear the stage
for(cv=0,rm=1,sk=2,i=3;i>=0;i--)rs=i,cn=i>1?6:-1,i==1&&pf(fc,6),fr(Q(),110);
rm=0;fr(P("open"),200);
f.push({x,pose:"default",ms:300});
return f});
