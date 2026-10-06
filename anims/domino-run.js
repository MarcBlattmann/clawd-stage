// Clawd deals a rainbow domino line across the stage, nudges the first, the accelerating chain rings a bell at the far edge, the ring ripples back and he celebrates.
$cdA("domino-run",{title:"Domino run",w:64},c=>{
var M=Math,rd=M.round,W=c.W,T=c.T,f=[],fl=[],cf=[],i,k,t,d,e,j,q,xs,
RB="red orange yellow green blue indigo violet".split(" "),I="inactive",Y="warning",B={b:1},R="right",U="up",O="one-up",
bx=W-8,by=-5,sw=0,SP=3+(W>180),n=M.floor((bx-11)/SP)+1,D=[],x=c.x,
// Domino glyphs per state (dx+1, row, text): 1 stand, 2 tilt, 3 falling, 4 down, 5 half hop, 6 hop, 7 dust, 8 sparkle, 9 landing.
GL="|15▌,16▌|15▐,16▌|25/,16/|16▄▄|16▀▀|15▄▄|16··|16✦✦|15▌,06·▌·".split("|"),
// All dominoes of one color on one row share one prop (spaces stay transparent).
S=xs=>{var m={},o=[],P=(x,y,s,cl)=>{var a=m[cl+"|"+y]=m[cl+"|"+y]||Array(W).fill(" ");for(var j=0;j<s.length;j++)x+j>=0&&x+j<W&&(a[x+j]=s[j])};
 D.forEach(d=>GL[d.s]&&GL[d.s].split(",").forEach(g=>P(d.p+ +g[0]-1,+g[1],g.slice(2),d.c)));
 fl.forEach(q=>P(q.x,q.y,q.g,q.d.c));
 for(var z in m)o.push(T(0,+z.split("|")[1],m[z].join(""),z.split("|")[0]));
 return o.concat(c.art(bx,by,["  ┬───┐","      │","      │","      │","     ─┴─"],I),c.art(bx+sw,by+1,[" ▟█▙","▟███▙"],Y,B),[T(bx+2-sw,by+3,"•",Y)],xs||[])},
F=(e,a,ms,xs,o,ft)=>f.push({x:x,pose:c.P(e,a,ft),ms:ms,offset:o||0,props:S(xs)});
for(i=0;i<n;i++)D.push({p:bx-SP*(n-1-i),c:"rainbow_"+RB[i%7],s:0});
var X0=D[0].p-10,v=3+(W>150);

// The bell drops in at the far edge with a thud.
for(;by<2;by++)F(by>-3&&R,0,45);
F(R,0,160,[T(bx+3,6,"·°",I),T(bx-2,6,"°·",I)]);
F(R,0,320,[T(x+4,3,"!",Y,B)]);F("wink",O,380);

// Dash to the left edge.
for(q=x-X0;x!=X0;){d=X0-x;x+=M.sign(d)*M.min(2,M.abs(d));F(d<0?"left":R,0,28,d<0&&[T(x+9,5,"≡≡","subtle"),T(x+9,4,"-","subtle")],0,x%4<2?"left":R)}
q>6&&F("left",0,140,[T(x-1,6,"°·",I)],1);F(0,0,140);F(R,0,260);

// Deal the dominoes: they spin through the sky and land upright, near ones first.
for(t=0;t<n||fl.length;t++){
 D.forEach(d=>d.s>8&&(d.s=1));
 t<n&&fl.push({d:D[t],k:0,N:4+rd((D[t].p-X0)/9)});
 fl=fl.filter(q=>{var d=q.d,u=++q.k/q.N,sx=x+8;
  if(u>=1)return d.s=9,0;
  q.x=rd(sx+(d.p-sx)*u);q.y=rd(3+2*u-M.min(3.4,1+q.N/5)*4*u*(1-u));q.g="│/─\\"[q.k%4];return 1});
 F(R,t<n&&t%2?O:0,c.clamp(rd(1800/n),30,70))}
D.forEach(d=>d.s=1);

// Survey the line... one wobbles! Hold breath... phew.
F(R,0,500);j=D[n/3+M.random()*n/3|0];
[2,1,2,1,2,1,1].forEach((s,q)=>{j.s=s;F(q?"closed":R,q&&U,q?120-q*6:220,[T(j.p,3,"!","error",B)],q>0&&q<5?1:0)});
F("closed",0,300);F(0,0,200,[T(x,3,"phew",I)]);F("wink",O,450);

// Anticipation, then the nudge; the chain speeds up as it goes.
F(R,0,240,0,1);x++;F(R,0,110,[T(x+9,4,"'","text")]);
for(e=0,i=0;i<n;i++)D[i].T=e,e+=M.max(22,170*M.pow(.91,i));
var end=D[n-1].T+110,kH,w0;
for(t=0;t<=end;t+=30){
 if(t==60)x--;
 D.forEach(d=>{e=t-d.T;d.s=e<0?1:e<45?2:e<90?3:4});
 F(R,t>end*.55&&U,30,D.filter(d=>d.s==3).map(d=>T(d.p+2,4,"'","text")),0,t>end*.55?(t/90&1?"left":R):0)}

// DING! The bell swings, rings ripple back over the fallen line, Clawd bounces and confetti flies.
for(kH=M.ceil((bx-x-10)/v),k=0;k<kH+18;k++){
 w0=bx-1-v*k;sw=k<16?(k&2?-1:1):0;
 xs=k<16&&k%5<4?[T(bx-2,0,"DING!",Y,B)]:[];k<4&&xs.push(T(bx+1,5,"✦",Y,B),T(bx-2,3,"*","text"));
 for(j=0;j<3;j++){q=w0+9*j;d=[Y,"chromeYellow","subtle"][j];q<bx-1&&q>x+8&&xs.push(T(q+1,3,"/",d),T(q,4,"(",d),T(q+1,5,"\\",d))}
 for(j=0;j<4;j++){q=k-3*j;q>=0&&q<12&&xs.push(T(bx+1-2*q,2-(q>>1),"♪♫"[j%2],c.pick([Y,"text"])))}
 D.forEach(d=>{e=M.floor((d.p-w0)/3);d.s=e<0?4:[5,6,5][e]||4});
 if(k==kH)for(j=0;j<14;j++)cf.push({x:x+4,y:3,vx:M.random()*3-1.5,vy:-.6-M.random(),g:c.pick("*✦·•"),c:c.rainbow(c.R(0,9))});
 cf.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.22;p.y<7&&xs.push(T(rd(p.x),rd(p.y),p.g,p.c))});
 e=k-kH;F(e<0?R:e%6<3?"wink":0,e<0?O:U,e<0?30:45,xs,[-1,-2,-2,-1,0,0,-1,-2,-2,-1][e])}

// Clean up: the line sparkles away left to right while the bell is hoisted off.
for(k=0;k<16;k++){D.forEach((d,i)=>{e=k-rd(i*9/n);d.s=e<0?4:e<2?8:e<3?7:0});by=2-M.max(0,k-5);F(k<8?"wink":R,0,50)}
f.push({x:x,pose:"default",ms:300});
return f});
