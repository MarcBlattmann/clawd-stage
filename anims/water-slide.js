// Clawd climbs a tower, rides a humpy water slide across the stage, flies off the lip and cannonballs into the pool.
$cdA("water-slide",{title:"Water slide",w:64},function(c){
var W=c.W,G=c.G,T=c.T,R=c.R,M=Math,U=M.round,f=[],Z={z:-1},WB="#5ab4ff",Y="warning",K="text",
d=c.x<c.mx/2?1:-1,FW=d>0?"right":"left",BW=d>0?"left":"right",
A=10,P0=W-16,B=P0-6,LX=W-13,L=B-A,st=M.ceil(L/12),hm=1+(L/20|0)+R(0,1),
SC=c.hsv(c.pick([8,42,275,330]),.65,1),
th=0,lim=A,pw=0,wl=0,n=0,ps=[],H=[],lx=0,o=0,e=FW,a="down",ft="both",fc=0,wet=0,sp=0,i,k,u,t,v,p,x0,o0,
TU=(d>0?"right-30 right-75 edge back-125 back":"left-30 left-55 left-75 back").split(" "),TT=TU.concat(TU.slice(0,-1).reverse()),
S=u=>d>0?u:W-1-u,X=l=>d>0?l:W-9-l,
Q=(u,y,s,k,x)=>T(d>0?u:W-u-s.length,y,s,k,x),
D=(u,y,vu,vy,ch,l)=>ps.push([u,y,vu,vy,ch,l]),
hy=u=>H[u]||6,bx=u=>(u=S(u))>9&&u<65,
SP=k=>Q(LX+1,1,"SPLASH!",k,{b:1});
// slide height in half rows (6..13 = rows 3..6): humps, sky-high over the banner, kicker lip
for(u=A;u<=B;u++){t=(u-A)/L;H[u]=M.min(hy(u-1)+1,c.clamp(U(6+7.4*M.pow(t,1.8)+2.2*M.sin(t*M.PI*hm*2)*(1.2-t)),6,bx(u)&&t<.6?7:13))}
for(k=1;k<4;k++)H[B-3+k]=H[B-3]-k;
// tower, slide with water pulses, posts, pool, particles
function Sc(){n++;var p=[],r=[],y,u,j;
for(y=0;y<21;y++)r[y]=[];
for(u=A;u<lim&&u<=B;u++){y=H[u]>>1;r[y+7*((u-n&7)>5)][S(u)]=H[u]&1?"▄":"▀";
if(u%9==4&&u<B-3&&!bx(u))for(j=y+1;j<7;j++)r[j+14][S(u)]="│"}
lim>A&&lim<=B&&p.push(Q(lim,hy(lim)>>1,"✦",Y));
for(y=0;y<21;y++)r[y].length&&p.push(T(0,y%7,Array.from(r[y],h=>h||" ").join(""),[SC,WB,"inactive"][y/7|0],Z));
for(y=7-th;y<7;y++)p.push(Q(0,y,y>7-th?"║"+"─".repeat(8)+"║":"▀".repeat(10),"#c8925a",Z));
for(y=7-pw;y<7;y++)p.push(Q(P0,y,y>7-pw?"█              █":"▄              ▄",K,Z));
wl&&p.push(Q(P0+1,6,"▓".repeat(14),"#2d6fd8",Z));
wl>1&&p.push(Q(P0+1,5,"≈~≈".repeat(6).substr(n%3,14),WB,Z));
ps=ps.filter(q=>q[5]-->0);
ps.forEach(q=>{p.push(Q(U(q[0]),U(q[1]),q[4],WB));q[0]+=q[2];q[1]+=q[3];q[3]+=.15});
return p}
var F=(ms,ex,oo=o)=>f.push({x:X(lx),offset:o,ms:ms,pose:fc?{facing:fc}:c.P(e,a,ft),
paint:wet?(x,y)=>G+oo+y>4?"#8fd0ff":"clawd_body":void 0,props:Sc().concat(ex||[])}),
adv=_=>th<4?th++:lim<=B?lim+=st:pw<3?pw++:wl<2&&wl++;

// park assembles while Clawd walks to the tower
f=c.walk(c.x,X(0),{ms:40,fx:r=>{adv();r.props=Sc()}});
for(;wl<2;)adv(),F(50);
F(350);e="wink";F(250);
// climb seen from behind, turn, gulp
TU.map(s=>{fc=s;F(60)});
for(k=1;k<5;k++)o=-k,fc="back-150",F(110),fc="back",F(150);
TT.slice(TU.length).map(s=>{fc=s;F(60)});
fc=0;F(400);F(350,[Q(12,1,"!",Y,{b:1})]);e="closed";F(140);e=FW;F(250);e="wink";a="up";F(350);
// ride: gravity on slopes, spray, speed lines
for(p=0,v=.25;p<B-5;){u=lx+4;v=c.clamp(v+.05+.13*(hy(u+2)-hy(u)),.35,2);p+=v;lx=U(p);o=(hy(lx+4)>>1)-7;
e=v>1.5?"closed":FW;a=v>.9?"up":"down";
for(k=v*1.5|0;k--;)D(lx+R(0,2),G+o+2,-v*R(3,8)/10,-R(4,10)/10,c.pick("·°'"),R(3,5));
F(55-v*8|0,v>1.2?[Q(lx-4,G+o+1,"≡≡≡","subtle"),Q(lx-10,G+o,"wheee!".slice(0,U(v*3)),K)]:[])}
// launch, twirl, cannonball
x0=lx;o0=o;k=M.max(9,M.ceil((LX-x0)/1.5));
for(i=1;i<=k;i++){t=i/k;lx=U(x0+(LX-x0)*t);o=M.max(-4,U(o0+(3-o0)*t-16*t*(1-t)));
fc=t>.2&&t<.7?TT[(t-.2)/.5*TT.length|0]:0;e=t>.7?"closed":"open";a=t>.7?"down":"up";
if(o>0&&!sp)for(u=0;u<18;u++)D(LX+4+R(-3,3),4,R(-15,15)/10,-R(6,16)/10,c.pick("·°*'"),R(5,9));
sp+=o>0;F(t>.3&&t<.5?80:45,sp?[SP(WB)].concat(sp<3?[Q(LX+2,3,"\\ | /",WB,{b:1})]:[]):[])}
fc=0;wet=1;
for(i=0;i<5;i++)F(150,[Q(LX+R(2,6),4-i%2,"°o"[i%2],WB)].concat(i<2?[SP(K)]:[]));
// surface, spout, wave
e="closed";o=2;F(160);o=1;F(160);o=0;F(220);
for(i=0;i<6;i++)D(LX+4,G-1,R(-4,4)/10,-1.1,"°",6),e=i<3?"open":"wink",F(90,[Q(LX-1-i%2,5,"~",K),Q(LX+9+i%2,5,"~",K)]);
a="up";F(400);a="one-up";e="open";F(180);a="up";F(180);
// hop out, drip, shake off
a="down";e=BW;o=1;F(140);x0=lx;
for(i=1;i<10;i++){t=i/9;lx=U(x0+(P0-10-x0)*t);o=U(1-t-14*t*(1-t));wet=t<.5;D(lx+R(1,7),G+o+2,0,.2,"·",3);F(55)}
o=1;F(80);o=0;F(160);
for(i=0;i<8;i++){e=ft=i%2?"left":"right";a=i%2?"one-up":"down";
[-1,1].map(j=>D(lx+4+5*j,G+R(0,2),j*R(6,14)/10,-R(2,6)/10,"·",4));F(60)}
ft="both";a="down";e="wink";F(450);
// slide reels in, pool drains, tower sinks
for(e=BW;lim>A||th||pw||wl;){lim=M.max(A,lim-st);wl?wl--:pw&&pw--;lim>A||!th||th--;F(55)}
e="open";F(300);
f.push({x:X(lx),pose:"default",ms:300});
return f;
});
