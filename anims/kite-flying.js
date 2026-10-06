// Clawd runs, his kite climbs and loops; a gust snaps the string, he chases it off and struts back with it.
$cdA("kite-flying",{title:"Kite day",w:50},function(c){
var T=c.T,R=c.R,M=Math,U=M.round,G=c.G,Z={z:-1},B={b:1},W="warning",I="inactive",Q="one-up",LF="left",RT="right",
 e="open",a="down",ft,o=0,K=0,st=0,sp=0,hm=1,tl=4,kz=0,ph=0,ps=[],H=[],kx,ky=2,kf,i,j,n,L=R(13,16),J=-1,
 k1=c.pick(["error","fastMode","autoAccept"]),k2=c.pick(["chromeYellow","permission","success"]),cl=[k1,k2,k2,k1],
 x0=c.clamp(c.x,14,M.min(c.mx-16,26)),x=x0,x1=M.min(x0+R(14,18),c.mx),f=c.walk(c.x,x0,{ms:40});
function S(X,Y,u,v,t,k,n){ps.push({x:X,y:Y,u:u,v:v,t:t,k:k,n:n})}
function hold(){kx=x+8;ky=G-2+o}
function gust(n){for(;n--;)S(x+R(12,30),R(0,3),-2,0,"~~ ~~~".slice(R(0,3)),"subtle",16)}
function bang(y){return[T(x+4,y,"!",W,B)]}
// st: 1 sag, 2 taut, 3 snapped; hm: tail hangs
function F(ms,ex){
 var p=[],j,d,h,m,t,sx=kx+2,sy=M.min(ky+1,3),tx=st>2?kx+6:x+8,ty=st>2?ky+3:G+o-1;
 ps=ps.filter(function(q){return q.n-->0});
 ps.forEach(function(q){p.push(T(U(q.x),U(q.y),q.t,q.k,Z));q.x+=q.u;q.y+=q.v});
 ph++;H.unshift(ky);
 if(K){
  if(st)for(d=tx-sx,h=ty-sy,m=M.max(M.abs(d),M.abs(h),1),j=0;j<=m;j++)t=j/m,p.push(T(sx+U(d*t),sy+U(h*(st==2?t:2*t-t*t)),"·",st==2?"text":I,Z));
  for(j=0;j<tl;j++)p.push(T(kx+1+(hm?j>>1:-j),(hm?ky+j:H[j])+2+(hm?0:U(.45*M.sin(ph*.9-j*.8))),j%2?"•":hm?"(":"~",j%2?c.rainbow(j):"text",Z));
  for(j=0;j<4;j++)p.push(T(kx+j%2,ky+(j>>1),"◢◣◥◤"[j],cl[(+"0132"[j]+sp*ph)%4],kz?Z:B));
 }
 f.push({x:x,offset:o,pose:c.P(e,a,ft),ms:ms,props:p.concat(ex||[])});
}

// kite out, test the wind, a gust tugs
F(250);
K=kz=1;kx=x+7;ky=G;F(150);kz=0;ky--;F(130);
a=Q;hold();F(220,[T(x+10,2,"✦",W)]);
e=LF;F(350);e=RT;F(350);
for(gust(5),i=0;i<9;i++)hold(),ky-=i%3==1,F(70);
F(280,bang(G-2));
o=1;hold();F(160);
// run: it trails, dips, catches
for(hm=0,st=1,tl=6,o=0,n=x1-x0,i=1;i<=n;i++){
 x++;ft=i%2?LF:RT;j=i/n;e=j>.55&&j<.8?LF:RT;
 kx=x+8-U(L*M.min(1,1.4*j));ky=[2,2,2,2,2,3,3,2,1][U(8*j)];
 if(i%2)S(x,6,-1,0,"·",I,3);
 F(42);
}
// dig in, tug, it climbs
e=LF;ft="both";S(x+9,6,1,0,"°",I,3);F(160);
for(i=0;i<4;i++)a=i%2?"up":Q,i%2&&(kx--,ky=M.max(ky-1,0)),F(i%2?110:170);
e="wink";F(420,[T(kx-1,ky,"✦",W),T(kx+3,ky,"✧",W)]);
// loops; tug on dives, hum
var kb=kx,A=R(3,5),w=.2+M.random()*.12,w2=w*c.pick([1,2]);
for(n=R(40,52),i=0;i<n;i++){
 kx=kb+U(A*M.sin(i*w));ky=U(1.5-1.5*M.cos(i*w2));
 sp=j=ky>2;e=j?"closed":i%13==8?"wink":LF;a=j?"up":Q;ft=i%4<2?LF:"both";x=x1+j;o=!j&&i%10==5?-1:0;
 if(i%9==4)S(x+3,G-1+o,.4,-.4,c.pick("♪♫"),"text",5);
 if(i%15==7)gust(1);
 F(j?70:100);
}
// gust, taut, skid, SNAP
x=x1;o=sp=0;e="open";a="up";gust(9);F(260,bang(G-2));
for(st=2,i=0;i<6;i++)kx--,ky=M.max(0,ky-1),e="closed",ft=i%2?LF:RT,x-=i%2,S(x+9,6,1,-.3,"·",I,2),F(80);
j=U((kx+x+10)/2);n=U((ky+G)/2);st=3;
S(j-1,n,-1,0,"*",W,2);S(j+1,n,1,0,"*",W,2);S(x+9,G-1,0,.7,"~",I,4);
F(80,[T(j,n,"✸",W,B)]);
// tumble, chase, leap misses, both off
for(sp=1,kf=kx,i=0;x>-9;i++){
 if(i<5)x+=i<1,o=1,e=i<2?"closed":LF,a="down",ft="both";
 else x--,ft=i%2?LF:RT,a="up",e=LF,o=J>=0&&J<5?[-1,-2,-2,-1,0][J++]:0,J<0&&x-kx<3&&(J=0);
 if(J<2)kf=M.max(kf-(i<3?1.5:.5),2),ky=c.clamp(U(i/6+.7*M.sin(i*.7)),0,2);else kf-=2,ky=M.max(0,ky-1);
 kx=U(kf);
 F(i<5?[220,160,120,260,120][i]:J>0&&J<5?160-J*25:40,i==3&&bang(3));
}
// a beat; back with it
K=st=sp=0;S(c.W-6,1,-1.5,0,"~ ~","subtle",20);F(650);
for(K=hm=1,tl=4,a=Q,e=RT,j=M.min(R(6,14),c.mx);x<j;)x++,ft=x%2?LF:RT,hold(),F(55);
ft="both";e="wink";F(300,[T(x+7,1,"✦",W),T(x+11,2,"✧",W)]);
for(i=0;i<4;i++)o=i%2-1,hold(),F(120,i>1&&[T(x+4,1+o,"♥","error")]);
// tuck it away
a="down";kx=x+7;ky=G-1;F(130);kz=1;ky=G;F(130);K=0;F(300);
f.push({x:x,pose:"default",ms:200});
return f;
});
