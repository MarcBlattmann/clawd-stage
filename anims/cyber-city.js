// Rainy neon city: Clawd hoverboards a lap, hops a flying car, kickflips under a sign, then the neon dies.
$cdA("cyber-city",{ scene: 1,title:"Cyber city",w:70},function(c){
var W=c.W,M=Math,f=[],T=0,R=c.rng(c.R(1,1e6)),q=(a,b)=>a+R()*(b-a+1)|0,x0=c.x,xx=x0,d=x0<14?-1:x0>c.mx-14?1:c.pick([1,-1]),P=c.P,U=P("open","up"),Wk=P("wink"),
Ey=d>0?"right":"left",Bk=d>0?"left":"right",PK="#ff4fd8",CY="#3ff0ff",VI="#b46bff",LT="#ffd27a",DM="#4d3a5e",GR="#6a6a8a",
ON=900,PD=1e9,SK=1e9,FL=0,BK,BL,BP,g,e,B=[],S=[],Lp=[],i,j,b,w,
H=v=>(v=M.sin(v)*1e4)-M.floor(v),cl=v=>v<0?0:v>1?1:v,
lt=(i,l,o,a=T-ON-l,z=T-PD-o)=>a<0||z>400?0:a<400||z>0?H(i*9+(T/45|0))>.5:H(i*5+(T/80|0))>.06,
sk=l=>M.ceil(4*M.max(1-cl((T-l)/300),cl((T-SK-l)/300))),
G=()=>g=[[],[],[],[],[],[],[]],
put=(X,y,s,C,bg)=>{for(var m=0;m<s.length;m++,X++)if(s[m]>" "&&g[y])e=g[y][X]||BL[y][X],g[y][X]=[s[m],C,e=bg!=null?bg:e&&e[0]=="█"?e[1]:"",C+e]},
F=(A=[])=>(g.forEach((r,y)=>{var o={},k,s;r.forEach((e,X)=>{s=o[k=e[3]]||(o[k]={x:X,t:"",e});s.t+=" ".repeat(X-s.x-s.t.length)+e[0]});for(k in o)s=o[k],A.push({x:s.x,y,t:s.t,c:s.e[1],z:-1,bg:s.e[2]||void 0})}),A),
BW=" "+c.pick("ARCADE NEON NOODLES CYBER".split(" "))+" ",BX=c.clamp(x0+4-(BW.length>>1),0,W-BW.length);
for(i=0;i<W;i+=w+q(1,3)){w=q(4,10);B.push(b={x:i,w,t:R()<.3?0:q(1,3),d:R()*600,o:R()*1200,p:"▒▌▐▓"[q(0,3)],c:c.hsv(230+q(0,2)*20,.5,.4)});
var t=c.pick("BAR NEO 24H SUSHI HOTEL BYTE ♥ LOVE OPEN".split(" ")),v=b.t<2&&t.length==3&&R()<.5;
b.t<3&&R()<.8&&(v||t.length<w-1)&&S.push({b,t,v,x:v?i+(R()<.5?0:w-1):i+(w-t.length>>1),y:v?1:b.t+1,c:c.pick([PK,CY,PK,CY,VI,LT]),d:R()*900,o:R()*1300})}
for(i=q(3,8);i<W;i+=q(20,28))(i<8||i>66)&&Lp.push([i,R()*600]);
var scene=()=>{
var j,n,r,X,Y,p,A,k=B.map(b=>sk(b.d)+(b.on=T>ON+b.d&&T<PD+b.o)).join();
k!=BK&&(BK=k,BL=G(),B.forEach((b,n)=>{r=sk(b.d);for(j=b.t;j<4;j++)if((Y=j+r)<4)for(X=0;X<b.w;X++){var wn=X%2&&X<b.w-1&&j>b.t,li=wn&&b.on&&H(n*31+X*7+j*13)<.13;
put(b.x+X,Y,wn?b.p:j==b.t&&n%3<1?"▄":"█",li?LT:b.c,li?b.c:"")}}),BP=F());G();
S.forEach((s,n)=>{r=sk(s.b.d);for(j=0;j<(s.v?3:1);j++)(Y=s.y+j+r)<4&&put(s.x,Y,s.v?s.t[j]:s.t,lt(n,s.d,s.o)?s.c:DM);(p=T-PD-s.o)>0&&p<450&&put(s.x-1+q(0,s.v?2:s.t.length+1),s.y+q(-1,2),"*✦·"[n%3],LT)});
Lp.forEach((l,n)=>{r=sk(l[1]);for(j=0;j<3;j++)put(l[0],4+j+r,"◆│┴"[j],!j&&lt(50+n,l[1],l[1]*2)?n%2?PK:CY:GR)});
[[0,.08,PK],[1,-.055,CY],[2,.035,VI]].forEach((l,n)=>{var a=(T-1e3-n*400)*M.abs(l[1]),s=c.tile("-=▄"+(l[1]>0?"▟█▙":"▙█▟")+"▄•"+" ".repeat(50+n*9),0,0,8-a).t;
for(X=0;X<W;X++)(Y=l[1]>0?X:W-1-X)<a&&put(X,l[0]-M.max(0,(T-PD-900)/150|0),e=s[Y],e=="•"?LT:l[2])});
var I=M.min(cl((T-200)/1200),1-cl((T-PD-1500)/1000));
for(n=0;n<W/7;n++)if(H(n*1.37)<I){p=(T/50+H(n*7.7)*9)%9;Y=(p|0)-2;X=(H(n*3.1)*(W+4)|0)-(p/2|0);Y>=0&&(Y<4||X<10||X>64)&&!(g[Y][X]||BL[Y][X])&&put(X,Y,Y>5?".":"/","#5f7fb8","")}
A=BP.concat(F());
T>500&&T<SK+400&&A.push(c.T(BX,0,BW,FL?(T/80|0)%2?PK:CY:lt(97,300,1500)?PK:DM,{b:1,bg:"#2a1236",o:1}));
return A},
add=(pose,offset,ms,p,hide)=>{f.push({x:xx,pose,offset,ms,hide,props:scene().concat(p||[])});T+=ms},
brd=(X,o,s,fi,C)=>[c.T(X,7+o,s||"◥▀▀▀▀▀▀▀◤",C||CY,{b:1}),c.T(d>0?X-2:X+9,7+o,fi?d>0?"░▒":"▒░":" ",c.pick([PK,VI]))],
on=(pose,o,ms,ex,s,fi,C)=>add(pose,o,ms,brd(x0,o,s,fi,C).concat(ex||[])),
spk=()=>[0,1,2,3].map(()=>c.T(x0+c.R(-3,11),c.R(1,5),c.pick("✦*·+"),c.pick([PK,CY,LT])));
for(i=0;i<15;i++)add(P(i==10?"closed":i<4?"open":i<8?Bk:Ey),0,95);
var st=x0-d*12,s0=d>0?-11:W+2;
for(i=1;i<9;i++)add(P(Bk,"one-up"),0,50,brd(M.round(c.lerp(s0,st,1-(1-i/8)**2)),-1,0,1));
[[Wk,0,300,st],[P(Bk),1,130,st],[U,-2,70,st+d*6],[U,-2,70,x0],[Wk,-1,200,x0]].forEach(a=>add(a[0],a[1],a[2],brd(a[3],-1,0,a[1]<0)));
var L=W+9,V=W>100?2:1,wx=p=>((x0+9+d*p)%L+L)%L-9,xd=c.clamp(wx(L>>1),12,c.mx-12),iD=M.round(((d*(xd-x0))%L+L)%L/V),n,p=0;
for(n=0;p<L;n++){p=M.min(n*V,L);var X=wx(p),k=n-iD,dg=k>-4&&k<3,o=dg?[-2,-3,-3,-3,-3,-2][k+3]:-1,cx=X+1-d*k*(V+3),ex=brd(X,o,0,1);
k>-14&&ex.push(c.T(cx,5,d>0?"•▄▟██▙▄≡":"≡▄▟██▙▄•","#ffb347"),c.T(cx+3,4,k>-7&&k<-2?"!!":" ","error"));
add(P(k>-3&&k<1?"closed":k>1&&k<6?Bk:Ey,dg?"up":"down"),o,34+M.max(0,8-n,9-(L-p)/V)*10+(k>-3&&k<2?45:0),ex,M.abs(X-xx)>2,xx=X)}
on(P(Ey),-1,220);on(P("open","one-up"),-1,320);on(Wk,-1,200);
FL=1;on(U,-2,60,0,0,1);
(j="right-30 right-75 edge back-125 back left-75 left-30".split(" "),d>0?j:j.reverse()).forEach((fc,n)=>on({facing:fc},-3,65,spk(),n%2?" ═══════ ":n%4?0:"◢▄▄▄▄▄▄▄◣"));
on(P("wink","up"),-2,70,spk());
for(i=0;i<6;i++)on(P(i%2?"open":"wink","up"),-1,110,spk());
FL=0;PD=T;
for(i=0;T<PD+1850;i++)on(P(T>PD+1500?"closed":(i/5|0)%2?Bk:Ey),-1,90,0,0,i%3);
for(i=0;i<3;i++)on(P(),-1,99,0,0,0,i%2?CY:GR);
add(P("closed","up"),0,60);add(j=P("closed"),1,110);add(j,0,200);
SK=T;
for(i=0;T<SK+1200;i++)add(P(i<4?Bk:i<8?Ey:"wink",i>9?"one-up":"down"),0,100);
f.push({x:x0,pose:"default",ms:300});
return f;
});
