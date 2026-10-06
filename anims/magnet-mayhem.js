// Clawd holds up a horseshoe magnet: bolts, nails, a can and a frying pan fly in and stick, then a huge anvil flattens him and he pops back out.
$cdA("magnet-mayhem",{title:"Magnet",w:56},c=>{
let G=c.G,R=c.R,T=c.T,K=c.pick,M=Math,S="#cdd2de",FE="#878c9b",Y="warning",B="subtle",D="down",U="up",C="closed",O="open",A="one-up",E="right",W="wink",P="permission",
x=c.clamp(c.x,4,c.mx-26),st=[],f=c.walk(c.x,x),i,k,s,
F=(e,ps,ms,o,d,a,hd)=>f.push({pose:c.P(e,a||A),props:ps,ms,offset:o|0,x:x+(d|0),hide:hd}),
// magnet in raised hand (x+8,G); l lowers it
mag=(X,l)=>c.art(X+9,G-2+l,["▄▄▄","█","▀▀▀"],"error").concat(T(X+12,G-2+l,"▄",S),T(X+12,G+l,"▀",S)),
mv=(p,X,y)=>p.map(q=>({...q,x:q.x+X,y:q.y+y})),
base=(d=0,l=0,s=0)=>mag(x+d+s,l-s).concat(st.flatMap((j,n)=>mv(j.p,x+d+j.tx+s*(1+n%2),j.ty+l-s))),
arcs=(k,o,l=0)=>[0,4].flatMap(i=>(i=(k+i)%8,c.art(x+o+i,G-2+l,[")"," )",")"],i<4?P:B))),
sp=(X,y)=>T(X,y,K(["✦","*","·"]),Y),
J=(p,tx,ty)=>({p:[].concat(p),tx,ty}),
L=(a,b,t)=>M.round(a+(b-a)*M.min(1,t)),
// junk flies in from edge/sky, speeding up; hit-stop on stick
fly=(js,gap)=>{let k=0,lv=js.slice(),h=0;
js.forEach((j,i)=>{j.k0=i*gap+R(0,3);j.sx=M.min(c.W,x+j.tx+R(24,48));j.sy=j.sx<c.W?-3:R(0,6);j.n=(j.sx-x-j.tx)*.8|0});
while(lv.length||h>0){let pr=[];
lv=lv.filter(j=>{let i=k-j.k0,p=i/j.n;if(i<0)return 1;
if(i<j.n)return pr=pr.concat(mv(j.p,L(j.sx,x+j.tx,(p+p*p)/2),L(j.sy,j.ty,p*1.6))),1;
st.push(j);h=3;pr.push(sp(x+j.tx+R(1,2),j.ty+K([-1,1])))});
F(h>2?C:E,arcs(k>>1,st.length?16:13).concat(base(),pr),h>2?110:R(30,40));k++;h--}},
can=J([T(0,0,"▐ ▌",S),T(1,0,"█",K(["error","success",P]))],10,G-1),
js=[J(T(0,0,"◆══",S),13,G-2),J(T(0,0,"──┤",S),13,G),can].sort(()=>M.random()-.5),
anv=y=>c.art(x-4,y,["▀▀▀▀█████████","      ▀███▀","    ▄███████▄"],FE),
sh=w=>T(x-w,6,"░".repeat(w)+"░  ░░░  ░"+"░".repeat(w),B),
flat=anv(3).concat(T(x-2,6,"▀".repeat(13),"clawd_body"));
// nuts come after the can
[13,14,15].slice(0,R(1,3)).forEach(n=>js.splice(R(js.indexOf(can)+1,js.length),0,J(T(0,0,K(["o","•"]),S),n,G-1)));

// raise magnet, glint, junk rush
for(i=2;i>=0;i--)F(O,mag(x,i),90,0,0,i>1&&D);
F(W,mag(x,0).concat(sp(x+13,G-2),sp(x+13,G)),300);F(E,mag(x,0),250);
fly(js,R(7,11));
F(W,base(),400);F(E,base(),300);
// pan: CLANG
fly([J(c.art(0,0,["▄██▄","████","▀██▀"],FE).concat(T(4,1,"══","#96643c")),16,G-2)],0);
[[-1,0,40],[-2,1,70],[-2,1,300],[-1,0,90],[0,0,250]].forEach(q=>
F(q[1]?C:O,base(q[0],q[1]).concat(q[1]?[T(x+q[0]+16,G-3,"✸",Y),sp(x+q[0]+20,G-3)]:[]),q[2],q[1],q[0]));
// set it down; still pulling
F(C,base(0,1),120);A=D;F(O,base(0,2),200);F(W,base(0,2),600,0,0,U);
for(k=0;k<9;k++)F(k<4?C:E,arcs(k,22,2).concat(base(0,2),sp(x+R(12,23),G+R(-1,3))),k<4?40:70);
// shadow, anvil, uh oh
for(k=0;k<4;k++)F(K(["left",E]),[sh(k)].concat(base(0,2)),150);
[-2,-1,0,0].forEach((y,i)=>F(O,[sh(4)].concat(base(0,2),anv(y),i>2?T(x+4,G-1,"!",Y,{b:1}):[]),i>1?480:110));
// SQUASH
for(s=0;s<8;s++)F(C,(s?flat:anv(2)).concat(base(0,2,s+1),s?[T(x-3-(s>>1),6,s<4?"▒░":"░",B),T(x+10+(s>>1),6,s<4?"░▒":"░",B)]:[],s&&s<3?[sp(x-4-s,R(3,5)),sp(x+R(-3,8),3-s)]:[]),s?40:60,1,0,U,s>0);
// twitch, POP
[700,110,450,70].forEach((m,i)=>F(C,i%2?anv(2):flat,m,i%2,0,i>2&&U,!(i%2)));
[[0,-1],[-2,-2],[-5,-1],[-9,0],[-9,1]].forEach(q=>F(O,anv(q[0]).concat(q[1]<0?[sp(x-2,G+q[1]),sp(x+10,G+q[1]+1)]:[]),q[1]>0?90:50,q[1],0,U));
// dizzy; one last nut
for(k=0;k<9;k++)F(k%3?C:O,[0,2,4].map(i=>sp(x+1+(k+i)%7,G-1)),110);
F("left",[],160);F(E,[],160);
[0,1,2,3,2,1,0,-1].forEach((y,i)=>F(i<3?O:i<5?C:E,[T(x+4+M.max(0,i-3),y,"o",S)].concat(i==3?sp(x+6,G-1):[]),i==3?150:60));
F(W,[],450);
f.push({pose:"default"});
return f});
