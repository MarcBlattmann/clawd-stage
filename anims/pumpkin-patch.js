// Night pumpkin patch: Clawd carves and lights a jack-o-lantern, the field glows in a wave, a crow lands on the scarecrow.
$cdA("pumpkin-patch",{title:"Pumpkin patch",w:70,scene:1},function(c){
var f=[],W=c.W,M=Math,P=c.P,Q=c.T,R=c.rng(c.R(1,1e6)),T=0,DN,TW,TO,TC,TF,TL,TB,i,k,o,
X=c.clamp(c.x,0,c.mx-12),x=c.x,bx=X+10,cv=0,ps=[],FP=[],S=[],Cr=[],f3=[],f4=[],vn=[],pn=1,mX,ab=M.abs,
cl=v=>v<0?0:v>1?1:v,md=(v,n)=>(v%n+n)%n,inB=j=>j>8&&j<66,
r="right",l="left",u="one-up",cz="closed",wk="wink",tx="text",OR="#d8701c",LO="#f08a28",Y="#ffe68a",YL=()=>c.pick(["#ffd040","#ffb020",Y]),
lo=M.max(X+20,65),hi=W-8,s=lo>hi?X>7?M.min(2,X-8):hi:hi-(R()*M.min(40,hi-lo+1)|0),dr=s>W/2?1:-1,CH=M.max(16,W/8|0);
DN=TW=TO=TC=TF=TL=TB=1e9;
for(k=30;k--&&(mX=R()*(W-7)|0,ab(mX-s)<10||ab(mX-X-8)<11););
for(i=0;i<W/18;i++)S.push([R()*W|0,R()*3|0,R()]);
for(i=0;i<2+W/90;i++)Cr.push([R()*W,R()*2|0,(R()>.5||-1)*(.007+R()*.01),R()*9]);
// field (tiny pumpkins in the banner box), fence, vines
for(i=R()*4|0;i<W-4;)if(i>X-6&&i<X+18||i>s-5&&i<s+9||i>5&&i<40)i++;else k=inB(i)||inB(i+3),FP.push({x:i,m:k,d:ab(i-bx-3),o:R()*800}),i+=k?14+R()*10|0:6+R()*7|0;
for(i=0;i<W;i++)k=i==pn&&(pn+=4+R()*3|0),o=R(),f3[i]=k?o<.2?"/":o<.35?"\\":"┼":o<.04?" ":"─",f4[i]=inB(i)?" ":k?f3[i]=="┼"?"┴":f3[i]:"─",vn[i]=inB(i)||R()<.04?" ":"~~-,"[R()*4|0];
var a,g,sc=()=>{var Z=[],j,p,y,t,k,
D=e=>(e=ab(e-X)/W,M.ceil(7*M.max(1-cl((T-e*700)/250),cl((T-DN-600+e*600)/250)))),
q=(x,y,t,C,e,b)=>{y+=e==null?0:D(e);y<7&&y>=0&&t.trim()&&Z.push({x,y,t,c:C,bg:b||void 0,z:-1})},
L=(a,y,C)=>{for(j=0;j<W;j+=CH)q(j,y,a.slice(j,j+CH).join(""),C,j+CH/2)},
A=(l,C)=>l.map((t,j)=>q(s,j+1,t,C,s+3)),
w=n=>(t="^-_-"[md(n,4)|0])+"v"+t;
if(a>.05){S.map((v,j)=>a>v[2]*.9&&q(v[0],v[1],md(j*5+(T/250|0),11)?"·":"✦",c.hsv(240,.12,a*(.4+v[2]*.5))));
y=M.ceil(3*(1-a));[" ▄▓██▄","██████▓"," ▀█▓█▀"].map((l,j)=>y+j<3&&q(mX,y+j,l,c.hsv(28,.78,a*.96)));
Cr.map(v=>q(md(v[0]+T*v[2],W+6)-3|0,v[1]+(M.sin(T/300+v[3])>.5),w(T/110+v[3]),c.hsv(270,.25,a*.72)))}
if(T>TC){p=cl((T-TC)/1500);t=T>TF?(T-TF)/25:0;
q(M.round(c.lerp(dr>0?W+2:-4,s+3,p)+dr*t)-(p<1||t>0),p<.75?1+(M.sin(T/200)>0):0,p<1||t?w(T/90):dr>0?"▀▄":"▄▀","#a090bc");
T>TC+2e3&&T<TC+2700&&q(dr>0?s-3:s+6,0,"caw!",tx)}
L(f3,3,"#8a6e52");L(f4,4,"#7a5e46");L(vn,6,"#4f8a3c");
A(["  ▗█▖","  ▀ ▀","","","   │","   ┴"],"#8a5a30");A(["","   ●","*── ──*"],"#e0b858");A(["","","   ▓","  ▐▓▌"],"#c0503c");
FP.map(p=>{t=TW+p.d*1800/W;var l=T>t&&T<TO+p.o,C=l?YL():OR;
p.m?q(p.x,6,"●",C,p.x):q(p.x,5,"▗▟▙▖",l?LO:OR,p.x)|q(p.x,6,l?"◥▄▄◤":"▜██▛",C,p.x,l&&"#e07020");
T>t&&T<t+160&&q(p.x+!p.m,p.m?5:4,"✦",Y)});
t=g?T<TL+300?"#a86018":YL():"#5a2810";k=g?LO:OR;
[" ▄▟▙▄","██████","▀████▀"].map((l,i)=>q(bx,4+i,l,k,bx));
[[1,5,"▲"],[4,5,"▲"],[1,6,"▀▄"],[3,6,"▄▀"]].map((v,i)=>i<cv&&q(bx+v[0],v[1],v[2],t,bx,k));
return Z},
pt=(n,x,y,vx,vy,g,t,c)=>{for(;n--;)ps.push({x:x+R()*2,y,vx:vx+R()-.5,vy:vy-R()*.5,g,t,c,i:0})},
add=(p,ms,ex,o)=>{var Z=[];g=T>TL&&T<TB;a=M.min(cl(T/900),1-cl((T-DN)/1200));ps=ps.filter(q=>(q.y<6.5&&q.y>-.5&&Z.push(Q(M.round(q.x),M.round(q.y),q.t[q.i],q.c)),q.x+=q.vx,q.y+=q.vy,q.vy+=q.g,++q.i<q.t.length));
f.push({x,pose:p,ms,offset:o|0,color:g&&T>TL+300?"#ffa46c":c.rgb(215-70*a|0,119-40*a|0,87-15*a|0),props:sc().concat(Z,ex&&ex.call?ex():ex||[])});T+=ms},
hold=(p,ms,ex,o)=>{for(var e=T+ms;T<e;)add(p,80,ex,o)},
kn=()=>[Q(x+9,3,"/",tx)],
cd=(a,b)=>[Q(a,b,"▐","#f2e8cc"),Q(a,b-1,c.pick("♦♦*'"),YL())];
// story
for(;T<1100||x!=X;)x+=M.sign(X-x),add(x==X?P(T%800<400?l:r):P(l,0,f.length%2?l:r),60);
hold(P(r),400);add(P(r,u),160,kn().concat(Q(x+10,2,"✦",Y)));hold(P(wk,u),300,kn);
for(k=0;k<7;k++){o=k>3|0;x=X;add(P(r,u),130,kn);x=X+1;
pt(3,bx+1,3,.8,-1,.4,"▘▗▝▖▘▗▝▖▘",OR);
cv+=k%2||k>5;add(P(k%3?r:cz),70,[Q(x+9,5+o,"──",tx)],o);add(P(r),120,[Q(x+9,5+o,"─",tx)],o)}
x=X;hold(P(),300);add(P(cz),100);hold(P(wk),300);
hold(P(r,u),600,()=>cd(x+8,3));x=X+1;
[[9,3],[10,2],[11,1],[12,1],[12,2],[12,3]].map(v=>add(P(r,v[0]<11&&u),90,cd(X+v[0],v[1])));
hold(P(r),400);TL=T;hold(P(r),320);
pt(5,bx+2,3,0,-.3,0,"✦✦··",Y);
[-1,-2,-1,0].map((o,j)=>{x=X+(j<2);add(P(0,"up"),80,0,o)});hold(P(wk,"up"),400);
TW=T;TC=T+300;[l,r,l].map(e=>hold(P(e),450));
for(i=0;i<6;i++)add(P(i%4?0:wk,"up",i%2?l:r),150);
o=dr>0?r:l;hold(P(o),300);add(P(cz),120,0,1);hold(P(o,u),500);hold(P(wk),300);
TO=T;[l,r].map(e=>hold(P(e),400));x=X+1;
pt(4,x+9,5,.9,.2,0,"~~-·",tx);add(P(cz),300);TB=T+150;
pt(3,bx+2,3,0,-.3,0,"▒░░·","inactive");
hold(P(r),400);x=X;TF=T;DN=T+300;
[l,r,0].map(e=>hold(P(e),550));
f.push({x,pose:"default",ms:300});
return f;
});
