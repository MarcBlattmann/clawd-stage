// Hard-hat Clawd waves a crane through four steel floors, rivets them, flags the top; the site packs away.
$cdA("construction-site",{title:"Construction site",w:70,scene:1},function(c){
var W=c.W,M=Math,rd=M.round,P=c.P,T=c.T,R=c.rng(c.R(1,1e6)),f=[],t=0,OUT=1e9,i,j,k,
Y="chromeYellow",I="inactive",E="text",OR="#ff8a2a",ST="#8fa3b8",B="═".repeat(9),FC=c.pick(["error","success","permission"]),
RT=P("right"),RU=P("right","one-up"),WU=P("wink","one-up"),LK=["look-right","look-left"],
cl=v=>v<0?0:v>1?1:v,
x=c.clamp(c.x,0,W-50),bx=x+10,TX=bx+17+c.R(0,3),px=TX+c.R(7,9),rP=px+4-TX,rB=TX-bx-4,J=M.max(rP,rB)+2,
th=0,sv=0,hy=1,ld=0,tT=0,hT=1,pl=4,FL=[],off=0,HT=-1,fl=0,Z=[],
dy=(X,h,F,k)=>Z.push({d:M.abs(X-x-4)/W*900,h,f:F,k}),
ob=(X,a,o)=>dy(X,a.length,()=>a.map((l,j)=>[X,7-a.length+j,(t/350+X)%2<1?l:l.replace("•"," "),o])),
sc=()=>{var A=[];Z.map(o=>{var n=rd(o.h*(1-cl((t-o.d)/350)*(1-cl((t-OUT-o.d)/350))));o.f().map(p=>{var y=p[1]+(o.k?-n:n);A.push(T(p[0],y,p[2],p[3],{z:-1}))})});return A},
jb=(e,k,a,b,q)=>{for(var z="",j=M.min(e,k,0);j<=M.max(e,k,0);j++)z+=j?j-k?a:q:b;return z},
bu=(X,y,r,n)=>{for(var A=[];n--;)A.push(T(X+c.R(-r,r),y+c.R(-1,1),c.pick("✦*·+"),c.pick([Y,"#ffd36a",OR,E])));return A},
du=(y,s,d)=>[T(bx-1-d,y,s,I),T(bx+9+d,y,s,I)];
for(j=R()*20|0;j<W;j+=40+(R()*30|0))(j<x-8||j>px+16)&&(j<8||j>66)&&(X=>dy(X,7,()=>{var a=M.cos(t/(1500+X*37%1500)+X),e=rd((6+X%5)*a),k=-rd(e/3),p=[[X+M.min(e,k,0),1,jb(e,k,"─","┬","■"),I]],j;for(j=2;j<7;)p.push([X,j++,"║",I]);(t/500+X)%2<1&&p.push([X,0,"•","error"]);return p}))(j);
for(j=0;j<W/30;j++)(X=>dy(X,3,()=>[[((X+t*(X%3?.0015+X%9/4e3:.006))%(W+14)|0)-8,X%2+!(X%3),X%3?"▄▟"+"█".repeat(1+X%4)+"▙▄":t/150+X&1?"v  v":"^  ^",X%3?"subtle":I]],1))(R()*W|0);
var A=[["▲"],[" ▲ ","◢█◣"],["  •","▚▚▚▚▚","▌   ▐"],["┬──┬──┬","│  │  │"],["●●","●●●"],["▗▄▖","▐▒▌","▐▒▌"],[" ▄▄ ","▟██▙"]],CO=[OR,OR,"warning",I,I,"#4a8fe0","#a0703a"],w=[1,3,5,7,3,3,4];
for(i=1+(R()*4|0);i<W-7;)if(i>x-10&&i<px+11)i=px+11;else{k=1+R()*6|0;i+w[k]>8&&i<65&&(k=0);ob(i,A[k],CO[k]);i+=w[k]+(k?3:8)+(R()*8|0)}
dy(px+4,4,()=>[3,4,5,6].slice(4-pl).map(y=>[px,y,B,ST]));
dy(TX,7,()=>{var co=M.cos(th),e=rd(J*co),k=-rd(5*co),hx=TX+rd(c.lerp(rP,rB,(1-co)/2)*co),p=[[TX-1,6,"▟█▙",Y],[TX+(co<-.1?-1:1),1,"▣",E],[TX+M.min(e,k,0),0,jb(e,k,"═","╦","▓"),Y],[hx,hy,"▼",I]],j;
for(j=1;j<6;j++)p.push([TX,j,"╫",Y]);for(j=1;j<hy;j++)p.push([hx,j,"│",I]);ld&&p.push([hx-4+(sv>.2)-(sv<-.2),hy+1,B,ST]);return p});
dy(bx+4,7,()=>{var p=[[bx,6,"█▄▄▄█▄▄▄█",I]];FL.map((F,k)=>{for(var z="",j=0;j<9;j++)z+=j%4||j/4>=F.v?"═":"╪";var q=cl((t-F.t)/900);p.push([bx,5-k,z,c.rgb(255-105*q,140+25*q,40+145*q)])});
fl&&p.push([bx+4,0,"│",E],[bx+4,1,"│",E],[bx+5,0,["▀▀▀","▀▀▄","▀▄▀"][t/140%3|0],FC]);return p});
var fg=()=>{var A=[],y;HT>=0&&A.push(T(x+1,3+off-HT,"▗▟███▙▖",Y));
if(off<0)for(A.push(T(x+1,7+off,"▀".repeat(7),Y)),y=8+off;y<7;y++)A.push(T(x+2,y,"╳╳╳╳╳",I));return A},
cu=()=>{var d=tT-th,s=.07+.25*M.sin(th),u=hy<hT;
if(sv=0,d){if(hy>1)return hy--,"↑";th+=sv=c.clamp(d,-s,s);return d>0?"←":"→"}
return hy-hT?(hy+=u?1:-1,u?"↓":"↑"):0},
fr=(ms,pose,ex,a)=>{a||cu();f.push({x,offset:off,pose,ms,props:sc().concat(fg(),ex||[])});t+=ms},
sig=()=>{for(var q,n=0;q=cu();n++)fr(q=="↑"||q=="↓"?65:50,P("right",n&2?"down":"one-up"),n&2?0:[T(x+9,3+off,q,"warning",{b:1})],1)},
gn=()=>[T(x+9,4+off,"▬",E)],
fp=(X,y)=>[T(X,y,"│",E),T(X,y+1,"│",E),T(X+1,y,"▀▀",FC)];
f=c.walk(c.x,x,{fx:F=>(F.props=sc(),t+=F.ms||60,F)});
for(j=0;t<1250;)fr(170,LK[j++%2]);
for(i=4;i--;)HT=i,fr(50,P());
off=1;fr(90,P("closed"),[T(x,3,"*",Y),T(x+8,3,"*",Y)]);off=0;fr(260,P("wink"));
for(k=0;k<4;k++){
fr(140,RU,[T(x+9,3+off,"♪",Y)]);fr(120,WU,[T(x+10,2+off,"♫",Y)]);
tT=0;hT=6-pl;sig();ld=1;pl--;fr(110,RU,[T(px+9,6-pl,"·",I)]);
tT=M.PI;hT=4-k;sig();ld=0;FL.push({v:0,t:-1e4});
fr(90,P("closed"),du(5-k,"░",0));fr(80,RT,du(5-k,"·",1));
tT=k<3?0:M.PI/2;hT=1;
for(;off!=1-k;)off+=off<1-k?1:-1,fr(110,RT);
for(j=0;j<3;j++){FL[k]={v:j+1,t};fr(90,P(j?"right":"closed","one-up"),gn().concat(bu(bx+4*j,5-k,1,4)));fr(70,RU,gn().concat(bu(bx+4*j,6-k,2,3)))}
fr(240,WU,gn());off>0&&(off=0,fr(100,RT))}
sig();for(;off<0;)off++,fr(120,RT);
fr(280,WU,fp(x+9,3));off=1;fr(140,P("closed","one-up"),fp(x+9,4));
for(j=1;j<9;j++){var s=j/8;off=j<3?-1:0;fr(70,j<3?"arms-up":RT,fp(x+9+rd(5*s),rd(3-3*s-22*s*(1-s))))}
fl=1;for(j=0;j<6;j++){off=-(j%2);fr(95,j%2?"arms-up":P("wink","up"),j<3?bu(bx+4,1,3,5):[T(TX+2,1,"♪♫"[j%2],Y)])}
off=0;fr(500,P("wink"));
OUT=t;for(j=0;t<OUT+1350;j++)fr(110,LK[j>>2&1],t-OUT<450&&du(6,"░",0));
for(HT=1;HT<4;HT++)fr(60,P("open","up"));HT=-1;
f.push({x,pose:"default",ms:300});
return f});
