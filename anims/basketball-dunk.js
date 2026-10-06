// A hoop rises, Clawd dribbles (maybe through the legs), sprints, slam dunks and swings on the rim; the ball ends as a star.
$cdA("basketball-dunk", { title: "Slam dunk", w: 50 }, function (c) {
 var R=c.R,T=c.T,B=0,d=7,nt=0,sh=0,i,k,q,n,S="subtle",Z={z:-1},
  r=c.clamp(Math.max(c.x+22+R(0,6),Math.min(61,c.x+40)),21,c.W-8),h=r+4,xd=r-8,
  X=Math.min(c.x,r-20),f=c.walk(c.x,X),
  du=(x,s)=>T(x,6,s,S,Z),bl=(x,y)=>B=[x,y],dust=()=>[du(h-1,"░▒   ▒░")];
 // pu("eyes arms feet",ms,props,offset): adds the hoop (sunk d rows, shaking while sh) and the ball
 function pu(s,ms,p,o){
  var b=sh?sh&1?"▐":"▌":"█";
  p=(p||[]).concat(d>6?[]:c.art(h,d,[b,b,b+"═╗",b+" ║","  ║","  ║"," ═╩═"],"inactive",Z).concat(
   T(r,2+d,(sh?sh&1?"▀":"▄":"━").repeat(4),"error",{z:-1,b:1}),
   c.art(r,3+d,["╲╳╳╱\n ╲╱","╲││╱\n ││\n ╲╱","╱╳╳╲\n ╱╲"][nt],"text",Z)));
  if(B)p.push(T(B[0],B[1],"●","#ff8c1a",{b:1}));
  f.push({x:X,offset:o,pose:c.P.apply(0,s.split(" ")),ms:ms,props:p});
 }
 // dribble path: pairs of (col+1 in hex, row) relative to Clawd
 function dr(s,ms){
  for(i=0;i<s.length;i+=2){
   bl(X+parseInt(s[i],16)-1,+s[i+1]);q=B[0]>X+8;
   pu((B[0]<X+4?"left":"right")+(q&&B[1]<5?" one-up":""),ms,q&&B[1]>5?[T(B[0]-1,6,"· ·",S)]:0);
  }
 }
 // setup: hoop rises out of the ground, Clawd notices, a ball drops into his claw
 while(d){d--;pu(d>4?"open":"right",70,dust())}
 for(k=2;k--;)pu(k?"open":"right",k?120:380,[T(X+4,3-k,"!","warning",{b:1})],-k);
 for(k=0;k<4;k++){bl(X+8,k);pu("right one-up",55,k?[T(X+8,k-1,"¦",S)]:0)}
 bl(X+8,4);pu("closed one-up",130,0,1);
 bl(X+8,3);pu("wink one-up",400);
 // build-up: dribble, maybe through the legs and back, then sprint (speeding up)
 for(n=R(2,3);n--;)dr("a4a5a6a5",75);
 if(R(0,1))dr("a4a5966646160504050605040516466696a5a4a5a6a5",60);
 dr("a4",220);
 for(n=xd-4-X,i=0;i<n;){
  k=n-++i;X++;q=[4,5,6,5][k%4];bl(X+9,q);
  pu("right "+(q<5?"one-up ":"down ")+(i%2?"left":"right"),40+Math.min(20,2*k),k<10?[T(X-3,4,"─ ─",S),T(X-4,5,"──",S)]:0);
 }
 // gather, crouch, leap
 bl(X+8,4);pu("closed one-up",180,0,1);
 for(k=1;k<5;k++){
  X++;q=-Math.min(k,3);bl(X+8,3+q);
  pu("right one-up",60,[du(xd-4,k<3?"▒░    ░▒":"░      ░")].concat(q<-1?T(X+1,7+q,"¦    ¦",S):[]),q);
 }
 // climax: slam through the rim, board shakes, net swishes, ball bounces; he hangs and swings
 var wd=c.pick(["SLAM!","DUNK!","BOOM!"]),e=c.pick(["wink","closed"]),m=14+R(3,6),bp="00111213242526252425262526";
 for(k=0;k<m;k++){
  var sp=k&&k<12?[T(xd+2,0,wd,c.rainbow(k),{b:1})]:[],sw=k>3&&k<m-1&&k>>1&1;
  bl(r+ +(bp[2*k]||2),+(bp[2*k+1]||6));
  nt=+"00011202020000"[k]||0;if(k>2&&k<11)sp.push(T(h+1,+(k<7),"+2","success",{b:1}));sh=k>1&&k<9?k:0;X=xd+sw;
  if(k>1&&k<m-2)for(i=0;i<2;i++)sp.push(T(r+R(-1,3),R(0,1),c.pick("✦*·✧"),c.pick(["warning","chromeYellow","text"])));
  pu((k==1?"closed":k<7?"right":k<m-2?e:"open")+" one-up "+(k>3?sw?"left":"right":"both"),
   k<13?parseInt("g6q66679bb9bb"[k],36)*10:130,sp,k<2?-3:-2);
 }
 // drop down, land, the hoop sinks back, scoop the ball
 pu("open up",60,0,-1);
 pu("open",50);
 pu("closed",140,[du(X-2,"░▒"),du(X+9,"▒")],1);
 pu("wink",400);
 for(d=1;d<8;d++)pu("right",70,dust());
 bl(X+9,5);pu("right",70);
 bl(X+9,4);pu("right one-up",70);
 bl(X+8,3);pu("wink one-up",350);
 // cleanup: spin it on a claw, toss it up, it becomes a star
 for(k=0;k<8;k++)pu((k<4?"open":"wink")+" one-up",90,[T(X+7,3,k%2?"‹ ›":"› ‹",S)]);
 bl(X+8,4);pu("closed one-up",140,0,1);
 for(k=3;k--;){bl(X+8,k);pu("right up",55,[T(X+8,k+1,"¦",S)])}
 B=0;
 for(k=0;k<6;k++)pu((k<3?"right":"wink")+" up",120,[T(X+8,0,"✦✧✦✧··"[k],"chromeYellow",{b:1})],k==2?-1:0);
 pu("open",300);
 return f;
});
