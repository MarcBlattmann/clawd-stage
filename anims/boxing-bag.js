// A punching bag drops in; Clawd jabs a combo, uppercuts it over the bar, celebrates, and it comes round and bonks him.
$cdA("boxing-bag",{title:"Punching bag",w:44},function(c){
var R=c.R,P=c.P,T=c.T,pk=c.pick,M=Math,rd=M.round,ab=M.abs,I="inactive",S="subtle",Y="chromeYellow",V="warning",E="error",
r="right",C="closed",B={b:1},j,k,a,u,x=c.clamp(c.x,0,c.mx-14),f=c.walk(c.x,x),Q=x+11,X=M.max(0,x-3),D=M.PI/180,
bc=pk([E,"#b24634","autoAccept","#a66c3e"]);
// bag: angle a, lift dy, speed da
var bag=function(a,dy,da,s,dx,bx,by,h,p,n,i,sl,tp,tx,ty){
s=M.sin(a*D);dx=rd(7*s);bx=Q+dx;by=3.5*M.cos(a*D)+(dy||0);h=ab(s)>.7;p=[];
sl=h?0:c.clamp(2*M.tan(a*D),-1,1);tp=rd(h?by-.5:by-1.5);tx=h?dx:dx+rd(-1.5*sl);ty=h?by:tp;
n=rd(ab(ty)*2>ab(tx)?ab(ty):ab(tx));
for(i=1;i<n;i++)p.push(T(Q+rd(tx*i/n),rd(ty*i/n),ab(tx)<ab(ty)*.6?"│":ab(ty)<ab(tx)*.15?"─":tx*ty>0?"\\":"/",I));
p.push(T(Q-2,0,"──┬──",I));
if(by<-1&&!dy)p.push(T(bx-1,0,"~~~",S));
if(ab(da)>11&&a>45)for(i=1;i<4;i++){n=(a-da*i/2)*D;p.push(T(Q+rd(7*M.sin(n)),rd(3.5*M.cos(n)),"·",["text",I,S][i-1]))}
else if(ab(da)>3&&!h){n=rd(by-.5);i=da>0?bx-3:bx+3;p.push(T(i,n,"≡",I),T(i,n+1,"≡",I))}
return p.concat(h?c.art(bx-3,tp,["▄████▄","▀████▀"],bc):["▄█▄","███","███","▀█▀"].map((t,i)=>T(bx-1+rd((i-1.5)*sl),tp+i,t,bc)))};
// frame + bag
var F=(cx,o,p,ms,pr,a,dy,da,col)=>f.push({x:cx,offset:o,pose:p,ms:ms,color:col,props:bag(a||0,dy,da).concat(pr||[])});
// drop in
F(x,0,P(),450,[T(x+4,3,"?",I)],0,-8);
for(k=-7;k<2;k++)F(x,0,P(k>0?C:r),k>0?140:35-k*6,k>0?[T(Q-3,6,"·     ·",I)]:0,0,k);
F(x,0,P(r),400);
F(x,0,P("wink","up"),350);
for(k=0;k<4;k++)F(x,0,P(r,"up",k%2?"left":r),R(110,150));
// combo
var n=R(2,3);
for(j=0;j<=n;j++){let fin=j==n,arm=fin?"up":"one-up",amp=12+5*j+(fin?12:0),w=fin?"BAM!":pk("pap! pow! whap bop!".split(" "));
F(x+1,0,P(r,arm),R(45,70),[T(Q-1,3,fin?"✹":"✸",Y,B),T(Q-6,2,w,fin?V:"text",B),T(Q-9,2,j?"×"+(j+1):" ",Y,B)]);
[.6,1,.8,.3,-.1,0].forEach((m,i,A)=>F(i?x:x+1,0,P(i==1?C:r,i<2?arm:"up",i==3?"left":"both"),R(50,75),i<2?[T(Q-6,2,w,fin?V:I)]:0,m*amp,0,(m-(i?A[i-1]:0))*amp));
F(x,0,P(r,"up"),R(80,200))}
// charge
F(x,1,P(C),300);
for(k=0;k<7;k++)F(x,1,P(k%3?C:r),90,[T(x+R(0,8),R(3,4),pk([..."·'✦"]),Y)],0,0,0,c.hsv(20+k*6,.75-k*.06,1));
// uppercut, loop, K.O.?
var sp=[];for(k=0;k<9;k++)sp.push([R(-2,2),R(-3,0)/2,pk([..."✦*·✧+"])]);
var bur=t=>(t<7?sp.map((q,i)=>T(Q-1+q[0]*t,3+rd(q[1]*t+t*t*.12),q[2],c.rainbow(i),{z:-1})):[]).concat(t<5?[T(Q-8,1,"POW!",t%2?Y:V,B)]:[]);
F(x+1,-1,P(C,"up"),80,[T(Q-1,3,"✹",Y,B)].concat(bur(0)),0,0,0,Y);
a=0;u=0;
while(a<315){let pa=a;a=M.min(315,a+14+6*M.cos(a*D));u++;
F(u<2?x+1:x,u<2?-2:u<3?-1:a>150&&a<270?-(u>>1&1):0,u<4?P(r,u<3?"up":"down"):a<140?P(r):P(u>>1&1?"wink":r,"up"),a>130&&a<240?75:45,
bur(u).concat(u==3?[T(x-1,6,"·         ·",I)]:[],a>150&&a<255?[T(x+2,2,"K.O.",pk([Y,V,"success"]),B)]:[]),a,0,a-pa)}
// BONK, dizzy
F(x,0,P(C,"up"),180,[T(X,1,"BONK!",E,B),T(x+1,3,"✶       ✶",Y,B)],315,0,0,E);
for(u=315,j=0;j<17;j++){a=j<3?330+15*j:360+rd(25*M.sin((j-2)*.75)*M.pow(.8,j-2));let pr=[];
if(j<4)pr.push(T(X,1-(j>>1),"BONK!",j<2?E:I,B));
else for(k=0;k<3;k++){let e=j*.7+k*2.1,v=M.sin(e)>0;pr.push(T(x+4+rd(3.5*M.cos(e)),3,v?"✦":"·",v?Y:I))}
F(x,[1,2,2,1][j]||0,j>3?{facing:(j>>1)%2?"right-12":"left-12"}:P(C),j<4?90:110,pr,a,0,a-u);u=a}
// poke, flinch
for(k=0;k<4;k++)F(x,0,P(k%2?r:"left"),70);
F(x,0,P(C),150);
F(x,0,P(r),500,[T(x+7,3,"#",E,B)]);
F(x+1,0,P(r,"one-up"),250,[T(Q-5,2,"tap",S)],6);
F(x,0,P(C,"up"),400);
F(x,0,P(r),300);
F(x,0,P("wink"),450);
// ding, hoist
for(k=0;k>-9;k--)F(x,0,P(r,k>>1&1?"one-up":"down"),k?70:300,k>-4?[T(Q+3,0,"ding!",Y)]:0,0,k);
f.push({x:x,pose:P("wink"),ms:350},{x:x,pose:P(),ms:200});
return f;
});
