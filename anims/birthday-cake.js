// Cake + party hat: Clawd sways to music, blows out the candles (one may relight), confetti, eats the cake, tosses the hat.
$cdA("birthday-cake", { title: "Birthday cake", w: 40 }, function (c) {
 var R=c.R,T=c.T,P=c.P,M=Math.round,n=R(3,4),w=2*n+3,x=c.clamp(c.x,c.W<80?1:50,c.W-w-13),cx=x+11,X=x,f=c.walk(c.x,x,{ms:40}),t=0,ps=[],lit=[],eat=0,rise=3,hy=-9,hx=0,lean=0,i,j,k,
  Y="chromeYellow",pk="#ff96c8",br="#be7846",air="#aad2ff",B={b:1},K=c.pick,G="right",J="wink",C="closed",O="open",E="left",hc=K(["permission","autoAccept","success","error"]);
 function fc(j){return cx+2+2*j}
 // body flushes red while holding breath (v 0..1)
 function red(v){return v>0?c.rgb(215+40*v,119-25*v,87-30*v):void 0}
 // particle: x,y,dx,dy per 100ms,life,chars by age,color
 function sp(a,b,dx,dy,l,s,col){ps.push([t,a,b,dx,dy,l,s,col])}
 // eyes|pose, ms (long holds split), offset, x (null = stay), props, color
 function A(e,ms,o,xx,g,col){
  for(var m=Math.ceil(ms/120),d=M(ms/m),j=0,q,L=cx+eat,y=1+(o|0)+hy,pr;j++<m;t+=d){
   X=xx==null?X:xx;pr=[].concat(g||[]);
   ps.forEach(function(p){var a=(t-p[0])/100;a<p[5]&&pr.push(T(p[1]+M(a*p[3]),p[2]+M(a*p[4]),p[6][Math.min(a|0,p[6].length-1)],p[7],{z:-1}))});
   for(q=0;q<n;q++)if(fc(q)>=L)pr.push(T(fc(q),4+rise,"│",c.rainbow(3*q+1))),lit[q]&&pr.push(T(fc(q)+(lit[q]>1)-lean,3+rise,K("♦♦♦*"),c.rgb(255,R(110,230),R(0,60)),B));
   eat<w&&pr.push(T(L,5+rise,("▟"+"█".repeat(w-2)+"▙").slice(eat),pk),T(L,6+rise,"█".repeat(w-eat),br),T(L,6+rise,"▀ ▀▀ ▀ ▀▀ ▀".slice(eat,w),pk,{bg:br}));
   hy>-8&&pr.push(T(X+hx+4,y,"●",Y),T(X+hx+4,y+1,"▲","text"),T(X+hx+3,y+2,"◢█◣",hc));
   f.push({pose:e.eyes?e:P(e),ms:d,offset:o,x:X,color:col,props:pr});
  }
 }
 // gust: flames bend, go out, smoke; the red drains away
 function blow(len){
  for(var e=w+4,s=x+10,h=0,j,a;h-len<=e;h++){
   for(j=0;j<n;j++)lit[j]&&fc(j)<=s+h&&lit[j]++>2&&(lit[j]=0,sp(fc(j),3,.15,-.3,12,"░░~~~~···","inactive"));
   a=Math.max(0,h-len);j="~".repeat(Math.min(h,e)-a+1);
   A(C,35,0,x+1,[T(s+a,4,j,air),T(s+a,3,j,air)],red(1-h/8));
  }
 }
 function hop(a){a.forEach(function(o,j){A(o>0?C:P(j%2?J:O,"up"),o>0?110:70,o)})}

 // Sparkles, cake rises, candles light, happy hop.
 for(i=0;i<6;i++)sp(cx+R(0,w-1),R(2,6),0,0,R(2,6),"✦✧·",c.rainbow(i*2));
 A(O,200);A(G,200);
 while(rise)rise--,A(G,90);
 A(O,250);
 for(k=0;k<n;k++)sp(fc(k),3,0,0,1,"✦",Y),A(G,90),lit[k]=1,A(G,150);
 hop([1,-1,-2,-1,0]);A(J,250);

 // Hat drops: bonk.
 for(hy=-4;hy<0;)hy++,A(G,60);
 sp(X+2,3,-1,0,2,"·","text");sp(X+6,3,1,0,2,"·","text");
 A(C,110,1);A(O,120);A(J,400);

 // Music; he sways toward where he looks.
 for(k=R(12,18),i=0;i<k;i++)i%2||sp(R(x+7,cx+w),2,K([-.2,.2]),-.25,9,K("♪♫"),c.rainbow(R(0,9))),A(P(i%4<2?E:G,i%2?"one-up":"down",i%2?E:G),170,0,x+(i%4>1));

 // Inhale (lean back, flames lean in, goes red), hold, blow.
 A(G,350,0,x);
 for(i=0;i<6;i++)lean=i<5,lean&&sp(cx,R(3,5),-1,0,3,"·",air),A(C,lean?110:450,0,x-1,0,red(i/5));
 blow(9);A(O,300);
 // Stubborn candle relights behind his back: glance, smug, double take, puff.
 if(R(0,1))k=n-1,A(J,300),sp(fc(k),3,0,0,1,"·",Y),A(J,120),lit[k]=1,A(G,200),A(J,300),A(G,70,-1,null,[T(x+9,2,"!",Y,B)]),A(G,400,0,null,[T(x+9,3,"!",Y,B)]),lean=1,A(C,250,0,x,0,red(.6)),lean=0,blow(2);
 A(J,500);

 // Confetti (mixed fall speeds), hops.
 for(i=0;i<30;i++)k=-R(0,5),j=R(5,8)/10,sp(R(x-3,cx+w+3),k,K([-.2,0,.2]),j,(7-k)/j,K("▘▝▖▗•*✦"),c.rainbow(R(0,9)));
 hop([1,-1,-2,-2,-1,0,1,-1,-2,-2,-1,0]);
 A(J,500);

 // Eats the cake bite by bite.
 A(G,350);A(P(G,"down",E),90,0,x+2);
 for(eat=1;eat<=w;eat++)sp(cx+eat,R(4,5),K([-.4,.5]),-.5,3,"·",K([pk,br])),A(P(eat%2?C:G,"down",eat%2?E:G),100,0,x+2+eat);
 sp(X+9,3,.4,-.5,6,"♥","error");A(C,350);A(J,350);

 // Tosses the hat up and away.
 A(O,110,1);
 for(i=0;i<6;i++)k=i<2?-1:0,hy=-1-i-k,hx=i,A(P(i>2?J:O,"up"),100,k);
 f.push({pose:"default",ms:200});
 return f;
});
