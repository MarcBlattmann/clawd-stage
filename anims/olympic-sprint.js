// Stadium 100m: three crouch in the blocks, BANG, full-width sprint, photo-finish flash, Clawd wins gold by a nose.
$cdA("olympic-sprint",{ scene: 1,title:"100m sprint",w:70},c=>{
var M=Math,R=M.random,rd=M.round,CC=c.clamp,W=c.W,T=c.T,f=[],Q=[],S=[],LS=[],Z={z:-1},Bd={b:1},
RT="right",LF="left",CL="closed",OU="one-up",WK="wink",IN="inactive",WA="warning",TX="text",
FL=W-10,D=FL-9,X=c.x,O=0,al=0,ex=0,fl=0,ttl="100 M",msg="",bx=(W>>1)-7,
i,k,n,u,v,a,N,ms,xs,y,s,rn=c.rng(c.R(1,1e6)),RL=k=>k&1?LF:RT,
A={p:-13,s:4,o:-4,c:"permission"},B={p:-11,s:2,o:-2,c:"success"},
P=(...a)=>Q.push(a),
BX=(y,s,cl)=>T(bx,y,s.padStart(15+s.length>>1).padEnd(15),cl,{bg:"#282c50",o:1,b:1,z:-1}),
FN=(y,cl,e)=>T(FL+6-y,y,"▚▞"[y&1],cl,e),
sc=()=>{var q=[],m={},L=rd(W*al),y,i,s,r,
 pp=(x,y,s,cl)=>{var j=cl+"|"+y,o=m[j]||"";y>=0&&y<7&&x>=o.length&&x<L&&(m[j]=o.padEnd(x)+s.slice(0,L-x))};
 if(al>0){
  S.map(([x,n,h,t])=>{if(al>t)for(y=0;y<2;y++){for(s="",i=0;i<n;i++)s+=(r=R())<ex*.2?"°":r<ex*.3?"^":"•";pp(x,y,s,h)}});
  for(i=R()*60/ex|0;ex&&i<W;i+=9+(R()*120/ex|0))pp(i,c.R(0,1),"✦",TX);
  Q=Q.filter(p=>(p[0]+=p[2],p[1]+=p[3],p[3]+=p[7]||0,--p[6]>0&&p[1]<7)).sort((a,b)=>a[0]-b[0]);
  Q.map(p=>pp(rd(p[0]),rd(p[1]),p[4],p[5]));
  for(y=2;y<7;y++)q.push(T(0,y,LS[y].slice(0,L),fl?TX:IN,Z)),L>FL+6-y&&q.push(FN(y,TX,Z));
  for(s in m)r=s.split("|"),q.push(T(0,+r[1],m[s],fl?TX:r[0],Z));
  L>FL+6&&q.push(T(FL+6,0,fl?"✸":"▣",fl?WA:IN,Z),T(FL+6,1,"│",IN,Z));
  al>.5&&q.push(BX(0,ttl,TX),BX(1,msg,WA))}
 return q},
fr=(ms,e,a,ft,xs)=>f.push({x:X,offset:O,ms,pose:c.P(e,a,ft),color:fl?TX:void 0,props:sc().concat(xs||[]),
 actors:[A,B].map(o=>({x:CC(rd(o.p+o.s),-9,W),offset:o.o,color:fl?TX:o.c,pose:c.P(o.e,o.a,o.f)}))});
for(i=0;i<W;i+=n+1){n=M.min(4+rn()*6|0,W-i);(i+n<bx||i>bx+15)&&S.push([i,n,c.rainbow(rn()*7|0),rn()*.7])}
for(y=2;y<7;y++){for(s="",i=0;i<W;i++)s+=i==16-y?"/":y&1?" ":y<3||i<10||i>64?"─":i%9?" ":"·";LS[y]=s}
// stadium fills, all jog to the blocks
for(n=M.max(26,M.abs(X-1)/2+10|0),k=0;k<n;k++){al=M.min(1,k/16);u=CC(1-X,-2,2);X+=u;
 [A,B].map(o=>{o.e=RT;o.f=o.p<1&&(o.p++,RL(k))});
 ex=k>n-10&&k<n-3?.8:0;msg=k>n-10?"FINAL":"";
 fr(40,u<0?LF:u?RT:ex?WK:RT,ex&&OU,u&&RL(k))}
// marks: crouch; set: sweat
msg="ON YOUR MARKS";fr(400,RT);O=1;A.o=-3;B.o=-1;
for(k=0;k<5;k++)A.e=B.e=k&&k<4?CL:RT,fr(k?160:120,k>1&&k<4?CL:RT);
msg="SET";A.e=RT;
for(k=0,n=c.R(7,15);k<n;k++)B.e=k-4?RT:CL,fr(110,RT,0,0,k>2&&[T(X,4+(k>n-4),"'",A.c)]);
// BANG! Clawd flinches, then reels them in
O=0;A.o=-4;B.o=-2;a=2+D/25;N=D/1.1+1|0;ms=CC(3600/N|0,20,65);
var bb=u=>1+D*(u+u*u)/2,sn=u=>M.sin(3.14*u);
for(i=0;i<5;i++)P(16+i,1,R()*.4,-.12,"░▒"[i&1],IN,14);
for(k=1;k<=N;k++){u=k/N;v=M.max(0,(k-5)/(N-5));
 A.p=bb(u)+a*sn(u)-2*u*u*u;B.p=bb(u)+a*.6*sn(u)-u*u*u;X=rd(bb(v)-a*.3*sn(v));
 A.f=RL(k);B.f=RL(k+1);A.a=k&2&&OU;B.a=k&2?0:OU;
 msg=(9.58*u).toFixed(2);ex=.3+.7*u;
 xs=k<8?[T(15,0,"BANG!",WA,{b:1,o:1,z:-1})]:[];
 k>2&&k<6&&xs.push(T(X+9,5,"!",WA,Bd));
 [[A.p+A.s,1],[B.p+B.s,3],[X,5]].map(([x,y],j)=>{x=rd(x);x>3&&xs.push(T(x-3,y,"=-","subtle",Z));(k+j)%3||P(x,y+1,-.4,-.1,"·",IN,4)});
 fr(ms,k<3||u>.93?CL:RT,k<3?"up":v&&k&2&&OU,v&&RL(k),xs)}
// photo finish, line over the noses
fl=1;ttl="PHOTO FINISH";msg="";for(i=0;i<8;i++)P(FL+6,0,(R()-.5)*3,R()*.5,"✦",TX,3);
fr(90,CL);fl=0;A.e=B.e=CL;A.a=B.a=A.f=B.f=0;
for(i=0;i<6;i++)P(FL+1,4+R()*2,R()*1.2,-R()*.5,"~","error",9,.1);
for(xs=[T(FL+2,5,"◂0.01",WA,Bd)],y=1;y<7;y++)xs.push(FN(y,WA,Bd));
fr(900,CL,0,0,xs);
// Clawd jogs on, all eye the board
for(k=0;X<c.mx;k++)X++,fr(50+k*12,k>4?WK:RT,OU,RL(k));
msg="...";A.e=B.e=LF;for(k=0;k<5;k++)fr(150,LF);
// winner: medal, confetti
ttl="★ WINNER ★";msg="1 CLAWD  9.58";ex=1;B.a=OU;
for(k=0;k<34;k++){for(i=0;i<W/80;i++)P(c.R(0,W-1),0,(R()-.5)*.4,.2+R()*.2,"•*✦°"[k+i&3],c.rainbow(k&3),30);
 A.e=k<12?CL:WK;A.a=k>12&&k&2&&"up";B.e=k&8?WK:RT;O=[0,-1,-1,0][k&3];
 fr(70,k&4&&WK,"up",0,k>3&&[T(X+4,5+O,"●","chromeYellow",Bd)])}
// friends leave, stadium fades
O=0;ttl="100 M";msg="";ex=.1;A.e=B.e=RT;A.a=0;
for(k=0;k<30;k++){al=M.max(0,1-k/22);[A,B].map((o,j)=>{k>j*3&&(o.p+=1.3,o.f=RL(k))});fr(45,RT,k<16&&k&4&&OU)}
f.push({x:X,pose:"default",ms:300});
return f});
