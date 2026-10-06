// A top hat falls on Clawd; wand taps, a rabbit pops out, boings off his head, dives back in; bow, peek, poof.
$cdA("top-hat-rabbit", { title: "Hat trick", w: 46 }, function (c) {
var R=c.R,T=c.T,x=c.clamp(c.x,8,c.mx-20),h=x+10,f=c.walk(c.x,x),H="rgb(125,115,175)",B=c.pick(["error","error","permission"]),
  Y="chromeYellow",S="subtle",I="inactive",X="text",hat=[],k,a,
  E={o:"open",l:"left",r:"right",c:"closed",w:"wink"},A={d:"down",u:"up",1:"one-up"};
// hat at a,b: u upright, else upside down
function hz(a,b,u){hat=u?[T(a+1,b,"███",H),T(a,b+1,"▄   ▄",H),T(a+1,b+1,"▀▀▀",B,{bg:H})]:[T(a,b,"▀   ▀",H),T(a+1,b,"▄▄▄",B,{bg:H}),T(a+1,b+1,"███",H)]}
// on his head; d tips it forward
function U(b,d){hz(x+2+(d||0),b,1)}
function cut(p,k){return p.filter(function(q){return q.y<(k||7)})}
// rabbit, ears on row b, hidden from row k
function bun(a,b,k,m,e){return cut(c.art(a,b,[e||"(\\_/)",m||"(•.•)","(\")(\")"],X),k)}
function sp(n,a,b,w,v){for(var r=[];n--;)r.push(T(a+R(0,w),b+R(0,v),c.pick("✦✧*·+"),c.pick([Y,"warning",X,"rainbow_violet","rainbow_blue"])));return r}
function dust(a,w){return[T(a,6,"·",S),T(a+w,6,"·",S)]}
// p: eyes+arms letters, "r1" = right, one-up
function F(p,ms,ex,o){f.push({pose:c.P(E[p[0]],A[p[1]]),ms:ms,offset:o||0,props:(ex||[]).concat(hat)})}
function blink(p,a,b,k){F(p,120,bun(a,b,k,"(-.-)"));F(p,300,bun(a,b,k))}
function arc(a0,a1,b0,b1,v,cb){for(var n=Math.abs(a1-a0),j=1;j<=n;j++){var t=j/n;cb(a0+(a1>a0?j:-j),Math.round(b0+(b1-b0)*t-4*v*t*(1-t)),t)}return a1}
function ey(a){return a>x+4?"r":a<x?"l":"o"}
// ears stream while airborne
function hop(a0,a1,b0,b1,v,ms){return arc(a0,a1,b0,b1,v,function(a,b){F(ey(a)+"d",ms,bun(a,b,Math.abs(a-h)<3?5:7,0,b<4&&(a1>a0?"(\\_\\)":"(/_/)")))})}
function land(a){F(ey(a)+"d",90,bun(a,4).concat(dust(a-1,7)))}
// wand in his raised hand: u up, else tapping
function wn(u,o){o=o||0;return u?[T(x+9,3+o,"/",I),T(x+10,2+o,"✦",X)]:[T(x+9,4+o,"──",I),T(x+11,4+o,"•",X)]}
// the hat falls
F("ld",280,[T(x+4,0,"✧",Y)]);F("rd",280,[T(x+4,0,"✦",Y)]);
for(k=-1;k<2;k++){U(k);F("od",110-k*20,[T(x+4,k-1,"¦",S)])}
U(3);F("cd",140,[T(x+1,4,"*",Y),T(x+7,4,"*",Y)],1);
if(R(0,1)){U(1);F("cd",80)}
U(2);F("od",300);F("w1",500,[T(x+6,1,"✧",X)]);
// grab, lift, toss it down flipped
F("ou",150);U(1);F("ou",220);
arc(x+2,h,1,5,2,function(a,b,t){hz(a,b,t<.5);F(t<.5?"r1":"rd",60)});
F("rd",220,dust(h-1,6));
// wand: tap, tap, nothing, crouch, jump, BIG tap
var wu=wn(1),wd=wn();
F("w1",350,sp(3,x+10,0,3,2).concat(wu));
for(k=R(2,3);k--;){F("r1",170,wu);F("c1",90,sp(2,h+2,2,3,2).concat(wd))}
F("r1",350,wd);F("o1",650,wu.concat([T(x+4,3,"?",I)]));
F("c1",120,wn(1,1),1);F("cu",260,wn(1,-1),-1);
F("c1",80,sp(9,h-1,1,8,3).concat(wd));
F("o1",90,wd.concat([T(h+1,4,"▒▓▒",I)]));
F("cd",110,[T(h,3,"░▒▓▒░",S),T(h+1,4,"▒▓▒",I)]);
F("od",100,[T(h-1,2,"░ ░ ░ ░",S),T(h,3,"░▒░▒░",S)]);
F("od",80,[T(h,2,"░ ░ ░",S)]);
// ears, face, hop out
F("rd",500,bun(h,4,5).concat([T(x+4,3,"!","warning",{b:1})]));
for(k=0;k<4;k++)F("rd",110,bun(h,4,5,0,k%2?0:"(|_|)"));
F("ru",350,bun(h,3,5));blink("ru",h,3,5);F("ru",90,bun(h,2,5));
land(a=hop(h,h+7,2,4,2,60));
for(k=R(1,2);k--&&a+11<c.W;)land(a=hop(a,a+5,4,4,2,55));
blink("rd",a,4);
// boing, left, boing, dive
hop(a,x+2,4,1,2,45);
F("cd",130,bun(x+2,2),1);F("od",350,bun(x+2,1,7,"(^.^)").concat([T(x+7,0,"♥","error")]));
land(hop(x+2,x-8,1,4,2,55));
blink("ld",x-8,4);F("l1",500,bun(x-8,4));
hop(x-8,x+2,4,1,2,50);
F("cd",110,bun(x+2,2),1);
hop(x+2,h,1,1,1.5,55);
// flips, ears first into the hat, feet kick last
for(k=1;k<4;k++)F("rd",70,cut(c.art(h,k,["(\")(\")","(>.<)","(/¯\\)"],X),5));
for(k=0;k<4;k++)F("rd",90,[T(h-k%2,4,"(\")(\")",X)]);
hz(h,4);F("rd",70,[T(h+2,2,"✦",Y)]);
hz(h,5);F("rd",90,dust(h-1,6));F("wd",450);
// hat back on, bow (hat tips forward), peek, poof
arc(h,x+2,5,2,2,function(a,b,t){hz(a,b,t>=.5);F(ey(a)+"1",60,[T(a+5,b+1,"·",Y)])});
U(3);F("cd",120,0,1);U(2);F("od",250);
U(3,1);for(k=0;k<4;k++)F("cd",170,sp(4,x-4,0,16,2),1);
U(2);F("od",250);U(1);F("wu",450,bun(x+2,3,4));F("wu",150,bun(x+2,3,4,0,"(|_|)"));F("wu",250,bun(x+2,3,4));U(2);F("cd",160);
hat=[];
F("cd",80,sp(10,x,0,8,3).concat([T(x+2,2,"░▒▓▒░",I)]));
F("od",100,sp(5,x-1,0,10,3).concat([T(x+2,2,"░ ░ ░",S)]));
F("wd",250,sp(2,x-2,0,12,2));F("od",300);
return f;
});
