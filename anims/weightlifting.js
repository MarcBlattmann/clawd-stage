// Clawd strains red at a barbell, presses it overhead, wobbles, drops it (THUD), flexes; it sinks through the floor.
$cdA("weightlifting", { title: "Heavy lift", w: 40 }, c => {
let G=c.G,R=c.R,P=c.P,T=c.T,K=c.pick,M=Math,pt=[],h=0,i,k,d,j,o,ps,Y="chromeYellow",I="inactive",
U=P("open","up"),C=P("closed"),
x=c.clamp(c.x,c.W>89?62:9,c.mx-9),
pc=K(["error","permission","success",Y]),S="             ",
col=()=>h>.05?c.rgb(215+30*h,119-80*h,87-50*h):void 0,
// barbell behind Clawd: bar on row y, 3-row plates, shifted d
bb=(y,d=0)=>[T(x+d-6,y,"═".repeat(21),"text",{z:-1})].concat(c.art(x+d-5,y-1,["▗█▖"+S+"▗█▖","███"+S+"███","▝█▘"+S+"▝█▘"],pc,{z:-1})),
// particles (behind): glyph per frame; g 1 falls, -1 rises once then drifts
tk=()=>(pt=pt.filter(p=>++p.a<p.s.length)).map(p=>(p.x+=p.dx,p.y+=p.dy,p.g>0?p.dy<1&&p.dy++:p.g&&(p.dy=0),T(p.x,p.y,p.s[p.a],p.c,{z:-1}))),
add=(x,y,dx,dy,s,cl,g)=>pt.push({x,y,dx,dy,s,c:cl,g,a:-1}),
sweat=o=>{if(R(0,9)<h*8){k=R(0,1);add(x+1+6*k,G-1+o,k*2-1,-1,"''''","permission",1)}},
arms=d=>[T(x+d,G-1,"▐",col()),T(x+d+8,G-1,"▌",col())],
tx=(y,w,cl,d=2)=>T(x+d,y,w,cl||"text",{b:1}),
f=c.walk(c.x,x,{ms:40,fx:r=>{r.props=bb(5)}}),
F=(pose,ms,o,ps,d=0)=>f.push({pose,ms,offset:o,x:x+d,color:col(),props:tk().concat(ps)});

// size it up, chalk the hands
F(P("left"),320,0,bb(5));F(P("right"),320,0,bb(5));F(C,140,0,bb(5));
for(i=0;i<4;i++){if(i%2)for(k=0;k<3;k++)add(x+K([0,8])+R(-1,1),G+1,R(-1,1),-1,"░░·","text");F(P("wink",i%2?"down":"up"),130,0,bb(5))}

// floor attempts; on the last one the bar finally budges
let n=R(1,2);
for(j=0;j<=n;j++){
F(U,220,1,bb(5));
for(i=0;i<9+j*3;i++){h=M.min(1,h+.035);sweat(1);d=i%2;
F(P(i%4?"closed":"open","up"),R(40,70),1,bb(5,j==n&&i>7?d:0).concat(T(x+2,2,"hnnnnnng!".slice(0,2+i/2),I)),d)}
if(j<n){F(C,420,1,bb(5));ps=bb(5).concat(T(x+3,2,"huff",I));F(C,260,0,ps);F(P("open","one-up"),120,0,ps);F(U,120,0,bb(5));h-=.1}}

// clean to the shoulders, press, lock out
[4,3].forEach(y=>{F(U,70,0,bb(y));
for(i=0;i<7;i++){h=M.min(1,h+.03);sweat(0);d=i%2;F(P(i%3?"closed":"open","up"),R(50,90),0,bb(y,d),d)}});
F(U,90,0,bb(2).concat(arms(0)));

// hold: wobbly legs, nervous glances, one scary sag
let L=14+R(0,8);
for(i=0;i<L;i++){d=[0,1,0,-1][i%4]*R(0,1);sweat(0);k=M.abs(i-L/2)<1.5;o=+(k&&i<L/2+.5);
ps=bb(2+k+o,d).concat(k?[]:arms(d));if(i%2)ps.push(T(x+d-1,6,"(",I),T(x+d+9,6,")",I));
F(P(k?"closed":K(["closed","left","right","closed"]),"up",K(["both","left","right"])),k?200:R(70,150),o,ps,d)}

// let go: it falls past his ducked head, THUD, dust
F(U,300,0,bb(2).concat(arms(0),tx(G-1,"!","error",4)));
F(P("open"),70,0,bb(2));F(C,40,0,bb(3));F(C,40,1,bb(4));
for(k=-1;k<2;k+=2){for(i=0;i<12;i++)add(x+4+k*R(8,11),R(3,6),k*R(0,1),-R(0,1),"▓▒▒░░░··".slice(R(0,3)),I,-1);
add(x+4+10*k,6,k,0,"~~~~~","subtle")}
k=K(["THUD!","CLANG","BOOM!"]);
F(C,60,1,bb(5,1).concat(tx(1,k)));F(C,70,-1,bb(4).concat(tx(1,k)));
F(P("open"),90,0,bb(5,-1).concat(tx(0,k)));F(P("open"),100,0,bb(5).concat(tx(0,k)));
for(i=0;i<5;i++)F(P(i==2?"closed":"open"),110,0,bb(5));

// flex while cooling down
[P("wink","up"),P("closed","up","left"),P("wink","one-up"),P("open","up","right"),P("wink","up")].forEach((p,i)=>{
h=M.max(0,h-.22);F(p,R(220,320),0,bb(5).concat(T(x+(i%2?-1:9),G-1,"✦",Y),T(x+(i%2?9:-1),G,"✧",Y),i>1?[tx(1,"PR!",Y,3)]:[]))});

// creak... the floor gives way under it
F(P("open"),260,0,bb(5));
for(i=0;i<4;i++)F(P(i<2?"left":"right"),90,0,bb(5,i%2*2-1));
for(k=6;k<9;k++){for(j=-1;j<2;j+=2)add(x+4+8*j,5,j*R(0,1),-1,"'.",I,1);
F(P(k<8?"closed":"open"),180,-(k<8),bb(k).concat(k<8?tx(2,"!","error",4):[]))}
while(pt.length)F(P(K(["left","right"])),110,0,[]);
F(P("closed","up"),220,0,[]);F(P("wink"),320,0,[]);f.push({pose:"default",x,ms:200});
return f});
