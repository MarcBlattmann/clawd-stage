// Grand prix: Clawd starts last, passes both friends, takes the checkered flag and sprays champagne.
$cdA("race-track",{title:"Grand prix",w:70,scene:1},c=>{
var M=Math,W=c.W,T=c.T,R=M.random,rd=M.round,sn=M.sin,ab=M.abs,cl=c.clamp,Z={z:-1},f=[],t=0,al=0,lit=0,cf=0,bo=-1,Q=[],bd="",RS="",PS="",S=[],
L="left",RT="right",CL="closed",WK="wink",U="up",OU="one-up",DN="down",OP="open",
LT=W+32,x0=cl(c.x,40,c.mx),X=c.x,O=0,i,j,k,n,u,s,b,g,v,N,d,eA,eB,LA,LB,
NL=W<120?3:2,D=(NL-1)*LT+x0+23,lx=x0-21,
C={x:W+20,r:3,c:"error"},A={r:1,c:"text",d:"permission"},B={r:1,c:"warning",d:"success"},
Bf=u=>(u<.1?u*u/.2:u<.88?u-.05:.89-(1-u)**2/.24)/.89,
G=u=>u*u-.1*sn(M.PI*u)*(1-u),
dC=u=>D*Bf(u)+54*G(u),
wr=x=>((x+16)%LT+LT)%LT-16,
re=l=>l<-17?L:l<0?RT:l<20?CL:L,
sm=o=>Q.push([o.x+13,o.r+2,.4,-.1,"░▒"[t/50&1],"subtle",0,6]),
pp=(q,x,y,s,col,m)=>{if(m&&y>=m[2])s=[...s].map((h,i)=>x+i<m[0]||x+i>m[1]?h:" ").join("");s.trim()&&q.push(T(x,y,s,col))},
// car faces left; m: columns Clawd hides
car=(o,q,m)=>{var x=rd(o.x),r=o.r,w=o.v>.3?"✚✕"[t/50&1]:"●";
 pp(q,x+10,r,"▄▄▄",o.c,m);pp(q,x+11,r+1,"▌",o.c,m);pp(q,x-4,r+2,"▗▄▄▟"+"█".repeat(13),o.c,m);pp(q,x-2,r+3,w.padEnd(12)+w,"inactive",m);
 o.v>1.2&&pp(q,x+14+(t/40&1),r+2,"- -","subtle",m)},
sc=()=>{var q=[],d=rd(3*(1-al)),gr=c.hsv(0,0,.6*al),e=c.hsv(0,0,al),h=t/90&1,K="▀▄▀▄▀",y,s,i;
 al>0&&q.push(...c.art(0,-d,[RS,PS,PS],gr,Z),...c.art(FL,5,["▀▄","▄▀"],e,Z))&&S.map(([a,n,hu],j)=>{var x=[A,B,C].some(o=>o.x>a-12&&o.x<n+4);q.push(T(n+2,-d,"▀▀▄▀".substr((t/150+j)%3|0,2),c.hsv(hu+150,.8,al),Z));
  for(y=1;y<3;y++){for(s="",i=a;i<n;i++)s+=R()<(cf||lit>5?.3:.04)+x*.4?"°":"•";q.push(T(a,y-d,s,c.hsv(hu+y*45,.5,al),Z))}});
 lit&&q.push(T(lx-3,0,"▐○○○○○▌",gr),T(lx,1,"│",gr),T(lx-2,0,lit>5?"●●●●● GO!":"●".repeat(lit),lit>5?"success":"error"));
 cf&&q.push(...c.art(FL+1,0,["│"+K.substr(h,4),"│"+K.substr(1-h,4),"│"],e,Z));
 bd&&q.push(T(W-10,0," "+bd+" ","text",{o:1,b:1}));
 bo<0||q.push(T(X+8+bo,1,"█","#2e8b57"),T(X+8+bo,0,"▌","#e8c547"));
 return q},
fr=(ms,e,a,ft)=>{t+=ms;var q=sc(),z=[],H=X<-9||X>W,m=H?0:O<0?[X-4,X+12,4+O]:[X,X+8,4];
 [A,B].map(o=>{car(o,q,m);z.push({x:rd(o.x),offset:-3,color:o.d,pose:c.P(o.e,o.a)})});car(C,q);
 Q=Q.filter(p=>(p[0]+=p[2],p[1]+=p[3],p[3]+=p[6],--p[7]>0&&p[1]<7&&q.push(T(rd(p[0]),rd(p[1]),p[4],p[5]))));
 f.push({x:cl(X,-9,W),hide:H,pose:c.P(e,a,ft),offset:O,ms,props:q,actors:z})};
for(i=c.rng(c.R(1,1e6)),k=i()*3|0;k<W;k=n+5+(i()*3|0)){n=M.min(W,k+10+(i()*13|0));S.push([k,n,i()*360]);RS=RS.padEnd(k)+"▄".repeat(n-k)+" ▐";PS=PS.padEnd(n+1)+"│"}
var dF=dC(.9),FL=rd(wr(x0-dF))-3;
// grid, lights
n=M.max(30,ab(x0-X)+10);
for(k=0;k<n;k++){al=M.min(1,k/16);X!=x0&&k>2&&(X+=X<x0||-1);
 [A,B].map((o,j)=>{s=cl((k-6-j*7)/16,0,1);v=x0-36+18*j;o.v=ab(o.x-(o.x=v+W*(1-s)**3));o.e=s<1?L:RT;o.a=s==1&&k>n-9?OU:DN});
 fr(45,k<5?OP:k<14?RT:k<n-8?L:WK,DN,X!=x0?k&1?L:RT:0)}
for(k=0;k<17;k++){C.v=ab(C.x-(C.x=x0+W*(1-k/16)**3));O="33333421000122222"[k]-3;fr(k>11?110:45,k<6?RT:k<12?OP:WK,k>5&&k<12?U:DN)}
A.e=B.e=L;A.a=B.a=DN;bd="LAP 1/"+NL;
for(lit=1;lit<6;lit++)for(j=0;j<2;j++){lit>2&&[A,B,C].map(sm);fr(j&&lit>4?c.R(300,900):150,lit<4?L:CL)}
// race: shared pace, Clawd gains G
for(v=k=0;k<100;k++)v=M.max(v,dC(k/100+.01)-dC(k/100));N=M.ceil(v*100/1.9);n=cl(6e3/N|0,20,30);
for(k=1;k<=N;k++){u=k/N;b=D*Bf(u);g=G(u);s=sn(M.PI*u);
 eA=s*(5+3*sn(u*17));eB=-s*(5+3*sn(u*13));LA=54*g-36-eA;LB=54*g-18-eB;d=b+54*g;
 v=wr(x0-d);C.v=ab(C.x-v);X=rd(C.x=v);A.x=wr(x0-36-b-eA);B.x=wr(x0-18-b-eB);A.v=B.v=C.v;
 lit=k<N/12&&6;u<.12&&k&1&&sm(C);
 j=cl(NL-M.ceil((dF-d)/LT)+1,1,NL);bd=u>.9?"FINISH!":j==NL&&k&8?"LAST LAP":"LAP "+j+"/"+NL;
 if(u>.9&&!cf)for(cf=1,i=0;i<W/7;i++)Q.push([R()*W,-R()*4,0,.15+R()*.2,"•*✦♦"[i%4],c.rainbow(i),0,50]);
 A.e=re(LA);B.e=re(LB);s=LA>0&&LA<16||LB>0&&LB<16;
 fr(n,cf?k&4?CL:WK:s?k&4?RT:WK:L,cf?U:s&&(LA>3||LB>3)?OU:DN)}
// champagne
A.v=B.v=C.v=0;fr(250,WK,U);O=-2;fr(150,OP,U);
for(k=0;k<40;k++){bo=k<10&&k&1;k==10&&Q.push([X+8,0,.9,-.7,"•","#e8c547",.12,14],[X+10,0,0,0,"POP!","warning",0,4]);
 for(i=2;k>11&&i--;)Q.push([X+8.5,0,.9+R()*1.6,-.6+R()*.5,"°·*o"[R()*4|0],i?"#fff1a8":"text",.07,24]);
 A.e=B.e=k>13?CL:L;A.a=B.a=k>13&&k&2?U:DN;fr(k<10?60:k<12?110:45,k<10?CL:k&4?WK:OP,OU)}
fr(300,WK,OU);bo=-1;A.e=B.e=WK;A.a=B.a=U;fr(300,OP,U);
// exit
A.e=B.e=L;A.a=B.a=OU;
for(v=0;B.x>-18;){v=M.min(8,v+.5);A.x-=v;B.x-=v;A.v=B.v=v;fr(35,t/200&1?L:OP,OU)}
for(k=0;k<5;k++){O=k-4;C.r=4+k;for(i=2;i--;)Q.push([i?X+12:X-4,6,i?.7:-.7,0,"▒░"[k&1],"subtle",0,6]);fr(70,OP,U)}
bd="";cf=0;C.x=-99;
for(k=0;k<12;k++){al=1-k/11;fr(70,k<5?OP:k<8?RT:WK)}
f.push({x:X,pose:"default",ms:300});
return f});
