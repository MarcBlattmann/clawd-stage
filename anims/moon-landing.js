// Moonscape fades in; Clawd lands by lunar module, moon-hops, plants a flag, and gets left behind.
$cdA("moon-landing",{ scene: 1,title:"Moon landing",w:70},function(c){
var W=c.W,T=c.T,R=c.R,Q=c.P,K=c.pick,M=Math,rd=M.round,sn=M.sin,PI=M.PI,Z={z:-1},rn=c.rng(R(1,1e6)),
f=[],t=0,lv=0,i,j,k,p,s,D=[],H=[],S=[],Gd=[],L=["left","right"],
d=c.x+4<W/2?1:-1,lx=d>0?M.min(c.x,W-42):M.max(c.x,28),
ly=-9,ay,fc,op,lz,ft=-9,px,x=c.x,o=0,hd,ey=L[d+1>>1],eb=L[1-d>>1],
ex=lx,ss=R(7e3,1e4),
hs=(h,s,v)=>c.hsv(h,s,v*lv),Y=["#ffe066","#ffb347","#ff8a3c"];
// Earth clear of module/flag; ridge, stars, craters (banner box left clear).
for(k=99;k--&&(M.abs(ex-lx-2)<9||M.abs(ex-lx-28*d-9)<7);)ex=R(1,W-7);
for(k=[],i=0;i<W/8+2;i++)k.push(rn()<.3?7+rn()*7:1+rn()*4);
for(i=0;i<W;i++)j=i>>3,p=(1-M.cos(i%8/8*PI))/2,s=k[j]+(k[j+1]-k[j])*p,H.push(i>ex-2&&i<ex+7?M.min(s,8):s);
for(i=0;i<W/5;i++)p=R(0,W-1),j=R(0,2),(p<ex-1||p>ex+6)&&(j<2||H[p]<8)&&S.push([p,j,R(0,13),K("··.*+"),rn()]);
for(i=R(0,2);i<W;i+=k+R(1,6))k=R(4,8),i+9>lx&&i<lx+10?k=2:i>1&&i<66?0:rn()<.45?Gd.push([i,5,"▄"+"▀".repeat(k-2)+"▄",.75],[i,6,"▀"+"▄".repeat(k-2)+"▀",.5]):Gd.push([i+3,4,"·",.4],[i,6,K(["▀▄▄▀","▗▟▙","▟█▙▖","▗▄▖"]),.6]);
var bg=(a=[],i,j,k,s)=>{
 S.map(s=>s[4]<lv&&(k=(rd(t/170)+s[2])%14,a.push(T(s[0],s[1],k?k>1?s[3]:"+":"✦",hs(220,.2,k<2?1:.55),Z))));
 a.push(...c.art(ex,0,["▗▄██▄▖","██████","▝▀██▀▘"],s=hs(212,.7,.9),Z));
 j="▄█▀   ▐█   ▀█▄  ▟▙  ";j+=j;a.push(T(ex,1,j.substr(20-rd(t/300)%20,6),hs(110,.6,.75),{z:-1,bg:s}));
 for(j=2;j<4;j++){for(s="",i=0;i<W;i++)s+=" ▁▂▃▄▅▆▇█"[c.clamp(rd(H[i]*lv)-(3-j)*8,0,8)];a.push(T(0,j,s,hs(228,.1,j>2?.48:.62),Z))}
 Gd.map(g=>a.push(T(g[0],g[1],g[2],hs(230,.06,g[3]),Z)));
 k=rd((t-ss)*W/1400);k>0&&k<W+8&&a.push(T(k-5,ss&1,"·-─═✦",hs(50,.3,1),Z));
 return a},
// Module: ascent ay..ay+1, descent ly+2..ly+3.
ld=(e={z:lz,o:op},s=hs(220,.06,.85))=>ly<-8?[]:[T(lx,ly+2,"▐▓▓▓▓▓▓▓▌",hs(42,.8,.85),e),T(lx,ly+3,"╱  ▀▀▀  ╲",hs(220,.05,.6),e)].concat(ay>-9?
 [...c.art(lx,ay,["  ▄███▄  "," ▐█   █▌ "],s,e),T(lx+3,ay+1,fc||"▒▒▒",fc?"clawd_body":hs(200,.5,.8),e)]:[]),
fm=(x,y)=>[T(x-1,y,K(["▓█▓","▒█▒","░▓░"]),K(Y)),T(x,y+1,K("▓▒█"),Y[2]),T(x,y+2,K("░·▒"),"#c85a32")],
dz=(x,n,v,j,q)=>{for(j=0;j<n;j++)q=j%2*2-1,D.push([x+q*R(1,3),q*v*(1+rn()),R(5,11),K("░▒·°")])},
fl=()=>ft<-8?[]:c.art(px,ft,[..."│││││"],hs(0,0,.8)).concat(T(px+1,ft," ✶  ",hs(40,.2,1),{o:1,bg:s=hs(15,.65,.85)}),T(px+1,ft+1,"▀▀▀▀",s)),
fr=(e,ms,a)=>{t+=ms;D=D.filter(p=>(p[0]+=p[1],--p[2]>0));
 f.push({x,offset:o,pose:e,ms,hide:hd,props:(lv<.05?[]:bg().concat(ld(),fl())).concat(D.map(p=>T(rd(p[0]),6,p[3],c.hsv(35,.1,.3+.05*p[2]))),a||[])})},
// Hop dx cols, offset y0 to 0, arc h; footprints.
hp=(dx,y0,h,n,x0=x,i,p)=>{for(i=1;i<=n;i++)p=i/n,x=x0+rd(dx*p),o=rd(y0*(1-p)-h*sn(PI*p)),
 fr(Q(p>.4&&p<.6?"closed":ey,p<.5?"up":"one-up",p<.5?"both":"left"),rd(60+70*sn(PI*p)));
 o=1;dz(x+4,2,.25);(x<4||x>62)&&Gd.push([x+2,6,"·   ·",.35]);fr(Q("closed"),110);o=0};
// Leap out of frame.
for(i=0;i<6;i++)lv=i/24,fr(Q(i%3?L[i>>2]:"open"),170);
o=1;fr(Q("closed"),220);dz(x+4,2,.4);
for(o=0;o>-8;o--)fr("arms-up",40,[T(x+2,o+7,"╵   ╵","inactive")]);
// Fade in, descend.
for(hd=1,o=0,i=7;i<25;i++)lv=M.min(1,i/16),fr(Q(),80);
for(x=lx,i=0;i<=22;i++)ly=ay=rd(-4+7*sn(i/22*PI/2)),ly>0&&dz(lx+4,2,.6),fr(Q(),ly>1?110:75,fm(lx+4,ly+4));
dz(lx+4,6,.9);for(i=0;i<5;i++)fr(Q(),120);
// Peek, climb out, hop.
["▛█▛","▟▟█","█▟▟","▂█▂","▛█▛"].map((e,i)=>(fc=e,fr(Q(),[400,380,380,110,260][i])));
fc=0;op=1;hd=0;
for(o=-2;o>-5;o--)fr(Q(o>-4?"open":"wink",o>-4?"down":"up"),o>-4?260:420);
op=0;lz=-1;hp(10*d,-4,1,10);
for(k=0;k<3;k++)o=1,fr(Q(ey),120),dz(x+4,2,.3),hp(6*d,0,R(3,4),12);
// Flag.
for(px=x+9,k=0;k<3;k++)ft=k,k>1&&dz(px,3,.3),fr(Q(["wink","open","closed"][k],"one-up"),[360,110,200][k],[T(px+5,k,"✦",Y[0])]);
for(i=0;i<6;i++)o=-[0,1,2,2,1,0][i],fr("arms-up",130,i&1?[T(px+R(0,4),R(0,1),"✦",Y[0])]:0);
fr(Q(L[+(ex>x+1)]),700,[T(x+4,3,"♥","error")]);
// Liftoff without him.
for(i=0;i<3;i++)dz(lx+4,2,.5),fr(Q(eb),90,fm(lx+4,ly+2));
for(k=0,i=ly;i>-4;i--,k++)ay=i,dz(lx+4,1,.4),fr(Q(eb,k&1?"up":"one-up"),150-k*15,fm(lx+4,i+2).concat(k<5?[T(x+4,3,"!","warning",{b:1})]:[]));
ay=-9;fr(Q(eb),450,[T(x+4,3,"?",Y[0])]);
for(i=0;i<5;i++)fr(Q(i>2?"wink":eb,i&1?"down":"one-up"),180);
// Fade out.
for(i=12;i>=0;i--)lv=i/12,fr(Q(i%6?"open":"closed"),85);
fr(Q(),300);
return f;
});
