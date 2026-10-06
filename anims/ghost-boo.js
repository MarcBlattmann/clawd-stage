// Clawd dons a sheet, haunts as a bobbing ghost, BOOs a whistling friend away, then unmasks laughing.
$cdA("ghost-boo", { title: "Spooky ghost", w: 46 }, function (c) {
 var f=[],G=c.G,W=c.W,P=c.P,T=c.T,k,t,o,
  d=c.x*2<c.mx?-1:1,D=d>0?"right":"left",E=d>0?"left":"right",
  x=d<0?c.clamp(c.x,24,c.mx):c.clamp(c.x,0,c.mx-24),
  cx=x,co=0,cp=P(),hid=0,gx=x,gt=G-1,gn=-1,ge=" ",gc="text",gb=0,
  fx=d>0?W:-9,fo=0,fp=0,fq=0,fc=c.pick(["permission","success","autoAccept"]),n=0,
  X="closed",Y="warning",GR="inactive",U="up",bo={b:1},w=d>0?")":"(",m=c.pick(["BOO!","BOOO!","BOO!!"]);
 // Sheet: gn body rows over a waving hem; gb flares it for the BOO.
 function sheet(){
  if(gn<0)return[];
  var L=[[1,"▗▄███▄▖"],gb?[0,"▗█"+ge+"███"+ge+"█▖"]:[1,"█"+ge+"███"+ge+"█"],[0,gb?"▀██▄ ▄██▀":"▐███████▌"]].slice(0,gn),p=[];
  L.push([0,n&2?"▝▀▄▀▄▀▄▀▘":"▝▄▀▄▀▄▀▄▘"]);
  L.forEach(function(l,j){p.push(T(gx+l[0],gt+j,l[1],gc,{o:1}))});
  if(gb)p.push(T(gx+2,gt+1,"●","error"),T(gx+6,gt+1,"●","error"));
  return p;
 }
 function S(ms,ex){n++;f.push({x:cx,pose:cp,offset:co,hide:hid,ms:ms,props:sheet().concat(ex||[]).filter(function(p){return p.t}),
  actors:fp?[{x:fx,offset:fo,pose:fp,color:fq||fc}]:[]})}
 f=c.walk(c.x,x);
 // Sneaky look around.
 cp=P(E);S(350);cp=P(D);S(350);cp=P("wink");S(450,[T(x+2,G-1,"hehe",GR)]);
 // A sheet flutters down; he pulls it over himself.
 for(gn=gt=0;gt<G;gt++){gx=x+gt%2;cp=gt>1?P("open",U):P();S(110)}
 gx=x;gt=G-1;S(200);
 for(gn=1;gn<4;gn++){cp=P(X,gn<2?U:"down");hid=gn>2;S(120,hid?[T(x-2,6,"°·",GR),T(x+9,6,"·°",GR)]:[])}
 gn=3;ge="▄";S(150);ge=" ";S(300);
 // Float and bob along in a wave, moaning.
 for(t=0,k=8*c.R(2,4);t<k;t++){
  o=+"012233221122"[t<3?t:3+t%9];gt=G-1-o;
  gx=cx=x-3+ +"3456665432100012"[t%16];ge=" ▌ ▐"[t>>2&3];
  S(90,[T(gx+1+t*3%7,gt+4,o?t%2?"·":"°":"",GR),T(gx+10,gt+1,t>5&&t<16?"ooOOoo~".slice(0,t-5):"",GR)]);
 }
 // Whistling off-stage: duck down and fade out.
 gt=G-3;gx=cx=x;ge=d>0?"▌":"▐";
 S(400,[T(x+4,G-4,"!",Y,bo),T(d>0?W-2:1,G-1,"♪",GR)]);
 for(;gt<G-1;gt++)S(60);
 gc=GR;S(150);gc="subtle";
 for(t=0;fx!=x+13*d;t++){
  fx-=d;fp=P(t%14<10?X:E,"down",t%2?"left":"right");
  S(55,[T(fx+(t%8<4?2:6),G-1-(t>>2)%2,t%16<8?"♪":"♫",GR)]);
 }
 // Friend glances back; the ghost squashes... BOO!
 fp=P(D);S(600,[T(fx+4,G-1,"?",GR)]);
 gc=GR;S(120);gc="text";gt=G;gn=2;S(250);
 gn=3;gt=G-2;gb=1;ge=" ";
 for(t=0;t<11;t++){
  fo=-"01333321000"[t];fp=t?P(X,U):P(E);fq=t&&t<6?(t%2?"text":"subtle"):0;
  gx=cx=x+(t<6?d:0);k=x+4+d*(6+t%3);o=t>1&&t<7?"°":"";
  S(t?70:150,[T((d>0?x+9:x-5)+t%2,0,m,t%2?Y:"error",bo),T(k,G-1,t<8?w:"",GR),T(k,G,t<8?w:"",GR),
   T(fx+3,G-1+fo,t>1?"!!":"",Y,bo),T(fx-1-t%2,G+fo,o,GR),T(fx+9+t%2,G+fo,o,GR)]);
 }
 // Friend bolts; the ghost shakes with laughter.
 fo=1;fp=P(X);S(90);fo=0;fp=P(D);S(150,[T(fx+3,G-1,"!!",Y,bo)]);gb=0;ge="▄";
 for(t=0;fp||t<24;t++){
  fx+=2*d;fp=fx>-9&&fx<W&&P(D,t%2?"one-up":"down",t%2?"left":"right");
  gx=cx=x+t%2;gt=G-1-(t>>1)%2;k=t>>2;o=d>0?fx-2:fx+10;
  S(50,[T(o,G+1,"≡",GR),T(o-2*d,6,t%2?"°":"·",GR),T(fx+3,G-1,t<6?"!!":"",Y,bo),
   T(gx+(k%2?9:-2),k%3,k%2?"HA!":"ha",k&2?Y:"text",bo)]);
 }
 // Pull the sheet off, fling it away, laugh it out.
 gx=cx=x;gt=G-1;hid=0;cp=P(X,U);S(250);
 for(gn=2;gn>=0;gn--)S(110);gn=0;S(150);
 for(;gt>-2;gt--){gx-=2*d;S(60,[T(gx+4+d*7,gt+1,"≈",GR)])}
 gn=-1;
 for(t=0;t<14;t++){
  co=-(t%2);cp=P(X,t%4<2?U:"one-up");k=t%3;o=G-1+co+(k>1);
  S(t<12?90:150,[T(x+(t%4<2?-4:9),(t>>1)%3,t%4<2?"HA!":"HA",k?Y:"text",bo),T(x+1-k,o,"°",w="rainbow_blue"),T(x+7+k,o,"°",w)]);
 }
 co=1;cp=P(X);S(350);co=0;cp=P("wink");S(500,[T(x+8,G-1,"✧",Y)]);cp=P();S(250);
 return f;
});
