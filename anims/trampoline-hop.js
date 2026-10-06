// Trampolines drop in edge to edge; Clawd boings across them, each bounce bigger, flips off the last and sticks the landing.
$cdA("trampoline-hop",{title:"Trampolines",w:64},function(c){
var f=[],M=Math,W=c.W,mx=c.mx,T=c.T,P=c.P,R=c.R,Z={z:-1},d=c.x*2<mx?1:-1,E=d>0?"right":"left",B=d>0?"left":"right",
X=u=>d>0?u:mx-u,Q=(p,w)=>d>0?p:W-p-w,
n=c.clamp(M.round((mx-12)/23),2,6),uL=mx-1,sw=0,cs=[11],tr=[],bo=[],H=[],k=0,tw=0,bn=0,i,j,u,y,
MA=[[""," ═════════ "],[""," ╮       ╭ "," ╰───────╯ "],[" ╭───────╮ "," ╯       ╰ "]],WB=[2,1,2,0,1,0],
BL=[" ▗▟███▙▖ ","▐███████▌"," ▝▜███▛▘ "],UP=[" ▗▗   ▗▗ ","▗▟██████▄"," ▐▙███▙█ "],
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
// one frame: u = Clawd's column counted from the start edge, L = rows above the ground
F=(u,L,p,ms,ex,h)=>{var pr=[],m,a,s;H.push([X(u),L]);
 tr.map(q=>{y=q.y;m=k-q.w;s=q.s||(m>=0&&m<6?WB[m]:0);if(y>3)return;a=Q(q.p,11);
  pr.push(T(a,6+y,"╱         ╲","inactive",Z),T(a,5+y,"●         ●","warning",Z));
  MA[s].map((r,l)=>r&&pr.push(T(a,4+l+y,r,q.c,Z)));
  m>=0&&m<3&&!y&&pr.push(T(a-2,6,"░             ░","subtle"))});
 bo.map(b=>{m=k-b.k;if(m<0||m>12)return;var t=b.t,l=t.length,st=c.clamp((d>0?b.p:W-1-b.p)-(l>>1),0,W-l);
  for(var e=0;e<l;e++)pr.push(T(st+e,3-(m<7&&(e+m)%2),t[e],m>8?"subtle":b.c,{b:1,z:-1}))});
 tw&&[4,8].map(z=>{var g=H[H.length-1-z];g&&pr.push(T(g[0]+4,5-g[1],z>4?"·":"•","subtle",Z))});
 f.push({x:X(u),offset:-L,pose:p,ms:ms,props:pr.concat(ex||[]),hide:h});k++},
// arc from a to b; fl 1 = spin, 2 = somersault
A=(a,b,L0,L1,pk,fl)=>{var N=M.max(12,M.round(M.abs(b-a)/1.8)),z,t,p,ex,h;tw=1;
 for(var j=1;j<=N;j++){t=j/N;z=M.round(L0+(L1-L0)*t+4*(pk-(L0+L1)/2)*t*(1-t));u=M.round(a+(b-a)*t);ex=[];h=0;
  p=t<.42?P("open","up"):t<.6?P("wink","up"):P(E,"one-up",j%2?"left":"right");
  fl==1&&(p={facing:FC[M.min(12,t*13|0)]});
  fl>1&&t>.2&&t<.74&&(h=1,ex=c.art(X(u),4-z,t<.34||t>.6?BL:UP,"clawd_body").concat(T(X(u)+(j%2?-2:10),5-z+j%3,"✦","chromeYellow")));
  F(u,z,p,34+M.round(40*M.pow(1-M.abs(2*t-1),3)),ex,h)}
 tw=0},
// squash into trampoline i, then the mat springs back with a boing
S=(i,ms,o)=>{var q=tr[i],b=bn++;q.s=1;F(cs[i],1,P("closed"),ms);q.s=0;q.w=k;
 bo.push({p:cs[i]+4-(o||0),k:k,c:c.hsv(20+b*45,.75,1),t:(t=>b>2?t.toUpperCase():t)("b"+"o".repeat(1+b*.7)+"ing"+"!".repeat(b*.5))})};
for(i=0;i<n;i++)sw+=3+i;
for(i=0;i<n;i++)cs.push(i<n-1?cs[i]+M.round((uL-11)*(3+i)/sw):uL),tr.push({p:cs[i]-1,y:-7,w:-99,s:0,c:c.hsv(R(0,359)+i*67,.55,1)});
// sprint to the near edge, turn around
for(u=d>0?c.x:mx-c.x;u>0;)u-=M.min(u,2),F(u,0,P(B,0,k%2?"left":"right"),u>30?22:32);
F(0,0,P(B),160);F(0,0,P(E),220);F(0,0,P("wink","one-up"),320);
// trampolines rain down one after another across the stage
for(j=0;j<3*n+10;j++)tr.map((q,l)=>{q.y=M.min(0,j-3*l-7);!q.y&&q.w<0&&(q.w=k)}),F(0,0,P(j%7?E:"closed"),45);
F(0,0,P("wink","up"),380);F(0,-1,P("closed"),180);
// hop on, two warm-up boings (the second with a spin), then across the whole row
A(0,cs[0],0,2,3.2,0);
S(0,160,11);A(cs[0],cs[0],2,2,2.6,0);
S(0,110,11);A(cs[0],cs[0],2,2,3.4,1);
for(i=0;i<n;i++)S(i,i<n-1?80:140),A(cs[i],cs[i+1],2,i<n-1?2:0,i<n-1?3.4+i/M.max(n-2,1):5.3,i<n-1?0:2);
// stick the landing
var x=X(uL),ds=[T(x-2,6,"░▒","subtle"),T(x+9,6,"▒░","subtle")];
F(uL,-1,P("closed"),140,ds);F(uL,0,P("open","up"),420,ds.map(q=>Object.assign({},q,{t:"·"})));
tr.map((q,l)=>q.w=k+2*l+3);
var sp=[],ms="✦ STUCK IT! ✦",st=c.clamp(x+4-6,0,W-13);
for(j=0;j<20;j++){j%3||sp.push(T(x+4+R(-12,12),c.pick([0,2,3]),c.pick("✦*·✧"),c.rainbow(R(0,9))));
 F(uL,j%6==3?1:0,P(j%4<2?"wink":"open",j%2?"up":"one-up"),110,[T(st,1,ms,j%2?"chromeYellow":"warning",{b:1})].concat(sp.slice(-4)))}
// trampolines sink away, nearest first
for(j=0;j<2*n+4;j++)tr.map((q,l)=>q.y=c.clamp(j-2*(n-1-l),0,4)),F(uL,0,P(B),60);
F(uL,0,P(),200);F(uL,1,P("closed"),320);F(uL,0,P("wink"),300);f.push({x:x,pose:"default",ms:200});
return f});
