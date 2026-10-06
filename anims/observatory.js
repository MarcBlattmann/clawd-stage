// Starry night: an observatory rises around Clawd, he views Saturn, a comet streaks across the sky.
$cdA("observatory",{title:"Observatory",w:70,scene:1},function(c){
var f=[],W=c.W,M=Math,S=M.sin,N=M.round,P=c.P,X=c.T,R=c.rng(c.R(1,1e6)),
T=0,DN=1e9,DK=7,OP=0,TL=-1,VW=0,MC=-9e3,CM=-9e3,cx=c.x,Z,a,i,j,k,h,
x=c.clamp(c.x,4,c.mx-34),L=x-4,V=M.min(M.max(x+24,64),W-19),SX=R()*W,
I="inactive",RT="right",LF="left",U="one-up",CL="closed",B="#c9a45a",Y="#f0e1b4",K="chromeYellow",
sp=n=>" ".repeat(n),HL=[..."0123"].map(_=>[...sp(W)]),ST=[],w="█"+sp(23)+"█",
SH=[sp(6)+"▄".repeat(13),"   ▄▀▀"+sp(13)+"▀▀▄"," ▄▀"+sp(19)+"▀▄","█▀"+sp(21)+"▀█",w,w,"█▄"+sp(21)+"▄█"],
MO,q=(x,y,t,C,o)=>Z.push({x,y,t,c:C,z:-1,o}),
hd=()=>N(W+2-(T-CM)/1800*(W+26)),
// round view frame
cir=A=>A.map((h,i)=>{var p=A[i-1],n=A[i+1],m=p&&n,d=m?h-M.min(p,n):0,z="─".repeat(d&&d-1),
g=!p?"╭╮":!n?"╰╯":d?p<h?"╭╯╰╮":"╰╮╭╯":"││",s=d?g[0]+z+g[1]:g[0],e=d?g[2]+z+g[3]:g[1];
q(V+9-h,3-(A.length>>1)+i,s+(m?" ":"─").repeat(2*h+1-s.length-e.length)+e,B,1)});
// pines, stars, moon
for(i=R()*4|0;i<W-5;)if((i<6||i>64)&&(i<L-6||i>L+26)){k=R()*3|0;
["▲","◢█◣","◢███◣","█"].slice(0,k+2).map((t,r)=>{for(j=0;j<t.length;j++)HL[r+2-k][i+2-(t.length>>1)+j]=t[j]});i+=R()<.4?4:6+R()*9|0}else i+=2;
HL=HL.map(r=>r.join(""));
for(i=R()*4|0;i<W;i+=4+R()*6|0)ST.push([i,R()*4|0,R()]);
for(j=0;j<30;j++)if(MO=R()*(W-2)|0,(MO<L-2||MO>L+25)&&(MO<V-2||MO>V+18))break;
var sc=()=>{Z=[];a=M.max(0,M.min(1,T/1e3,1-(T-DN)/900));h=hd();k=T>=CM&&T-CM<2e3;
ST.map(([u,v,p])=>a>p&&q(u,v,S(T/250+p*40)>.8?"✦":"·",p<.3?"text":p<.6?"#a8b8e0":I));
a>.3&&(q(MO,0,"▟▀",Y),q(MO,1,"▜▄",Y));
a>.5&&q(N(SX+T/80)%W,2,"•",(T/400|0)%2?"error":"subtle");
for(j=0;k&&j<3;j++)q(h+5+j*6+(T/90+j|0)%3,1+j%2,(T/150+j|0)%2?"·":"✧","#8cc8f0");
HL.map((t,r)=>q(0,r+3+N(4*(1-a)),t,"#3a7a5a"));
SH.map((s,r,_,y,n)=>{y=r+DK;if(y<7){if(r<2&&OP>(r?0:2))s=s.slice(0,r?OP>1?19:21:16);n=s.search(/\S/);q(L+n,y,s.slice(n),r<3?"#aab4cd":"#7a7f99",y<4)}});
k&&(q(h,0,"●","text"),q(h+1,0,"≡≡══","#a8dcff"),q(h+5,0,"──· ·","#5a8cc8"));
if(TL>=0){for(j=4;j>=2-TL;j--)q(x+16-2*j,j+DK,j?"▄██▀":"▄██▌",j?"text":"#d4a94f");
for(j=3;j<7;j++)q(x+13+(j<6),j+DK,j<6?"▐":"◢█◣",I)}
VW&&cir([[1,1,1],[3,4,4,4,3],[5,7,8,8,8,7,5]][VW-1]);
if(VW>2){[[6,1],[13,2],[4,4],[12,5]].map(([u,v],n)=>q(V+u,v,n==1&&S(T/200)>0?"✦":"·",n?I:"text"));
q(V+4,3,"─══"+sp(5)+"══─",Y);["▄███▄","█████","▀███▀"].map((t,r)=>q(V+7,2+r,t,c.rgb(235-27*r,205-35*r,140-27*r)));
h=T/350;q(V+9+N(6*M.cos(h)),3+N(1.6*S(h)),"•","text");
T>=MC&&T-MC<800&&q(V+5,1,(sp(11)+"●≡═─"+sp(9)).substr(N((T-MC)/50),9),"#a8dcff")}
return Z},
ad=(p,ms,o,ex)=>{f.push({x:cx,pose:p,ms,offset:o||0,props:sc().concat(ex||[]),color:c.rgb(215-45*a,119-25*a,87+15*a)});T+=ms},
ho=(p,ms,o,ex)=>{for(var e=T+ms;T<e;)ad(p,100,o,ex)},
tx=(t,y,C,d)=>[X(cx+(d||1),y,t,C,{b:1})];
// night falls, Clawd walks to his spot
ho(P(),400);ad(P(CL),120);ho(P("wink"),400);ad(P(),100);
for(j=x>cx?RT:LF;cx!=x;)cx+=x>cx?1:-1,ad(P(j,0,cx%2?LF:RT),55);
ad(P(),200);
// the dome rises around him
TL=0;for(;DK;)DK--,ad(P(DK>3?LF:RT),70,0,DK<2&&[X(L-2,6,"░▒",I),X(L+25,6,"▒░",I)]);
ad(P(CL),120,1);ad(P(),300,0,tx("!",3,"warning",3));
// click: shutter opens, telescope slides out
ad(P(RT,U),250,0,tx("click",3,I));
for(;OP<3;)OP++,ad(P(RT),170,0,[X(x+15+OP%2,OP,"·",I),X(x+13,4-OP%2,"·",I)]);
for(;TL<2;)TL++,ad(P(RT),180);
[..."✦·"].map((s,n)=>ad(P(n?RT:"wink"),130,0,[X(x+20,0,s,K)]));
// eye to the eyepiece: Saturn!
ad(P(RT,U),300);ad(P(CL,U),130);
for(;VW<3;)VW++,ad(P(RT,U),90);
for(i=0;i<26;i++)ad(P(i==9||i==19?CL:RT,U,i>13&&i<23?i%4<2?LF:RT:0),110,0,i>2&&i<11?tx("ooh",3,Y,i%3):i>12&&i<24&&[X(cx+3+(i&1),3-(i-13>>2),"♥","error")]);
// a comet zips through the view...
MC=T;for(i=0;i<14;i++)ad(P(i>8?0:RT,U),55,0,i>8&&tx("!",3,"error",4));
ad(P(0,U),200,-1,tx("!!",2,"error",3));
for(;VW;)VW--,ad(P(RT),80);
// ...and across the whole sky
CM=T;for(i=0;T-CM<1900;i++){h=hd();k=M.abs(h-cx-4)<14;ad(P(h>cx+8?RT:h<cx?LF:0,k?"up":0),45,k&&i%4<2?-1:0)}
[0,-1,-2,-1,0,-1,0].map((o,n)=>ad(P(n>4&&"wink","up"),90,o,tx("wow!",3+o,K,3)));
ho(P("wink"),400);
// pack up, yawn, night fades
for(;TL;)TL--,ad(P(RT),130);
for(;OP;)OP--,ad(P(RT,U),150);
ho(P(CL,"up"),600,0,tx("*yawn*",3,I));
DN=T;for(;DK<7;)DK++,ad(P(DK>3&&CL),80);
TL=-1;ho(P(),400);
f.push({x:cx,pose:"default",ms:300});
return f;
});
