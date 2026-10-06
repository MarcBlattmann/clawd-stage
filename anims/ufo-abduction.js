// A saucer beams Clawd up spinning into its dome, drops him back and zips off; he's left seeing stars.
$cdA("ufo-abduction",{title:"Close encounter",w:40},c=>{
 var G=c.G,T=c.T,P=c.P,W=c.W,R=c.R,M=Math,B={b:1},Z={z:-1},N={hide:1},C="closed",O="open",L="left",E="right",U="up",H="inactive",
  LC=c.pick([["error","chromeYellow","success"],["permission","autoAccept","warning"]]),
  FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
  x=c.clamp(c.x,2,c.mx-2),bx=x,tg=x-2,f=c.walk(c.x,x),d=2*x+R(-10,30)<W?1:-1,u,bm=0,bd=1,tk=0,tm=0,fl=0,gl=0,ins,ps=[],ph=0,i,j,k,v,w,
  sp=(a,b,h,v,t,k,n)=>ps.push({x:a,y:b,u:h,v:v,t:t,k:k,n:n}),
  gn=()=>sp(u+6+R(-4,4),6,0,-1,c.pick("·°*"),"text",5),
  Q=(s,o,k)=>[T(x+4,G-1+o,s,k||"text",B)],
  sh=n=>[T(x+4-n,6,"░".repeat(2*n+1),"subtle",Z)];
 // stage: saucer, lights (chase on a clock, or all flash with fl), beam (bd: pulls up 1 / lowers -1), particles
 function S(p,o,ms,ad,fr){
  var q=[],r,h,j,lp=tm/110|0;
  tk++;tm+=ms;
  if(u!=null){
   q.push(T(u+3,0,"▗▄███▄▖","#78d7ff"),T(u,1,"◢"+"█".repeat(11)+"◣",H));
   ins&&q.push(T(u+4,0,ins+"███"+ins,"clawd_body"));
   for(j=0;j<5;j++)q.push(T(u+2+2*j,1,"●",(fl?tk:j+lp)%2?"subtle":LC[(j+(lp>>2))%3],{bg:H}));
   for(r=2;r<2+bm&&r<7;r++)h=M.min(r+1,6),q.push(T(u+6-h,r,((r+bd*tk+900)%3?"░":"▒").repeat(2*h+1),"#8cffb4",Z));
  }
  ps=ps.filter(s=>s.n-->0);
  ps.map(s=>{q.push(T(s.x,s.y+.5|0,s.t,s.k,Z));s.x+=s.u;s.y+=s.v});
  f.push(Object.assign({x:x,pose:p,offset:o||0,ms:ms,props:q.concat(ad||[])},gl&&{color:c.rgb(215-75*gl|0,119+136*gl|0,87+93*gl|0)},fr));
 }
 // dazed: stars circle his head, he sways, the green fades
 function D(ms,ad){
  ph+=ms/90;gl=M.max(0,gl-ms/4e3);x=bx+[0,1,0,-1][ph>>2&3];
  for(var q=[],a,s,j=0;j<3;j++)a=ph*.7+j*2.1,s=M.sin(a)>0,q.push(T(x+4.5+3*M.cos(a)|0,G-1,s?"✦":"·",s?"chromeYellow":"warning",B));
  S(P(ph>>1&1?L:E,"down",ph>>2&1?"both":ph&1?L:E),0,ms,q.concat(ad||[]));
 }

 // glides in, overshoots, settles; his eyes follow it
 u=d>0?-13:W;
 for(v=tg+2*d;u-v;)k=(v-u)*d,u+=d*(k>14?2:1),i=u+2-x,sp(d>0?u-1:u+13,1,0,0,"~",H,2),S(P(M.abs(i)>28?O:i<-1?L:i>1?E:O),0,k>14?35:50+(14-k)*5);
 u-=d;S(P(O),0,140);u-=d;S(P(O),0,300);
 // startled hop, glances, a hopeful wave
 S(P(O,U),-1,70,Q("!",-1,"warning"));
 S(P(O,U),0,380,Q("!",0,"warning"));
 S(P(L),0,200);S(P(E),0,200);S(P(O),0,260,Q("?",0));
 if(M.random()<.7)for(i=0;i<5;i++)S(P(i%2?"wink":O,i%2?"down":"one-up"),0,140);
 // a test flash, then the beam: squint, tiptoe, float up
 bm=5;S(P(C),0,70);bm=0;S(P(O),0,220);
 for(bm=1;bm<6;bm++)S(P(bm>2?C:O),0,60);
 for(i=0;i<9;i++)gl=M.min(.6,gl+.07),gn(),S(P(C,i>3?U:"down",i%2?L:E),i>4?-1:0,i>4?170:110);
 // spins ever faster up into the hatch, feet kick a moment, gone
 v=R(2,3)*13;
 for(i=0;i<v;i++)i%2&&gn(),S({facing:FC[i%13]},-1-(3*i/v|0),M.max(32,80-i*2));
 for(i=0;i<4;i++)S(P(C,"down",i%2?L:E),-4,70);
 bm=0;
 S(P(O),0,90,[T(u+4,2,"✦ ✧ ✦","text",B)],N);
 // inside: his face in the dome; it rattles and beeps
 for(i=R(3,5);i--;)
  for(w=c.pick(["bzzt!","beep","boop","?!","♪♫","blip","zap!"]),ins=c.pick("▛▟▂"),j=0;j<3;j++)
   u=tg+[-1,1,0][j],S(P(O),0,j<2?50:R(160,320),[T(u+6-(w.length>>1),3,w,LC[i%3],B)],N);
 // beam back down: feet first, spinning, beam cuts, he hangs over his shadow... drop
 ins=0;bd=-1;
 for(bm=1;bm<6;bm++)S(P(O),0,40,0,N);
 S(P(C,"down",L),-4,90);
 for(i=0;i<13;i++)S({facing:FC[12-i]},i<7?-3:-2,60);
 S(P(C,U),-2,220);
 bm=0;bd=1;
 S(P(O,U),-2,R(350,550),sh(1));S(P(L,U),-2,110,sh(1));S(P(E,U),-2,110,sh(1));
 S(P(C,U),-1,60,sh(2));S(P(C,U),0,40);
 for(k=-1;k<2;k+=2)sp(x+4+5*k,6,k,0,"·",H,3),sp(x+4+4*k,5,k,-.5,"°",H,3);
 S(P(C),1,120);
 // it flashes, backs up, zips off with a streak
 fl=1;for(i=0;i<4;i++)D(110);fl=0;
 u-=d;D(160);
 for(v=1;u>-14&&u<W;v++)k=M.min(v,3),u+=d*k,w=M.min(v,7),j="─".repeat(w),k="═".repeat(w),D(25,[T(d>0?u-2*w:u+13,1,d>0?j+k:k+j,H)]);
 u=null;
 for(i=R(14,20);i--;)D(90);
 // shakes it off, peers after it
 x=bx;gl=0;
 for(i=0;i<6;i++)S(P(i%2?L:E),0,45);
 S(P(C),0,120);S(P(O),0,250);S(P(d>0?E:L),0,500,Q("?",0));S(P("wink"),0,260);
 f.push({x:x,pose:"default",ms:300});
 return f;
});
