// Four Clawds play telephone across the stage: "I love code" becomes "I love toads", then "Ice cold toes"; the shout brings snow and icy toes, confusion, then laughter.
$cdA("telephone-game",{title:"Telephone",w:64},function(c){
var G=c.G,P=c.P,R=c.R,T=c.T,W=c.W,O=Math.round,ps=[],tx=[],ice=0,sn=0,i,t,
E="left",H="right",U="one-up",
sl=[0,1,2,3].map(i=>O(i*c.mx/3)),m=c.clamp(O(c.x*3/c.mx),0,3),
f=c.walk(c.x,sl[m],{ms:35}),
C="permission success autoAccept chromeYellow".split(" ").sort(()=>R(-1,1)),
A=sl.map((s,i)=>({x:i<m?-9-12*(m-1-i):i>m?W+12*(i-m-1):s,o:0,p:P(),c:i==m?"clawd_body":C[i]})),
em=(x,y,t,k,v,h,l,e)=>ps.push({x,y,t,c:k,v,h,l,e}),
// render; particles drift, snow falls behind
S=ms=>{var pr=tx,ac=[],F,j;tx=[];
 for(j=sn;j--;)em(R(0,W-1),0,c.pick("❄*·"),"#cfefff",.4,R(-1,1)/5,20,{z:-1});
 ps=ps.filter(p=>(pr.push(T(O(p.x),O(p.y),p.t,p.c,p.e)),p.x+=p.h,p.y+=p.v,--p.l>0&&p.y<7&&p.y>-1&&p.x>-4&&p.x<W));
 A.map((a,i)=>{var o={x:c.clamp(a.x,-9,W),offset:a.o,pose:a.p,color:a.c};
  ice&&(o.paint=(q,r)=>r>1?"#a8e0ff":a.c);i==m?F=o:ac.push(o)});
 F.ms=ms;F.props=pr;F.actors=ac;f.push(F)},
// walk everyone with a target there, 2 cols/step
Mv=(tg,ms,fn)=>{for(var t=0,d=1;d;t++){d=0;fn(t);A.map((a,i)=>{var g=tg[i],s=g>a.x?1:-1;if(g!=null&&g!=a.x){d=1;a.x+=s*Math.min(2,(g-a.x)*s);a.p=P(s>0?H:E,"down",t%2?E:H)}});d&&S(ms)}},
wv=t=>A[m].p=P(m&&(m>2||t%10<5)?E:H,t%4<2?U:"down"),
// bubble: sg alternates plain/misheard words, n letters shown
B=(cx,sg,n,dc,L,tc,tl)=>{var w=sg.join("").length+4,x=c.clamp(O(cx-w/2),0,W-w),k=0,b=L?"╔═╗║╚╝":"╭─╮│╰╯",h=b[1].repeat(w-2);
 tx.push(T(x,0,b[0]+h+b[2],dc),T(x,1,b[3]+" ".repeat(w-2)+b[3],dc,{o:1}),T(x,2,b[4]+h+b[5],dc),T(tc,3,tl,dc));
 sg.map((s,j)=>{var v=s.slice(0,Math.max(0,n-k));v&&tx.push(T(x+2+k,1,v,j%2?"warning":L?"error":"inactive",{b:L||j%2?1:0}));k+=s.length})},
hd=(i,t,k)=>tx.push(T(A[i].x+4,G-1+A[i].o,t,k||A[i].c,{b:1})),
look=(i,e,o)=>A.map((a,j)=>{j-i&&(a.p=P(e||(j<i?H:E)),a.o=o|0)}),
// s whispers to s+1: meet halfway, psst, type it, listener mishears
Wh=(s,sg)=>{var a=A[s],b=A[s+1],g=O((a.x+b.x)/2),L=sg.join("").length,ok=t=>look(s+.5);
 Mv({[s]:g-6,[s+1]:g+6},35,ok);
 a.p=P(H,U);tx.push(T(a.x+9,3,"psst","subtle"));S(260);
 for(i=1;i<=L+4;i++){B(a.x+10,sg,i,"subtle",0,a.x+8,"/");b.p=P(i==L+2?"closed":E);S(i>L?100:40)}
 a.p=P(H);b.p=P();hd(s+1,c.pick(["?","huh?","eh?"]),"inactive");S(320);
 b.o=1;S(90);b.o=0;b.p=P(H);hd(s+1,"!","warning");S(200);
 Mv({[s]:sl[s],[s+1]:sl[s+1]},32,ok)};
// friends stroll in from both edges
Mv(A.map((a,i)=>i-m?sl[i]:null),32,wv);
look(-1,"open");S(250);
A[0].p=P("open",U);hd(0,"!","warning");look(0);S(300);
A[0].p=P("wink",U);hd(0,"♥","error");S(350);
Wh(0,["I love code"]);
Wh(1,["I love ","toads"]);
Wh(2,["","Ice cold toes"]);
// the last one shouts it: sound waves, flinch, snow
var z=A[3];look(3);S(300);
z.p=P();S(200);z.o=1;z.p=P("closed");S(150);
for(i=0;i<14;i++){z.o=i<3?-1:0;z.p=P("open","up");B(z.x+4,["ICE COLD TOES!"],14,"warning",1,z.x+4,z.o?" ":"▼");
 i%2||i>5||em(z.x-1,3,"(","warning",0,-3-z.x/16,14);look(3,i<2?"closed":0,i<2);sn=i>4?Math.min(4,W/30|0):0;S(i<5?60:90)}
// brrr: icy toes, everyone shivers
ice=1;for(i=0;i<8;i++){A.map((a,j)=>{a.x+=i%2?-1:1;a.p=P("closed");(i+j)%4||hd(j,"brr","#a8e0ff")});S(70)}
// confused: question marks pop up one by one
var ord=[3,2,1,0].sort(()=>R(-1,1)),Q=[];
for(t=0;t<10;t++){t%2||t>7||Q.push(ord[t/2]);Q.map(i=>hd(i,"?"));A.map((a,i)=>a.p=P(i?i<3?(t+i)%4<2?E:H:E:H));sn=t<5?2:0;S(130)}
// protest, blank beat, laughter
look(0);A[0].p=P("closed",U);for(i=1;i<17;i++){B(A[0].x+12,["I said ","code","!"],i,"subtle",0,A[0].x+8,"/");S(i<12?40:110)}
look(-1,"open");S(350);
for(t=0;t<16;t++){A.map((a,i)=>{var u=(t+i)%4<2&&t<14;a.o=u?-1:0;a.p=P("closed",u?"up":"down");(t+i)%3||t>12||em(a.x+R(2,5),2,c.pick(["ha","HA","haha","ha!"]),c.rainbow(R(0,9)),-.4,R(-1,1)/3,5)});t==8&&(ice=0);S(85)}
// friends wander off to the nearest edge
A.map((a,i)=>a.p=P(i<m?E:i>m?H:"open",U));S(300);
Mv(A.map((a,i)=>i<m?-9:i>m?W:null),32,wv);
while(ps.length)S(60);
f.push({pose:"default",ms:300});return f});
