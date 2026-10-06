// A bird swoops in, lands on Clawd's head, hops to his hand for a duet, then flies off; he waves.
$cdA("bird-friend",{title:"Birdie",w:40},function(c){
var T=c.T,R=c.R,M=Math,U=M.round,G=c.G,W=c.W,Q="one-up",L="left",RT="right",N="open",C="closed",X={b:1},V="warning",Y="subtle",
 x=c.clamp(c.x,4,c.mx-12),f=c.walk(c.x,x,{ms:45}),h=x+4,
 bc=c.pick("permission chromeYellow success error autoAccept".split(" ")),
 e=N,a="down",ft="both",o=0,B=0,bx,by,bd=-1,wg="▄",pm=0,hb=0,ps=[],fl=0,fx,fy,fs=0,pz=0,i,j,k,n,
 sd=c.pick([-1,1]),ox=c.clamp(h-sd*R(8,11),2,W-3);
function S(X,Y,u,v,t,k,n){ps.push({x:X,y:Y,u:u,v:v,t:t,k:k,n:n})}
function F(ms,ex){
 var p=[];
 if(pm)bx=x+pm*4,by=G-1+o-hb;
 ps=ps.filter(function(q){return q.n-->0});
 ps.forEach(function(q){p.push(T(U(q.x),U(q.y),q.t,q.k));q.x+=q.u;q.y+=q.v});
 if(B>1)p.push(T(bx,by,B>2?"·":"v^"[fl%2],bc));
 else if(B)p.push(T(bx+bd,by,bd<0?"<":">",V),T(bx,by,"●",bc),T(bx-bd,by,wg,bc));
 if(fs==1){fy+=.1;fx+=(x+5-fx)*.08;if(fy>=G-1)fs=2,e=C}
 if(fs==2)fx=x+5,fy=G-1+o;
 if(fs>2)fx-=.6,fy-=.25,fs++>8&&(fs=0);
 if(fs)p.push(T(U(fx+(fs<2?M.sin(fy*7)*.7:0)),U(fy),fs>6?"·":"~",bc));
 f.push({x:x,offset:o,pose:pz||c.P(e,a,ft),ms:ms,props:p.concat(ex||[])});
}
function look(){e=bx<x+2?L:bx>x+6?RT:N}
function flap(){wg="▀─▄─"[++fl%4]}
function note(X,Y,u,k){S(X,Y,u,-.4,c.pick("♪♫"),k,6)}
// a chirp from off stage
F(350);note(sd>0?W-2:1,2,-sd*.3,bc);
for(i=0;i<7;i++){if(i==2)e=sd>0?RT:L;F(i<2?160:110,i>2&&[T(h,G-1,"?","text",X)])}
// swoop, duck
for(B=1,bx=sd>0?W+1:-2,by=1,bd=-sd,i=0;bx!=ox;i++){
 bx-=sd*M.min(M.abs(bx-h)>16?4:1,M.abs(bx-ox));flap();k=M.exp(-M.pow((bx-h)/4,2));
 by=c.clamp(U(1+2*k+(1-k)*M.sin(fl*.7)),0,3);
 o=k>.5?1:0;look();if(o)e=C;
 if(i%2)S(bx+sd*2,by,0,0,"~",Y,2);
 F(45);
}
// lands on his head
o=0;look();F(220,[T(h,G-1,"!",V,X)]);
for(bd=sd,i=0;i<3;i++)flap(),by=M.max(0,by-(i<1)),F(110);
for(j=by,n=M.abs(h-bx),i=1;i<=n;i++)bx+=sd,flap(),by=c.clamp(U(c.lerp(j,3,i/n)-M.sin(M.PI*i/n)),0,3),look(),F(i>n-3?110:70);
pm=1;wg="▄";o=1;e=C;F(90);o=0;F(180);
// where is it? tap tap
e=L;F(260);e=RT;F(260);
"right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ").forEach(function(q){pz={facing:q};F(55)});
pz=0;e=N;F(300,[T(x-1,G-1,"?","text",X)]);
for(i=0;i<2;i++)hb=1,F(80),hb=0,e=C,F(110),e=N,F(150);
bd=-bd;note(bx+bd,G-2,bd*.3,bc);F(160);F(160);e="wink";F(380);
// hops to his hand
a=Q;e=RT;F(260);bd=1;F(220);
for(pm=0,i=5;i<8;i++)bx=x+i,by=i==6?1:2,flap(),F(70);
pm=2;wg="▄";bd=-1;F(120);e="wink";S(x+6,G-2,0,-.3,"♥","error",5);F(400);e=RT;F(200);
// call, response, duet
for(k=R(2,3);k--;){
 hb=1;note(x+7,G-3,.3,bc);F(110);hb=0;F(240);
 e=C;o=-1;note(x+3,G-3,-.3,"clawd_body");F(130);o=0;F(250);e=RT;
}
for(n=R(12,15),i=0;i<n;i++){
 ft=i%2?L:RT;e=i%6==5?"wink":C;o=i%4==1?-1:0;hb=i%2;
 i%2?note(x+7+R(0,1),G-3+o,.35,c.rainbow(i)):note(x+2+R(0,2),G-2+o,-.35,c.rainbow(i+3));
 if(i==n>>1)S(x+5,G-2,0,-.35,"♥","error",6);
 F(140);
}
ft="both";a="up";e="wink";o=-1;hb=0;wg="▀";
for(i=0;i<8;i++)S(x+4,G-3,M.cos(i*.785)*.9,M.sin(i*.785)*.45,i%2?"✦":"·",c.rainbow(i),5);
F(160,[T(x+4,G-3,"♫","text",X)]);for(o=0,i=0;i<4;i++)F(90);wg="▄";F(240);a=Q;e=N;F(250);
// toss, fly off, wave; a feather falls
bd=1;F(300);note(x+9,G-2,.3,bc);F(200);e="wink";o=1;F(180);o=-1;F(70);pm=o=0;
for(i=0;B||fs==1;i++){
 if(B)bx+=M.min(3,1+(j=bx-x-8)/6|0),flap(),by=i<2?1-i:(i>>2)%2,B=j>30?0:j>24?3:j>16?2:1;
 if(i==3)fs=1,fx=bx-1,fy=1;
 e=RT;a=(i>>1)%2?"up":Q;
 F(50,a==Q&&[T(x+9,G-1,")",Y)]);
}
// souvenir, breeze
a="down";e=N;F(300);e="wink";F(500,[T(x+7,G-2,"✦",V)]);
for(i=0;i<2;i++)S(x+12+i*5,R(1,3),-2,0,"~ ~",Y,8);
e=RT;F(200);fs=3;
for(e=L,i=0;i<9;i++)F(70);
e="wink";F(400);
f.push({x:x,pose:"default",ms:200});
return f;
});
