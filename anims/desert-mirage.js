// Dunes rise; thirsty Clawd chases an oasis that is a mirage, sulks, then finds a real well and drinks.
$cdA("desert-mirage",{ scene: 1,title:"Desert mirage",w:70},c=>{
var f=[],W=c.W,mx=c.mx,T=c.T,R=c.R,M=Math,rd=M.round,rn=M.random,sn=M.sin,cl=c.clamp,t=0,v=0,hu=1,vu=0,oq=-1,wo=9,by=6,vx,vy,i,k,n,q,
x=c.x,d=x>mx/2?-1:1,L="left",Rt="right",E=d>0?Rt:L,C="closed",K="wink",U="one-up",rr=c.rng(R(1,9e5)),Z={z:-1},
GR="#55b955",WA="#5ab4fa",BR="#a56e41",SA="#dcaf6e",Y="chromeYellow",
a=rr()*9,b=rr()*9,hf=[],hn=[],cx=[],sh=[],sx=d>0?W*.8|0:W*.12|0,
D=M.min(d>0?mx-8-x:x-8,R(36,46)),xe=x+d*D,xl=x+d*(rd(D*.65)+3),wl=d>0?xe+10:xe-8,
OA=[[7,6,"▄▄▄▄▄▄▄▄▄",WA],[8,5,"~  ~  ~","#aadcff"]],
hc=u=>c.rgb(215+30*u,119-34*u,87-30*u),bk=(x,y,s)=>T(x,y,s||"▙▄▟",BR),bh=()=>d>0?x-1:x+9,
// dune row from half-row heights (nb: near, skips the banner box)
row=(H,o,y,h,nb)=>{for(var s="",j=0,u,g=j=>(nb&&j>9&&j<65?0:M.max(nb&v>.2,rd(H[j]*v)))-o;j<W;j++){u=g(j);
s+=u>1?(g(j-1)<2?"▟":g(j+1)<2?"▙":"█"):u>0?(g(j-1)<1?"▗":g(j+1)<1?"▖":"▄"):" "}return T(0,y,s,c.hsv(h,.5,.2+.6*v),Z)};
for(k=-1;k<=W;k++){hf[k]=1.6+1.4*sn(k*.13+a)+.8*sn(k*.31+b);hn[k]=1.5+1.1*sn(k*.07+b)+.6*sn(k*.23+a)}
for(k=R(1,3);k<W-5;k+=R(12,22))if((k<5||k>65)&&M.abs(k-wl-1)>8)cx.push(k);
for(k=0;k<W/12;k++)sh.push([rr()*W|0,1+rr()*3|0]);
[0,16].forEach(p=>OA.push([p,2,"▄▀▀█▀▀▄",GR],[p,3,"▘  ▐  ▝",GR],[p+3,4,"▌",BR],[p+3,5,"▐",BR],[p+2,6,"v v",GR]));
var bg=t=>{if(v<=0)return[];var y=rd(3-3*v),k=(t/4|0)%2,p=[row(hf,2,2,38),row(hf,0,3,30),row(hn,2,5,40,1),row(hn,0,6,33,1)];
if(y<3)p.unshift(T(sx-2,y,(k?"\\ ":"  ")+"▗▟█▙▖"+(k?" /":""),Y,Z),T(sx-2,y+1,(k?"/ ":"  ")+"▝▜█▛▘"+(k?" \\":""),Y,Z));
if(v>.6)sh.forEach((s,k)=>{if((t*.2+k*1.7|0)%3)p.push(T(s[0]+rd(2*sn(t*.15+k)),s[1],(t/3+k|0)%2?"~ ~":" ~~","#ebcd96",Z))});
cx.forEach((j,i)=>p.push(...c.art(j,(i%2?5:4)+rd(3-3*v),i%2?["▙█▟"," █"]:["▐ █ ▌","▝▀█▀▘","  █"],GR,Z)));
return p},
// mirage: letters melt into ripples
O=()=>OA.map(a=>T(xl-7+a[0]+(rn()<.5-oq/3?R(-1,1):0),a[1],a[2].replace(/./g,h=>h==" "||rn()<oq?h:rn()<.3?"~":" "),a[3],Z)),
WL=o=>{var j,p=c.art(wl,2+o,[" ▗▄▄▄▖","▟█████▙","│     │","│     │"],"#d2553c");
for(j=4;j<by;j++)p.push(T(wl+3,j+o,"│","inactive"));if(by>3)p.push(bk(wl+2,by+o));p.push(T(wl,6+o,"█▓▓▓▓▓█","#a59687"));return p},
F=(e,a,pr,ms,o,ft)=>{var r={x:x,pose:c.P(e,a,ft),props:[...bg(t),...pr||[]],ms:ms||90,offset:o|0};if(hu>=0)r.color=hc(hu);t+=r.ms/50;
if(vu==1){vx=x+3+rd(9*M.cos(t*.13));vy=sn(t*.13)>0?0:1}else if(vu){vx+=d*3;vy-=.34;if(vy<0)vu=0}
if(vu)r.props.push(T(vx,M.floor(vy),vu>1||(t/3|0)%4==0?"\\v/":"-v-","inactive",Z));
if(oq>=0)r.props.push(...O());if(wo<5)r.props.push(...WL(wo));f.push(r)},
st=(e,a,ms,pf)=>{x+=d;F(e,a,pf&&pf(),ms,0,x%2?L:Rt)};
// trudge
for(i=1;i<13;i++){v=hu=i/12;F(i<5?L:i<9?Rt:C)}
vu=1;F(C,U,[T(x+9,3,"'",WA)],260);F(E,U,[T(x+10,2,"'",WA)],120);
for(n=rd(D*.25),i=0;i<n;i++)st(i%5==3?C:E,0,i%2?150:100,()=>i%4<3?[T(bh(),4+i%4,"'",WA)]:[]);
// oasis! race, dive, gone
for(k=1;k<9;k++){oq=M.min(1,k/4);F(k>2&&k<5?C:E,k>5?"up":0,k>4?[T(x+4,2-(k==6),"!",Y,{b:1})]:[],k<5?150:110,k==6?-1:0)}
for(n=M.abs(xl-3*d-x),i=0;i<n;i++){oq=cl((n-i)/(n*.5),0,1);st(E,i%2?"up":U,55,()=>i%2?[]:[T(bh(),6,"°",SA)])}
oq=0;[-1,-2,-1].forEach(o=>{x+=d;F(C,"up",0,80,o)});oq=-1;
F(C,"up",[T(x-2,6,"▒░         ░▒",SA),T(x+1,3,"·  °  ·",SA)],100,1);
F(C,0,[T(x-1,6,"·         ·",SA)],550,1);F(C,0,0,200);
[L,Rt,L,Rt].forEach((e,k)=>F(e,k>2?U:0,[T(x+4,2,"?","text",{b:1})],k>2?400:230));
// sulk; tumbleweed
var tw=d>0?W+1:-2,sp=(W+4)/48;
for(k=0;k<48;k++){tw-=d*sp;q=rd(tw);F(k>20&&k<28?C:q<x+4?L:Rt,0,[T(q,6-(k%5<2),"✿❀*❀"[k%4],BR,Z),...k%3?[]:[T(q+d*2,6,"·",SA,Z)]],50,1)}
// a real well rises; poke, crank, drink
for(k=0;k<6;k++)F(k>>1==1?C:E,k>>1==1?"up":0,[T(wl+3,4,"✦✧·✧✦·"[k],Y)],150,k?0:1);
for(wo=5;wo>0;wo--)F(E,0,[T(wl-2,6,"░▒       ▒░",SA)],80);
while(x!=xe)st(E,0,110);
x+=d;F(C,U,[T(d>0?x+9:x-1,5,"*",Y)],130);x-=d;F(E,0,0,250);
F(K,"up",[T(x+4,1,"!",Y,{b:1})],160,-1);F("open","up",0,200);
for(k=0;k<7;k++){by=cl(6-(k>>1),4,6);F(E,k%2?"up":0,0,120)}
for(by=0,k=1;k<4;k++)F(E,"up",[bk(rd(c.lerp(wl+2,x+3,k/3)),k>2?3:2)],70);
for(k=0;k<9;k++){hu=1-k/8;F(k%3?C:K,"up",[bk(x+3,3,"▛▀▜"),T(x+R(2,6),R(4,6),"•",WA),...k%3>1?[]:[T(d>0?x+10:x-6,2-k%2,k%2?"gulp":"glug",WA)]],110)}
// bucket back, hop, vulture leaves, desert sinks
hu=-1;[[x+3,2],[(x+wl+5)>>1,1],[wl+2,1]].forEach((p,k)=>F(K,k?0:"up",[bk(p[0],p[1])],70));
by=5;F(E,0,[T(wl+2,3,"~ ~",WA)]);by=6;vu=2;
[1,-1,-2,-1,0].forEach((o,k)=>F(k?K:C,k?"up":0,[T(x+4,2+o-k%2,"♥","error"),...o<0?[T(x-1,3+o,"✦         ✧",c.rainbow(k))]:[]],o<0?80:130,o));
F(K,0,0,400);
for(i=11;i>=0;i--){v=i/12;wo=rd(6-6*v);F(i>5?K:"open")}
F("open",0,0,200);
return f;
});
