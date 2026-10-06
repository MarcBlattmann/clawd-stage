// Jungle vines span the stage; Clawd swings across yelling, a parrot spooks the last vine, he lands in a bush.
$cdA("jungle-vines",{ scene: 1,title:"Jungle swing",w:70},c=>{
var W=c.W,T=c.T,M=Math,S=M.sin,C=M.cos,rd=M.round,ab=M.abs,mx=M.max,cl=c.clamp,cR=c.R,rn=c.rng(cR(1,1e5)),rs=k=>(rn()-.5)*k,f=[],p,t=0,i,k,
d=c.x+4<W/2?1:-1,L3=["open","left","right"],E=L3[1.5+d/2],N=L3[1.5-d/2],U="one-up",X="closed",Y="chromeYellow",LF="#5faf46",
x=cl(c.x,4,c.mx-4),A=x+8,AL=d>0?W-6:4,cH=a=>rd(a-d*4.93),xe=cH(AL)-8,xf=xe-14*d,
n=mx(1,rd((AL-A)*d/20)),V=[],J=[],P=[],cx=c.x+4,R=0,B=W+30,hv,hx,hy,bs,ys,pq={x:AL-d,y:1,e:-d},
vis=j=>ab(j-cx)+(J[j]||9)<R,vi=(a,L)=>V.push({a,L,p:rn()*6}),lv=(x,y,a,b,g,h)=>P.push({x,y,a,b,g,h}),
Z=(x,y,s,c)=>T(x,y,s,c,{z:-1}),G=Array(6).fill(""),a=rn()*9,b=rn()*9,z=cR(0,46),
RW="0010213146515253545556".match(/../g),CL=["#1e5f2d",LF,"#287332","#ff9646","#469632","#7d5537"];
for(k=0;k<=n;k++)vi(rd(A+(AL-A)*k/n),3.3);
for(k=A-d*20;k>0&&k<W-1;k-=d*cR(15,23))vi(k,1.5+rn()*1.8);
for(i=0;i<W+4;i++){var q=S(i*.29+a)+S(i*.11+b),u=S(i*.21+b)+S(i*.05+a),g=(i<8||i>65)&&S(i*.9+a)+S(i*.37+b)>1.1,m=(i+z)%47;J[i]=rn()*5;
["█▓█▒▓█"[rn()*6|0],q>.9?"♣▓♣"[rn()*3|0]:" ",u>-.4?u>1.3&&rn()<.4?"♣":"▀":" ",u>.2&&rn()<.05?"✿":" ",g?"vwW\\|/♣✿"[rn()*8|0]:" ",i>66&&m<2&&ab(i-xe-4)>12?"▐█"[m]:" "].map((h,j)=>G[j]+=h)}
var vn=(a,tx,ty,l)=>{var s=(tx-a)/ty,h=ab(s)>1.7?"~":ab(s)>.45?s>0?"\\":"/":"│",m=rd(ty),r,lo,e,L;
for(r=1;r<=m;r++)lo=rd(a+s*(r-.5)),e=rd(a+s*M.min(r+.5,ty))-lo,L=mx(0,ab(e)-1),p.push(Z(e<0?lo-L:lo,r,h.repeat(L+1),CL[4]));
l&&m&&p.push(Z(rd(tx),m,"♣",LF))},
F=(X0,o,e,ms,ex,a,ft)=>{t++;p=[];var sh=rd(S(t*.07)*1.4)+2,g=t-ys,q=pq,x,y,w;
RW.map(([j,y])=>{var h=G[j].substr(j==1&&sh,W);p.push(Z(0,+y,R<B?h.replace(/\S/g,(h,j)=>vis(j)?h:" "):h,CL[j]))});
V.map((v,k)=>{var g=cl((R-ab(v.a-cx)-J[v.a])/8,0,1),q=.12*S(t*.1+v.p)+(t>v.r-4.5&&v.m*C(.35*(t-v.r))*M.exp(-.05*ab(t-v.r))),L=v.L*g;
g&&(k==hv?vn(v.a,hx,hy):vn(v.a,v.a+2.1*L*S(q),L*C(q),1))});
R==B&&rn()<.06&&lv(cR(0,W-1),1,rs(.3),.18,0,"♣");
P=P.filter(q=>(q.x+=q.a,q.y+=q.b,q.b+=q.g,y=rd(q.y),y>=0&&y<7&&vis(x=rd(q.x))&&(y<4|x<10|x>64)&&p.push(T(x,y,q.h,LF))));
vis(xe+4)&&p.push(T(xe-1+(bs>0?bs--&1||-1:0),5,"▗▟▙▄▟█▙▄▟▙▖",CL[4]),T(xe-1,6,"▟███✿█████▙",CL[4]));
g<40&&p.push(T(cl(A-8,0,W-17),0," "+"AAAH-AH-AAAAAH!".slice(0,g*1.6)+" ",g>30?"inactive":Y,{b:1,o:1}));
if(q&&vis(q.x)){x=q.x+=q.v||0;y=q.y;w=q.e;p.push(T(w>0?x-2:x,y,w>0?"=█●":"●█=","error"),T(x+w,y,w>0?">":"<",Y));
q.f&&p.push(T(x-w,y+(t&2?-1:1),t&2?"▄":"▀","success"));q.l&&p.push(T(x+2*w,y,"♣",LF))}
f.push({x:X0,offset:o|0,pose:c.P(e,a,ft),ms:ms||50,props:p.concat(ex||[])})},
Q=(o,e,ms,ex,a)=>F(xe,o,e,ms,ex,a),fo=y=>Object.assign(pq,{f:1,e:d,y,v:2*d}),
ir=(x,i)=>(R=RM*i/18,F(x,0,L3[i/6|0],65)),
sw=(v,a,b,m,ez,y)=>{hv=v;lv(V[v].a,1,0,.2,0,"♣");
for(var j=1,q;j<=m;j++)q=a+(b-a)*(ez?(1-C(M.PI*j/m))/2:S(M.PI*j/m/2)),hx=rd(V[v].a+d*6.93*S(q)),hy=rd(3.3*C(q)),y&&j<2&&(ys=t+1),F(hx-8,hy-4,y&&j<8?X:E,ez?55:n>6?38:45,0,U)},
fly=(k,z)=>{hv=-1;V[k].m=1.22*d;V[k].r=t;var x1=hx,y1=hy,x2=cH(V[k+1].a),m=mx(2,rd(ab(x2-x1)/1.5)),j,u,g=mx(1,m-4);
z&&(V[k+1].m=.6*d,V[k+1].r=t+m);
for(j=1;j<=m;j++)u=j/m,hx=rd(x1+(x2-x1)*u),hy=mx(1,rd(y1+(2-y1)*u-(m>3)*4*u*(1-u))),z&&j==g&&fo(1),
F(hx-8,hy-4,E,45,[T(hx-8+(d>0?-2:9),hy+1,"≡","subtle"),...z&&j<g?[T(pq.x,0,"!","warning",{b:1})]:[]],"up",L3[1+j%2])},
RM=mx(cx,W-cx)+14,lf=T(xe+4-2*d,3,"♣",LF);
for(i=1;i<19;i++)ir(c.x,i);
R=B;
for(k=c.x;k!=x;)k+=k<x?1:-1,F(k,0,L3[k<x?2:1],0,0,0,L3[1+k%2]);
F(x,0,E,400,0,U);F(x,1,X,160);F(x,0,0,60,0,U);
hv=0;hx=A;hy=3;F(x,-1,"wink",220,0,U);
sw(0,0,-.7,6,1);sw(0,-.7,1.22,12,1,1);
for(k=1;k<n;k++)fly(k-1),sw(k,-.79,1.22,12);
fly(n-1,1);
// misses, falls; the parrot mocks him
[[E,150],[0,550,"?"],[X,150,"!"]].map(([e,m,s])=>Q(-2,e,m,s&&[T(xe+4,1,s,Y,{b:1})],"up"));
Q(-1,X,45,[T(xe+2,1,"¦   ¦","subtle")],"up");
for(bs=10,i=0;i<10;i++)lv(xe+cR(0,8),5,rs(1.4),-.6-rn()*.6,.13,"♣♣*·"[i%4]);
for(i=0;i<9;i++)Q(2,X,i>7?450:55);
for(i=0;i<9;i++)Q(0,i<5?X:L3[1+i%2],i<5?100:200,[lf,...i<5?[T(xe+i%2*8,3,"✦",Y)]:[]]);
pq={x:d>0?W+1:-2,y:1,e:-d,f:1};a=pq.x;
for(i=1;i<8;i++)pq.x=rd(c.lerp(a,xe+4,i/7)),i>6&&(pq.y=3,pq.f=0),Q(0,E,60,[lf]);
for(i=0;i<16;i++)Q(0,i<10?0:X,i<10?75:i>14?600:90,[lf,T(cl(xe-2,0,W-12),2,"aah-ah-aaah!".slice(0,i+1),"error")]);
pq.l=1;Q(0,"wink",300);
fo(2);
for(i=0;i<7;i++)Q(0,E);
pq=0;
[-1,-2,-3,-3,-2,-1,0].map((o,j)=>F(xe-d*2*(j+1),o,N,55,0,"up",L3[1+j%2]));
F(xf,1,X,80);
for(i=0;i<6;i++)lv(xf+cR(1,7),4,rs(1.6),-.4,.12,"♣"),F(xf+i%2,0,X,60,0,0,L3[1+i%2]);
F(xf,0,"wink",400);
cx=xf+4;RM=mx(cx,W-cx)+14;
for(i=18;i--;)ir(xf,i);
f.push({x:xf,pose:"default",ms:300});
return f});
