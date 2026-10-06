// A crowd fills the whole bottom row, Clawd counts in a Mexican wave that sweeps edge to edge and back, faster each pass, a dozer stands up late, and the stands erupt in confetti.
$cdA("stadium-wave",{title:"Stadium wave",w:64},c=>{
var M=Math,A=M.abs,rd=M.round,W=c.W,T=c.T,G=c.G,x=c.x,cx=x+4,f=[],cf=[],N=[],i,j,k,w,v,h,g=0,sh="",sk=0,J=0,
B={b:1},I="inactive",Y="warning",col,
TC=["claude","permission","success",Y,"autoAccept","error"],
CP="red yellow green blue violet".split(" ").map(s=>"rainbow_"+s),
far=cx<W/2?W-1:0,near=W-1-far,dir=far?"right":"left";
// Seats every 3 columns in team-colored sections; a gap stays free around Clawd.
for(i=1,k=0;i<W-1;i+=3){if(!k--)col=c.pick(TC),k=c.R(3,6);(i<x-2||i>x+10)&&N.push({p:i,c:col,s:-1,a:c.R(0,16),q:c.R(0,7)})}
var Z=c.pick(N.filter(n=>far?n.p>cx+14:n.p<cx-14));Z.z=1;
// Confetti piece.
var CF=(x,y,vx,vy,gr)=>cf.push({x:x,y:y,vx:vx,vy:vy,g:gr,t:c.pick("*✦·•°"),c:c.pick(CP)});
// Draw the crowd and confetti merged into one prop per color and row.
var D=xs=>{var m={},o=[],P=(x,y,s,cl)=>{var a=m[cl+"|"+y]=m[cl+"|"+y]||Array(W).fill(" ");for(var j=0;j<s.length;j++)x+j>=0&&x+j<W&&(a[x+j]=s[j])};
 g++;
 cf=cf.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=q.g,q.y<5.5&&q.x>=0&&q.x<W));
 cf.forEach(q=>q.y>-.5&&P(rd(q.x),rd(q.y),q.t,q.c));
 N.forEach(n=>{var p=n.p,s=n.s,cl=n.c;
  var y=s==4?4:5;s==3?P(p,6,"·",I):!s?P(p,6,"●",cl):s==1?P(p-1,6,"\\●/",cl):s>1&&(P(p-1,y,s>4?"/●\\":"\\●/",cl),P(p,y+1,s==4?"▀":"█",cl))});
 Z.z&&!Z.s&&P(Z.p+1,5-(g>>3&1),g>>3&1?"Z":"z",I);
 for(var z in m){var u=z.split("|");o.push(T(0,+u[1],m[z].join(""),u[0],{z:-1}))}
 return o.concat(xs||[])};
var F=(e,a,ms,xs,o,ft)=>f.push({x:x,pose:c.P(e,a,ft),ms:ms,offset:o||0,props:D(xs)});

// The crowd files in on both sides while Clawd looks around.
for(k=0;k<22;k++){N.forEach(n=>n.s=k<n.a?-1:k<n.a+2?3:0);F(k<8?"left":k<15?"right":0,0,50)}
F(dir,0,300);F("wink",0,250);
// Count in: 3, 2, 1, crouch... GO!
["3","2","1"].forEach((s,i)=>(N.forEach(n=>n.s=n!=Z&&M.random()<.1+i*.08?1:0),F(dir,"one-up",300,[T(cx,G-2,s,i>1?Y:"text",B)])));
F("closed","up",130,0,1);

// Four sweeps: to the far edge, back across, across again, and home to Clawd. Faster every time.
var WP=[cx,far,near,far,cx],SP=[1.1,1.6,2.3,3.4],s=M.max(1,W/80);
for(j=0;j<4;j++){var a=WP[j],b=WP[j+1],n=M.max(2,rd(A(b-a)/(v=SP[j]*s)));h=4+v*1.2;
 for(k=j?1:0;k<=n;k++){w=a+(b-a)*k/n;
  N.forEach(n=>{var d=A(n.p-w);n.s=n==Z&&Z.z?0:Z.k>0&&n==Z?(Z.k--,Z.k>3?2:1):d<h*.45?2:d<h?1:0});
  // The dozer sleeps through the first pass, then jumps up alone.
  if(Z.z==1&&A(Z.p-w)<h)Z.z=2;
  if(Z.z==2&&A(Z.p-w)>h+3)Z.z=0,Z.k=16;
  M.random()<.45+j*.15&&CF(w,4,M.random()-.5,-.5-M.random()*.6,.13);
  var dC=A(cx-w),up=dC<h+3,hop=dC<h*.6,xs=[];
  if(hop&&!J&&j<3&&sk<1)sh=j?["again!","faster!"][j-1]:"GO!",sk=16;J=hop;
  sk>0&&sk--&&xs.push(T(cx-(sh.length>>1),1,sh,"text",B));
  Z.k>0&&xs.push(T(Z.p,3,"!",Y,B));
  dC>h+6&&xs.push(T(rd(w)-2,3,j>2?"OLÉ!!":"olé!",Y,B));
  F(hop?"closed":up?"wink":w>cx?"right":"left",up?"up":0,j>2?36:42,xs,hop?-1:0,!up&&g>>2&1?"left":0)}}

// Clawd catches the wave: the whole stadium stands up from him outward and confetti rains.
F("closed","up",110,0,1);
for(k=0;k<38;k++){
 N.forEach(n=>{var e=k*W/16-A(n.p-cx);n.s=e<0?0:e<4?1:[4,2,5,2][k+n.q>>2&3]});
 if(k<24)for(i=0;i<W/50;i++)CF(c.R(0,W-1),-c.R(0,2),M.random()*.5-.25,.15+M.random()*.2,.01);
 F(k%6<3?"wink":0,"up",45,[T((W>>1)-4,0,"★ OLÉ! ★",c.rainbow(k),{b:1,o:1})],[-1,-2,-2,-1,0,0][k%6])}

// Everyone sits, the confetti settles, the crowd heads home.
for(k=0;k<26;k++){
 N.forEach(n=>n.s=k<2?(n.s>1?1:n.s):k<6+n.a?0:k<8+n.a?3:-1);
 F(k<8?"closed":k<14?"wink":dir,k>13&&k&2?"one-up":0,k<8?70:50,0,+(k>8&&k<13))}
f.push({x:x,pose:"default",ms:300});
return f});
