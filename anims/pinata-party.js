// Blindfolded Clawd swings at a donkey pinata: whiff, whiff, SMASH! Candy rains down and he scoops it up.
$cdA("pinata-party",{title:"Pinata",w:42},function(c){
var R=c.R,P=c.P,T=c.T,M=Math,rd=M.round,pk=c.pick,x=c.clamp(c.x,3,c.mx-13),f=c.walk(c.x,x),N=x+11,
H=R(0,360),ph=R(0,6),A=R(1,2),U=7,on=1,S=0,B=0,Q=[],t=0,k,s,g,C="closed",u="one-up",up="up",L="left",G="right",
Y="chromeYellow",I="subtle",bo={b:1},K=P(C,u),KU=P(C,up),BD=pk(["error","autoAccept","permission"]),WD="#c8894a",BN="▄▄▄▄▄▄",
PA=[" ▌▐","▟██"," ▀██████▘","  ▌▐  ▌▐"],
FC="right-30 right-75 back-125 back left-75 left-30".split(" "),
hu=j=>c.hsv(H+j*35,.7,1),
sp=(x,y,vx,vy,k,ch,cl)=>Q.push({x,y,vx,vy,k,ch,cl}),
F=(p,ms,ex,o,fb)=>{
 o|=0;t++;ph+=.42;s=rd(A*M.sin(ph));
 var e=fb>-1,pr=[],X=N+s,y=4+o,j,q,r,v;
 for(r=0;r<2-U;r++)pr.push(T(N+5+rd(s*(r+3)/(4-U)),r,s>0?"\\":s<0?"/":"│",I));
 on&&PA.map((l,r)=>{for(j=0;j<l.length;j++)l[j]>" "&&pr.push(T(X+j,r-U,l[j],on>1?"text":hu(j)))});
 // stick S = x offset + glyph
 if(S){j=S.slice(-1);v=j=="─";r=x+parseInt(S);
  pr.push(T(r,y-!v,j,WD,bo),T(r+(v||j=="/")-(j=="\\"),y-2*!v,j,WD,bo))}
 B&&pr.push(B>1?T(x+2,y-1,BN,BD):T(x+(e?+"233232"[fb]:2),y,BN.slice(0,e?+"534635"[fb]:6),BD,{bg:"clawd_body"}));
 Q=Q.filter(q=>{
  if(q.k==1){q.vy=M.min(q.vy+.08,.3);q.vx*=.85;q.x+=M.sin(t*.8+q.y)*.3}else if(q.k<3)q.vy+=.25;
  q.x+=q.vx;q.y+=q.vy;
  if(q.k==2){q.x=c.clamp(q.x,N,c.W-2);if(q.y>=6)q.y=6,q.vx=q.vy=0}
  return!(q.g||q.y>6.5||q.y<0)&&pr.push(T(rd(q.x),rd(q.y),q.k==1&&t%3==0?"·":q.ch,q.cl,{b:1,z:q.k<2?-1:0}))});
 f.push({x,pose:e?{facing:FC[fb]}:p,ms,offset:o,props:pr.concat(ex||[])})},
m1=()=>{
 S="1/";F(KU,350);
 x--;S="-1\\";F(KU,45,[T(x-4,2,"≡",I)]);
 S="-3─";F(KU,60,[T(x-1,1,"swish",I)]);
 F(KU,400,[T(x+4,3,"?",Y,bo)]);
 x++;S="8│";F(K,250)},
m2=()=>{
 S="7\\";F(K,450);
 U=1;F(K,60);
 S="9/";U=2;F(K,45,[T(x+9,4,"≡",I)]);
 S="9─";U=3;F(K,70,[T(x+12,3,"whiff",I)]);
 F(K,400,[T(x+4,3,"?",Y,bo)]);
 for(k=3;k--;)U=k,F(K,90);
 F(K,300,[T(x+7,3,"#","error",bo)])};
// pinata lowers, a stick drops in
for(k=7;k--;)U=k,F(P(G),k?80:300,k?0:[T(x+4,3,"!",Y,bo)]);
[-1,0,-1,0].map(o=>F("arms-up",90,0,o));
for(k=-1;k<3;k++)F(P(G,k>0?u:"down"),55,c.art(x+8,k-1,"│\n│",WD,bo));
S="8│";F(P("wink",u),350);
// blindfold on, spin, dizzy
for(k=0;k<4;k++)F(P("open",u),60,[T(x+2,k,BN,BD)]);
B=1;F(K,110,0,1);F(K,350);
S="4│";for(k=1;k<22;k++)F(KU,40+k*3,[T(x+(k%2?-1:9),4+k%3,"~",I)],0,k%7-1);
S="8│";[-1,1,1,-1,-1,1].map((d,j)=>{x+=d;F(P(C,u,j%2?L:G),120,[T(x+1+j%3*3,3,"✦",Y),T(x+7-j%3*3,3,"·",Y)])});
R(0,1)?(m1(),m2()):(m2(),m1());
// step in, crouch, leap, SMASH
S="7\\";for(k=0;k<7;k++){A*=.6;x+=k==2||k==4;F(P(C,u,k==2?L:k==4?G:"both"),k>4?170:k?70:350,k>4?[T(x+R(0,8),R(2,3),"·",Y)]:0,k>4)}
A=0;S="8│";F(K,40,0,-1);
S="9/";on=2;F(K,170,[T(x+11,1,"✹",Y,bo),T(x+1,1,"SMASH!","warning",bo)],-1);
on=0;A=1;
PA.map((l,r)=>{for(var j=0;j<l.length;j++)l[j]>" "&&sp(N+j,r,(j-3)/3+R(-3,3)/10,-R(2,9)/10,0,pk("▘▝▖▗▚▞"),hu(j))});
for(k=0;k<18;k++)sp(N+R(1,8),R(0,3),R(-10,10)/10,-R(2,9)/10,1,pk("✦*•'~°"),c.rainbow(k));
for(k=R(5,8);k--;)sp(N+R(1,7),2,R(-2,10)/10,-R(4,9)/10,2,pk("●◆♥♦★"),c.rainbow(R(0,6)));
S="9─";F(K,70);
S=0;sp(x+9,3,-.3,-1.2,0,"/",WD);
for(k=0;k<8;k++)F(P(C,up,k%2?L:G),k<3?60:90,k<4?[T(x+1,1,"SMASH!",k%2?Y:"warning",bo)]:0,-(k%2));
// peek, scoop up the candy
B=2;F(P("open",up),200);
F(P(G),350,[T(x+4,2,"!",Y,bo)]);
F(P("wink"),250);
for(k=0;k<60&&Q.some(q=>q.k==2);k++){
 x<c.mx&&x++;
 g=0;
 Q.map(q=>{if(q.k==2&&q.y>=6&&rd(q.x)<=x+7){q.g=g=1;sp(x+9,3.5,0,-1,3,"+1",q.cl)}});
 U<3&&U++;
 F(P(g?"wink":G,g?u:"down",k%2?L:G),g?130:65,0,g);
}
for(k=0;k<30&&(k<6||Q.length);k++)F(P("wink",up),70,[T(x+4,1,"♥","error",bo)]);
// toss the blindfold
B=0;for(k=0;k<5;k++)F(P("open",k?up:u),60,[T(x+2+k,2-k,BN,BD)]);
F(P("wink"),400);
f.push({x,pose:"default",ms:300});
return f;
});
