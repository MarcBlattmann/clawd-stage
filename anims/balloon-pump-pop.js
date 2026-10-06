// Clawd pumps a balloon until it wobbles, hesitates, winks, pumps again: BANG, confetti, sheepish wink.
$cdA("balloon-pump-pop", { title: "Balloon pop", w: 44 }, function (c) {
 var f=[],P=c.P,T=c.T,M=Math,R=M.random,x=c.clamp(c.x,4,c.W-26),b=x+15,h=c.R(0,359),
  U="one-up",I="inactive",E="right",C="closed",Z="text",O="open",pp,i,k,s,w,
  col=function(k){return c.hsv(h,M.max(.2,.95-k/9),1)},
  // Quarter-block ellipse balloon on the hose tip; q>1 squashes, d shifts it sideways.
  bal=function(k,q,d){
   var a=[],r=.9+.75*k,ry=M.min(4,r/(q=q||1)),rx=1.9*r*q,y,u,v,m,t,X,Y;
   for(y=0;y<4;y++){
    for(t="",u=-7;u<8;u++){
     for(m=v=0;v<4;v++) X=(2*u+v%2-.5)/rx,Y=(2*y+(v>>1)+.5-8+ry)/ry,m|=(X*X+Y*Y<1)<<v;
     t+=" ▘▝▀▖▌▞▛▗▚▐▜▄▙▟█"[m];
    }
    a.push(T(b-7+(d|0),y,t,col(k)));
   }
   if(ry>2.4) a.push(T(b+(d|0)-M.round(rx/4),(7-ry)>>1,"▘",Z,{bg:col(k)}));
   return a;
  },
  // Pump at the raised hand: d handle down, l sunk, u air bulge.
  pump=function(d,l,u){
   l=l||0;
   var a=[T(x+9,6+l,"▟█▙","suggestion"),T(x+9,4+l+d,"▄▄▄",I)],j;
   if(!d) a.push(T(x+10,5+l,"│",I));
   if(pp) a.push(T(b,3+l,"~",col(6)));
   for(j=0;j<6;j++) a.push(T(j<3?x+12+j:b,(j<3?6:9-j)+l,(j==u?"═══╝║║":"───╯││")[j],j==u?Z:I));
   return a;
  },
  rig=function(k,q){return pump(0).concat(bal(k,q))},
  ck=function(r,d){d=d||7;return [T(b-d,r%3,"'",Z),T(b+d,2-r%3,",",Z)]},
  F=function(p,ms,pr,o,X){f.push({pose:p,ms:ms,props:pr,offset:o|0,x:X})},
  dust=[T(x+8,6,"·",I),T(x+13,6,"·",I)];
 f=c.walk(c.x,x);
 for(k=3;k>=0;k--) F(P(E),90,pump(0,k).concat(k?dust:bal(0)));
 F(P(E),400,rig(0));
 for(k=0;k<4;k++) F(P(O,k%2?"down":"up"),110,rig(0));
 F(P(E,U),250,rig(0));
 // Five pumps: an air bulge runs up the hose, the balloon boings bigger.
 for(s=0;s<5;s++){
  for(i=0;i<6;i++) F(P(i<3?C:E,U),44-s*3,pump(i<3,0,i).concat(bal(s)),i<3);
  F(P(E,U),70,rig(s+1,1.15));
  F(P(s==3?O:E,U),300-s*45,rig(s+1));
 }
 // Too big: it wobbles and creaks, Clawd lets go and looks from it to the viewer.
 var wp=0,wob=function(p,n,e){
  while(n--){
   var z=wp++%4;
   F(p,110+c.R(0,40),rig(5,[1,1.12,1,.9][z]).concat(e||[],z==1?ck(c.R(0,2)):[]));
  }
 };
 wob(P(E,U),4);
 wob(P(E),4);
 for(k=c.R(1,2);k--;) wob(P(O),2,w=[T(x+4,3,"?",Z,{b:1})]),wob(P(E),2,w);
 // "One more, it'll be fine": a cocky wink, then a slow last push.
 wob(P("wink"),3);
 F(P(C,U),400,rig(5));
 for(i=0;i<6;i++) F(P(C,U),80+i*14,pump(1,0,i).concat(bal(5+i/4,1.05+i%2/10)),1);
 // It trembles, he opens his eyes... beat.
 for(i=0;i<5;i++) F(P(i>3?O:C,U),i>3?340:50,pump(1).concat(bal(6.5,1.15,i>3?0:i%2*2-1),ck(i,9),i>3?[T(x+4,4,"!",Z,{b:1})]:[]),1);
 // BANG: flash, rays, shreds and confetti fly, Clawd is blown back.
 w=c.pick(["BANG!","BANG!","POP!"]);
 var kb=c.R(2,4),X=x-kb,pt=[],n=0,hx=-99,
  sim=function(fd){
   return pt.map(function(p){
    // Bits falling onto Clawd's head stay there until he walks.
    var g=p.y<3.5&&M.abs(M.round(p.x)-hx-4)<4?3:6,y;
    if(p.y<g-.5) p.x+=p.v+R()/2-.25,p.v*=.8,p.u=M.min(p.u+.25,p.m),p.y=M.min(g,p.y+p.u);
    y=M.round(p.y);
    return T(M.round(p.x),y,p.t,fd?fd>1?"subtle":I:p.c,{z:-(y>3)});
   });
  },
  ray=function(r,k){
   var g=" ".repeat(r-1),cl=k?"warning":"chromeYellow";
   return [T(b-r,0,"\\"+g+"|"+g+"/",cl),T(b-r,2,"/"+g+"|"+g+"\\",cl),T(b-r-3,1,"--",cl),T(b+r+2,1,"--",cl)];
  },
  boom=function(){
   var j=n++;
   return pump(1).concat(j?sim():[],j<3?ray(3+2*j,j):[],
    j<9?[T(b-2,1,w,j<2?Z:j<6?"warning":"subtle",j<2?{b:1,bg:"error"}:{b:1})]:[]);
  },
  re=function(p,m,ms,e){while(m--) F(p,ms,boom().concat(e?[T(X,3+(m<3),"'","permission")]:[]))};
 for(i=0;i<30;i++) s=i<10,pt.push({x:b+c.R(-5,5),y:c.R(0,3),v:(R()-.5)*5,u:-R()*1.5,m:s?1:.5,t:c.pick(s?"~~',;":"*✦·•♦*"),c:s?col(6):c.rainbow(i)});
 pp=1;
 for(i=0;i<=kb+1;i++) F(P(C,"up"),i?60:100,boom(),i<2?-1:i>kb,x-M.min(i,kb));
 // Peek with one eye, look at the scrap on the hose, sheepish wink.
 hx=X;
 re(P(C,"up"),4,90);
 re(P("wink","up"),3,130);
 re(P(E),4,150);
 re(P(O),2,170);
 re(P("wink",U),6,150,1);
 hx=-99;
 // Walk back (the confetti slides off him), the rig sinks, the debris fades.
 f=f.concat(c.walk(X,x,{turn:1,ms:90,fx:function(r){r.props=pump(1).concat(sim())}}));
 F(P(O,U),200,pump(1).concat(sim(1)),1);
 for(k=1;k<4;k++) F(P(E),90,pump(1,k).concat(sim(k+1).slice(k*10),dust));
 F("default",300,[]);
 return f;
});
