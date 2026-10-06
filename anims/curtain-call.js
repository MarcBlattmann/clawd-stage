// Curtains close, then part on Clawd bowing in a spotlight; roses and bravos fly, encore bow, reset.
$cdA("curtain-call",{title:"Curtain call",w:46},function(c){
var G=c.G,P=c.P,T=c.T,R=c.R,M=Math,i,k,lk,cr,
x=c.clamp(c.x,15,c.mx-15),m=x+4,L=x-15,E=m+19,f=c.walk(c.x,x),
cx=x,o=0,ps=P(),vl=-1,ch=0,eL=L-1,eR=E+1,sp=0,hd=0,rs=[],fl=[],pp=[],n=0,
GD="#e8b84a",LT="#fff2b0",B={b:1},Q=[x-2,x-4,x-6,x+10,x+12,x+14],
F=(ms,ex)=>{var r=[],y,s,q,d,a;n++;
 if(sp)for(y=1;y<7;y++){for(s="",q=-y;q<=y;q++)s+=sp>1?"░":(q+n)%2?" ":"·";r.push(T(m-y,y,s,LT,{z:-1}))}
 fl=fl.filter(e=>{var t=e.i++/e.n;
  if(t<1)return r.push(T(M.round(e.sx+(e.tx-e.sx)*t),M.round(e.ty*t+6*(1-t)-e.h*4*t*(1-t)),"✿❀"[e.i%2],e.c));
  e.cat?hd=e.c:rs.push([e.tx,e.c]);pp.push([e.tx+1,e.ty-1,e.cat?"✦":"·",LT,2])});
 rs.map(e=>r.push(T(e[0]-1,6,"-","success"),T(e[0],6,"✿",e[1])));
 hd&&r.push(T(cx+8,G-1+o,"✿",hd));
 for(y=1;y<=ch;y++)for(d=y<ch,a=0;a<2;a++){for(s="",q=a?eR:L;q<=(a?E:eL);q++)s+=d?(a?"▐█▌ ":"▌█▐ ")[(a?q-eR:eL-q)&3]:"▀";
  s&&r.push(T(a?eR:L,y,s,d?"#d42a2a":GD,d?{bg:"#7d0f14",o:1}:B))}
 if(vl>=0){a=M.max(L,m-vl);r.push(T(a,0,"▀".repeat(M.min(E,m+vl)-a+1),"#b0141e",{bg:GD}))}
 sp&&r.push(T(m,0,"▼",LT,B));
 pp=pp.filter(e=>r.push(T(e[0],e[1],e[2],e[3],B))&&--e[4]>0);
 f.push({x:cx,offset:o,pose:ps,ms:ms,props:r.concat(ex||[])})},
shut=(ms,fx)=>{while(eL<m||eR>m+1){eL<m&&eL++;eR>m+1&&eR--;fx();F(ms)}},
open=d=>{while(eL>L+1||eR<E-1){eL=M.max(L+1,eL-d);eR=M.min(E-1,eR+d);F(35)}},
spk=k=>{while(k--)pp.push([R(0,1)?x-R(1,3):x+8+R(1,3),R(1,4),c.pick("✦✧*·"),c.pick([GD,LT]),R(2,5)])},
pop=()=>{var w=c.pick(["bravo!","clap!","*clap*","encore!","bravo!!","♥","♥ ♥","clap clap"]),s=R(0,1),y=R(1,3);
 pp.some(e=>e[5]==s*4+y)||pp.push([s?R(x+11,E-2-w.length):R(L+3,x-2-w.length),y,w,c.pick(["text",GD,"#ff8fab","warning"]),R(5,8),s*4+y])},
th=(tx,ty,cat)=>{var s=tx>x,sx=s?E-2-R(0,3):L+2+R(0,3);lk=s?"right":"left";
 fl.push(cr={sx:sx,tx:tx,ty:ty,n:M.abs(tx-sx),i:0,h:R(3,4),c:c.pick(["error","#ff5f87","#ff2f55"]),cat:cat})},
feet=j=>P("open","down",j%2?"left":"right");
// setup: valance unrolls, drapes drop
F(200);F(400,[T(m,G-1,"!",GD,B)]);
while(vl<20){vl+=2;ps=P(vl%8<4?"left":"right");F(30)}
eL=L+1;eR=E-1;while(ch<5){ch++;F(60)}
ps=P("left");F(300);ps=P("right");F(300);ps=P();F(150);
// curtains close in
shut(40,()=>ps=P(eL>x-3?"closed":n%10<5?"left":"right"));
// behind the curtain: shuffle, drumroll, spotlight on
ps=P();F(300);
[-1,-2,-1,0,1,0].map((d,j)=>{cx=x+d;ps=feet(j);F(90)});ps=P();
var dr=k=>[T(m-4,2,"d"+"r".repeat(k),GD,B)];
for(k=1;k<8;k++)F(60,dr(k));
sp=1;F(90,dr(7));sp=0;F(90,dr(7));sp=2;F(250,dr(7));
o=1;ps=P("closed");F(350);
// reveal Clawd mid-bow
open(2);F(600);o=0;ps=P();F(150);
o=-1;ps=P("open","up");spk(6);pop();F(90);o=0;F(350);
for(k=R(1,2);k--;){ps=P("closed");o=1;F(650);o=0;ps=P("wink");F(300)}
// applause: bravos, thrown roses, one caught
var C=R(14,18);
for(i=k=0;k<9;i++){
 (i%3<1||R(0,3)<1)&&pop();
 i%4==1&&i<C&&th(Q.splice(R(0,Q.length-1),1)[0],6);
 i==C&&th(x+8,G-1,1);
 o=hd&&k==1?-1:0;k&&k<3&&pp.push([x+3,G-1-k,"♥","error",k*2-1]);
 ps=hd?P(k%6<3?"wink":"open","one-up"):i>C&&cr.n-cr.i<4?P("right","one-up"):P(i%9==4?"wink":lk,i%10>7?"up":"down");
 F(70);hd&&k++}
// encore bow with the rose
ps=P("open","one-up");F(300);o=1;ps=P("closed","one-up");F(750);o=0;ps=P("wink","one-up");spk(4);F(400);
// close, lights out, roses gathered under the hem
shut(35,()=>ps=P(n%8<4?"wink":"open","one-up"));
hd=0;ps=P();sp=1;F(80);sp=0;F(250);
while(rs.length){rs=rs.filter(e=>(e[0]+=e[0]<m?1:-1)<x-1||e[0]>x+9);ps=feet(n);F(60)}
ps=P();F(400);
// reopen, strike the set
ps=P("wink");open(1);ps=P();F(300);
while(ch>0){ch--;ps=P("open",ch%2?"one-up":"down");F(80)}
while(vl>=0){vl-=2;F(30)}
F(200);
return f;
});
