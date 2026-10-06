// Clawd lights a fuse past three rockets to a battery: peony, ring and heart bursts, a willow finale.
$cdA("fireworks-show", { title: "Fireworks", w: 50 }, function (c) {
  var P=c.P,T=c.T,R=c.R,M=Math,rd=M.round,Q=[],E=0,i,t,p,e,a,o,l,ms,I="inactive",Y="chromeYellow",W="warning",N="error",Z={z:-1};
  var x=c.clamp(c.x,0,c.mx-39),B=x+35,S=x+10,F=2*(B-S)+7,f=c.walk(c.x,x);
  // Bursts: sparks, look by age, fall shift, streaks
  var K=[[12,"●●••··.",1],[12,"**✦✦✧··.",1,1],[20,"♥♥♥♥♥··.",1],[10,"**✧✧¦¦¦¦¦·",0]];
  var mix=v=>v.sort(()=>M.random()-.5),hs=mix([0,120,200,280,30,170,300,60]),ks=mix([0,1,2]),dx=mix([-14,-11,-8,-5,-2,1,4,-9]);
  var Rt="right",go=(L,x0,d,y,k,h,g)=>{y=k-2?y:1;E=M.max(E,L+6-y+K[k][1].length);Q.push({L,x:x0,d,y,n:5-y,k,h:k>1?k*62+216:h,g})};
  var col=(r,v)=>c.hsv(r.h,.65,v||1),glow=k=>(u,v)=>v||!k?void 0:k;
  // Rockets fire as the spark passes; the battery fans out the finale.
  for(i=0;i<8;i++){
    if(i<3)go(6+16*i,S+3+8*i,R(-2,2),R(1,2),ks[i],hs[i],1);
    go(F+2*i+R(0,1),B+R(1,3),dx[i]+R(-1,1),R(1,2),R(0,2),hs[i]);
  }
  go(F+19,B+2,-15,1,3);go(F+20,B+2,-4,0,3);go(F+21,B+2,6,1,3);
  // Fuse lo..hi, ground kit, sky at tick t; sets Clawd's reaction.
  var sc=(t,lo,hi)=>{
  p=hi>lo?[T(lo,6,"~".repeat(hi-lo),I)]:[];e=Rt;a="down";o=l=0;ms=80;
  if(hi>=B)p.push(T(B,6,"▐▓▓▓▌",N));
  Q.forEach(r=>{
  var g=t-r.L,b=g-r.n,q=K[r.k],C=col(r),d=hi-r.x,X=u=>r.x+rd(r.d*u/r.n);
  if(r.g&&g<1&&d>=0)p.push(T(r.x,6,d>1?"│":"▲",d>1?I:C),T(r.x,d>1?5:9,"▲",C));
  if(!g)p.push(T(r.x-1,5,"*",Y),T(r.x+1,4,"·",W)),e=r.g?"closed":e;
  if(g>0&&g<4)p.push(T(r.x-1,r.g?6:5,["▒▒▒","░▒░","░ ░"][g-1],I,Z));
  if(g>0&&b<0)p.push(T(X(g),5-g,"▲",C,{b:1}),T(X(g-1),6-g,"¦",W),T(X(g-1)+R(-1,1),7-g,c.pick("·'*"),Y));
  if(b<0||b>q[1].length)return;
  var cx=r.x+r.d,h=r.k==2,rr=M.min(3.7*(1-M.pow(.6,b)),h?2.4:9),y=r.y+h+(M.max(0,b-4)>>q[2]),bc=col(r,M.max(.3,1-M.max(0,b-3)*.12));
  if(b)for(var j=0;j<q[0];j++){
   var n=6.283*j/q[0]+r.k%2,sn=M.sin(n),cs=M.cos(n),u=(h?sn*sn*sn:cs)*rr,w=(h?(M.cos(2*n)*5+M.cos(3*n)*2+M.cos(4*n)-13*cs)/14.5:sn)*rr,px=cx+rd(u*2.2),py=y+rd(w);
   p.push(T(px,py,q[1][b-1],bc,Z));
   if(q[3]&&b<5)p.push(T(cx+rd(u*1.1),y+rd(w/2),"·",bc,Z));
   if(!q[2]&&b>4)p.push(T(px,py-1,"'",bc,Z));
  }else p=p.concat(c.art(cx-1,r.y-1,["\\│/","─✸─","/│\\"],"text",{b:1})),o=-1,e="open",ms=120;
  if(b<7)a="up";
  if(b<2)l=C;
  })};
  // The fuse rolls out and rockets pop up along it.
  for(i=1;i<26;i+=2)sc(-99,S,S+i),f.push({pose:P(i%8>5?"open":Rt),props:p,ms:55});
  // Strike a match: a fizzle, then a flame in the raised hand.
  var k0=p,m=(ch,cl,e,ms,sp)=>f.push({pose:P(e,"one-up"),props:k0.concat(T(x+8,3,ch,cl),sp?T(x+7,2,"· ·",Y):[]),ms});
  m("•",N,Rt,400);m("*",Y,"closed",50,1);m("•",N,"open",300);m("✶",Y,"closed",60,1);
  for(i=0;i<4;i++)m("♦",i%2?W:N,i?Rt:"wink",120);
  // Crouch and light the fuse.
  for(i=0;i<4;i++)f.push({pose:P(Rt),offset:1,ms:100,props:k0.concat(T(x+9,6,"♦",i%2?W:N),i>1?[T(S,6,"✦",Y),T(S,5,"·",W)]:[])});
  // Clawd flinches at launches, cheers at bursts, lit by flashes.
  for(t=0;t<=E;t++){
    var s=M.min(B,S+(t>>1)),fin=t>=F;
    sc(t,s+1,B);
    if(!fin)p.push(T(s,6,"✦*✧+"[t%4],Y,{b:1}),T(s+R(-1,1),5,"·",W));
    if(t<3)p.push(T(x+9,4-t,"°",I));
    if(fin)a="up",e=t%6?e:"wink";else if(t>F-3)e="closed";
    f.push({pose:P(e,a,fin&&!o?(t&2?"left":Rt):"both"),offset:o,props:p,ms:ms+R(0,15)-fin*10,paint:glow(l)});
  }
  // The battery smokes out; Clawd hops and winks.
  for(i=0;i<6;i++)f.push({pose:P(i<4?"wink":"open",i<4?"up":"down"),offset:i%2&&i<4?-1:0,ms:150,props:i<3?[T(B,6,"▒░·"[i].repeat(5),I),T(B+1+i,5-i,"░","subtle")]:[]});
  f.push({pose:"default",ms:300});
  return f;
});
