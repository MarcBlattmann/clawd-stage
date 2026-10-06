// Autumn trees shed leaves in the wind; Clawd rakes a pile, takes a run-up and dives in; leaves burst everywhere, the bare trees fade.
$cdA("autumn-leaves",{ scene: 1,title:"Autumn leaves",w:70},c=>{
var M=Math,W=c.W,R=M.random,T=c.T,P=c.P,rd=M.round,ab=M.abs,mn=M.min,rg=c.rng(c.R(1,1e6)),f=[],t=0,al=0,FO=1e9,b=0,br=.02,wd=2,q=.5,yd=1,qk,rl,
dir=c.pick([1,-1]),LR=[],BR=[],Q=[],L=[],S=0,g=0,G6="",Z={z:-1},RT="right",LT="left",CL="closed",WK="wink",U="one-up",A,
L0=c.R(14,17),xs=c.clamp(c.x,0,c.mx-L0-14),PC=xs+L0+17,x=c.x,i,j,k,e,w,h,r,cx,y,a,d,
fg=i=>(i<9||i>65)&&(i<xs-2||i>PC+6),
HC={},hv=(h,v,k)=>HC[k=[h|0,v,al]]||(HC[k]=c.hsv(h,.85,(v||1)*al)),
lf=(x,y,h,vx,vy)=>({x,y,h,vx:vx||0,vy:vy||.3,s:c.pick(["♦~","◆-","♦◆","•~"]),p:R()*9,k:.5+R()*.7,l:3+R()*3}),
rw=(B,y,col,ok,dx)=>{var s="",p=-1,x0;B.forEach(e=>{if(ok(e)){p<0?x0=e[0]:s+=" ".repeat(e[0]-p-1);s+=e[2];p=e[0]}});p<0||A.push(T(x0+(dx|0),y,s,col,Z))},
mnd=(cx,H,sl,dx)=>[4,5,6].map(y=>{for(var s="",j=-5,h;j<6;j++)h=rd(2*(H-ab(j)*sl))-12+2*y,s+=h>1?"▓▓▒"[(j+y+9)%3]:h>0?"▄":" ";return T(cx-5+(dx|0),y,s,hv(70-y*9))}),
sc=()=>{var y,k,bc=c.hsv(25,.5,.6*al);A=[];
 ab(wd)>5&&A.push(c.tile("~~         -~                  ~         ",3,"subtle",-t*wd/300,Z));
 for(y=0;y<7;y++){rw(BR[y],y,bc,e=>e[3]<=b&&e[3]<al*2-1);
  for(k=0;k<3&&y<3;k++)rw(LR[k*3+y],y,hv(4+k*19),e=>e[3]>b&&e[3]<al*1.3,y?0:ab(wd)>6&&t/250&1?M.sign(wd):0)}
 A.push(T(0,6,G6,hv(25,.5),Z));
 al>.4&&rl&&A.push(T(rl,6,"───E",bc,Z));
 L.forEach(e=>A.push(T(e[0],6,e[1],hv(e[2]),Z)));
 S&&A.push(...mnd(PC,mn(3,S/6),.5,qk));
 Q.forEach(p=>A.push(T(rd(p.x),rd(p.y),p.s[p.y<6?t/130+p.p&1:0],hv(p.h))));
 return A},
// physics: shed, fly, land in the yard or on the pile
st=ms=>{var s=ms/1000,ob=b;t+=ms;al=M.max(0,mn(1,t/900,(FO-t)/900));b=mn(1.1,b+br*s);
 LR.forEach(B=>B.forEach(e=>e[3]>ob&&e[3]<=b&&R()<q&&Q.length<50&&Q.push(lf(e[0],e[1],e[4]))));
 Q=Q.filter(p=>{p.vy=mn(p.vy+5*s,1.3);p.vx*=1-mn(1,2.5*s);
  p.x+=(p.vx+wd*p.k+M.sin(t/200+p.p)*2.5)*s;p.y=mn(6,p.y+p.vy*s);
  if(p.y>5.5&&yd){if(p.x>xs+9&&p.x<PC-5)return L.push([rd(p.x),p.s[0],p.h]),0;if(ab(p.x-PC)<4)return S+=.3,0}
  return p.x>-2&&p.x<W+1&&(p.l-=s)>0})},
fr=(o,ex)=>{if(o.x!=null)x=o.x;st(o.ms||60);o.props=sc().concat(ex||[]);f.push(o)},
ad=(pose,ms,o,ex)=>fr({x,pose,ms,offset:o|0},ex),
rk=l=>c.art(x+9,4+l,["\\"," \\"," ┬┬┬"],"#a87850"),
hl=(y,dx)=>[T(x+4+dx,y,"♦",hv(0),{b:1})];
// trees: crowns rows 0-2, branches behind, trunks
for(i=0;i<9;i++)LR[i]=[],BR[i]=[];
for(i=c.R(0,3);i<W-4;i+=w+c.R(3,8)){
 w=rg()<.5?5:7;h=rg()<.7?3:2;k=rg()*3|0;cx=i+(w>>1);a=rg()<.5||-1;
 for(j=0;j<h;j++)for(y=3-h+j,r=(w>>1)-(!j||j==h-1&&h>2),e=-r;e<=r;e++){d=rg()*.6+.4-ab(e)*.4/r;
  LR[k*3+y].push([cx+e,y,ab(e)==r?j?"▀":"▄":"▓▓█▒"[rg()*4|0],d,k*19+rg()*12]);
  (!j&&ab(e)<2||!e||j==1&&e==a)&&BR[y].push([cx+e,y,e?e<0?"\\":"/":"│",d])}
 for(y=3;y<(fg(cx)?7:4);y++)BR[y].push([cx,y,y>5?"┴":"│",-1])}
for(i=0;i<W;i++)G6+=fg(i)&&rg()<.07?",.'♦"[rg()*4|0]:" ";
for(i=0;i<L0*.6;i++)L.push([c.R(xs+12,PC-6),c.pick("♦◆•"),c.R(0,45)]);
c.walk(c.x,xs).forEach(o=>fr(o));
while(t<1200)ad(P(t<600?LT:RT),120);
// gust, leaf on head
wd=dir*9;br=.13;
for(i=0;i<34;i++)y=(i-10)*.16,ad(P(i>31?CL:i>24?0:dir>0?RT:LT),i>31?160:85,0,y<0?[]:hl(rd(mn(3,y)),y<3?rd(M.sin(i*.7)):0));
ad(P(),450,0,hl(3,0));
wd=dir*3;br=.03;
for(i=0;i<6;i++)ad(P(CL,0,i&1?LT:RT),60,0,hl(3-(i>3),i&1));
Q.push(lf(x+5,2,6,dir*6,-3));
ad(P(WK),300);
// rake
ad(P(RT),350,0,[T(x+4,2,"!","warning")]);
for(i=2;i>=0;i--)ad(P(RT,U),90,0,rk(i));
ad(P(WK,U),300,0,rk(0));
for(i=0;i<L0;i++){x++;L=L.filter(e=>e[0]>x+13||(g++,0));
 i%3>1&&g&&Q.push(lf(x+14,5,9,3,-2.5));
 ad(P(RT,U,i&1?LT:RT),100+c.R(0,40),0,rk(0).concat(g?mnd(x+14,mn(1.4,g*.3),.7):[]))}
S+=g+2;
for(i=0;i<4;i++)x+=i&1||-1,i&1&&(S+=3,Q.push(lf(PC+c.R(-2,2),4,30,c.R(-6,6),-3))),ad(P(i&1?RT:CL,U,i&1?RT:LT),i&1?90:200,0,rk(0));
S=M.max(S,18);
ad(P(WK,U),400,0,rk(0));
rl=x+8;ad(P(RT),200);
// run-up, dive
c.walk(x,x-8,{moon:1,turn:0,ms:70}).forEach(o=>fr(o));
ad(P(RT),450);ad(P(RT),250,1);
while(x<PC-12)x++,ad(P(RT,x&1?U:0,x&1?LT:RT),35,0,[T(x-3,5,"≡","inactive")]);
[-1,-2,-3,-3,-3,-2,-1,0,1].forEach(o=>{o<1&&x++;ad(P(0,"up"),45,o)});
for(i=0;i<6;i++)qk=i>1?i&1||-1:0,fr({x,hide:true,ms:i<2?220:60});
// boom
qk=S=yd=0;wd=dir*10;br=.8;q=.7;
for(i=0;i<mn(60,30+W/8);i++)Q.push(lf(PC+c.R(-5,5),c.R(3,6),c.R(0,45),(R()-.5)*150,-2-R()*6));
L.forEach(e=>Q.push(lf(e[0],6,e[2],0,-2-R()*3)));L=[];
[-2,-3,-3,-2,-1,0].forEach((o,i)=>ad(P(i<3?CL:WK,"up"),i?70:50,o));
for(i=0;i<20;i++)ad(i%10<4?P(i&1?WK:0,"up"):P(i&2?LT:RT),90,i%10<4?-(i&1):0);
wd=dir*3;
ad(P(LT),500);ad(P(RT),500);ad(P(CL),400);
FO=t+1000;Q.forEach(p=>p.l=mn(p.l,R()));
while(t<FO)ad(P(t<FO-500?0:WK),100);
return f.concat({x,pose:P(),ms:300});
});
