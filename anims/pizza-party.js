// Pizza courier: tip, steam, slices eaten bite by bite, a BURP lifts his cap, belly pats.
$cdA("pizza-party", { title: "Pizza delivery", w: 46 }, function (c) {
 var R=c.R,T=c.T,P=c.P,G=c.G,W=c.W,M=Math.round,x=c.clamp(c.x,0,c.mx-21),f=c.walk(c.x,x),X=x,fx=x+21,
  F=W+10,fo=0,cap=0,bx=W,bY=5,L=0,S=0,hc,hf,bel=0,ps=[],t=0,i,j,k,r,g,fp,
  E="right",H="left",C="closed",O="open",V="wink",U="one-up",Y="chromeYellow",I="inactive",K="error",cb="#c8965a",fc=c.pick(["permission","success","autoAccept"]);
 function Q(e,a,ft){fp=P(e,a,ft)}
 // particle: x,y,dx,dy/100ms,life,chars,color
 function sp(a,b,dx,dy,l,s,o){ps.push([t,a,b,dx,dy,l,s,o])}
 function cr(u){sp(u,G+1,R(-1,1)/4,.6,3,"·.",Y)}
 function hr(){sp(X+4,G-1,0,-.3,5,"♥",K)}
 function say(a,w){sp(a,G-2,0,-.25,5,[w],"text")}
 function A(e,ms,o,g){
  o|=0;
  for(var m=Math.ceil(ms/120),d=M(ms/m),q=0,p,n,a;q++<m;t+=d){
   L>2&&R(0,2)>=S&&sp(bx+1+R(0,5),2,R(-1,1)/8,-.3,7,"~≈~°°··",I);
   p=(g||[]).slice();
   ps.forEach(function(s){var e=(t-s[0])/100;e<s[5]&&p.push(T(s[1]+M(e*s[3]),s[2]+M(e*s[4]),s[6][e|0]||s[6][0],s[7]))});
   p.push(T(bx,bY," PIZZA  ",K,{bg:cb,o:1,b:1}));
   if(L<2)p.push(T(bx,bY-1,"▄▀"[L].repeat(8),cb,L?{bg:"#ffc850"}:{}));
   else{p.push(T(bx,bY-L,"▄".repeat(8),cb),T(bx,bY-1,"▗      ▖",cb));L>2&&p.push(T(bx,bY-2,"█".repeat(8),"#9a6a3a"));
    for(n=S;n<6-S;n++)p.push(T(bx+1+n,bY-1,"◢◣"[n%2],n%2?Y:"#ffa83c"))}
   (a="◣▖·"[hc])&&p.push(T(X+9,G+o,a,Y));
   (a="◢▖·"[hf])&&p.push(T(F-1,G+fo,a,Y));
   bel&&p.push(T(X+3,G+2+o,bel>1?"▀▀▀":" ▀","clawd_body"));
   n=fp.eyes==E;p.push(T(F+1+n,G-1+fo-cap,n?"▟██▙▄▄":"▄▄▟██▙",K));
   f.push({pose:e.eyes?e:P(e),ms:d,offset:o,x:X,props:p,actors:[{x:F,offset:fo,pose:fp,color:fc}]});
  }
 }
 function hop(e){[1,-1,-2,-1,0].forEach(function(o){A(P(o>0?C:e,"up"),o>0?110:75,o)})}

 // Tummy rumbles.
 Q(H);A(O,300);
 for(i=0;i<7;i++)X=x+i%2,A(C,70,0,[T(X-1,G+1,"(         )",I),T(X+1,G-2,"rumble",I)]);
 X=x;A(O,300);A(E,200);
 // Courier dashes in, skids.
 while(F>fx){k=F-fx;F-=k>20?3:k>8?2:1;bx=F-10;Q(H,0,F%2?H:E);
  A(E,k>8?30:40+(9-k)*9,0,[T(F+9,G+1+(k<9),k>8?"≡ -":"░",I)])}
 Q(H);say(F+1,"pizza!");hop(O);
 // Box down, coin tip.
 fo=1;bY=6;A(E,160);fo=0;A(E,200);
 for(k=0;k<12;k++)Q(H,k>8?"up":0),A(P(E,U),45,0,[T(x+9+k,G-1-"012233332210"[k],"●",Y)]);
 say(F+1,"thx!");sp(F-1,G-1,0,0,3,"✦",Y);Q(V);A(O,400);
 // Lid: glow, then steam.
 Q(H);L=1;X++;A(E,450,0,[T(bx+3,G,"✦",Y)]);L=2;A(E,70);L=3;X--;
 for(i=0;i<9;i++)sp(bx+R(0,7),R(1,3),R(-2,2)/10,-.3,R(4,7),"≈≈~~°··",I);
 Q(H,"up");say(F,"ta-da!");hop(O);A(V,300);
 // Three rounds: dip, grab, bite bite bite.
 for(r=0;r<3;r++){
  Q(H,"up");fo=1;A(P(E,U),150,1);
  S++;hc=hf=0;fo=0;A(P(O,U),R(150,300),0,[T(X+10,G+1,"~",Y),T(F-2,G+1,"~",Y)]);
  for(k=R(0,1)*2,j=0;j<9;j++){g=j%3==1;i=j%3==k;
   g&&(hc++,cr(X+9),j<2&&say(X+2,c.pick(["nom","munch","yum"])));
   i&&(hf++,cr(F-1),j<3&&say(F+2,c.pick(["chomp","nom"])));
   Q(i?C:H,"up",j%2?H:E);
   A(P(g?C:j%2?V:O,U,j%2?E:H),R(85,125))}
  bel=r;hr();A(V,R(200,400))}
 // BURP! The blast lifts his cap.
 A(E,350);A(O,250);A(C,160,1);A(C,300);
 for(i=0;i<12;i++){cap=+"000001233210"[i];j=i>4&&i<9;Q(j?C:H,j?"up":0);
  A(P(C,"up"),i<6?70:90,i<3?-1:0,[T(X+1,G-3+(i>2),"BURP!",i%2?K:"warning",{b:1})].concat(i<6?c.art(x+9+2*i,1,")\n)",I):[]))}
 Q(H);A(V,300,0,[T(F+4,G-2,"!",K,{b:1})]);
 if(R(0,1))Q(C),say(F+2,"burp"),A(O,300),Q(V,"up"),hop(V);
 A(O,250);
 // Lid shut, box up, off he goes.
 Q(H);L=2;A(E,90);L=0;A(E,90);
 fo=1;A(E,150);bY=5;fo=0;Q(E);A(E,200);
 for(k=0;bx<=W;k++){F+=k<5?1:k<9?2:3;bx=F-10;Q(E,0,k%2?H:E);
  k||say(F+2,"bye!");A(P(O,k%6<3?U:0),k<5?70:35)}
 // Belly pats, a sigh, the bump settles.
 for(i=0;i<6;i++)A(P(i%2?C:V,i%2?U:0),170,0,i%2?[]:[T(X+10,G+1,"pat",I)]),i==3&&hr();
 A(C,450,0,[T(X+2,G-2,"ahh~",I)]);bel=1;A(O,250);bel=0;A(V,450);
 f.push({pose:"default",x:X,ms:200});
 return f;
});
