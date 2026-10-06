// Clawd digs until only dirt sprays out, rumbles along underground and pops up elsewhere in a miner's helmet.
$cdA("dig-to-china",{title:"Deep dig",w:50},function(c){
 var T=c.T,P=c.P,R=c.R,G=c.G,M=Math.round,Q=c.clamp,t=0,ps=[],pr,k,n,h,lk,
  X=Q(c.x,7,c.mx),f=c.walk(c.x,X),rt=c.mx-X>17,dr=rt?1:-1,
  X2=X+dr*R(18,Math.min(40,rt?c.mx-X:X)),
  x=X,o=0,pl=0,pc=X-4,mp=0,mz=3,hm=0,L=0,bd=0,dl=0,lip=0,
  D="#a0703c",WD="#c89058",Y="chromeYellow",UP=P("closed","up"),RU=P("right","one-up");
 // particle: x, y, speed, life, glyphs, gravity
 function sp(a,b,u,v,l,s,g){ps.push([t,a,b,u,v,l,s||"●•·",R(0,1)?D:"#7a5230",g||0]);}
 // shovel: upright (grip a,b), overhead, poking up
 function U(a,b){return c.art(a,b,"┬\n│\n│",WD).concat(T(a,b+3,"▼","text"));}
 function OH(){return[T(X+1,h,"◀","text"),T(X+2,h,"──────",WD)];}
 function TP(b){return[T(X+4,b,"▲","text"),T(X+4,b+1,"│",WD)];}
 function DP(v){return function(a,b){if((a*7+b*5)%9<v)return D;};}
 // dirt heap of size n at column a
 function H(a,n){
  for(var y=5,s,i;y<7;y++,n>0&&pr.push(T(a-3,y-1,s,D)))for(s="",i=0;i<7;i++)s+=" ▄█"[Q(M(n/2-Math.abs(i-3))+2*y-12,0,2)];
 }
 // pose e for d ms in <=50ms frames
 function A(e,d,ex){
  for(var m=Math.ceil(d/50),q=M(d/m),j=0,r;j++<m;t+=q){
   pr=[];r=G+o-1;
   H(mp,mp&&mz);H(pc,pl);H(X+10,lip);H(X2-1,dl&&1);H(X2+9,dl&&1);
   hm&&pr.push(T(x+1,r,"▗▄███▄▖",Y),T(x+4,r,"●",L?"text":"subtle",{bg:Y}));
   hm&&L&&bd&&pr.push(T(bd>0?x+8:x-4,r,bd>0?"══─·":"·─══",Y));
   ps.forEach(function(p){var a=(t-p[0])/50;a<p[5]&&pr.push(T(M(p[1]+a*p[3]),M(p[2]+a*p[4]+p[8]*a*a/2),p[6][a/p[5]*p[6].length|0],p[7]));});
   f.push({x:x,offset:o,hide:o>2,pose:e.eyes?e:P(e),ms:q,props:pr.concat(ex||[]),paint:dl?DP(dl):void 0});
  }
 }
 function ch(a,w,s){s=s||"·'";sp(a-w,6,-.5,-.6,3,s);sp(a+w,6,.5,-.6,3,s);}

 // A shovel drops from the sky.
 A("right",300);A("left",250);A("open",200);
 for(k=-4;k<5;k++)A(k>0?"right":"open",40,U(X+11,k));
 ch(X+11,1);k=U(X+11,4);A("closed",120,k);A("right",400,k);A("wink",350,k);
 A(RU,90,U(X+10,3));A(RU,250,U(X+9,3));
 // Stab, heave, toss; three levels down.
 for(o=0;o<3;o++){
  h=G+o-1;
  if(o)lip=2,ch(X+4,5,"░·"),A("closed",140,U(X+9,h));
  for(k=0;o>1&&k<3;k++)A(P(["left","right","wink"][k],"one-up"),330,U(X+9,h));
  for(n=R(2,3)+!o;n--;pl++){
   A(RU,R(80,170),U(X+9,h));ch(X+9,1);
   A(P("closed","one-up","right"),120,U(X+9,h+1));A(UP,60,OH());
   for(k=R(3,5);k--;)sp(X+1,h,-R(7,13)/10,-R(3,9)/10,8,0,.35);
   A(P("left","up"),160,OH());
  }
 }
 // Gone: only dirt flies out, slower and slower.
 for(o=3,n=0;n<9;n++,n%2||pl<12&&pl++){
  A("open",40,TP(6));
  for(k=R(2,4)-(n>6);k-->0;)sp(X+4,5,-R(5,12)/10,-R(12,16)/10,9,0,.4),A("open",40,TP(5));
  A("open",40,TP(6));A("open",60+n*R(10,30));
 }
 A("open",700);
 // Rumble, bulge, burst out.
 for(mp=X+4;mp!=X2+4;mp+=dr)R(0,2)||sp(mp,5,R(-3,3)/10,-.3,3,"·'"),A("open",R(30,50),[T(mp-1,5,mp%2?"~ ~":" ~ ","inactive")]);
 mz=5;A("open",200);mz=7;A("open",250);
 mp=0;x=X2;hm=L=1;dl=4;
 for(k=0;k<10;k++)sp(X2+4,5,R(-13,13)/10,-R(5,15)/10,6,0,.3);
 [2,1,0,-1,-2,-2,-1,0].forEach(function(v,j){o=v;A(j<3?"closed":UP,j>4?70:50);});
 // Lamp sweep; the old hole fills in.
 A("closed",150,[T(X2+4,2,"✦",Y)]);bd=-1;A("left",500);bd=1;A("right",500);
 bd=-dr;lk=rt?"left":"right";A(lk,300);
 for(lip=0;pl;pl--)pc+=pc<X+4,sp(pc,5,R(-5,5)/10,-.4,3,"░·"),A(lk,80);
 A(lk,300);bd=0;A("wink",400);
 // Shake off, lamp dies, helmet flung.
 for(k=0;k<8;k++)x=X2-k%2*(X2?1:-1),dl=4-(k>>1),sp(x+R(1,7),R(4,5),R(-10,10)/10,-.6,4,"·"),A("closed",50);
 x=X2;dl=0;A("open",250);L=0;A("open",150);L=1;A("open",70);L=0;A("closed",350);
 for(hm=0,k=G-1;k>-2;k--)A(UP,50,[T(X2+G-k,k,"▗▄███▄▖",Y)]);
 A("wink",400);A("open",300);
 return f;
});
