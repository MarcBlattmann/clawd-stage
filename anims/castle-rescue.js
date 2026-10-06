// Knight Clawd storms a castle, ducks dragon fire, tickles the dragon away with a feather and frees his friend.
$cdA("castle-rescue",{title:"Castle rescue",w:70,scene:1},function(c){
var f=[],W=c.W,P=c.P,M=Math,R=c.rng(c.R(1,1e6)),T=0,N=1e9,DN=N,FL=N,A,B,Z,i,j,h,k,
C=M.min(M.max(c.x+9,66),W-49),x=c.x,o=0,hd,hm,fe,col,bs=0,dj=0,de="•",cy=0,fo=-3,fp=P(),fw,fz=0,
Y="warning",E="error",O="one-up",b={b:1},RT=P("right"),CL=P("closed"),WD="#96643c",DG="#ffe650",FC="#ffd6ec",HC="#c9cdd8",HM="▗▆█▆▖",
X=(x,y,t,k,e)=>c.T(x,y,t,k||"subtle",e),F=(v,n)=>(v|0)%n,L=[],
st=(x,y,s,k)=>{var r=(L[k]=L[k]||[..."1234567"].map(_=>Array(W).fill(" ")))[y];[...s].map((h,n)=>h>" "&&(r[n+x]=h))};
h=R()*9;for(j=0;j<W;j++)i=(M.sin(j/13+h)+M.sin(j/5+h*2)*.4+.6)*2.2,(j<C+12||j>C+44)&&(i>1&&st(j,3,i>2?"█":"▄",0),i>3&&st(j,2,i>4?"█":"▄",0)),(j<C-1||j>C+48)&&(k=R())<(j>9&&j<65?.05:.2)&&st(j,6,k<.03?"✿":",'\"`."[R()*5|0],k<.03?4:3);
for(j=R()*5|0;j<W-5;j+=7+R()*9|0)(j<5||j>64)&&(j+6<C-1||j>C+48)&&(h=R()>.5,["  ▟▙"," ▟██▙","▟████▙"].map((s,k)=>(k||h)&&st(j,3+k,s,1)),st(j+2,6,"▐▌",2));
for(j=1;j<7;j++)st(C+7,j,["█▄█▄█","█████","█▛▀▜█"][j-1]||"█   █",5),j>1&&st(C+45,j,j>2?"████":"█▄▄█",5),j>3&&st(C+12,j,j>4?"█".repeat(33):"▄█".repeat(16)+"▄",5);
for(j=15;j<44;j+=6)st(C+j,5,"■",6);
var BG=[],PL=["#32603e","#3c9650","#8c5f3c","#5aaa50","#eb82aa","#999aa8","#ffcd5f"],Bd=[1,2,3].map(_=>[R()*W,R()*2|0,R()*9]),su=c.R(2,W-3),
q=(x,y,s,c,fr)=>{if(x<A)s=s.slice(A-x),x=A;s=s.slice(0,B-x);y>=0&&x<B&&s.trim()&&Z.push(fr+fz>1?{x,y,t:s,c}:{x,y,t:s,c,z:-1})},
dr=(x,y,l,w)=>{[" ▟█▙"+(w?"  ◢◣":""),"▀▀█▙▄██▙▄◤",l?"  ▘▘  ▘▘":w?"":"     ◥◤"].map((s,k)=>q(x,y+k,s,"#5abe5a"));q(x+2,y,de,DG)},
a=(p,ms,ex)=>{var r=W*M.min(T,DN+800-T,800)/800+1,e=T<DN?c.x+4:x+4,k,y=3+o,z={z:-1};Z=[];A=M.max(0,e-r|0);B=M.min(W,e+r|0);
["   ▗▄▄▄▖","  ▀▀▀▀▀▀▀▀"].map((s,y)=>q(0,y,c.tile(s.padEnd(41),y,"",T/260).t,"#e1e6f2"));
q(su,0,"☀","#ffd65a");Bd.map(d=>q(F(d[0]+T/45,W+4)-2,d[1],F(T/140+d[2],2)?"v":"^","#9696aa"));
BG.map(g=>q(0,g[1],g[2],PL[g[0]],g[0]>4));
bs<2&&q(C,6,"≈~≈≈~≈≈~≈".substr(F(T/200,3),7),"#5096eb");
for(k=0;k<7;k++)bs<1?q(C+6,k,"▐",WD):bs<2?k>1&&q(C+k,k,"▚",WD):q(C+k,6,"▄",WD);
q(C+9,0,F(T/150,2)?"▌▀▀":"▌▀▄","#e64646",1);q(C+46,1,F(T/170,2)?"▌▄▀":"▌▀▄","#5a8cf0",1);
if(T<FL)dr(C+23+dj,1,1,1),k=F(T/220,5),k<2&&q(C+22-k+dj,1-k,"°","#b4b4be");else{e=T-FL;k=C+23-e/20|0;k>-11&&dr(k,M.max(-1,1-(e/150|0))+F(e/260,2),0,F(e/90,2));e<1600&&q(k+11,1,"hehehe".slice(0,2+F(e/120,5)),DG)}
cy>-4&&[0,1,2,3].map(k=>q(C+34,cy+k,k?"║    ║    ║":"╓────╥────╖","#aab4cd",2));
f.push({x,pose:p,ms,offset:o,hide:hd,color:col,props:Z.concat(hm&&!hd&&(o||x<C+3||x>C+11)?[c.T(x+2,y,HM,HC,z)]:[],fe?[c.T(x+8,y,"ƒ",FC,z)]:[],ex||[]),
actors:[{x:C+35,offset:fo,pose:fw?P(0,F(T/220,2)?"up":O):fp,color:"permission",hide:C+35<A||C+44>B}]});T+=ms},
H=(p,ms,ex)=>{for(var e=T+ms;T<e;)a(p,100,ex)},
w=(to,ms,ex)=>{for(var d=to>x?1:-1,n=0;x!=to;n++)x+=d,a(P(d>0?"right":"left",fe?O:"down",n%2?"left":"right"),ms,ex)};
L.map((r,k)=>r.map((a,y)=>(a=a.join("")).trim()&&BG.push([k,y,a])));
// story
w(C-9,45);fz=1;H(RT,M.max(300,1100-T));
for(j=0;j<3;j++)a(RT,70,[X(x+2,j,HM,HC)]);
hm=1;a(CL,160,[X(x+1,2,"✦     ✦",Y)]);
fw=1;H(RT,700,[X(C+27,0,"help!","text",b)]);fw=0;
bs=1;a(RT,260,[X(C+1,1,"creak")]);bs=2;a(CL,110,[X(C-1,5,"░▒░")]);a(RT,200,[X(C-2,5,"░   ░")]);
w(C+8,70);hd=1;a(P(),360,[X(C+13,2,"tap tap")]);x=C+12;
hd=0;o=-1;a(RT,500);a(P("left"),200);a(RT,500,[X(C+24,0,"!",E,b)]);
for(i=1;i<7;i++)o=i>1?0:-1,a(CL,60,[X(C+23-2*i,2,"≈".repeat(2*i),"#ff7a30"),X(C+24-2*i,3,"~".repeat(2*i-1),DG)]);
a(P(),150,[X(C+12,2,"░▒░▒░")]);
col="#9a5a3a";o=-2;a(CL,160);o=-3;a(CL,300,[X(C+13,0,"°     °")]);col=void 0;
a(P(),300,[X(x+8,0,"!",Y,b)]);fe=1;a(P("wink",O),400,[X(x+9,0,"✦",Y)]);w(C+14,90);fe=0;
for(i=0;i<14;i++)dj=h=i%2,de=i>2?"^":"•",a(P(h?"wink":"closed",h?O:"down"),100,[X(x+9,2-h,h?"ƒ":"~ƒ",FC,b),X(C+26,0,["hi","hihi","HAHA!"][i/5|0],c.rainbow(i),b),X(C+31+F(i*3,4),2-F(i,3),"♪",DG)]);
dj=0;FL=T;o=-2;a(CL,300);o=-3;fe=1;a(P("left",O),300);a(P("right",O),200);
fw=1;w(C+24,70);a(P(0,O),200,[X(x+9,1,"✦",Y)]);
for(cy=-1;cy>-5;cy--)a(P(0,"up"),80,[X(C+34+c.R(0,10),3+cy,"✦",Y)]);
fw=fe=0;fp=P(0,"up");
for(i=0;i<8;i++)o=fo=-3-(i%4%3>0),a(P(i<4?0:"wink","up"),90,[X(C+33,0,"♥",E)]);
fp=P("left",O);H(RT,300);
for(i=-2;i<1;i++)o=i,a(P("left"),90);hd=1;x=C+8;a(P(),250);hd=0;
fw=1;w(C-9,60,[X(C+29,0,"thx! ♥","text")]);fw=0;
a(P(0,O),400);bs=1;a(RT,200,[X(C+1,1,"creak")]);bs=0;a(P("wink"),250);
for(i=-2;i<1;i++)fo=i,a(RT,90);
DN=T;H(RT,900);hm=0;a(P("wink"),200,[X(x+2,3,"✦ ✦",Y)]);
f.push({x,pose:"default",ms:300});
return f});
