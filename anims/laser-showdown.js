// Laser duel: the beams lock in a crackling power struggle that blows up in both faces.
$cdA("laser-showdown",{title:"Laser showdown",w:48},function(c){
var G=c.G,R=c.R,T=c.T,W=c.W,K=c.clamp,pk=c.pick,M=Math,O=M.round,Z=M.random,B={b:1},Y="warning",C="closed",l="left",r="right",Q="inactive",U="up",H="text",V="wink",N="one-up",P="open",
D=M.min(R(30,34),c.mx-9),X=K(c.x,4,c.mx-D-4),F=X+D,Fx,f=c.walk(c.x,X),ps=[],L=0,hA=R(330,350),hB=R(170,200),a0=X+11,b0=F-3,mid=a0+b0>>1,la=0,lb=0,da=R(0,2),db=da?0:R(0,2),i,j,k,m,n,s,d,e,z,
wz=n=>{z=n>70?2:1;s=K(O(1800*z/n),20,45)},
bc=(h,d)=>c.hsv(h,d?.3:.85,1),
add=(x,y,n,v,t,q,w)=>{while(n-->0)ps.push({x,y,u:(Z()-.5)*v+(w||0),v:-Z()*v/2,l:R(3,8),t:t||pk("*✦·+'"),c:q||pk([bc(hA),bc(hB),Y,H])})},
bz=(x,n,h,d)=>n>0?[T(x,G,"═".repeat(n),bc(h,d),B)]:[],
bm=d=>bz(a0,m-a0,hA,d).concat(bz(m+1,b0-m,hB,!d)),
hd=(t,q)=>[X,Fx].map(x=>T(x+4,G-1,t,q,B)),
st=(x,y,s)=>[..."✦★·"].map((t,j)=>(j=s*.8+j*2.1,T(x+O(M.cos(j)*4),y-(M.sin(j)<0),t,Y))),
sm=(s,q="▓▒░·"[s>>2],y=G-(s>>2))=>q?[T(m-1,y-1,q+q+q,Q),T(m-2,y,q+q+q+q+q,Q)]:[],
fr=o=>{
var k=[],sp=b=>!o.p&&L?(x,y)=>(x*7+y*5)%10<L?"#70625c":b:o.p;
ps=ps.filter(p=>{p.x+=p.u;p.y+=p.v;p.v+=.35;k.push(T(O(p.x),O(p.y),p.t,p.c));return--p.l>0&&p.y<7});
f.push({x:X,pose:c.P(o.e||r,o.a,o.t),offset:o.o|0,paint:sp("clawd_body"),ms:o.s||60,props:k.concat(o.k||[],o.g?[T(X+8,G,"▛▀▀",Q),T(Fx-2,G,"▀▀▜",Q)]:[]),
actors:o.n?[]:[{x:Fx,offset:o.O|0,color:"permission",paint:sp("permission"),pose:c.P(o.E||(o.e==C?C:l),o.A,o.u)}]})};
// Standoff, tumbleweed, twitch, "!".
for(wz(W-F),Fx=W+(W-F)%z;Fx>F;Fx-=z)fr({u:Fx/z&1?l:r,s:s});
fr({s:500});
for(wz(W),j=W;j>~z;j-=z)d=j%(4*z)<z,fr({e:C,s:s,k:[T(j,6-d,"@","#b9915a",{z:-1}),T(j+1,6,d?"·":" ",Q,{z:-1})]});
fr({e:C,s:600});fr({e:C,a:N,s:90});fr({e:C,u:l,s:350});
fr({k:hd("!",Y),s:220});
// Draw, fire.
fr({g:1,k:[T(a0,G,"✦",H),T(b0,G,"✦",H)],s:120});
for(i=0;a0+la<=b0-lb;i++){la+=i<da?0:2;lb+=i<db?0:2;fr({g:1,s:35,k:bz(a0,la,hA).concat(bz(b0-lb+1,lb,hB))})}
// Power struggle.
for(m=K(a0+la+b0-lb>>1,a0+2,b0-2),n=R(42,56),e=Z()*6,i=0;i<n;i++){
s=mid+O(M.sin(i/5+e)*(1.5+i/8));m=K(m+(s>m)-(s<m),a0+2,b0-2);s=m-mid;d=i%2;
add(m,G,R(0,2),2.6);i%5||s&&add(s<0?X+1:Fx+7,G-1,1,.6,"°",bc(hB,1),s<0?-.7:.7);
fr({g:1,e:s<-2?C:s>4?V:r,E:s>2?C:s<-4?V:l,t:s<-2?d?l:r:0,u:s>2?d?l:r:0,s:R(50,75),
k:bm(d).concat([T(m,G,pk("✸✹✶✷"),d?Y:H,B),T(m-1,G-1,d?"\\ /":" | ",Y),T(m-1,G+1,d?"/ \\":" | ",Y)])})}
// Swell, uh-oh, BOOM, blown back.
["(✹)","<(✸)>","«<(✹)>»","«<(✹)>»"].forEach((q,j)=>{add(m,G,3,3);fr({g:1,e:j>2?P:C,E:j>2&&P,s:j>2?450:110+j*60,k:bm(1).concat(T(m-(q.length>>1),G,q,j>2?Y:H,B),T(m-1,G-1,"\\|/",Y),T(m-1,G+1,"/|\\",Y))})});
add(m,G,18,4.5);add(X+9,G,2,3,"▀",Q);add(Fx-1,G,2,3,"▀",Q);
fr({e:C,a:U,A:U,p:()=>H,s:90,k:c.art(m-4,G-1,"  ░▓█▓░\n░▒▓███▓▒░\n  ░▓█▓░",H,B)});
for(L=7,n=1;n<7;n++){
k=[...Array(14)].map((_,j)=>T(m+O(M.cos(j*=.45)*n*2.2),G+O(M.sin(j)*n*.7),"✸*·"[n-1>>1],bc(55-n*9)));
d=(n<4)+(n<2);X-=d;Fx+=d;s=[,-1,-2,-1,0,1,1][n];d=s<1?U:0;
fr({e:C,a:d,A:d,o:s,O:s,k:k.concat(sm(n)),s:50+n*12})}
// Dazed, sooty.
for(e=[l,P,r,P,C],i=0;i<24;i++)fr({e:e[i<6?4:i%4],E:e[i<6?4:i+2&3],o:1,O:1,s:90,k:sm(i+7).concat(i>3?st(X+4,G,i).concat(st(Fx+4,G,i+2)):[])});
// "?", shrug, rival staggers off, soot shake.
fr({e:C,s:160});
for(i=0;i<4;i++)fr({e:i%2?l:r,E:i%2?r:l,s:80});
fr({s:250});fr({e:P,E:P,s:650,k:hd("?",H)});fr({A:U,E:C,s:500});fr({s:200});
for(wz((W-Fx)*1.3),i=1;Fx<W;Fx+=i++%5?z:-1)fr({E:i%5?r:C,u:Fx/z&1?l:r,s:s,k:st(Fx+4,G-1,i)});
for(i=0;i<8;i++){X+=i%2?-1:1;L=7-i;e=i%2?9:-1;add(X+e,G+R(0,1),2,1,pk("·░"),Q,(e-4)/8);fr({e:C,n:1,s:50})}
fr({e:V,a:N,n:1,s:550,k:[T(X+9,G-1,"✦",Y,B)]});
for(i=0;i<5;i++)fr({n:1});
f.push({ms:200});
return f});
