// Dino valley: a T-rex chases Clawd into a bush, then stomps off after a pterodactyl.
$cdA("dino-park",{ scene: 1,title:"Dino park",w:70},c=>{
var W=c.W,M=Math,mx=c.mx,R=M.random,rn=c.rng(R()*1e6),f=[],T=0,G=7,i,k,v,A,
d=c.x+4<W/2?1:-1,Lf=d>0?"left":"right",Rt=d>0?"right":"left",U="up",N="closed",Yl="chromeYellow",I="inactive",E="error",
K="abcdefghij/\\<>",mm=s=>[...s].reverse().map(h=>K[K.indexOf(h)^1]||h).join(""),
u=s=>s.replace(/[a-m]/g,h=>"▌▐▖▗▘▝▙▟▛▜▀▄█"[h.charCodeAt()-97]),
q=(x,y,t,h,F)=>A.push({x,y:y+G,t,c:"#"+h.replace(/./g,"$&$&"),z:F?0:-1}),
Q=(x,y,t,h,F)=>q(d>0?x:W-x-t.length,y,u(d>0?t:mm(t)),h,F),
S=(x,y,t,c)=>({x:d>0?x:W-x-t.length,y,t,c,b:1}),
P=[],sp=(x,y,a,b,t,h)=>P.push({x:d>0?x:W-1-x,y,a:a*d,b,t,h}),
Y=["253","a76","5a4","e8b"].map(h=>[h,[...Array(7)].map(_=>Array(W).fill(" "))]),
pu=(l,x,y,s)=>[...s].map((h,j)=>h>" "&&(Y[l][1][y][x+j]=h)),
a=rn()*9,b=rn()*9,vx=W*(.3+.4*rn())|0,PT=[],fz=x=>x<10||x>64,
cx=d>0?c.x:mx-c.x,hx=mx-1,tx=-99,tm,tl,tv,bh,er,bs,D,PL=[[d>0?13:W-14,0]];
for(i=0;i<W;i++){v=M.sin(i*.31+a)+M.sin(i*.13+b);v>-.8&&pu(0,i,3,v>.8?"m":"l");v>1.4&&pu(0,i,2,"l")}
pu(1,vx,1,"   dhkgc");pu(1,vx,2,"  hmmmmmg");pu(1,vx,3,"lhmmmmmmmgl");
for(i=68+rn()*6|0;i<W-3;i+=16+rn()*22|0)(d>0||i<W-19)&&M.abs(i-vx-5)>10&&PL.push([i,1]);d<0&&PL.push([4,1]);
PL.map(([x,y])=>{pu(2,x-3,y,"lkklkkl");pu(2,x-3,y+1,"e     f");pu(1,x-1,y+1,"●b●");for(k=y+2;k<(y?7:4);k++)pu(1,x,k,"b")});
for(i=0;i<W;i++)fz(i-2)&&fz(i+2)&&rn()<.1?(pu(2,i-2,5,"\\\\|//"),pu(2,i-1,6,"\\|/"),i+=3):rn()<(fz(i)?.1:.04)&&pu((k=rn()*5|0)>3?3:2,i,6,",'\"♣✿"[k]);
Y.map(l=>l[1]=l[1].map(r=>u(r.join("").slice(0,W))));
var px=p=>p.x+p.v*(T-p.t)|0,
sc=()=>{A=[];var x,y,j,k,s;
Y.map(([h,l])=>l.map((s,y)=>q(0,y,s,h)));
for(j=0;j<4;j++)k=(T/170+j*4)%16|0,q(vx+5+d*k,0,"▒▒░░░·· "[k>>1],"999");
q(vx+5,1,"▀",T%480<240?"f52":"fa3");
er&&R()<.3&&P.push({x:vx+5,y:1,a:R()-.5,b:-.5-R()*.4,t:"*",h:"f72"});
PT.map(p=>{x=px(p);T>=p.t&&Q(x,p.y,(s=T%280<140?"\\▼/>":"/▼\\>",p.v>0?s:mm(s)),"c86")});
["         lllll","        hmmm"+(tm?"kkk":"mmg"),"kllllllhmm"+(tm?"llll":"kkkk"),"    kmmmmmie",tl?"     ba  ba":"    he   fg"].map((s,n)=>Q(tx,n+2,s,"7a4"))&Q(tx+10,3,"●","fd0");
j=bh?0:T%1e3<500;[" dllc","hmke","bm","bm","   llhmma","dhmmmmmmi","  ba  ba"].map((s,n)=>n>3?Q(0,n,s,"8bb"):j+n<4&&Q(6,j+n,s,"8bb"));
j&&R()<.2&&sp(11+R()*4|0,2,0,0,"·","5b4");
P=P.filter(p=>(p.x+=p.a,p.y+=p.b,p.b+=.1,y=M.round(p.y),y<7&&(y<0||q(p.x+.5|0,y,p.t,p.h,1))));
s=hx-1+(bs>0?bs--%2*2-1:0);["\\         /","dhmghmghmgc","hmmmmmmmmmg"].map((t,n)=>Q(s,4+n,t,n?"4a3":"5b4",1));
return G>6?[]:A},
fr=(e,ms,a,o,X,ft)=>{T+=ms;tv&&(tx+=tv,tl^=1);f.push({x:d>0?cx:mx-cx,pose:c.P(e,a,ft),offset:o|0,ms,props:sc().concat(X||[])})},
H=(ms,X)=>fr(N,ms,0,1,X);
PT.push({x:-6,y:0,v:W/(5e3+R()*3e3),t:300},{x:W+1,y:1,v:-W/6e3,t:2500});
for(i=0;i<16;i++)G=M.ceil(7-i/2.1),k=cx<26,cx+=2*k,fr(i<6?Lf:i<11?Rt:0,70,0,0,0,k&&i%2?Lf:0);
for(i=0;i<11;i++)fr(px(PT[0])<cx?Lf:Rt,i>6?70:140,i>3?U:0,[-1,-2,-1][i-7]);
for(i=0;i<8;i++)fr(Lf,150,i%2?"one-up":0,0,i>2&&[S(cx-3,3-(i>5),"♥",E)]);
fr("wink",450);
// T-rex: charge, roar, chase, dive
for(k=0;k<2;k++)fr(N,90,0,-1,[S(1,1,k?"THUD!":"thud",I)]),bh=1,fr(Lf,450-k*200,0,0,[S(cx+4,2,"?",Yl)]);
for(k=cx-16,tx=-17;tx<k;)tx=M.min(k,tx+c.clamp((k+17)/12|0,2,4)),tl^=1,sp(tx+6,6,-.4,-.3,"·","a98"),fr(Lf,45);
tm=er=1;[-1,-2,-3,-3,-2,-1,0,0].map((o,i)=>fr(N,i>6?300:80,U,o,[S(tx+8,1,"ROAR!",E),S(cx+4,3+o,"!",Yl)]));
PT.push(D={x:M.min(-6,cx-120),y:0,v:.05,t:T});
for(i=0;cx<hx-6;i++){cx=M.min(cx+2,hx-6);tx=cx-16-(i%6>2);tm=i%4<2;tl=i%2;
i%2&&sp(tx+5,6,-.3,-.2,"·","a98");
fr(i%7==3?Lf:Rt,40,U,-(i%4==1),[S(cx-2,5,"≡",I)].concat(i%10<4?S(tx+9,1,"CHOMP",E):[]),tl?Lf:Rt)}
[[2,-1],[2,-2],[1,-2],[1,-1],[0,1]].map(([a,o],i)=>{cx+=a;tx=M.min(tx+2,hx-17);tl^=1;if(i>3){bs=9;er=0;for(k=0;k<7;k++)sp(hx+R()*9|0,4,R()-.5,-.3-R()*.4,"♣","5b4")}fr(i>3?N:Rt,i>3?200:60,U,o,0,Lf)});
for(tm=0;tx<hx-17;)tx=M.min(tx+2,hx-17),tl^=1,H(60);
// sniff; a pterodactyl distracts it
for(i=0;i<6||px(D)<tx+8;i++)k=i==3||i==4,fr(k?Lf:N,k?350:220,0,!k,[i%2?S(tx+11,1,"?",Yl):S(tx+8,1,"sniff",I)]),i-4||(bs=5);
H(250,[S(tx+11,1,"!",Yl)]);
for(i=0;i<4;i++)tm=i%2,H(110,[S(tx+12,1,"snap",E)]);
tm=0;tv=2;for(i=0;i<8;i++)bs=bs||2,H(70,i%3?0:[S(tx+4,1,"stomp",I)]);
bh=0;[Rt,Lf,Rt].map(e=>fr(e,350));
[-1,-2,-2,-2,-1,0].map((o,i)=>{cx-=2;fr(Lf,60,U,o,0,i%2?Lf:Rt)});
fr(0,80,0,1);sp(cx+1,3,-.3,-.3,"°","8cf");fr(N,500,"one-up",0,[S(cx+10,3,"phew","text")]);fr("wink",450);
for(i=0;i<17;i++)G=i/2|0,fr(i%6<3?Lf:Rt,i>15?200:70);
return f});
