// A herd stampedes across the stage; Clawd leaps onto a rock, gets bucked onto their backs and surfs to the far edge.
$cdA("stampede",{title:"Stampede",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,W=c.W,mx=c.mx,f=[],d=c.x<=mx/2?1:-1,Q="▗▖▘▝▙▟▛▜",Z={z:-1},
L="left",Rt="right",C="closed",U="up",O="one-up",G="inactive",TX="text",RC="#a09a90",DC="#b8a27e",
// u: travel coords, the herd runs toward +u.
X=(u,n)=>d>0?u:W-u-n,
A=(u,y,s,cl)=>c.T(X(rd(u),s.length),y,d>0?s:[...s].reverse().map((h,j)=>(j=Q.indexOf(h))<0?h:Q[j^1]).join(""),cl,Z),
T=(u,y,s,cl,e)=>c.T(X(rd(u),s.length),y,s,cl,e),B=(u,y,s,cl)=>T(u,y,s,cl||"error",{b:1}),
E=e=>d<0&&{left:Rt,right:L}[e]||e,
D=[],P=[],H=[],h=-2,hv=0,t=0,tc=0,cw=0,i,k,o,u,y,
L0=c.clamp(W/2,44,90),A0=c.clamp(d>0?c.x:mx-c.x,18,rd(W*.3)),R=A0+10,
RK=[["▗▟█████▙▖","██▓███▓██"],["  ▗▄▖▄▖","▗█▓▀██▀▙▖"],[0,"▗▄ ▖▄▗ ▄▖"],[0,"·  ·  ·"]],
pt=(u,y,vu,vy,g,l,s,c)=>P.push({u,y,vu,vy,g,l,s,c});
for(y=0;y<7;y++)D[y]=Array(W).fill(0);
for(k=0;k<2;k++)for(o=k*4;o<L0;o+=c.R(7,11))H.push({o,l:k,p:c.R(0,1),c:c.hsv(20+rn()*18,.5+rn()*.2,(k?.42:.6)+rn()*.18)});
var dep=(u,y,v)=>{var x=X(rd(u),1);x>=0&&x<W&&(D[y][x]=M.min(1.3,D[y][x]+v))},
rock=s=>(RK[s]||[]).flatMap((r,j)=>r?A(R,5+j,r,RC):[]),
herd=l=>{var o=[];H.forEach(a=>{var u=h-6-a.o,y=5-a.l;if(a.l==l&&u>-7&&u<W){
 o.push(A(u,y,"▗▄██▙▖",a.c),A(u,y+1,(t+a.p)%2?" ▘▝ ▘▝":"▝▘  ▝▘",a.c));
 dep(u-rn()*3,y+1,.4+rn()*.6);dep(u+rn()*6-2,2+rn()*4|0,rn()*.6);
 !l&&rn()<.06&&pt(u,5,-1,-.9,.3,8,"•",DC)}});return o},
S=()=>{var o=[],x,s,v,q;h+=hv;t++;
 for(y=0;y<7;y++)for(s=D[y],q=x=0;x<W;x++)v=s[x],s[x]=q*.22+v*.44+(s[x+1]||0)*.22,q=v,y&&v>.25&&rn()<.12&&(D[y-1][x]+=v*.3);
 for(k=0;k<cw*2;k++)dep(rn()*cw,1+rn()*6|0,rn()*.9);
 var bk=herd(1),fr=herd(0);
 for(y=1;y<7;y++)o.push(c.T(0,y,String.fromCharCode(...D[y].map(v=>v>.75?9618:v>.4?9617:v>.18?183:32)),DC,Z));
 o=o.concat(bk,rock(tc?1+(t-tc)/7|0:0),fr);
 P=P.filter(p=>(p.u+=p.vu,p.y+=p.vy,p.vy+=p.g,--p.l>0&&p.y<6.6));
 P.forEach(p=>o.push(T(p.u,rd(p.y),p.s,p.c,Z)));return o},
F=(u,e,a,ft,ms,of,pr,nw)=>f.push({x:d>0?u:mx-u,pose:c.P(E(e),a,E(ft)),ms:ms||45,offset:of|0,props:(nw?[]:S()).concat(pr||[])});
// Rock pops up, walk over. Rumble; a dust cloud gathers at the edge.
for(i=3;i--;)f.push({ms:70,props:rock(0).map(p=>(p.y+=i,p))});
f=f.concat(c.walk(c.x,d>0?A0:mx-A0,{fx:r=>{r.props=rock(0)}}));
for(i=0;i<16;i++){i>9&&(cw=i-8);o=i>3?[T(c.R(0,3),c.R(0,1),"rumble",G)]:[];
 rn()<.6&&pt(A0-6+rn()*24,6,0,-.6,.4,3,"·",G);
 i>10&&o.push(B(A0+4,2,"?",TX));F(A0+(i>4&&i%2),i<5?Rt:L,0,0,90,0,o)}
// Herd bursts out: flinch, panic.
hv=1;[-1,0].forEach(j=>F(A0,L,U,0,160+j*100,j,[B(A0+3,2+j,"!!")]));
for(i=0;i<12;i++){i%3||pt(A0+2+rn()*5,3,rn()-.5,-.7,.3,5,"'","#82beff");
 F(A0+i%2,i%4==3?C:i%2?L:Rt,i%2?U:O,i%2?L:Rt,70,0,[B(A0+1-i%2,1+i%2,"AAAH!",TX)])}
// Spot the rock, leap on; the herd floods past below.
cw=0;for(i=0;i<3;i++)F(A0,Rt,0,0,110,0,i?[B(A0+9,2,"!","warning")]:[]);
F(A0,C,0,0,80,1);F(A0,C,U,0,60,1);hv=2;
[-2,-3,-4,-4,-3,-2].forEach((of,j)=>F(A0+rd(10*(j+1)/6),Rt,U,0,50,of));
for(i=0;h<R+17;i++)F(R+(i%4==1),i%6<2?C:i%2?L:Rt,U,0,45,-2,i%8<4?[B(R+3,1,"!!")]:[]);
// CRACK: bucked onto the backs, surf (scared, wobbly, thrilled) to the far edge.
tc=t;for(i=0;i<6;i++)pt(R+rn()*9,4,rn()*2-1,-1-rn(),.3,9,"•",RC);
var cs=(mx-R)*2/(mx-h+6+M.max(...H.map(a=>a.o))),p,e,a,ft,pr;u=R;
for(i=0;rd(u)<mx;i++){u=M.min(mx,u+cs);p=(u-R)/(mx-R);ft=0;pr=i<5?[B(R-8,2,"CRACK!","warning")]:[];
 if(p<.35)e=i%4<2?C:L,a=U,i>3&&pr.push(B(u+3,0,"!!"));
 else if(p<.65)e=i%6<3?Rt:L,a=i%4<2?U:O,ft=i%4<2?L:Rt;
 else e=i%8<5?"wink":Rt,a=U,pr.push(B(u+1+(i>>2)%2,0,"wheee!",TX));
 F(rd(u),e,a,ft,45,i<4?[-3,-4,-4,-3][i]:rn()<.25?-3:-2,pr)}
// Hop off the tail, land in dust.
[-3,-4,-4,-3,-2,-1,0,1,0].forEach((of,j)=>{if(j==7)for(k=0;k<40;k++)dep(mx-7+rn()*20,2+rn()*5|0,rn());
 F(mx-M.min(j,4),j<5?Rt:C,j<7?U:0,0,j==7?120:55,of)});
// Dust settles: cough, shake the dust off his body, look back, phew.
for(u=mx-4,i=0;i<20;i++){i>13&&pt(u+4+(k=rn()*3-1.5)*3,4+rn()*2,k,-.6,.2,4,"·",DC);
 f[F(u+(i>13&&i%2),i%4<2||i>13?C:L,i%2?O:0,0,90,0,i<12&&i%6<4?[T(u-2,2,"*cough*",G)]:[])-1].paint=(q=>(x,y)=>(x*5+y*3)%7<q?DC:void 0)(i<14?3:(19-i)/2)}
F(u,L,0,0,500,0,[],1);F(u,C,O,0,250,0,[T(u+1,2,"phew",G)],1);
F(u,"wink",0,0,400,0,[],1);F(u,0,0,0,200,0,[],1);
return f});
