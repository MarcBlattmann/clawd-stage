// Farm dawn: the rooster crows, Clawd tractors around the stage, sheep hop the fence.
$cdA("farm-morning",{title:"Farm morning",w:70,scene:1},function(c){
var W=c.W,M=Math,R=c.rng(c.R(1,1e6)),P=c.P,T=0,f=[],L,i,k,w,K=1e9,CR=K,SH=K,BA=K,SK=K,EN,Y="chromeYellow",I="inactive",
cl=v=>v<0?0:v>1?1:v,
C=a=>a.L==L?a.s:(a.L=L,a.s=c.rgb(a[0]*L,a[1]*L,a[2]*L)),
RD=[185,55,45],WH=[240,232,220],GN=[85,170,80],BR=[170,120,80],HY=[230,190,95],
bx=2+(R()*W*.07|0),jx=bx+18,n=3+(W>99)+(W>159),pe=jx+5+n*6,sx=W-6-(R()*W*.1|0),
B=[],FG=[],Cl=[],WM=[],rs=[[bx-1,bx+11],[jx-1,pe+1],[sx-2,sx+5]],
ob=(x,w,l,o)=>{rs.push([x-1,x+w]);B.push([x,l,D(x),o])},
wm=x=>{WM.push(x);ob(x,5,[" ▗█▖"," ▐█▌","▟███▙"],BR)},
X=c.x,X0,Xf=M.min(X,W-28),TX,FT=c.tile("─┼──",3).t,
D=x=>200+x/W*700,g=(d,e=d)=>M.ceil(4*M.max(1-cl((T-d)/300),cl((T-SK-e)/300)));
X>W-28&&(f=c.walk(X,X=W-28));TX=X0=X+11;
ob(jx,4,["┬──┬","┼──┼"],BR);
wm(pe+3+(R()*M.max(0,sx-pe-10)|0));
for(i=1;i<W-3;i+=3+R()*10|0){k=R()*4|0;w=[3,3,4,5][k];if(rs.every(r=>i+w<r[0]||i-1>r[1])){k>2?W>130&&wm(i):ob(i,w,[["▗█▖","▜█▛"," │"],[" ▲","◢█◣"," │"],[" ▄▄","▟██▙"]][k],[GN,[50,135,80],HY][k]);i+=w}}
for(i=0;i<W;i++)(i<9||i>65)&&R()<.15&&FG.push([i,",'\"✿❀"[k=R()*5|0],k<3?GN:[240,150,190],D(i)]);
for(i=0;i<W/40;i++)Cl.push([R()*W,"▄▟"+"█".repeat(1+R()*4)+"▙▄",.002+R()*.003]);
var sc=()=>{
var A=[],q=(x,y,t,o,b)=>t&&!(y>>2)&&A.push({x,y,t,c:o,bg:b,o:b,z:-1}),
s=cl((T-900)/2400),a=c.rgb(255,110+110*s,50+40*s),y=4-4*s+g(0)|0,x,i,j,k,p,m,u,b=g(D(bx)),h;
L=.55+.45*s;h=C(WH);
q(sx,y,"▄██▄",a);q(sx,y+1,"▀██▀",a);
Cl.map(o=>T<SK+o[0]/W*900&&q((o[0]+T*o[2])%(W+12)-8|0,0,o[1],h));
q(a=W*cl((T-SK-200)/700)|0,3,FT.slice(a,W*cl((T-200)/800)),C(BR));
B.map(o=>{k=g(o[2]);o[1].map((t,j)=>q(o[0],4-o[1].length+j+k,t,C(t==" │"?BR:o[3])))});
WM.map(x=>{k=g(D(x));((T/150+x/2|0)%2?" \\ /,  ●, / \\":"  │,──●──,  │").split(",").map((t,j)=>q(x,j+k,t,h))});
m=T>CR&&T<CR+1800&&(T/120|0)%2;q(bx+3,b,m?"◤█":"◣█","warning");q(bx+5,b,m?"▲<":"▲▶","error");
a=(T-CR)/45|0;a>0&&T<CR+2300&&q(bx+11,0,"COCK-A-DOODLE-DOO!".slice(0,a),Y);
for(i=0;i<n&&(a=T-SH-i*650)>=0;i++){p=jx+7+(n-1-i)*6;u=a/65|0;x=M.min(bx+5+u,p);m=x<p;k=x-jx+6;
y=2-(k>0&&k<11?M.round(2.3*M.sin(k/3.5)):0)+g(D(jx));a=T-BA-i*300;a=a>0&&a<700;
q(x,y,"▄███",h);q(x,y+1,m&&x%2?"█▀█▀":"▀█▀█",h);q(x+4,y+!(m||a),m||a?"▄":"▀",I);
u>17&&u<27&&q(jx+1,0,i+1+"",Y);a&&q(x,y-1,"baa!",h)}
q(bx,1+b,"▗▟"+"█".repeat(7)+"▙▖",C([150,52,45]));["║ ┌───┐ ║","║ │✕│✕│ ║"].map((t,j)=>q(bx+1,2+j+b,t,h,C(RD)));
k=g(300,0);x=TX;m=x&1?"(✚)":"(✕)";
A.push(...c.art(x+9,3+k,["    ▐","▄▄▄▄█▄▖"],"success"),c.T(x-1,5+k,"▐"+"█".repeat(16)+"▌","success"),c.T(x,6+k,m+"         "+m,Y));
if(EN)for(j=0;j<3;j++){a=((T/70|0)+j*5)%15;q(x+13-(a/4|0),2-(a/5|0)+k,"°oO"[a/5|0],I)}
FG.map(o=>T>o[3]&&T<SK+o[3]&&A.push({x:o[0],y:6,t:o[1],c:C(o[2]),z:-1}));
return A},
fr=(p,ms,o,e,h)=>{f.push({x:c.clamp(X,-9,W),pose:p,ms,offset:o|0,hide:h,props:sc().concat(e||[])});T+=ms};
while(T<3300)fr(P(T<400?"left":T<800?"right":"closed"),100,0,T>900&&[..."zzZ"].slice(0,(T/250|0)%4).map((z,j)=>c.T(X+7+j,3-j,z,I)));
CR=T;var rd=P(bx<X?"left":"right"),Rt=P("right");
fr(P("closed"),250);
[-1,-2,-3,-2,-1,0].map(o=>fr(P(0,"up"),60,o));
fr(rd,500);fr(P("closed"),90);fr(rd,500);fr(Rt,300);fr(Rt,120,1);
[-2,-3,-3,-3,-2,-1].map((o,i)=>(X+=i<5?2:1,fr(P("right","up"),55,o)));
fr(Rt,250,-1);
EN=1;for(i=0;i<8;i++)fr(P(i<3?"closed":"right"),70,-1-i%2);
SH=T+300;var s=W>120?2:1,ms=c.clamp(3800*s/(W+18-X0+Xf)|0,25,55),
go=e=>{for(;X<e;)X=M.min(X+s,e),TX=X,fr(Rt,ms,(X+99)%11<s?-2:-1,0,X>W||X<-9)};
go(W+1);X=-17;go(Xf);
var wd=jx+6+n*3<X?"left":"right";
while(T<SH+n*650+1400)fr(P(wd),100,-1);
BA=T;for(i=0;i<10;i++)fr(P(i==7?"wink":wd,i%2?"up":"one-up"),140,-1,i>4&&[c.T(X+4,2-(i>7),"♥","error")]);
fr(P("wink"),350,-1);
SK=T;EN=0;
[-2,-3,-3,-3,-2,-1,0,1,0].map((o,i)=>fr(i<6?P(0,"up"):P("closed"),70,o));
while(T<SK+1500)fr(P(T<SK+1100&&((T/400|0)%2?"left":"right")),120);
f.push({x:X,pose:"default",ms:200});
return f});
