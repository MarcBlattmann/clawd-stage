// Bricks and a board drop in, Clawd ties a headband, lines up, glows with ki, HI-YA! splits the board, splinters fly, he bows.
$cdA("karate-chop", { title: "Karate chop", w: 40 }, function (c) {
 var P=c.P,T=c.T,R=c.R,K=c.pick,rnd=Math.random,O="clawd_body",Y="warning",E="error",SU="subtle",bo={b:1},rt="right",cl="closed",U="one-up",
 x=c.clamp(c.x,2,c.mx-22),b=x+10,WD=K(["#c8915a","#d6a86c","#b5793f"]),LT="#f3d9a6",
 f=c.walk(c.x,x),cp=P(),co=0,pt=0,y1=-9,y2=-9,by=-9,bs=1,hb=-9,fd=0,sp=[],kp=[],i,k,t,e,n,
 AH=["",""," ▄▄▄▄▄"],hy=K(["HI-YA!","HAI-YAA!","KIAI!!","HYAAA!"]);
 function fc(k){return fd?["inactive",SU][fd-1]:k}
 // Frame: splinters, bricks, board (whole or V), headband.
 function S(ms,ex){
  var w=fc(WD),q=fc("#b4553c"),p=fd>2?[]:sp.map(function(s){var r=s.y>5;return T(Math.round(s.x),Math.round(s.y),r?".":s.c,fc(s.k),r?{z:-1}:{})})
  .concat(T(b,y1,"██",q),T(b+6,y2,"██",q),bs<2?T(b,by,"▄▄▄▄▄▄▄▄",w):[T(b,5,"▄▄    ▄▄",w),T(b+2,6,"▀  ▀",w),T(b+3,6,"▄▄",fc(LT))]);
  if(hb>-9)p.push(T(x-1,hb+co,["~~","-~","~-"][f.length%3]+"▗▄▄▄▄▄▄",E));
  f.push({x:x,pose:cp,offset:co,ms:ms,props:p.concat(ex||[]),paint:pt||void 0});
 }
 // Arm: art rows, or n cells laid along the board.
 function A(m){
  if(!(m>=0))return c.art(x+8,2,m,O);
  for(var p=[],j=0;j<m;j++)p.push(T(x+9+j,5,"▀",O,j&&(bs<2||j<3)?{bg:fc(WD)}:{}));
  return p;
 }
 function H(k){return T(x+10,0,hy,k,bo)}
 function gl(k,a,r){return c.hsv(15+k*35-r*6,.7-.35*k,.85+.15*k)}
 // Bricks drop, the board bounces on.
 for(i=0;i<19;i++){
  y1=i<7?i-1:6;y2=i<10?i-4:6;by=i<10?-9:i==17?4:i<16?i-11:5;
  cp=P(i==8||i==13?cl:rt);
  S(i<16?40:70,i==7||i==10?[T(i<9?b-1:b+5,6,"·  ·",SU)]:i==16||i==18?[T(b-1,5,"°        °",SU)]:[]);
 }
 cp=P();S(250);
 // Headband floats down, gets tied on.
 for(t=-1;t<4;t++){hb=t;S(70)}
 cp=P(cl,"up");S(150);cp=P(cl,U);S(150);cp=P("wink");S(400);
 // Lining up: slide out, two taps, back.
 [1,2,3,4,5,AH,5,AH,5,4,3,2,1,0].forEach(function(m){cp=P(rt,m>=0?"down":U);S(m>4?220:m>=0?45:130,A(m).concat(m>4?T(x+13,4,"·",SU):[]))});
 // Breathe: the ki aura pulses, sparks rise.
 cp=P(cl);S(400);
 for(n=R(2,3)*12,i=0;i<n;i++){
  k=(1-Math.cos(i*Math.PI/6))/2;e=k>.75?"▒":"░";e+="         "+e;
  pt=gl.bind(0,k);
  kp.forEach(function(q){q.y--});
  kp.push(R(0,2)?{x:K([x-1,x+9]),y:5}:{x:x+R(1,7),y:2});
  S(75,kp.map(function(q){return T(q.x,q.y,q.y>2?"·":"°","#fff0a8")}).concat(k>.35?c.art(x-1,4,[e,e,e],c.hsv(40,.7,.4+.6*k)):[]));
 }
 // Eyes snap open, crouch, arm up... HI-YA!
 pt=0;cp=P(rt);S(160,[T(x+4,2,"!",Y,bo)]);
 co=1;S(260);co=0;
 cp=P(rt,U);S(R(350,650),A(["▄","█","█"]).concat(H(E)));
 S(35,A(["    ▄","  ▄▀"," ▀"]).concat(H(Y),T(x+8,1,"╭──",SU)));
 S(35,A(AH).concat(H(E),c.art(x+8,1,["╭────╮","     │","     │"],SU)));
 // CRACK: V-split, splinters, shockwave.
 cp=P(cl);
 for(i=0;i<22;i++){
  if(i==1){bs=2;for(t=R(9,13);t--;)sp.push({x:x+13+rnd(),y:5,vx:rnd()*2.2-.6,vy:-rnd()*1.4-.4,c:K("'`,▘▝·"),k:K([WD,LT])})}
  sp.forEach(function(s){if(s.y<6){s.x+=s.vx;s.y+=s.vy;s.vy+=.25;if(s.y>=6)s.y=6}});
  if(i==3)cp=P(rt);
  e=A(5).concat(i<6?H(i%2?E:Y):[],i?i<3?T(x+13,4,i<2?"✦":"·",Y):[]:c.art(x+11,3,[" \\|/","- ✸ -"],Y,bo));
  if(i&&i<5)e.push(T(b-i,6,"·",SU,{z:-1}),T(b+7+i,6,"·",SU));
  S(i?45:90,e);
 }
 // Arm back, admire the break, wink.
 for(n=4;n>=0;n--)S(60,A(n));
 S(400);cp=P();S(200);cp=P("wink");S(450,[T(x+9,3,"✦",Y)]);
 // Sometimes the hand smarts.
 if(rnd()<.5){
  pt=function(a){return a>7?E:void 0};
  for(i=0;i<8;i++){cp=P(i%4<2?cl:"wink",i%2?U:"down");S(70,[T(x+9,4+i%2,"~",E)])}
  pt=0;cp=P();S(300);
 }
 // Deep bow, sparkles.
 cp=P(cl);co=1;
 for(i=0;i<9;i++)S(90,[T(x+R(-3,16),R(0,2),K("✦✧·"),K([Y,"text"])),T(x+R(-3,16),R(0,2),"✧","chromeYellow")]);
 co=0;cp=P();S(250);
 // Props fade, headband tossed off.
 cp=P(rt);for(fd=1;fd<4;fd++)S(160);
 cp=P("wink","up");for(t=3;t>=-1;t--){hb=t;S(70)}
 hb=-9;cp=P();S(300);
 return f;
});
