// Ice fishing among icebergs and snowfall: a polar bear sneaks up behind Clawd, who tosses it his catch.
$cdA("arctic-fishing",{title:"Ice fishing",w:70,scene:1},function(c){
var f=[],W=c.W,M=Math,X=c.T,Q=c.R,T=0,DN=1e9,i,s,w,o,n,q,RO,IN,FH,FP,MO,
d=c.x<c.mx/2?1:-1,x0=c.clamp(c.x,18,c.mx-18),x=c.x,e0=-(d>0?x0:c.mx-x0)-16,st=-17,
FW=d>0?"right":"left",BK=d>0?"left":"right",HA=d>0?"one-up":"down",U="up",D="down",I="inactive",Y="warning",
BC="#e9eef2",SK="#9fd8ff",PK="#ff6b9a",FC=c.hsv(Q(10,50),.65,1),FS="<°))><",
HN=-1,BX=e0,BY=0,BG=0,BE=0,EY="•",O=[],FL=[],SP=[],
cl=v=>v<0?0:v>1?1:v,K=(r,g,b,a)=>c.rgb(r*a,g*a,b*a),
MP="/\\╮╭<>()▐▌▟▙▜▛▗▖▝▘",fl=s=>[...s].reverse().map(h=>(q=MP.indexOf(h))<0?h:MP[q^1]).join(""),
A=(r,y,t,C,e)=>X(d>0?x+r:x+9-r-t.length,y,d>0?t:fl(t),C,e),
B=(r,y,t,C)=>X((d>0?x+r:x+8-r)-(t.length>>1),y,t,C,{b:1}),
MD=(w,h)=>[...Array(h)].map((_,j)=>(n=M.max(1,w*(j+2)/(h+1)-2|0)," ".repeat((w-n)/2-1|0)+(j?"▟"+"█".repeat(n)+"▙":"▗"+"▄".repeat(n)+"▖"))),
g=s=>"  "+s+"   "+s+"   ",sk=(i,w)=>i<x0+19&&i+w>x0-10;
// icebergs (not behind the action), snowbanks outside the banner box, snow, glints
for(i=Q(0,5);i<W;i+=w+1+Q(0,11))w=O[0]?Q(4,12):16,sk(i,w)?i=x0+17-w:O.push({x:i,L:MD(w,O[0]?Q(1,w>8?4:3):4),b:3});
for(i=Q(0,1);i<W;i+=w+1+Q(0,9))w=Q(6,9),i>1&&i<65?i=64-w:sk(i,w)?i=x0+17-w:O.push({x:i,L:MD(w,Q(2,3)),b:6});
for(i=0;i<W/8;i++)FL.push([Q(0,W),Q(0,80)/10,Q(8,22)/10,c.pick("··*❄")]);
for(i=12+Q(0,6);i<62;i+=7+Q(0,9))SP.push([i,Q(0,9)]);
var SC=()=>{var Z=[],a=M.min(cl(T/900),1-cl((T-DN)/900)),q=(x,y,t,C)=>Z.push(X(x,y,t,C,{z:-1}));
a>.05&&Z.push(c.tile("~≈~~     ≈~       ",3,K(70,130,205,a),T/350,{z:-1}));
O.map(o=>{var n=o.L.length,e=M.abs(o.x-x0)*700/W,k=M.ceil(n*M.max(1-cl((T-e)/350),cl((T-DN-e)/350)));o.L.map((l,j)=>(j+=o.b-n+1+k)>o.b||q(o.x,j,l,j<o.b?"#eef8ff":"#a6d4f0"))});
FL.map((p,j)=>{var y=(p[1]+T*p[2]/1e3)%8-1|0,u=p[0]+M.sin(T/700+p[1])*1.5|0;j<a*FL.length&&!(y>3&&u>9&&u<65)&&q(u,y,p[3],"#dceeff")});
SP.map(p=>a>.5&&q(p[0],6,(T/140+p[1]|0)%9?"·":"✧",K(160,205,240,a)));
return Z},
bear=()=>["  ▄▄▄▄▄▄▄▄▄  ▄▖ "," ▟██████████▙"+(MO?"█▛▘":"██▄"),g(BG?"▐▌▜▌":"▜▌▐▛")].map((s,k)=>(s=FP?fl(s):s,A(BX+s.search(/\S/),4+BY+k,s.trim(),BC,{o:1}))).concat(A(BX+(FP?2:13),5+BY,MO?"°":EY,"#26313b",{bg:BC})),
add=(e,a,ms,o,ex,ft,co)=>{o=o||0;var y=4+o,Z=SC(),j,b=BE,R="#b07a48";
HN<0||Z.push(A(12-HN,6,"▄".repeat(2*HN+1),"#2f6db5"));
if(RO)for(Z.push(A(9,y-1,"/",R),A(10,y-2,b?"─╮":"/",R)),b||Z.push(A(11,y-3,"─╮",R)),j=y-2+b;j<=(IN||2+o);j++)Z.push(A(12-b,j,"│",I));
FH&&Z.push(A(12,3+o,FH,FC));
f.push({x,pose:c.P(e,a||HA,ft),ms,offset:o,props:Z.concat(bear(),ex).filter(p=>p),color:co});T+=ms};

// scene rises; walk to the spot, sit, chip a hole
for(i=0;i<6;i++)add(i<3?BK:FW,D,130);
for(;x!=x0;)x+=d,add(FW,D,70,0,0,x%2?"left":"right");
for(i=0;i<8;i++)HN=i>>1,o=i%2,add(o?"closed":FW,o?D:U,o?90:140,1,o&&[A(12+Q(-3,3),Q(4,5),"'",SK),A(12+Q(-3,3),5,"·",SK)]);
// cast; hum while a bear tiptoes in behind
for(RO=1,i=2;i<6;i++)IN=i,add(FW,0,i<3?300:80,1);
add("wink",0,250,1,[A(11,5,"°·°",SK)]);
for(i=0;BX<st;i++)w=i>8?st-BX>12?2:1:0,BX+=w,BG=i%2,o=i%14,add(i%19==9?"closed":FW,0,w>1?60:130,1,o<10&&B(5+(o>>2),3-(o>>2),"♪","chromeYellow"));
for(i=0;i<5;i++)BX=st+i%2,add(FW,0,220,1,i%2&&B(st+12,3,"sniff",I));
// bite! yank, flop
for(i=0;i<9;i++)BE=i%2,add(i<3?FW:"open",0,i%2?60:100,1,[A(10+Q(0,4),5,"·",SK),i>2&&B(4,2,"!",Y)]);
BE=1;add("closed",0,130);BE=0;
[5,3,2].map((v,k)=>(IN=v-1,add("open",0,60,-1,[k<2&&A(10,5,"°'·'°",SK),A(12,v,FS,FC)])));
for(IN=0,i=0;i<10;i++)o=-(i>5&&i<8),FH=i%2?FS:"<°))>~",add(i>5?"wink":FW,0,i>5?160:90,o,[A(12+Q(0,5),Q(4,5),"'",SK),i>5&&A(12+Q(-1,6),Q(0,1),"✦",c.rainbow(i))]);
// a bear! startle, dither
FH=FS;add(BK,0,550);add("closed",U,90,1);
[-1,-2,-2,-1,0].map(o=>add("open",U,80,o,[B(4,2+o,"!!","error")],0,"#ffd9c7"));
for(i=0;i<5;i++)add(i%2?FW:BK,0,i<4?260:400,0,[B(st+13,3,i>2?"♥":"?",i>2?PK:"text"),A(-1,3,"'",SK)]);
// toss the fish into its jaws
for(FH=0,i=1;i<13;i++)s=i/12,MO=i>7,add(BK,i<4?U:0,45,0,i<12&&A(M.round(12-17*s),M.round(3+2*s-16*s*(1-s)),FS,FC));
MO=0;EY="^";add(BK,0,110,0,[B(st+12,2,"CHOMP!",Y),A(st+14+Q(0,2),4,"·'·",FC)]);
for(i=0;i<9;i++)BY=-(i%4==1),add(i>5?"wink":BK,0,150,0,[0,1,2].map(k=>B(st+2+k*4,2-((i+k*2)%6>>1),"♥",PK)).concat(i<4&&B(st+12,2,"nom",Y)));
// it hops off; bye, phew; scene sinks
for(FP=1,i=0;BX>e0||i<22;i++)BX=M.max(e0,st-2*i),BY=-(i%2),BG=i%2,add(i<10?BK:i<17?"closed":FW,i<10&&i%4<2?U:0,70,0,[A(BX+2,2+BY,"♥",PK)].concat(i>10&&i<17&&[B(4,2,"phew",I),A(-1,3+(i>13),"'",SK)]));
for(RO=0,DN=T,i=0;i<12;i++)HN=i<3?2-i:-1,add(i==6?"closed":FW,D,100);
f.push({x,pose:"default",ms:300});
return f});
