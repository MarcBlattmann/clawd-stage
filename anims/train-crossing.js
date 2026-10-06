// DING DING, barrier down, a very long train rolls edge to edge while Clawd waits, then he looks both ways and crosses.
$cdA("train-crossing",{title:"Level crossing",w:64},c=>{
var M=Math,W=c.W,T=c.T,P=c.P,R=M.round,I="inactive",S="subtle",E="error",H="text",Y="chromeYellow",Z={z:-1},
x=c.clamp(c.x,3,c.mx-9),Q=x+12,B=Q-2,d=c.pick([1,-1]),v=W>150?3:2,L=d>0?"left":"right",G=d>0?"right":"left",
f=c.walk(c.x,x),t=0,rr=0,ba=1,py=7,rg=0,tr=0,sm=[],u=0,h,cv,pr,i,j,b,TL,
C=()=>c.pick("error permission success warning autoAccept".split(" ")),
U=s=>s.replace(/(\D)(\d+)/g,(m,a,n)=>a.repeat(n)),
// Car spec "<row><color><rle>|..": k car, c 2nd, b brown, i grey
K=(s,o,k)=>{k=k||C();var l=s.split("|").map(r=>[+r[0],U(r.slice(2)),{k:k,c:C(),b:"#b07440",i:I}[r[1]]]),w=l[0][1].length;o=o||{};o.n||l.push([4," ●●"+" ".repeat(w-6)+"●● ",I]);o.w=w;o.l=l;o.k=k;return o},
LB=(q,s,k)=>(q.l.push([2,s.padStart(5+s.length/2).padEnd(10),k,{z:-1,bg:q.k,o:1,b:1}]),q),
pu=(x,y,s,k)=>{var q=y+k,a,h;if(y>=0&&y<7)for(h of s){h!=" "&&x>=0&&x<W&&((a=a||(cv[q]=cv[q]||Array(W).fill(" ")))[x]=h);x++}},
fl=()=>{for(var q in cv)pr.push(T(0,+q[0],cv[q].join(""),q.slice(1),Z));cv={}},
TY=["1k▄10|3k▀10","1k ▗▄6▖ |2k▐█8▌|3k ▝▀6▘ ","1b (=6) |2b(=8)|3i▀10","1i  ▄▟█2▙▄  |2k█10|3k ▀8 ","1k  ▄▛▀2▜▄  |2k ▀●▀4●▀ |3i▀10","0k▄10|1k▓10|2c▓10|3i▀10"],
tn=[K("0k 5▄4 5|1k ▗▄3█4▄3▖ |2k▐▀3█6▀3▌|3k▐█12▌|4i ●3 6●3 ",{n:1})],
n=c.clamp(R((W+30)/11),7,17),fi=c.R(2,n-3),
X=q=>d>0?R(h)-q.u-q.w:R(h)+q.u,RL="";
for(i=0;i<W;i++)RL+=i<10||i>64||i%3<1?"═":" ";
for(i=0;i<n;i++)j=c.R(0,5),tn.push(i==fi?K("3i▀13",{fr:1}):j?K(TY[j]):LB(K(TY[0]),c.pick("TOKENS CACHE BYTES {JSON} BUGS LOGS DIFFS".split(" ")),H));
tn.push(LB(K("0k   ▗▄2▖   |1k▄3█4▄3|3k▀10",{lp:1},E),"□ □  □ □",Y));
tn.map(q=>{q.u=u;u+=q.w+1});TL=u-1;

// Frame: rails, poles, smoke, train, post, barrier
var F=(p,ms,o,xs)=>{
 var g=R(rr*W),a=M.max(0,x+4-g),z=M.min(W,x+4+g),ac=[],lb=[],on=t/300&1,an=ba*M.PI/2,l;
 cv={};pr=[];t+=ms;
 pu(a,4,RL.slice(a,z),I);
 for(g=(x+17)%26;g<W;g+=26)g>a&&g<z&&M.abs(g-x-6)>12&&[1,2,3].map(y=>pu(g,y,y>1?"│":"┬",I));
 sm=sm.filter(s=>s.a++<9);sm.map(s=>pu(s.x,0,"░○o°·"[s.a>>1],s.a<4?H:I));
 if(tr){h+=d*v*ms/45;
  tn.map(q=>{l=X(q);if(l+q.w<0||l>W)return;
   q.l.map(r=>r[3]?lb.push(T(l,r[0],r[1],r[2],r[3])):pu(l,r[0],r[1],r[2]));
   q.u&&pu(d>0?l+q.w:l-1,3,"─",I);
   q.lp&&pu(d>0?l-1:l+q.w,2,"●",on?E:S);
   q.fr&&ac.push({x:l+2,offset:-3,color:q.k,pose:P(l+2<x?"right":"left",t/200&1?"up":"one-up")})});
  g=R(h)-d*7;g>=0&&g<W&&sm.push({x:g,a:0});
  (d>0?h-TL-W:-h-TL)>0&&(tr=0)}
 fl();pr=pr.concat(lb);
 if(py<7){
  for(g=2;g<7;g++)pu(Q,g+py,g>5?"┴":"│",I),g>3&&pu(B,g+py,g>5?"▀":"█",I);
  pu(Q,1+py,"┼",I);[-1,1].map(k=>pu(Q+k,1+py,"●",rg&&on^k>0?E:S));
  for(g=1;g<14;g++)pu(B-R(g*M.cos(an)),3+py-R(g*M.sin(an)/2),ba>.9?"▐":"▄",g>>1&1?H:E);
  pu(B,3+py,"●",H);fl();pr.push(T(Q,py,"X",H,{z:-1,b:1}))}
 rg&&pr.push(T(on?Q-6:Q+2,0,"DING",on?"warning":Y,{b:1}));
 f.push({x:x,pose:p,ms:ms,offset:o||0,props:pr.concat(xs||[]),actors:ac})};

for(i=0;i<=12;i++){rr=i/12;py=M.max(0,7-i);F(i>6?"look-right":"default",50)}
rg=1;F(P("closed"),130,-1,[T(x+4,2,"!",E,{b:1})]);F("default",160);
for(i=0;i<=10;i++){ba=1-i/10;F("look-right",70)}
ba=.1;F("look-right",60);ba=0;F(P("closed"),200);

// Train: tap, scan, hop, stretch, squint, wave
h=d>0?-c.R(35,60):W+c.R(35,60);tr=1;
for(j=0;;j++){
 if(!(j%14))b=c.R(0,3);
 var fx=X(tn[fi+1])+2,fc=R(h)-(d>0),rc=R(h)-d*TL,m=j%14,ey="open",ar="down",ft="both",o=0,xs=[];
 if(d>0?rc>Q+2:rc<x-4)break;
 j<24&&j&4&&xs.push(T(d>0?1:W-6,0,"TOOT!","warning",{b:1}));
 if(M.abs(fx-x)<15){ey=j&4?"wink":fx<x?"left":"right";ar=j&4?"up":"one-up"}
 else if(M.abs(fc-x-4)<7){ey="closed";xs.push(T(d>0?x+9:x-1,5,"~",S))}
 else if(!b){ft=m&2?"right":"both";ey=d*(fc-x)>0?G:L}
 else if(b<2)ey=m<7?L:G;
 else if(b<3){o=[0,1,0,-1,-2,-2,-2,-1][m]|0;ey=L}
 else if(m<8){ey="closed";ar="up";o=m>1&&m<6?-1:0}
 F(P(ey,ar,ft),45,o,xs)}

// Barrier up, look both ways, cross
F(P(G),300);rg=0;F(P(G),200);
for(i=1;i<=10;i++){ba=i/10;F(i>8?"arms-up":"default",70)}
"look-left look-right look-left default".split(" ").map((q,i)=>F(q,i>2?150:250));
"right-30 right-75 edge back-125 back".split(" ").map(q=>F({facing:q},70));
[-1,-2,-3].map(q=>F({facing:"back"},170,q));
"left-75 left-30".split(" ").map(q=>F({facing:q},80,-3));
for(i=0;i<8;i++)F(P(i&2?"wink":"open","up"),90,i&2?-4:-3,[T(x-2-(i&1),1+(i&4)/2,"✧✦"[i&1],Y)]);
for(i=0;tr&&i<80;i++)F(P(G,"one-up"),45,-3);
for(i=0;i<=12;i++){rr=1-i/12;py=M.min(7,R(i*.6));F(P("open",i&4?"one-up":"down"),50,-3)}
[-2,-1,0,1,0].map((q,i)=>F(i>2?P("closed"):"default",i>3?400:60,q));
return f});
