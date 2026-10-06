// The sea rolls in, Clawd sails from a lighthouse to a palm island, drops anchor, waves, a gull lands on him, the sea drains.
$cdA("sailing-voyage",{ scene: 1,title:"Sailing voyage",w:70},function(c){
var f=[],W=c.W,M=Math,R=c.rng(c.R(1,1e6)),Q=c.T,cl=c.clamp,T=0,x=c.x,U=x<c.mx/2,d=U?1:-1,
D=U?W-33:M.min(x,cl(W-76,25,89)),LX=U?1:W-8,IX=U?W-14:D-24,sv=2,sk=4,lh=7,il=7,mh=0,k=0,hu=0,gy=9,mv=0,rp=0,an=0,i,j,e,
Z={z:-1},N={},E="error",X="text",I="inactive",C="closed",K="wink",B="#a0703c",SP="#c8e6ff",AC="#b4bcc8",MC="#c8b090",GN="#5ac85a",SD="#e8c878",
EY=U?"right":"left",BK=U?"left":"right",AR=U?"one-up":"down",
CL=[],GU=[],wr=(v,s)=>(v%s+s)%s,rr=(s,n)=>s.repeat(n),
sweep=()=>M.max(0,M.sin(T/300))*16|0,lamp=sweep,
spl=(a,n)=>{for(var r=[];n--;)r.push(Q(a+c.R(-3,3),c.R(2,5),c.pick("°·*'"),SP));return r},
anc=(a,b)=>[Q(a,b,"┼",AC),Q(a-1,b+1,"╰┴╯",AC)],
gl=(a,b,w)=>[Q(a,b,w?"^v^":"~v~",X,{b:1})];
for(i=0;i<W/22;i++)CL.push([i*22+R()*8,5+R()*7|0,1+R()*.6]);
for(i=0;i<2+W/45;i++)GU.push([R()*W,1+R()*2|0,(R()<.5?-1:1)*(3+R()*4)]);
var scene=()=>{var A=[],t=T/1000,q=(x,y,s,col,o)=>{y>=0&&y<7&&A.push(Q(M.round(x),y,s,col,o||Z))},m=U?x+11:x-3,hx=U?x-1:x-9,fl=(T/150|0)%2,bl=lh?0:lamp(),sw=(T/600|0)%2;
CL.forEach((l,i)=>{var w=l[1],a=wr(l[0]+d*l[2]*t,W+22)-11,cc=i%2?X:I;q(a+1,-sk,"▗"+rr("▄",w-4)+"▖",cc);q(a,1-sk,rr("▀",w),cc)});
GU.forEach((g,i)=>q(wr(g[0]+g[2]*t,W+6)-3,g[1]+((t*1.3+i)%2|0)-gy,(T/200+i|0)%3?"~v~":"^v^",I));
// sparse crests in the banner box
[[5,"  ~^~    ~~     ^~~      ~   ","#82c8ff",4],[6,"~~^~~~-~~~^~~~~","#3c82e6",7]].forEach(r=>{var o=c.tile(r[1],r[0]+sv,r[2],-d*r[3]*t,Z),s=o.t;o.t=s.slice(0,10)+s.slice(10,65).replace(/[^^]/g," ")+s.slice(65);o.y<7&&A.push(o)});
"◢█◣ ▐●▌ ███ ███ ███ ▐███▌ ▄█████▄".split(" ").forEach((s,j)=>q(LX+2-(s.length>>1),j+lh,s,j==1?bl>3?"#ffe680":"#7a6a40":j>5?"#8c8c9a":j%2||!j?E:X));
bl>2&&q(U?LX+4:LX+1-bl,1,U?rr("═",bl-2)+" ·":"· "+rr("═",bl-2),"#fff0a0");
[[1+sw,1,"▄▀▀▀▄█▄▀▀▀▄",GN],[1+sw,2,"▀         ▀",GN],[5,2,"•▐•",B],[6,3,"▐",B],[6,4,"▐",B],[3,5,rr("▄",7),SD],[0,6,"▟"+rr("█",11)+"▙",SD]].forEach(r=>q(IX+r[0],r[1]+il,r[2],r[3]));
if(hu){q(hx,6,"◥"+rr(" ",17)+"◤",B,N);q(hx+1,6,rr("▀",17),"#d8a468",{bg:B});
for(j=6-mh;j<5;j++)q(m,j,"│",MC,N);
mh&&q(U?m:m-4,5,U?"└────":"────┘",MC,N);
for(j=1;j<=k;j++)q(U?m+1:m-j,j,U?rr("█",j-1)+"◣":"◢"+rr("█",j-1),j==3?"#ffa060":X,N);
mh>5&&k&&q(U?m+1:m-2,0,fl?"▀▄":"▄▀",E,N);
rp&&q(U?x+9:x-2,U?4:5,"──",MC,N);
an&&q(U?x-2:x+10,6,U?"/":"\\",AC,N);
if(mv){q(U?hx+19:hx-1,5,fl?"°":"·",SP,N);q(U?hx-4:hx+19,6,U?"·-~~":"~~-·",SP,N)}}
return A},
add=(ey,ar,ms,o,ex)=>{f.push({x,pose:c.P(ey,ar),ms,offset:o||0,props:scene().concat(ex||[])});T+=ms};
// sea rises, boat surfaces under him
for(i=5;i--;){sk=i;sv=i>>1;gy=i+1;add(i%2?"left":"right",0,110)}
gy=0;add(0,0,200);add(C,0,120);
add(0,0,120,1);add(0,"up",60,-1);hu=1;add(0,"up",90,-2,spl(x+4,6));add(0,0,60,-1,spl(x+4,4));add(K,0,160);
for(mh=1;mh<7;mh++)add(EY,0,45);mh=6;
for(k=1;k<5;k++)add(EY,AR,80);k=4;rp=1;add(K,AR,300);
// sail past the lighthouse to the island
mv=1;var x0=x,n=cl(M.abs(D-x0)/1.3|0,70,170);
for(i=1;i<=n;i++){e=i/n;x=M.round(x0+(D-x0)*e*e*(3-2*e));lh=cl(26-i>>1,0,7);il=cl(n*.45+14-i>>1,0,7);add(i>12&&i<30?BK:i%40==20?C:EY,AR,50)}
mv=rp=0;add(EY,0,200);add(K,"up",90,-1);add(K,"up",200);
// anchor
add(0,"up",250,0,anc(x+4,2));
var tx=U?x-6:x+14;
for(i=1;i<8;i++){e=i/7;add(BK,0,55,0,anc(M.round(x+4-10*d*e),M.round(2+3*e-8*e*(1-e))))}
an=1;for(i=0;i<4;i++)add(i<2?C:BK,0,80,0,spl(tx,6-i));
for(k=4;k--;)add(BK,0,70);k=0;
// wave, lighthouse flashes back
lamp=()=>(T/130|0)%2*14;for(i=0;i<10;i++)add(i%4==3?K:BK,i%2?"up":"one-up",130);lamp=sweep;
// gull lands on his head
for(i=0;i<9;i++)add(EY,0,55,0,gl(x+3+3*d*(8-i),M.round(i*3/8),i%2));
add(C,0,300,0,gl(x+3,3));add(K,0,500,0,gl(x+3,3));
for(i=1;i<9;i++)add(i<3?C:0,0,50,0,gl(x+3-3*i*d,3-(i>>1),i%2));
// sea drains
for(i=1;i<9;i++){sk=M.min(4,i);gy=i;il=lh=M.min(7,i+(i>>1));mh=M.max(0,7-i);if(i==7)hu=an=0;sv=cl(i-6,0,2);add(i<3?BK:0,0,90,0,i==7?spl(x+4,8):[])}
f.push({x,pose:"default",ms:300});
return f});
