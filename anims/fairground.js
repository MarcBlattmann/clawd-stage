// Fairground: wheel, tents, lights; Clawd rides the carousel, wins a big teddy, lights out.
$cdA("fairground",{title:"Fairground",w:70,scene:1},function(c){
var f=[],W=c.W,M=Math,S=M.sin,Co=M.cos,N=M.round,P=c.P,H=c.hsv,Q=c.T,R=c.rng(c.R(1,1e6)),PI=M.PI,rp=(s,n)=>s.repeat(n),
T=0,a=0,th=-1.2,sp=0,wt=0,ws=.07,OUT=1e9,RD=0,KD=0,DG=-1e9,O,X=c.x,CL,AC,HD,i,k,r,Y,KC={},
RE=[225,60,70],CR=[240,228,205],YE=[245,200,70],BR=[185,120,65],
PR=[[RE,CR],[[70,120,235],YE],[[165,95,215],CR]],
K=(v,m,s)=>(m=a*(m||1),KC[s=v+"|"+m]||(KC[s]=c.rgb(v[0]*m,v[1]*m,v[2]*m))),
RU=P("right","one-up"),RP=P("right","up"),WU=P("wink","up"),CU=P("closed","one-up"),Z=P("closed"),LR="look-right",LL="look-left",AU="arms-up",DF="default",
cc=c.clamp(c.x+4,12,W-43);
if(M.max(cc-12,W-cc-43)<15)cc=c.x+4<W/2?12:W-43;
var bx=cc+28,lf=cc-12>=W-cc-43,lo=lf?0:cc+43,wx=lo+7+(R()*((lf?cc-14:W-1)-lo-13)|0),tn=[],w,TD=[bx+9,3],
V=[0,1,2].map(p=>rp(rp("▀",p)+"●"+rp("▀",2-p),8)+"▀");
for(i=-2;i<W;){w=8+2*(R()*2|0);
if(i+w>cc-14&&i<cc+45||i+w>wx-8&&i<wx+9){i++;continue}
tn.push({x:i,w,p:PR[R()*3|0]});i+=w+4+(R()*9|0)}
var scene=()=>{
var A=[],q=(x,y,t,c,bg,o,d=M.abs(x-X))=>A.push({x,y:y+M.max(0,7-(T-d*4)/50|0,(T-OUT-800-(W-d)*2)/90|0),t,c,bg,o,z:-1}),E=(n,rx,ry,t,l)=>q(wx+N(rx*Co(n)),3+N(ry*S(n)),t,l),y,x,j,r,Rd,Gy,Wl,B;
a=M.max(0,M.min(1,T/800,1-(T-OUT-700)/1500));AC=[];CL="clawd_body";HD=0;
if(T>OUT){sp*=.94;ws*=.94}th+=sp;wt+=ws;
if(a<=0)return A;
Y=K(YE);Rd=K(RE);Gy=K([115,115,135]);Wl=K([150,160,215]);B=K(BR);
// rise from Clawd out, sink from the edges in; lights, tents, wheel
y=T<250?-1:0;A.push(c.tile("─╮"+rp(" ",16)+"╭─",y,Gy,0,{z:-1}));
for(j=0;j*20<W;j++){x=j*20+1;r=T>250+j*45&&T<OUT+600-M.abs(x-X)*3;
A.push(Q(x,y+1,"╰"+rp(r?(T/220|0)%2?"─●─○":"─○─●":"─○",r?4:8)+"╯",r?H(j*67+T/12,.55,a):Gy,{z:-1}))}
tn.forEach(t=>{var x=t.x,w=t.w,C=K(t.p[0]);q(x+1,2,"◢"+rp("█",w-4)+"◣",C);q(x,3,"◢"+rp("█",w-2)+"◣",C);
if(x+w<11||x>64)for(y=4;y<7;y++)q(x,y,rp("▌",w),C,K(t.p[1]))});
for(j=0;j<16;j++){r=wt+j*PI/3;E(j*PI/8,6.4,3,"•",T<OUT+300&&(j+(T/150|0))%2?Y:Wl);if(j>5)continue;
j<3&&(E(r,3.2,1.5,"·",Wl),E(r+PI,3.2,1.5,"·",Wl));E(r+.52,6.4,3,"■",T<OUT+300?H(j*60+20,.6,a):Gy)}
q(wx,3,"●",Y);
// carousel
q(cc-12,0,"◢",Rd);q(cc-11,0,rp((th*4|0)%2?"▌":"▐",23),Rd,K(CR));q(cc+12,0,"◣",Rd);q(cc-12,1,V[(th*5+30|0)%3],Y);q(cc-12,6,rp("▔",25),Y);
r=[0,PI].map((p,j)=>{p+=th;var x=cc-4+N(7*S(p)),o=S(2*p+j)>0?-2:-1,fr=Co(p)>0;
for(y=2;y<6;y++)(j||RD?y==(o<-1?5:2):1)&&q(x+4,y,"│",K(YE,fr?.8:.45));return{x,o,fr,hd:!fr&&M.abs(S(p))<.45}});
for(y=2;y<6;y++)q(cc-3,y,"▐▒░▒░▒▌",K(YE,.7));
if(RD){X=r[0].x;O=r[0].o;HD=r[0].hd;r[0].fr||(CL="rgb(118,65,48)")}
r=r[1];a>.6&&(AC=[{x:r.x,offset:r.o,pose:P(r.fr?"right":"left",T-DG<1500?"up":"down"),color:K([87,105,247],r.fr?1:.55),front:RD&&r.fr,hide:r.hd}]);
RD&&q(cc+13+(T/250|0)%5,3-(T/180|0)%4,"♪♫"[(T/400|0)%2],H(T/8,.5,a));
// stall
q(bx,1,rp("▌",15),Rd,Y);q(bx,2,V[(T/150|0)%3].slice(0,15),T-DG<900&&(T/90|0)%2?K(CR):Y);
for(y=3;y<7;y++)q(bx,y,"│"+rp(" ",13)+"│",K(BR,.8));
for(j=KD;j<3;j++)q(bx+1+((T/200|0)+j*3)%8,3,"◆",Y);
[x,y]=TD;
["▙▄▄▄▟"," •▾• ","▟███▙","▀▀ ▀▀"].forEach((t,n)=>q(x,y+n,t,n-1?B:K([60,30,15]),[,B][n],n==1));
T-DG<900&&q(bx+5,0,"DING!",Y);
return A},
add=(p,ms,o,ex)=>{var s=scene();RD||(O=o|0);f.push({x:X,offset:O,pose:p,ms,color:CL,hide:HD,props:ex?s.concat(ex()):s,actors:AC});T+=ms},
ball=(x,y)=>()=>[Q(x,y,"●",K(CR))],
bits=(n,x,dx,y,dy,ch,l)=>()=>[...Array(n)].map(()=>Q(x+c.R(-dx,dx),y+c.R(-dy,dy),c.pick(ch),l||c.rainbow(c.R(0,9)))),
thr=h=>{add(RU,300,0,ball(X+8,3));add(CU,150,1,ball(X+8,4));
var g=bx+1+(((T+225)/200|0)+!h)%8;
for(i=1;i<7;i++)add(i<3?RU:LR,45,0,ball(X+9+N((g-X-9)*i/6),i>1&&i<5?2:3));
if(!h)[4,5,6].forEach((y,n)=>add(n?Z:LR,n>1?260:80,0,ball(g,y)));
else{KD=1;DG=T;for(i=0;i<6;i++)add(i<2?WU:AU,80,i%2?-1:0,bits(4,g,i+1,3-(i>>1),1,"✦*·",Y))}};
// ride
c.walk(c.x,cc-11).forEach(w=>{X=w.x;add(w.pose,w.ms||60)});
while(T<900)add(DF,100);
add(LL,350);add(LR,300);add(AU,250);add(DF,110,1);add(P("open","up"),80,-2);add(WU,160,-1);
RD=1;
for(i=1;i<=100;i++){k=i/100;th=4*PI*k-2*S(2*PI*k)-1.2;r=Co(th)>0;add(P(i%37?r?"right":"left":"wink",k>.3&&k<.75&&r?"up":"down"),45)}
RD=0;sp=.05;
[-2,-2,-1,1].forEach((o,n)=>{add(n<2?RP:o>0?Z:LR,70,o);n<3&&X++});
add(Z,300,0,bits(3,X+4,3,2,0,"*·✦",Y));
// throws, teddy, hug, lights out
while(X<cc+14){X++;add(P("right","down",X%2?"left":"right"),45)}
add(LR,350);thr(0);add(LR,250);thr(1);
for(i=1;i<9;i++){k=i/8;TD=[N(c.lerp(bx+9,X+2,k)),N(3-3*k-S(PI*k)*2)];add(RP,55)}
for(i=0;i<6;i++){TD=[X+2,i%2?-1:0];add(i<4?AU:WU,i%2?120:90,i%2?-1:0,bits(5,X+8,14,2,3,"*✦•·"))}
TD=[X+5,1];add(WU,90);TD=[X+8,2];add(RU,90);TD=[X+9,3];add(P("wink","one-up"),350);
for(i=0;i<6;i++)add(CU,150,0,()=>[Q(X+8,2-(i>>1),"♥",K(RE))]);
OUT=T;
do add(T-OUT<500?LL:T-OUT<1000?LR:CU,90);while(a>0);
add(Z,400);add(DF,300);
return f});
