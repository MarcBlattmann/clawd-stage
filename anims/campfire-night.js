// Night forest camp across the stage: Clawd roasts a marshmallow, it catches fire, he blows it out and eats it.
$cdA("campfire-night",{title:"Campfire",w:70,scene:1},function(c){
var f=[],W=c.W,G=c.G,M=Math,S=M.sin,Q=M.random,N=M.round,R=c.rng(c.R(1,1e6)),T=0,DN=1e9,P=c.P,X=c.T,rg=c.rgb,pk=c.pick,a,i,j,Z,
x=c.x,cx=c.clamp(x,0,c.mx-8),fx=cx+10,op=cx<W/2?W-10:0,MO=12+R()*(W-36)|0,FL=0,SL=0,MC=0,BU=0,SK=-9e3,SF=SK,HO=SK,OE="o",
I="inactive",RT="right",LF="left",U="one-up",CL="closed",D="default",RU=P(RT,U),
E=()=>Array(W).fill(" "),NR=[...Array(8)].map(E),FT=[E(),E(),E()],TN=[[cx>7?cx-8:cx+17,"#c0703a",1]],ST=[],
ok=p=>p<W-4&&(p<3||p>64)&&(p<cx-17||p>cx+23)&&(p<op-7||p>op+10),
put=(A,L,y,p)=>L.map((w,r)=>{for(j=0;j<w;j++)A[y+r][p-(w>>1)+j]=w>1?j?j<w-1?"█":"▙":"▟":"▲"}),
pine=(p,h)=>{put(NR,[1,3,5,3,5,7].slice(0,h-1),7-h,p+3);NR[7][p+3]="█"};
// scenery, kept out of the banner box
pine(op,7);
for(i=R()*3|0;i<W;)if(ok(i)){R()<.35?TN.push([i,c.hsv(R()*360,.45,.75),R()<.4]):pine(i,4+R()*3|0);i+=9+R()*6|0}else i+=2;
for(i=R()*4|0;i<W;i+=4+R()*6|0)put(FT,R()<.3?[1,3,5]:[0,1,3],0,i);
for(i=0;i<W;i++)(i<10||i>64)&&R()<.15&&(NR[6][i]=pk(",'\"")),i<W/9&&ST.push([R()*W|0,R()*2|0,R()]);
[NR,FT].map(A=>A.forEach((r,k)=>A[k]=r.join("")));
var q=(x,y,t,C)=>Z.push({x,y,t,c:C,z:-1}),
sm=(t,x,y,n,u)=>{if(T-t<1500)for(n=0;n<3;n++)u=((T-t)/400+n/3)%1,q(x+N(S(n+u*3)),y-N(u*4),u<.5?"▒":"░",I)},
sc=o=>{a=M.max(0,M.min(1,T/900,1-(T-DN)/900));Z=[];
var k=N(7*(1-a)),L=N(FL),h=G+o,m=x+9+SL,n,u,v,w;
if(a>0){
FT.map((t,r)=>r+k<3&&q(0,1+r+k,t,"#2f6458"));
// stars, the first few also fireflies
ST.map((s,n)=>{a>s[2]&&q(s[0],s[1],S(T/300+s[2]*60)>.8?"✦":"·",s[2]>.5?"text":I);
u=s[0]+3*S(T/900+n)|0;v=2+s[0]%4+N(S(T/600+n*3));w=S(T/250+n*7);
a>.7&&n<3+W/25&&w>-.2&&(v<4||u<10||u>64)&&q(u,v,w>.5?"•":"·",w>.5?"#e8ff6a":"#8fb040")});
a>.4&&["▄██▄","▀██▀"].map((t,r)=>q(MO,r,t,"#f2e6b0"));
NR.map((t,r)=>q(0,r+k,t,"#3f8250"));q(0,6+k,NR[7],"#7a5232");
TN.map(([p,C,l])=>{["  ◢◣"," ◢██◣","◢█▌▐█◣"].map((s,r)=>q(p,4+r+k,s,C));l&&q(p+2,6+k,"▐▌",rg(255,170+70*Q(),60))});
q(op+5,1+k,"{"+OE+","+OE+"}","#c9a26b");q(op+6,2+k,"┴─┴─","#8a6040");
T-HO<1100&&(T-HO)%650<450&&q(op+6,0,"hoo",I);
q(fx-1,6+k,"●     ●",I);q(fx,6+k,"▄▄▄▄▄","#8a5a36")}
// fire
if(L){q(fx+1,6,"▄▄▄","#ff5a1e");q(fx+(L<3),5,["▗▄▖","▟█▙","▟███▙"][L-1],"#ff8a1e");
if(L>1)q(fx+1+(Q()*3|0),5,"▓","#ffd23a"),q(fx,4,"     ".replace(/ /g,_=>Q()<L*.18?pk("▲^'"):" "),rg(255,90+Q()*120,40));
for(n=0;n<L*2;n++)u=(T/1100+n/L/2+n*.37)%1,q(fx+2+N(S(n*5+u*6)*2),4-N(u*6),u<.4?"*":"·",rg(255,220-150*u,60))}
sm(SF,fx+2,5);sm(SK,m,h-1);
SL&&q(x+9,h,"─".repeat(SL),"#b08a5a");MC&&q(m,h,"■",MC);
BU&&q(m,h-1,BU>2?pk("▲♦"):"'^"[BU-1],rg(255,80+Q()*100,40));
return Z},
add=(p,ms,o=0,ex)=>{var pr=sc(o).concat(ex||[]),b=a,l=(.7+.3*Q())*FL/24;
f.push({x,pose:p,ms,offset:o,props:pr,paint:i=>rg(215-45*b+60*(i*=l),119-35*b+60*i,87-25*b+10*i)});T+=ms},
hold=(p,ms,o,ex)=>{for(var e=T+ms;T<e;)add(p,100,o,ex)},
ow=op<cx?LF:RT,tx=(t,y,C)=>[X(cx+1,G-y,t,C||I)];
// walk to the pit, light it
hold(P(LF),400);hold(P(RT),400);
for(j=cx>x?RT:LF;x!=cx;)x+=cx>x?1:-1,add(P(j,0,x%2?LF:RT),50);
hold(P(RT),300);
add(P(RT),250,1);
for(i=0;i<3;i++)add(P(i%2?CL:RT),90,1,[X(fx+1+i,5,"✦","#ffd23a")]);
FL=1;add(P(RT),200,1);FL=2;add(P(),150);FL=3;add(P(CL),120);
hold(P(CL,"up"),1000,0,tx("ahh~",2));
// owl hoots
HO=T;hold(P(),300);hold(P(ow),700);OE="-";add(P(ow),150);OE="o";add(P("wink"),300);
// roast, hum
MC=rg(245,242,232);for(SL=0;SL<3;)SL++,add(RU,90);
for(i=0;i<26;i++)j=i/25,MC=rg(245-20*j,242-70*j,232-150*j),
add(P(i==9?CL:i>18?"wink":RT,U,i%6<3?0:LF),100,0,i>3&&i<20&&[X(cx+1+i%6,G-1-(i%6>>1),i%2?"♪":"♫","text")]);
// fire! panic
BU=3;add(RU,300);OE="O";
add(P(0,U),150,0,[X(cx+4,G-2,"!","error",{b:1})]);
for(i=0;i<10;i++)j=i%2,MC=rg(150-8*i,100-6*i,70-3*i),add(P(j?CL:0,j?"up":U,j?LF:RT),90,-j,[X(cx+3,G-2-j,"!!","error",{b:1})]);
// blow it out, eat it
OE="o";SL=2;add(P(0,U),250);
for(i=0;i<7;i++)BU=M.max(0,3-(i>>1)),add(P(CL,U),110,0,[X(cx+8,G-1,"  ~".slice(2-i%3),"text")]);
SK=T;MC="#5a4636";hold(RU,600,0,[X(cx+11,G-2,"...",I)]);add(P("wink",U),300);
for(;SL;)SL--,add(RU,120);
add(P(CL,U),150);MC=0;
for(i=0;i<8;i++)add(P(i%2?CL:0),130,i%2,tx(i%4<2?"nom":" nom",1,"text").concat(i<3?X(cx+9,G+1+i,"·","#e8d8b0"):[]));
for(i=0;i<8;i++)add(P(i<5?CL:"wink","up"),110,i>>1==1?-1:0,tx("mmm",2).concat(X(cx+5,G-3-(i>>2),"♥","error")));
// fire dies, forest fades
FL=2;hold(D,400);FL=1;HO=T;hold(P(CL,"up"),500,0,tx("*yawn*",2));FL=0;SF=T;hold(P(ow),400);add(P("wink"),200);
DN=T+200;hold(D,1200);
f.push({x,pose:D,ms:300});
return f;
});
