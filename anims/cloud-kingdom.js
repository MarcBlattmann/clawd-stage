// Clouds drift around a floating castle; Clawd hops cloud to cloud, falls when one melts, waves at the castle and floats down.
$cdA("cloud-kingdom",{title:"Cloud kingdom",w:70,scene:1},c=>{
var W=c.W,M=Math,f=[],T=0,K=0,lit=0,cur=-9,R=c.rng(c.R(1,1e6)),Z={z:-1},t=c.T,Y=c.P,
X=c.x,O=0,D=X+4<W/2?1:-1,LR=["left","right"],ED=LR[D+1>>1],EN=LR[1-D>>1],CZ=Y("closed"),
CX=D>0?W-15:0,Xc=D>0?W-26:17,x0=c.clamp(D>0?M.min(X,Xc-50):M.max(X,Xc+50),0,c.mx),
i,k,u,p,r,S,pu,P=[],TW=[],CL=["#eef0ff",,"#b3b8e4"],WI="#dfe2ff",YE="#ffe9a0",
H=n=>(n=M.sin(n*12.9898)*43758.5)-M.floor(n),
// cloud in half-rows: surface S, width w, bumps h, belly b
st=(A,x,S,w,h,b)=>{var B=[0,1,2].map(_=>[R()*w,1.5+R()*w/4,1+R()*h]),i,r,u;
 for(i=0;i<w;i++){u=0;B.map(e=>u=M.max(u,e[2]*M.sqrt(M.max(0,1-((i-e[0])/e[1])**2))));
  for(r=0;r<6;r++)r>=S-M.round(u)&&r<=S+M.min(b,i,w-1-i)&&(A[r>>1][x+i]|=1+(r&1))}},
mk=(P,F,A)=>(A=[0,1,2].map(_=>Array(P).fill(0)),F(A),A.map(r=>r.map(b=>" ▀▄█"[b]).join(""))),
pc=()=>mk(15,A=>st(A,0,3,15,2,2)),
sk=(S,a,g,h,b,z)=>mk(W+90,A=>{for(var k=0;k<W+60;k+=a+R()*g|0)st(A,k,S,z+R()*z|0,h,b)}),
FA=sk(1,10,26,2,1,6),MI=sk(3,16,40,3,1,9),SE=sk(5,5,6,1,0,7),CC=mk(29,A=>{st(A,0,3,29,2,2);st(A,R()*12|0,3,16,3,2)}),
// layer: d sweeps in or breaks up (seed u), sh scrolls, m masks banner/castle
L=(d,A,x,y,C,u,sh,m)=>A.map((s,j)=>{for(var o="",n=s.length,i=0,q,e,h,v;i<(sh>=0?W:n);i++){q=sh>=0?(i+M.round(sh))%n:i;e=x+i;h=s[q];
 v=d*2-(u>=0?H(u+q*7+j*31):D>0?e/W:1-e/W);
 o+=h==" "||v<=0||m&1&&y+j>3&&e>9&&e<65||m&2&&e>CX-2&&e<CX+16?" ":v<.35?"░":v<.7?"▒":h}return t(x,y+j,o,C[j]||C[0],Z)}),
SC=(o=[],k)=>{if(K>0){TW.map(w=>(k=(T/170+w[2]|0)%7)<5&&o.push(t(w[0],w[1],"·✧✦✧·"[k],YE,Z)));
 [[FA,0,0,["#555b8c"],,9e3-D*T/700,2],[MI,0,1,["#8c92c4",,"#6f75a8"],,9e3-D*T/300,2],[SE,0,4,["#7e84b8"],,9e3-D*T/450,1],[CC,D>0?W-29:0,2,CL,,,1],
  [[" ▲    ".repeat(3),"▟█▙   ".repeat(3)],CX,0,["#ff7aa8"]],[[T/(lit?90:180)&1?"  ▶     ◥     ▶":"  ◥     ▶     ◥"],CX,0,["chromeYellow"]],
  [["███▄▄▄".repeat(2)+"███","██████▛▀▜██████"],CX,2,["#e4e0f4"]],[[" █    ".repeat(3),"       ▄"],CX,2,[lit?"#ffd75e":"#5d6190"]]].map(a=>o.push(...L(K,...a)))}
 P.map(p=>p.A&&p.d>.02&&o.push(...L(p.d,p.A,p.x-3,5+p.y,CL,p.s)));return o},
F=(z,ms,ex)=>{P.map((p,i)=>p.d+=c.clamp((p.k||i<cur||i>cur+1?0:1)-p.d,-.14,.2));
 f.push({x:X,pose:z,offset:O,ms,props:SC().concat(ex||[])});T+=ms},
pf=(x,o)=>[t(x-2,6+o,"°·",WI),t(x+9,6+o,"·°",WI)],
hp=p=>{var a=X,b=O,dx=p.x-X,n=M.max(5,M.ceil(M.abs(dx)/2)),k,u,w=R()<.5?"up":"one-up";
 O++;F(CZ,90);
 for(k=1;k<=n;k++){u=k/n;X=a+M.round(dx*u);O=M.max(-4,M.round(b+(p.L-b)*u-2.2*M.sin(M.PI*u)));F(Y(ED,w),45,k<3&&pf(a,b))}
 O=p.y=p.L+1;F(CZ,70,pf(X,p.L));O=p.y=p.L;F(Y(R()<.3?"wink":ED),150+R()*150|0)};
for(k=0;k<W/16;k++)TW.push([R()*W|0,R()*4|0,R()*7]);
var n=M.max(3,M.round(M.abs(Xc-x0)/18)),J=1+R()*(n-1)|0;
for(i=0;i<n;i++)u=i==J?-3:i&&R()<.35?-3:-2,P.push({x:i?M.round(x0+(Xc-x0)*i/n)+(R()*3|0)-1:x0,L:u,y:i?u:0,d:0,s:R()*99,A:pc()});
P.push({x:Xc,L:-3});
// sky condenses, Clawd spots the castle, a cloud lifts him
for(k=0;k<12;k++){K=k/11;F(Y(k==2?"closed":k<4?"open":k<8?EN:ED),90)}
for(u=x0>X?1:-1;X!=x0;)X+=u,F(Y(LR[u+1>>1],"down",LR[X&1]),45);
F(Y(ED,"one-up"),450,[t(X+4,3,"!","warning",{b:1})]);
cur=0;for(k=0;k<6;k++)F(Y(LR[k&1]),100);
for(;O>-2;)O--,P[0].y=O,F(Y("wink","up"),220,pf(X,O+1));
F(Y(ED,"up"),250);
// hops; one cloud melts and a rescue cloud zooms in
for(i=1;i<P.length;i++){hp(p=P[i]);cur=i;
 if(i==J){S=X-D*40;r={x:S,L:-1,y:-1,d:1,s:7,A:pc()};P.splice(i+1,0,r);p.k=1;
  for(k=0;k<9;k++){r.x=M.round(S+(X-S)*(k+1)/9);k>6&&O++;
   F(Y(k<2?(k?EN:ED):k==6?"open":"closed",k>5||k&1?"up":"one-up"),k<6?90:55,
    [t(r.x+2-D*10,5,"~~ ~",WI),t(X+(R()*9|0),5+(k&1),"·",CL[2]),k<7?t(X+4,3+O,k<2?"?":"!","warning",{b:1}):t(X+2,3+O,"' ' '",WI)])}
  O=r.y=0;F(CZ,80,pf(X,-1));O=-2;r.y=-1;F(Y("open","up"),90);O=-1;F(Y("wink"),380,[t(X+9,4+O,"°","#8fd0ff")]);
  cur=++i}}
// castle lights up, Clawd waves
lit=1;for(k=0;k<12;k++)F(Y(k<3?ED:k%5==4?"wink":"open",k<3?"down":k&1?"up":"one-up"),k<3?170:140,
 [...Array(3)].map(_=>t(CX+(R()*15|0),R()*2|0,"✦✧*·♪"[R()*5|0],c.rainbow(R()*7|0))).concat(k>2?t(X+9,4+O-(k&1),k&1?"'":")",YE):[],k>5?t(CX+7,M.max(0,3-(k-6)/2|0),"♥","error"):[]));
// pluck a puff, float down as the kingdom fades
O=-2;F(CZ,160);O=-3;
pu=()=>[t(X+2,2+O,"▄███▄",CL[0]),t(X,3+O,"▗▟█████▙▖",CL[0])];
F(Y("wink","up"),300,pu());
for(k=0;k<15;k++){K=1-k/14;O=k<5?-3:M.min(0,-3+((k-5)/3|0));X=Xc+M.round(M.sin(k*.8));
 F(Y(k%6==5?"wink":"closed","up",LR[k&1]),120,pu().concat(t(k&2?X-1:X+9,5+O+k%2,"·",WI)))}
K=0;for(k=0;k<3;k++)F(Y("open",k<2?"up":"down"),110,[t(X-k,2-k,"✦  ·  ✧  ·",YE),t(X+1-k,3,"· ✧  ✦ ·",WI)]);
f.push({x:X,pose:"default",ms:300});
return f;
});
