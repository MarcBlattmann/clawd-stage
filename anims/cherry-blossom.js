// Cherry trees bloom across the stage; Clawd picnics with tea, a petal lands on his head, a gust whirls the blossoms away.
$cdA("cherry-blossom", { scene: 1, title: "Cherry blossom", w: 70 }, function (c) {
var W=c.W,M=Math,f=[],T=0,R=c.rng(c.R(1,1e6)),i,k,s,q,
x=c.clamp(c.x,1,c.mx-7),cx=c.x,GU=1e9,BL=0,RL=0,TP=0,CUP=0,HP=0,O=0,Tr=[],Pt=[],
PK="#ffa6cb",LP="#ffc2da",DP="#ff7fb5",CR="#f3e3d3",I="inactive",
cl=v=>v<0?0:v>1?1:v,
H=v=>(v=M.sin(v*127.1)*43758.5)-M.floor(v),
gs=()=>M.sin(M.PI*cl((T-GU)/2800)),
wd=()=>.25+.35*M.sin(T/1300)**4+3*gs(),
wq=()=>-12+(W+24)*cl((T-GU-200)/2200),
ht=x>5?x-4:x+19;
// a big tree shades the picnic, more trees across the width
Tr.push({t:ht,w:13});
for(i=R()*8|0;i<W+4;i+=14+R()*W/14|0)M.abs(i-ht)>9&&(i<x-4||i>x+18)&&Tr.push({t:i,w:7+2*(R()*3|0)});
for(i=0;i<W/8;i++)Pt.push([R()*W,R()*7,.5+R(),R()*7]);
var sc=()=>{
var L=[[],[],[],[]],A=[],w=wd(),g=gs(),
put=(l,x,y,h)=>{x=M.round(x);if(x>=0&&x<W&&y>=0&&y<7)((l=L[l])[y]||(l[y]=Array(W).fill(" ")))[x]=h};
Tr.forEach(t=>{
var v=M.min(cl((T-t.t/W*700)/700),1-cl((T-GU-600-(t.t+12)/(W+24)*2200)/900)),b=cl((v-.4)/.6),r;
// trunk grows, then the crown blooms and sways
for(r=6;r>2;r--)v>(6-r)*.1&&put(0,t.t,r,r>3&&t.t>9&&t.t<65?"│":"┃");
b>.3&&put(0,t.t-1,3,"╲")|put(0,t.t+1,3,"╱");
b>0&&[t.w-4,t.w,t.w-2].forEach((u,r)=>{var n=M.max(1,M.round(u*b)),o=M.round(w*(2-r)*.5);
for(k=0;k<n;k++){var z=t.t-(n>>1)+k+o;put(3,z,r,H(z*3+r*7+(T/(g>.2?150:600)|0))<.18?r?"✿":"❀":r==1&&k&&k<n-1?"▒":"░")}})});
var lv=M.min(cl((T-400)/1200),1-cl((T-GU-1400)/1600));
Pt.forEach((p,j)=>j<Pt.length*lv&&put(1+j%2,p[0],p[1]|0,j%6?"·•°"[(T/300+p[3]|0)%3]:"❀"));
[["#a8705a"],[LP],[DP],["#ffe2ee","#e07aa0"]].forEach(([h,bg],l)=>{
l>2&&g>.25&&[1,3].forEach(y=>A.push(c.tile("  ~~"+" ".repeat(24)+"──"+" ".repeat(24),y,I,-T*(y+2)/90,{z:-1})));
L[l].forEach((r,y)=>A.push(c.T(0,y,r.join(""),h,{bg,z:-1})))});
// whirl: spinning ring + tail
if(T>GU+200&&T<GU+2400)for(q=wq(),k=0;k<16;k++){var a=T/80+k*.63,t=k>9?k-9:0;
A.push(c.T(M.round(q-t*2.5+(t?M.sin(T/90+k):5*M.cos(a))),M.round(2.6+(t?1.4*M.sin(T/120+k*2):2*M.sin(a))),"✿❀•·"[k%4],k%2?LP:DP))}
return A},
sm=sx=>(k=(T/200|0)%3)<2?[c.T(sx+M.round(k*wd()),4-k,"°·"[k],I)]:[],
fg=()=>{var A=[];
BL>0&&A.push(c.T(x-3,6,"▚".repeat(BL),"#e05565",{bg:CR,z:-1}));
RL&&A.push(c.T(x-3+BL,6,"●","#a33a48",{z:-1}));
TP&&A.push(c.T(x+12,5,"▗▄▖","#98d6c6",{z:-1}),c.T(x+11,6,"▀███▌","#98d6c6",{bg:CR,z:-1}),...sm(x+13));
CUP&&A.push(c.T(x+9-(CUP>1),5-(CUP>1),CUP>1?"◣":"U","text"),...CUP<2?sm(x+9):[]);
HP&&A.push(c.T(x+4,4,"✿",PK,{b:1}));
return A},
st=ms=>{var w=wd();Pt.forEach(p=>{p[0]=(p[0]+w*p[2]*ms/60+W)%W;p[1]+=(.05+.04*M.sin(T/400+p[3]))*ms/60*(1+w/2);p[1]>=7&&(p[1]=0,p[0]=R()*W)})},
add=(pose,ms,ex)=>{st(ms);f.push({x:cx,pose,ms,offset:O,props:sc().concat(fg(),ex||[])});T+=ms},
E=(e,a)=>c.P(e,a||"one-up");
// trees grow, Clawd admires them
while(T<1500)add(T<500?"look-left":T<1000?"look-right":E("wink","up"),100);
c.walk(c.x,x).forEach(r=>{cx=r.x;add(r.pose,r.ms||60)});
// blanket, teapot, sit, sip
for(RL=1;BL<21;BL+=2)add("look-right",40);
RL=0;TP=1;add("default",220);
O=1;add(c.P("closed"),120);add("default",300);
CUP=1;for(i=0;i<8;i++)add(E(i==5?"closed":"open"),130);
for(s=c.R(1,2);s--;){CUP=2;add(E("closed"),600);CUP=1;add(E("wink"),400,[c.T(x+10,2,"♥","error")])}
// a petal flutters onto his head
var d=c.pick([1,-1]);
for(i=0;i<=16;i++){var px=M.round(c.lerp(x+4+d*12,x+4,i/16)+M.sin(i*.8)*2*(1-i/16)),py=M.round(i/4);
add(E(px>x+6?"right":px<x+2?"left":"open"),i>12?140:90,[c.T(px,py,"✿",PK,{b:1})])}
HP=1;add(E("open"),450);add(E("left"),220);add(E("right"),220);add(E("closed"),140);add(E("wink"),700);
// gust: the whirl takes his petal and strips the trees
GU=T;while(T<GU+2900){q=wq();q>x+6&&(HP=0);add(E(gs()>.6&&M.abs(q-x-4)<16?"closed":q<x+4?"left":"right"),60)}
// pack up
CUP=0;add("default",200);TP=0;add("default",160,[c.T(x+12,5,"·  ·",I),c.T(x+13,4,"°",I)]);
O=0;add(E("closed","up"),350);
for(RL=1;BL>0;BL-=2)add("look-left",40);
RL=0;while(T<GU+3800)add(T%800<400?"look-right":"look-left",100);
add(E("wink","up"),300);f.push({x,pose:"default",ms:300});
return f;
});
