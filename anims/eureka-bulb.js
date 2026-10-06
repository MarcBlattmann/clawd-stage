// Clawd ponders; a bulb sputters on (head-bonk), he hops, runs off, rushes back for the idea.
$cdA("eureka-bulb", { title: "Eureka", w: 40 }, function (c) {
 var f=[],P=c.P,T=c.T,R=c.R,M=Math,x=c.clamp(c.x,12,c.mx-11),d=x+9<c.W-x?-1:1,i,k,n,o,q,s,pr,qs=[],
  Y="#ffe45c",A="#c9a227",Z="text",U="one-up",V="up",E="right",L="left",O="open",S="closed",D="subtle",
  lk=d<0?L:E,bk=d<0?E:L,ms=c.clamp(M.round(2200/(d<0?x+9:c.W-x)),22,45),
  F=function(p,ms,pr,e){var r={x:x,pose:p,ms:ms,props:pr||[]};for(q in e)r[q]=e[q];f.push(r)},
  gp=function(u,v){if(!v)return"#ffc27a"},gl={paint:gp},
  // l: 0 dark, 1 dim, 2 lit
  bulb=function(l,y,z){
   z=z?{z:-1}:0;y|=0;var g=l>1?Y:l?A:D;
   return [T(x+2,y,l>1?"▄███▄":"▄▀▀▀▄",g,z),T(x+2,y+1,l>1?"▀███▀":"▀▄▄▄▀",g,z),T(x+3,y+2,"▀█▀","inactive",z)];
  },
  b0=bulb(0),
  // rays: dx+2 (base 36), dy, glyph
  lit=function(r,y){
   var a=bulb(2,y|=0),j,s="30\\90/21─a1─32/92\\01─11─b1─c1─23/a3\\",cl=r&1?"#fff3b0":"#ffc93c";
   a.push(T(x+3,y,"▄","#fffbe8",{bg:Y}));
   for(j=0;j<(r>1?36:18);j+=3)a.push(T(x+parseInt(s[j],36)-2,y+ +s[j+1],s[j+2],cl,{z:-1}));
   for(j=r>2?3:0;j--;)a.push(T(x+c.pick([-3,-1,9,11]),y+c.pick([0,2,3]),c.pick("·✦*"),c.pick([Y,Z])));
   return a;
  },
  cl=function(t,n){
   var a=[T(x+8,3,"·",Z),T(x+10,2,"o",Z)].slice(0,n);
   return n>2?a.concat(c.art(x+11,0,[" .-~~~-.","(       )"," '-~~~-'"],Z),[T(x+14,1,t,Z,{b:1})]):a;
  },
  mot=function(o,d){var l=d>0?o-3:o+11;return [T(l,4+(o&1),"≡",D),T(l-d,6,"·",D)]};
 f=c.walk(c.x,x);
 // think: "..." while tapping a foot, then ?s
 F(P(O),300);F(P(S),110);F(P(L),380);F(P(E),380);
 for(i=1;i<4;i++)F(P(E,U),220,cl(" ",i));
 for(n=R(2,3)*4,k=0;k<n;k++)F(P(k%4>2?S:E,U,k%2?L:"both"),200,cl("...".slice(0,k%4)||" ",3));
 F(P(E,U),450,cl(" ?",3));
 F(P(S,U),90,c.art(x+12,0,["·  *  ·","*  ·  *"," ·   ·"],D));
 for(i=0;i<26;i++){
  if(i<16&&i%3==0)qs.push({x:x+R(-2,10),y:3,c:c.rainbow(i)});
  pr=[];qs.forEach(function(p){p.y-=.3;if(p.y>-.5)pr.push(T(p.x+(M.round(p.y*2)&1),M.round(p.y),"?",p.c,{b:1}))});
  F(P(i%8<4?L:E,i%6<3?U:"down"),90,pr);
 }
 F(P(S),600);
 // bulb sputters out; head-bonk
 F(P(O),350,b0);
 for(n=R(6,9),i=0;i<n;i++){s=(i+R(0,1))%2;F(P(s&&R(0,2)?O:S),R(40,140),s?bulb(1+(i>n/2)).concat(T(x+c.pick([1,7]),R(0,2),"'",Y)):b0,s?gl:0)}
 F(P(L),300,b0);F(P(E),250,b0);F(P(S),150,b0,{offset:1});
 F(P(S),110,b0.concat(T(x+2,2,"*   *",Z)),{offset:-1});
 // eureka + joy hops
 for(i=0;i<8;i++)F(P(i<2?S:O),i<2?60:140,lit(i<2?i+1:i%2+2),gl);
 for(n=R(2,3)*4,k=0;k<n;k++){o=[1,-1,-1,0][k%4];F(o>0?P(S):P(k%4>2?"wink":O,V,k&1?L:E),o>0?110:70+k%4*10,lit(2+(k&1)),{offset:o,paint:gp})}
 // skips off; the idea stays and fades
 F(P(lk),260,lit(2),gl);
 F(P(lk,V),140,lit(2),{x:o=x-d,offset:1});
 while(o>-9&&o<c.W){o=c.clamp(o+2*d,-9,c.W);F(P(lk,V,o&2?L:E),ms,lit(2).concat(mot(o,d)),{x:o,offset:-(o>>1&1)})}
 for(i=0;i<12;i++)F(P(O),i<4?140:R(50,150),i<4?lit(1):bulb(i%2&&i<9),{hide:true});
 // peek, rush back, grab
 o=d<0?-5:c.W-4;
 F(P(O),250,b0,{x:o});
 F(P(bk),350,bulb(1).concat(T(d<0?1:c.W-3,3,"!",Y,{b:1})),{x:o});
 while(o!=x){o-=d*M.min(2,M.abs(x-o));F(P(bk,"down",o&1?L:E),ms+4,bulb(o&4?1:0).concat(mot(o,-d)),{x:o})}
 F(P(bk),120,bulb(1).concat(T(x+(d<0?-2:10),6,"··",D)));
 F(P(O),250,b0);
 F(P(S),130,bulb(1),{offset:1});
 for(i=3;i>1;i--)F("arms-up",i>2?90:160,lit(i),{offset:-1,paint:gp});
 F(P("wink",V),450,lit(2,1),gl);
 // it sinks into his head: glow + sparks
 for(i=2;i<4;i++)F(P(S,V),110,bulb(2,i,1),gl);
 for(i=1;i<7;i++){
  pr=[];[-2,0,2,-9,9].forEach(function(v){pr.push(v*v>9?T(x+4+(v>0?5+i:-5-i),5,"·",Y):T(x+4+v*(i+1),4-i,"✦*·"[i/3|0],i>4?D:Y))});
  F(P(i<3?S:O),90,pr,{color:c.rgb(255,225-i*16,85)});
 }
 F(P("wink"),450);F("default",300);
 return f;
});
