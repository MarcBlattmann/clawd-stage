// Arcade maze: Clawd chomps dots, ghosts chase him, a power pellet turns the tables, the maze flashes away.
$cdA("retro-maze", { scene: 1, title: "Maze chase", w: 70 }, function (c) {
var W=c.W,M=Math,R=c.rng(c.R(1,1e6)),P=c.P,Q=c.T,f=[],T=0,A,i,k,w,n,q,gs=[],pt=200,
d=c.x*2<=c.mx?1:-1,X=(u,w)=>d>0?u:W-u-w,FW=d>0?"right":"left",BK=d>0?"left":"right",
u0=d>0?c.x:c.mx-c.x,uC=u0,lo=u0,hi=u0+8,cx=c.x+4,D=M.min(c.mx-u0-1,c.R(28,38)),uP=u0+D+8,ate=0,
uH=M.max(u0-13,1),hx=X(uH,5),i1=M.max(3,uH+7-u0),dl=6,nG=M.min(c.R(2,4),((D-i1-6)/dl|0)+1),
WC="#465aff",DC="#ffb897",Y="chromeYellow",TX="text",GC=["#ff4040","#ffb8ff","#40f0ff","#ffb852"],SH="║     ║",
rv=0,dz=0,fl=0,dr=1,sc=0,sx=X(W-14,11),
rw=[0,1,2,3,4].map(y=>Array(W).fill(y?" ":"═")),pl=[],
put=(y,x,s)=>[...s].map((h,q)=>rw[y][x+q]=h);
// maze: border, dots, islands, pen shaft behind Clawd
for(i=1;i<W-1;i+=2)rw[1][i]="·";
for(i=(3+R()*9)|1;i<W-2;i=(i+22+R()*22)|1)if(i<hx-1||i>hx+5)pl.push(i),rw[1][i]=" ";
for(i=1;i<W-3;){w=M.min(4+R()*10|0,W-1-i);if(i+w>hx-3&&i<hx+7)w=hx-3-i;
if(w>2){put(2,i,"╔"+"═".repeat(w-2)+"╗");put(3,i,"╚"+"═".repeat(w-2)+"╝");rw[4][i+w+1]="·";i+=w+3}else i=M.max(i+1,hx+7)}
["╝     ╚","       ",SH,SH].map((s,y)=>put(y,hx-1,s));
var L=rw.map(a=>a.slice(0,W).join("")),
ln=(y,s,col,o,x0)=>{var a=M.max(x0,cx-rv+y*4),b=M.min(x0+s.length,W,cx+rv-y*4),t;
if(b>a){t=s.slice(a-x0,b-x0);if(dz)t=t.replace(/./g,(h,p)=>((p+=a)*p*7+y*41)%97<dz*97?" ":h);t.trim()&&A.push(Q(a,y,t,col,{o,z:-1}))}},
S=()=>{A=[];var wc=fl&&(T/140|0)%2?TX:WC,bl=(T/260|0)%2,s="",u,e;
L.map((s,e)=>ln(e>3?2:e,s,e%3==1?DC:wc,e<4,0));ln(1,SH,wc,0,hx-1);
dr&&ln(3,"─────","#ffb8de",0,hx);bl&&pl.map(p=>ln(1,"●",DC,0,p));
ln(0," "+(bl||fl?"1UP":"   ")+" "+("0000"+sc).slice(-5)+" ",TX,1,sx);
// floor dots; in the banner box only on his path
for(e=0;e<W;e++)u=d>0?e:W-1-e,s+=u%3==1&&u-uP&&(u<lo||u>hi)&&(e<10||e>64||u>u0&&u<uP)?"·":" ";
[0,10,65].map((a,j)=>ln(5,s.slice(a,[10,65,W][j]),DC,j-1,a));
ate||bl||ln(5,"●",DC,0,X(uP,1));return A},
add=(p,ms,ex,o,m)=>{f.push(Object.assign({x:X(uC,9),pose:p,ms,offset:o||0,props:S().concat(ex||[])},m));T+=ms},
E=v=>v>0?"  ● ●":"● ●  ",
G=(u,y,col,ey,ec)=>{var x=X(u,5);return[Q(x,y,"▄███▄",col),Q(x,y+1,ey,ec,{bg:col,o:1}),Q(x,y+2,(T/130|0)%2?"█▀█▀█":"▀█▀█▀",col)]},
gp=j=>j<i1+4?uH:M.round(c.lerp(uH,u0+D-7,(j-i1-4)/(D-i1-4))),
gh=i=>{var B=[],j,y,k;if(rv>M.abs(hx+2-cx))for(k=0;k<nG;k++){j=i-k*dl;y=c.clamp(j-i1,k?-3:0,4);
if(y>-3)B=B.concat(G(gp(j),y,GC[k],y>3?E(d):j<i1?E((T/500|0)%2-.5):" ● ● ",TX))}return B},
MO=(s,i)=>(x,y)=>i&2&&y==1&&x-(s>0?6:1)>>>0<2?"#2a1810":void 0,
fr=(w,B)=>gs.map(g=>g.s||(B=B.concat(G(g.u,g.y,w?"#e0e0ff":"#323ceb"," ° ° ",w?"error":DC))))&&B;
// maze grows, READY!
while(T<1100){rv=T/750*(W+24)|0;add(P(T<400?"open":T<750?"left":"right"),80,gh(-99))}
rv=1e4;
for(i=0;i<9;i++)add(P(i==5?"closed":FW),i==5?100:130,gh(-99).concat(Q(X(uC,9),3," READY! ",Y,{o:1,b:1})),+(i>7));
// chomp; ghosts drop out of the pen
for(i=1;i<=D;i++){uC=u0+i;hi=uC+8;sc+=i%3?0:10;dr=i<i1;var lk=i>i1+3&&i<i1+8;
add(P(lk?BK:FW,"down",i&1?"left":"right"),lk?85:i>i1+7?50:75,gh(i).concat(lk&&i<i1+6?Q(X(uC,9)+4,3,"!","error",{b:1}):[]),0,{paint:MO(d,!lk&&i)})}
// power pellet: blue ghosts run home
ate=1;sc+=50;for(k=0;k<nG;k++)gs.push({u:gp(D-k*dl),s:0,y:4});
[P("wink","up"),"arms-up","arms-up",P(BK,"up")].map((a,q)=>
add(a,q>2?260:80,fr(q%2,[]).concat(q<3?[1,2,3,4,5].map(()=>Q(X(uC,9)+c.R(-3,11),c.R(1,3),c.pick("✦*·+"),Y)):[]),-(q==1),{color:q%2?Y:void 0}));
for(n=0;n<150&&gs.some(g=>g.s<2);n++){var ex=[],pop=0,mv=gs.some(g=>!g.s&&g.y>3);
if(mv)uC=M.max(0,uC-1-n%2),lo=M.min(lo,uC);
gs.map(g=>{if(g.s>1)return;
if(!g.s&&g.y>3&&uC<=g.u+3)g.s=1,sc+=pt,pop=Q(X(g.u,5),3," "+pt+" ",GC[2],{o:1,b:1}),pt*=2;
else if(g.u-uH)g.u+=M.sign(uH-g.u)*M.min(g.s?2:+(n%3>0),M.abs(uH-g.u));else if(--g.y<-2)g.s=2;
g.s==1&&ex.push(Q(X(g.u,5)+1,g.y+1,"● ●",TX,{z:-1}))});
add(mv?P(BK,"down",n&1?"left":"right"):P(n&4?BK:"open"),55,fr(n>16&&n%4<2,ex),0,{color:n%4<2?Y:void 0,paint:MO(-d,mv&&n)});
pop&&add(P("wink","up"),450,ex.concat(pop))}
// hop, level-clear flash, dissolve
dr=1;[1,0,-1,-2,-1,0].map((o,q)=>add(q?"arms-up":"default",80,0,o));
add(P("wink"),400);
fl=1;for(q=0;q<8;q++)add(P(q<4?FW:q<6?BK:"wink"),140);fl=0;
for(q=1;q<13;q++)dz=q/12,add(P(q<6?"open":"closed"),70);
add("default",300);return f});
