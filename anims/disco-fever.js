// Disco ball spins down, light spots sweep stage and Clawd, tiles pulse to the beat; he points, hustles, spins, strikes the pose.
$cdA("disco-fever",{title:"Disco fever",w:44},c=>{
var G=c.G,P=c.P,R=c.R,W=c.W,M=Math,Z={z:-1},C="clawd_body",O="one-up",K="closed",Y="inactive",N="wink",I="right",J="left",
x=c.clamp(c.x,8,W-24),f=c.walk(c.x,x,{ms:45}),X=x,o=0,p=P(),fg=0,t=0,fl=0,
bc=x+13,by=-2,ph=0,sp=0,lit=0,gl=0,dir=R(0,1)*2-1,L=[],H=[],tr=0,
ND=M.min(30,W/5|0),D=[],dn=0,ps=[],tx=[],i,k,
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
em=(x,y,s,k,u,v,g,n)=>ps.push({x,y,s,k,u,v,g,n}),
S=(ms,n=1)=>{while(n--){t++;ph+=sp;
 let pr=tx.slice(),m={},a=X,b=G+o,F=fl?"text":C,T=(x,y,s,k,e)=>pr.push(c.T(x,y,s,k,e)),q,l,s,u,j,k;
 // spots tint Clawd as they cross him
 D.forEach((d,i)=>{d.x=(d.x+sp*dir+W)%W;q=M.round(d.x)%W;i<dn&&(m[q*9+d.y]=d.k,(d.y<4||q<11||q>62)&&T(q,d.y,d.s,d.k,Z))});
 if(by>-2){for(j=0;j<by;j++)T(bc,j,"│",Y);
  for(k=0;k<2;k++)for(j=0;j<5;j++){q=(400+j+k*2-dir*(ph>>1))%4;
   T(bc-2+j,by+k,j%4?"▓▒░▒"[q]:"▗▖▝▘"[k*2+j/4],lit&&j%4?q?c.hsv(q*120+t*5,.3,1):"text":Y)}
  for(j=0;j<gl;j++)T(bc+c.pick([-4,-3,3,4]),by+R(-1,1),c.pick("✦✦·+"),c.hsv(R(0,359),R(0,5)/10,1))}
 // tiles, with holes for his feet
 for(j=0;j<8;j++)if(M.abs(j-3.5)<tr){l=M.min(3,L[j]=M.max(0,(L[j]|0)-1));s="";
  for(k=0;k<3;k++){u=j*4+k-8+x-a;s+=!o&&p.feet&&(u>0&&u<3&&p.feet!=I||u>5&&u<8&&p.feet!=J)?" ":"▁▂▃▄"[l]}
  T(x-8+j*4,6,s,l?c.hsv(H[j],.75,.4+l*.2):"subtle",o>0||!p.feet?Z:0)}
 ps=ps.filter(q=>(T(M.round(q.x),M.round(q.y),q.s,q.k,Z),q.x+=q.u,q.y+=q.v,q.v+=q.g,--q.n>0&&q.y<6.5&&q.y>-1));
 fg&&T(a+9,b-1,"▗",C);
 f.push({x:a,offset:o,pose:p,ms,props:pr,paint:(u,r)=>m[(a+u)*9+b+r]||F})}},
beat=(m,b,j)=>{for(j=0;j<8;j++)if(m>2||(m>1?(j+b)%2:m?j==b%4||j==7-b%4:R(0,1)))L[j]=5,H[j]=m>2?j*45+b*40:R(0,359)},
mv=[
 i=>{fg=i%2<1;X=x+i%2;p=fg?P(I,O,i%4?J:I):P(J)},
 i=>{X=x+[0,1,2,1,0,-1,-2,-1][i%8];p=P((i+1)%8<4?I:J,0,i%2?J:I)},
 i=>{o=i%2-1;p=P(i%4?0:K,"up")}];
for(k=0;k<ND;k++)H[k]=R(0,359),D.push({x:R(0,W-1),y:R(0,5),s:c.pick("••·"),k:c.hsv(H[k],.65,1)});
// ball lowers. Huh?
S(260);
for(by=-1;by<3;by++){p=P(by>=0&&I);S(by>1?110:170)}
by=1;S(220);p=P(K);S(110);p=P();tx=[c.T(X+4,G-1,"?",Y)];S(450);tx=[];
// he points: spark, lights on
p=P(I,O);fg=1;S(300);tx=[c.T(X+10,G-2,"✦","chromeYellow",{b:1})];S(70);tx=[];
lit=1;gl=3;sp=.2;for(;dn<ND;dn+=2){sp+=.02;S(60)}
p=P(0,O);tx=[c.T(X+4,G-1,"!","warning",{b:1})];S(300);tx=[];fg=0;gl=2;
// tiles on, middle-out
for(tr=1;tr<5;tr++){L=Array(8).fill(5);p=P(N,0,tr%2?J:I);S(120,2)}
o=1;p=P(K);S(220);o=0;
// point / hustle / raise the roof, random order
[0,1,2].sort(()=>M.random()-.5).forEach((m,q)=>{sp=.5+q*.2;
 for(i=0;i<8;i++){mv[m](i);i%2||beat(m,i>>1);k=R(0,1);i%4||em(X-1+k*10,G-1+o,"♪♫"[k],c.rainbow(R(0,6)),k-.5,-.4,0,9);S(55,4)}
 X=x;o=0;fg=0});
// spin, blackout, the drop
for(k=0;k<13;k++){p={facing:FC[dir>0?k:12-k]};k%3||beat(3,k);S(45)}
p=P(K);o=1;sp=lit=gl=dn=0;L=[];S(450);
dn=ND;lit=1;gl=6;fl=1;o=-1;p=P(0,"up");beat(3,0);S(50);fl=0;o=-2;
for(k=0;k<14;k++)em(bc+R(-2,2),by+R(0,1),c.pick("✦*·•"),c.rainbow(R(0,6)),R(-9,9)/10,-R(2,6)/10,.12,R(10,18));
sp=1;S(110);o=-1;S(70);o=1;p=P(K);S(60);
// THE pose
o=0;p=P(N,O);fg=1;
for(k=0;k<16;k++){[k,k+4].map(j=>{j=dir>0?j%8:7-j%8;L[j]=5;H[j]=k*30});tx=[c.T(X+10,G-2,k%4<2?"✦":"·","chromeYellow")];S(65)}
// lights out, wave goodbye
tx=[];fg=0;gl=1;p=P();S(200);
for(p=P(I);dn>0;dn-=2){sp*=.9;S(55)}
lit=gl=sp=0;for(tr=4;tr>=0;tr--){p=P(tr>1?J:0);S(100)}
for(by=1;by>-3;by--){p=P(I,by%2&&O);S(160)}
p=P(N);em(X+8,G-1,"♥","error",.25,-.35,0,8);S(400);while(ps.length)S(60);
f.push({pose:"default",ms:300});return f});
