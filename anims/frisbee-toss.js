// Frisbee catch with a friend, each throw longer; a dog steals the last one and Clawd shrugs.
$cdA("frisbee-toss", { title: "Frisbee", w: 66 }, function (c) {
var T=c.T,P=c.P,G=c.G,R=c.R,M=Math,W=c.W,mx=c.mx,f,i,j,k,n,p,q,is,i0,DX,DY,
 d=c.x<mx/2?1:-1,Z=function(a,b){return d>0?a:b},E0=Z(-9,W),s=M.max(13,mx*.18|0),
 K={x:Z(c.clamp(c.x,13,s),c.clamp(c.x,mx-s,mx-13))},F={x:Z(W,-9)},
 FC=c.pick(["permission","success","autoAccept"]),QC=c.pick(["#ff5fa2","#3fd0ff","#c6ff3a","chromeYellow"]),
 DC=c.rgb(R(170,224),R(110,160),60),Q=0,sp=0,tr=[],D=0,BO={b:1},Y="warning",SB="subtle",I="inactive",MR="▖▗▘▝▌▐▙▟▛▜▚▞";
function L(v){return v>0?"right":"left"}
function hx(o,v){return o.x+(v>0?8:1)}
function hu(v){return v>0?"one-up":"up"}
function mo(){return D[0]+Z(8,-1)}
function ft(o,k){o.f=k%2?"left":"right"}
function on(x){return x>-9&&x<W}
function X(o,s,cl){return T(o.x+4,G-2,s,cl||Y,BO)}
function S(ms,p){
 var q=tr.map(function(t,j){return T(t[0],t[1],j?"·":"~",j<3?I:SB,{z:-1})});
 if(Q)q.push(T(Q[0],Q[1],Q[2]?"◐◓◑◒"[sp++%4]:"●",QC,BO));
 // dog (mirrored when running left)
 if(D)q=q.concat(c.art(D[0],D[1],["     ▙█▄",(D[2]%2?"▄":"▚")+"▄▄▄▄█▛▘",D[2]%2?" ▞   ▚  ":"  ▚ ▞   "].map(function(s){
  return Z(s,s.split("").reverse().map(function(h){var j=MR.indexOf(h);return j<0?h:MR[j^1]}).join(""))}),DC),T(D[0]+Z(-2,9),D[1]+1,"≡",SB));
 f.push({x:K.x,pose:K.p||P(K.e,K.a,K.f),offset:K.o,hide:K.h,ms:ms,props:q.concat(p||[]),
  actors:F.h?[]:[{x:F.x,offset:F.o,pose:P(F.e,F.a,F.f),color:FC}]});
}
// A throws toward v, B backs up ov cols and leaps
function toss(A,B,v,ov,H,cb){
 var sx,ex,tx=B.x+v*ov,px=[],py=[],t,r;
 A.a=hu(v);A.e="wink";Q=[hx(A,v),G-1];S(R(180,280));
 if(M.random()<.5)for(j=0;j<6;j++){Q[2]=1;S(70)}
 if(cb){Q=0;"right-30 right-75 edge back-125 back left-75 left-30".split(" ").forEach(function(p,j){K.p={facing:p};S(60,[T(A.x+(j%2?-1:9),G+1-j%2,"≈",SB)])});K.p=0}
 A.a=0;A.o=1;A.e="closed";Q=[A.x+(v>0?-1:9),G+1];S(160);
 A.o=0;A.a=hu(v);A.e=L(v);sx=hx(A,v)+v;ex=hx({x:tx},-v);
 n=c.clamp(M.round(M.abs(ex-sx)/2.8)+8,18,42)*(cb?1.4:1)|0;
 for(i=1;i<=n;i++){t=i/n;px[i]=M.round(sx+(ex-sx)*(1.6*t-.6*t*t));py[i]=M.max(0,M.round(G-1-t-H*M.sin(M.PI*t)))}
 Q=[sx,G-1,1];
 for(i=1;i<=n;i++){
  tr.unshift(Q);tr.length=M.min(tr.length,5);Q=[px[i],py[i],1];r=n-i;
  if(i==3)A.a=0;
  B.e=L(-v);B.f=0;
  if(B.x!=tx&&r<=M.abs(tx-B.x)+3){B.x+=v;ft(B,i)}
  B.o=r==2?1:r?0:-1;B.a=r<2?"up":0;
  if(cb&&cb(i,px,py))return;
  S(cb?34:30,i<3?[T(sx-v,G-1,"≈",SB)]:[]);
 }
 tr=[];B.e="closed";S(90,[T(ex-1,G-3,"✦",Y),T(ex+1,G-3,"✧",Y)]);
 B.o=0;B.a=hu(-v);B.e="wink";Q=[ex,G-1];S(R(200,300));
}
f=c.walk(c.x,K.x,{ms:28});
K.e=L(d);
for(;F.x!=Z(mx-6,6);F.x-=d){ft(F,F.x);F.e=L(-d);S(35)}
F.f=0;
for(k=0;k<6;k++){F.a=k%2?"up":0;K.a=hu(d);K.e=k>3?"wink":L(d);Q=[hx(K,d),G-1];S(130,k<3?[T(hx(K,d)+d,G-2-k%2,"✦",Y)]:[])}
F.a=0;
for(k=0;k<4;k++)toss(k%2?F:K,k%2?K:F,k%2?-d:d,[0,R(2,4),R(3,5),R(6,8)][k],2+k*.4);
// power throw; a dog snatches it
toss(K,F,d,0,3.4,function(i,px,py){
 if(!is){for(is=n*.6|0;is<n-2&&py[is]<1;is++);DX=px[is]-Z(8,-1);DY=py[is]-1;i0=M.max(1,is-M.round(M.abs(DX-E0)/3))}
 if(i>=i0){var l=M.min(1,M.max(0,(i-is+5)/5));
  D=[M.round(E0+(DX-E0)*(i-i0)/(is-i0||1)),G-M.round((G-DY)*M.sin(l*M.PI/2)),i];
  j=d*(D[0]-K.x);K.o=M.abs(j)<9&&!l?-2:0;K.e=K.o?"closed":L(j<0?-d:d)}
 if(i==is){tr=[];Q=[mo(),D[1]+1];F.e="closed";S(220,[T(mo()+d,D[1],"✦",Y),T(mo(),D[1]+2,"✧",Y)]);return 1}
});
// dog bolts off
for(k=1;on(D[0]);k++){
 D[0]+=3*d;D[1]=M.min(G,DY+(k/3|0));D[2]=k;Q=[mo(),D[1]+1];
 i=M.abs(D[0]-F.x)<9;F.o=i?1:0;F.a=0;F.e=i?"closed":L(d*(D[0]-F.x)<0?-d:d);
 K.e=L(d);K.o=0;
 S(40,i?[]:[X(F,"!")]);
}
D=Q=0;F.o=0;F.e=L(d);
S(350,[X(F,"!"),X(K,"!")]);
// chase
for(k=0;on(K.x);k++){
 K.x=c.clamp(K.x+2*d,-9,W);F.x+=2*d;F.h=!on(F.x);ft(K,k);ft(F,k);
 S(22,[T(K.x+Z(-3,12),G+1,"≡",SB),T(K.x+Z(-1,10),G+2,"·",I)]);
}
// scuffle off stage
K.h=1;
for(k=0;k<12;k++){p=[];for(i=0;i<3;i++){for(q="",j=5-i%2;j--;)q+=c.pick("░▒▓ ");p.push(T(Z(W-q.length,0),4+i,q,I),T(Z(W-1,0)-d*R(0,7),R(1,5),c.pick("*✦·"),Y))}
 if(k>3)p.push(T(Z(W-7,2),1+k%2,"woof!","text",BO));S(75,p)}
// back alone, shrug
K.h=0;K.x=Z(W,-9);
for(k=0;K.x!=Z(mx-12,12);k++){K.x-=d;ft(K,k);K.e=k%8<5?L(-d):"closed";S(50)}
K.f=0;K.e=L(d);S(450);
K.e="closed";K.a="up";S(800,[X(K,"?",I),T(Z(W-6,2),1,"woof",SB)]);
K.e=0;S(300,[X(K,"?",I)]);
K.a=0;S(250);
f.push({pose:"default"});
return f;
});
