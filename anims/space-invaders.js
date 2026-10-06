// Invaders march across the whole sky; Clawd gets a cannon turret, shoots them all, tags the UFO: YOU WIN.
$cdA("space-invaders",{title:"Invaders",w:60},function(c){
var G=c.G,W=c.W,R=c.R,T=c.T,K=c.clamp,M=Math,Z=M.random,O=M.round,A=M.abs,f=[],
n=K(O(W/13),6,11),sp=K(W*.7/n|0,5,12),sx=M.max(1,O(W/70)),d=Z()<.5?1:-1,
e=R(2,5)*sx,fx=d<0?3+e:W-6-(n-1)*sp-e,fy=0,an=0,x=c.x,tk=0,L,tf=0,
al=[1,1].map(_=>Array(n).fill(1)),B=[],E=[],P=[],Q=[],U=0,ud,ux,ut=0,kl=0,tot=2*n,cd=0,hz=0,i,j,r,k,o,a,aim,st,bd,e,
GL=[["▚▀▞","▞▀▚"],["◢█◣","◥█◤"]],CL=["autoAccept","permission"],Y="warning",X="error",S="success",Lf="left",Rt="right",bo={b:1},pad=" ".repeat(sp-3),
bt=i=>al[1][i]?1:al[0][i]?0:-1,
boom=(x,y,q,k)=>{while(k--)P.push({x,y,u:(Z()-.5)*2,v:-Z()*.8,t:c.pick("·'°*"),c:q||c.rainbow(k)})},
ex=(x,y,a,q)=>E.push({x,y,a,c:q,t:0}),
hit=(bx,by)=>{var r=by-fy,q=bx-fx,i=q/sp|0;
 if(U&&!by&&bx>=ux&&bx<ux+5)return U=0,ex(ux,0,["✸✸✸✸✸","*✦ ✦*"," 100"," 100"," 100"],Y),boom(ux+2,0,X,8),1;
 if(r>=0&&r<2&&q>=0&&q%sp<3&&al[r][i])return al[r][i]=0,kl++,ex(fx+i*sp-(kl==tot),by,kl<tot?["*✸*","✦ ✦","· ·"]:["▒▓█▓▒","*✸✸✸*","✦ ✦ ✦","· · ·"],"text"),boom(bx,by,CL[r],kl<tot?4:16),1},
// One tick: move everything, draw it.
fr=(o,p,e,a,ft,ms)=>{var k=[];
 B=B.filter(b=>--b.y>=0&&!hit(b.x,b.y)&&k.push(T(b.x,b.y,"┃",Y,bo)));
 E=E.filter(e=>{var g=e.a[e.t++>>1];g&&k.push(T(e.x,e.y,g,e.c,bo));return g});
 P=P.filter(p=>{p.x+=p.u;p.y+=p.v;p.v+=.25;k.push(T(O(p.x),O(p.y),p.t,p.c,{z:-1}));return p.y<6});
 Q=Q.filter(b=>{var y=(b.y+=.5)|0;if(y>2&&b.x>x&&b.x<x+8)return hz=6,ex(b.x-1,3,["✶✸✶","· ·"],X),0;k.push(T(b.x,y,tk%2?"/":"\\",X));return y<6});
 for(r=0;r<2;r++){for(var s="",i=0;i<n;i++)s+=(al[r][i]&&i<=L?i<L?GL[r][an]:"░▒░":"   ")+pad;k.push(T(fx,fy+r,s,CL[r]))}
 tk++;f.push({x,pose:c.P(e,a,ft),offset:o,props:k.concat(...p,tf?T(x+3,G-1+o,"▗▲▖",S,bo):[]),ms:ms||40})};
// Invaders beam in.
for(L=0;L<=n;L++){L%3||(an^=1);fr(0,[],fx+L*sp<x+4?Lf:Rt,0,0,50)}
// Startle hop, turret drops onto his head.
for(j=0;j<2;j++)fr(-j,[T(x+4,G-1-j,"!",Y,bo)],0,j&&"up",0,j?110:280);
fr(0,[],"closed",0,0,140);
for(j=0;j<4;j++)fr(0,[T(x+3,j,"▗▲▖",S,bo)],0,"up",0,60);
tf=1;fr(1,[T(x+1,G,"·",S),T(x+7,G,"·",S)],"closed",0,0,90);
fr(0,[],"wink","one-up",0,380);
// Battle: the formation speeds up as it thins; Clawd leads his shots.
for(;(kl<tot||U)&&tk<800;){
 k=K(M.ceil((tot-kl)/3),sx,5);o=a=0;bd=1e3;
 if(kl<tot&&tk%k<1){an^=1;for(e=[n,0,0],i=0;i<n;i++)if((r=bt(i))>=0)e[0]=M.min(e[0],i),e[1]=i,e[2]=M.max(e[2],r);
  if(d<0?fx+e[0]*sp-sx<3:fx+e[1]*sp+2+sx>W-4){d=-d;fy+e[2]<2&&fy++}else fx+=d*sx}
 if(!ut&&kl>=n){ut=U=1;fy||fy++;ud=x+4<W/2?-1:1;ux=ud<0?W:-5}
 if(U){ux+=2*ud;if(ux<-5||ux>W)U=0}
 if(kl<tot&&tk>40&&Q.length<2&&Z()<.05&&(r=bt(i=R(0,n-1)))>=0)Q.push({x:fx+i*sp+1,y:fy+r+1});
 if(U&&(kl==tot||A(ux-x)<26))aim=ux+2+ud*4;else for(i=0;i<n;i++)if((r=bt(i))>=0){j=fx+i*sp+1+d*sx*(((tk+2-fy-r)/k|0)-(tk/k|0));if(A(j-x-4)<bd)bd=A(j-x-4),aim=j}
 j=K(aim-4,0,c.mx)-x;st=K(j,A(j)>3?-2:-1,A(j)>3?2:1);x+=st;j=aim-x-4;
 if(--cd<0&&!B.length&&A(j)<(Z()<.1?4:2)){B.push({x:x+4,y:3});cd=R(4,8);o=1;a="up"}
 fr(o,[o?T(x+4,3,"✦",Y,bo):[],U?T(ux,0,tk%4<2?"◢●■●◣":"◢■●■◣",X,bo):[]],hz-->0?"closed":o?"wink":j>1?Rt:j<-1?Lf:0,a,st?tk%2?Lf:Rt:0)
}
// Debris settles.
for(j=0;j<8;j++)fr(0,[],j<4?0:j&2?Lf:Rt,0,0,j?60:350);
// YOU WIN, fireworks, hops.
var s="Y O U   W I N",bx=W-19>>1,ln="═".repeat(17),
box=(l,q,t)=>[c.art(bx,0,["╔"+ln+"╗","║"+" ".repeat(17)+"║","╚"+ln+"╝"],q,{b:1,o:1}),T(bx+3,1,s.slice(0,l),t||Y,bo)];
for(j=1;j<14;j++)s[j-1]>" "&&fr(0,box(j,c.rainbow(j)),0,0,0,70);
for(j=0;j<28;j++){
 if(j%3<1){i=j%2?R(1,bx-3):R(bx+21,W-2);r=R(0,2);ex(i,r,["✸","✦"],Y);boom(i,r,0,7)}
 fr(j<16?[0,-1,-1,0][j%4]:0,box(99,c.rainbow(j),j%4<2?Y:"text"),j<16?0:"wink","up",0,70)}
// Turret blasts off, marquee fades.
for(tf=j=0;j<5;j++)fr(0,[...box(99,c.rainbow(j)),T(x+3,G-2-j,"▗▲▖",S,bo),T(x+4,G-1-j,"░",Y)],0,"one-up",0,60);
for(j=0;j<7;j++)fr(0,j<4?box(99,e=j<2?"inactive":"subtle",e):[],j<3?0:"wink",0,0,j<4?110:60);
f.push({x,pose:"default",ms:200});
return f});
