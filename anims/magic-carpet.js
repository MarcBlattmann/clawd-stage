// A magic carpet unrolls, flies Clawd edge to edge in waves and loops, lands, then rolls up under his hop and zips off.
$cdA("magic-carpet",{title:"Magic carpet",w:64},function(c){
var G=c.G,T=c.T,P=c.P,R=c.R,M=Math,S=M.sin,C=M.cos,J=M.round,mx=c.mx,W=c.W,ps=[],o=0,cm=0,dy=0,ph=0,wv=R(0,6),i,j,k,t,n,l,e,
Y="chromeYellow",X="closed",I="inactive",B={bg:c.hsv(c.pick([335,270,185]),.8,.6)},
Q="║◆◇◆◇◆◇◆◇◆◇◆║",WD=[13,11,7,5,1,5,7,11,13,5,7,11,13],
FS=("right-"+[12,30,55,75].join(" right-")+" edge back-105 back-125 back-150 back left-"+[75,55,30,12].join(" left-")).split(" "),
ey=v=>v>0?"right":"left",
x=c.clamp(c.x,3,mx-3),f=c.walk(c.x,x),s=x<mx/2?1:-1,d=s,cx=x+s*14,st=W>100?2:1,E=ey(s),
K=(a,y,t)=>T(a,y,t,Y,B),
Rl=(a,y)=>T(a,y,"@",Y,{bg:B.bg,b:1}),
sp=(...a)=>ps.push(a.concat(0)),
du=(a,b,v)=>{sp(a,6,-v,0,"▒░·",I,5);sp(b,6,v,0,"▒░·",I,5)},
tw=(a,b,n)=>sp(a,b,0,n?0:R(-1,1)/9,"✦✧*·",R(0,1)?Y:c.rainbow(R(0,9)),n||R(4,8)),
// carpet at col l, row y: ends lift by a/b, tassels when full width
H=(l,y,a=0,b=0,w=13,u=ph&1?"~-":"-~")=>w<13?[K(l,y,Q.substr(0,w-1)+"║")]:[K(l,y+a,"║◆"),K(l+2,y,Q.slice(2,11)),K(l+11,y+b,"◆║"),T(l-2,y+a,u,Y),T(l+13,y+b,u,Y)],
V=(a,y)=>[0,1,2,3,4].map(r=>K(a,y+r,r%4?r&1?"◆◇":"◇◆":"══")),
// roll at j, rest on side e
RL=(l,j,e)=>[e>0?K(j+1,6,Q.slice(j+1-l)||" "):K(l,6,Q.slice(0,j-l)||" "),Rl(j,6)],
A=(pz,ms,ex)=>{
 var p=[];ph++;ps=ps.filter(q=>q[7]<q[6]);
 ps.map(q=>{p.push(T(J(q[0]),J(q[1]),q[4][q[7]*q[4].length/q[6]|0],q[5],{z:-1}));q[0]+=q[2];q[1]+=q[3];q[7]++});
 if(cm)p=p.concat(H(x-2,G+o+3,d<0&&dy,d>0&&dy));
 f.push({x,offset:o,pose:pz,ms,props:p.concat(ex||[])});
},
zip=(a,b,yf,pf)=>{var m=M.abs(b-a),n=M.ceil(M.min(m/3,25)),e=b>a?1:-1;
 for(i=0;i<=n;i++){t=i/n;j=J(c.lerp(a,b,t));k=J(yf(t));tw(j-e*2,k);A(pf(t),35,[Rl(j,k),T(j-e,k,"~",Y)])}},
// loop: the carpet swings round him, leaving a sparkle ring
lo=()=>{var x0=x,q;cm=0;
 for(k=1;k<25;k++){t=k*M.PI/12;x=x0+J(d*6*S(t));o=J(C(t)-2);q=J(k/6)%4;tw(x0+4+J(d*13*S(t)),J(3+3*C(t)),22);
  A(P(q==2?X:q?"open":ey(d),q==2?"up":"down"),J(60-15*C(t)),q%2?V(q==1^d<0?x+9:x-2,G+o-1):H(x-2,G+o+(q?-1:3)))}
 cm=1},
// wave-ride to col b with loops; the landing leg glides down
fly=(b,end)=>{var u=d*(b-x)-(end?16:0),lp=[],ox,ot,r;
 for(i=1,n=M.max(1,J(u/160));i<=n;i++)lp.push(x+d*J(u*i/(n+1)));
 while(x!=b){ox=o;x+=d*M.min(st,d*(b-x));wv+=.35*st;r=d*(b-x);
  ot=lp.length&&d*(lp[0]-x)<5?-1:J(1.5*S(wv)-2.5);
  if(end&&r<16)ot=M.max(ot,-1-(r/5|0));
  o+=M.sign(ot-o);dy=o-ox;
  tw(x+4-d*R(8,11),G+o+3+R(-1,0));
  ph%2&&sp(x+4-d*R(6,9),G+o+R(0,2),0,0,"─-·",I,3);
  A(o<-3?P(X,"up"):P(ey(d)),end&&r<16?104-4*r:J(28+700/W));
  if(lp.length&&d*(x-lp[0])>=0){lp.shift();lo()}}
 dy=0},
fe=cx+4+6*s,ne=cx+4-6*s,bk=T(x+4,G-1,"!","warning",{b:1});
// the roll streaks in and thumps down
A(P(),200);
zip(s>0?W+1:-2,fe,t=>1+5*t*t*t,t=>P(t>.3?E:"open",t>.6?"one-up":"down"));
du(fe-1,fe+1,.6);A(P(E),90,[Rl(fe,5),bk]);A(P(E),220,[Rl(fe,6),bk]);
// it unrolls, rises and beckons
for(j=fe;j!=ne-s;j-=s)A(P(E),45,RL(cx-2,j,s));
for(i=0;i<7;i++)tw(cx+R(-2,10),R(3,6));
A(P(),250,H(cx-2,6));
for(i=0;i<8;i++)l=-(i>>1&1),A(P(i<3?"open":i<6?E:"wink"),110,H(cx-2,5,s>0&&l,s<0&&l));
// hop aboard
o=1;A(P(X),180,H(cx-2,5));
[-2,-3,-4,-4,-3,-3,-2].map(v=>{o=v;x+=s*2;A(P(E,"up"),55,H(cx-2,5))});
cm=1;o=-1;A(P(X),130);o=-2;A(P(),120);A(P("wink","up"),400);
du(x-3,x+11,1);o=-3;dy=-1;A(P(X,"up"),70);o=-4;A(P(ey(d),"up"),90);
fly(s>0?mx-3:3);
// twirl round at the edge, the carpet end-on
if(d<0)FS.reverse(),WD.reverse();
for(cm=k=0;k<13;k++){o=k>2&&k<10?-4:-3;k%2&&tw(x+4+R(-6,6),G+o+R(3,4));A({facing:FS[k]},55,H(x+4-(WD[k]>>1),G+o+3,0,0,WD[k]))}
d=-d;cm=1;
fly(d>0?mx-3:3,1);
du(x-3,x+11,.6);A(P(X),300);A(P(),200);A(P("wink"),300);
// he hops, it rolls up beneath him, bows and zips off
l=x-2;cm=0;e=-d;j=x+4-6*e;n=x+4+6*e;
[-2,-3,-4,-4,-4,-3,-2,-1,0].map((v,i)=>{o=v;A(P(i<5?"open":X,"up"),55,i<7?RL(l,j+2*e*i,e):[Rl(n,6)])});
du(x,x+8,.5);A(P(X),140,[Rl(n,6)]);A(P(ey(e)),300,[Rl(n,6)]);
A(P(ey(e)),110,[Rl(n,5)]);A(P("wink"),220,[Rl(n,6)]);
zip(n,e>0?W+1:-2,t=>6-5*t**.5,t=>P(t<.5?ey(e):"wink",t>.15?"one-up":"down"));
while(ps.length)A(P("wink","one-up"),60);
f.push({x,pose:"default",ms:250});
return f;
});
