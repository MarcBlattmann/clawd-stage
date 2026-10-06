// A cat visits: rubs on Clawd, gets petted (hearts), naps by him (z), stretches, struts off tail-up, peeks back.
$cdA("cat-visit",{title:"Cat visit",w:46},function(c){
var R=c.R,T=c.T,P=c.P,W=c.W,Y="chromeYellow",x=c.clamp(c.x,W>56?14:0,c.mx-16),f=c.walk(c.x,x),
 K=c.pick(["#a8a8bc","#f0d8a8","#d09060","#e8e8e8"]),EY=c.pick(["success",Y,"#5ad2c8"]),
 O="(•.•)",Z="(-.-)",rt="right",C="closed",OP="open",U="one-up",WK="wink",HC="error",PK="#ff8aa8",S="subtle",ca,cd=0,cl=0,zb,fa,ps=[],arm=0,bl,i,j,k,n,D,
 L=x>13&&2*x+29<W,s=L?-1:1,MS="/\\()╯╰╮╭▛▜";
function mir(s){return[...s.padEnd(11)].reverse().map(h=>MS[MS.indexOf(h)^1]||h).join("")}
// cat faces left, rows 3-6; tail t: 0 low 1 up 2 curled
function walk(ph,t,e){fa=e||O;cl=["",t>1?"         ╮":"","/\\_/\\    "+(t?"│":""),fa+(ph?"▛▀▀▜":"▜▀▀▛")+(t?"╯":"~")]}
function fr(e){fa=e;cl=["","","   /\\_/\\","  ▄"+e+"▄~"]}
function loaf(b,e){fa=e;cl=["","","/\\_/\\"+(b?"▄▄▄▖":"▗▄▄▖"),e+"████▖"]}
function cat(){if(!cl)return[];var M=cd?cl.map(mir):cl,r=c.art(ca,3,M,K,zb),o=ca+M[3].indexOf(fa);
 fa==O&&r.push(T(o+1,6,"•",EY,zb),T(o+3,6,"•",EY,zb));return r}
// particle [x,y,glyphs,color,age,dx]
function pt(a,b,g,l,d){ps.push([a,b,g,l,0,d|0])}
function F(p,t,o,e){var pr=cat();arm&&pr.push(T(x+9,4,"▄▄▄".slice(0,arm),"clawd_body"));
 ps=ps.filter((q,m)=>(m=q[4]++)<q[2].length*3&&q[1]>=0&&(pr.push(T(q[0],q[1],q[2][m/3|0],q[3])),m%2&&q[1]--,m%4>2&&(q[0]+=q[5]),1));
 f.push({x:x,pose:p.eyes?p:P(p),ms:t,offset:o|0,paint:bl,props:pr.concat(e||[])})}
// a mew from off stage
F(OP,300);F(C,100);F(OP,200);
F(OP,350,0,[n=T(W-5,3,"mew",S)]);
F(rt,400,0,[n,T(x+4,3,"?",Y,{b:1})]);
// it trots in and says hi
k=c.clamp(1800/(W-x-13)|0,22,60);
for(ca=W;ca>x+13;ca--){walk(ca%2,1);F(rt,k)}
walk();F(rt,400,0,[T(ca,3,"mrrp?",S)]);
F(WK,300,0,[T(x+4,3,"♥",HC)]);
for(;ca>x+9;ca--){walk(ca%2,1);F(rt,140)}
// rubs against his side; he blushes
for(j=R(2,3);j--;bl=(a,b)=>b==1&&a%4==2?PK:void 0)for(i=0;i<5;i++){ca=x+9-[0,1,2,1,0][i];walk(0,i%2,"(^.^)");
 i==2&&pt(x+8,3,"♥♥·",HC,R(-1,1));F(bl?C:OP,110)}
// asks for pets, gets them
walk();F(rt,400,0,[T(ca+1,3,"mrrp",S)]);
F(P(rt,U),300);
for(j=R(3,4);j--;)for(i=0;i<5;i++){arm=[1,2,3,2,1][i];walk(0,j%2,Z);
 i==2&&pt(ca+R(1,3),3,"♥♥♥·",c.pick([HC,PK]),R(-1,1));F(P(i<3?C:WK,U),85)}
arm=0;
// yawn, curl up, nap
walk(0,0,"(-o-)");F(rt,400);
for(i=0;i<3;i++){i%2?walk(1,0,Z):fr(Z);cd=i==1;F(OP,150)}cd=0;
loaf(1,Z);F(OP,200);F(C,150,1);D=R(0,1);
for(n=R(8,12),i=0;i<n;i++){loaf(i%4<2,Z);i%4||pt(ca+3,4,"zzZZ","permission",1);
 D?i%6==3&&pt(x+6,3,"zZ",S,1):i==5&&pt(x+4,3,"♥♥·",PK);F(D||i%7==6?C:rt,230,1)}
// wakes (so does he), stretches, shakes
loaf(1,O);F(D?C:rt,350,1);
F(P(OP,"up"),90,-1,[T(x+4,2,"!",Y,{b:1})]);F(rt,200);
walk();F(rt,150);
for(i=0;i<3;i++){fa="(>o<)";cl=i%2?["          │","        ▄▄╯","/\\_/\\ ▄███",fa+"▀▀  ▌"]:["","         │","/\\_/\\  ▄█╯",fa+"▀▀▀▌"];
 F(rt,i%2?600:130,0,[T(ca-1,6,"▄",K)])}
walk(0,1);F(rt,150);
for(i=0;i<6;i++){ca+=i%2?1:-1;walk(i%2,1);i%2&&pt(ca+R(1,9),4,"'·",K,R(-1,1));F(rt,45)}
// goodbye look; struts off tail-up (behind him if going left)
fr(O);F(rt,300);F(WK,R(3,5)*100,0,[T(ca+5,3,"♥",HC)]);
cd=+!L;zb=L&&{z:-1};k=c.clamp(2000/(L?ca+11:W-ca)|0,25,55);
for(;L?ca>-11:ca<W;ca+=s){walk(ca%2,2);j=ca+(cd?8:2);F(P(j>x+8?rt:j<x?"left":OP,ca&2?U:"down"),k)}
// ...and peeks back in once
n=L?"left":rt;cl=0;F(n,R(3,6)*100);
cd=1-cd;k=L?-6:W-5;
for(ca-=s;ca!=k;ca-=s){walk();F(n,60)}
F(n,200);F(P(OP,"up"),300,0,[T(L?1:W-4,3,"mew",S)]);
walk(0,0,"(^.^)");pt(x+4,3,"♥♥♥·",HC);F(P(WK,"up"),400);
for(;ca!=k+5*s;ca+=s){walk();F(n,50)}
cl=bl=void 0;
for(i=0;i<6;i++)F(WK,100);
ps=[];F(OP,250);
return f;
});
