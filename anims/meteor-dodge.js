// Meteors pelt the whole stage leaving glowing craters; Clawd dodges, gets singed by a near miss, then the last big one bonks off his umbrella.
$cdA("meteor-dodge",{title:"Meteor dodge",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,ab=M.abs,W=c.W,mx=c.mx,G=c.G,f=[],P=[],Ms=[],Cr=[],B={b:1},Z={z:-1},O="one-up",C="closed",I="inactive",
x=c.clamp(c.x,12,mx-12),d=x<mx/2?1:-1,sd=x+4<W/2?1:-1,i,k,m,am,s,u,q,bx,by,N,tx,lt,bang,soot=0,TR="▓▓▒▒░░··",
UC=[c.hsv(c.R(0,359),.7,1),"text"],
T=(a,y,t,cl,e)=>c.T(rd(a),rd(y),t,cl,e),Y=(a,y,t)=>T(a,y,t,"warning",B),
hot=k=>c.hsv(50-k*6,.85,1-k*.075),
L=t=>t<x+2?"left":t>x+6?"right":"open",
add=(x,y,vx,vy,g,l,ch,cl,e)=>P.push({x,y,vx,vy,g,l,ch,cl,e}),
// drop: lands on column t in n frames; v direction, p blast power.
drop=(t,n,p,v)=>Ms.push(m={x:t-(v=(v||c.pick([-1,1]))*(.7+rn()))*n,y:-1,vx:v,vy:7/n,n,t,p:p|0}),
burst=(a,y,n,p)=>{for(;n--;)add(a,y,(rn()-.5)*(2+p),-.4-rn()*(1+p*.4),.2,c.R(5,10),c.pick("*✦✧·'•"),hot(c.R(0,3)))},
// bg: a random meteor over r columns away from him.
bg=(p,r)=>rn()<p&&ab((q=c.R(1,W-2))-x-4)>r&&drop(lt=q,c.R(8,13)),
hit=(t,p)=>{bang=t;Cr.push({x:t,a:0,e:t>8&&t<66?c.R(60,99):1e4});burst(t,5.5,4+p*5,p)},
S=o=>{bang=-W;
 Ms=Ms.filter(m=>{m.x+=m.vx;m.y+=m.vy;if(--m.n<1)return hit(m.t,m.p);for(var k=5;k;k--)o.push(T(m.x-m.vx*k*.6,m.y-m.vy*k*.6,TR[k-1],hot(k)));return o.push(T(m.x,m.y,"●","#fff4c0",B))});
 Cr=Cr.filter(r=>(r.a%4||r.a>30||add(r.x+rn()-.5,5,0,-.25,0,8,"░","subtle",Z),o.push(T(r.x-1,6,"◣▂◢",r.a<30?hot(r.a/4):r.e-r.a<6?"subtle":I,Z)),++r.a<r.e));
 P=P.filter(p=>(p.x+=p.vx,p.y+=p.vy,p.vy+=p.g,--p.l>0&&p.y<6.5));
 P.map(p=>o.push(T(p.x,p.y,p.ch,p.cl,p.e)));return o},
F=(e,a,ft,ms,of,pr)=>{var sl=soot;f.push({x,pose:c.P(e,a,ft),ms,offset:of|0,props:S([]).concat(pr||[]),paint:sl>0?(q,r)=>(q*5+r*3)%7<sl?"#6e6660":"clawd_body":void 0})},
// Umbrella in the right hand: s 0..3 opens it, sp spins the stripes.
U=(s,of,sp,o)=>{o=o||[];for(var h=[0,1,3,5][s],q=-h,a,r,ch;q<=h;q++)for(r=0,a=ab(q);r<2;r++)(ch=r?h&&a==h?q<0?"▟":"▙":"█":h?a<h-1&&(a<2?"█":"▄"):"▲")&&o.push(T(x+8+q,G+of-3+r,ch,UC[q+sp+99>>1&1]));o.push(T(x+8,G+of-1,"│","text"));return o},
BM=(o,g,a)=>{for(var k=1,r,a=[];k<9;k++)for(r=0;r<2;r++)a.push(T(bx+1-g*(k+1),by+r,TR[k-1],hot(k)));a.push(T(bx,by,"▟█▙",hot(1),B),T(bx,by+1,"▜█▛","#c06a34",B));return a.concat(o)};
f=c.walk(c.x,x);
// A far-off meteor; Clawd squints.
drop(tx=sd>0?W-c.R(4,9):c.R(3,8),13);am=m;
for(i=0;i<24;i++)F(i<5?i==2&&C:L(am.x),0,0,i==13?250:60,0,i>12?[T(x+4,G-1,"?","text",B)]:[]);
// Shower all over the stage; he flinches at close ones.
for(i=0;i<60;i++){bg((.08+i/300)*M.min(W,140)/80,12);
 u=ab(bang-x-4)<24;F(u?C:L(lt),u&&"up",i%8==5&&"left",55)}
// Aimed at him: shuffle, hop, near miss.
for(k=0;k<3;k++){k&&(d=-d);(x+d*12<0||x+d*12>mx)&&(d=-d);drop(tx=x+4,12,k>1?2:0,d);am=m;
 for(i=0;i<(k>1?12:18);i++){u=i>3&&i<9;u&&(x+=d*(k>1?1:2));s=k==1&&[0,0,0,1,0,-1,-2,-2,-1][i]|0;
  bg(.06,20);
  F(i<4?L(am.x):i<9?d>0?"right":"left":i==16?C:L(tx),i>2&&i<9&&"up",u&&(i%2?"left":"right"),i<12?55:90,s,i<9?[T(x+4,G-1+s,"!","error",B)]:[])}}
// Blown up, singed, coughing, shakes the soot off.
for(i=0;i<24;i++){i<4&&(x=c.clamp(x+d,0,mx));
 i>12&&i<21&&(x+=i%2?1:-1,add(x+c.R(1,7),G+1,(rn()-.5)*.8,-.3,.1,5,"·",I));
 i>4&&i<13&&i%3==0&&add(x+4,G-1,0,-.2,0,8,"░",I,Z);
 soot=i<2?0:i<13?7:M.max(0,20-i);
 F(i<5||i==9||i>12&&i<21?C:0,i<4&&"up",0,i<4?50:i<13?100:50,[-1,-2,-2,-1,1][i],i<4?[Y(tx-2,1,"KRAK!")]:i>5&&i<11?[T(x+1,G-2,"*cough*",I)]:[])}
// Idea! Umbrella pops open.
for(i=0;i<14;i++)F(i<2?C:i>10&&"wink",i>4&&O,0,i<5?90:i<11?60:120,0,i<5?[Y(x+4,G-1-(i>2),"!")]:i<6?[Y(x+8,G-2,"✦")]:U(c.clamp(i-7,0,3),0,0));
// The big one skims in from the far side; he braces.
bx=sd>0?W+1:-4;q=x+7;N=16+ab(q-bx)/5|0;s=bx;
for(i=1;i<=N;i++){u=i/N;bx=rd(c.lerp(s,q,u));by=u<.55?-1:0;k=u>.4|0;F(L(bx),O,0,40,k,BM(U(3,k,0,[T(x+3,G-1+k,"!!","error",B)]),-sd))}
// BONK! It bounces back and crashes at the far edge.
burst(x+8,2,12,1);
tx=sd>0?W-3:2;s=bx;N=14+ab(tx-1-s)/6|0;
for(i=0;i<N;i++){u=i/N;bx=rd(c.lerp(s,tx-1,u));by=i<1?1:rd(-1.4+6.4*u*u);k=[2,1][i]|0;
 F(i<3?C:L(bx),O,0,i<2?90:40,k,BM(U(3,k,0,i<6?[Y(x+5,0,"BONK!")]:[]),sd))}
hit(tx,3);
for(i=0;i<10;i++)F(i<2?C:L(tx),O,0,70,0,U(3,0,0,i<6?[Y(tx-2,3-(i>2),"BOOM")]:[]));
// Twirl while craters cool, fold it away.
Cr.map(r=>r.e=M.min(r.e,r.a+c.R(8,26)));
for(i=0;i<12;i++)F(i<6&&"wink",O,i%2?"left":"right",90,0,U(3,0,i));
for(i=4;i--;)F(0,O,0,70,0,U(i,0,0));
F(0,O,0,90,0,[Y(x+8,G-2,"✦")]);
for(i=0;(Cr.length||P.length)&&i<60;i++)F(i%9==4&&C,0,0,70);
f.push({x,pose:"default",ms:300});
return f});
