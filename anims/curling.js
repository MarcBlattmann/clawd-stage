// Alpine curling: Clawd slides a stone the full width, two friends sweep like mad, it stops on the button.
$cdA("curling",{title:"Curling",w:66},function(c){
var f=[],W=c.W,G=c.G,R=c.R,P=c.P,M=Math,rn=M.random,Z={z:-1},B={b:1},U="one-up",E="right",V="left",C="closed",
T=(x,y,t,k,e)=>c.T(x,y,t,k||"text",e),
IC="rgb(150,210,255)",HC=c.pick(["error","warning"]),TC=W-27,me={x:c.x,o:0},b="rgb(200,150,100)",
K=["permission","success","autoAccept","professionalBlue"].sort(()=>rn()-.5),
A=[{o:-9,c:K[0]},{o:-9,c:K[1]}],
s=-9,sy=6,sw=1,rot=0,L=0,say="",pt=[],hf=0,snow=1,k=0,H=[0,-1,-2,-1],i,j,q,u,
m=[1,2,3].map(()=>Array(W).fill(" ")),n=m.map(a=>a.slice()),ICE="",
Y=(e,a,l)=>{me.p=P(e,a,l)},
sp=(x,y,d,v,g,t,h,k,z)=>pt.push({x,y,d,v,g,t,h,k,z}),
pos=()=>{A[0].x=s+7;A[1].x=s+20},
swp=()=>{pos();A.map((d,j)=>{d.st=k+j&1;d.l=d.st?V:E;d.e=rn()<.12?C:V;d.a=k>>2&1&&U;
 rn()<.7&&sp(d.x-3+R(-1,1),5,rn()*.8-.6,-.2-rn()*.5,.15,R(2,4),c.pick("·'°*"),IC)})};
// peaks: tips n, flanks m; ice sparse under banner
for(q=R(2,8);q<W;q+=R(9,20))for(u=R(1,3),j=0;j<u;j++){var a=j?m:n,r=3-u+j;a[r][q-1-j]="/";a[r][q+j]="\\"}
m=m.map(a=>a.join(""));n=n.map(a=>a.join(""));
for(i=0;i<W;i++)ICE+=i>9&&i<65&&i%4?" ":"▁";
var F=(ms,X)=>{k++;var p=[],a=[];
 if(L){for(j=1;j<4;j++)p.push(T(0,j,m[j-1].slice(0,L),"subtle",Z),T(0,j,n[j-1].slice(0,L),0,Z));
  p.push(T(0,6,ICE.slice(0,L),IC,Z));
  L>TC+8&&[[8,"permission"],[5],[3,"error"],[1]].map(h=>p.push(T(TC-h[0],6,"▄".repeat(2*h[0]+1),hf?c.rainbow(k+h[0]):h[1],Z)))}
 snow&&L&&pt.length<W/8&&sp(R(0,L-1),rn()*2,0,.1+rn()*.15,0,99,c.pick("··*❄"),0,Z);
 s>-9&&s<L&&p.push(T(s,sy,"▟█▙","inactive"),T(s+!!(rot&3),sy-1,["┌─","┃","─┐","┃"][rot&3],HC,B));
 A.map(d=>{if(d.o<-7||d.x>=W)return;var y=G+d.o,w=d.a=="up";
  a.push({x:d.x,offset:d.o,pose:P(d.e||V,d.a,d.l),color:d.c});
  p.push(T(d.x-!w,y+1-2*w,w?"│":"/",b),T(d.x-4+3*w+(d.st|0),y+2-4*w,w?"▀▀▀":"▄▄▄",d.c));
  d.say&&p.push(T(d.x+2,y-2,d.say,d.c,B))});
 pt=pt.filter(z=>(z.x+=z.d,z.y+=z.v,z.v+=z.g,z.y<7&&--z.t>0&&z.x<L));pt.map(z=>p.push(T(z.x+.5|0,z.y|0,z.h,z.k,z.z)));
 say&&p.push(T(me.x+1,G-2+me.o,say,"warning",B));
 f.push({x:me.x,pose:me.p,offset:me.o,ms,props:p.concat(X||[]),actors:a})};
// scenery grows in (and out)
var gr=(t,d)=>{for(;L!=t;){L=c.clamp(L+d,0,W);Y(L<me.x+5?V:E);F(45)}};
gr(W,M.ceil(W/16));
Y("wink");F(300);
// skate to the hack
for(i=0;me.x>0;i++){me.x=M.max(0,me.x-2);Y(V,0,i&1?V:E);F(35,[T(me.x+9,5,"≡",IC,Z)])}
Y(E);F(250);
// stone drops, friends drop in
for(s=9,sy=0;sy<6;sy++)F(35);
Y(C);me.o=1;F(70,[T(8,6,"°   °",IC),T(10,4,"·",IC)]);me.o=0;Y(E);F(250);
pos();
for(i=0;i<12;i++){A.map((d,j)=>{d.o=[-7,-5,-3,-1,0,0,-1,0][c.clamp(i-3*j,0,7)]});F(i<10?55:200)}
A.map((d,j)=>{d.say="!";F(200+j*100)});A.map(d=>d.say="");
for(i=0;i<8;i++){A.map((d,j)=>{d.st=i+j>>1&1});F(90)}
me.o=1;Y(E,U);F(450);
for(i=0;i<8;i++){me.x++;s=me.x+9;rot+=i&1;swp();F(75-i*5,[T(me.x-2,5,"≡",IC,Z)])}
// push off, glide, sweepers peel off, creep in
var s0=s,D=TC-1-s0,N=c.clamp(D*1.1|0,30,140),ps=s;
for(i=1;i<=N;i++){u=i/N;s=s0+M.round(D*(1-(1-u)*(1-u)));rot+=s-ps+!(k%3);ps=s;
 if(sw&&TC-1-s<4){sw=0;q=i;A.map(d=>{d.a="up";d.st=d.l=0;d.e=V})}
 sw?swp():A.map((d,j)=>{d.x<TC+8+9*j&&k%2&&d.x++});
 if(i<4)me.x++;me.o=+(i<10);
 if(i<10)Y(E,U);
 else if(sw){j=(i-10)%14;say=j<9?u<.35?"SWEEP!":u<.7?"HARD!":"HURRY HARD!":"";Y(j<9&&j&1?C:E,j<9&&(j&2?"up":U));me.o=j<9&&j%4==1?-1:0}
 else{j=i-q;say=j<10?"WHOA!":".".repeat(j/5%3+1);Y(j<10||k%20<1?C:E,j<10&&"up")}
 F(30+M.max(0,u-.75)*360|0)}
// dead on the button
say="";Y(E);me.o=0;F(600);
A.map(d=>d.e="open");Y();say="!";F(250,[T(TC,4,"✦","warning",B)]);
say="";hf=1;q="★ "+c.pick(["PERFECT!","ON THE BUTTON!","BULLSEYE!"])+" ★";
for(i=0;i<20;i++){me.o=H[i&3];Y(i&4?"wink":0,"up");A.map((d,j)=>{d.o=H[i+2*j&3];d.e=i&4?"open":"wink"});
 for(j=0;j<2;j++)sp(R(TC-16,TC+16),0,rn()*.6-.3,.2,.02,30,c.pick("*✦·•♦"),c.rainbow(R(0,9)));
 F(85,[T(TC-2-(q.length>>1),1,q,c.rainbow(i),{b:1,o:1})])}
// friends skate off
hf=me.o=0;A.map(d=>{d.o=d.a=0;d.e=E});Y(E);F(300);
for(i=0;A[0].x<W;i++){A.map(d=>{d.x+=2;d.l=i&1?V:E});Y(E,i>>2&1&&U);F(40)}
Y("wink",U);F(300);
snow=0;gr(0,-M.ceil(W/14));
Y();F(300);
return f});
