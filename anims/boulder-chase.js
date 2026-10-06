// A giant boulder chases Clawd across the whole stage; at the far edge he dives back over it, it rolls off and crashes, and he wipes his brow.
$cdA("boulder-chase",{title:"Boulder chase",w:64},c=>{
var M=Math,rd=M.round,rn=M.random,W=c.W,mx=c.mx,f=[],P=[],PB=[],L="left",Rt="right",C="closed",
d=c.x<mx/2?1:-1,// 1: boulder from the left; -1 mirrors it all
// T draws in travel coordinates (the boulder rolls toward +x).
T=(x,y,t,cl,e)=>c.T(d>0?rd(x):W-rd(x)-t.length,y,t,cl,e),
E=e=>d<0&&{left:Rt,right:L}[e]||e,
F=(x,e,a,ft,ms,o,pr)=>f.push({x:d>0?x:mx-x,pose:c.P(E(e),a,E(ft)),ms:ms,offset:o||0,props:pr||[]}),
ST="#968068",I="inactive",S="subtle",X="text",Y="warning",BL="#82beff",B={b:1},Z={z:-1},
H=(x,y,t)=>T(x,y,t,"error",B),SCR=c.pick(["AAAH!","EEEK!","nope!"]),i,k,u,o,a,x,bx,N,D,ms,sx,st,gl;
for(i=c.R(1,4);i<W;i+=c.R(5,9))PB.push(i);
// Particles fly and fade behind everything.
var add=p=>P.push(p),U=o=>{P=P.filter(p=>(p.x+=p.vx,p.y+=p.vy,p.vy+=p.gr||0,--p.l>0&&p.y<6.6));
 P.forEach(p=>o.push(T(p.x,rd(p.y),p.l<3&&p.h||p.g,p.cl,Z)));return o},
// Ground shake: pebbles near cx hop.
GR=(cx,r,o)=>PB.forEach(p=>M.abs(p-cx)<r&&o.push(T(p,rn()<.4?5:6,"·",I,Z))),
// Boulder at column bx: ground shake, dust, kicked pebbles, rolling spots.
R=(bx,o,loud,j,a)=>{GR(bx+5,24,o);
 add({x:bx-1-rn()*2,y:5.6+rn(),vx:-.25,vy:-.2,l:6,g:"▒",h:"░",cl:I});
 rn()<.3&&add({x:bx+9,y:5,vx:.8+rn(),vy:-1-rn(),gr:.35,l:12,g:"•",cl:ST});
 loud&&o.push(T(bx+2+c.R(-1,1),c.R(0,1),"RUMBLE",Y,B));
 ["  ▄█████▄  "," █████████ ","███████████"," ▀███████▀ "].forEach((s,j)=>o.push(T(bx,3+j,s,ST,B)));
 for(j=0;j<3;j++)a=bx/3.4+j*2.1,o.push(T(bx+5+rd(M.cos(a)*3.4),rd(4.5+M.sin(a)*1.05),"▒","#5c4c3c",{bg:ST}));
 return U(o)};
// Stroll to a spot and whistle, tapping a foot.
x=d>0?c.x:mx-c.x;sx=M.max(x,20);f=f.concat(c.walk(c.x,d>0?sx:mx-sx));x=sx;
for(i=0;i<9;i++)F(x,i%4>1?C:Rt,0,i%2&&L,150,0,[T(x+8+i%3,3-i%3,"♪♫"[i%2],X)]);
// A rumble grows from the edge behind him; he looks back, puzzled.
for(i=0;i<14;i++){o=[T(c.R(0,2)+i/3,c.R(0,1),"rumble",I)];GR(0,4+i*2,o);
 i>6&&o.push(T(x+4,2,"?",X,B));F(x,i>3&&L,0,0,90,0,o)}
// The boulder rolls in. Stare... look away... look back: jump!
D=x-6;N=M.max(30,M.ceil(D/1.8));
for(i=1;i<=N;i++){k=N-i;u=k<4?-1-(k%3>0):0;o=R(D*i/N-11,[],i>N/3);
 k<11&&o.push(H(x+4-(k<4),2+u,k<4?"!!":"!"));
 F(x,k>3&&(k>14||k<11?L:Rt),k<4&&"up",0,45,u,o)}
// The chase across the stage: gap opens, he stumbles, it closes in.
D=mx-x;N=M.max(40,M.ceil(D/1.25));ms=c.clamp(rd(2600/N),30,55);sx=x;
var K=[0,6,.3,9,.47,rn()<.75?2:5,.62,6,1,4],
gap=u=>{for(var j=2;K[j]<u;j+=2);return c.lerp(K[j-1],K[j+1],(u-K[j-2])/(K[j]-K[j-2]))};
for(i=1;i<=N;i++){u=i/N;x=sx+rd(D*u*(.6+.4*u));st=K[5]<3&&u>.4&&u<.47;gl=u>=.47&&u<.58;
 i%3||add({x:x+3,y:3,vx:-.8,vy:-.6,gr:.3,l:9,g:"'",cl:BL});
 o=R(x-11-gap(u),[T(x-3,4+i%2,"≡≡",S)],1);
 gl?o.push(H(x+3,2,"!!")):(i>>3)%2||st||o.push(T(x+2,2,SCR,X,B));
 F(x,st?C:gl||rn()<.07?L:Rt,(i>>1)%2?"up":"one-up",i%2?L:Rt,ms,st?1:0,o)}
// Cornered at the edge, slow motion: brake, look back, crouch... dive back over it!
bx=x-15;
[Rt,L,C].forEach((e,j)=>F(x,e,j==1&&"up",0,140,j>1?1:0,
 R(++bx,[H(x+4-(j>0),2,j?"!!":"!")].concat(j?[]:T(x-2,6,"°·",I)),0)));
F(x,C,"up",0,60,-2,R(++bx,[],0));
for(k=1;k<23;k++){bx+=2;x-=k<6?2:k<10;o=bx<W?R(bx,[],0):U([]);
 k<6&&o.push(T(x+9,1,"≡",S));
 k==10&&o.push(T(x-2,6,"°·",I),T(x+9,6,"·°",I));
 // Dazed: stars circle his head.
 if(k>10&&k<18)for(a=0;a<3;a++)o.push(T(x+1+3*((k+a)%3),3-(k+a)%2,"✦·*"[a],Y));
 F(x,k<3||k==10?C:k<6||k>10&&k<18&&k%2?L:Rt,k<10&&"up",0,k==10?160:k>10?90:45,k<6?-4:k<11?k-9:0,o)}
// A pause... then a distant CRASH.
for(i=0;i<9;i++)add({x:W-2-rn()*6,y:5,vx:-.3-rn()*1.4,vy:-.5-rn(),gr:.25,l:16,g:c.pick("•·▄▀"),cl:ST});
for(i=0;i<16;i++){o=i<8?[T(W-8+c.R(0,1),c.R(0,1),"CRASH!",Y,B)]:[];i<6&&GR(W,20,o);
 F(x,i<3?C:Rt,i<3&&"up",0,55,-(i==1),U(o))}
// Phew: a bead of sweat, wipe the brow, flick it off, wink.
F(x,Rt,0,0,350,0,[T(x+7,3,"'",BL)]);
for(i=0;i<6;i++)F(x,C,i%2?0:"one-up",0,170,0,[T(x+2,2,"phew",I)].concat(i>2?T(x+6+i,i,"'",BL):[]));
F(x,"wink",0,0,500);F(x,0,0,0,200);
return f});
