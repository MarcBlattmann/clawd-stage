// Snowy night: Clawd trudges into his igloo, an aurora ripples across the whole sky, he crawls out in awe, a reindeer stops by, the lights fade.
$cdA("northern-lights", { scene: 1, title: "Northern lights", w: 70 }, function (c) {
var f=[],W=c.W,M=Math,S=M.sin,R=c.rng(c.R(1,1e6)),N=1e9,T=0,DN=N,AS=N,AF=N,SH=N,ZZ,RX=-99,RW,AT=-N,AC,BL=" ".repeat(W),a,A,K,i,j,
cl=v=>v<0?0:v>1?1:v,Z=c.P,
ix=W>100&&c.x>30?c.clamp(c.x-12,65,W-36):-1,E=ix+11,x=c.x,IR=x<E?N:0,
p=R()*9,L=i=>(i=S(i*.35+p)*.8+S(i*.13+p*3)*.6)>.7?2:i>-.1?1:0,
MT="",GR="",TR=[[],[],[],[]],St=[],
Q=(x,y,t,col,z)=>({x,y,t,c:col,bg:K[y],z});
for(i=0;i<W;i++){j=L(i);MT+=j>1?L(i-1)<2?"▟":L(i+1)<2?"▙":"█":j?L(i-1)<1?"▗":L(i+1)<1?"▖":"▄":" ";
GR+=i>9&&i<65?" ":"▄";TR.map(r=>r[i]=" ");R()<.1&&St.push([i,R()*4|0,R()])}
// pines, clear of the banner text and the igloo
for(i=0;i<W-4;i+=4+R()*9|0)if((i<6||i>64)&&(i+5<ix||i>E+24))
(R()<.5?["  ▲"," ▟█▙","▟███▙","  ▌"]:["","  ▲"," ▟█▙","  ▌"]).map((t,r)=>{for(j=0;j<t.length;j++)t[j]>" "&&(TR[r][i+j]=t[j])});
TR=TR.map(r=>r.join(""));
var sc=()=>{
a=M.min(cl(T/1200),1-cl((T-DN)/1000));A=cl((T-AS)/2500)*(1-cl((T-AF)/1500));
var P=[],k=M.round(4*(1-a)),i,j,y,t,cc,e=[],s=[],h=[],g=[],HC={},
F=(r,g,b)=>c.rgb(8+(r-8)*a,8+(g-8)*a,8+(b-8)*a),
q=(...v)=>P.push(Q(...v));
K=[0,1,2,3].map(y=>(P.push({x:0,y,t:BL,bg:t=F(12+y*(3+10*A),16+y*(4+17*A),34+y*(8+7*A)),o:1,z:-1}),t));
if(a<=0)return[];
St.map(s=>a>s[2]&&q(s[0],s[1],S(T*.005+s[2]*50)>.85?"✦":"·",s[2]>.5?"text":"inactive",-1));
// aurora: bright wavy edge + rays, every 90ms
if(T-AT<90)P.push(...AC);else if(AT=T,j=P.length,A>0){
for(i=0;i<W;i+=2)if((s[i]=A*cl(.55+.75*S(i*.06+T*.0015+2*S(i*.017))))>.12){e[i]=M.round(1.3+.8*S(i*.09+T*.0017)+.5*S(i*.031-T*.0011));
h[i]=s[i]*(1+2*cl(S(i*.21+T*.0025)+S(i*.083-T*.0016)));g[i]=125+35*S(i*.021+T*.0007)}
for(y=0;y<3;y++){t="";for(i=0;i<=W;i++){var u=i&-2,ch=" ",d=e[u]-y,v=h[u]-d,col;
if(i<W&&d>=0&&v>0){ch=d?"⡀⡄⡆⡇⢀⢠⢰⢸"[(i&1)*4+M.min(3,v*3|0)]:"⣀⣤⣶⣿"[M.min(3,s[u]*4|0)];col=M.round((g[u]+d*55)/20)}
if(ch==" "||col!=cc){t&&q(i-t.length,y,t,HC[cc]||(HC[cc]=c.hsv(cc*20,.65,.4+.6*A)),-1);t=""}
if(ch>" "){t+=ch;cc=col}}}AC=P.slice(j)}else AC=[];
T>SH&&T<SH+900&&q(W-(T-SH)*(W+6)/900|0,1,"✦──","text",-1);
q(0,3,MT,F(80,95+30*A,130),-1);
TR.map((t,r)=>q(0,3+r+k,t,F(...[[200,230,215],[40,130,90],[40,130,90],[130,95,60]][r]),-1));
q(0,6,GR,F(220-50*A,240,250-40*A),-1);
if(RX>-50){var n=F(150,105,70);
[" └┼┘"," ██▖","  ▜██████▖",RW&&(T/100|0)%2?"  ▐▌   ▐▌":"  ▌▐   ▌▐"].map((t,r)=>q(RX,3+r,t,r?n:F(220,200,170),-1));q(RX,4,"●",(T/200|0)%2?"#ff4a4a":"#a83a3a",-1)}
k=M.max(k,M.round(4-(T-IR)/100));
["  ▗▟██▙▖"," ▟█▌██▌█▙▄▖","▐█▌██▌██▌█▌","█▌██▌██▌██▌"].map((t,r)=>q(ix,3+r+k,t,F(214-30*A,232,245-30*A)));
ZZ&&[0,1,2].slice(0,(T/300|0)%4).map(j=>q(ix+5+j,2-j,j>1?"Z":"z","inactive"));
return P},
add=(pose,ms,o,ex,hd)=>{f.push({props:sc().concat(ex||[]),x,pose,ms,offset:o||0,hide:hd,color:A?c.rgb(215-20*A,119+25*A,87+15*A):void 0});T+=ms},
sp=n=>[...Array(n)].map(()=>Q(x+c.R(-6,14),c.R(0,2),c.pick("✦✧*·"),c.pick(["text","#9fffc8","#c8a0ff"]))),
Df="default",FA="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" "),
cw=(d,ey)=>{for(i=1;i<10;i++){x+=d;add(Z(ey,"down",i%2?"left":"right"),70,1)}};
// night falls, Clawd walks home
while(T<500)add(T<250?"look-left":"look-right",125);
c.walk(c.x,E,{ms:40}).map(fr=>{fr.props=sc();f.push(fr);T+=fr.ms||60});
if(IR)IR=T;x=E;
while(T<IR+500||T<1300)add(T<IR+300?Z("left"):Df,100);
for(i=0;i<5;i++){x=E+i%2;add(Z("closed"),50)}x=E;
add(Z("left"),140,1);cw(-1,"left");
// asleep while the sky lights up
ZZ=1;AS=T+300;for(i=0;i<16;i++)add(Df,100,1,0,1);
ZZ=0;for(i=0;i<5;i++)add(Df,90,1,[Q(ix+5,2,"!","warning")],1);
cw(1,"right");x++;add(Z(),160);x++;
add(Z("left"),250);add(Z("right"),250);add(Z("closed"),90);add(Df,150);
FA.slice(0,8).map(F=>add({facing:F},60));
SH=T+500;for(i=0;i<18;i++)add({facing:"back"},90,i>12&&i<15?-1:0,i>12?sp(3):0);
FA.slice(9).map(F=>add({facing:F},60));
for(i=0;i<6;i++)add(Z(i%3?"open":"wink","up"),110,i%2?-1:0,sp(5));
// a reindeer drops by
var st=2+W/100|0,RS=x+12;RW=1;
for(RX=W;RX>RS;RX-=st)add(Z("right"),50);
RX=RS;RW=0;
for(i=0;i<12;i++)add(Z(i>8?"wink":"right",i&1?"one-up":"down"),110,0,i>2?[Q(x+10,4-(i/3|0),"♥","error")]:0);
RW=1;for(;RX>-12;RX-=st)add(Z(RX>x+3?"right":"left",(T/200|0)%2?"one-up":"down"),50);
RX=-99;
// fade out
AF=T;for(i=0;i<14;i++)add(Z(i<5?"open":i<10?"closed":"wink"),100);
DN=T;for(i=0;i<11;i++)add(Df,100);
f.push({x,pose:Df,ms:300});
return f;
});
