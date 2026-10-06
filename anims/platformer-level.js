// Platformer level: warp pipe, coin platforms, ? block star, critter stomp, flagpole slide, castle fireworks.
$cdA("platformer-level",{ scene: 1,title:"Platformer",w:70},function(c){
var W=c.W,G=c.G,M=Math,R=c.rng(c.R(1,1e6)),x0=c.clamp(c.x,12,W-24),f=c.walk(c.x,x0),T=0,DN=1e9,TF=1e9,kw=900/W,I=-1,
xe=W-21,P=xe+9,Pl=[],Co=[],Pi=[],Cl=[],Fw=[],p=[],X=0,O=-3,qx=-1,qh=1e9,E,g=0,WP=0,FY=1,m,i,n,r,
AU="#ffd23c",BR="#b8603a",V=c.P,K=c.T,
u=(o,a)=>p.push([X,o,a]),
cn=(y=M.max(0,G+O+1))=>y<4&&Co.push([X+8,y,p.length-1]),
wk=(n,k)=>{for(var i=0;i<n;i++)X++,u(O),k&&i%3==1&&cn()},
jp=(d,o2,k)=>{O||u(1);for(var i=1,o1=O,t;i<=d;i++)t=i/d,X++,O=M.round(o1+(o2-o1)*t-k*4*t*(1-t)),u(O,i<d),i%3||cn();o2||u(1)};
// level path
for(;;){r=xe-8-X;
if(qx<0&&!O&&r>12&&(X>W/4||r<45)){wk(3);qx=X;[1,-1,-2,-1,0,0,0].map(o=>u(o,o<0));qh=p.length-5;wk(10)}
else if(!E&&!O&&r>45&&R()<.5){wk(2);jp(9,0,3);E=[X+3,p.length-2];jp(5,0,2);wk(2)}
else if(X>56&&r>21&&R()<.4){wk(2);Pi.push(X+10);jp(14,0,5);wk(2+R()*4|0)}
else{n=M.min(4+R()*12|0,r-21-(qx<0?13:0));if(n<3)break;jp(7,-4,2+O/3);Pl.push([X,n+9]);wk(n,1);jp(7,0,1.5);wk(2+R()*4|0)}}
wk(xe-8-X);jp(8,-4,2);
for(i=R()*12|0;i<W;i+=14+R()*20|0)n=2+R()*4|0,Cl.push([i,R()*1.4|0,"▄"+"█".repeat(n)+"▄","▀".repeat(n+4)]);
var BU=[["","  *"],[" \\|/"," -✸-"," /|\\"],["✦ · ✦","·   ·","✦ · ✦"]],
dy=(x,g,a=(T-x*kw)/60|0,b=(T-DN-x*kw)/60|0)=>b>0?b:a<3?g?3-a:a-3:0,
S=e=>{var A=[],Z={z:-1},F={},n=0,y,d,q=(x,y,t,k,g,e)=>A.push(K(x,y+dy(x,g),t,k,e||Z)),
pp=(x,h,w,e)=>{q(x,7-h,"█".repeat(w),"#78e070",1,e);for(y=8-h;y<7;y++)q(x,y,"▐"+"█".repeat(w-2)+"▌","#2c9a44",1,e)};
Cl.map(k=>{var x=(k[0]+W*9-T/400|0)%(W+16)-8;q(x+1,k[1],k[2],"#c4cee0");q(x,k[1]+1,k[3],"#c4cee0")});
Pl.map(k=>q(k[0],3,"▀".repeat(k[1]),"#e07a40",0,{z:-1,bg:"#86391a"}));
Pi.map(x=>pp(x,2,4));
for(y=0;y<7;y++)q(P,y,"●│││││█"[y],y?y>5?"#2c9a44":"#c8c8c8":AU,1);q(P+1,FY,"▶","success",1);
["▄ ▄ ▄ ▄ ▄","█████████","███▛▀▜███","███▌ ▐███"].map((t,j)=>q(W-9,3+j,t,BR,1,{o:1}));
Co.map(k=>{d=I-k[2];d<0?q(k[0],k[1],"●▐│▌"[(T/110+k[0])&3],AU):(n++,d<3&&q(k[0],k[1]-d,"✦✧·"[d],AU,0,F))});
y={z:-1,o:1};q(0,0," ●×"+(n>9?n:"0"+n)+" ",AU,0,y);q(W-10,0," TIME "+(400-M.min(T,TF)/250|0),"text",0,y);
qx<0||q(qx+3,(I-qh)>>>0<2?0:1,I<qh?" ? ":" · ","text",0,{o:1,b:1,bg:I<qh?"#d8901c":"#7a4e2a"});
if(E){d=I-E[1];y=E[0]+M.min(30,M.max(0,-d))/3|0;d<0?(q(y,5,"▟█▙",BR,1),q(y,6,"▀ ▀",BR,1)):d<6&&q(y,6,"▄▄▄",BR,1,F)}
pp(0,3,9,F);WP&&pp(x0,WP,9,F);
m&&q(W/2-6|0,1,m,"text",0,{b:1,o:1});
Fw.map(b=>{d=(T-b[3])/90|0;d>=0&&d<3&&BU[d].map((t,j)=>t&&A.push(K(b[0]-2,b[1]-1+j,t,b[2])))});
return A.concat(e||[])},
ad=(fr,e)=>{fr.props=S(e);f.push(fr);T+=fr.ms||60},
F=(p,o,ms,e)=>ad({pose:p,offset:o,ms},e),lk=t=>t<500?"look-left":t<1000?"look-right":"default",wl=(a,b)=>c.walk(a,b,{turn:0,ms:60}).map(fr=>ad(fr));
// intro: warp in
while(T<1100)F(lk(T),0,90);
m="WORLD 1-1";
[1,2,3].map(h=>F(V("closed"),-(WP=h),90));
F(V(),-3,350);F(V("wink"),-3,200);
[-2,-1,0].map(o=>F(V("closed","up"),o,80));
[2,1,0].map(h=>(WP=h,ad({hide:!0,ms:110})));
[0,-1,-2,-3].map(o=>ad({x:0,offset:o,pose:V(0,"up"),ms:90}));
F(V("right"),-3,300);m=0;
// the run
p.map(([x,o,a],i)=>{I=i;var j=i-qh,e=[],w=j>0&&j<5,h=M.max(0,j-4),sx=qx+4+h,sy=M.round(h*h/2.25);
if(j>1&&!g){if(sx>=x&&sx<=x+8&&sy>=G+o)g=i;else e.push(K(sx,sy,"★☆"[i&1],AU,{b:1}))}
g&&i>g&&e.push(K(x-1-c.R(0,2),G+o+c.R(0,2),c.pick("✦·*"),c.rainbow(i)));
ad({x,offset:o,ms:o>0?70:w?120:(g?32:45)-W/40+(o<-4)*25|0,
pose:V(w?0:g&&i-g<4?"wink":"right",a?g?"up":"one-up":"down",a||o>0?"both":x%2?"left":"right"),
paint:g?(u,v)=>c.rainbow(u+v+i):void 0},e)});
// flagpole
I=1e9;TF=T;
for(var o=-4;o<1;o++)FY=o+5,F(V("right","one-up"),o,o<-3?260:100,[K(xe+8,G+o+1,"·","text")]);
F(V("wink"),0,300);F("arms-up",-1,140);
wl(xe,W-9);
// fireworks
m="COURSE CLEAR!";n=3+W/40|0;
for(i=0;i<n;i++)Fw.push([c.R(3,W-4),c.R(1,2),c.rainbow(c.R(0,9)),T+150+i*1500/n+c.R(0,99)]);
while(Fw[n-1][3]+500>T)ad({hide:!0,ms:90});
wl(W-9,W-19);
F("arms-up",-1,150);F(V("wink"),0,350);
// outro
DN=T;
while(T<DN+1500)F(lk(T-DN),0,100);
f.push({pose:"default",ms:300});
return f});
