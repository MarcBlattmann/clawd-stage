// Clawd licks a tall cone; the top scoop wobbles off SPLAT, the rest follow, raincloud. A friend brings a new cone; he gulps it: brain freeze.
$cdA("ice-cream-drop",{title:"Ice cream tragedy",w:40},function(c){
var R=c.R,T=c.T,P=c.P,M=Math.round,W=c.W,x=c.clamp(c.x,0,c.mx-15),X=x,f=c.walk(c.x,x),t=0,ps=[],S="▟▙",K="▗▖",V="▜▛",E="error",Y="chromeYellow",I="#aee4ff",N="#d9a45a",C="closed",G="right",L="left",O="open",J="wink",B={b:1},Q=[T(x+4,2,"!",Y,B)],
st=[],ch=0,sw=0,ct=V,pd=[],px,cx=0,cd=0,fr=W+9,fo=0,fs=0,gx,fc=c.pick(["permission","success","autoAccept"]),col,cl,Z,n,i,j,k,q,
fl=()=>c.pick(["#ff9ccf","#9cf0c0","#b0703c","#fff2b8","#c3a0ff","#ffb05a"]),
wk=(e,j)=>P(e,"down",j%2?L:G),
// particle: x,y,vx,vy per 100ms,life,chars,color,gravity
sp=(a,b,u,v,l,s,k,g)=>ps.push([t,a,b,u,v,l,s,k,g||0]),
H=()=>sp(X+6,3,0,-.5,6,"♥",E),
tg=()=>[T(X+8,4,"~","#ff8fb8")],
rn=()=>sp(X+R(2,6),3,0,.7,2,"'",I),
lk=n=>{for(i=n;i--;)A(wk(C,i),170,0,tg()),i%2||H(),A(i%2?G:J,150)},
// cone k at (q,y), scoops s, top one leans by w, cherry h
cone=(q,y,k,s,h,w)=>{var r=k?[T(q,y,k,N)]:[],l=s.length;s.forEach((a,i)=>r.push(T(q+(i==l-1)*w,y-1-i,S,a)));h&&r.push(T(q+w,y-1-l,K,E));return r},
A=(e,ms,o,g,fp)=>{o=o|0;for(var m=Math.ceil(ms/120),d=ms/m|0,z=0;z++<m;t+=d){var r=[],a;
ps.forEach(p=>{a=(t-p[0])/100;a<p[5]&&r.push(T(p[1]+M(a*p[3]),Math.min(6,p[2]+M(a*p[4]+p[8]*a*a)),p[6][Math.min(a|0,p[6].length-1)],p[7]))});
pd.forEach((a,i)=>r.push(T(px+i,6,"▄",a,{z:-1})));
cx&&r.push(T(cx,6,K,E));cd&&r.push(T(X+2,1,"▗▄█▄▖","inactive"),T(X+2,2,"▝▀▀▀▘","inactive"));
f.push({x:X,pose:e.eyes?e:P(e),ms:d,offset:o,color:col,props:r.concat(cone(X+9,5+o,ct,st,ch,sw),fs?cone(gx,5,V,fs,1,0):[],g||[]),actors:fr>W?[]:[{x:fr,offset:fo,color:fc,pose:fp||P(L)}]})}},
// scoop a falls from (b,y) to the ground at q and splats; h: SPLAT text + cherry
drop=(a,b,y,q,ms,h)=>{for(j=1;j<=6-y;j++)k=b+M((q-b)*j/(6-y)),A(wk(G,j),ms,0,[T(k,y+j,S,a)].concat(h?T(k,y+j-1,K,E):[]));
for(j=0;j<5;j++)sp(q+R(-1,2),5,R(-12,12)/10,-R(5,12)/10,4,"*·",a,.35);A(C,70,1,[T(q-1,6,"▄██▄",a)].concat(h||[]))};

// Cone pops into his hand; scoops plop on from the sky, cherry on top. Licks.
sp(X+11,4,.5,-.5,3,"✦·",Y);A(G,250);
for(n=R(3,4),i=0;i<=n;i++){cl=i<n?fl():E;for(j=0;j<4-i;j++)A(G,40,0,[T(X+9,j,i<n?S:K,cl)]);i<n?st.push(cl):ch=1;sp(X+8,4-i,-.6,0,2,"·",cl);sp(X+11,4-i,.6,0,2,"·",cl);A(i%2?O:G,80,1);A(G,50)}
H();A(J,400);lk(R(2,3));
// The top scoop leans; he notices and tries to balance it.
sw=1;A(wk(C,1),180,0,tg());sw=0;A(G,130);sw=-1;A(G,130);sw=0;A(O,350,0,Q);
[1,0,-1,0,1,2].forEach((s,j)=>{sw=s;A(wk(s>0?G:s<0?L:O,j),j>4?220:110,0,Q)});
// Slow-mo fall, SPLAT, the cherry bounces off. Stare. The rest topples after it.
cl=st.pop();ch=sw=0;q=X+13+R(0,2);Z=[T(q-1,2,"SPLAT!",cl,B)];drop(cl,X+11,4-st.length,q,110,Z);px=q-1;pd=[cl,cl,cl,cl];
for(j=0;j<6;j++)A(j<3?C:O,j<5?80:300,0,Z.concat(T(q+2+j,+"433456"[j],K,E)));
cx=q+7;A(G,350);A(O,300);
while(st.length){sw=1;A(G,130);cl=st.pop();sw=0;drop(cl,X+10,4-st.length,px+R(1,pd.length-2),50);pd.splice(R(0,pd.length),0,cl);A(O,100)}
A(G,350);A(O,450);
// Sad crunch of the empty cone; grey, slumped, raincloud; the puddle melts.
[K,""].forEach(k=>{A(C,180,0,tg());ct=k;sp(X+9,5,-.3,.2,5,"·",N,.3);sp(X+10,5,.3,.2,5,"·",N,.3);A(C,220)});
col="#b08878";cd=1;
for(i=0;i<11;i++){rn();i%3&&(i&1?pd.pop():(pd.shift(),px++));pd.length||(cx=0);A(C,130,1)}
// A friend jogs in with a fresh cone and hands it over.
fs=[fl(),fl(),fl()];
for(i=0,fr=W;fr>X+12;fr-=2)gx=fr-2,i%2||rn(),A(C,35,1,0,wk(L,i++));
fr=X+12;gx=X+10;sp(gx-1,2,-.4,-.4,3,"✦·",Y);sp(gx+2,3,.4,-.4,3,"✧·",Y);A(C,350,1,0,P(L,"one-up"));
cd=0;A(G,300,1);col=void 0;A(G,200,0,Q);gx--;A(G,120);st=fs;fs=0;ch=1;ct=V;
// Joy: both hop; the friend waves and leaves; more licks.
[1,0,-1,0,1,0,-1,0].forEach((o,j)=>{fo=o;j%4==3&&H();A(o>0?C:J,o?100:80,o,0,P(O,"up"))});
for(i=0;i<4;i++)A(J,120,0,0,P(L,i%2?"one-up":"down"));
for(i=0;fr<=W;fr+=2)A(G,35,0,0,wk(G,i++));
lk(1);
// Gulps it all at once... brain freeze.
A(G,300);k=cone(X+8,6,V,st,1,0);ct="";st=[];ch=0;A(C,150,1,k);Z=[T(X+2,1,"GULP!",Y,B)];
for(j=0;j<6;j++)sp(X+10,3,R(-2,12)/10,-R(3,9)/10,4,"*✦·",fl(),.3);
A(C,100,-1,Z);A(J,400,0,Z);col=I;A(O,350,0,Q);
for(i=0;i<14;i++){X=x+i%2;i%2||sp(X+R(0,8),R(2,3),R(-4,4)/10,-.4,4,"❄*·",I);A(C,45)}
X=x;col=void 0;A(O,200);A(J,450);f.push({pose:"default",ms:200});return f});
