// Clawd laps the stage so fast he wraps around the edges, leaving rainbow afterimages and lightning, stops dead, and his wind catches up.
$cdA("speedster",{title:"Speedster",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,W=c.W,mx=c.mx,f=[],A=[],P=[],bu=[],n=0,
d=rn()<.5?1:-1,L="left",Rt="right",C="closed",U="up",O="one-up",Y="chromeYellow",X="text",I="inactive",LF="success",SB="subtle",Z={z:-1},B={b:1},
h0=c.R(0,359),ZZ=[" ╱╲ ".repeat(W/4+2),"╱  ╲".repeat(W/4+2)],BC=[X,Y,"warning","#a06428"],i,j,k,p,q,x,ms,
E=e=>d<0&&{left:Rt,right:L}[e]||e,sx=x=>d>0?x:mx-x,
// T draws in travel coordinates (running toward +x); d=-1 mirrors the stage.
T=(x,y,t,cl,e)=>c.T(d>0?rd(x):W-rd(x)-t.length,y,t,cl,e),
add=(x,y,vx,vy,l,g,cl,gr)=>P.push({x,y,vx,vy,l,g,cl,gr:gr||0}),
// One frame + particles, lightning trail (rows 2-3, aged per screen column) and fading afterimages.
F=(x,e,a,ft,ms,o,pr,ex)=>{n++;var p=pr||[],s=0,b,u,v,m,h;
 P=P.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=q.gr,--q.l>0&&q.y<7));
 P.forEach(q=>p.push(T(q.x,rd(q.y),q.g,q.cl,Z)));
 for(m=0,v=-1;m<=W;m++){u=n-bu[m];b=m<W&&u<18?u<3?0:u<7?1:u<12?2:3:-1;
  if(b!=v){h=v?0:n%2*2;if(v>=0)p.push(c.T(s,2,ZZ[0].slice(s+h,m+h),BC[v],Z),c.T(s,3,ZZ[1].slice(s+h,m+h),BC[v],Z));s=m;v=b}}
 A=A.filter(g=>n-g.t<g.l);
 f.push(Object.assign({x:sx(x),pose:c.P(E(e),a,ft),ms,offset:o||0,props:p,
  actors:A.map(g=>({x:sx(g.x),pose:c.P(E(Rt),g.a,g.f),color:c.hsv(g.h,.75,1-(n-g.t)/g.l*.6)}))},ex))};
x=d>0?c.x:mx-c.x;
var S=c.clamp(x+c.R(-6,6),14,mx-14),NP=c.clamp(rd(560/W),3,5),x0=x;
// Look ahead, look back, crouch into a sprinter's stance while sparks crackle.
[[Rt,300],[L,250],[Rt,200],[C,150]].forEach(a=>F(x,a[0],0,0,a[1]));
for(k=0;k<16;k++){k%2&&add(x+c.R(0,8),c.R(4,6),(rn()-.5)*.8,-.4-rn()*.4,c.R(3,6),c.pick("✦*·"),c.pick([Y,X]),.1);
 F(x+(k>8?k%2:0),k<10?Rt:C,0,k%2?L:0,70,k>3?1:0,k>10?[T(x+4,3,"!",Y,B)]:[])}
// GO: dust puff, then lap after lap, faster each time, wrapping at the edges.
for(k=0;k<10;k++)add(x+2+rn()*4,5+rn(),-rn()*1.2,-rn()*.5,c.R(6,12),c.pick("░▒▓"),I);
for(j=0,p=0;p<NP;p++){ms=M.max(20,40-p*9);q=p<NP-1?W:S;
 if(p){for(k=0;k<12;k++)i=k%2,add(i?W-1-rn()*3:rn()*3,3+rn()*3,(i?-1:1)*rn()*1.5,-rn()*.6,c.R(4,8),"✦",Y,.15);
  x=-9;F(x,Rt,0,0,ms,0,[],{hide:true})}
 while(x<q){x=M.min(q,x+(j<3?1:2));j++;
  for(k=-2;k<1;k++)bu[d>0?x+k:W-1-x-k]=n;
  j%(p<2?6:4)||A.push({x,t:n,l:18,h:h0+j*11,a:j%4<2?O:U,f:j%2?L:Rt});
  rn()<.5&&add(x+rn()*2,6,-.6,-.1,4,"░",I);
  rn()<.3&&add(x-c.R(5,25),3,0,.2,6,"·",Y,.15);
  F(x,p==1&&M.abs(x-W/2)<5?"wink":Rt,j%4<2?O:0,j%2?L:Rt,ms,0,j<12?[T(x0,2,"ZOOM!",Y,B)]:[],p?(m=>({paint:(a,b)=>(a+b+m)%4?"clawd_body":Y}))(n):{})}}
// SKRRT! Dead stop: dust flies on ahead, skid marks, afterimages telescope into him.
for(k=0;k<9;k++)add(x+8,4+rn()*2,1+rn()*2,-rn()*.5,c.R(4,9),c.pick("░▒·"),I,.12);
A.forEach(g=>g.l=99);
for(k=0;k<8;k++){A.forEach(g=>g.x+=rd((x-g.x)*.45));A=A.filter(g=>M.abs(g.x-x)>1);
 F(x,k<4?C:Rt,k<4?U:0,0,k?60:150,0,[T(x-7,6,"══════",k<4?X:I,Z)].concat(k<4?[T(x+10,3,"SKRRT!",X,B)]:[]))}
// Smug wink... then a whisper of air behind him. He looks back.
F(x,Rt,0,0,350,0,[T(x-7,6,"══════",SB,Z)]);
F(x,"wink",O,0,500,0,[c.T(sx(x)+9,3,"✦",Y)]);
for(k=0;k<7;k++)F(x,k<2?Rt:L,0,0,k<2?150:110,0,[T(c.R(0,4),c.R(2,5),"~",SB,Z)]);
// The gust: streaks and leaves sweep in from behind across the stage and buffet him. A leaf sticks.
var ws=[];for(k=0;k<14;k++)ws.push([c.R(0,6),c.R(0,36),c.R(3,12),c.pick("─~≈"),c.pick([I,SB,X]),.8+rn()*.4]);
for(q=-8;q<(W+50)*1.25;q+=4){p=[T(q-8,1,"WHOOSH",X,B)];
 ws.forEach(s=>p.push(T(q*s[5]-s[1]-s[2],s[0],s[3].repeat(s[2]),s[4],Z)));
 q<W+40&&rn()<.6&&add(q-c.R(0,20),c.R(1,6),3+rn()*2,(rn()-.5)*.4,9,c.pick("✿•°·*"),c.pick([LF,"warning",I,"error"]));
 i=q>x+2&&q-48<x+9;q>x+5&&p.push(T(x+(i?6:5),3,"✿",LF));
 F(x+(i?1:0),i?C:q<x?L:Rt,i?(q%8?U:O):0,i?(q%8?L:Rt):0,30,0,p)}
// It's gone. Blink, look after it, shake the leaf off, shrug, wink.
[[C,0,120],[Rt,0,300],[C,0,60,1],[C,0,60],[C,0,60,1],[0,0,200],[0,U,250],["wink",0,400]].forEach((a,k)=>
 F(x+(a[3]||0),a[0],a[1],0,a[2],0,k<6?[T(k<2?x+5:x-1,k<2?3:k+2,"✿",LF)]:[]));
f.push({pose:"default",x:sx(x),ms:200});
return f});
