// Clawd leaps onto a steam train, rides past scrolling mountains, trees and poles, dives into a dark tunnel and pops out.
$cdA("train-journey",{ scene: 1,title:"Train journey",w:70},function(c){
var W=c.W,G=c.G,R=c.R,T=c.T,M=Math,N=M.round,X=c.clamp(c.x,1,W-39),f=c.walk(c.x,X),ps=[],L=[],s=0,v=0,lv=0,lo=0,hi=W,md=0,tx,sP,P,Q,i,k,d,o,u,sx=R(W>>1,W-3),
Y="chromeYellow",I="inactive",q="▄".repeat(9),C=" ●▀▀▀▀▀▀▀● ",WH=C+" "+C+"   ●─●─●  ●▀●  ◣",EY={c:"closed",o:"open",l:"left",r:"right",w:"wink"},
put=(a,j,t)=>{for(var n in t)if(t[n]>" ")a[(j+ +n)%a.length]=t[n]},
A=(y,n,sp,cl,ch=" ",a=Array(n).fill(ch))=>(L.push([y,a,sp,cl]),a),
hey=o=>[T(X+4,G-1+o,"!",Y,{b:1})];
// Parallax strips: clouds, wire, mountains, trees, poles, rails.
var a=A(0,71,.06,[165,165,180]),w=A(1,41,2.2,[105,105,115],"─"),m=[3,2,1].map(y=>A(y,89,.2,y>1?[80,95,130]:[200,210,230])),t=[2,3,4].map(y=>A(y,61,1,y>3?[150,105,70]:[85,175,95])),pk=[];
for(k=0;k<3;k++)put(a,R(0,70),c.pick(["░▒▒░","▒▓▒","░▒▓▓▒░"]));
for(k=0;k<5;k++)pk.push([R(0,88),R(1,3)]);
var h=i=>M.max(0,...pk.map(p=>(d=M.abs(i-p[0]-.5)%89,p[1]-M.floor(M.min(d,89-d)))));
for(i=0;i<89;i++)for(k=1;k<4;k++)if(h(i)>=k)m[k-1][i]=h(i-1)<k?"◢":h(i+1)<k?"◣":"█";
for(i=2;i<52;i+=R(15,24)){k=R(0,1);put(t[0],i,k?" ▲":"▄█▄");put(t[1],i,k?"▟█▙":"▀█▀");t[2][i+1]="│"}
w[0]="┼";for(k=2;k<6;k++)A(k,41,2.2,[150,130,110])[0]="│";A(6,5,3,[150,150,165],"═")[0]="╪";
L.forEach(e=>e[1]=e[1].join(""));
var K=(a,l,h)=>a.map(p=>{var b=M.max(l-p.x,0),e=M.min(h-p.x,p.t.length);return e>b&&{...p,x:p.x+b,t:p.t.slice(b,e)}}).filter(p=>p);
function F(p,o,ms,ex,ft){
 s+=v;var t=N(tx),sm=[],RK=c.rgb(150*lv,120*lv,95*lv),dk,rk=(x,y)=>c.art(x,0,["▗▟████████▙▖","█".repeat(12)],RK).concat(c.art(y,2,Array(5).fill("▐█▌"),RK));
 var z=N(W+2-(s-sP)*3);md==1?hi=c.clamp(P=z,0,W):md>2&&(lo=c.clamp(Q=z,0,W));
 if(t+34<W&&f.length%2)ps.push([t+34,1,-v*1.6-.3-M.random()*.4,-.2,0,"▓▒▒░░··",I]);
 ps=ps.filter(p=>(sm.push(T(N(p[0]),N(p[1]),p[5][p[4]],p[6])),p[0]+=p[2],p[1]+=p[3],++p[4]<p[5].length));
 // Daylight is lo..hi; in the dark only eyes, windows, lamp and sparks glow.
 dk=[T(t+38,4,"▒▒░░·  ·","#aa9646"),T(t+R(-1,36),6,c.pick("*·✦"),"warning")];
 if(p[0]!="c")dk.push(T(X+2+(p[0]=="r"),G+o,"lr".includes(p[0])?"▘   ▘":"▗   ▗","text"));
 f.push({x:X,pose:c.P(EY[p[0]],{u:"up",n:"one-up"}[p[1]],ft),offset:o,ms,hide:X+4>=hi||X+4<lo,
 props:K((lv<.05?[]:[T(sx,0,"☼",c.rgb(250*lv,210*lv,90*lv),{z:-1})].concat(L.map(e=>{var b=c.tile(e[1],e[0],c.rgb(...e[3].map(q=>q*lv)),s*e[2],{z:-1});if(e[0]>5)b.t=b.t.replace(/═/g,(m,i)=>i>9&&i<65?" ":m);return b})))
 .concat(T(t-1,5,"▙"+q+"▟─","#5fb969"),c.art(t+11,3,["▗"+q+"▖","█ █ █ █ █ █","█".repeat(11)+"─"],"#5f87eb"),
 c.art(t+23,2,["▄▄▄▄      ▄▄▄","█▀▀█  ▗▖  ▐█▌","████▄▄▄▄▄▄███▄","█".repeat(14)+"▙"],"#e14637"),T(t-1,6,f.length%2?WH:WH.replace(/─/g,"═"),I),sm,ex||[]),lo,hi)
 .concat(T(t+12,4,"▪ ▪ ▪ ▪ ▪",Y),T(t+37,4,"●",Y),K(dk,0,lo),K(dk,hi,W),lv<.05?[]:md==1?rk(P-1,P-1):md>2?rk(Q-12,Q-2):[])});
}
// The train rolls in; he leaps over it into the last wagon.
tx=X-M.max(X+40,70);
for(i=0;i<12;i++){lv=i/11;F(i<5?"o":"l",0,80,i>7&&[T(1,1,"toot!",Y)])}
for(d=X-tx;d;){d=M.floor(d*.85);tx=X-d;o=d>50?0:d>37?1:d>2?-4:-1-d;F(d>37?"l":d>2?"ru":"o",o,60,d>37&&d<80&&hey(o),d>2&&d<38&&(d%2?"left":"right"))}
F("c",-1,120);F("o",-1,150);F("w",-1,300);
// Ride beats: wind, look back, toot, bumps, snooze.
[[12,"r"]].concat([[16,"cu"],[10,"l"],[14,"wn"],[12,"o"],[16,"c"]].sort(_=>M.random()-.5)).forEach(b=>{for(i=0;i<b[0];i++){var n=b[1],ex=[];v=M.min(1,v+.08);
 n=="cu"&&ps.push([X-1-R(0,3),R(3,4),-3,0,0,"─-·",I]);
 if(n=="wn"){i>1&&i<12&&ex.push(T(tx+21,0,"TOOT!",Y,{b:1}),T(tx+19-i%2,1,"♪","text"));ps.push([tx+25,1,-.8,-.4,0,"▒░·","text"])}
 n=="c"&&i%5==0&&ps.push([X+8,2,.15,-.3,0,"zzZZ",I]);
 F(n=="c"&&i==9?"o":n,n=="o"?c.pick([-1,-1,-2]):-1,55,ex,n=="cu"&&i%2&&"left")}});
// Tunnel: he ducks, darkness, then daylight sweeps back.
md=1;sP=s;
for(;!(P<tx-1);)F(P<X+14?"c":P<X+44?"o":"r",P<X+14?0:-1,50,P>X+30&&P<X+70&&hey(-1));
for(i=0;i<24;i++)F("ccccoollllrrrrocooorrrrr"[i],0,70);
md=3;sP=s;hi=W;
for(;!(Q<X);)F("r",Q<X+5?-1:0,50);
// He pops out, the train leaves, the scenery fades.
v=0;u=0;o=-1;
for(i=0;tx<W+2||lv||ps.length;i++){u+=.4;tx+=u;lv=M.max(0,lv-.05);o=tx<X+10?M.max(o-1,-4):M.min(o+1,0);
 F(o<0?(i%3?"ou":"wu"):i%4<2?"rn":i>30?"w":"r",o,50,i<4?[T(X-1,G+o,"✦         ✦",Y)]:i>8&&i<16&&[T(N(tx)+24,0,"toot",Y)])}
f.push({pose:"default",ms:300});
return f;
});
