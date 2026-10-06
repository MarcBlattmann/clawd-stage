// Clawd meditates ("om"), glows and levitates on sparkles; a fly lands on his head, he flinches and drops.
$cdA("levitation",{title:"Levitation",w:40},function(c){
 var f,G=c.G,T=c.T,M=Math,R=M.round,C="closed",O="open",U="up",W="wink",Z={z:-1},B={b:1},Y="chromeYellow",I="inactive",S="subtle",V="warning";
 var x=c.clamp(c.x,2,c.mx-2),s=x<5?1:x>c.mx-5?-1:c.pick([1,-1]),sd=s>0?"right":"left";
 var ps=[],au=0,spk=0,fx=-99,fy=0,o=0,t=0,i,k,cx,ox=x+16<c.W?x+12:x-6;
 f=c.walk(c.x,x);
 function sp(a,b,u,v,q,k,n){ps.push({x:a,y:b,u:u,v:v,t:q,k:k,n:n});}
 function add(e,a,ms,ex,ft){
  var p=[],h=G+o,j,r,L=9+2*o,g=au*(0.5+0.5*M.sin(t++/2)),k=c.hsv(38,0.75,0.35+0.65*g),m=g>0.5;
  if(o<0)p.push(T(x+4-(L>>1),6,Array(L+1).join("─"),S,Z));
  for(r=h+3;r<7;r++)for(j=0;j<spk;j++)p.push(T(x+c.R(1,7),r,c.pick("✦✧*··"),c.pick([V,Y,"text"])));
  // aura pulses at his sides (crown at full strength), body glows from the core
  if(au)for(r=0;r<3;r++)p.push(T(x-2,h+r,(m?"░▒":" ░")+"         "+(m?"▒░":"░"),k,Z));
  if(au>0.7&&m)p.push(T(x+2,h-1,"░░░░░",k,Z));
  p.push(T(fx,fy,"¤","text",B));
  ps=ps.filter(function(q){return q.n-->0;});
  ps.forEach(function(q){p.push(T(R(q.x),R(q.y),q.t,q.k));q.x+=q.u;q.y+=q.v;});
  f.push({x:x,offset:o,pose:c.P(e,a,ft),ms:ms,props:p.concat(ex||[]),paint:au?function(cx,cy){
   var b=g*M.max(0,1-M.abs(cx-4)/5-M.abs(cy-1)/3);return c.rgb(215+40*b,119+120*b,87+110*b);}:void 0});
 }
 function q(ms,ex){add(C,0,ms,ex);}
 function om(){sp(ox,G+o,0,-0.35,c.pick(["om","ommm","om~"]),"suggestion",6);}
 // fly steps toward (tx,ty); his eyes flick after it when close
 function go(tx,ty,ms,e){
  while(fx!=tx||fy!=ty){
   var d=M.abs(fx-x-4);
   sp(fx,fy,0,0,"·",S,1);
   fx+=M.sign(tx-fx);
   if(t%2||fx==tx)fy+=M.sign(ty-fy);
   if(t%9==0&&d>9)sp(fx-1,fy?fy-1:1,0,0,"bzz",I,3);
   add(e||(d<6&&t%4==0?(fx<x+4?"left":"right"):C),0,ms||50);
  }
 }
 function loop(k){fx=cx-s*R(2*M.cos(k*0.8));fy=1+R(M.sin(k*0.8));if(k%6==2)sp(fx-1,fy-1,0,0,"bzz",I,3);}
 // anyone watching? deep breath
 add("left",0,350);add("right",0,350);add(O,0,200);
 add(C,U,600);
 sp(x-1,G+1,-1,0,"~",S,3);sp(x+9,G+1,1,0,"~",S,3);
 q(400);
 // om... the aura swells
 for(i=0;i<18;i++){au=M.min(1,i/10);if(i%6==1)om();q(130);}
 // rise on sparkles, hover serenely
 for(o=-1;o>-4;o--)for(k=0;k<4;k++){if(k==2&&o==-2)om();spk=o<-1?2:1;q(160+k*20);}
 for(i=c.R(9,14);i--;){o=i%8>5?-2:-3;if(i%7==3)om();q(150);}
 o=-3;
 // a fly loops round him, his focus wavers; it lands on his head
 fx=c.clamp(x+4+s*c.R(16,22),-1,c.W);fy=c.R(0,2);
 for(k=c.R(2,3),i=s;k--;au*=0.8){i=-i;go(x+4+i*c.R(5,8),c.R(0,4));}
 go(x+4+s*3,0);au=0.4;go(x+4,0,90);
 // he peeks, ignores it, it strolls, his eye twitches
 q(700);add(W,0,400);q(500);
 fx+=s;q(260);fx+=s;q(260);
 add(W,0,120);q(120);add(W,0,120);
 // FLINCH: aura shatters, fly bolts, he drops
 for(k=0;k<3;k++){sp(x-2,1+k,-1,0,"░",Y,2);sp(x+10,1+k,1,0,"░",Y,2);}
 for(k=0;k<7;k++)sp(x+c.R(1,7),c.R(4,6),0,0.4+M.random()/2,c.pick("·*✧"),Y,4);
 au=spk=0;
 var bang=[T(x+4-3*s,0,"!",V,B)];
 fx+=2*s;add(O,U,110,bang,"left");
 fx+=2*s;add(O,U,150,bang,"right");
 for(o=-2;o<1;o++){fx+=s;fy=1;add(O,U,40-o*15);}
 o=1;
 for(k=-1;k<2;k+=2){i=x+4+5*k;sp(i,6,k,0,"·",I,3);sp(i,5,k,-0.5,"°",I,2);}
 q(140);
 o=0;
 // dazed; the fly loops gleefully overhead
 cx=fx;
 for(k=0;k<10;k++){i=R(3*M.cos(k*0.9));loop(k+2);q(110,[T(x+4+i,3,"✦",V),T(x+4-i,3,"*",Y)]);}
 // glares, shakes a fist; it buzzes off
 add(sd,0,300);
 for(k=0;k<6;k++){loop(k+12);add(sd,k%2?0:"one-up",110,[T(s>0?x+10:x-4,3,"#@!","error",B)],k%2?"left":0);}
 go(fx+s*8,-1,50,sd);
 fx=-99;
 // sigh... one more om
 add(sd,0,300);
 sp(x+4,3,0,-0.4,"~",S,3);
 q(400);om();
 for(k=0;k<6;k++)q(130);
 add(O,0,250);
 f.push({x:x,pose:"default",ms:300});
 return f;
});
