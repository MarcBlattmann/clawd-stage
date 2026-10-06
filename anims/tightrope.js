// Clawd crosses a stage-wide tightrope with a balance pole, survives a gust, high-fives a friend.
$cdA("tightrope",{title:"Tightrope",w:66},function(c){
var S=c.P,M=Math.round,G=c.G,T=c.T,R=c.R,W=c.W,mx=c.mx,ps=[],i,k,t,q,u,
d=c.x*2<mx?1:-1,x0=mx/3|0,x0=d>0?Math.min(c.x,x0):Math.max(c.x,mx-x0),x1=d>0?mx:0,
fz=d>0?W:-9,E=d>0?"right":"left",B=d>0?"left":"right",O="open",C="closed",U="up",N="one-up",
FC=c.pick(["permission","success","autoAccept"]),PC="warning",RC="#d6ba8c",I="inactive",D={z:-1},
x=x0,o=0,rl=W,rr=-1,h0=0,h1=0,sag=0,tl=0,pl=0,fp=0,fo=0,Q=11,st=W/10+1|0,
f=c.walk(c.x,x0,{ms:40});
function sp(a,y,u,v,s,k,n,z){ps.push([a,y,u,v,s,k,n,z]);}
function Z(a,y,s,n,k){sp(a,y,0,0,s,k||"chromeYellow",n,{b:1});}
function rp(a,b){sp(a,3,-2,0,"~",RC,4,D);sp(b,3,2,0,"~",RC,4,D);}
function V(n){return n&1?"left":"right";}
// rope (sags under him), ladders, pole, particles, friend
function F(e,a,ft,ms){
 var p=[],r=[],tp=[],rw={},b=2*(G+o)+2-(pl>1),s,y,q,j;
 for(j=0;j<W;j++)r.push(j<rl||j>rr?" ":sag&&j>=x-1&&j<=x+9?j<x?"╮":j>x+8?"╭":" ":"─");
 rr<rl||p.push(T(0,3,r.join(""),RC,D));
 sag&&p.push(T(x-1,4,"╰"+"─".repeat(9)+"╯",RC,D));
 for(j=0;j<8;j++)j%4<(j<4?h0:h1)&&p.push(T((j<4?x0:x1)+3,6-j%4,j%4>2?"┬─┬":"├─┤","#a07846",D));
 if(pl)for(j=-Q;j<=Q;j++)if(j*j>16){
  s=c.clamp(b+M(j*tl/Q),0,7);y=s>>1;q=s&1?"▄":"▀";
  (rw[y]=rw[y]||" ".repeat(23).split(""))[j+Q]=q;
  j*j<Q*Q||tp.push(T(x+4+j,y,q,"error"));
 }
 for(y in rw)p.push(T(x-7,+y,rw[y].join(""),PC));
 ps=ps.filter(function(q){p.push(T(M(q[0]),M(q[1]),q[4],q[5],q[7]));q[0]+=q[2];q[1]+=q[3];return--q[6]>0;});
 f.push({x:x,offset:o,pose:S(e,a,ft),ms:ms,props:p.concat(tp),
  actors:[{x:fz,offset:fo,color:FC,pose:fp||S(B)}]});
}
// ladders rise, rope shoots out, friend walks in, both climb
for(i=0;i<20;i++){
 h0=Math.min(4,i+1);h1=c.clamp(i-6,0,4);
 if(i>2){k=st*(i-2);rl=Math.max(0,x0+4-k);rr=Math.min(W-1,x0+4+k);rl&&Z(rl,3,"◆",1);rr<W-1&&Z(rr,3,"◆",1);}
 if(i>10)fz-=d;
 fp=S(B,0,V(i));
 F(i<3?O:i<12?V(i>>2):E,0,0,70);
}
for(i=1;i<9;i++){o=fo=-(i>>1);fp=S(O,i&1?N:U,V(i+1));F(O,i&1?U:N,V(i),110);}
// friend throws the pole
fp=S(B,N);F(E,0,0,300);
var n=c.clamp(Math.abs(x1-x0)/5|0,10,24);
for(i=0;i<=n;i++){fp=S(B,i<3?U:0);q=i&3;u=M(c.lerp(x1+4-5*d,x0+4+5*d,i/n));
 for(k=-1;k<2;k++)Z(u+k*[1,1,0,-1][q],1+k*!!q,"━╲┃╱"[q],1,PC);
 F(i<n-3?E:O,i>n-5?U:0,0,45);}
pl=1;fp=0;Z(x-7,0,"✦",3);Z(x+15,0,"✦",3);
for(i=0;i<4;i++){tl=[2,-1,1,0][i];F(i?O:"wink",0,0,i?90:300);}
// cross; a gust hits mid-way
var L=Math.abs(x1-17*d-x0),m=c.clamp(6000/L|0,36,110),ph=R(0,9),g=c.pick([1,-1]),gs=L*R(40,60)/100|0,
TL="45215606051423",LN="11221212111000",WS=g>0?"left":"right";
for(i=0;i<L;i++){
 if(i==gs){
  var wx=g>0?-6:W,ds=g>0?x-wx:wx-x-8,v=c.clamp(ds/7|0,4,12),n0=Math.ceil(ds/v),xb=x;
  tl=0;Z(g>0?x-1:x+9,0,"!",n0,PC);
  for(k=0;k<n0+22;k++){
   if(k<n0+12)sp(wx+R(-3,3),R(0,3),v*g,0,c.pick(["≈≈≈","~ ~~","~~"]),I,W/v+2|0,D);
   t=k-n0;
   if(t<0)F(k<2?O:WS,0,0,70);
   else if(t<14){
    tl=(TL[t]-3)*g;x=xb+LN[t]*g;sag=t>2&&t<9;o=sag?-3:-4;fp=t>2&&t<10&&S(C,U);
    t-3||Z(x+2,0,"whoa!",5,PC);
    if(sag&&t&1){rp(x-2,x+10);sp(x+4+6*g,1,g,.4,"'","permission",4);}
    F(t<3?WS:t<10?C:O,0,sag?V(t):0,70+t*5);
   }else{t-14||sp(d>0?x+10:x-5,0,d*.3,0,"phew",I,8);fp=t>16&&S(O,N);F(t<17?C:"wink",0,0,t<17?110:160);}
  }
  fp=0;
 }
 x+=d;tl=M(1.6*Math.sin(i*.3+ph));if(i<5)h0=4-i;
 i%6||rp(x+4,x+4);
 F(i%17==9?C:E,0,V(i),m);
}
// made it: confetti, applause
for(i=0;i<24;i++){
 tl=0;pl=i%6<3?2:1;fp=S(i&2?O:C,i&2?U:N,V(i>>1));
 for(k=0;k<3;k++)sp(R(0,W-1),0,R(-1,1)*.3,.5,c.pick("✦*·♥✧°"),c.rainbow(R(0,9)),R(6,13),D);
 i-2||Z((W>>1)-3,1,"BRAVO!",18);
 i%3||sp(R(0,W-6),4,0,-.5,"clap!","text",4);
 F(pl>1?"wink":C,pl>1?U:0,0,80);
}
// drop pole, high five, jump down
pl=0;sp(x-7,3,0,1,"▀".repeat(23),PC,4,D);
for(i=0;i<13;i++){k=i>2&&i<10;i-3||sp(x+1,6,0,-.4,"clonk!",I,4);if(k)x+=d;i>9&&Z(x+4+5*d,0,"✦",1);fp=S(i>9?"wink":B,i>9?U:0);F(i>9?"wink":i>2?E:O,i>9?U:0,k&&V(i),i>9?150:70);}
fp=0;
for(i=0;i<7;i++){o=[-4,-3,-2,-1,0,1,0][i];i-5||(sp(x-1,6,-1,0,"·",I,3),sp(x+9,6,1,0,"·",I,3));F(i?O:C,i&&i<5?U:0,0,i?i>4?120:45:200);}
// friend leaves, rope reels in, ladders sink
for(i=0;i<26;i++){
 if(i<8){fo=(i+1>>1)-4;fp=S(O,i&1?U:N,V(i));}else{fz+=d;fp=S(E,i%4<2?N:0,V(i));}
 d>0?rl+=st:rr-=st;
 if(i>13)h1=Math.max(0,17-i);
 F(E,i>7&&i%4<2?N:0,0,i<8?90:50);
}
f.push({x:x,pose:"default",ms:150});
return f;
});
