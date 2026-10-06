// Night river: lanterns fill the sky and shimmer in the water; Clawd lights the last one, wishes, it turns into a star.
$cdA("lantern-festival", { title: "Lantern festival", w: 70, scene: 1 }, function (c) {
var f=[],W=c.W,M=Math,S=M.sin,R=c.rng(c.R(1,1e6)),N=1e9,T=0,FD=N,DN=N,LT=N,LIT=N,RL=N,ST=N,sx,a,K,i,j,k,w,
x=c.clamp(c.x,0,c.mx-2),cx=x+4,Z=c.P,Rt="right",U="one-up",C="closed",
cl=v=>v<0?0:v>1?1:v,
H=v=>(v=S(v*127.1)*43758.5)-M.floor(v),
S2=[],S3=[],Tp=[],Wn=[],St=[],L=[],
Pt=[4,5,6].map(y=>{for(var s="";s.length<60;)s+=" ".repeat(9+R()*20|0)+"~-"[R()*2|0].repeat(2+R()*(y-3)|0);return s}),
Q=(X,y,t,c,b)=>({x:X,y,t,c,bg:b||K[y],z:-1});
// far shore
for(i=0;i<W;i++)S2[i]=" ",S3[i]="▄";
for(i=R()*4|0;i<W-6;i+=w+3+R()*10|0)
if((k=R()*3|0)<1){w=3+R()*4|0;for(j=0;j<w;j++)S3[i+j]="█",S2[i+j]=j?j<w-1?"▄":"▖":"▗";R()<.6&&Wn.push([i+1+R()*(w-2)|0,3])}
else if(k<2){w=3;S2.splice(i,3,"◢","█","◣");S3.splice(i,3,"▐","█","▌");Tp.push(i+1);Wn.push([i+1,2])}
else w=1,S2[i]="♣";
S2=S2.join("");S3=S3.join("");
for(i=0;i<W/20;i++)St.push([R()*W|0,R()*2|0,R()]);
for(k=M.min(32,W/4|0),i=0;i<k;i++)L.push({x:(i*.618+R()*.2)%1*W|0,t:1300+7e3*i/k+R()*300,v:.9+R(),D:3.5+R()*3,d:R()-.5,h:10+R()*32,b:R()<.45});
var sc=()=>{a=M.min(cl(T/900),1-cl((T-DN)/900));var P=[],rv=a*W,I=i=>M.abs(i-cx)<rv,F=(...v)=>c.rgb(...v.map(u=>8+(u-8)*a)),
q=(X,y,t,c)=>P.push(Q(X,y,t,c)),V=(s,b)=>(b&&(s=s.slice(0,10)+" ".repeat(55)+s.slice(65)),a<1?s.replace(/./g,(ch,i)=>I(i)?ch:" "):s),
e=cl((T-1500)/5e3)*(1-cl((T-FD)/1500)),sil=F(46,44,84),s,h,X,v,n,hb,i,k,y,
// lantern of n half-rows + reflection
lan=(X,h,n,w,hu,s,v)=>{for(var r=h>>1,t,b;r<=h+n-1>>1;r++)if(r>=0&&r<4){t=2*r>=h;b=2*r+1<h+n;
q(X,r,(t&&b?"█":t?"▀":"▄").repeat(w),c.hsv(hu,s,v));r&&v>.3&&(r>1||X<10||X>64)&&q(X+(H(X*7+r+(T/160|0))<.3),7-r,"~".repeat(w),c.hsv(hu,s,v*.5))}};
if(a<=0)return P;
K=[0,1,2,3].map(y=>F(10+y*(5+e*6),12+y*4,34+y*10));
K.map((b,y)=>P.push({...Q(cx-rv|0,y," ".repeat(2*rv+2|0)),o:1}));
St.map((s,j)=>I(s[0])&&q(s[0],s[1],H(j+(T/400|0))<.12?"✦":"·",s[2]<.4?"text":"inactive"));
Tp.map(i=>I(i)&&q(i,1,"▲",sil));
q(0,2,V(S2),sil);q(0,3,V(S3),sil);
Wn.map(([i,y],j)=>I(i)&&P.push(Q(i,y,"▪",c.hsv(38,.7,a*(H(j+(T/900|0))<.2?.45:.95)),sil)));
// river + floating lanterns, off the banner
for(y=4;y<7;y++)q(0,y,V(c.tile(Pt[y-4],y,0,-T/(90+70*(6-y))).t,1),F(50,70+y*6,120+y*8));
for(j=0;j<W/25;j++)i=(j*53+T/350|0)%W,I(i)&&(i<10||i>64)&&q(i,5+j%2,"▄",c.hsv(20+j*7%25,.8,(.7+.3*H(j+(T/120|0)))*a));
L.map((l,j)=>{s=(T-l.t)/1e3;if(s<0)return;hb=M.floor(5-l.D*(1-M.exp(-s*l.v/4)));n=l.b&&hb>2?2:1;
v=(.75+.25*H(j*9+(T/110|0)))*(.55+.45*cl(hb/5))*cl(1-(T-FD-H(j)*1200)/300)*a;
hb>=0&&v>.1&&lan(M.round(l.x+l.d*s*2+S(s*1.4+l.x)*.8),hb-n+1,n,1,l.h,.85,v)});
// Clawd's lantern, then his star
if(T>=LT){s=M.max(0,T-RL)/1e3;h=5-M.floor(s*4.2);X=x+8+M.round(S(s*1.6)*1.2);n=h>1?3:2;v=cl((T-LIT)/700);
if(h+n>0){lan(X,h,n,h>1?2:1,26,.8*v,(.7+.3*v*(.8+.2*H(T/90|0)))*a);T>RL+200&&(h+n+1>>1)<4&&q(X+(T/150|0)%2,h+n+1>>1,"·","#ffd890")}
else if(ST>T)ST=T,sx=X}
if(T>=ST){v=T-ST<400;q(sx,0,v?"✸":(T/300|0)%3?"✦":"✧",F(255,225,120));v&&[-2,2,0].map(d=>q(sx+d,d?0:1,"·","#ffe7a0"))}
return P},
add=(p,ms,o,ex)=>{var P=sc().concat(ex&&ex()||[]),g=T<LIT?0:cl((T-LIT)/700)*(1-cl((T-RL)/900));
f.push({x,pose:p,ms,offset:o||0,props:P,paint:g?u=>(u*=g/8,c.rgb(215+40*u,119+90*u,87+30*u)):void 0});T+=ms},
sp=()=>[0,1].map(()=>Q(x+c.R(0,6),c.R(2,3),c.pick("✧·"),"#ffe7a0"));
c.walk(c.x,x,{ms:55}).map(fr=>{fr.props=sc();f.push(fr);T+=fr.ms||60});
while(T<1300)add(Z(T<650?"left":Rt),110);
// watch, hop now and then
for(i=0;T<5200;i++){j=L.filter(l=>l.t<T).pop();k=i%15;add(k==6?Z(C):Z(j&&j.x<cx?"left":Rt,k>10?"up":"down"),k>10?100:130,k>10&&k<13?-1:0)}
// lantern up, light it
add(Z(Rt),200,1);LT=T;add(Z(Rt,U),450);add(Z(C,U),90);add(Z(Rt,U),300);
for(i=0;i<5;i++)add(Z(Rt,U),70,0,()=>[Q(x+10,3-i%2,"*✦"[i%2],"#ffe08a")]);
LIT=T;for(i=0;i<9;i++)add(Z(i<6?Rt:"wink",U),110);
// wish, release
for(i=0;i<10;i++)add(Z(C,U),110,0,sp);
RL=T;for(i=0;i<4;i++)add(Z(Rt,"up"),110);
for(i=0;i<12;i++)add(Z(C),110,0,()=>i>2&&[Q(x+3,3-(i-3)/3|0,"♥","#ff8090")]);
while(ST>T&&T<RL+5e3)add(Z(Rt),100);
for(i=0;i<8;i++)add(Z(i<3?Rt:"wink","up"),110,i%4==1?-1:0);
// fade out
FD=T;while(T<FD+1500)add(Z(T<FD+500?"left":T<FD+1e3?Rt:C),100);
DN=T;while(T<DN+1e3)add(Z(T<DN+500?C:"wink"),100);
f.push({x,pose:"default",ms:300});
return f;
});
