// Night falls, meteors streak past; Clawd makes a wish, a star drops into his hand, he sets it free.
$cdA("shooting-stars",{title:"Wish upon a star",w:50},function(c){
var P=c.P,T=c.T,R=c.R,W=c.W,M=Math,fl=M.floor,f=[],Q=[],nt=0,tm=0,tk=0,lk,i,j,k,o,p,d,
x=c.x,H=x+8,dr=x+4<W/2?1:-1,mo=dr>0?W-5:3,s0=H+dr*6,st=[s0,0,0,7,50,.2],S=[st],Y="chromeYellow",V="text",I="inactive",gd="#ffd66e",Z={z:-1},B={b:1},
ey=v=>v<x+2?"left":v>x+6?"right":"open";
// Stars [x,y,phase,period,hue,rank], clear of the moon and the air above Clawd.
for(i=0;i<W/3;i++){j=R(0,W-1);o=R(0,3);if(M.abs(j-mo-1)>2&&(o<2||j<x-3||j>x+14)&&!S.some(s=>s[1]==o&&M.abs(s[0]-j)<2))S.push([j,o,R(0,9),R(5,11),c.pick([215,50,190,0]),M.random()])}
var tint=()=>nt>0?c.rgb(215-55*nt,119-25*nt,87+15*nt):void 0,
// Meteor: after a ticks, n cells in direction d, down a row every s cells.
met=(a,d,n,y)=>Q.push({a:tk+a,x:d>0?R(0,fl(W/3)):R(fl(W*2/3),W-1),y:y=R(0,1),d,n,s:fl(n/(4-y))+1,c:c.pick([Y,"#9fd8ff","#b8ffc8"])}),
live=()=>Q.some(m=>tk-m.a<=m.n+6),
// Frame: sky, meteors, moon, extras; eyes e=0 follow a meteor.
fr=(e,a,ms,ex,o)=>{o=o||{};p=[];lk=x+4;
 S.forEach(s=>{var u=(fl(tm/140)+s[2])%s[3],v=(u?u>1?.45:.7:1)*M.min(1,(nt-s[5]*.7)*3);v>.2&&p.push(T(s[0],s[1],u?u>1?"·":"+":"✦",c.hsv(s[4],.3,v),Z))});
 Q.forEach(m=>{var i=tk-m.a,q,at=(k,t,cl)=>p.push(T(m.x+m.d*k,m.y+fl(k/m.s),t,cl,{b:k==i,z:-1}));
  if(i>=0&&i<=m.n)at(i,"✦",V),lk=m.x+m.d*i;
  for(q=1;q<7;q++)i-q>=0&&i-q<=m.n&&at(i-q,"──--··"[q-1],[V,m.c,m.c,I,I,"subtle"][q-1])});
 nt>.3&&p.push(...c.art(mo,0,dr>0?["▟▀","▜▄"]:["▀▙","▄▛"],c.hsv(50,.4,nt),Z));
 o.pose=P(e||ey(lk),a);o.props=p.concat(ex||[]);o.color=tint();o.ms=ms;tm+=ms;tk++;f.push(o)};
// Dusk: stars wake one by one, he looks around and blinks.
for(i=0;i<24;i++)nt=M.min(1,(i+1)/18),fr(i==21?"closed":i<3||i>14?"open":i<9?"left":"right",0,i<18?110:130);
// One meteor: his eyes follow it, he points after it.
met(0,d=c.pick([1,-1]),R(24,30));
while(live())fr(0,0,34);
fr(d>0?"right":"left","one-up",500);
fr(0,0,200);
// A shower: he bounces with arms up.
for(j=R(3,4);j--;)met(j*R(5,9),c.pick([1,-1]),R(16,28));
for(i=0;live();i++)fr(0,i>8?"up":0,26,0,{offset:i>8&&i&4?-1:0});
// Idea! Eyes shut, hands together, a wish floats up.
fr(0,"up",140,[T(x+4,1,"!",Y,B)],{offset:-1});
fr(0,0,360,[T(x+4,2,"!",Y,B)]);
var hd=()=>[T(x,5," ",V,{o:1}),T(H,5," ",V,{o:1}),T(x+4,5,"◢◣","#ffc4a0",{bg:tint()})];
for(i=0;i<8;i++)fr("closed",0,i?210:400,hd().concat(i?T(x+4+[0,0,1,0,-1,0,0][i-1],3-fl((i-1)*.7),"♥♥♥♥♥✧·"[i-1],i<6?"#ff8fb0":gd):[]));
// A star flickers, he peeks, it drifts into his raised hand.
S.shift();
for(i=0;i<5;i++)fr(i>2?"wink":"closed",0,160,hd().concat(i%2?T(s0-1,0,"-★-",gd,B):T(s0,0,"✦",V,B)));
var at=(k,t,cl)=>T(s0-dr*k,fl(k/2),t,cl,B);
for(k=1;k<7;k++)fr(k<3?"wink":ey(s0-dr*k),k<3?0:"one-up",170,[at(k,"★",gd),at(k-1,"·",Y)].concat(k>1?at(k-2,"·","subtle"):[]));
// Catch: squash, sparkle burst, the hand glows.
var sr=(o,t)=>T(H,3+o,t||"★",gd,B),gl=g=>(u,v)=>8-u+v<g?"#fab46e":tint();
for(i=1;i<4;i++)o=+(i<2),fr(o?"closed":"wink","one-up",110,[sr(o)].concat([-2,2,-1,1].map(q=>T(H+q*i,q&1?3-i:3,q&1?"✧":"·",i>2?I:Y))),{offset:o,paint:gl(5-i)});
// Admire it, a happy hop.
for(i=0;i<9;i++)o=-(i==3||i==4),fr(i==6?"wink":"right","one-up",i<3?220:130,[sr(o,i%2?"✦":"★")],{offset:o,paint:gl(i%2+2)});
// He lets it float back home and waves.
for(k=6;k>=0;k--)fr(ey(s0-dr*k),k>4?"up":"one-up",120,[at(k,"★",gd)].concat(k<6?at(k+1,"·",Y):[]));
for(i=0;i<4;i++)fr("wink",i%2?0:"one-up",170,[at(0,i%2?"✦":"★",gd)]);
// Dawn: the sky fades, his star is the last to go.
for(i=13;i>=0;i--)nt=i/14,fr(i<2?"wink":"open",0,110,nt>.15?[at(0,i%3?"✦":"·",nt>.5?gd:Y)]:[]);
f.push({pose:"default",ms:300});
return f;
});
