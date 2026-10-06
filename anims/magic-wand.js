// Clawd waves a glittering wand, glows rainbow, zaps a fallen rock into a tulip and flicks its bloom up as a star.
$cdA("magic-wand", { title: "Wand magic", w: 40 }, function (c) {
var R=c.R,T=c.T,pk=c.pick,M=Math.random,x=c.clamp(c.x,1,c.mx-21),f=c.walk(c.x,x),q=x+17,Y="chromeYellow",X="text",S="subtle",I="inactive",G="success",B={b:1},Z=[T(x+7,3,"░▒░",S)],
H=pk(["error","autoAccept","warning","#ff78be"]),P=[],sc=[],wa=-1,o=0,k=R(0,9),j,t,sx,sy,dd,sw=0,
E={o:"open",l:"left",r:"right",c:"closed",w:"wink"},A={d:"down",u:"up",1:"one-up"},
// wand: stick dx,dy,glyph, tip dx,dy
WA=[[7,3,"\\",6,2],[8,3,"│",8,2],[9,3,"/",10,2],[9,4,"─",10,4],[9,5,"\\",10,6]];
function add(a,b,u,v,l,cl,g){P.push({x:a,y:b,u:u,v:v,t:0,l:l,c:cl||c.rainbow(k++),g:g})}
function burst(a,b,n,s){while(n--)add(a,b,(M()*2-1)*s,(M()-.6)*s,R(3,7))}
function tip(){var w=WA[wa];w&&add(x+w[3],w[4]+o,0,.12,R(5,8))}
// frame: glitter, scenery, wand, extras
function F(p,ms,ex,pt){
var w=WA[wa],pr=P.map(function(p){return T(p.x+.5|0,p.y+.5|0,p.g||"✦✧*·"[p.t*4/p.l|0],p.c,{z:-1})}).concat(sc);
if(w)pr.push(T(x+w[0],w[1]+o,w[2],X),T(x+w[3],w[4]+o,pk("✦✧*"),Y,B));
f.push({pose:c.P(E[p[0]],A[p[1]],E[p[2]]),ms:ms,offset:o,paint:pt,props:pr.concat(ex||[])});
P=P.filter(function(p){p.x+=p.u;p.y+=p.v;return++p.t<p.l})}
function rock(y,d,cl){sc=c.art(q-1+~~d,y,["▗▄▖","▟█▙"],cl||I)}
function tul(n){sc=c.art(q-1,4,[n>2?" │":"",n>1?"◥│◤":"",n>0?" │":""],G);n>3&&sc.push(T(q-1+sw,3,n>4?"▙█▟":" ▄",H))}
function rb(J){return function(a,b){var d=8-a+b;return d<J&&d>J-17?c.hsv(d*35-J*30,.6,1):void 0}}
// smoke puff, thinner with L
function pf(L,cl){return c.art(q-2,4," 121\n12321\n23432".replace(/\d/g,function(d){return" ░▒▓█"[d>L?d-L:0]}),cl,{z:-1})}

// wand appears
F("ld",250);F("rd",250);F("o1",200);burst(x+8,3,7,1);F("c1",90,Z);wa=1;F("o1",150);F("w1",450);
// wave
for(j=0,t=6*R(2,3)+1;j<t;j++){wa=[1,2,3,2,1,0][j%6];tip();F((wa>1?"r":"o")+"1"+(j%3?"":j%2?"l":"r"),j<6?110:70)}
// rainbow wash
for(wa=1,j=0;j<28;j++){o=j>12&&j<19?-1:0;if(j<21)add(x+8,2+o,(M()-.6)*2,.5,R(4,6));F((j<22?"c":"w")+"u",j==13?160:65,0,rb(j))}
// rock drops
o=0;wa=2;F("o1",300);
for(j=-1;j<6;j++){rock(j);F("r1",j<0?160:40,[T(q,j-1,"¦",S)])}
o=1;F("c1",100,[T(q-4,6,"·.     .·",S)]);o=0;F("c1",80);
t=[T(x+4,3,"?",X,B)];F("r1",350,t);F("c1",90,t);F("r1",250,t);F("w1",400,[T(x+4,3,"!",Y,B)]);
// zap (may fizzle)
for(var tr=R(0,1);tr>=0;tr--){
wa=0;F("r1",450);wa=1;F("r1",40);wa=2;F("r1",40);wa=3;F("r1",80);
for(j=1;j<(tr?4:7);j++){t=4+(j>3);add(x+10+j,t,0,0,4);F("r1",45,[T(x+11+j,t,"✸",Y,B)])}
if(tr){F("o1",120,[T(x+14,4,"░▒",S)]);F("o1",350,[T(x+15,3,"pff",I)]);for(j=0;j<4;j++){wa=2+j%2;F("c1",60)}F("r1",250)}}
// rock to tulip
for(j=0;j<7;j++){rock(5,j<5&&j%2,pk([X,Y,I]));burst(q,5,2,1.3);F("c1",50)}
burst(q,4,10,2);sc=[];F("c1",110,pf(0,X));F("c1",100,pf(1,I));
for(j=0;j<10;j++){tul(j);if(j==5)burst(q,3,9,1.6);F(j>8?"w1":"r1",j==4?280:j<9?80:250,j<3?pf(2,S):0)}
// hop
wa=1;
[1,-1,-2,-1,0,1,0].forEach(function(v,i){o=v;sw=v<0?1:-v;tul(5);if(i%2)add(x+11,3,.3,-.4,6,"error","♥");F((i>4?"w":"o")+"u",i?75:140)});
F("w1",500);
// twirl, flick, bloom becomes a star
for(j=0;j<12;j++){wa=[0,1,2,3,4,-1][j%6];tip();F("r1",40)}wa=3;F("r1",350);
for(wa=2,t=x+11;t<q-1;t+=2){add(t,3,0,0,3);F("r1",30,[T(t+1,3,"✦",Y,B)])}
burst(q,3,6,1.2);F("r1",70,[T(q,3,"✸",X,B)]);
sx=q,sy=3,dd=pk([1,1,-1]);
for(j=0;j<10;j++){wa=1;tul(3-(j>>1));if(j%2)sy-=sy>0;if(j>1&&j%3==0)sx+=dd;add(sx,sy+1,0,.25,5);F("r"+(j<6?"1":"u"),j<6?90:130,[T(sx,sy,"★",Y,B)])}
burst(sx,1,5,1);
for(j=0;j<8;j++)F("r"+(j%2?"1":"u"),150,[T(sx,0,"✸★☆★☆✦✧·"[j],j<6?Y:S,B)]);
// wand puffs away
burst(x+8,3,6,1);wa=-1;F("c1",90,Z);F("o1",120,[T(x+8,3,"░",S)]);for(j=0;j<4;j++)F("od",60);F("wd",400);P=[];F("od",300);
return f;
});
