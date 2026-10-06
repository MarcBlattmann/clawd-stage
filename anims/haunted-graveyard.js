// Graveyard night (moon, bats, fog): Clawd tiptoes through, ghosts rise one by one, he bolts, then peeks back in as the night fades.
$cdA("haunted-graveyard", { title: "Haunted graveyard", w: 70, scene: 1 }, function (c) {
var f=[],W=c.W,M=Math,R=c.rng(c.R(1,1e6)),N=1e9,T=0,DN=N,P=c.P,X=c.T,U="up",b1={b:1},i,
x=c.x,x0=x,d=x<c.mx/2?1:-1,xe=x+14*d,[fw,bk]=d>0?["right","left"]:["left","right"],
cl=v=>v<0?0:v>1?1:v,F=(v,n)=>((v|0)%n+n)%n,
K=(r,g,b,a)=>c.rgb(18+(r-18)*a,18+(g-18)*a,26+(b-26)*a),
Gs=[x+2,x+2+7*d,d>0?xe+11:xe-6].map((v,j)=>({x:v,ty:1+(j>1),t:N,h:N,o:N,e:"••"})),[g0,g1,g2]=Gs,
A=[["╭───╮","│RIP│","│   │"],[" │ ","─┼─"," │ "],["▗▄▖","▐█▌"],["┬─┬─┬─┬","│ │ │ │"],
["\\_ │ _/","  \\│/","   │","   │"," _/┴\\_"],[" _  │ /","  \\_│/_","    │/","  \\_│","   /┴\\"],["┼","┴"],["▟▙"]],
B=Gs.map(g=>({x:g.x,L:["▗▄▄▖","▐██▌"],c:"#a3abb8"})),S=[],Bt=[],FP="░▒▒░░   ░░▒░    ░  ░░░▒░     ░░  ",
mX=d>0?W-7:2,E=d>0?0:W;
// stones, fences, dead trees; only small markers in the banner box
for(i=R()*4|0;i<W;){
var bx=i>2&&i<65,L=A[bx?6+(R()*2|0):R()*6|0],w=L[0].length;
if(Gs.some(g=>i<g.x+6&&i+w>g.x-2)){i+=2;continue}
B.push({x:i,L,c:L[4]?"#8e7765":["#9aa3ae","#7f8896","#a9a395"][R()*3|0]});
i+=w+1+(R()*(bx?16:7)|0)}
for(i=0;i<W/15;i++)S.push([R()*W|0,R()*3|0,R()]),i<2+W/80&&Bt.push([R()*W,R()*2|0,(R()>.5||-1)*(.012+R()*.012),R()*9]);
var scene=()=>{
var Z=[],q=(x,y,t,C,bg)=>y>=0&&y<7&&t.trim()&&Z.push({x,y,t,c:C,bg,z:-1}),
a=M.min(cl(T/900),1-cl((T-DN)/1500)),y=M.max(0,3-(T/200|0))+M.max(0,(T-DN)/250|0),s,j,p,o;
if(a>.1)S.forEach((s,j)=>a>s[2]&&q(s[0],s[1],F(j*7+T/300,9)?"·":"✦",K(190,200,225,a*(.4+s[2]*.6))));
["▄██▄","▀██▀"].forEach((s,j)=>y+j<4&&q(mX,y+j,s,"#f5ecc8"));
if(a>.1){Z.push(c.tile("░▒▓▒░░".padEnd(45),1,K(110,118,140,a),T/450,{z:-1}));
Bt.forEach(b=>{s="^-_-"[F(T/110+b[3],4)];q(F(b[0]+T*b[2],W+6)-3,b[1]+(M.sin(T/250+b[3])>.3),s+"v"+s,K(170,130,210,a))});
// fog: thick lower band, wisps above and in the banner box
[[6,140],[5,-230]].forEach(r=>{for(s="",j=0;j<W;j++)p=FP[F(j+T/r[1]+r[0]*9,33)],o=j<10||j>64,s+=o&&r[0]>5?p:p>"░"&&(o||r[0]>5)?"░":" ";q(0,r[0],s,K(120,128,150,a))})}
Gs.forEach(g=>{if(T<g.t)return;var e=T-g.t,y=T>g.h?T<g.h+900?g.ty+(T-g.h)/30:7-(T-g.h-900)/90:7-e/90,al=cl(e/450),C;
y=M.max(y|0,g.ty-F(T/450+g.x,2));
if(T>g.o)y-=(T-g.o)/120|0,al=1-cl((T-g.o)/700);
if(al>.1)C=K(225,232,255,al),q(g.x,y,"▗██▖",C),q(g.x,y+1,"█  █",C),q(g.x+1,y+1,g.e,"#2c3048",C),q(g.x,y+2,F(T/160,2)?"▀▄▀▄":"▄▀▄▀",C)});
B.forEach(b=>{var k=M.ceil(7*M.max(1-cl((T-M.abs(b.x-x0)*900/W)/300),cl((T-DN-M.abs(b.x-E)*1400/W)/300)));b.L.forEach((l,j)=>q(b.x,7-b.L.length+j+k,l,b.c))});
return Z},
add=(p,ms,o,ex,co)=>{f.push({x,pose:p,ms,offset:o||0,props:scene().concat(ex||[]),color:co});T+=ms},
hold=(p,ms,o,ex)=>{for(var e=T+ms;T<e;)add(p,100,o,ex)},
boo=[X(g2.x,0,"BOO!","text",b1)];
// shiver, tiptoe; ghost 1 ducks when he looks back
hold("default",300);hold(P(bk),400);hold(P(fw),400);
for(i=0;i<6;i++)x=x0+i%2,add(P("closed"),50,0,[X(x0+3,3,"brr","#9ccfff")]);
x=x0;
for(i=1;i<=14;i++){
if(i==3)g0.t=T;
if(i==11)g1.t=T;
if(i==8)g0.h=T,hold(P(fw,U),300),hold(P(bk,U),600,0,[X(x+4,3,"?","warning",b1)]),hold(P(fw,U),200);
x+=d;add(P(i%4==1?"open":fw,U,i%2?"left":"right"),130);add(P(fw,U),90)}
// phew... BOO! leap, turn pale, double take
g2.t=T;hold(P("closed","one-up"),700,0,[X(x+2,3,"phew","inactive")]);
hold(P(fw),400);
g2.e="><";add(P("closed"),120,1,boo);
[-1,-2,-2,-1,0].forEach(o=>add(P("open",U),90,o,boo.concat(X(x+4,3+o,"!","error",b1)),"#ffe6d8"));
g0.e=g1.e="><";
add(P(bk,U),300,0,boo);add(P(fw,U),100);add(P(bk,U),150);
// bolt; ghosts giggle away; night fades; peek back in
g0.o=T+150;g1.o=T+250;g2.o=T+700;g2.e="^^";
for(i=0;x>-9&&x<W;i++)x=c.clamp(x-d*(i<2?1:2),-9,W),
add(P(bk,U,i%2?"left":"right"),i<2?60:30,0,[X(d>0?x+9:x-2,5,"≡≡","inactive"),X(x+(d>0?6:2),3-i%2,"'","#8ecbff")].concat(T<g2.o?X(g2.x,0,"hehe","subtle"):[]));
for(DN=T+100;T<DN+300;T+=100)f.push({x,hide:true,ms:100,props:scene()});
x=d>0?-5:W-4;
hold(P(fw),500);add(P("closed"),100);hold(P(fw),300);hold(P(bk),300);
for(;d>0?x<1:x>c.mx-1;)x+=d,add(P(fw,"down",x%2?"left":"right"),110);
hold(P("wink"),400);
f.push({x,pose:"default",ms:300});
return f;
});
