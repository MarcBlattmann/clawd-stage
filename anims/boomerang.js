// Clawd flings a spinning boomerang to the far edge; it loops back, he ducks, it scares a bird at the other edge and he catches it (or gets bonked).
$cdA("boomerang", { title: "Boomerang", w: 64 }, function (c) {
var T=c.T,P=c.P,G=c.G,R=c.R,M=Math,W=c.W,PI=M.PI,f,k,
 x=c.clamp(c.x,M.round(c.mx*.3),M.round(c.mx*.7)),cx=x+4,
 d=cx+R(-6,6)<W/2?1:-1,E=[d>0?W-2:1,d>0?1:W-2],
 WD=c.pick(["#d08a45","#c8743a","warning"]),GL=c.pick(["◥◢◣◤","◤◣◢◥"]),
 H=R(24,30)/10,bonk=M.random()<.4,sp=0,tr=[],e="open",a="down",o=0,BO={b:1},YW="warning",
 bw,bi=0,BR=1;
function B(bx,by){return T(bx,by,GL[sp++%4],WD,BO)}
function L(v){return v<cx?"left":"right"}
function S(ms,p){f.push({x:x,pose:P(e,a),offset:o,ms:ms,props:p||[]})}
// one flight leg: from s0 out to edge ex (sky loop) and back to s1
function fly(s0,y0,ex,s1,y1,cb){
 for(var n=M.round(M.abs(ex-s0)*1.45)+18,i=1,t,sn,b,bx,by,q;i<=n;i++){
  t=i/n;sn=M.sin(PI*t);b=s0+(s1-s0)*t;
  bx=M.round(b+(ex-b)*sn);by=M.max(0,M.round(y0+(y1-y0)*t-H*sn+.9*M.sin(2*PI*t)));
  tr.unshift([bx,by]);tr.length=M.min(tr.length,7);
  q=tr.slice(1).map(function(p,j){return T(p[0],p[1],"·",j<3?"inactive":"subtle",{z:-1})});
  q.push(B(bx,by));
  cb(bx,t,M.abs(bx-cx),q,i);
  S(32,q);
 }
}
f=c.walk(c.x,x);
// pull it out, twirl, wind up, throw
e=L(E[0]);a="one-up";
S(120,[T(x+8,G-1,"✦",YW)]);
for(k=0;k<8;k++)S(70,[B(x+8,G-1)].concat(k<3?T(x+9,G-2,"✧",YW):[]));
e="wink";S(300,[B(x+8,G-1)]);
o=1;e="closed";S(280,[B(x+8,G)]);
o=-1;e=L(E[0]);S(70,[B(x+8,G-2),T(x+8-d,G-1,"≈","subtle")]);
o=0;
fly(x+8,G-1,E[0],cx,G,function(bx,t,D,q,i){
 a=t<.05?"one-up":"down";e=L(bx);
 // whistles while it is far away
 if(t>.3&&t<.55)q.push(T(cx-d*3,G-1-(i>>3&1),"♪",i>>4&1?"inactive":"text"));
 if(t>.55&&D<24){
  if(D<10){o=M.min(2,o+1);e="closed"}
  else q.push(T(cx,G-1,"!","error",BO));
 }
});
// second leg: whooshes over him, startles a bird at the other edge, comes home
fly(cx,G,E[1],bonk?cx:x+8,G-1,function(bx,t,D,q,i){
 if(t<.3){if(D>6&&o)o--;e=o?"closed":L(bx);if(!o&&t<.22)q.push(T(x+9,G-1,"°","permission"))}
 else if(bonk){e=L(t>.55?E[0]:bx);if(t>.55&&t<.85)q.push(T(cx,G-2,"?","inactive",BO))}
 else{e=L(bx);if(t>.72)a="one-up"}
 // bird: glides in from the edge until the boomerang zips past, then flees
 if(!bi){bw=E[1]+d*((i/3|0)-2);if(t>.5&&(bx-bw)*d>=-1||t>.85)bi=i;
  q.push(T(bw,BR,i%6<3?"v":"^","text"))}
 else{k=i-bi;
  if(BR-(k/3|0)>=0)q.push(T(bw-d*k,BR-(k/3|0),i%2?"v":"^","text"));
  if(k<3)q.push(T(bw-d,BR-1<0?BR+1:BR-1,"!",YW,BO));
  if(k<12)q.push(T(bw-d*(k/4|0),BR+(k/6|0),"~","inactive"),T(bw+d*2,BR+1+(k/6|0),",","inactive"));
 }
});
if(bonk){
 // BONK: ricochet, dizzy stars, sheepish pick-up
 [[5,2],[6,1],[8,1],[9,2],[10,3],[10,4],[10,5],[10,6]].forEach(function(p,i){
  o=i<3?1:0;e="closed";S(i?55:180,[B(x+p[0],p[1]),T(cx-2,0,"BONK!","error",BO)].concat(i<2?T(cx,G,"✸",YW,BO):[]));
 });
 var ring=[[1,3],[2,2],[4,2],[6,2],[7,3],[4,3]];
 for(k=0;k<16;k++){
  e=k%4<2?"left":"right";
  S(85,[T(x+10,6,GL[0],WD,BO)].concat([0,2,4].map(function(j){var p=ring[(k+j)%6];return T(x+p[0],p[1],"✦*✧"[j/2],j?"text":YW)})));
 }
 e="closed";S(260,[T(x+10,6,GL[0],WD,BO)]);
 e="right";S(300,[T(x+10,6,GL[0],WD,BO)]);
 o=1;a="one-up";S(160,[T(x+9,6,GL[1],WD,BO)]);
 o=0;e="wink";S(200,[B(x+8,G-1),T(x+1,G-1,"°","permission")]);
}else{
 // CATCH: smack into the hand, sparkle, twirl, victory hops
 o=1;e="closed";
 S(110,[B(x+8,G),T(x+6,G-1,"✦",YW),T(x+10,G-1,"✦",YW),T(x+8,G-2,"*",YW)]);
 o=0;e="wink";
 S(110,[B(x+8,G-1),T(x+5,G-2,"✧",YW),T(x+11,G-2,"✧",YW),T(x+8,G-3,"·",YW)]);
 for(k=0;k<8;k++){e=k<4?"open":"wink";S(65,[B(x+8,G-1)])}
 a="up";
 [-1,-2,-1,0,-1,-2,-1,0].forEach(function(v,i){o=v;e=i>3?"wink":"open";S(80,[B(x+8,G-1+v)].concat(v<-1?[T(x+R(-2,3),R(0,1),"✦",c.rainbow(i)),T(x+R(9,12),R(0,2),"✧",c.rainbow(i+3))]:[]))});
}
// tuck it away
a="one-up";e="wink";o=0;S(350,[T(x+8,G-1,GL[0],WD,BO)]);
a="down";e="open";S(120,[T(x+8,G,"✧",YW)]);
S(250);f.push({pose:"default"});
return f;
});
