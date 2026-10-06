// Parries spark back and forth; Clawd flings the friend's sword skyward, it sticks in the ground, both bow.
$cdA("sword-duel",{title:"Sword duel",w:46},function(c){
var M=Math,Q=M.random,G=c.G,W=c.W,P=c.P,T=c.T,R=c.R,g="warning",r="right",l="left",U="one-up",V="up",Z="closed",d="down",w="wink",e="open",
D=[1,1,0,-1,-1,-1,0,1],E=[0,-1,-1,-1,0,1,1,1],C=c.pick(["permission","success","autoAccept"]),
x=c.clamp(c.x,6,c.mx-19),o=W,co=0,oo=0,cp=P(r),op,ck=-1,ok=2,cn=2,on=2,fs=0,pt=[],f=c.walk(c.x,x),i,k,m,a;
// Sword: guard (u,v), n blade cells toward k (0=E, ccw), pommel p.
function sw(u,v,k,n,p){for(var s=[T(u,v,k%2?"╳":"┼",g)],j=1;j<=n;j++)s.push(T(u+D[k]*j,v+E[k]*j,"═╱║╲"[k%4],"text"));p&&s.push(T(u-D[k],v-E[k],"•",g));return s}
function Y(u,v,t){return[T(u,v,t,g,{b:1})]}
function B(u,v,n,s){while(n--)pt.push([u,v,(Q()-.5)*3.4,s?-.3:-Q()*1.3-.2,R(2,4),s])}
function S(ms,ex){
var p=ck<0?[]:sw(x+8+D[ck],G+co+E[ck],ck,cn);
if(ok>=0)p=p.concat(sw(o+D[ok],G+oo+E[ok],ok,on));
if(fs)p=p.concat(sw(fs[0],fs[1],fs[2],2,1));
pt=pt.filter(function(q){var L=M.min(q[4]--,3);q[0]+=q[2];q[1]+=q[3];q[3]+=.35;L>0&&p.push(T(M.round(q[0]),M.round(q[1]),(q[5]?"·°°":"·*✦")[L-1],q[5]?"inactive":L>1?g:"chromeYellow",{z:-1}));return L>0});
f.push({x:x,offset:co,pose:cp,ms:ms,props:p.concat(ex||[]),actors:op?[{x:o,offset:oo,pose:op,color:C}]:[]})}
function N(){ck=0;ok=4;cp=P(r,U);op=P(l,V)}
// Challenge, draw, salute.
for(i=0;o>x+16;i++){o-=o-x>28?2:1;op=P(l,V,i%2?l:r);S(35)}
op=P(l,V);S(120);for(;ok<4;S(80))ok++;S(350,Y(o-3,G-1,"✦"));
cp=P(Z);co=-1;S(70,Y(x+4,G-3,"!"));co=0;cp=P(r);S(260,Y(x+4,G-2,"!"));
cp=P(r,U);ck=0;for(i=0;i<3;i++){cn=i;S(60,Y(x+9+i,G-1,"✧"))}
cp=P(w,U);S(300);ck=ok=2;cp=P(Z,U);op=P(Z,V);S(450);N();S(300);
// Exchange: a=1 Clawd attacks; L: mid, high, low.
function X(a,L,w){
if(a){x++;ck=2;cp=P(r,V,l)}else{o--;ok=2;op=P(l,V,r)}
S(w);
a?x++:o--;if(L){x++;o--}
ck=[0,1,7][L];ok=[4,3,5][L];cp=P(a?r:Z,U);op=P(a?Z:l,V);
var u=x+(L?10:11),v=[G,G-2,G+2][L];
S(60,Y(u,v,"✸"));B(u,v,5);
for(k=0;o-x<16;k++){a?o++:x--;cp=P(r,U,a?0:k%2?l:r);op=P(l,V,a&&(k%2?l:r));a?ck=7:ok=5;if(k)a?ok=4:ck=0;S(k?60:90)}
N();S(R(80,220))}
for(a=c.pick(["00111","01011","10011"]),i=0;i<5;i++)X(+a[i],R(0,2),210-i*25+R(0,40));
x++;o--;
for(k=0;k<7;k++){a=k?k%2*2-1:0;x+=a;o+=a;cp=P(k%3?r:Z,U);op=P(k%3-1?l:Z,V);S(95,Y(x+11,G,k%2?"✶":"✸").concat(k>3?[T(o+k-4,G-1-(k>5),"°","rainbow_blue")]:[]));B(x+11,G,2)}
x--;o++;N();S(160);
// Disarm.
o--;ok=2;op=P(Z,V);co=1;S(R(300,450),Y(o+4,G-2,"!"));
o-=2;x++;co=0;ck=1;ok=3;cp=P(r,V);op=P(l,V);S(55,Y(x+10,G-2,"✸"));B(x+10,G-2,7);
co=-1;ck=2;ok=-1;fs=[o-1,G-2,2];op=P(e,V);S(55,Y(o-2,G-1,"✶"));B(o-1,G-1,4);
for(i=0;fs[1]>-3;i++){fs[1]--;fs[0]+=i%2;fs[2]=(fs[2]+7)%8;if(i==1){co=0;cp=P(r,U)}i%2||o++;B(fs[0],fs[1],1);S(40+i*12)}
a=fs[0];fs=0;cp=P(e,U);S(90,Y(a,0,"✦"));S(90,Y(a,0,"·"));S(R(350,750),Y(o+4,G-2,"?"));
for(m=x+11,i=1;i<8;i++){fs=[a+M.round((m-a)*i/7),i-3,(13-i)%8];op=P(fs[0]<o?l:e,V);S(100-i*9)}
B(m,G+2,5,1);oo=-1;op=P(Z);cp=P(Z,U);S(70,Y(o+4,G-3,"!"));
oo=0;cp=P(r,U);op=P(l);for(i=0;i<4;i++)S(60+i*15,i%2?[]:[T(m-1,G-1,"( )","inactive")]);
// Yield, wink, bow.
S(500);op=P(Z,V);S(550,[T(o+1,G-1,"°","rainbow_blue")]);
cp=P(w,U);op=P(l);S(400,Y(x+8,G-4,"✦"));
co=oo=1;cp=P(Z,U);op=P(Z);S(850);co=oo=0;cp=P(r,U);op=P(w);S(300);
// Cleanup.
for(cn=1;cn>=0;cn--)S(70);ck=-1;cp=P(r);S(160,Y(x+8,G-1,"✧"));
for(i=0;o>m+1;i++){o--;op=P(l,d,i%2?l:r);S(90)}
op=P(l,V);S(180);oo=-1;fs=[m,G-1,6];B(m,G+2,3,1);S(110);
oo=0;fs=[m,G,5];S(80);fs=0;ok=4;S(80);ok=3;S(80);ok=2;op=P(w,V);S(380);
for(on=1;on>=0;on--)S(70);ok=-1;op=P(l);S(160,Y(o,G-1,"✧"));
for(i=0;o<W;i++){if(i>3)o+=i>9?2:1;op=i<4?P(l,i%2?U:d):P(r,d,i%2?l:r);cp=P(r,i%6<3?U:d);S(i<4?160:40)}
op=0;pt=[];cp=P(w);S(350);cp=P();S(250);
return f});
