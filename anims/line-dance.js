// Five hatted Clawds line up edge to edge: count-in, kicks, claps, hat tips, grapevine, spin and hat-tip waves, yee-haw, bow, friends leave.
$cdA("line-dance",{title:"Line dance",w:64},c=>{
var M=Math,W=c.W,G=c.G,T=c.T,P=c.P,R=c.R,f=[],nt=[],NS=0,i,j,k,q,n=28,I="inactive",Y="warning",E="right",L="left",B={b:1},
sp=(c.mx-6)/4,X=[0,1,2,3,4].map(i=>M.round(3+i*sp)),
mi=X.reduce((b,v,i)=>M.abs(v-c.x)<M.abs(X[b]-c.x)?i:b,0),
CL=["permission","success","autoAccept","error","chromeYellow"].sort(()=>M.random()-.5),
TN="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
HW="3221112231223",HAT=["▄█▄","▄▟█▙▄","▄▟███▙▄"],bt=R(150,180),
S=X.map((x,j)=>({x:x,j:j,c:j-mi?CL[j]:"clawd_body",h:c.hsv(R(18,34),.6,R(55,88)/100),m:j==mi,v:j==mi})),
Mn=S[mi],D=M.max(X[mi-1]+9||0,W-X[mi+1]||0);
// One frame; per dancer {p | e,a,f: pose, o offset, t/q hat lift/shift, hw hat width, k kick, u dust, nh no hat, z props}
var F=(fn,ms,xs)=>{var ac=[],pr=[],mf,g;
 NS&&M.random()<.3&&(g=c.pick(S),nt.push({x:g.x+R(1,7),y:G-2,s:c.pick("♪♫"),c:c.rainbow(R(0,9))}));
 nt=nt.filter(n=>(n.y-=.2,n.x+=M.random()-.5,n.y>-.5));
 S.map(d=>{if(!d.v)return;var s=(fn.call?fn(d):fn)||{},x=d.x,o=s.o||0,hw=+s.hw||3,a={x:x,offset:o,pose:s.p||P(s.e,s.a,s.f),color:d.c};
  s.nh||pr.push(T(x+4-hw+(s.q||0),G-1+o-(s.t||0),HAT[hw-1],d.h));
  s.k&&pr.push(T(x+(s.k>0?8:0),G+2+o,"▀",d.c));
  s.u&&pr.push(T(x-1,6,"·",I),T(x+9,6,"·",I));
  pr=pr.concat(s.z||[]);
  d.m?mf=a:ac.push(a)});
 f.push(Object.assign(mf,{ms:ms,actors:ac,props:nt.map(n=>T(M.round(n.x),M.round(n.y),n.s,n.c)).concat(pr,xs||[])}))};
// Friends march in (or out) from both edges in formation.
var march=(out,fn)=>{for(i=0;i<=n;i++){var t=out?i/n:1-i/n;S.map(d=>d.m||(d.x=c.clamp(M.round(X[d.j]+(d.j<mi?-1:1)*D*t),-9,W)));
 F(d=>d.m?fn(i):{e:(d.j<mi)^out?E:L,f:i<n?(i&1?L:E):0,a:out&&i>>2&1?"one-up":0},45)}};
// Ripple a move down the line, d frames apart: left to right, then back.
var wave=(N,d,ms,mv)=>[0,1].map(r=>{for(i=0;i<N;i++)F(s=>{q=i-(r?4-s.j:s.j)*d;return mv(q,r,s)},ms)});

// Clawd takes his spot, and a hat drops onto his head.
f=c.walk(c.x,X[mi]);Mn.x=X[mi];
[5,4,3,2,1,0].map(t=>F({t:t},55));
F({e:"closed",o:1},90);F({e:"wink"},280);
S.map(d=>d.v=1);
march(0,i=>({e:i>>3&1?L:E}));
// Count-in: 5, 6, 7, 8!
NS=1;
["5","6","7","8!"].map((s,i)=>{var tx=[T((W>>1)-1,1,s,i>2?Y:"text",B)];
 F({e:i>2?"wink":0,f:E},bt,tx);F({u:1},bt,tx)});
// Heel kicks (right, stomp, left, stomp) and claps with hat tips, in random order.
[()=>{for(k=0;k<8;k++){j=k&1?0:k&2?-1:1;F(j?{e:j>0?E:L,f:j>0?L:E,k:j}:{u:1},bt)}},
 ()=>{for(k=0;k<8;k++){j=k&3;F(d=>j?j-2?{}:{e:"wink",a:"one-up",t:1,q:1}:{e:"closed",a:"up",z:[T(d.x+4,G-2,"✦",Y,B)]},j&1?bt*.8:bt*1.2)}}
].sort(()=>M.random()-.5).map(g=>g());
// Grapevine three steps right, stomp, three steps left, stomp.
[1,1,1,0,-1,-1,-1,0].map(s=>{S.map(d=>d.x+=s);F(d=>s?{e:s>0?E:L,f:d.x&1?L:E}:{e:"wink",u:1},s?bt*.7:bt*1.6)});
// A spin ripples down the line and back the other way.
wave(28,3,40,(q,r)=>{var h=r?12-q:q;return q<0?{e:r?E:L}:q>12?{}:{p:{facing:TN[h]},hw:HW[h],o:q>3&&q<9?-1:0}});
// Hat-tip wave: each one dips, hops and tips the hat.
wave(18,3,50,(q,r,d)=>q==0?{o:1,e:"closed"}:q>0&&q<4?{o:-1,a:"one-up",e:"wink",t:1,q:1,z:q<3?[T(d.x+2,0,"yee!",Y,B)]:0}:{e:q<0?(r?E:L):0});
// Big finish: crouch, jump with hats popping up, YEE-HAW!
F({o:1,e:"closed"},130);
[-1,-2,-2,-1,0].map((o,i)=>F({o:o,a:"up",t:i<4?1:0},60));
S.map((d,i)=>nt.push({x:d.x+R(1,7),y:G-2,s:"♪",c:c.rainbow(i*2)}));
for(k=0;k<10;k++)F({a:"up",e:k&2?"wink":0,f:k&1?L:E},70,[T((W>>1)-4,1,"YEE-HAW!",c.rainbow(k),B)]);
// Bow together while sparkles twinkle across the sky.
NS=0;
for(k=0;k<6;k++)F({o:1,e:"closed"},130,[c.tile("  ★      ✦     ",0,k&1?Y:"text",k*3)]);
F({e:"wink",a:"one-up",t:1,q:1},350);
// The friends walk off waving; Clawd waves back, then throws his hat into the sky.
march(1,i=>({e:i>>3&1?E:L,a:i>>2&1?"one-up":0}));
S.map(d=>d.v=d.m);
F({a:"one-up",t:1,q:1},200);
for(k=2;k<7;k++)F({a:"up",e:"wink",t:k,q:k>>1},55);
F({nh:1,e:"wink"},300);
f.push({x:Mn.x,pose:"default",ms:200});
return f});
