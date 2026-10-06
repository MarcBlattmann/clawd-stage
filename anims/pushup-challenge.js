// Clawd ties on a headband and pumps push-ups under a sky counter; sweat flies, he reddens, nails a one-armed rep, collapses flat, then pops up flexing.
$cdA("pushup-challenge", { title: "Push-up challenge", w: 40 }, c => {
let G=c.G,R=c.R,P=c.P,T=c.T,M=Math,pt=[],h=0,n=0,fl=0,by=-3,bc="inactive",hb=0,q=0,lb,i,k,r,
x=c.clamp(c.x,1,c.mx-1),Y="chromeYellow",E="error",I="inactive",
f=c.walk(c.x,x),
col=()=>h>.03?c.rgb(215+35*h,119-79*h,87-47*h):void 0,
cc=()=>col()||"clawd_body",
add=(x,y,dx,dy,s,cl,g)=>pt.push({x,y,dx,dy,s,c:cl,g,a:-1}),
tk=()=>(pt=pt.filter(p=>++p.a<p.s.length)).map(p=>(p.a&&(p.x+=p.dx,p.y+=p.dy,p.g&&p.dy<1&&p.dy++),T(p.x,p.y,p.s[p.a],p.c))),
// sky counter box, number centred over Clawd's head
box=(s=lb||""+n)=>by<-2?[]:c.art(x+1,by,["╭─────╮","│     │","╰─────╯"],bc).concat(T(x+4-(s.length>>1),by+1,s,fl?Y:"text",{b:1})),
// headband sits on the head row, tail flaps
band=o=>hb?[T(x+2,G-1+o,"▄▄▄▄▄▄",E),T(x,G-1+o,q%2?"~-":"-~",E)]:[],
// hands stay planted on the ground row while the body moves; one=1: right hand lifted
hd=one=>[T(x-1,6,"▄▟",cc())].concat(one?[]:T(x+8,6,"▙▄",cc())),
sh=k=>T(x+(k%2?-2:10),5,k%2?"(":")",I),
sw=o=>{if(M.random()<h*1.3){let j=R(0,1);add(x+1+7*j,G-1+o,j*2-1,-1,"'''''.","rainbow_blue",1)}},
F=(pose,ms,o,ps)=>{q++;fl&&fl--;f.push({x,pose,ms,offset:o,color:col(),props:tk().concat(box(),band(o),ps||[])})};

// size up the challenge, headband drops from the sky
F(P("left"),300,0);F(P("right"),300,0);
for(i=-1;i<G-1;i++)F(P("open"),70,0,[T(x+2,i,"▄▄▄▄▄▄",E)]);
hb=1;F(P("closed"),120,0);F(P("wink","up"),350,0);
// counter slides in, stretch, get down, GO!
for(;by<0;by++)F(P("open"),70,0);
F(P("closed","up"),220,0);F(P("open"),150,0);
F(P("open","up"),90,1,hd());F(P("open"),350,0,hd());
lb="GO!";fl=4;F(P("wink"),300,0,hd());lb=0;

// reps: fast and fresh, then slower with trembling strain at the bottom
let N=R(8,12);
for(r=0;r<N;r++){
h=r/N*.8;let s=M.max(0,r-N+4)*2;
sw(0);F(P(r%3?"open":"closed","up"),80+r*9,1,hd());
for(k=0;k<s;k++){sw(1);F(P(k%2?"closed":"open","up"),R(80,130),1,hd().concat(sh(k)))}
n++;fl=3;add(x+8,1,0,-1,["+1","+1"],"success");sw(0);
F(P(s?"closed":"open"),70+r*10,0,hd());F(P("open"),s?220:70,0,hd())}

// the one-armed rep: wink, lift the arm, gold border
bc=Y;lb="1 ARM";fl=5;F(P("wink"),450,0,hd());F(P("open","one-up"),350,0,hd(1));lb=0;
F(P("closed","one-up"),260,1,hd(1));
for(k=0;k<10;k++){h=M.min(1,h+.03);sw(1);sw(1);F(P(k%3?"closed":"open","one-up"),R(70,120),1,hd(1).concat(sh(k)))}
n++;fl=6;add(x+8,1,0,-1,["+1","+1"],Y);
F(P("open","one-up"),350,0,hd(1).concat(T(x+9,0,"★",Y)));
for(k=R(2,4);k--;)F(P(k%2?"closed":"open","one-up"),R(90,140),0,hd(1).concat(sh(k)));

// arms give out: flat as a pancake, dust and steam
F(P("closed"),50,1,hd());
add(x-2,6,-1,0,"~~~··",I);add(x+10,6,1,0,"~~~··",I);
let fla=[T(x-1,6,"▄▄",cc()),T(x+8,6,"▄",cc())];
for(k=0;k<9;k++){by=+!k;add(x+R(1,7),5,0,-1,"░░·",I);F(P(k<7?"closed":"wink"),k?R(140,200):300,2,fla.concat(k&&k<4?T(x+2,3,"flop",I):[]))}

// pop up and flex while cooling down
F(P("open","up"),40,1);F(P("open","up"),60,0,[T(x+9,G-1,"!",Y,{b:1})]);
[P("closed","up","left"),P("wink","one-up"),P("open","up","right"),P("wink","up")].sort(()=>M.random()-.5).concat(P("wink","up")).forEach((p,i)=>{
h=M.max(0,h-.2);fl=2;F(p,R(220,320),0,[T(x+(i%2?-1:9),G-1,"✦",Y),T(x+(i%2?9:-1),G,"✧",Y)])});

// hop: headband flies off, bumping the counter out of the sky
h=0;F(P("open"),110,1);hb=0;by=-1;add(x+2,2,1,-1,["▄▄▄▄▄▄","-▄▄▄▄-"],E);
F(P("open","up"),90,-1);by--;F(P("open","up"),90,-1);by--;F(P("closed"),60,1);F(P("closed","up"),80,0);
while(pt.length)F(P("open"),90,0);
F(P("wink"),300,0);f.push({pose:"default",x,ms:200});
return f});
