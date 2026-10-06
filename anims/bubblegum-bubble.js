// Clawd chews gum, blows a bubble till it lifts him; POP, gum on his face, he peels it off.
$cdA("bubblegum-bubble",{title:"Bubblegum",w:40},function(c){
var M=Math,T=c.T,R=c.R,G=c.G,x=c.clamp(c.x,0,c.mx-14),f=c.walk(c.x,x),
pk=c.pick(["#ff6eb4","#ff80c8","#ff5fa2"]),lt="#ffd6ec",Y="chromeYellow",I="inactive",B={b:1},
O="open",C="closed",E="right",V="left",W="wink",D="down",A="up",N="one-up",
o=0,ps=[],pn,U,r=0,q=1,i,j,k,n,a,h,
L=function(n){return"▄".repeat(n)},
H=function(a){return function(cc,rr){return rr==a&&cc>2&&cc<6?pk:U}},
K=function(X,Y,t,k){return T(X,Y,t,k||pk)},
F=function(e,a,ms,p,ft){
 var z=ps.filter(function(p){return p.l-->0}).map(function(p){p.x+=p.u;p.y=M.min(6,p.y+p.v);p.v+=p.g;p.y>5&&(p.u/=2);return K(M.round(p.x),p.y+.5|0,p.s,p.c)});
 f.push({x:x,offset:o,pose:c.P(e,a,ft||(o<0?f.length%2?V:E:"both")),ms:ms,paint:pn||U,
  props:(p||[]).concat(z,r?bub():[],o<0?T(x+2-o,6,"─".repeat(5+2*o),"subtle"):[])});
},
sp=function(X,Y,u,v,g,l,s,k){ps.push({x:X,y:Y,u:u,v:v,g:g,l:l,s:s,c:k})},
bub=function(){
 var a=[],ry=r/q,rx=2*r*q,cx=2*x+13+rx,cy=2*(G+o)+2,y,u,v,m,s,X,Z,l=cx/2-r*q|0;
 for(y=(cy-ry)/2|0;y<=M.min(6,(cy+ry)/2);y++){
  for(s="",u=l;u<=cx/2+r*q;u++){
   for(m=v=0;v<4;v++)X=(2*u+v%2+.5-cx)/rx,Z=(2*y+(v>>1)+.5-cy)/ry,m|=(X*X+Z*Z<1)<<v;
   s+=" ▘▝▀▖▌▞▛▗▚▐▜▄▙▟█"[m];
  }
  a.push(K(l,y,s));
 }
 r>2.5&&a.push(T(cx/2-r*q/2|0,cy/2-ry/4|0,"▘",lt,{bg:pk}));
 return a;
},
chew=function(n){o=1;F(C,D,130);for(k=0;k<n;k++)a=k%2,o=a&k>>1,pn=a&&H(1),F(a?C:O,D,a?140:150+R(0,60),[],k%4==2?V:U);o=pn=0},
cv=function(){return[K(x+2,G+o,"█▓██▓█")]},
bl=function(X,Y,e,a,ms){F(e,a,ms,[K(X,Y,"●")])};

// Flip the gum in, chew.
F(E,N,120,[T(x+8,G-1,"✦",Y)]);
F(E,N,400,[K(x+8,G-1,"■")]);
for(j=0;j<7;j++)F(j<2?E:j<5?V:C,j<3?N:D,j>5?40:70,[K(x+ +"8765444"[j],+"3211235"[j],"■")]);
chew(R(8,11));F(W,D,400);
// Blow: it swells, he floats.
for(n=R(5,6),i=1;i<=n;i++){
 F(O,D,i>3?160:240);
 for(a=6.1*i/n;r<a;)r+=.35,o=-(r>3.6)-(r>5.1),pn=i>n-2&&function(){return"#ec5f4a"},F(C,D,55);
 pn=0;o<0&&i>n-2?F(V,D,280,[T(x+4,G-2+o,"!",Y,B)]):F(i%2?E:W,D,i*30+190);
}
// Trembles... last puff.
for(k=0;k<8;k++)q=k%2?1.06:.95,h=x+7.5+2*r*q|0,F(k<5?E:C,D,90+k*10,k%2?[T(h,1,"'",I),T(h,5,",",I)]:[]);
q=1;r+=.4;F(C,D,320);
// POP! Gum on his face, he drops.
h=x+7+r|0;j=G+o;
for(i=0;i<22;i++)a=i*M.PI/11,sp(h+M.cos(a)*r,j+M.sin(a)*r/2,M.cos(a)*1.4,M.sin(a)*.7-.3,.18,R(6,12),c.pick("~',*·"),i%3?pk:lt);
r=0;pn=function(cc,rr){return rr<2&&cc>1&&(rr<1||cc%2&&cc<7)?(cc+rr)%3?pk:lt:U};
for(k=0;k<3;k++)a=" ".repeat(2*k+4),F(C,A,70+k*20,[T(h-2,j,"POP!",k>1?pk:Y,B)].concat(k>1?[]:[T(h-k-3,j-1,"\\"+a+"/",Y),T(h-k-3,j+1,"/"+a+"\\",Y)]));
for(o=-1;o<2;o++)F(O,A,70,cv());
o=0;for(k=-1;k<2;k+=2)sp(x+4+4*k,6,.6*k,0,0,3,"·",I);F(O,D,600,cv());
for(k=0;k<6;k++)F(O,k%2?A:D,110,cv().concat(k>1?T(x+10,G-1,"mmf!","subtle"):[]));
sp(x+4,G+2,0,.3,0,4,"·",pk);F(O,D,500,cv());
// Peel it off.
F(O,A,300,cv());
for(k=R(2,3)*2;k--;)o=1-k%2,pn=H(0),F(C,A,o?110:170,[K(x+1,G-1+o,L(7)),K(x+3,G+o,"│ │")]);
o=pn=0;for(k=-1;k<2;k+=2)sp(x+4+3*k,G-1,k/2,-.4,.15,5,"·",pk);
F(C,A,90,[K(x+1,G-1,L(7)),T(x+10,G-2,"thwip!",lt)]);
F(O,A,350,[K(x+1,G-1,L(7))]);
// Stretch, roll a ball.
for(k=0;k<4;k++)F(k%2?V:E,A,170,[K(x,G-1,k%2?"▄▄─────▄▄":L(9))]);
for(k=4;k;k--)F(O,A,70,[K(x+5-k,G-1,L(2*k-1))]);
bl(x+4,G-1,W,A,400);
if(R(0,1)){
 // Back in the mouth.
 for(j=0;j<8;j++)bl(x+4,+"21001234"[j],j<4?O:C,j?D:A,j==3?150:60);
 chew(4);F(W,D,450,[T(x+10,G-2,"♪",lt)]);
}else{
 // Flick it away.
 for(k=5;k<9;k++)bl(x+k,G-1,E,N,k>7?300:70);
 o=1;bl(x+8,G,C,N,200);o=0;
 for(j=0;j<4;j++)bl(x+9+2*j,M.max(0,2-j),E,N,50);
 F(E,N,90,[T(x+16,0,"✦",lt)]);
 F(C,D,250);F(W,D,450);
}
ps=[];F(O,D,200);
return f;
});
