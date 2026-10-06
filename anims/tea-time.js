// Tea with a friend: a table pops up, cups steam, clink (slosh!), pinky-up sips, small talk, bows.
$cdA("tea-time", { title: "Tea time", w: 40 }, function (c) {
var R=c.R,T=c.T,P=c.P,G=c.G,W=c.W,M=Math.round,K=c.pick,
x=c.clamp(c.x,0,c.mx-20),f=c.walk(c.x,x),X=x+20,tx=x+10,F=W,fp,fo=0,L=0,a=tx+1,b=tx+7,ha=0,hb=0,ea=0,eb=0,st=0,ps=[],t=0,i,j,k,n,s,
O="open",E="right",H="left",C="closed",V="wink",D="up",U="one-up",B="clawd_body",I="inactive",Y="chromeYellow",Q="text",wd="#a87444",tc="#c8823c",
fc=K(["permission","success","autoAccept"]),ca=K([Q,"#9fd3ff","#ffb8d0"]),cb=K([Q,"#c8f0a0","#ffd890"]),
ln=["lovely brew|indeed!","more tea?|just a drop","splendid|quite so","nice cups|why, thanks"];
// particle x,y,dx,dy,life (per 100ms),chars,color,gravity
function sp(u,v,h,k,l,s,o,g){ps.push([t,u,v,h,k,l,s,o,g||0])}
function S(z,s,o){return T(c.clamp((z?F:x)+4-(s.length>>1),0,W-s.length),G-2,s,o||(z?fc:B))}
function Z(e,u,ft){fp=P(e,u||(hb||eb?D:0),ft)}
function A(e,ms,o,g){
o|=0;
for(var m=-~(ms/120),d=M(ms/m),q=0,p,r,y,z,w,h,u;q++<m;t+=d){
p=[];r=7-L;y=ha?G+o:r-1;z=hb?G+fo:r-1;
if(L){
p.push(T(tx,r,"▛▀▀▀▀▀▀▀▜",wd),T(tx+1,r,"▀ ▀ ▀ ▀","error"),T(tx+2,r,"▀ ▀ ▀",Q));
st&&p.push(T(tx+4,r,"▀",tc));
L>1&&p.push(T(tx,6,"▌       ▐",wd));
for(w=1;w<4;w++)h=w>2?"subtle":I,u="~~·"[w-1],p.push(T(a+((t/140+w/2|0)&1),y-w,u,h),T(b-((t/160+w/2|0)&1),z-w,u,h));
ea&&p.push(T(x+9,G+o,"▄".repeat(ea),B));
(hb||eb)&&p.push(T(X-eb,G+fo,"▄".repeat(eb+1),fc));
p.push(T(a,y,"▄",ca),T(b,z,"▄",cb))}
ps.forEach(function(s){var e=(t-s[0])/100,v=s[2]+M(e*s[4]+s[8]*e*e);e<s[5]&&v<7&&p.push(T(s[1]+M(e*s[3]),v,s[6][e|0]||s[6].slice(-1),s[7]))});
f.push({x:x,pose:e.eyes?e:P(e,ha||ea?U:0),ms:d,offset:o,props:p.concat(g||[]),actors:[{x:F,offset:fo,pose:fp,color:fc}]})}}
function am(k,ms,e){ea=eb=k;if(ha)a=x+9+k;if(hb)b=X-1-k;Z(H);A(e||E,ms)}
function rc(on){for(i=1;i<5;i++){i==3&&(ha=hb=on);am(i<3?i:4-i,i<3?70:110)}}
function bow(z,ms){Z(z?C:H);fo=z;A(z?E:C,ms,1-z);fo=0;Z(H)}
function sip(z){s=K(["sip","slurp","sip"]);
for(n=R(1,2);n--;){
z?(b=X,Z(C)):a=x+8;
A(z?E:C,R(200,320),0,[z?T(X-1,G,"▘",fc):T(x+9,G,"▝",B),T(z?X-2:x+10,G-1,"✧",Y),S(z,s,I)]);
z?(b=X-1,Z(H)):a=x+9;A(z?E:O,140)}
z&&Z(V);A(z?E:V,400,0,[S(z,"ahh~")]);Z(H)}
function tk(l){l=l.split("|");A(E,700,0,[S(0,l[0])]);bow(1,140);Z(O);A(E,700,0,[S(1,l[1])]);bow(0,140);A(O,200)}

// Humming; the friend strolls in.
Z(H);A(O,300);
for(i=0;i<6;i++)A(P(E,0,i%2?H:0),120,0,[T(x+3+i%2,G-2+i%2,"♪",I)]);
for(j=0;F>X;j++){k=F-X;F-=k>24?3:k>10?2:1;Z(H,0,j%2?H:E);A(E,k>10?30:40+(10-k)*3)}
// Hellos, waves, a bow.
n=K(["hello!","yoo-hoo!","good day!"]);
for(i=0;i<6;i++){Z(i<3?O:H,i%2&&i<3?U:0);A(P(i<3?E:V,i>2&&i%2?U:0),150,0,[S(i<3,i>2?"hi!":n)])}
Z(C);fo=1;A(C,450,1);fo=0;Z(H);A(O,250);
// Poof! A table.
for(i=0;i<10;i++)sp(tx+R(0,8),R(2,6),R(-3,3)/10,-R(0,3)/10,R(3,6),"✦✧·",K([Y,Q,"rainbow_violet"]));
A(C,100);L=1;A(E,90);L=2;A(E,200);
s=[S(0,"ooh!")];Z(O,D);fo=-1;A(P(O,D),110,-1,s);fo=0;A(P(V,D),300,0,s);Z(H);A(E,250);
rc(1);A(O,300);
// Clink, slosh.
n=K(["cheers!","to us!","chin-chin!"]);
Z(O);A(E,400,0,[S(0,n),S(1,n)]);fo=1;A(C,120,1);fo=0;
for(k=1;k<5;k++)am(k,40);
sp(x+14,G,0,0,3,"✦*·",Y);
for(i=0;i<7;i++)sp(x+14+R(-1,1),G-1,R(-7,7)/10,-R(2,7)/10,9,"°°''..",tc,.1);
Z(C);A(C,320,0,[T(x+11,G-2,"clink!",Y,{b:1})]);Z(O);A(O,200);
for(k=3;k>=0;k--)am(k,70,O);
st=1;j=R(0,1);Z(j?C:H);A(j?E:C,450,0,[S(j,j?"oh my!":"oops!")]);Z(H);A(V,300,0,[S(j,"hehe")]);
// Sips, small talk.
i=R(0,3);j=R(0,1);sip(j);sip(1-j);tk(ln[i]);sip(R(0,1));tk(ln[(i+R(1,3))%4]);
// Cups down, bows, table sinks.
rc(0);
Z(O);A(E,600,0,[S(1,K(["must dash!","thank you!","ta-ta!"]))]);
bow(1,450);bow(0,450);A(O,200);
for(i=0;i<8;i++)sp(tx+R(0,8),6,R(-4,4)/10,-R(0,2)/10,R(3,5),"░▒·",I);
L=1;A(E,100);L=0;A(E,400);
// Goodbye waves.
for(j=0;F<W;j++){k=F-X;F+=k<6?1:k<16?2:3;Z(k<6?H:E,k<6&&j%2?U:0,j%2?H:E);A(P(E,t/150&1?U:0),k<6?80:k<16?45:30,0,k<12?[S(0,"bye!")]:[])}
sp(x+4,G-1,0,-.5,5,"♥","error");
A(V,400);A(C,400,0,[S(0,"ahh~",I)]);
return f.concat({x:x,pose:"default",ms:200});
});
