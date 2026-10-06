// Clawd sneaks spy-style through a full-width vault laser grid (hop, duck, limbo, a blinking beam), trips the alarm on the last beam, flees and strolls back.
$cdA("laser-maze",{title:"Laser maze",w:66},c=>{
var M=Math,W=c.W,mx=c.mx,f=[],t=0,pw=0,al=0,i,k,u,x,q,
d=c.x<mx/2?1:-1,L="left",Rt="right",CL="closed",Y="chromeYellow",I="inactive",RD="#ff3434",BL="#4a8cff",SW="#8cc8ff",GY="#5c5c68",B={b:1},Z={z:-1},
// T draws in course coordinates: u=0 is the entrance edge, the course runs toward the far edge.
T=(u,y,s,cl,e)=>c.T(d>0?u:W-u-s.length,y,s,cl,e),
E=e=>d<0&&{left:Rt,right:L}[e]||e,
ph=j=>(t+j*5)%16,on=j=>al||ph(j)<10,
S=10,En=mx-1,n=c.clamp((En-S)/20+1|0,2,6),G=[],r=c.R(0,3),s=c.pick([1,3]),
// One frame: ceiling rail, every powered gate, the alarm, plus extra props.
F=(x,e,a,ft,ms,o,pr,h,p,cl,y,v,m)=>{p=pw?[T(0,0,"▀".repeat(M.min(pw,W)),GY,Z)]:[];
 G.forEach((g,j)=>{if(g[0]+14<pw){v=g[0];cl=al?t%2?RD:"text":(t+j)%4?RD:"#ff9c9c";
  if(g[1]>2){p.push(T(v,0,"▼",cl));if(on(j))for(y=1;y<7;y++)p.push(T(v,y,"│",cl))}
  // Duck/limbo: two diagonal beams from ceiling emitters converge on a horizontal beam.
  else if(g[1])for(y=0;y<4+g[1];y++)m=3+g[1]-y,p.push(T(v-m,y,y?m?"\\"+" ".repeat(7+2*m)+"/":"◆───────◆":"▼"+" ".repeat(7+2*m)+"▼",cl));
  else p.push(T(v,5,"◆─────◆",cl),T(v,6,"◆─────◆",cl))}});
 if(al)for(p.push(c.tile("●           ",0,t%2?RD:BL),c.tile("●           ",0,t%2?BL:RD,6)),y=0;y*26+9<W;y++)
  p.push(c.T(y*26+3+t%2*13,1,"WEE-OO",t%4<2?RD:BL,B));
 p={x:d>0?x:mx-x,pose:c.P(E(e),a,E(ft)),ms:ms,offset:o||0,props:p.concat(pr||[]),hide:!!h};f.push(p);t++;return p};
for(i=0;i<n;i++)k=(r+i*s)%4,G.push([S+M.round((En-S)*i/(n-1)),i<n-1?i>n-3&&k>2?1:k:3]);
// Tiptoe to the entrance edge.
q=d>0?0:mx;f=c.walk(c.x,q,{ms:c.clamp(M.round(1500/(M.abs(c.x-q)+1)),20,50)});x=0;
// Power on: a spark races along the ceiling and the beams buzz to life.
for(q=M.ceil(W/16);pw<W+14;)pw=M.min(W+14,pw+q),F(x,pw>W/4?Rt:0,0,0,55,0,[T(pw-1,0,"✦",Y)].concat(pw>W/3?T(x+4,2,"!",Y,B):[]));
F(x,0,0,0,450,0,[T(x+2,3,"gulp",I)]);
[L,Rt,L,"wink"].forEach((e,i)=>F(x,e,i>2&&"one-up",0,i>2?450:230,+(i<3)));
G.forEach((g,j)=>{u=g[0];k=g[1];
 // Sneak up, glancing back now and then.
 for(;x<u-10-(k>2);)F(x+=x<u-20?2:1,x%13<2?L:Rt,0,t%2?L:Rt,t%2?30:45);
 if(!k){// Hop the low double beam.
  F(++x,Rt,0,0,90);F(x,CL,0,0,150,1);
  [-2,-3,-4,-4,-4,-3,-2,-1].forEach(o=>F(x+=2,Rt,"up",0,45,o,[T(x-3,6+o,"≡",I,Z)]));
  F(x,CL,0,0,110,1);F(x,"wink",0,0,220)}
 else if(k<3){// Crawl under (duck) or flatten under (limbo).
  F(x,0,0,0,150,1);k>1&&F(++x,CL,0,0,180,2);
  for(;x<u+8+k;)F(++x,k>1?x%7?CL:Rt:x%6?0:Rt,0,x%2?L:Rt,k>1?55:45,k,k>1&&x%4==0?[T(x+c.R(1,7),4,"'",SW)]:[]);
  for(q=k;q--;)F(x,q?CL:"wink",0,0,150,q)}
 else{// Blinking beam: tap a foot, count down, dash through while it is off.
  for(i=0;i<3||ph(j)!=10;i++)q=ph(j),F(x,i%4?Rt:CL,0,i%2?L:0,80,0,q>6&&q<10?[T(x+4,2,""+(10-q),Y,B)]:[]);
  for(i=0;x<=u;i++)F(x=M.min(u+1,x+2),Rt,"up",i%2?L:Rt,45,0,[T(x-3,4+i%3,"≡≡",I)]);
  j<n-1&&[L,L,CL].forEach((e,i)=>F(x,e,0,0,i>1?300:120,0,i>1?[T(x+2,2,"phew",I)]:[]))}
});
// Made it! A victory wiggle, then a proud step back, right into the last beam.
for(i=0;i<6;i++)F(x,i%3?0:"wink",i%2?"up":"one-up",i%2?L:Rt,140,0,[T(x+3+i%2,2,"♪♫"[i%2],Y)]);
F(x,0,"one-up",0,260);
al=1;x--;["text",Y,"text"].forEach((C,i)=>F(x,CL,"up",0,i?90:200,0,[T(u-1,4+i%2,"✦",Y),T(u+1,5-i%2,"*",Y),T(u-1,6,"·",Y),T(u-2-i%2,2,"BZZT!",Y,B)]).color=C);
F(++x,0,"up",0,110,-2,[T(x+3,1,"!!",RD,B)]);F(++x,Rt,"up",0,80,-1,[T(x+3,2,"!!",RD,B)]);
// Run for it! The siren keeps wailing after he is gone.
for(;x<W;)x=M.min(W,x+2),F(x,Rt,x%4?"up":"one-up",x%4?L:Rt,35,0,[T(x-3,5,"≡≡",I,Z),T(x-4,4,"≡",I,Z)]);
for(i=0;i<10;i++)F(x,0,0,0,110,0,0,1);
al=0;for(q=M.ceil(W/12);pw;)pw=M.max(0,pw-q),F(x,0,0,0,50,0,0,1);
F(x,0,0,0,500,0,0,1);
// He strolls back in, whistling, as if nothing happened.
for(q=mx-c.R(12,20);x>q;)F(--x,x%8<5?L:CL,0,x%2?L:Rt,60,0,x%6<3?[T(x+5+x%3,1+x%2,"♪♫"[x%2],"text")]:[]);
F(x,CL,0,0,300,0,[T(x+4,2,"♪",Y)]);F(x,Rt,0,0,350);F(x,"wink",0,0,400);F(x,0,0,0,300);
return f});
