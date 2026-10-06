// A twinkle falls as a skateboard, a cone rises; Clawd kickflips over it, rolls back fakie, stomps the board into the sky.
$cdA("skateboard-trick", { title: "Skateboard", w: 60 }, function (c) {
  var f=[],G=c.G,R=c.R,P=c.P,T=c.T,cn=[],st=[0,1,2,1],x,i,k,n,o,s,t,pr,fl=R(1,2)*4;
  // built facing right from col 0, placed at Z; m mirrors it when that side needs less walking
  var ex=c.clamp(c.W-60,0,12),rl=c.mx-50-ex,ll=50+ex,m=c.x>rl?ll-c.x<c.x-rl:c.x>=ll&&R(0,1);
  var Z=m?c.clamp(c.x,ll,c.mx):c.clamp(c.x,0,rl),bx=10,cx=32+ex,E=cx+18,B=cx+13;
  var K="rgb(255,120,20)",Y="chromeYellow",A="warning",D="subtle",dk=c.hsv(c.pick([190,320,100,265]),.6,.95);
  var rt=P("right"),lf=P("left"),wv=P("right","one-up"),dust=[T(cx-1,6,"·   ·",D)];
  // s: 0 flat, 1 edge-on, 2 flipped, 3 nose up
  function brd(x,y,s) {return s%2?[T(x,y,s>1?"▄▄▄▄▀▀▀▀▀":"═".repeat(9),dk)]:[T(x,y,(s?"▄":"▀").repeat(9),dk),T(x+2,y,s?"▀   ▀":"▄   ▄","text",{bg:dk})];}
  function cone(y) {return [T(cx+1,y,"▲",K),T(cx,y+1,"▐█▌","text"),T(cx,y+2,"▟█▙",K)];}
  function sh(x,w) {return T(x-w,6,"▁".repeat(2*w+1),D);}
  // speed lines (l, never through the cone), n sparks in cols a..b
  function fx(x,o,l,n,a,b) {
    var r=(l?[T(x-R(5,8),G+o,"── ─",D),T(x-R(4,7),G+o+1,"─ ──","inactive")]:[]).filter(function (p) {return p.y<4||p.x>cx+2||p.x<cx-3;});
    while (n-->0) r.push(T(R(a||x-3,b||x-1),6-R(0,1),c.pick("*·✦'"),c.pick([A,Y,K])));
    return r;
  }
  function fr(x,o,p,pr,ms) {f.push({x:x,offset:o,pose:p,props:(pr||[]).concat(cn),ms:ms});}
  function rd(x,o,p,s,pr,ms) {fr(x,o,p,brd(x,o<0?7+o:6,s).concat(pr||[]),ms);}
  function bo(pr) {return brd(bx,6,0).concat(pr||[]);}

  // a twinkle becomes a board tumbling down, its shadow growing; a cone rises
  fr(0,0,P(),[T(14,0,"·",Y)],200);
  fr(0,0,rt,[T(14,0,"✦",Y)],300);
  for (i=0;i<7;i++) fr(0,0,P("right",i>3?"up":"down"),brd(bx,i,st[(i+2)%4]).concat(T(14,i-1,"·",D),i<6?sh(14,i>>1):[]),90-9*i);
  fr(0,1,P("closed"),bo([T(9,5,"'         '",Y),T(9,6,"✦         ✦",A)]),90);
  fr(0,0,P("closed"),brd(bx,5,0),70);
  fr(0,0,P("wink","one-up"),bo(),500);
  for (i=7;i>3;i--) {cn=cone(i); fr(0,0,rt,bo(i>4?dust:[]),80);}
  fr(0,0,rt,bo([T(4,G-1,"!",A,{b:1})]),450);
  fr(0,0,P("wink"),bo(),300);

  // hop on, push off (back foot kicks dust), speed up, crouch
  fr(0,1,rt,bo(),160);
  for (i=0;i<5;i++) fr(2*i+2,-"12332"[i],P("open","up"),bo(),55);
  rd(bx,0,P("closed"),0,[],90);
  rd(bx,-1,P("wink"),0,[],350);
  for (n=cx-12-bx,i=1;i<=n;i++) {
    t=i/n; o=i<n-1?-1:0; x=bx+i; k=t<.4&&i%2;
    rd(x,o,P("right","down",k?"right":"both"),0,fx(x,o,t>.35,t>.5&&R(0,2)).concat(k?T(x-1,6,"·",D):[]),120-85*Math.sqrt(t)|0);
  }

  // ollie + kickflip (1-2 spins), hang time, sparks
  for (k=0;k<11;k++) {
    o=-"23444443210"[k]; x+=k&&k<9?2:1;
    s=k?(k>fl?0:st[k%4]):3;
    pr=fx(x,o,1,k==9&&3).concat(k==9?fx(x,o,0,3,x+9,x+11):[]);
    if (o<-1) pr.push(sh(x+4,5+o));
    if (!k) pr.push(T(x,6,"·'·",D));
    if (s%3) pr.push(T(x-1,7+o,"✧         ✧",dk));
    rd(x,o,P(k>8?"closed":k>fl?"right":"open",k>8?"down":"up",k==1?"left":"both"),s,pr,k>1&&k<7?100:45);
  }

  // coast out, slow down, celebrate
  for (n=E-x,i=1;i<=n;i++) rd(++x,-1,i>n-3?P("wink"):rt,0,fx(x,-1,i<5,i<4&&R(1,2)),40+110*i/n|0);
  for (i=0;i<6;i++) {
    for (pr=[],k=0;k<3;k++) pr.push(T(E+R(-1,9),R(0,1),c.pick("★✦✧*"),c.rainbow(R(0,9))));
    rd(E,-1-i%2,P(i%2?"wink":"open",i%2?"up":"one-up"),0,pr,150);
  }

  // look back, roll back fakie, hop off so the right foot ends on the tail
  rd(E,-1,lf,0,[],450);
  while (x>B) rd(--x,-1,lf,0,[],80+(E-x)*20);
  rd(B,-1,lf,0,[],250);
  for (i=0;i<4;i++) fr(B-"2467"[i],-"2210"[i],P("left",i<3?"up":"down"),brd(B,6,0),55);

  // stomp: board spins up into the sky and twinkles out, cone sinks
  x=B-7;
  fr(x,0,P("right","down","left"),brd(B,6,0),300);
  fr(x,0,rt,brd(B,6,3),90);
  for (i=5;i>-2;i--) fr(x,0,wv,brd(B+5-i,i,st[(i+9)%4]),50);
  fr(x,0,wv,[T(B+10,0,"✦",Y)],200);
  fr(x,0,P(),[T(B+10,0,"·",Y)],150);
  for (i=5;i<8;i++) {cn=cone(i); fr(x,0,lf,dust,90);}
  cn=[];
  fr(x,0,P("wink"),[],400);

  // place at Z, mirroring x, text, eyes and feet if m
  var w={left:"right",right:"left"},M="▐▌▟▙";
  f=c.walk(c.x,Z).concat(f.map(function (q) {
    var p=q.pose;
    q.x=m?Z-q.x:Z+q.x;
    if (m) q.pose=P(w[p.eyes]||p.eyes,p.arms,w[p.feet]||p.feet);
    q.props=q.props.map(function (p) {
      var r={},j; for (j in p) r[j]=p[j];
      r.x=m?Z+9-p.x-p.t.length:Z+p.x;
      if (m) r.t=p.t.split("").reverse().map(function (h) {j=M.indexOf(h); return j<0?h:M[j^1];}).join("");
      return r;
    });
    return q;
  }));
  f.push({pose:"default",ms:300});
  return f;
});
