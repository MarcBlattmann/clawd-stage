// Clawd straps on a jetpack, loops, barrel-rolls across the stage, skywrites a smoke heart, sputters out and parachutes down.
$cdA("jetpack",{title:"Jetpack",w:64},function(c){
var G=c.G,T=c.T,mx=c.mx,M=Math,R=M.round,N=M.sign,Q=M.cos,Z={z:-1},I="inactive",S="subtle",U="up",C="closed",E="error",H="warning",
K="#96a0b4",ps=[],hs=[],hf=-1,o=0,fl=0,pk=0,mv=0,em=0,i,j,k,t,s,
x=c.clamp(c.x,1,mx-1),f=c.walk(c.x,x),d=x<mx/2?1:-1,e=-d,
FC=["chromeYellow",H,"fastMode",E],
F="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
ey=v=>v>0?"right":"left",
sp=(a,b,v,s,k,n)=>(ps.push(t={x:a,y:b,u:0,v:v,s:s,k:k,n:n,a:0}),t),
tk=(a,y)=>[T(a,y,"█",K,Z),T(a,y+1,"▓",K,Z)],
// frame: heart, particles, tanks, flames
A=(ms,w,ar,ex,ft)=>{
 var p=[],y=G+o,n,j;
 if(hf>=0)hf++;
 hs.forEach(h=>{var q=M.max(0,hf-h.r)>>2;q<3&&p.push(T(h.x,h.y,"▒░·"[q],"#ffaac8",Z))});
 ps=ps.filter(q=>(p.push(T(R(q.x),R(q.y),q.s[q.a*q.s.length/q.n|0],q.k,Z)),q.x+=q.u,q.y+=q.v,++q.a<q.n));
 if(pk)[x-1,x+9].forEach(a=>{
  p=p.concat(tk(a,y));
  for(n=fl&&fl-(M.random()<.3),j=0;j<n;j++)p.push(T(a-mv*j,y+2+j,"▓▒░"[j],FC[j+(M.random()<.4)]));
  em&&fl>1&&sp(a-mv*2,y+2,0,"▒░·",I,em);
 });
 f.push({x:x,offset:o,pose:w&&w.facing?w:c.P(w,ar,ft),ms:ms,props:p.concat(ex||[])});
},
// fly to column b at altitude q
fly=(b,q,ms)=>{for(;x!=b;A(ms||35,ey(mv),0,0,ey(1-(x&2)))){t=c.clamp(b-x,-2,2);x+=t;mv=N(t);o+=N((q==null?-3+(x/7&1):q)-o)}};
// pack drops on
A(200);A(300,0,0,[T(x+4,G-1,"!",H)]);
for(k=-2;k<G;k++)A(45,0,0,tk(x-1,k).concat(tk(x+9,k)));
for(pk=o=1;o>=0;o--)A(140-50*o,C,0,[T(x+2,G-2+o,"clunk!",I)]);
o=0;A(220,"left");A(220,"right");A(420,"wink",U);
// ignition, lift-off
[1,0,1,0,1,0].forEach((v,j)=>{fl=v;v||sp(j&2?x+9:x-1,G+2,-.4,"▒░·",S,4);A(v?60:150,j<3&&C)});
fl=2;o=1;A(260,C);
for(fl=3,k=0;k<4;k++){o=-k;for(j=-1;k<2&&j<2;j+=2)sp(x+4+j*5,6,0,"▓▒░",I,7).u=j;A(60+k*15,!k&&C,U)}
A(260,"wink",U);
// leg 1: loop-the-loop, on to the edge
var xa=d>0?mx-1:1,lc=c.clamp(x+d*M.max(12,(xa-x)*d*.4|0),9,mx-9);
em=7;fly(lc-d*6);fly(lc,0,40);em=0;
for(k=1;k<29;k++){
 t=k/14*M.PI;i=lc+R(d*7*M.sin(t));mv=N(i-x);x=i;o=R(2*Q(t))-2;
 sp(x+4,G+o+1,0,"▒▒▒░░·",I,36);
 A(40,k<8?ey(d):k<16?C:k<24?ey(e):"wink",k>9&&k<19&&U);
}
em=7;fly(xa);
// turn round
em=mv=0;fl=2;
for(k=0;k<13;k++)A(55,{facing:F[d>0?k:12-k]});
A(200,ey(e),U);
// leg 2: barrel roll
for(fl=3,em=7,k=0;k<13;k++){x+=2*e;mv=e;o=R(M.sin(k/2))-3;sp(x+4-e*6,G+o+(k&2?0:2),-.1,"~·",S,8);A(45,{facing:F[e>0?k:12-k]})}
var W=10,hx=c.clamp(x+e*M.max(W+6,(mx-2)*.45|0),W+7,mx-W-7);
fly(hx-e*W);em=0;fly(hx,-3);
// skywrite a heart with his centre
for(fl=2,k=1;k<101;k++){
 t=k/50*M.PI;s=M.sin(t);i=hx+R(e*W*s*s*s);
 j=R(1+(12.5-13*Q(t)+5*Q(2*t)+2*Q(3*t)+Q(4*t))/6.875);
 if(i!=x||j!=o+5){mv=N(i-x);x=i;o=j-5;hs.push({x:x+4,y:j,r:c.R(0,16)});A(45,mv&&ey(mv),0,0,ey(k&4))}
}
fl=3;fly(c.clamp(hx+e*(W+8),1,mx-1),-3,45);
mv=0;fl=2;hf=0;
A(380,ey(-e));
sp(x+4,G+o-1,-.4,"♥♥·",E,6);sp(hx+4,3,0,"✦♥♥♥♥·",E,18);
A(500,"wink",U);
// admire, then out of fuel
[..."20100201020"].forEach((v,j)=>{
 fl=v=+v;if(x+e>0&&x+e<mx)x+=e;mv=v&&e;o=-"33322333233"[j];
 v||sp(j&1?x-1:x+9,G+o+2,-.4,"▓▒░",S,5);
 A(v?80:130,v?ey(e):j&1&&C,0,v?[]:[T(j&1?x-4:x+10,G+o+1,j&1?"pt":"pff",I)]);
});
fl=0;A(350,0,0,[T(x+4,G+o-1,"?",H)]);
o=-2;A(90,C,U);
// parachute
var ch=(w,dx,dy)=>{
 for(var y=G+o-2+dy,p=[],q=-w;q<=w;q++)p.push(T(x+4+q+dx,y,q==-w?"◢":q==w?"◣":"█",(q+w)%4<2?E:"text",dy?Z:{}));
 dy||p.push(T(x+(w>4?0:4),y+1,w>4?"╲       ╱":"│",I));
 return p;
};
[1,2,5].forEach(w=>A(70,C,U,ch(w,0,0)));
[0,1,0,-1,-1,0].forEach((v,j)=>{
 if(x+v>0&&x+v<mx)x+=v;o=j>3?0:j>1?-1:-2;
 A(j>4?140:240,j<2?C:j&1&&"wink",U,ch(5,0,0),ey(j&1));
});
// land, drop the pack
for(k=1;k<4;k++)A(110,0,U,ch(5-k,-e*2*k,k));
pk=0;
A(140,C,0,tk(x-1,G+1).concat(tk(x+9,G+1),[T(x+2,G-1,"clank",I),T(x-6*e-1,6,"▄▄▄▄▄",E,Z)]));
[x-1,x+9,x-6*e,x+2,x+6].forEach((a,j)=>sp(a,j<2?G+1:6,-.3,"▒░·",I,6));
for(k=0;k<6;k++)A(k<3?90:120,k<3?ey(-e):"wink",k>2&&U);
f.push({x:x,pose:"default",ms:300});
return f;
});
