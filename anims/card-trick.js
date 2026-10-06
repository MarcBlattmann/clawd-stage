// Clawd fans and spring-shuffles a deck, asks "is this your card?", grows a giant ace of hearts, then the deck rains down.
$cdA("card-trick",{title:"Card trick",w:50},function(c){
var R=c.R,T=c.T,x=c.clamp(c.x,1,c.mx-21),f=c.walk(c.x,x),i,k,t,o=0,p,b=[],H=[],L=[],V=[],
W="#f0ece1",D="#d72837",PK="#ff7896",Y="chromeYellow",I="inactive",X="text",
E={o:"open",l:"left",r:"right",c:"closed",w:"wink",d:"down",u:"up",1:"one-up"},
pt=(s,a)=>s.replace(/../g,m=>a.push([+m[0],+m[1]])),
// card: rank r + suit s (odd red, 4 = back)
cd=(a,y,s,r,z)=>T(x+a,y,(r||"")+"♠♥♣♦▒"[s],s>3?"#465fd2":s&1?D:"#282837",{bg:W,z:z|0}),
bk=(a,y,z)=>cd(a,y,4,"",z),ac=(a,y)=>cd(a,y,1,"A"),
sp=(a,y,n)=>{for(var q=[];n--;)q.push(T(x+a+R(-2,2),y+R(-1,1),c.pick("✦✧*·"),Y));return q},
// pose code eyes/arms/foot; b: props kept for a scene
F=(p,ms,q)=>f.push({pose:c.P(E[p[0]],E[p[1]],E[p[2]]),ms,offset:o,props:b.concat(q||[])}),
ey=a=>(a>5?"r":a<3?"l":"o")+"u";
pt("83827160504030211213",H);pt("8372615141312213",L);pt("0110203142535465",V);
F("ld",300);F("rd",300);F("od",150);
for(k of"·✧✦✸")F("c1",70,[T(x+8,3,k,Y,{b:1})]);
F("w1",450,[bk(8,3)].concat(sp(8,2,4)));
// fan open over his head, ripple, close left
var fs=H.map(()=>R(0,3)),fan=(n,m,l)=>H.slice(n,m).map((q,i)=>cd(...q,(i+=n)==l||i==l-1?4:fs[i]));
for(t=1;t<11;t++)F(ey(H[t-1][0]),50,fan(0,t));
b=[T(x+11,1,"pick a card!",X)];F("wu",700,fan(0,10).concat(T(x-1,2,"✦",Y),T(x+10,2,"✦",Y)));
for(t=0;t<12;t++)F(ey(H[t>9?9:t][0]),45,fan(0,10,t));
F("ou",300,fan(0,10));b=[];
for(t=1;t<11;t++)F("lu",t>9?150:40,t>9?[bk(1,3)]:fan(t,10));
// spring shuffles
var sh=(P,e,n,ms)=>{for(var N=P.length,j,t=0;t<2*n+N-2;t++){p=[];
  if(t<2*n-1)p.push(bk(...P[0]));
  if(t>=N-1)p.push(bk(...P[N-1]));
  for(j=0;j<n;j++){k=t-2*j;if(k>0&&k<N-1)p.push(cd(...P[k],(j*5>>1)+n&3))}
  F(e+"u"+(t%4?"":e),ms,p)}},U=H.slice().reverse();
sh(U,"r",R(5,7),55);F("ou",160,[bk(8,3)]);
sh(L,"l",R(7,9),40);F("ou",120,[bk(1,3)]);
sh(U,"r",R(8,10),28);
// a card floats up
b=[bk(8,3)];
var ok=R(0,4)<2,h=[cd(8,1,+ok||R(0,3),ok?"A":c.pick("23456789JQK"))],Q="is this your card?";
F("w1",300);F("c1",450,[T(x+2,2,"hmm",I)]);
for(k of[bk(8,2),bk(8,1),T(x+8,1,"│",I)])F("r1",120,[k]);
for(t=1;t<11;t++)F(t>9?"o1":"r1",t>9?800:45,h.concat(T(x+11,1,Q.slice(0,2*t),X)));
// wrong? sweat, snap it into the ace
if(!ok){p=h.concat(T(x+11,1,"...no?",X));F("r1",300,p);F("l1",500,p.concat(T(x,4,"'","permission")));F("c1",400,h);
 for(k of"│▒│")F("w1",50,sp(9,1,3).concat(T(x+8,1,k,I)));h=[ac(8,1)]}
F("w1",350,sp(9,1,ok?0:3).concat(h));
// giant ace
var AR=[["A♥"],["A    ","  ♥  ","    A"],["A        "," ▄██▄██▄ "," ▀█████▀ ","   ▀█▀  A"]],
big=(n,hc)=>{var y=n?0:1,M=AR[n],e="─".repeat(M[0].length);return c.art(x+9,y,["╭"+e+"╮"].concat(M.map(l=>"│"+l+"│"),"╰"+e+"╯"),"#9696a0",{bg:W,o:1}).concat(c.art(x+10,y+1,M,hc||D,{bg:W}))};
F("c1",250,h);
[0,1,2,1,2].forEach((n,j)=>{if(n)b=[];F("o1",j>3?400:j>2?60:90,big(n).concat(j<3?sp(12+2*n,2,3+n):[]))});
// ta-da!
var hp=[];for(i=0;i<9;i++)hp.push([i&1?R(1,7):R(21,26),R(0,8)]);
for(t=0;t<12;t++){o=-(t%6==2||t%6==3);p=big(2,t%4<2?D:PK).concat(T(x+21,0,"ta-da!".slice(0,t+1),Y,{b:1}));
 hp.forEach(q=>{var m=q[0]<9?2:5;k=m-t+q[1];if(k>=m-2-(m>2)&&k<=m)p.push(T(x+q[0],k,"♥",k&1?D:PK))});
 F((t<6?"o":"w")+"u",t?90:250,p)}
// poof, the deck rains, the ace bonks him
for(o=t=0;t<2;t++){p=t?sp(11,1,4).concat(sp(17,2,4)):c.art(x+10,1,["░▒▓▒░▒▓▒░","▒▓█▓▒▓█▓▒"," ░▒░ ░▒░"],I);
 for(i=0;i<6;i++)p.push(cd(R(9,19),R(0,1-t),R(0,3)));F("cu",t?90:60,p)}
F("od",350,[T(x+4,3,"?",I)]);
var rn=[],hs=R(24,27);for(i=0;i<c.W*.6;i++)rn.push([R(0,c.W-1)-x,R(0,24),R(0,3),R(0,5)]);
for(t=0;t<34;t++){p=[];k=t-hs;o=+(k==3);
 rn.forEach(r=>{var y=t-r[1],m=y+r[3];if(y>=0&&y<7)p.push(cd(r[0]+(m>>1&1),y,m%3?r[2]:4,"",-1))});
 if(k>=0)p.push(ac(4,Math.min(k,3)+o));
 if(k==3||k==4)p.push(T(x+1,3,"✦",Y),T(x+8,3,"✦",Y));
 F((k>=3&&k<6?"c":t%6<3?"l":"r")+"u"+(t%4?"":"l"),55,p)}
// flick it off, bow
o=0;p=[ac(4,3)];F("ld",250,p);F("rd",250,p);F("wd",300,p);
o=1;F("cd",120,[ac(4,4)]);
V.forEach((q,j)=>{o=j<2?-1:0;F(j<2?"ou":"rd",60,[(j&1?bk:ac)(q[0]+5,q[1])])});
F("rd",250,[ac(11,6)]);o=1;F("cd",450,[T(x+11,6,"✦",Y),T(x+12,5,"✧",Y)]);o=0;F("wd",500,[T(x+12,4,"·",Y)]);F("od",200);
return f});
