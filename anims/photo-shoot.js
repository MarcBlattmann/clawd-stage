// A friend sets up a tripod camera, "say cheese!", FLASH: Clawd poses, and a polaroid develops in his hand.
$cdA("photo-shoot",{title:"Photo shoot",w:50},function(c){
 var R=c.R,T=c.T,W=c.W,M=Math.round,
  X=c.clamp(c.x,Math.min(46,c.mx-27),c.mx-27),K=X+16,F=W,cx=W,cy=1,lg=0,fl=0,bu=0,q=0,ps=[],t=0,
  fp,fc=c.pick(["permission","success","autoAccept"]),H=R(180,320),Y="chromeYellow",C="#efe8da",
  U="wink one-up",RU="right one-up",CU="closed up",
  f=c.walk(c.x,X,{ms:40}),i,k,FA="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ");
 // "eyes arms feet" -> pose
 function Q(e){return e&&e.big&&/ |^.{4,6}$/.test(e)?c.P.apply(0,e.split(" ")):e||"default"}
 function sp(x,y,vx,vy,n,s,col){ps.push([t,x,y,vx,vy,n,s,col])}
 function A(e,ms,o,ex){
  for(var n=Math.ceil((ms=ms||60)/80),d=M(ms/n);n--;t+=d){
   var p=[],a,v=q.d/4,B="▐████▌";
   // polaroid develops d 0..4, b: back side
   if(q){a=c.art(q.x,q.y,q.b?["▗▄▄▄▄▖",B,B,B]:["▗▄▄▄▄▖","▐    ▌","▐    ▌",B],C);
    for(i=1;i<3&&!q.b;i++)a.push(T(q.x+1,q.y+i,q.d>1?i>1?"▐▀▀▌":"▟▜▛▙":"    ",c.hsv(16,.7*v,.3+.55*v),{bg:c.hsv(i>1?110:H,.5*v,.3+.6*v),o:1}));
    a.forEach(function(r){r.z=q.z;r.y<q.c&&p.push(r)})}
   if(cx<W)p=p.concat(c.art(cx+2,cy+1,"█████\n█████","#9aa0b0"),c.art(cx,cy+1,"▄▄\n▀▀","#8fd8ff"),T(cx+5,cy,"▄▖","text"),
    lg?c.art(cx+2,cy+3,lg>1?" ╱│╲\n╱ │ ╲":"  │\n  │","#b08050"):[]);
   if(fl){p.push(T(K+4,1,fl>1?"╲│╱":"· ·",Y),T(K+3,2,fl>1?"─✸✸─":" ✦",Y,{b:1}));
    for(a=3;a<6;a++)p.push(T(X+9,a,fl>1?"▒".repeat(7):"░ ░ ░ ░".slice(a&1),Y))}
   if(bu)a="─".repeat(bu[1].length),p=p.concat(c.art(bu[0],0,["╭"+a+"╮","│"+bu[1]+"│","╰──┬"+a.slice(3)+"╯"],"text"));
   ps.forEach(function(s){a=(t-s[0])/60;a<s[5]&&p.push(T(M(s[1]+a*s[3]),M(s[2]+a*s[4]),s[6][a/s[5]*s[6].length|0],s[7]))});
   a={x:X,pose:Q(e),offset:o|0,ms:d,props:p.concat(ex||[]),actors:F<W?[{x:F,pose:Q(fp),color:fc}]:[]};
   if(fl>1)a.paint=function(){return"#fffbe8"};
   f.push(a);
  }
 }
 function S(e,o,ex,h){fp=U;for(var j=4;j--;)fl=j%3,A(e,[h?120:300,100,70,h||R(150,400)][j],o,ex)}
 function TR(a,b,ms){for(;a!=b;a+=a<b?1:-1)A({facing:FA[a]},ms)}
 // friend brings the camera, sets up the tripod
 for(;F>K+7;)F-=F>K+30?3:F>K+15?2:1,cx=F+1,fp="left up "+(t/40&1?"left":"right"),A(F<K+22?"right":0,40);
 for(;cx>K;)cx--,lg=cx<F-4|0,A("right",50,0,[T(X+5,3,"?","text")]);
 cy=2;lg=2;fp="left";for(k=-1;k<2;k+=2)sp(K+4+3*k,6,k*.4,0,3,"·.","inactive");A("right",300);
 fp=U;A("right",450);A(0,250);
 bu=[F,"say cheese!"];fp="left up";A("right",900);
 bu=[X,"cheese!"];fp=U;A(CU,600);bu=0;
 S(CU,0,0,200);
 for(k=0;k<8;k++)A(k<5?"closed":k&1?"left":"right",k<5?110:140,0,k<5&&[T(X+2,3,"✦ · ✧ ✦ · ".substr(k%3*2,5),Y)]);
 // poses: two turns and a jump or a wink
 [function(){TR(0,3,90);S({facing:FA[2]});TR(1,-1,90)},
  function(){TR(0,8,60);S({facing:FA[7]});TR(8,13,60)},
  c.pick([function(){A("closed",150,1);A("arms-up",60,-1);S("arms-up",-2,0,60);A("arms-up",60,-1);A(0,90,1)},
  function(){A(RU,150);S(U,0,[T(X+9,3,"✦",Y)])}])
 ].sort(function(){return Math.random()-.5}).forEach(function(g){
  g();bu=[F,c.pick(["yes!","nice!","work it!","fierce!","love it!","gorgeous!"])];fp="open up";A(0,450);bu=0;fp="left";A(0,150)});
 // polaroid pops out, flies to his hand, develops as he shakes it
 q={x:K-2,y:3,d:0,c:3};
 for(k=0;k<3;k++)q.y--,A("right",k?160:300,0,[T(K+5+(k&1),1,"≈","subtle")]);
 for(q.c=9,k=1;k<7;k++)q.x--,q.y=(k-1>>1)-1,q.b=k&1,A(k>2?RU:"right",50);
 q.y=2;q.b=0;A("closed one-up",90,1);q.y=1;A(RU,250);
 for(k=0;k<14;k++)q.x=X+8+(k&1),q.d=k/3.5,A(RU+(k&1?" left":" right"),90,0,[T(q.x,0,k&1?" ~  ~":"~  ~","subtle")]);
 q.x=X+8;q.d=4;fp="open up";
 for(k=0;k<8;k++)sp(X+11,2,1.2*Math.cos(k*.8),.6*Math.sin(k*.8),5,"✦✧·",c.rainbow(k));
 A(RU,350,0,[T(X+4,3,"!",Y,{b:1})]);
 sp(X+3,3,-.1,-.3,8,"♥♥·","error");A(U,600);
 // show it off, tuck it away
 q.y=0;A("arms-up",80);
 for(k=0;k<6;k++)q.x--,A("arms-up",60);
 for(k=0;k<6;k++)k%2||sp(X+R(0,9),R(0,3),0,0,4,"✦✧·",Y),A(CU,120);
 for(q.z=-1,k=0;k<4;k++)q.y++,A("closed",110);
 q=0;sp(X+4,3,0,-.3,6,"♥·","error");A("wink",450);
 // friend packs up
 fp="left up";lg=1;cy=1;A("right",200);lg=0;
 for(;cx<F+1;)cx++,A("right",50);
 for(;F<W;)F+=F>K+30?3:F>K+15?2:1,cx=F+1,fp="right up "+(t/45&1?"left":"right"),A(t/90&1?RU:"right",45);
 A(0,300);
 return f;
});
