// Canyon rope bridge: planks drop as Clawd creeps over, it snaps, he outruns the collapse and climbs the far cliff.
$cdA("canyon-bridge",{title:"Rope bridge",w:70,scene:1},c=>{
var M=Math,W=c.W,T=c.T,R=c.R,rd=M.round,mn=M.min,mx=M.max,Z={z:-1},f=[],P=[],G=[],dr=[],q=[],MC={},
d=c.x*2<W-8,x=d?c.x:W-9-c.x,x0=mn(x,mx(0,W-63)),E0=x0+11,E1=mn(W-12,E0+120),L=E1-E0,
t=0,al=0,fi=1,lf=0,sw=0,on=0,cf=0,vu=0,vx,sx=R(W/2,W-6),i,j,k,n,e2,e3,e4,
m=["",""],cl=[],eL=[],eR=[],MR="▌▐▟▙/\\()",LT="left",RT="right",CL="closed",U="up",O="one-up",I="inactive",BL="rainbow_blue",
bx=(i,y,u)=>y>3&&(u=d?i:W-1-i)>9&&u<65,
mp=(p,s)=>(d||(s=p.t,p.x=W-p.x-s.length,p.t=MC[s]||(MC[s]=[...s].reverse().map(h=>MR[MR.indexOf(h)^1]||h).join(""))),p),
E=e=>!d&&{left:RT,right:LT}[e]||e,
H=(h,s,v)=>c.hsv(h,s,v*al),
ln=(A,y,a,b,F,C,s,i)=>{for(s="",i=a;i<b;i++)s+=F(i)||" ";s&&A.push(T(a,y,s,C,Z))},
dp=(i,z)=>{i-=i-E0&1;i>=E0&&i<E1&&!G[i]&&(G[i]=G[i+1]=1,z||P.push({x:i,y:dr[i],v:R(-3,3),u:-2,h:"─\\│/",c:H(36,.65,.72),w:1,l:3}))},
ad=n=>{for(;n-->0&&cf<E1;cf++)dp(cf,R(0,1))},
B=(e,A,s,a,j,C,u,h)=>{A=[];s=4-lf;a=mx(E0,cf);
 if(al>.15){C=H(275,.25,.5);A.push(T(0,1,m[0],C,Z),T(0,2,m[1],C,Z),T(sx,0,"☀",H(48,.9,1),Z),...[1,2,3].map(o=>T(rd(o*W/3+sx+t/800)%(W+8)-6,o&1,"░▒▓▒░",H(0,0,.7),Z)));
  vu&&A.push(T(rd(vx),0,t/200&1?"\\v/":"─v─",H(0,0,.7),Z))}
 if(lf){cl.forEach((o,j)=>A.push(T(0,3+j+s,o,H(35-7*j,.42,.78-.11*j),Z)));
  ln(A,6+s,eL[3]+1,eR[3],(i,k)=>(k=(i+(t/150|0))%9,bx(i,6)&&k>1?0:"≈~~-~≈~~-"[k]),H(195,.7,.9));
  C=H(36,.65,.72);
  for(j=1;j<6;j++)j<5&&ln(A,j+s,a,E1,(i,r)=>(r=q[i]>>2)==j?"⠉⠒⠤⣀"[q[i]&3]:(i-E0)%7==3&&!G[i]&&r<j&&j<dr[i]&&"│",H(45,.35,.8)),
   j>2&&ln(A,j+s,E0,E1,i=>!G[i]&&dr[i]==j&&(bx(i,j+s)&&i&1?0:"▀"),C);
  for(j=0;j<4;j++)u=j>1&&t/300&1,h=j&1?"╪":"│",j<2&&A.push(T(E0-1,j+1+s,"┃",C,Z),T(E1,j+1+s,"┃",C,Z)),
   cf>E0+5&&A.push(T(eL[j]+1+u,3+j+s,h,C,Z)),cf>=E1&&A.push(T(eR[j]-1-u,3+j+s,h,C,Z))}
 P.forEach(p=>A.push(T(rd(p.x),rd(p.y),p.h[(t/70|0)%p.h.length],p.c)));
 return A.concat(e||[]).map(mp)},
fr=(e,a,g,ms,X,o,N,D,i,u,p,b)=>{t+=ms;al=c.clamp(al+fi*ms/900,0,1);vx=vu>1?vx+3:E0+L/2+9*M.sin(t/500);N=[];D=ms/1e3;
 P=P.filter(u=>(u.u+=16*D,u.x+=u.v*D,u.y+=u.u*D,u.y>6.3&&u.w&&N.push({x:u.x,y:6,v:0,u:-6,h:"°·",c:BL,l:.4}),u.y<6.5&&(u.l-=D)>0)).concat(N);
 // deck and rope sag
 for(i=E0;i<E1;i++)u=(i-E0+.5)/L,p=4*u*(1-u),b=on*mx(0,1-M.abs(i-x-4)/7),
  dr[i]=3+(p*(.35+sw)+b*.6>.55)+(cf>E0&&i<cf+3),
  q[i]=mn(15,rd(4*(1.2+p*(.95+sw)+b/2+(cf>E0)*mx(0,(cf+8-i)/4))));
 D=x+4;o=o<1?o:(on&&x>=E0-1&&x<E1-7?dr[D]:3)-3-lf;
 f.push({x:d?x:W-9-x,pose:c.P(E(e),a,E(g)),ms,offset:o,props:B(X&&X(4+o))})},
sh=(h,j)=>[T(x-1-(j&1),h+1,"(",I),T(x+9+(j&1),h+1,")",I)],
wt=(g,j)=>{for(j=0;j<6;j++)fr(j?g:CL,j?0:U,0,j?90:150)},
ml=h=>[T(x-2,h+1,"≡",I)];
for(;m[1].length<W;)n=R(3,10),j=R(0,1),k=" ".repeat(R(5,18)),m[0]+=" "+(j?"▄":" ").repeat(n)+" "+k,m[1]+="▟"+"█".repeat(n)+"▙"+k;
m=m.map(s=>s.slice(0,E0-2)+" ".repeat(L+4)+s.slice(E1+2));
for(j=0;j<4;j++){eL[j]=E0-1+(j>1)-R(0,j&&1);eR[j]=E1-(j>1)+R(0,j&&1);
 for(n="",i=0;i<W;i++)k=i<=eL[j]?eL[j]-i:i>=eR[j]?i-eR[j]:-1,n+=k<0?" ":k?k<3||!bx(i,3+j)?"█▓▓▒"[j]:" ":i<E0?"▌":"▐";
 cl[j]=n}
// the canyon rises
for(;x>x0;)x--,fr(LT,0,x&1?LT:RT,45);
for(j=0;j<5;j++)fr(j&1?LT:RT,0,0,110,h=>sh(h,j));
for(;lf<4;fr(CL,U,0,90))for(lf++,i=0;i<5;i++)P.push({x:R(0,W),y:6,v:R(-4,4),u:-R(3,6),h:"·░",c:I,l:.5});
vu=1;fr(0,0,0,300);fr(RT,0,0,500);
fr(RT,0,0,400,h=>[T(x+9,h,"?","warning")]);
for(j=0;j<4;j++)fr(CL,0,0,110,h=>[T(x-1,h+(j>>1),"'",BL)]);
// careful crossing
on=1;n=E0+rd(L*R(42,54)/100)-4-x;e2=n*.3|0;e3=n*.55|0;e4=n*.8|0;
for(k=0;k<n;k++){x++;i=G[x+1]|G[x+2];j=G[x+6]|G[x+7];
 fr(k%9>7?CL:RT,0,j>i?LT:i>j?RT:k&1?LT:RT,55+R(0,30)+1500/L);
 if(k==12||k==e3)dp(x),wt(LT);
 if(k==e2||k==e4)dp(x+14+R(0,3)),wt(RT);
 if(k==e3){for(j=0;j<10;j++)sw=.45*M.sin(j*1.2)*(1-j/10),fr(j<4?CL:j&1?LT:RT,j<4?U:0,0,85,h=>sh(h,j));sw=0}}
// snap! run
fr(RT,0,0,250);
fr(CL,U,0,180,()=>[T(E0-1,0,"✶","chromeYellow"),T(E0,1,"✸","warning")]);
cf=E0;
for(j=0;j<5;j++)ad(c.clamp(x-6-cf,0,3)),fr(LT,0,0,100,h=>[T(x-2,h,"!","error")]);
for(k=0;x<E1-11;k++)x+=2,ad(c.clamp(x-3-rd(9*(E1-x)/L)-cf,1,5)),fr(k%8==5?LT:RT,k&1?U:O,k&1?LT:RT,42,ml);
ad(L);on=0;
for(j=-3;j<0;j++)x=mn(x+1,E1-8),fr(CL,U,0,70,0,j);
// hang, climb, teeter
x=E1-8;
for(j=0;j<6;j++)fr(j<3?CL:RT,U,j&1?LT:RT,j?110:220,h=>j?[]:[T(x+9,h,"✦","warning")],-1);
for(j=2;j<5;j++)x=E1-11+2*j,fr(RT,U,LT,120,0,-j);
for(j=0;j<6;j++)x=E1-3-(j&1),fr(j&2?CL:LT,j&1?U:O,0,110);
for(;x<E1+1;)x++,fr(RT,0,x&1?LT:RT,80);
// phew; the canyon sinks away
fr(0,0,0,200);fr(LT,0,0,650);
for(j=0;j<4;j++)fr(CL,O,0,120,h=>[T(x-1-j,h+(j>>1),"'",BL)]);
vu=2;
for(j=0;j<8;j++)fr(j&1?"wink":0,j&1?U:O,0,140,h=>[T(j&1?x-2:x+10,h+(j&1),"✦",c.rainbow(j))]);
for(fi=-1,j=0;j<8;j++)lf=4-(j+1>>1),fr(j<4?RT:0,0,0,100);
fr(0,0,0,300);
return f});
