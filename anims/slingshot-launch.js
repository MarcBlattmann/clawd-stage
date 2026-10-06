// Clawd fires himself from a giant slingshot across the stage into a block tower; blocks and his friend go flying.
$cdA("slingshot-launch", { title: "Slingshot", w: 64 }, function (c) {
var T=c.T,P=c.P,R=c.R,G=c.G,W=c.W,M=Math,O=M.round,f=[],Z={z:-1},B={b:1},Y="warning",Q="error",U="up",C="closed",D="down",N="one-up",S="subtle",K="wink",
d=c.x>c.mx/2?-1:1,FT=["right","left"],RT=FT[d<0|0],LF=FT[d>0|0],
Tu=W-14,u1=Tu-7,xc=Tu-11,co=R(0,6),
SA=["▜▖   ▗▛"," ▜▖ ▗▛","  ▜█▛","   █","   █","  ▟█▙"],
FA="right-30 right-75 edge back-125 back left-55 left-30".split(" "),
sl=0,bp=0,bv=-1,bk=[],fu=Tu+1,fo=-9,fp=P(LF),k,i,j,t,x,o,n,ex,tr=[],
x0=d>0?c.x:W-9-c.x;
function X(u){return d>0?u:W-1-u}
function L(u,w){return d>0?u:W-u-w}
// band: prong (a,1) to pouch
function ln(a){for(var p=bp[0],q=bp[1],n=M.max(1,M.abs(p-a)),k=0,r=[],y,z;k<=n;k++){y=O(1+(q-1)*k/n);z=O(1+(q-1)*(k+1)/n);r.push(T(a+(p>a?k:-k),y,y==z?"─":p>a?"╲":"╱",Q,Z))}return r}
function E(x,o,p,ms,ex,cl){
var q=bp?ln(X(16)).concat(ln(X(20))):bv<0?[]:[T(L(17,3),1,bv%2?"~~~":"───",Q,Z)];
for(i=0;i<sl;i++)q.push(T(L(15,7),7-sl+i,SA[i],"#a0622d",Z));
bk.forEach(function(b){b.y>-1&&q.push(T(L(O(b.u),3),O(b.y),"▐█▌",b.c,Z))});
f.push({x:L(x,9),offset:o,pose:p,ms:ms,color:cl,props:(ex||[]).concat(q),actors:fo>-8?[{x:L(fu,9),offset:fo,pose:fp,color:"permission"}]:[]});
}
function cf(n,u,w,h,s){for(var r=[];n--;)r.push(T(L(u+R(0,w),1),R(0,h),c.pick(s||"✦*·✧"),c.rainbow(R(0,9))));return r}
// set: tower drops in, slingshot grows, friend lands
for(i=0;i<4;i++)for(j=0;j<4;j++)bk.push({u:Tu+3*j,ty:3+i,dl:15-5*i+j,c:c.rainbow(i+2*j+co)});
for(k=0;k<27;k++){sl=M.min(6,k>>1);bk.forEach(function(b){b.y=M.min(b.ty,k-b.dl-1)});if(k>22)fo=k-30;E(x0,0,P(k<9?LF:RT),k>22?60:40)}
for(k=0;k<5;k++){fp=P(0,k%2?U:N);E(x0,0,P(K,N),150)}
fp=P(LF);
c.walk(c.x,L(6,9),{ms:35}).forEach(function(w){E(0,0,0,70);Object.assign(f[f.length-1],w)});
// hop into the pouch, pull back, countdown
E(6,1,P(RT),140);
for(k=1;k<7;k++)E(6+k,O(-k/2-2*M.sin(M.PI*k/6)),P(RT,U),55);
bv=0;E(12,-3,P(K,U),300);
for(k=0;k<11;k++){x=12-k;o=O(-3+k*.3);bp=[X(x),G+o];E(x,o,P(k%4?RT:C,U,FT[k%2]),110)}
for(k=0;k<12;k++){o=k>8||k%3>1?1:0;bp=[X(2),G+o];fp=P(k>5?C:LF,k>5?U:D);
E(2,o,P(k>8?C:RT,U),k>8?70:110,[T(X(6),2,""+(3-(k>>2)),Y,B)].concat(k>5?T(L(Tu-3,2),1,"?!",Y,B):[]))}
// launch: arc + spin
bp=0;n=M.ceil((u1-2)/2);j=M.max(2,O(n/25));
for(k=1;k<=n;k++){
t=k/n;x=O(2+(u1-2)*t);o=M.max(-4,O(-t-14.4*t*(1-t)));bv=M.min(k,12);
tr.push(T(X(x+4),G+o+1,"·",S,Z));
ex=tr.slice(-18,-4);
ex.push(T(L(x-3,2),G+o+1,"≡≡",S));
if(k<6)ex.push(T(L(14,8),0,"SPROING!",Y,B));
fp=P(LF,x>u1-18?U:D);
i=k-O(n/2-3.5*j);E(x,o,i>=0&&i<7*j?{facing:FA[d>0?i%7:6-i%7]}:P(RT,U),26,ex);
}
// crash: blocks fly, friend lands on his head
fp=P(C,U);
bk.forEach(function(b){b.vx=M.random()*4.4-2.8;b.vy=-M.random()*1.4-.3-(6-b.y)*.2});
for(k=-1;k<31;k++){
if(k>=0)bk.forEach(function(b){if(b.y<6||b.vy<0){b.u+=b.vx;b.y+=b.vy;b.vy+=.3}if(b.y>=6){b.y=6;b.vy=b.vy>.9?-b.vy*.4:0}});
x=u1-M.min(k+1,4);o=[-1,-2,-2,-1][k+1]|0;
ex=k<8?[T(L(Tu-10,6),1,"CRASH!",k%2?Y:Q,B),k<0?T(X(Tu-1),4,"✸",Y,B):T(L(Tu-2,5),6,k<4?"▒░▒░▒":"░ ░ ░","inactive")]:[];
if(k<5)ex=ex.concat(cf(3,Tu-4,10,5,"*✦·"));
if(k+1&&k<17){t=k/16;fu=O(Tu+1+(xc-Tu-1)*t);fo=M.max(-7,O(-4+t-16*t*(1-t)));fp=P(C,U,FT[k%2])}
if(k>3&&k<16)for(i=0;i<3;i++)ex.push(T(L(x,9)+1+(k+i*3)%7,3,"✦*·"[i],Y));
if(k==16){o=1;fo=-2;ex.push(T(L(xc+2,5),0,"BONK!",Y,B))}
if(k>16){fo=-3;fp=P(k>24?K:0,k>24?U:D)}
E(x,o,P(k<16?C:k<20?0:k<26?LF:K,k>25?U:D),k<0?150:k<16?55:k<17?160:90,ex,k<0?"text":void 0);
}
// all fine: ta-da, hop down, wave
for(k=0;k<6;k++)E(xc,0,P(k%2?0:K,U),130,cf(4,xc-4,17,3));
for(k=1;k<7;k++){fu=xc+O(11*k/6);fo=O(-3+k/2-2*M.sin(M.PI*k/6));fp=P(RT,U);E(xc,0,P(RT),60)}
for(k=0;k<6;k++){fp=P(k%2?K:LF,k%2?U:N);E(xc,0,P(RT,k%2?N:U),160,k%2?[]:[T(L(xc+9,1),2,"♥",Q)])}
// cleanup
for(bv=-1,k=0;k<22;k++){
ex=[];if(i=bk.shift())ex.push(T(L(O(i.u)+1,1),O(i.y),"·",S));
sl=M.max(0,6-(k>>1));fu=M.min(W,fu+1);fo=fu<W?0:-9;fp=P(RT,D,FT[k%2]);
E(xc,0,P(RT,k<12&&k%4<2?N:D),55,ex);
}
E(xc,0,P(K),400);
f.push({pose:"default"});
return f;
});
