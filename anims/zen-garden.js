// Zen garden: Clawd rakes gravel waves, meditates, a koi leaps the bridge, the garden sinks away.
$cdA("zen-garden",{title:"Zen garden",w:70,scene:1},function(c){
var W=c.W,M=Math,Q=M.round,R=c.rng(c.R(1,1e6)),P=c.P,f=[],T=0,MD=1e9,KJ=MD,FO=MD,O=0,RK=0,RS,LY,A,KX,i,k,
cl=v=>v<0?0:v>1?1:v,Z=P("closed"),E=e=>P(e,"one-up"),
L=c.clamp(W/4|0,16,28),xs=c.clamp(c.x,L,c.mx-3),xe=xs-L,X=c.x,tl=xs+12,rk=xs+12-L/2|0,
PW=c.clamp(W/4|0,24,40),p0=c.clamp(rk-PW/2+R()*16-8|0,1,W-PW-1),p1=p0+PW,pc=p0+PW/2,
bx=p0+4+(R()*(PW-21)|0),dj=xe+4<bx+7?-1:1,jx=dj>0?bx-3:bx+16,
St=[],Ln=[p0-6,p1+1],Mt=[],Kz=[],CL="5a6587 e1e6f0 8cc85f 5a9646 3c78c8 96cdf5 ff8c32 f5f0eb dc3c32 c8b48c 96968c".split(" ").map(h=>"#"+h),FM=CL[5],KO=CL[6],WD="#c09a64",
MA=[0,1,2,3].map(r=>" ".repeat(3-r)+"◢"+"▒".repeat(2*r)+"◣"),
BR=["  ┌"+"┬".repeat(8)+"┐"," ▄"+"▀".repeat(10)+"▄","▀"+" ".repeat(12)+"▀"];
for(i=R()*4|0;i<W;i+=3+R()*(9+W/12)|0){
if(i>p0-14&&i<p1+7){i=p1+4;continue}
if(R()<.3)Ln.push(i),i+=5;
else for(k=2+R()*3|0;k--;)St.push([i++,R()*2|0,!k])}
for(k=1+W/90|0;k--;)Mt.push(R()*(W-8)|0);
for(k=3+(W>150);k--;)Kz.push([k/2+R()*.3,(.006+R()*.004)/(PW-5)]);
var D=x=>80+M.abs(x-(T>FO?X:c.x)-4)/W*900,
V=x=>M.min(cl((T-D(x))/350),cl((FO+D(x)-T)/350)),
K=(x,n)=>M.ceil((n||4)*(1-V(x))),
put=(l,x,y,h)=>{if(x>=0&&x<W&&y>=0&&y<7&&h>" "){var r=LY[l]=LY[l]||[];(r[y]=r[y]||Array(W).fill(" "))[x]=h}},
art=(l,x,y,a,b,s)=>a.map((t,r)=>{if(y+r+s<=b)for(var q=0;q<t.length;q++)put(l,x+q,y+r+s,t[q])}),
sp=(x,u)=>{if(u>=0&&u<.5){var w=u*8|0;A.push(c.T(x-w,2,"("+" ".repeat(w*2+1)+")",FM));u<.25&&A.push(c.T(x-1,1,"°   °",FM),c.T(x+1,0,"·",FM))}},
sc=()=>{LY=[];A=[];var q,y,u,m,v=V(pc),b=(.35+.65*cl((T-MD)/1500))*(.85+M.random()*.15),B=[];
Mt.map(x=>{q=K(x+4);art(0,x,0,MA,3,q);art(1,x+3,0,["◢◣"],3,q)});
St.map(([x,t,d])=>{var e=x<10||x>64?6:3,w=Q(M.sin(T/(T>MD&&T<FO?1600:700)+x*.6)*.8);q=K(x,e+1);
for(y=t;y<=e-q;y++)put(3,x,y+q,y>t?(y+x)%2?"╂":"┃":"╲┃╱"[w+1]);
q||d&&put(2,x+1,t+1,"╱")});
for(i=p0;i<p1;i++)M.abs(i+.5-pc)<v*PW/2&&(put(4,i,3,"≈"),(i*7+(T/300|0))%11<2&&put(5,i,2,"~"));
v<1||Kz.map((z,n)=>{u=z[0]+T*z[1];m=u%2;(n||T<KJ||T>KJ+1700)&&art(6+n%2,p0+1+Q((m<1?m:2-m)*(PW-5)),3-n%2,[m<1?"><>":"<><"],3,0)});
K(pc)||put(10,p0-1,3,"◣")|put(10,p1,3,"◢");
art(8,bx,1,BR,3,K(bx+7));
Ln.map(x=>{q=K(x+2);art(10,x,0,["  ▲","◢███◣"," ▌●▐"," ▟█▙"],3,q);q||put(11,x+2,2,"●")});
for(i=xe+12;i<xs+12;i++)V(i)>.5&&put(9,i,6,i<tl?i%4-1?" ":".":"(    )"[i-rk+2]||"≈~"[i%2]);
art(10,rk,6,["▟▙"],6,K(rk));
LY.forEach((r,l)=>r.forEach((a,y)=>B.push(c.T(0,y,a.join(""),l<11?CL[l]:c.rgb(255*b,200*b,90*b),{z:-1}))));
u=(T-KJ)/1100;if(u>=0&&u<=1){KX=jx+Q(u*19*dj);A.push(c.T(KX,M.max(0,3-Q(M.sin(M.PI*u)*4.5)),dj>0?"><>":"<><",KO))}
sp(jx,u);sp(jx+19*dj,u-1);
return B.concat(A)},
RA=()=>RK?c.art(X+9,4+(RK>1&&RS),RK>1?["│","│","ш"]:["╲"," ╲","  ш"],WD):[],
bub=()=>[0,1].map(n=>{var u=((T-MD)/1500+n/2)%1;return c.T(X+4+Q(M.sin(u*6+n*3)*1.5),3+O-(u*4|0),"°·"[n],"inactive")}),
fr=(p,ms,e)=>{T>FO&&(RS=K(X+9,3));f.push({x:X,pose:p,ms,offset:O,props:sc().concat(RA(),e||[])});T+=ms},
lk=()=>P(KX+1>X+4?"right":"left");
// rise, walk over, rake pops up
while(T<1400)fr(P(T<500?"left":T<1000?"right":"wink"),100);
c.walk(c.x,xs).forEach(r=>{X=r.x;fr(r.pose,r.ms||60)});
for(RK=2,k=4;k--;)RS=k,fr(E("right"),90);
fr(E("wink"),350);
// rake waves
RK=1;for(k=1;k<=L;k++){X=xs-k;tl=X+12;fr(P(k%9==5?"closed":"right","one-up",k%2?"left":"right"),105,k%3?[]:[c.T(X+12,5,"·",WD)])}
RK=2;fr(E("right"),400);fr(E("wink"),500,[c.T(rk,4,"✦","warning")]);
// meditate, float
MD=T;O=1;fr(Z,300);
while(T<MD+3300)O=M.min(1,M.max((T/450|0)%2-2,(MD+2e3-T)/200|0)),fr(Z,150,bub());
// koi leap, splash, cheer
KJ=T;while(T<KJ+1100)fr(T<KJ+300?Z:T<KJ+600?P("wink"):lk(),60);
fr(Z,80,[c.T(X+4,O+2,"!","warning",{b:1})]);
[-1,0,1,0].map(o=>{O=o;fr(Z,70)});
fr(lk(),300);
for(k=0;k<6;k++)fr(P(k>3?"wink":lk().eyes,k%2?"up":"one-up"),130,[c.T(X+(k%2?10:X>1?-2:12),2-(k>>1)%2,"♪","success")]);
O=1;fr(Z,450);O=0;fr("default",250);
// sink away
FO=T;while(T<FO+1400)fr(P(T<FO+500?"left":T<FO+1000?"right":"open"),100);
f.push({x:X,pose:"default",ms:300});
return f});
