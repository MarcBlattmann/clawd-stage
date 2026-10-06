// Clawd paints a sunset on an easel stroke by stroke, steps back to squint, adds a final dab, signs it and winks.
$cdA("painting-easel",{title:"The artist",w:40},function(c){
 var R=c.R,T=c.T,P=c.P,M=Math.round,G=c.G,X=c.clamp(c.x,Math.min(51,c.mx-11),c.mx-11),f=c.walk(c.x,X,{ms:40}),
  E=X+10,ey=-7,t=0,o=0,ps=[],px=[[],[],[],[],[],[]],bt,bc,sg,mk,rf,sm,wk,Q,i,k,p,
  W="#a0703c",C="#ece4d4",Y="chromeYellow",S=R(0,3),mx=R(0,7),
  H=R(245,275),D=(R(370,392)-H)/3,B=R(195,225),pl=[0,1,2,3,4,5,6,7].map(function(p){return c.hsv(p<4?H+p*D:p<6?B:124-p*12,.7,p<4?.55+p*.15:p<6?1.2-p*.15:1)}),
  MK=c.pick([["✦",Y],["v","#2a1830"],["♥","error"]]);
 function sp(){ps.push([t].concat([].slice.call(arguments),0))}
 // bt: brush tip col, -1 up, -2 down
 function A(e,ms,ex){e=e||"right";
  for(var m=-~(ms/90),d=M(ms/m),q=0;q++<m;t+=d){
   var y=ey,h=G+o,a,b,j,i,pr=c.art(E,y,"     │\n┌────┴───┐\nL\nL\nL\n└┬──────┬┘\n╱    │   ╲".replace(/L/g,"│        │"),W);
   for(j=0;j<6;j+=2)for(i=0;i<8;i++)a=px[j][i],b=j>3&&rf&&i==S+1+(t/300&1)?pl[7]:px[j+1][i],pr.push(T(E+1+i,y+2+j/2,a||b?"▀":"░",a||(b?C:"#cfc6b4"),{bg:b||C}));
   mk&&pr.push(T(E+1+mx,y+2,MK[0],MK[1],{bg:px[1][mx]}));
   sg&&pr.push(T(E+7,y+4,"Cl".slice(0,sg),"text",{bg:pl[5]}));
   pr=pr.concat(bt>0?[T(X+9,h,Array(bt-X-8).join("─"),W),T(bt,h,"●",bc)]:bt<-1?[T(X+9,h+1,"╲",W),T(X+10,h+2,"●",bc)]:bt?[T(X+8,h-1,"│",W),T(X+8,h-2,"●",bc)]:[],ex||[]);
   ps.forEach(function(p){var a=(t-p[0])/50;a<p[5]&&pr.push(T(M(p[1]+a*p[3]),M(p[2]+a*p[4]+p[8]*a*a/2),p[6][a/p[5]*p[6].length|0],p[7]))});
   f.push({x:X,offset:o,ms:d,props:pr,paint:sm&&function(x,y){if(x==sm&&!y)return pl[2]},
    pose:e.big?P(e,bt>-2&&bt?"one-up":"down",o<0||wk?t/70&1?"left":"right":"both"):e});
  }
 }
 function go(n){while(o!=n)o+=o<n?1:-1,A(0,60)}
 function reach(n){for(k=bt>0?bt:X+9;k!=n;)k+=c.clamp(n-k,-2,2),bt=k,A(0,30)}
 function dab(r,i){reach(E+1+i);px[r][i]=bc;sp(bt,G+o,R(-1,1)*.4,-.3,4,"·",bc);A(0,80);bt--;A(0,60)}
 function step(n,ms){for(wk=n;wk;)i=n>0?1:-1,wk-=i,X+=i,A(0,ms)}
 // easel drops in
 A(0,300);
 while(ey<0)ey++,A(0,50);
 for(k=-1;k<2;k+=2)sp(E+4.5+5.5*k,6,k/2,-.1,5,"·.","inactive");
 o=1;A("closed",100);o=0;A(0,400);
 bt=-1;bc="text";sp(X+8,1,0,-.1,4,"✦✧·",Y);A("open",300);A("wink",250);
 // six strokes, top down
 o=1;A(0,90);
 for(p=0;p<6;p++){
  bt=-1;go((p>>1)-2);bc=pl[p];sp(X+8,G+o-3,0,-.15,4,"✦·",bc);A(0,R(90,160));
  reach(E+8);sp(E+8,G+o-1,.3,-.4,4,"·",bc,.2);
  for(i=8;i--;)bt=E+1+i,px[p][i]=bc,A(0,R(35,55));
  p==3&&R(0,1)&&(sp(X+11,G+o,-1.2,0,5,"•",bc),A(0,200),sm=R(3,5),A("closed",350),A(0,200));
 }
 // sun + reflection
 bt=-1;go(-1);bc=pl[6];A(0,200);
 for(i=S;i<S+4;i++)i>S&&i<S+3&&(px[2][i]=bc),dab(3,i);
 bt=-1;go(0);bc=pl[7];dab(4,S+1);dab(4,S+2);rf=1;bt=-1;A(0,150);
 // step back, ponder
 step(-5,70);A(0,350);A("wink",600);bt=-2;
 Q=[T(X+5,2,"?","text")];A({facing:"right-12"},450,Q);A(0,150,Q);A({facing:"right-30"},400,Q);
 bt=-1;A("open",400,[T(X+4,1,"!",Y,{b:1})]);step(5,55);
 // final dab, sign
 bc=MK[1];o=1;A(0,90);go(-2);reach(E+1+mx);bt--;A("closed",300);bt++;mk=1;
 for(k=0;k<8;k++)sp(E+1+mx,2,1.3*Math.cos(k*.785),.6*Math.sin(k*.785),5,"✦✧·",c.rainbow(k));
 A(0,250);bt=-1;go(0);
 bc="text";reach(E+7);for(k=0;k<6;k++)bt=E+7+(k&1),sg=k>2?2:1,A("closed",70);
 bt=E+6;A(0,100);bt=-1;A(0,150);
 // admire, hoist away
 bt=-2;step(-3,80);A(0,300);
 for(k=0;k<14;k++)k%2||sp(E+R(-1,10),R(0,5),0,0,5,"·✧✦✧·",Y),k==4&&sp(X+4,3,.1,-.25,9,"♥♥♥·","error"),A(k>2&&"wink",70);
 bt=-1;ey--;A("open",120);ey++;A("open",150);
 for(;ey>-7;ey--)bt=ey%2?-2:-1,A("open",70);
 bt=0;sp(X+9,3,.4,-.8,5,"╱─╲│",W);A(P("open","one-up"),250);A("wink",300);
 f.push({x:X,pose:"default",ms:200});
 return f;
});
