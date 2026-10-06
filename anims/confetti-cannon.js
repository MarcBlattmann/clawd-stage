// Clawd wheels in a party cannon, lights the fuse: BOOM, confetti everywhere. A hiccup rolls it back; Clawd hops it.
$cdA("confetti-cannon", { title: "Confetti cannon", w: 50 }, function (c) {
var P=c.P,T=c.T,R=c.R,M=Math,W=c.W,f=[],i,t,k,x,a,q,p,e,o,d,cp,Z=[],Y="chromeYellow",N="error",I="inactive",A="warning",Rt="right",Lf="left",B={b:1},U="up",O="one-up",S="closed",V="wink",s=c.x,X=R(0,2),L=R(6,8),K=X+L+9,Mx=K+8,r=s>W/2;
// Cannon at k; fuse from a; frame = confetti + cannon Z + p.
var can=(k,w)=>c.art(k,3,["    ▄▟█▌","  ▄███▀","▗███▀"],N).concat(T(k+1,6,w&1?"✕▀▀✕":"✚▀▀✚",A),c.art(k+2,3,["     ▌","  █","█"],Y)),C=can(K,0),fz=a=>a>L?[]:T(X+9+a,6,"~".repeat(L-a)+"╯",I),ft=i=>i&1?Lf:Rt,cf=()=>[],fr=(x,e,a,l,p,ms,o,cl)=>f.push({x,pose:P(e,a,l),props:cf().concat(Z,p),ms,offset:o,color:cl});
// Idea! Zips off, clank, pushes the cannon in.
p=T(s+4,3,"!",Y,B);fr(s,0,0,0,p,450);fr(s,V,O,0,p,250);e=r?Rt:Lf;fr(s,e,0,0,[],200);
for(x=s;x>-9&&x<W;)x=r?M.min(W,x+2):M.max(-9,x-2),fr(x,e,0,ft(x>>1),T(r?x-3:x+9,5,"≡≡",I),30);
f.push({x:-9,hide:1,ms:R(400,700),props:[T(1,2,c.pick(["clank!","bonk!"]),I)]},{x:-9,hide:1,ms:250});
for(k=-8;k<=K;k++)x=M.max(-9,k-9),Z=can(k,k),fr(x,Rt,0,ft(k),T(x+1-k%6,3-k%6,k>0&&k%6<2?"°":" ","permission"),k>K-3?120:70);
Z=C;fr(K-9,S,0,0,[],400);
// Fuse, match, spark; brace, peek, rumble.
for(x=K-9;x>X;)x--,fr(x,Rt,0,ft(x),fz(x-X),110);
var m=(ch,cl,e,ms,sp)=>fr(X,e,O,0,[fz(0),T(X+8,3,ch,cl),T(X+7,2,sp?"·*·":" ",Y)],ms);
m("•",N,Rt,350);
for(i=R(0,2);i--;)m("*",Y,S,50,1),m("•",N,0,280);
m("✶",Y,S,60,1);
for(i=0;i<5;i++)m("♦",i&1?A:N,i?0:V,110);
for(i=0;i<4;i++)fr(X,Rt,O,0,[fz(0),T(X+9,6,"♦",i&1?A:N),T(X+9,5,i>1?"·":" ",Y)],100,1);
for(a=0;a<=L+1;a++)for(i=R(2,3);i--;){
 var sx=a>L?K:X+9+a,sy=a>L?5:6,n=a>=L-2;
 p=[T(sx,sy,c.pick("✦*✧+"),Y,B),T(sx+R(-1,1),sy-1,c.pick("·'*°"),c.pick([Y,A,N])),T(sx+R(-2,2),sy-2,c.pick("·  "),Y)].concat(fz(a+1));
 fr(X,n?S:Rt,n?U:0,!n&&i&1?Lf:0,p,R(60,90));
}
fr(X,V,U,0,[],R(500,900));fr(X,0,0,0,T(X+4,3,"?",I),R(300,500));
for(i=0;i<6;i++)Z=can(K+(i&1),0),fr(X,S,U,0,T(K,4,"░",I),40);
// BOOM: confetti over the whole stage.
var Q=[],n=c.clamp(W*.7|0,44,96),G=["▘▝▗▖","◆◇","✦✧","~"];
for(i=0;i<n;i++)q=i<4?(X+4-Mx)*1.1+R(-2,2):R(0,9)<1?-R(4,Mx-X):R(2,W-Mx+W/9),Q.push({s:R(0,14),d:q,u:R(8,26)/10,v:R(15,28)/100,h:c.hsv(R(0,359),.7,1),g:G[R(0,4)]||G[0],p:R(0,6)});
for(cf=()=>cp,t=0;t<120;t++){
 cp=[];a=0;
 Q.forEach(q=>{
  var z=t-q.s;
  if(z<0)return;
  if(!q.P){
   var px=M.round(Mx+q.d*(1-M.exp(-z/7))+M.sin(z*.7+q.p)*M.min(1,z/10)),py=M.round(2-q.u*(1-M.exp(-z/3))+q.v*z),ly=px>X&&px<X+8?3:6;
   if(py<ly)return a++,cp.push(T(px,py,c.pick(q.g),q.h));
   q.P=T(px,ly,"▖▗"[q.p&1],q.h,ly>5?{z:-1}:{});
  }
  cp.unshift(q.P);
 });
 Z=can(K-(t<3),0);
 fr(X,t<2?S:t<7?0:t<10?Rt:t%8<5?0:V,t<2?U:t<10?0:t&2?U:O,0,[T(K+11,1,t<5?"BOOM!":" ",t&1?N:Y,B),T(K+8+(t>>2),2-(t>>2),t<2||t>8?" ":t<5?"▒░":"░",I)].concat(t<2?c.art(K+7,0,["\\│/","─✸─","/│\\"],Y,B):[]),t<2?90:R(60,75),+(t<2),[Y][t]);
 if(!a&&t>16)break;
}
// Shake off; hiccup, cannon rolls back, hop; fade.
var lp=Q.map(q=>q.P),gq=lp.filter(p=>p.y>5),hq=lp.filter(p=>p.y<6);cf=()=>gq;Z=C;
if(hq.length)for(i=0;i<4;i++)fr(X+(i&1),i?S:0,0,0,i<3?hq.map(q=>T(q.x+(i&1),3,q.t,q.c)):T(X-1,4,"·         ·",Y),i?70:400);
fr(X,0,0,0,[T(K+8,2,"pff",I),T(K+10,1,"°",I)],R(350,550));
for(k=K;k>-9;k-=d>12?1:2)d=k-X,o=d>12?0:d>10?1:d>8?-2:d>-8?-4:-3,Z=can(k,k),fr(X,o>0?S:d<4?Lf:Rt,o<0?U:0,0,[T(k+6,5,"≡",I),T(X+4,3,o?" ":"!",Y,B)],d>12?110:45,o);
Z=[];[-3,-2,-1,0,1,0].forEach((o,i)=>fr(X,i>3?S:0,i<3?U:0,0,[],60,o));
for(q=gq.length/6+1|0,gq.sort(()=>M.random()-.5);gq.length;)gq.splice(0,q),fr(X,0,0,0,[],90);
fr(X,V,0,0,[],350);
return f;
});
