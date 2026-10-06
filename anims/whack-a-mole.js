// Moles pop up all across the stage; Clawd bonks them ever faster, until one bonks him from behind.
$cdA("whack-a-mole",{title:"Whack-a-mole",w:64},c=>{
var M=Math,RD=M.round,W=c.W,T=c.T,R=c.R,K=c.pick,rnd=M.random,f=[],x=c.x,cx=(W>>1)-8,LR=["left","right"],
DT="#8a5c32",MO="#b8906a",HD="error",WD="#d6a86c",Y="warning",SU="subtle",B={b:1},Z={z:-1},FB={bg:MO,o:1,z:-1},ST=[Y,"text","chromeYellow"],
n=M.max(4,W/13|0),H=[],pt=[],d=x<W/2?1:-1,sc=0,mo=0,sv=-1,pk=0,q=0,i,k,t,o,e,h,r;
for(i=0;i<n;i++)H.push({x:RD(1+i*(W-7)/(n-1))});
// Q: prop laid out for a right-facing swing, mirrored when he faces left. L: mallet 0 up, 1 back, 2 swing, 3 hit.
var Q=(dx,y,s,k,ex)=>T(d>0?x+dx:x+9-dx-s.length,y,s,k,ex),
L=(s,o=0,a=0)=>s>2?[Q(11+a,3+o,"▄▄▄",HD),Q(11+a,4+o,"███",HD),Q(9+a,4+o,"──",WD)]:[Q([7,5,10][s]+a,2+o,s?"██":"███",HD),Q([8,7,9][s]+a,3+o,(d>0?"│╲╱":"│╱╲")[s],WD)],
DE=()=>LR[d+1>>1],
// Hole v: 1 mound, 2 open. Mole l: 1 peek, 2 up, 3 squashed.
HL=(p,v)=>v?[T(p+(v<2),6,v<2?"▄▄▄":"▟▀▀▀▙",DT,Z)]:[],
MD=(p,l,s,o)=>(l>1?[T(p,5+o,s,"#2b1a10",FB),T(p+1,5+o,"▼","#ff8fa8",FB)]:[]).concat(l>0&&l<3?T(p,l<2?5:4+o,"▗▄▖",MO,Z):[],o?T(p,5,"▀▀▀",MO,Z):[]),
bur=(x,y,m,g,ks)=>{while(m--)pt.push({x,y,vx:rnd()*3-1.5,vy:-rnd()*1.2-.2,g:K(g),k:K(ks),t:R(4,9),gr:.25})},
scn=()=>{var a=[];
 H.forEach(h=>{h.p?h.p--:!h.l&&h.v>1&&rnd()<pk&&(h.p=R(4,12));a=a.concat(HL(h.x,h.v),MD(h.x+1,h.l||(h.p&&1),h.l>2?"× ×":"• •",0))});
 pt=pt.filter(p=>(p.x+=p.vx,p.y+=p.vy,p.vy+=p.gr,--p.t>0&&p.y<7));
 pt.forEach(p=>a.push(T(RD(p.x),RD(p.y),p.g,p.k,Z)));
 sv<0?a.push(T(cx+1,0,"WHACK-A-MOLE",Y,B)):sv&&a.push(T(cx,0,"CLAWD "+sc,sv>1?SU:Y,B),T(cx+9,0,"MOLES "+mo,sv<2&&mo?HD:SU,B));
 return a},
F=(e,a,ms,ex,o,ft,co)=>f.push({x,pose:c.P(e,a,ft),ms,offset:o||0,props:scn().concat(ex||[]),color:co||void 0}),
G=(ms,ex,o,e,ft)=>F(e||DE(),d>0?"one-up":"up",ms,ex,o,ft);

// Holes pop up, spraying dirt; a mallet drops into his hand.
for(t=0;t<16;t++){H.forEach((h,i)=>{e=t-(i*12/n|0);h.v=e<0?0:e<2?1:2;e==1&&bur(h.x+2,5,3,"·°'",[DT,WD])});F(LR[t>>2&1],0,50)}
for(o=-6;o<1;o++)o<-1?F(o<-3?"open":DE(),0,45,L(0,o)):G(45,L(0,o));
G(220,L(0).concat(Q(4,3,"!",Y,B)));G(350,L(0),0,"wink");sv=1;

// Rounds, each faster: dash to a mole and bonk it. Once it ducks in time.
var N=R(6,8)-(W>150),la=-1,mr=R(1,N-2),tg,tx,ok=(e,hx)=>e>0?hx>=10+q:hx+15+q<=W;
for(r=0;r<N;r++){
 q=r<N-1?0:5;pk=.006+r*.002;
 do{tg=R(0,n-1);h=H[tg];e=x+4<h.x?1:-1;ok(e,h.x)||(e=-e)}while(tg==la||!ok(e,h.x));
 la=tg;tx=e>0?h.x-10:h.x+6;h.p=0;h.l=1;
 for(k=0;x!=tx;k++){t=tx-x;d=M.sign(t);x+=d*M.min(2,t*d);k>2&&(h.l=2);G(M.max(22,48-r*4),L(0).concat(r>1?Q(-2,5,"≡",SU):[]),0,0,LR[k&1])}
 d=e;h.l=2;
 for(i=r==mr?2:1;i--;){
  G(M.max(60,200-r*25),L(0));G(M.max(45,120-r*12),L(1,-1),-1);G(35,L(2));
  if(i){h.l=0;bur(h.x+2,5,6,"░▒·",[DT,SU]);
   [1,0,0,0,0,0].forEach((o,k)=>{k>2&&(h.l=k<4?1:2);G(k<5?90:250,o?L(3,1).concat(Q(11,1,"THUD",SU)):L(0).concat(Q(4,3,"?",Y,B)),o,o&&"closed")})}
 }
 h.l=3;sc++;bur(h.x+2,3,7,"✦✧*·",ST);
 pt.push({x:h.x+1,y:3,vx:0,vy:-.35,gr:0,g:"+1",k:"success",t:8});
 e=K(["BONK!","WHACK!","BOP!","THWACK!"]);
 for(k=0;k<4;k++)G(k?55:90,L(3).concat(T(h.x+2-(e.length>>1),1,e,k%2?Y:HD,B)),0,k<2&&"closed");
 h.l=0;G(60,L(0),0,q&&"wink");
}

// Victory hops while a mole digs out behind him and raises its own mallet.
pk=0;e=d>0?x-4:x+10;H.forEach(h=>M.abs(h.x+1-e)<5&&(h.x=e-1));
var bh=(s,o=0,m)=>HL(e-1,s).concat(MD(e,s-2,"` ´",o),m?m>2?L(3,0,-8).concat(Q(-1,4,"──",WD)):L(m*2-2,o,-11):[]),
DR=k=>k<2?L(2,k*2):L(3,2);
[0,-1,-1,0,-1,-1,0].forEach((o,k)=>F(k%3?"wink":"closed","up",100,L(0,o).concat(bh(k>3?1:0)),o));
[[2,200],[3,260,"♪"],[4,260,"♫"],[4,R(400,700),0,0,1],[4,80,0,-1,2]].forEach(a=>F(a[2]?"wink":DE(),"up",a[1],L(0).concat(bh(a[0],a[3],a[4]),a[2]?Q(4,2,a[2],Y):[])));
// BONK! His mallet topples, stars circle his head, the mole snickers and ducks.
mo=1;bur(x+4,3,8,"✦★✧*",ST);
for(k=0;k<20;k++){
 for(t=[],i=0;i<3&&k<15;i++)o=k*.6+i*2.1,t.push(Q(4+RD(5*M.cos(o)),2+RD(M.sin(o)),"✦★✧"[i],ST[k%2*2]));
 F(k<14?"closed":LR[k&1],0,k?80:120,t.concat(DR(k),k<5?bh(4,-1,3).concat(Q(1,1,"BONK!",k%2?Y:HD,B)):k<9?bh(4).concat(Q(-6,2,"hehe",WD)):bh(M.max(0,3-(k-9>>1)))),k<12?1:0,LR[k>>1&1],k<2&&HD);
}
// He glares back and grumbles; the holes sink outward.
o=LR[1-d>>1];F(o,0,300,DR(3));F(o,"one-up",400,DR(3).concat(Q(3,3,"#@!",HD,B)));sv=2;
for(t=0;t<14;t++){H.forEach(h=>{e=t-(M.abs(h.x-x)*8/W|0);h.v=e<0?2:e<2?1:0});t>9&&(sv=0);F(t<6?DE():"open",0,60,t<4?DR(3):[])}
f.push({x,pose:"default",ms:300});
return f});
