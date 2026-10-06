// Clawd spins into a red cape, blasts off, loops the sky, lands hero-style; then the wind steals his cape.
$cdA("superhero-flight",{title:"Superhero",w:50},function(c){
var G=c.G,T=c.T,R=c.R,M=Math,S=M.sin,D=M.cos,J=M.round,Ab=M.abs,PI=M.PI,mx=c.mx,ps=[],O="open",C="closed",U="up",N="one-up",W="wink",I="inactive",Y="chromeYellow",V="warning",K=c.rgb(225,35,45),Z={z:-1},Q=" ▘▝▀▖▌▟▛▗▙▐▜▄▙▟█";
var x=c.clamp(c.x,3,mx-3),f=c.walk(c.x,x),d=Ab(2*x-mx)<9?c.pick([1,-1]):2*x<mx?1:-1;
var E=d>0?"right":"left",B=d>0?"left":"right",FA=d>0?N:U,FT=d>0?"left":"right",HA=c.pick([FA,U]);
var L=M.min(d>0?mx-x:x,R(28,40)),lp=R(7,L-10),o=0,cm=0,A=0,cw=.5,ph=0,ac=0,cz,kx,ky,i,j,k,t,x0;
var FS="right-30 right-75 edge back-125 back left-75 left-30".split(" ");
if(d>0)FS.reverse();
function sp(...a){ps.push(a)}
function F(e,a,ft,ms){
 var p=[],m={},s,q,h,n,w,ax,ay,t,k,u=-d*D(A),v=S(A);
 ps=ps.filter(q=>(p.push(T(J(q[0]),J(q[1]),q[4],q[5],q[7])),q[0]+=q[2],q[1]+=q[3],--q[6]>0));
 // cape: waving half-cell ribbon from the shoulder; A=0 hangs, PI/2 streams back
 if(cm){
  if(Ab(v)>Ab(u))u=0,v=v>0?1:-1;else v=0,u=u>0?1:-1;
  ax=cm>1?kx:2*x+8.5-d*(7.5-2*ac);ay=cm>1?ky:2*(G+o)+1;ph+=.9;n=cm>1?8:5+7*Ab(S(A))|0;
  for(s=0;s<n;s+=.5)for(w=cw*s/n*S(s*.8-ph),t=0;t<1.5+1.5*s/n+(cm>1);t+=.5){
   q=J(ax-d*s*S(A)+(w+t)*u);h=J(ay+s*D(A)+(w+t)*v);
   k=(q>>1)+","+(h>>1);m[k]|=1<<(q&1)+2*(h&1);}
  for(k in m){s=k.split(",");p.push(T(+s[0],+s[1],Q[m[k]],K,cz));}
 }
 f.push({x,offset:o,pose:e.facing?e:c.P(e,a,ft),ms,props:p});
}
var wind=n=>sp(x+4+d*n,R(G-1,G+2),-d,0,"~",I,n+4,Z);
// anyone watching? double spin in a swirl of sparkles: cape!
F(B,0,0,350);F(E,0,0,350);F(C,0,0,300);
for(i=0;i<14;i++){sp(x+4+R(-6,6),R(2,6),0,-.4,c.pick("✦✧*·"),c.pick([V,Y,"text"]),R(3,6),Z);F({facing:FS[i%7]},0,0,90-i*4);}
for(cm=1,k=0;k<10;k++)t=k*.63,sp(x+4+5*D(t),G+1+2*S(t),D(t),S(t)/2,"✦",Y,4);
F(O,U,0,350);F(B,0,0,450);F(W,0,0,400);
// chest out into the breeze
for(i=0;i<12;i++){A=.3+.25*S(i/2);cw=1.5;if(i%3==0)wind(12);F(E,0,0,90);}
// crouch and power up: pebbles float, the cape lifts
for(o=1,i=0;i<14;i++){A=i/20;cw=i/6;if(i%2)sp(x+4+R(5,7)*c.pick([1,-1]),6,0,-.35,c.pick("·°'"),I,R(5,8));F(i<8?C:E,0,0,i<8?100:70);}
// LAUNCH
for(k=-1;k<2;k+=2){sp(x+4+k*5,6,k,0,"▒",I,4);sp(x+4+k*4,6,k*1.5,0,"░",I,4);sp(x+4+k*6,5,k*.7,-.3,"·",I,5);}
for(A=0,o=0;o>-5;o--){for(k=0;k<2;k++)sp(x+R(2,6),G+o+3,0,0,c.pick("│╎'"),I,3,Z);F(E,U,0,o?35:50);}
o=-4;
// fly with speed lines; one big loop leaves a ring of sparkles
for(j=1;j<=L;j++){
 x+=d;o=j>L-4?j-L:j<3?-4:-3+M.max(0,2-Ab(j-lp));A=j>L-4?2.2:j<2?1.2:PI/2;cw=1.2;
 sp(x+4-d*R(9,16),G+o+R(0,2),0,0,c.pick("──═-"),I,R(2,4),Z);
 F(E,FA,FT,j<4?80-j*12:j>L-4?45:38);
 if(j==lp){x0=x;cz=Z;ac=4;for(i=1;i<=20;i++){t=i*PI/10;x=x0+d*J(5*S(t));o=-3+J(1.5*D(t));A=PI/2-t;
  sp(x+4,G+o+1,0,0,i%2?"✦":"·",i%2?Y:V,24,Z);
  F(i<11?{facing:FS[6-J(i*.6)]}:i<14?B:i<17?C:E,i<11?0:U,0,50);}cz=0;ac=0;}
}
// impact: dust burst, comic sound
o=1;A=1.2;cw=2;
for(k=-1;k<2;k+=2)for(j=0;j<4;j++)sp(x+4+k*(4+j),6-(j>2),k*(1+j*.4),j>2?-.3:0,"▓▒░·"[j],I,4+j);
sp(x+2,G-3,0,0,c.pick(["BOOM!","WHAM!","KRAK!"]),Y,9,{b:1});
F(C,0,0,120);
for(i=0;i<8;i++){A=M.max(0,A-.2);F(C,0,0,90);}
F(O,0,0,300);o=0;F(O,0,0,150);
// hero pose: fist up, cape billows, a glint
for(i=0;i<16;i++){A=.35+.25*S(i/2);cw=1.6;if(i%4==0)wind(12);if(i==5)sp(d>0?x+8:x+1,G-1,0,0,"✦","text",3,{b:1});F(i<5?E:i<12?O:W,HA,0,100);}
// a gust steals the cape
for(i=0;i<5;i++){wind(10+i*2);A=M.min(PI/2,A+.3);F(i<3?O:B,0,0,80);}
kx=2*x+8.5-d*7.5;ky=2*G+1;cm=2;
sp(x+4,G-1,0,0,"!",V,4,{b:1});
for(i=0;ky>-13;i++){kx-=d*2;ky--;A+=.4;F(B,i>2&&i<10?(d>0?U:N):0,0,70);}
cm=0;
F(C,0,0,350);F(O,0,0,200);F(W,0,0,400);
f.push({x:x,pose:"default",ms:200});
return f;
});
