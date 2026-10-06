// Friends turn a jump rope for Clawd until it blurs; he trips, all laugh, they leave.
$cdA("jump-rope", { title: "Double dutch", w: 44 }, c => {
let G=c.G,W=c.W,R=c.R,P=c.P,T=c.T,K=c.pick,M=Math,i,k,n,pt=[],hc,cnt=0,pl=-9,pr=W,CY="chromeYellow",
x=c.clamp(c.x,W>99?74:13,c.mx-13),lx=x-13,rx=x+13,a=x-4,
Y=K([CY,"autoAccept","text"]),cs=K([["permission","success"],["success","permission"]]),
f=c.walk(c.x,x,{ms:45}),
// rope arc hand to hand: centre row m, end rows h/e, first n cols, glyph g
rope=(m,h,e,col,z,n=17,g)=>{
let q=[],o=[],j,v,y,u,r=j=>M.round(h+(e-h)*j/16+(m-(h+e)/2)*j*(16-j)/64);
for(j=0;j<n;j++){y=r(j);u=j<n-1?r(j+1):y;
for(v=M.min(y,u);v<=M.max(y,u);v++)(q[v]=q[v]||[])[j]=g||(v==y?(u==y?"─":u<y?"╯":"╮"):v==u?(u<y?"╭":"╰"):"│")}
q.forEach((s,v)=>{let t="";for(j=0;j<n;j++)t+=s[j]||" ";o.push(T(a,v,t,col,{z:-!!z}))});
return o},
gh=m=>rope(m,5,5,"subtle",1,17,"·"),
// notes and sweat drift a cell per frame
tick=()=>(pt=pt.filter(p=>(p.x+=p.dx,p.y+=p.dy)>=0&&p.y<7)).map(p=>T(p.x,p.y,p.t,p.c,{z:p.z})),
D=(le,la,re,ra,ft=[],lo=0,ro=0)=>[{x:pl,offset:lo,color:cs[0],pose:P(le,la,ft[0])},{x:pr,offset:ro,color:cs[1],pose:P(re,ra,ft[1])}],
F=(pose,ms,ps,actors,ex)=>f.push(Object.assign({pose,ms,props:tick().concat(ps),actors},ex)),
mv=(p,t,d=t-p,s=d*d>99?2:1)=>p+c.clamp(d,-s,s),
coil=()=>[T(pl+9,G+1,"@",Y)],
st=i=>i%2?["left","right"]:["right","left"],
// heat tint 0 (orange) .. 1 (red-hot); jump counter over the left turner
H=t=>c.rgb(215+40*t,119-50*t,87-30*t),
num=k=>cnt?[T(lx+4-(cnt>9),G-2,""+cnt,k,{b:1})]:[],
Ys=[0,2,4,6,4,2],Os=[0,1,-2,-2,-1,0],nr=13+R(0,3),ms,t,o,up,ps,L,s;

// friends walk in, the left one tosses the rope over
for(i=0;pl<lx||pr>rx;i++){pl=mv(pl,lx);pr=mv(pr,rx);
F(P(lx-pl>pr-rx?"left":"right"),40,coil(),D("right",0,"left",0,[pl<lx&&st(i)[0],pr>rx&&st(i)[1]]))}
F("look-left",320,coil(),D("wink","one-up","left"));
F("look-right",260,coil(),D("right","one-up","open","up"));
for(n=1;n<18;n++)F(P(n<9?"left":n<17?"right":"wink"),n>16?320:28,rope(1,4,4,Y,0,n),D("right","one-up",n<15?"open":"wink","up"));

// turning: speeds up and blurs, Clawd hops and heats up
for(i=0;i<=nr;i++){ms=M.max(26,M.round(120*.87**i));t=(120-ms)/94;L=i==nr;hc=t?H(t):hc;
// last turn is slow-mo: he crouches late and the rope snags his feet
for(k=0;k<(L?4:6);k++){up=Ys[k]<3?4:5;o=L?+(k==2):Os[k];s=L&&k>2;
ps=L||ms>49?[]:gh(Ys[(k+5)%6]).concat(ms<36?gh(Ys[(k+4)%6]):[]);
ps=ps.concat(rope(Ys[k],up,up,Y,k>2&&!L));
if(k==3&&!L){cnt++;if(t>.45&&R(0,1)){n=R(0,1);pt.push({x:x-1+10*n,y:G-1+o,dx:n*2-1,dy:1,t:"'",c:"suggestion",z:-1})}}
ps=ps.concat(num(s||t>.7?"error":t>.35?"warning":"text"));
if(s)ps.push(T(x+2,6,"✶",CY),T(x+6,6,"✶",CY),T(x+4,G-1,"!","error",{b:1}));
F(P(L?(k?"open":"closed"):k==1&&t>.5?"closed":o<-1&&!R(0,3)?"wink":"open",s||o<-1&&t<.5?"up":0,s?"left":0),
L?(k<3?170:480):ms,ps,D(s?"open":t>.6?"wink":"right",up<5?"one-up":0,s?"open":"left",up<5?"up":0),
{offset:o,color:hc,poof:k==1&&!L||L&&k==2?(t>.5?"wave":"dot"):0})}}

// he topples into the rope (face-plant), friends gasp
ps=[T(lx+4,G-1,"!","text"),T(rx+4,G-1,"!","text")].concat(num("error"));
[[1,90],[2,360,[T(x,5,"✦",CY),T(x+10,5,"✦",CY),T(x+5,4,"✶",CY)]],[1,220]].forEach(([o,d,e])=>
F(P("closed"),d,rope(6,4,4,Y,1).concat(ps,e||[]),D("open","up","open","up"),{x:x+1,offset:o,color:hc}));
// dizzy stars orbit, everyone laughs, Clawd cools down and hops up
let nl=16+R(0,4);
for(i=0;i<nl;i++){let dn=i<nl/2,lo=i%2?-1:0,w=i%4<2,ro=-1-lo;
if(R(0,2))pt.push({x:[lx,rx,x][R(0,2)]+R(3,5),y:G-1,dx:R(-1,1),dy:-1,t:"♪♫"[R(0,1)],c:c.rainbow(R(0,9))});
F(P(i==nl-1?"wink":"closed",!dn&&w?"one-up":0),R(90,130),
rope(6,(w?5:4)+lo,(w?4:5)+ro,Y,1).concat(num("error"),dn?[0,3].map(q=>(k=(i+q)%6,T(x+2+[0,2,5,7,5,2][k],G-(k&&k<3),q?"✧":"✦",CY))):[]),
D("closed",w?0:"one-up","closed",w?"up":0,0,lo,ro),{x:x+dn,offset:dn?1:-1-lo,color:H(1-i/nl)})}

// reel in, friends leave, Clawd waves
for(n=17;n>0;n--)F("look-left",30,rope(6,5,6,Y,1,n).concat(coil()),D("wink",n%4<2?"one-up":0,"left"));
for(i=0;pl>-10||pr<W;i++){pl=mv(pl,-10);pr=mv(pr,W);
F(P(i<6?"left":"right",i%6<3?"one-up":0),38,coil(),D("left",0,"right",0,st(i)))}
f.push({pose:P("closed"),ms:160},{pose:"default",ms:300});
return f});
