// Balloons lift Clawd into the sky; he drifts along kicking his feet, two pop and he bumps down, the last floats off as he waves.
$cdA("balloon-float-away",{title:"Balloon ride",w:40},function(c){
 var f,G=c.G,T=c.T,I="inactive",C="closed",O="open",R="right",W="warning",B={b:1},Z={z:-1},ps=[],live=[0,0,0],i,j,k,o;
 var sh=function(a){return a.sort(function(){return Math.random()-0.5;});};
 var col=sh(["error","permission","chromeYellow","success","autoAccept"]),ord=sh([0,1,2]);
 var L=c.mx-2,D=Math.min(c.R(18,26),Math.max(c.x,L-c.x)),r=c.x+D<=L,l=c.x>=D;
 var d=r&&l?c.pick([1,-1]):r?1:-1,ey=d>0?R:"left";
 var x=d>0?c.clamp(c.x,0,L-D):c.clamp(c.x,D,L);
 f=c.walk(c.x,x);
 function sp(a,b,u,v,t,k,n){ps.push({x:a,y:b,u:u,v:v,t:t,k:k,n:n});}
 // balloon fan over the raised hand (x+8, G+o); g = [slot, glyph]
 function fan(o,g){
  for(var p=[],h=G+o,j=0;j<3;j++)if(live[j])
   p.push(T(x+6+2*j,h-2,g&&g[0]==j?g[1]:"●",col[j],B),T(x+7+j,h-1,"╲│╱"[j],I));
  return p;
 }
 function add(e,o,ms,p,a,ft){
  p=p||fan(o);
  ps=ps.filter(function(q){return q.n-->0;});
  ps.forEach(function(q){p.push(T(Math.round(q.x),Math.round(q.y),q.t,q.k,Z));q.x+=q.u;q.y+=q.v;});
  if(o<0)p.push(T(x-o,6,"───────".slice(0,9+2*o),"subtle",Z));
  f.push({x:x,pose:c.P(e,a||"one-up",ft),offset:o,ms:ms,props:p});
 }
 function pop(j,o){
  var bx=x+6+2*j,by=G+o-2,k=col[j],tx=(j>1||j&&live[0])&&x+16<c.W?x+12:x+1;
  add(C,o,110,fan(o,[j,"✸"]).concat(T(tx,by,"POP!",k,B)));
  live[j]=0;
  sp(bx-1,by,-1,0,"*",k,2);sp(bx+1,by,1,0,"*",k,2);
  sp(bx,by+1,0,0.5,"~",k,12-2*by);sp(tx,by,0,0,"POP!",k,2);
  add(C,o,90,0,0,"left");
  add(R,o,300);
 }
 function dust(y,n){for(k=-1;k<2;k+=2)sp(x+4+n*k,y,k,y-6?-0.5:0,y-6?"°":"·",I,3);}
 function sweat(o,u){sp(x,G+o-1,u-1,0.5,"'","suggestion",3);}

 // hand goes up, balloons puff up one by one and tug him onto his toes
 add(O,0,260,[],"down");
 add(R,0,200,[]);
 for(j=0;j<3;j++)for(live[j]=1,k=0;k<3;k++)add(R,0,60+30*k,fan(0,[j,"·o●"[k]]));
 add("wink",0,500);
 for(k=0;k<4;k++)add(k%2?R:O,k%2-1,k%2?180:80,0,0,k%2?"both":"left");
 // crouch, lift-off, wheee
 add(C,1,220);
 add(O,0,60);
 dust(6,4);
 add(O,-1,90,0,0,"left");
 sp(x+1,G-3,d,0,"whee!","text",5);
 add("wink",-2,380,0,"up");
 // drift: humming, kicking; a pop midway sinks him a row
 var p1=c.R(D/2|0,D*0.6|0);
 for(i=0;i<D;i++){
  x+=d;
  o=i>p1?-1:-2;
  if(i<p1&&i%6==3)sp(x+4-5*d,G+o,-d/2,-0.5,c.pick("♪♫"),"text",4);
  if(i==p1+1)sweat(o,d);
  if(i%3==0)sp(x+4-6*d,G+o+1,-d,0,"~","subtle",2);
  add(i<p1?(i%8==5?"wink":ey):O,o,i<p1?130:110,0,i<p1&&i%4>1?"up":0,i%2?"left":R);
  if(i==p1){pop(ord[0],-2);add(C,-1,160,0,0,"both");}
 }
 // second pop: look at it, look at us, then drop with a bump
 pop(ord[1],-1);
 sweat(-1,0);
 add(O,-1,320);
 add(C,0,50);
 dust(6,5);dust(5,4);
 add(C,1,90);
 add(C,-1,70);
 // dizzy stars circle his head
 for(k=0;k<5;k++)add(k%2?"left":k?R:C,0,k?150:220,fan(0).concat(T(x+2,G-1,"✦ · ✧ · ✦".substr(2*(k%3),5),W)));
 // arm down with a sigh, the last balloon slips off; a missed reach, then waving goodbye
 j=ord[2];live[j]=0;
 var e=c.W>2*x+16?1:-1,ee=e>0?R:"left",bx=x+8,by=G-1,q;
 sp(x-1,G,-0.5,-0.5,"~",I,3);
 for(i=0;i<20;i++){
  if(i==1)by--;
  if(i>1&&(i<7?i%2:1))bx+=e;
  if(i==3||i>6&&i%3==0)by--;
  q=by>-2?[T(bx,by,"●",col[j],B),T(bx,by+1,i<2?"│":"()"[i>>1&1],I)]:[];
  if(i==3)q.push(T(x+4,G-1,"!",W,B));
  if(i==15)sp(x+4,G-1,0,-0.5,"♥","error",4);
  add(i<2||i==6?C:i<3?O:i>14?"wink":ee,i==4?1:i==5?-1:0,[450,200,150,320,70,170,260][i]||130,q,
   i==5?"up":i>6&&i<15&&i%2?0:"down");
 }
 f.push({x:x,pose:"default",ms:300});
 return f;
});
