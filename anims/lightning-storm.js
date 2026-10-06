// A storm cloud stalks Clawd; ZAP! White, then charred and smoking; he shakes it off.
$cdA("lightning-storm",{title:"Thunderstruck",w:50},c=>{
var R=c.R,T=c.T,M=Math.random,O="open",C="closed",L="left",E="right",U="up",K="wink",Q="text",I="inactive",Y="chromeYellow",V="#9ad0ff",W="#fffbd0",B={b:1},
x=c.clamp(c.x,8,c.mx-8),f=c.walk(c.x,x),X=x,cx=x-3,cj=0,dn,dz,cc,fl,ft,P=[],H=[...Array(28)].map(M),sc=[],J=[0,1,0,-1],i,k,j,q,t,
s=c.pick([-1,1]),SE=s<0?L:E,AE=s<0?E:L,gx=x+4+s*7,CH="#5c524e",FZ="#8c8078",zw=c.pick(["ZAP!","KRAK!","FZZT!"]),
pt=(...a)=>P.push(a),
pa=(t,a,b)=>(u,v)=>H[v*9+u]<t?a:b,
sk=()=>T(X+c.pick([-1,9,R(0,8)]),R(3,6),c.pick("*✦·+"),M()<.5?Y:V,B),
ex=()=>[T(X+4,3,"!","warning",B)],
rum=()=>[T(cx+cj-3,1,"((                ))",I)],
fz=(o=0)=>T(X+2,3+o,M()<.8?"\\\\|//":"\\/|\\/",FZ),
// zigzag bolt up from (b,y1)
bolt=(b,y0,y1,d)=>{var A=[],h=R(0,1)*2-1;for(;y1>=y0;y1--)A.push(T(b,y1,h>0?"\\":"/",W,B)),R(0,2)&&(!d||d==h)?b-=h:h=-h;return A},
// frame: flash, particles, cloud, extras
F=(e,ms,q,o,a,z)=>{var p=[...sc],r=Math.round;
for(j=0;fl&&j<4;)p.push(T(0,j++," ".repeat(c.W),fl,{o:1,bg:fl,z:-1}));
P=P.filter(u=>u[6]-->0&&p.push(T(r(u[0]+=u[2]),r(u[1]+=u[3]),u[4][u[6]>>1]||u[4].slice(-1),u[5],{z:-1})));
dn&&["  ▗▟█▙▄▄▟█▙","▗"+"█".repeat(12)+"▖"].map((t,y)=>p.push(T(cx+cj,y,t.replace(/\S/g,(h,i)=>H[i+y*14]<dz?" ":"x░▒▓"[dn]||h),cc||c.hsv(240,.12,.67-dn*.06),fl&&{bg:fl})));
f.push({x:X,offset:o|0,pose:c.P(e,a,ft),ms,props:p.concat(q||[]),...z&&(z.call?{paint:z}:{color:z})})},
// charred: frizz, smoke, sparks
Z=(e,ms,o=0)=>{M()<.7&&pt(X+R(2,6),2,M()*.5-.25,-.35,"·~░",I,R(5,9));F(e,ms,[fz(o),M()<.6?sk():fz(o)],o,0,CH)};
// wisps gather into a cloud
F(O,400);
for(i=0;i<22;i++)i<10&&(k=i%2||-1,j=R(9,16),pt(x+4+k*j,R(0,1),-k,0,c.pick("░~"),I,j-R(2,5))),i>5&&(dn=i<15?i/3-1|0:4,dz=1.6-i*.12),F(i<3||i>17?O:i%6<3?L:E,90);
// rumble
for(k=0;k<8;k++)cj=k%2||-1,F(k<3?C:k%2?L:E,60,rum().concat(k%3?[]:T(cx+cj+R(3,10),R(0,1),"▒",Y)),+(k<2));
cj=0;F(O,450);
// warning bolt: he jumps
q=bolt(gx,2,5,s).concat(T(gx,6,"✸",Y,B));
for(k=0;k<8;k++)pt(gx,6,M()*2-1,-.5-M()*.4,"·*",M()<.5?Y:W,R(3,6));
fl="#464669";F(O,50,q);fl=0;
[-1,-2,-1].map((o,i)=>F(C,50+i*10,i?0:q,o,U));F(O,80);
sc=[T(gx-1,6,"▁▂▁",CH)];
for(k=0;k<7;k++)k<5&&pt(gx,5,M()*.4-.2,-.4,"·~░",I,6),F(k<5?SE:O,k<5?110:160);
F(C,110);F(O,250,ex());
// sneak off; the cloud follows
for(k=0;k<3;k++)X-=s,ft=k%2?L:E,F(AE,170);
ft=0;F(AE,250);F(K,500);
for(k=0;k<3;k++)cx-=s,F(k<2?K:O,140,rum());
F(O,300,ex());F(SE,200);F(AE,200);
// maybe dash back
if(R(0,1)){for(k=0;k<4;k++)X+=s,ft=k%2?L:E,k&&(cx+=s),F(SE,60);ft=0;cx+=s;F(SE,250);F(AE,200)}
F(C,500,[T(X+3,3,"...",I)]);
// charge... ZAP
cc=W;F(O,80,rum());cc=0;F(O,120);cc=W;F(C,250,0,1);
x=X;t=X>c.W/2?X-6:X+11;fl="#e1e1ff";cc="#46465f";
F(C,50,0,0,U,Q);
for(k=0;k<14;k++)X=x+J[k%4],fl=k%5==4&&"#7878aa",cc=k%2&&W,
F(k%3?C:O,k<6?40:50,(k<10&&k%4<3?bolt(X+4,1,3-k%2):[]).concat(sk(),sk(),sk(),T(t,2,k<7?zw:"bzz",k<7?Y:I,B)),-(k%2),k%2?U:"one-up",pa(.5,k%2?Q:V,k%2?Y:Q));
X=x;fl=cc=0;[Q,"#c8c3be","#968c87"].map((l,i)=>F(C,i?90:180,0,0,0,l));
// charred, dazed, coughing
for(k=0;k<9;k++)Z(k-5?O:C,k-5?130:150);Z(L,260);Z(E,260);
for(k=0;k<2;k++)pt(X+9,4,1,-.3,"·░",FZ,4),Z(C,110,1),Z(O,160);
Z(C,400);
// shake the soot off
for(k=0;k<18;k++){t=k/15;X=x+J[k%4];ft=k%2?L:E;
for(i of[-1,1])pt(X+4+5*i,R(4,6),i*(1+M()),M()*.4-.3,"·°",FZ,R(3,5));
F(C,45,t<.6?[fz()]:[],0,k%2&&U,pa(t,"clawd_body",CH))}
// last drip; cloud drifts off
X=x;ft=0;
for(k=0;k<14;k++)dz=k/12,dn=k<5?4:k<9?3:2,cx+=k>4&&k%2,k>7&&(sc=[]),F(k-4?k<4?O:k%6<3?L:E:C,k-4?90:300,k>1&&k<5?[T(X+4,k,k<4?"·":"*",Y,B)]:0,+(k==4));
dn=0;F(O,200);F(K,500,[T(X-1,3,"✦         ✦",Y)],0,U);F(O,300);
f.push({x:X,pose:"default",ms:300});
return f});
