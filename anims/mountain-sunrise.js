// Snowy peaks rise across the stage at night; the sky warms and the sun climbs behind a peak while Clawd does sunrise yoga.
$cdA("mountain-sunrise",{ scene: 1,title:"Mountain sunrise",w:70},c=>{
var W=c.W,G=c.G,R=c.R,T=c.T,P=c.P,Q=Math.random,A=Math.abs,X=Math.max,M=Math.min,N=Math.round,cl=c.clamp,f=[],i,k,V,
Lf="left",Rt="right",d=c.x*2>c.mx?-1:1,E=d>0?Rt:Lf,x=cl(c.x,3,c.mx-3),cx=c.x,B=x+(d>0?9:-1),
sx=cl(x+4+d*R(15,22),6,W-7),H=[],L=[],pk=[[sx-.5,5,2.2]],st=[],tr=[],tf="",pt="",zz=[],
t=0,e=0,he,hy,rk,sn,fb,bx,bf=0,bd=c.pick([1,-1]),mat=0,glo=0,I="inactive",Z="closed",U="up",
SK=["10143c3c32783c78d2","1a2058aa5a825a96e1","262a6ef0825a8cbef0"],GL=[255,185,90],
mx=(a,b,u)=>a.map((v,j)=>v+(b[j]-v)*u),
// K: hex colour ramp, C: fade in from dark by e
K=(p,u=t)=>{var v=p.match(/../g).map(h=>parseInt(h,16)),n=v.length/3-1,j=M(n-1,u*n|0);return mx(v.slice(j*3,j*3+3),v.slice(j*3+3),u*n-j)},
C=a=>c.rgb.apply(0,mx([12,12,24],a,e)),
S=(x,y,s,c,b,o)=>({x:x,y:y,t:s,c:c,bg:b,o:o,z:-1}),
// sky colour of a cell, colour of half-row pixel k, sun pixel?
zc=(i,r)=>zz[r].find(z=>i<z[1])[2],
PC=(i,k)=>k<2?fb:k<H[i]-he?k<L[i]-he?rk:sn:zc(i,3-(k>>1)),
SP=(i,k,q)=>(q=7-k-hy)>=0&&q<4&&A(i-sx+.5)<(q%3?3:2)&&k>=X(2,H[i]-he);
// peaks (tall = snowy) + low sun peak, grass, forest, stars, pines
for(i=R(-6,3);i<W+8;i+=R(10,17))A(i-sx)>8&&pk.push([i,4.5+Q()*3.8,1.2+Q()]);
for(i=0;i<W;i++){H[i]=2;L[i]=9;pk.map(q=>{var v=q[1]-A(i-q[0])/q[2];v>H[i]&&(H[i]=v,L[i]=q[1]>6?q[1]-2.6:9)});
tf+=(i<10||i>64)&&Q()<.07?c.pick(",'\""):" ";pt+=Q()<.6?"▲":" "}
for(i=0;i<W/16;i++)st.push([R(0,W-1),R(0,1),.08+Q()*.28]);
for(i=W-R(3,9);i>68;i-=R(20,40))tr.push(i);
function F(ms,po,o,ex){
var p=[],g=t<.6?t/.6:1-(t-.6)*1.2,i,j,k,l,r,a,b,u,q;
he=(1-e)*8;hy=N(cl((.72-t)*12.9,0,6));rk=C(K("10102837234b46558c"));sn=C(K("6e73a0ffaa96f5f8ff"));fb=C(K("121a261a242a1e482d"));
for(r=0;r<3;r++){
b=K(SK[r]);q=[-W].concat([3,2,1,1,2,3].map((n,j)=>sx+(j<3?-1:1)*N(g*n*(n+5)*(1+.6*r)/2)),2*W);
zz[r]=[0,3,2,1,2,3,0].map((n,j)=>[X(q[j],0),M(q[j+1],W),C(n?mx(b,GL,g*(.6-n*.15)):b)]).filter(z=>z[1]>z[0]);
a=b=u="";for(i=0;i<W;i++){k=H[i]-he-6+2*r;l=L[i]-he-6+2*r;q=k>0?k>1?"█":"▄":" ";a+=q;b+=l>0?" ":q;u+=k>1&&l>0&&l<=1?"▀":" "}
zz[r].map(z=>{var j=z[0],w=z[1];p.push(S(j,r," ".repeat(w-j),rk,z[2],1));[a,b].map((m,n)=>(r||n)&&(m=m.slice(j,w)).trim()&&p.push(S(j,r,m,n?sn:rk,z[2])))});
u.trim()&&p.push(S(0,r,u,sn,rk))}
p.push(S(0,3,pt,C(K("1e323c2d4b3c327d46")),fb,1),S(0,6,tf,C(K("2d5a3250a050"))));
a=C(K("ff7832ffeb82",cl(t*2.5-1.1,0,1)));
for(r=0;r<3;r++)for(i=sx-3;i<sx+3;i++)u=SP(i,7-2*r),b=SP(i,6-2*r),(u||b)&&p.push(S(i,r,u&&b?"█":u?"▀":"▄",a,PC(i,u?6-2*r:7-2*r)));
st.map(q=>t<q[2]&&6-2*q[1]>=H[q[0]]-he&&p.push(S(q[0],q[1],Q()<.2?"✦":"·",C(mx([215,215,240],K(SK[q[1]]),t/q[2])),zc(q[0],q[1]))));
if(bf)for(bx+=bd*ms*W/6e3,j=0;j<4+bd;j++)i=N(bx)-bd*j*3,r=(i>>2)+j&1,i>=0&&i<W&&p.push(S(i,r,(f.length+j)%3?"v":"-",C([50,38,62]),PC(i,6-2*r)));
glo&&pk.map(q=>q[1]>6&&(i=q[0])>=0&&i<W&&Q()<.45&&(k=Math.ceil(H[i]-he)-1,r=X(0,2-(k>>1)),p.push(S(i,r,c.pick("✦*+"),"#fffbe6",PC(i,6-2*r)))));
a=C(K("28504a3c9650"));tr.map(i=>p.push(S(i-1,4," ▲",a),S(i-1,5,"▟█▙",a),S(i,6,"│",C([120,85,60]))));
mat&&p.push(T(x-2,6,"▁▁▁  ▁▁▁  ▁▁▁".slice(0,mat)+(mat<13?"▄":""),"autoAccept",o||cx-x?{z:-1}:0));
f.push({x:cx,pose:po,offset:o,ms:ms,color:c.rgb.apply(0,K("965a5ad77757")),paint:t>.7?(a,b)=>(d>0?a>5:a<3)&&b<2?"#ffc890":V:V,props:p.concat(ex||[])})}
// n frames of a pose as dawn advances, breath puffs
function Y(n,ms,po,o,dt,bp){for(var q=0;q<n;q++)t=M(1,t+dt),F(ms,po,o,bp&&q%4<2?[T(B+d*(q%2),G+1,q%2?"·":"°",I)]:0)}
// the range rises
for(k=0;k<10;k++)e=k/9,i=cx,cx+=cl(x-cx,-1,1),F(70,P(cx-i?cx>i?Rt:Lf:E,0,cx-i?k&1?Lf:Rt:0));
// night: sleepy, stretch, mat unrolls
F(300,P(Z),0,[T(B,G+1,"z",I)]);F(300,P(Z),0,[T(B+d,G,"Z",I)]);F(800,P(Z,U));F(300,P(E));
for(k=1;k<14;k++)mat=k,F(45,P(k<7?Lf:Rt));
// pre-dawn: breathe, reach, fold, rise
Y(6,170,P(Z),0,.014,1);Y(4,160,P(Z,U),0,.014);Y(5,160,P(Z),1,.014,1);Y(4,160,P(Z,U),0,.014);Y(3,220,P(E),0,.01);
// sunrise: birds, side stretch, wobbly tree pose
bf=1;bx=bd>0?-2:W+1;Y(6,170,P(E,"one-up"),0,.015);
for(k=0;k<8;k++)cx=x+[0,1,0,-1,1,0,0,0][k],t+=.015,F(140,P(k<5?k&1?Lf:Rt:Z,U,Lf));
Y(6,170,P(Z,U,Lf),0,.015);Y(6,170,P(Z,U,Rt),0,.015);Y(3,200,P(E,U),0,.012);
// sun clears the peak: snow glints
glo=1;for(k=0;k<6;k++)F(k<5?110:400,P(k<4?E:"wink",U),0,[T(k&1?x-1:x+9,G+(k&1),"✦","chromeYellow")]);glo=0;
// bows, mat rolls up, scene fades
for(k=0;k<2;k++)Y(2,200,P(Z),1,.02),Y(2,240,P(Z),0,.02);
for(k=13;k--;)mat=k,t=M(1,t+.008),F(40,P(k>6?Rt:Lf));
F(300,P("wink"));F(300,P(bd>0?Rt:Lf));
for(k=9;k>=0;k--)e=k/9,F(70,P(k>4?E:0));
f.push({x:x,pose:"default",ms:300});
return f;
});
