// Clawd waters a sprout into a big flower, ducks a bee, sniffs it in bliss; one splash too many shoots it into the sky.
$cdA("watering-plant",{title:"Green thumb",w:40},function(c){
 var R=c.R,T=c.T,P=c.P,M=Math.round,G=c.G,X=c.clamp(c.x,0,c.W-25),f=c.walk(c.x,X),px=X+17,t=0,ps=[],st=1,py=7,sl=0,jt=0,cs=0,ca,cy,B=0,BL,BP,i,k,g,bl,
  E="right",U="one-up",Y="chromeYellow",GR="success",TC="#c8643c",D="#78b4ff",CC="#58a8e0",PC=c.pick(["#ff7ab8","#ff5a5a","#b48cff","#ff9a3c"]),
  S="V,V|L,V|│|L,●|│|│|L,▄|▐●▌|▀|│|L,▄█▄|▐█●█▌|▀█▀|│|L".replace(/V/g,"▀▄▀").replace(/L/g,"▀▄│▄▀").split(",");
 // particle: t0,x,y,dx,dy per 50ms,life,glyphs,color,gravity (draws under pot)
 function sp(a,b,dx,dy,l,s,col,gr){ps.push([t,a,b,dx,dy,l,s,col,gr||0])}
 // eyes|pose,ms,offset,props. Can cs: 1 held 2 pour 3 ground 4 thrown
 function A(e,ms,o,ex){
  for(var m=Math.ceil(ms/90),d=M(ms/m),j=0;j++<m;t+=d){
   var bk=[],pr=[],r=S[st-1].split("|"),q,s,n=sl;
   while(n--)r.splice(3,0,n%2?"│":"▀▄│▄▀");
   for(n=r.length,q=0;q<n;q++)s=r[q],bk.push(T(px+jt-(s.length>>1),py-n+q,s,q<(st>4?3:st-3)?PC:GR));
   st>4&&bk.push(T(px+jt,py-n+1,"●",Y,{bg:PC}));
   ps.forEach(function(p){var a=(t-p[0])/50;a<p[5]&&(p[8]?bk:pr).push(T(M(p[1]+a*p[3]),M(p[2]+a*p[4]+p[8]*a*a/2),p[6][a/p[5]*p[6].length|0],p[7]))});
   if(BL)B=[px+2+jt,py-n,1];
   bk.push(T(px-2,py,"█▄▄▄█",TC,{bg:"#8a5a32"}),T(px-2,py+1,"▜███▛",TC));
   cs<3&&(ca=X+8,cy=G+(o|0)-2);k=cs>3&&cy%2;
   cs&&pr.push(T(ca,cy,k?"│██▀▄":"╭─╮",CC),T(ca,cy+1,k?"╰─╯":cs==2?"│██▀▄":"│██▄▀",CC));
   B&&pr.push(T(B[0],B[1],"●",Y,{b:1}),T(B[0]+B[2],B[1],t%100<50?"°":"¨","text"));
   f.push({x:X,offset:o|0,ms:d,pose:e.eyes?e:P(e,cs&&cs<3?U:"down"),paint:bl,props:bk.concat(pr,ex||[])});
  }
 }
 function pour(n){for(cs=2,i=0;i<n;i++)R(0,3)&&sp(X+13,G-1,R(11,15)/10,0,4.2,"••··",D,.25),A(P(E,U,i%8<4?"both":"left"),50);cs=1}
 function grow(){st++;for(k=0;k<4;k++)sp(px+R(2,3)*(k%2||-1),R(5-st,4),0,-.1,R(3,6),"✦✧·",R(0,1)?Y:GR)}

 // A potted sprout rises.
 A(E,200);
 while(py>5){for(k=-3;k<4;k+=6)sp(px+k,6,k/10,-.15,5,"·.",TC);py--;A(E,140)}
 A("closed",90);A(E,250);A("wink",250);
 // Three pours, a stage each; the can may need a shake.
 sp(X+10,1,0,-.1,5,"✦✧·",Y);cs=1;A(P("open",U),300);
 for(g=0;g<3;g++){
  A(E,R(120,250));pour(R(7,11));
  if(g&&!R(0,2)){A("open",400);cs=2;for(i=0;i<6;i++)X+=i%2?-1:1,A("closed",50);sp(X+13,G-1,1.3,0,4.2,"●•",D,.25);A(E,250);cs=1}
  A(E,250);grow();A(R(0,1)?"wink":"open",250,g%2-1);A(E,150);
 }
 // Bud opens, breath held... bloom! Hops, can down.
 A(E,300);grow();A(E,350);A(P("open",U),250,1);st=6;
 for(k=0;k<10;k++)sp(px,1,1.2*Math.cos(k*.63),.5*Math.sin(k*.63),6,"✦✧*·",c.rainbow(k));
 [-1,-1,0,1,0,-1,-1,0].forEach(function(o,j){A(o>0?"closed":P(j%2?"wink":"open","up"),70,o)});
 A(E,200);A(P(E,U),100,1);cs=3;ca=X+9;cy=5;A(E,250);
 // A bee loops round Clawd (he ducks) and lands on the flower.
 BP=[[px-4,-1]];for(i=11;i<52;i++)BP.push([M(px-4+10*Math.cos(i*.14)),M(2-1.6*Math.sin(i*.14))]);BP.push([px+2,0]);
 BP.forEach(function(p,j){var q=BP[j-1]||p,du=p[0]>X+1&&p[0]<X+7&&p[1]>2;
  B=[p[0],p[1],p[0]>q[0]?-1:1];j%2&&sp(q[0],q[1],0,0,3,"·","subtle");
  A(du?"closed":p[0]<X+2?"left":p[0]>X+6?E:"open",45,du)});
 BL=1;A(E,300);
 // Scent drifts over: eyes shut, he blushes, floats; hearts rise.
 for(i=0;i<20;i++){i<14&&i%2&&sp(px-3,R(1,2),-.6,.2,9,"~~~-·","#ffb4dc");i>5&&i%3==0&&sp(X+R(2,6),2,R(-1,1)*.1,-.2,14,"♥♥♥·","error");i>8&&(bl=function(x,y){if(y==1&&x%4==2)return"#ff7a9a"});A(i<5?E:"closed",100,-(i>10&&i<18))}
 A("wink",350);bl=void 0;
 // One splash too many: it shoots off, pot and all.
 cs=1;A(E,250);pour(8);
 for(i=0;i<8;i++)jt=i%2*2-1,A(P("open",U),50);
 for(jt=0,sl=1;sl<9;sl++)k=R(0,3),sl%2&&sp(px+R(-2,2),k,R(-1,1)*.1,.2,(6-k)*5,"▀▄▀▄▀▄",GR),A(P(sl<3?"open":E,U),45,-(sl>1&&sl<5),[T(X+4,1,"!",Y,{b:1})]);
 for(;py>-3;py--)sp(px+R(-2,2),py+2,0,.2,6,"·.",TC,.05),A(E,55);
 A("open",450);
 // Shrug, can over the shoulder.
 A(P("open",U),120,1);
 for(i=1;i<6;i++)cs=4,ca=X+8-i,cy=G-2-i,A(P(i>2?"wink":"open","up"),60);
 cs=0;A("wink",450);f.push({pose:"default",ms:250});
 return f;
});
