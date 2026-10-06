// Western duel: hat on, a rival walks up, five counted paces, a tumbleweed, DRAW!, Clawd hops the shot and wins; the rival plays dead, pops up, hats tipped.
$cdA("western-duel", { title: "Western duel", w: 48 }, function (c) {
 var f=[],G=c.G,W=c.W,P=c.P,T=c.T,R=c.R,r="right",l="left",Y="warning",GR="inactive",bo={b:1},X="closed",U="one-up",H="▄▟███▙▄",i,t,k,s,e,
  L="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
  B=c.clamp(Math.round((c.x+c.mx)/2),10,c.mx-20),M=B+8,
  cx=c.x,ox=W,cp=P(),BL=c.pick(["permission","autoAccept","success"]),op=0,co=0,oo=0,ch=-3,hf=0,oh=0,gun=0,og=0;
 // Frame from state: hats ride on heads, guns sit in hands (og 2 = dropped on the ground).
 function S(ms,ex){
  var p=ch>-9?[T(cx+1,G-1+co+ch,hf?"▀▜███▛▀":H,"#aa6e3c")]:[];
  if(op)p.push(T(ox+1,G-1+oo+oh,H,GR));
  if(gun)p.push(T(cx+9,G+co,gun,GR));
  if(og)p.push(T(ox-1-og,G+og,"══",GR));
  f.push({x:cx,pose:cp,offset:co,ms:ms,props:p.concat(ex||[]),actors:op?[{x:ox,offset:oo,pose:op,color:BL}]:[]});
 }
 function spin(d,ms){for(i=0;i<13;i++){cp={facing:L[d?i:12-i]};op={facing:L[d?12-i:i]};S(ms)}}
 // Dizzy star j on an orbit above the rival's hat.
 function st(j){j%=8;return T(ox+[1,3,5,7,7,5,3,1][j],G-2-(j>3),"✶",Y)}
 function dr(j){return T(M-3,1,j%2?"✶DRAW!✶":" DRAW! ",j%2?"error":Y,bo)}
 // Hat drops on; both walk up nose to nose and glare.
 for(;ch<0;ch++)S(70);
 co=1;cp=P(X);S(90);co=0;cp=P("wink");S(300);
 for(s=0;cx!=B||ox>B+9;s++){
  k=s%2?l:r;
  if(cx!=B){t=B-cx;cx+=t>6?2:t<-6?-2:t>0?1:-1;cp=P(r,"down",k)}else cp=P(r);
  e=Math.max(ox-2,B+9,cx+(cx!=B?11:9));op=e<ox?P(l,"down",k):P(l);ox=e;
  S(40);
 }
 cp=P(r);op=P(l);S(300);
 for(i=0;i<4;i++)S(100,[i%2?T(M,G-2,"✸","error",bo):T(M-1,G-2,"✦ ✦",Y)]);
 op=P(X);S(120);op=P(l);S(250);
 // Back to back, five counted paces, turn.
 spin(1,35);
 cp=P(l);op=P(r);S(400);
 var g=R(2,4),h=R(1,5);
 for(k=1;k<6;k++)for(s=0;s<2;s++){
  cx--;ox++;
  cp=P(k==g&&s?r:l,"down",s?"both":r);
  op=P(k==h&&s?l:r,"down",s?"both":l);
  S(s?230+R(0,90):130,[T(M,1,""+k,"text",bo)]);
 }
 S(300);spin(0,35);
 // A tumbleweed rolls by behind them (slowly between them); Clawd sweats.
 for(e=W+1,i=0;e>-3;i++){
  k=e>ox+1||e<cx+7;e-=k?2:1;
  cp=P(i%16==8?X:r);op=P(i%21==14?X:l);
  S(k?20:50,[T(e,i%8<2?5:6,i%4<2?"⢞⡵":"⢮⡳","#cda569",{z:-1}),T(cx,e<ox+3&&e>cx+5?G-1+(e<M):-1,"°","rainbow_blue")]);
 }
 S(R(300,700));S(220,[dr(0)]);
 // Both draw while DRAW! flashes and fire; Clawd hops the low shot, his bullet lands.
 gun="══";og=1;cp=P(r,U);
 for(t=0;t<14;t++){
  e=t<5?[dr(t+1)]:[];
  if(t==1||t==2)e.push(T(cx+11,G,t<2?"✸":"✦",Y,bo));
  if(t==2||t==3)e.push(T(ox-3,G+1,t<3?"✸":"✦",Y,bo));
  co=[0,0,0,0,0,1,-1,-2,-2,-2,-1,0,1,0][t];
  if(t>1&&t<7)e.push(T(cx+8+3*t,G,"──•","text"));
  if(t>2&&t<11)e.push(T(cx+35-4*t,G+1,"•──","text"));
  if(t==7){ox++;op=P(X);og=2}
  if(t==7||t==8)e.push(T(ox-1,G,"✸✦",Y));
  S(t<5?45:60,e);
 }
 // The rival spins under orbiting stars and sinks; his hat stays.
 for(i=0;i<13;i++){op={facing:L[12-i]};S(35+i*4,[st(i),st(i+4)])}
 op=P(X);S(300,[st(13),st(17)]);og=0;
 while(oo<3){oo++;S(110,[T(ox-2,6,"°·",GR),T(ox+9,6,"·°",GR)])}
 // Smoke curls off the barrel; Clawd blows it away, twirls the gun, holsters, winks.
 for(i=0;i<10;i++){
  s=i<5?i%2:2*i-8;t=Math.min(i,2);
  cp=P(i<5?r:X,U);
  e=i<9?c.art(cx+10+s,G-1-t,(i%2?["·"," ░","░"]:[" ·","░"," ░"]).slice(2-t),GR):[];
  if(i>4)e.push(T(cx+3+i,G-1,"~","text"));
  S(i<5?140:70,e);
 }
 cp=P(r,U);
 for(i=0;i<9;i++){gun=["┼","║","┼","══"][i%4];S(45)}
 gun=0;cp=P("wink");S(500);
 // The hat twitches, the rival pops up (Clawd jumps, hat flies), hats tipped.
 for(i=0;i<4;i++){ox+=i%2?-1:1;cp=P(r);S(80+R(0,150),i>1?[T(cx+4,G-2,"?",Y,bo)]:[])}
 op=P("open","up");
 [2,1,0,-1,0].forEach(function(o,j){
  oo=o;ch=co=j==2||j==3?-1:0;cp=P("open",co?"up":"down");
  S(60,[T(cx+4,j>1?G-2+co+ch:-1,"!",Y,bo),T(ox-1,j>2?G-1:-1,"✦",Y),T(ox+9,j>2?G:-1,"✧",Y)]);
 });
 S(350);op=P("wink","up");S(250);
 cp=op=P("wink",U);ch=oh=-1;S(600);
 ch=oh=0;cp=P(r);op=P(l);S(200);
 // He strolls off; Clawd waves, then tosses his hat up where it twinkles away.
 for(s=0;ox<W;s++){ox+=ox-cx>40?2:1;op=P(r,"down",s%2?l:r);cp=P(r,s&4?U:"down");S(40)}
 op=0;co=1;cp=P(X);S(90);co=0;cp="arms-up";
 for(ch=-1;ch>-4;ch--){hf=ch%2;S(70)}
 ch=-9;S(120,[T(cx+4,0,"✦",Y,bo)]);cp=P("wink");S(120,[T(cx+4,0,"·",Y)]);S(400);
 return f;
});
