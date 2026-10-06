// Enchanted forest: a fairy leads Clawd through a glowing hollow tree to one on the far side.
$cdA("enchanted-forest",{title:"Enchanted forest",w:70,scene:1},function(c){
var M=Math,W=c.W,S=M.sin,U=M.round,P=c.P,V=c.hsv,R=c.R,rr=M.random,rn=c.rng(R(1,1e6)),f=[],E=[],Fy=[],Q=[],
T=0,MO,FO=MO=1e9,K,mg,pa=0,pb=0,sw=0,sx,co=-1,gx=-9,gy,hd=!1,tg=0,x=c.x,i,j,k,
cl=v=>v<0?0:v>1?1:v,H=v=>(v=S(v*127.1)*43758.5)-M.floor(v),B="█",Y="#ffe7a0",N=["left","right"],
d=x+4<W/2?-1:1,xa=d<0?1:W-10,xb=W-9-xa,DA=N[+(d>0)],DB=N[+(d<0)],C=[V(22,.5,.5),V(150,.55,.42),"#e8dcc8",V(115,.5,.4)],
Z=(x,y,t,c,e)=>({x,y,t,c,z:-1,...e}),
qp=(x,y,v,t,c)=>Q.push({x,y,v,t,c}),
tx=(t,k)=>[{x:x+4,y:3,t,c:k||"text",b:1}],
sp=X=>{for(j=0;j<9;j++)qp(X+R(-6,6),R(2,6),.15+rr()*.3,"✦✧·*"[j%4],V(j*50,.4,1))};
// big trees off the banner box, slim ones over it
for(i=14;i<W-26;i+=(j?11:9)+rn()*8|0)j=+(i>64),E.push({k:rn()<.4?2:j,x:i,f:j,r:rn()*.7,p:rn()*6,h:180+rn()*160,t:1+j+(rn()<.5),a:.9+.7*j,m:2+2*j+(rn()<.5)});
E.push({k:3,x:xa-2,r:0},{k:3,x:xb-2,r:.05});
for(i=0;i<W/22+2;i++)Fy.push({x:6+rn()*(W-12),y:1+rn(),rx:2+rn()*5,w:(rn()<.5?-4:4)/1e3,p:rn()*7,h:rn()*360,r:rn()*.6});
function sc(){
var a=M.min(cl(T/1400),1-cl((T-FO)/1400)),L=[],o=[],bd=a<1||!K,y,p,s,h,n,q,v,t,g,k,
put=(k,x,y,s,q)=>{if(bd)for(var r=(L[k]=L[k]||[])[y]=L[k][y]||Array(W).fill(" "),q=0;q<s.length;q++)s[q]>" "&&(r[x+q]=s[q])};
mg=M.min(cl(T/1400),1-cl((T-MO)/1e3));
E.forEach((e,l)=>{if(h=cl((a-e.r)*5)*7){g=7-h;y=e.t;
if(e.k==2){n=V(e.h,.65,(.5+.25*S(T/350+e.p))*mg+.25);
for(t=y+2;t<7;t++)t<g||put(2,e.x+2+!e.f,t,e.f?t>5?"▟█▙":"▐█▌":B);
y+1<g||o.push(Z(e.x,y+1,"▀".repeat(7),n));
y<g||o.push(Z(e.x+1,y,"▄███▄",n),Z(e.x+2,y,"• •","text",{bg:n}))&&mg>.3&&rr()<.08&&qp(e.x+R(1,5),y-1,.12,"°",n)}
else{if(e.k>2)for(n=7,q=e.x-1,y=2;y<7;y++)y<g||put(0,e.x-(y>5),y,y<3?"▐"+B.repeat(11)+"▌":y<4?"▐█▛"+"▀".repeat(7)+"▜█▌":y<6?"▐█         █▌":"▄▟█         █▙▄");
else for(n=e.m,q=e.x-n+e.k,y=2;y<7;y++)y<g||(p=2*e.x+U(2*e.a*S(y*.9+e.p)),k=p>>1,s=e.k?p&1?"▐█▌":"██":p&1?"▐":"▌",y>5&&e.k&&(s=p&1?"▟███▙":"▟██▙",k--),put(0,k,y,s));
v=1+2*(l&1);h>5&&put(v,q,1,"▜"+B.repeat(2*n-1)+"▛");
h>6&&(put(v,q,0,"▗▟"+B.repeat(2*n-3)+"▙▖"),H(l*7+(T/300|0))<.7*mg&&o.push(Z(q+2+l*5%(2*n-3),l%2,"•",Y,{bg:C[v]})))}}});
bd&&(s=[],L.forEach((r,k)=>r.forEach((u,y)=>s.push(Z(0,y,u.join(""),C[k])))),K=a<1?0:s);o=(bd?s:K).concat(o);
[[xa,pa],[xb,pb]].map(u=>{if(v=u[1])for(y=4;y<7;y++)o.push(Z(u[0],y,(v>.6?"▓▒":v>.3?"▒░":"░ ").repeat(5).substr((T/90|0)+y&1,9),V(280,.5,.4+.5*v)))});
Q=Q.filter(q=>(q.y-=q.v)>=0);Q.map(q=>o.push(Z(q.x,U(q.y),q.t,q.c)));
mg>0&&Fy.map((e,l)=>{if(a>e.r+.25)for(j=3;j--;)t=(T-j*90)*e.w+e.p,y=U(e.y+S(2*t)-(1-mg)*5),y>=0&&y<4&&o.push({x:U(e.x+e.rx*S(t)),y,t:j?"·":(T/110+l|0)%2?"✦":"✧",c:V(e.h,.4+j*.1,mg*(1-j*.3))})});
gx>-9&&o.push({x:gx,y:gy,t:(T/90|0)%2?"✦":"✧",c:Y,b:1})&&rr()<.4&&qp(gx,gy,.2,"·",Y);
if(co>=0)for(j=8;j--;)(v=co-j*.02)>=0&&o.push({x:U(xa+4+(xb-xa)*v),y:U(4-2.4*S(M.PI*v)),t:j?j<3?"*":"·":"✦",c:V(T/4+j*40,.4,1-j*.08),b:1});
if(sw)for(y=4;y<7;y++)o.push({x:sx+4-(sw>>1),y,t:sw>2?"▒"+B.repeat(sw-2)+"▒":B.repeat(sw),c:V(275,.3,1)});
return o}
function F(p,ms,o,ex){var g=tg;f.push({x,pose:p,ms,offset:o|0,hide:hd,paint:g?()=>c.rgb(215-15*g,119+60*g,87+168*g):void 0,props:sc().concat(ex||[])});T+=ms}
// a fairy boops him and leads him to the hollow tree
for(i=0;i<15;i++)F(P(i==3?"closed":i<5||i>11?"open":i<9?DA:DB,i>11?"up":"down"),100,0,i>11&&tx("!"));
for(i=0;i<28;i++)k=i*.4,gx=U(x+4+8*M.cos(k)),gy=U(2.4-1.6*S(k)),F(P(N[+(gx>x+4)]),70);
gx=x+4;gy=3;F(P("closed"),300,1);gy=2;F(P("wink"),400,0,[Z(x+6,3,"♥","error")]);
for(i=0;x-xa||gx-xa-4;i++)gx+=c.clamp(xa+4-gx,-3,3),gy=U(2+S(i*.6)),k=i>3&&x-xa,k&&(x+=c.clamp(xa-x,-2,2),i%2&&qp(x+4-d*5,5,.2,"·",Y)),F(P(DA,"down",k?N[i%2]:"both"),50);
gy=3;F(P(DA),120);gx=-9;sp(xa+4);
for(i=0;i<12;i++)pa=i/11,F(P(i<3?"closed":N[i>>1&1]),90,0,i>7&&tx("!","warning"));
// swallowed by the glow, out of the far tree
"right-30 right-75 edge back-125 back".split(" ").map((v,i)=>F({facing:v},i>3?450:70));
for(sx=xa,i=1;i<10;i+=2)sw=i,tg=i/9,F({facing:"back"},70);
hd=!0;tg=0;F(P(),150);sp(xa+4);for(i=9;i>0;i-=2)sw=i,pa-=.2,F(P(),60);sw=pa=0;
x=xb;k=14+W/8|0;for(i=0;i<=k;i++)co=i/k,pb=cl((i-k+6)/6),F(P(),40);co=-1;
sx=xb;sw=9;tg=1;sp(xb+4);F(P(),120);hd=!1;
for(i=9;i>0;i-=2)sw=i,F(P("closed"),80);sw=0;
for(i=8;i--;)tg=i/7,F(P(i>3?"closed":"open"),90);
F(P(DB),350);F(P(DA),500,0,tx("?"));F(P(),250,0,tx("!","warning"));
[0,-1,-2,-1,0].map(o=>F(P("wink","up"),70,o));
for(i=0;i<9;i++)x+=d,pb=1-i/8,F(P(DA,"down",N[i%2]),80);
// the magic fades
MO=T;for(i=0;i<14;i++)F(P(i<9?"open":"closed",i>3&&i<10?"one-up":"down"),90);
FO=T;for(i=0;i<16;i++)F(P(N[i/3&1]),90);
F(P("wink"),450,0,[Z(x+4,3,"✧",Y)]);
f.push({x,pose:"default",ms:250});
return f;
});
