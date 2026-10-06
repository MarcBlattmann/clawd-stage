// Clawd stomps up a target, THUNKs an arrow into the bullseye, then splits it with a second one.
$cdA("archery", { title: "Bullseye", w: 48 }, function (c) {
var T=c.T,R=c.R,P=c.P,G=c.G,M=Math,f,k,n,t,
 x=c.clamp(c.x,0,c.W-41),h=x+8,X=M.min(c.W-6,M.max(x+R(34,44),64)),
 WD="#b47a3c",SH="#d8b078",DK="#5a3a1e",GR="inactive",YW="warning",BO={b:1},RT="right",
 FC=c.pick(["error,success","permission,warning","autoAccept,success","success,error"]).split(","),
 RC=[YW,"error","permission","text"],A=R(16,22)/10,
 ty=6,dx=0,st=0,e=RT,a="down",o=0,bw=-1,sm="│",pz=[];
// ring colour at col i, half-row v
function K(i,v){var d=M.sqrt(i*i/12.25+v*v/9);return d<.25?RC[0]:d<.52?RC[1]:d<.78?RC[2]:d<1.02&&RC[3]}
function arw(t,y,fc){return[T(t,y,"»",fc),T(t+1,y,"───",SH),T(t+4,y,"▶","text")]}
function B(s,l){return[T(l-1,6,s,GR),T(l+9,6,s,GR)]}
function cf(n,x0,w,y0,hh){for(var s=[];n--;)s.push(T(x0+R(0,w),y0+R(0,hh),c.pick("✦*·✧★"),c.rainbow(R(0,9))));return s}
function S(ms,ex,fr){
 var p=[],y=2+ty,i,j,u,v,q=G+o;
 for(i=1;i<4;i++)p.push(T(X-i,y+i+1,"╱",WD),T(X,y+i+1,"│",DK),T(X+i,y+i+1,"╲",WD));
 for(j=-1;j<2;j++)for(i=-3;i<4;i++){
  u=K(i,2*j-.5);v=K(i,2*j+.5);
  if(st&&!j&&i<0)p.push(T(X+dx+i,y,"─",DK,{bg:u}));
  else if(u||v)p.push(T(X+dx+i,y+j,u==v?"█":u?"▀":"▄",u||v,u&&v&&u!=v?{bg:v}:0));
 }
 if(st)p.push(T(X+dx-4,y,"»",st));
 if(bw>=0){
  p=p.concat(c.art(h+1,q-1,bw>1?"╱\n \n╲":"│\n"+sm+"\n│",GR));
  if(bw==1)p=p.concat(arw(h+1,q,FC[n]));
  if(bw>1)p.push(T(h+1,q,"──",SH),T(h+4,q,"▶","text"));
  p=p.concat(c.art(h+2,q-1,"╲\n )\n╱",WD));
 }
 pz.forEach(function(z){p.push(T(z[0],M.round(z[1]),z[3],z[4]))});
 f.push(Object.assign({x:x,pose:P(e,a),offset:o,ms:ms,props:p.concat(ex||[])},fr));
}
// nock, draw, aim, loose
function Lk(){e="open";S(350);e="wink";S(300)}
function shot(m){
 n=m;bw=1;e=RT;S(m?250:380);
 bw=2;e="wink";
 for(k=0,t=m?R(9,13):R(4,7);k<t;k++)S(m?130:110,m?[T(x+3,3,"···".slice(0,1+k/3|0),GR)].concat(k>2?T(x+(k<t-3),3+(k>t-4),"°","permission"):[]):0);
 S(140,[T(h+4,3,"✦",YW)]);
 bw=0;e=RT;
 for(var p0=h+2,L=X-7-p0,ys=[],q,j,y,tx=p0;tx<=X-7;tx++){
  t=(tx-p0)/L;ys[tx]=y=M.round(4-2*t-4*A*t*(1-t));
  sm=tx-p0<5?(tx%2?")":"("):"│";
  for(q=[],j=1;j<6;j++)if(tx-j>h+3)q.push(T(tx-j,ys[tx-j],"·","subtle"));
  S(22,q.concat(arw(tx,y,FC[m])));
 }
 sm="│";
}
f=c.walk(c.x,x);
// stomp: the target pops up
S(300);o=1;S(160);o=0;S(90,B("·",x));
for(ty=5;ty>-2;ty--)S(ty<0?90:55,ty<2&&B("░",X-4));
ty=0;S(220,B("·",X-4));
Lk();
a="one-up";bw=0;e=RT;
S(70,cf(3,h+1,3,2,4));S(70,cf(2,h+1,3,2,4));S(300);
// shot one: THUNK
shot(0);
st=FC[0];
[1,1,0,-1,-1,0,1,0,0,0].forEach(function(d,i){dx=d;e=i<5?"open":"wink";
 S(i?i<3?40:80:150,i<5?[T(X-2,0,"THUNK",YW,BO),T(x+4,3,"!",YW,BO),T(X+dx+4,2,i%2?")":" ",GR)]:[T(X-1,0,"10",YW,BO)])});
[-1,0,-1,0].forEach(function(d,i){o=d;S(90,[T(X-1,0,"10",i%2?YW:"text",BO)])});
Lk();
// shot two splits the first arrow
shot(1);
st=FC[1];pz=[[X-5,1,-1.5,"»─",FC[0]],[X-4,3,0,"──",SH]];
S(180,[T(X-5,2,"✸",YW,BO)]);
for(k=0;k<16;k++){
 dx=[1,2,1,0,-1,-2,-1,0,1,0,-1][k]|0;e=k<8?"open":"wink";
 pz.forEach(function(z){if(z[1]<6){z[0]--;z[2]+=.6;z[1]=M.min(6,z[1]+z[2])}});
 S(k<4?40:75,cf(k<5?4:0,X-10,4,0,4).concat(T(X-3,0,"SPLIT!",c.rainbow(k),BO),k>2&&k<8?T(x+3,3,"!!",YW,BO):[]));
}
// victory hops
a="up";
[-1,-2,-1,0,-1,-2,-1,0].forEach(function(d,i){o=d;e=i>4?"wink":"open";
 S(85,cf(3,x-2,14,0,G+o-2),{paint:function(cc){return c.rainbow(cc+i)}})});
a="one-up";e="wink";S(400);
// bow away, target sinks
bw=-1;a="down";e="open";
S(80,cf(3,h+1,3,3,2));S(80,cf(1,h+1,3,3,2));
e=RT;S(300);
pz.forEach(function(z){z[4]="subtle"});
for(ty=1;ty<7;ty++){if(ty>3)pz=[];S(65,B("░",X-4))}
f.push({x:x,pose:P("wink"),ms:400},{pose:"default"});
return f;
});
