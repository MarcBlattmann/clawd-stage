// Clawd charges an energy ball, blasts a beam across the whole stage, then pants.
$cdA("energy-beam",{title:"Energy beam",w:64},function(c){
var G=c.G,W=c.W,R=c.R,T=c.T,pk=c.pick,M=Math,O=M.round,Z=M.random,B={b:1},Q={z:-1},Y="chromeYellow",H="text",I="inactive",K="closed",U="up",N="one-up",l="left",r="right",
d=c.x<c.mx/2?1:-1,ey=d>0?r:l,X=d>0?R(2,3):c.mx-R(2,3),E=d>0?W-1:0,bw=M.max(6,W>>4),
hu=pk([195,190,280,50,130]),C1=c.hsv(hu,.6,1),C2=c.hsv(hu,.2,1),C3=c.hsv(hu+20,.85,.9),L=[C1,C3,C2,Y,H],
f=[],ps=[],mo=[],pb=[],sx=0,q,i,j,k,n,s,a,b,x,v=M.max(3,W/24|0),
bx=()=>X+4+6*d,hx=()=>X+4+5*d,
add=(x,y,u,v,l,t,c,g)=>ps.push({x,y,u,v,l,t,c,g}),du=x=>add(x,6,0,-.15,R(4,9),"·░▒",I),
fr=o=>{var t=f.length,g=o.g*11,k=[];
 ps=ps.filter(p=>(p.x+=p.u,p.y+=p.v,p.v+=p.g||0,k.push(T(O(p.x),O(p.y),p.t[p.l>>2]||p.t.slice(-1),p.c,Q)),--p.l>0));
 f.push({x:X+sx,pose:c.P(o.e||ey,o.a),offset:o.o|0,ms:o.s||60,props:k.concat(o.k||[]).map(p=>(p.x+=sx,p)),paint:(a,b)=>(a*7+b*3+t*5)%11<g?a+b+t&1?C1:C2:"clawd_body"})},
orb=(s,i)=>s<3?[T(bx(),G,"·•●"[s],i&1?C2:C1,B)]:c.art(bx()-1,G-1,s<4?[" ▄","▐ ▌"," ▀"]:["▗▄▖","█ █","▝▀▘"],i&1?C1:C3).concat(T(bx(),G,"●",H,B)),
// Beam a..b, thickness th 1-3.
bm=(a,b,th,t)=>{var lo=M.min(a,b),hi=M.max(a,b),k=[T(lo,G,"─═█"[th-1].repeat(hi-lo+1),th>2?(t&1?H:C2):C1,B)],j,n,e;
 if(th>2)for(j=lo;j<=hi;j+=bw)n=M.min(bw,hi-j+1),e=L[(((j-lo)/bw-d*t)%3+3)%3],k.push(T(j,G-1,"▄".repeat(n),e),T(j,G+1,"▀".repeat(n),e));
 for(j=lo+R(0,5);j<hi;j+=R(5,11))k.push(T(j,G+pk([-2,2,-th,th]),pk("~-·'"),C1));
 return k},
sp=(i,e)=>[-2,-1,0,1,2].map(r=>(j=4-M.abs(r)+(i&1),T(d>0?e-j+1:e,G+r,d>0?"·░▒▓█".slice(5-j):"█▓▒░·".slice(0,j),r?(i&1?Y:C1):H,B))),
pbk=()=>pb.map(p=>(p.y=M.max(p.ty,p.y-p.r),T(p.x+(f.length+p.x&1),O(p.y),p.t,p.c)));

// Zip to the near edge, cup hands.
for(x=c.x,a=X<x;x!=X;)x+=c.clamp(X-x,-2,2),f.push({x,pose:c.P(a?l:r,0,x&2?l:r),ms:25,props:[T(a?x+11:x-3,5,"≡≡",I)]});
fr({s:400});fr({o:1,s:160});fr({e:K,s:120});fr({a:N,s:150});fr({e:K,a:U,s:300,k:orb(0,0)});

// Charge: motes stream in, pebbles rise, sparks.
for(n=R(55,70),i=0;i<n;i++){
 q=i/n;s=M.min(4,q*5.5|0);sx=s>3?R(-1,1):0;k=[];
 mo.push({x:R(0,W-1),y:R(0,6),a:0,n:R(10,20),c:pk(L)});
 mo=mo.filter(m=>{var p=++m.a/m.n;p*=p;k.push(T(O(m.x+(bx()-m.x)*p),O(m.y+(G-m.y)*p),p>.4?"•":"·",m.c,Q));return m.a<m.n});
 q>.35&&Z()<.4&&M.abs((x=R(0,W-1))-X-4)>9&&pb.push({x,y:6,r:Z()*.12+.06,ty:R(1,3),t:pk("▖▗▘▝•"),c:pk([I,"#a0846a"])});
 Z()<q&&add(X+R(-1,9),G+R(0,2),0,-Z()*.3-.3,R(4,8),"·'^",pk([C1,C3]));
 if(s>2)for(j=R(1,s);j--;)k.push(T(bx()+R(-3,3),G+R(-2,2),pk("*+✦·/\\"),pk(L)));
 fr({e:K,a:U,g:q*.7,s:R(55,75)-s*4,k:k.concat(pbk(),orb(s,i))});
}
// Flash, recoil.
sx=0;
fr({a:U,g:.7,s:300,k:pbk().concat(orb(4,0),T(X+4,G-2,"!",Y,B))});
fr({e:K,a:U,g:.7,s:110,k:pbk().concat(c.art(bx()-2,G-2,["\\ | /"," \\|/","──✸──"," /|\\","/ | \\"],Y,B))});
X-=d;

// Fire across, pebbles blown away.
for(b=hx(),i=0;b!=E;i++){
 b+=d*v;if((b-E)*d>0)b=E;sx=R(-1,1);
 pb=pb.filter(p=>(p.x-b)*d>0||!add(p.x,p.y,d*(Z()*2+1),-Z()*.3,R(6,14),p.t,p.c,.05));
 du(b-d*R(0,3));
 fr({a:U,g:.7,s:35,k:bm(hx(),b,3,i).concat(orb(4,i),pbk(),T(b+d,G,"✸",Y,B),i<16?T(X+2,1,"HAA!",Y,B):[])});
}
// Full power: shake, edge splash.
for(n=R(28,40),i=0;i<n;i++){
 sx=R(-1,1);x=E-sx;
 for(j=R(1,3);j--;)add(x-d*R(0,2),G+R(-2,2),-d*(Z()*1.5+.4),(Z()-.5)*.9,R(4,10),"·*✦",pk(L),.07);
 Z()<.5&&du(R(0,W-1));
 fr({e:i%10<2?K:ey,a:U,g:.7,s:R(40,60),k:bm(hx(),x,3,i).concat(orb(4,i),sp(i,x))});
}
// Thin out, tail leaves sparkles.
sx=0;
for(i=0;i<6;i++)fr({a:U,g:.6,s:70,k:bm(hx(),E,2-(i>2),i).concat(orb(3-(i>2),i))});
for(a=hx();a!=E;){
 a+=d*v;if((a-E)*d>0)a=E;
 for(j=0;j<v;j++)Z()<.6&&add(a-d*j,G+R(-2,2),0,Z()*.1-.05,R(6,18),"·✧✦",pk(L));
 fr({a:N,g:.5,s:40,k:a!=E?bm(a,E,1,0):[]});
}
// Pant, sweat, phew.
for(i=0;i<14||ps.length;i++){
 i<14&&i%2<1&&add(hx(),G+1,d*.3,-.3,5,"·°",I);
 i<6&&add(bx()+R(-1,1),G,0,-.4,R(3,6),"·~",I);
 i==4&&add(X+4-d*3,G-1,-d*.5,-.6,7,"'","suggestion",.25);
 fr({e:K,o:i&1,g:.5-i/16,s:i&1?140:200});
}
fr({s:300});fr({e:"wink",a:N,s:450,k:T(X+2,G-2,"phew",I)});
fr({e:"open",s:300});
return f});
