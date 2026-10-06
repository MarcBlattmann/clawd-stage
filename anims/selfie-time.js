// Clawd holds up his phone: timer 3-2-1, wink, peace sign and a jump shot, each with a flash; then he swipes the gallery and hearts pop out.
$cdA("selfie-time", { title: "Selfie", w: 40 }, function (c) {
var f=[],G=c.G,R=c.R,X="text",RD="error",PK="rgb(255,110,170)",OR="clawd_body",Y="chromeYellow",S="subtle",BU="suggestion";
var BL="░▒▓▒▓▒░",M="───────",x=c.clamp(c.x,0,c.mx-14),ph=0,po=0,ln="●",lc=BU,sc,k,s,a,e,i,H=[];
var pic={w:" (^_~) ",p:"v(^_^) ",j:"\\(^o^)/"};
f=c.walk(c.x,x);
function T(a,b,t,col,e){return c.T(a,b,t,col||X,e);}
function U(e,a,ft){return c.P(e,a||"one-up",ft);}
var LR=U("right"),A=U(0,"up"),Z=U("closed","up");
// ph 1: phone on the raised hand (x+8,G+o), po>0 sinks it behind him; ph 2: gallery held by its corner
function F(ms,P,p,o,col){
o=o||0;p=p||[];
var q=G+o+po-2,z={z:po>0?-1:0};
if(ph==1)p.unshift(T(x+7,q,"╭ ╮",X,z),T(x+8,q,ln,lc,z),T(x+7,q+1,"╰─╯",X,z));
if(ph>1)p=c.art(x+8,G-3,["╭"+M+"╮","│       │","╰"+M+"╯"],X).concat(T(x+9,G-2,sc,sc==BL?S:/♥/.test(sc)?RD:OR,{b:1}),p);
p={x:x,pose:P,ms:ms,offset:o,props:p};
if(col)p.color=col;
f.push(p);
}
// flash: rays burst from the lens, Clawd is overexposed and fades back
function B(r,o,ch,col){for(var p=[],i=0;i<5;i++)p.push(T(x+8+((i>2)-(i<2))*2*r,G-2+o-(i%4?r:0),ch||"─╲│╱─"[i],col||Y,{b:1}));return p;}
function snap(P,o,ex,w){
F(w,P,ex.slice(),o);
ln="✸";lc=Y;F(60,P,B(1,o).concat(ex),o,"rgb(255,250,232)");
ln="●";lc=BU;F(80,P,B(2,o,"✦").concat(ex),o,"rgb(255,200,160)");
F(110,P,B(3,o,"·",S).concat(ex),o);
}
// setup: look around, the phone rises from behind him and glints
F(320,"look-left");F(280,"look-right");
for(ph=1,po=2;po;po--)F(90,U());
F(140,LR,[T(x+10,G-3,"✦")]);F(200,LR,[T(x+10,G-3,"·")]);
// timer: lens blinks red, faster and faster, 3-2-1
for(k=0;k<9;k++){lc=k%3>1?S:RD;F(300-k*22,k<5?LR:U(),[T(x+11,G-2,3-(k/3|0)+"",Y,{b:1})]);}
lc=BU;
// wink and peace sign in random order, a flash each, then a dazzled blink
var sh=R(0,1)?"wp":"pw";
for(k=0;k<2;k++){
s=sh[k]=="w";a=s?0:"up";e=[s?T(x+6,G-1,"✧"):T(x+1,G-1,"V",OR,{b:1})];
if(k)F(160,U());
snap(U(s?"wink":0,a),0,e,R(200,380));
F(220,U("closed",a),e);
}
// climax: crouch, jump with both arms up, flash at the top, squash on landing
F(180,Z,[],1);F(40,A);F(50,A,[],-1);
snap(A,-2,[T(x+2,G+1,"'   '",S)],140);
F(60,A,[],-1);F(60,A);
F(140,Z,[T(x-1,G+2,"~",S),T(x+9,G+2,"~",S)],1);
F(160,U());
// gallery, newest first (the jump may come out blurry); the favourite comes last
var bl=!R(0,2),fav=c.pick(bl?sh:sh+"j"),rv=("j"+sh[1]+sh[0]).replace(fav,"")+fav;
if(bl)pic.j=BL;
ln=" ";F(160,LR);
ph=2;sc="       ";F(140,LR);
sc="  ···  ";F(260,LR);
for(i=0;i<3;i++){
a=sc+" "+pic[rv[i]];
for(k=1;k<5;k++){sc=a.substr(k*2,7);F(45,LR);}
if(i<2){F(R(420,600),LR);if(sc==BL){F(380,U("closed"),[T(x+1,G-1,"°",BU)]);F(200,U("left"));}else F(260,U("wink"));}
}
// payoff: long look, double-tap like, heart eyes, hearts float off his head and out of the photo
F(R(500,700),LR);
for(k=0;k<4;k++){sc=k%2?pic[fav]:"   ♥   ";F(k%2?90:150,U("right",k%2?0:"up"));}
for(k=0;k<18;k++){s=k%3?1:0;H.push([s?x+17:x+R(1,7),G-(s?R(1,3):1),k<4?0:R(1,12),s?1:c.pick([-1,1]),R(3,5),1-s,s?R(0,1):0,c.pick([RD,PK,"rgb(255,70,110)"])]);}
for(k=0;k<20;k++){
var p=[],ec=k%4<2?RD:PK;
H.forEach(function(h){var a=k-h[2];if(a>=0&&a<=h[4])p.push(T(h[0]+h[3]*(a>>h[5]),h[1]-(a>>h[6]),a<h[4]?"♥":"·",h[7],{b:1}));});
if(k<16)p.push(T(x+2,G,"♥",ec,{bg:OR}),T(x+6,G,"♥",ec,{bg:OR}));
F(R(80,110),U(0,0,k>15?0:k%4<2?"left":"right"),p);
}
// cleanup: phone flips back and sinks into his pocket; a pleased wink
F(300,U("closed"));
ph=1;ln="●";F(150,U());
for(po=1;po<3;po++)F(80,U());
ph=po=0;
F(450,c.P("wink"));F(300,"default");
return f;
});
