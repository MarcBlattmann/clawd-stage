// A tornado sweeps the plains, sucks up a cow, a fence post and Clawd's haystack, spins him and drops him.
$cdA("tornado-plains",{title:"Tornado",w:70,scene:1},function(c){
var W=c.W,M=Math,P=c.P,R=M.random,f=[],T=0,K=1e9,E=K,hP=K,hT=K,tl=0,v=0,Ym=6,i,n,s,
cl=v=>v<0?0:v>1?1:v,rn=M.round,CT=c.T,
d=c.x+4<W/2?-1:1,X=c.x,X0=d<0?c.clamp(X,22,W-25):c.clamp(X,16,c.mx-20),
hx=X0+10*d,S=d<0?W-7:6,tx=S,H=hx+4-S,LR=["left","right"],LK=LR[+(d<0)],
GD="#e1b446",BR="#a07346",Y="chromeYellow",Z="closed",
rs=n=>{for(var s="",k=0;k<37;k++)s+=n[R()*n.length|0];return s},C0=rs("▓█▓▒█▀"),C1=rs("▀▀▀   ▀▄ "),
FC="right-30,right-75,edge,back-125,back,left-55,left-12".split(","),
hs=d<0?2+R()*W/4|0:W-11-R()*W/4|0,pp=3*rn((S+H*.72)/3),TF=[],
cw={x:rn(S+H*.38),y:2,a:0,r:6,h:1,p:K,k:1,dt:K},O=[cw,{x:pp,y:3,a:2,r:4,h:3,p:K,t:"│/─\\",c:BR}],
tr=(s,p)=>[...s].map(h=>{var j=p.indexOf(h);return j<0?h:p[j^1]}).join(""),
CA=[[0,"▗▄▄▄▄▄██","text"],[1," █▀▀▀█▀ ","text"],[0,"  ▄ ▄   ","inactive"],[1,"      ▀ ","#f096aa"]];
for(s="",i=0;i<W;i++)s+=i>hs-2&&i<hs+11||(i/9|0)*37%7<2&&M.abs(i-pp)>4?" ":i%3?"─":"┼";
var FN=[s,s.slice(0,pp)+" "+s.slice(pp+1)];
for(i=1;i<W;i+=4+R()*9|0)(i<10||i>64)&&TF.push([i,R()<.2]);
for(i=0;i<11;i++)O.push({x:hx+i-4,y:5+i%2,a:R()*7,r:2+R()*4,h:1+i%4,p:i<5?-K:K,s:i>4,t:"♣♦•♣♦~-'~-'"[i],c:i<5?["success","rainbow_orange",BR][i%3]:GD});
var sc=()=>{var A=[],k,y,s,x,n,
q=(x,y,t,col,z,bg)=>{x=rn(x);y=rn(y);if(y>=0&&y<=Ym){var p={x,y,t,c:col};if(z)p.z=-1;if(bg)p.bg=bg,p.o=1;A.push(p)}},
u=x=>(d<0?W-x:x)/W*700,g=x=>M.ceil(4*M.max(1-cl((T-u(x))/250),cl((T-E-u(x))/250))),
cut=(t,y,col,h)=>{var p=c.tile(t,y,col,h),a=W*cl((T-E)/700),b=W*cl(T/700),lo=rn(d>0?a:W-b);p.t=p.t.slice(lo,rn(d>0?b:W-a));p.x=lo;p.z=-1;p.t.trim()&&A.push(p)},
fl=T<E&&(n=T%3700-2900)>0&&n<99||n>199&&n<270,
cwD=(x,y,L,U,z)=>CA.map(a=>{var s=a[1];if(L)s=tr([...s].reverse().join(""),"▗▖▝▘");if(U)s=tr(s,"▄▀▗▝▖▘");q(x,y+(U?1-a[0]:a[0]),s,a[2],z)});
cut(C0,0,fl?"#c8c8e6":"#555566",T/60*d);cut(C1,1,fl?"#aaaac8":"#767687",T/90*d);
fl&&[..."\\/\\"].map((t,j)=>q((T/3700|0)*53%(W-4)+2+j%2,j+1,t,Y,1));
cut(FN[+(O[1].p<T)],3,BR);
Ym=3;k=g(hs);q(hs,1+k,"▗▟█████▙▖","#aa3c32",1);
q(hs+1,2+k," ■   ■ ",(T/600|0)%3?Y:"inactive",1,s="#c8aa82");q(hs+1,3+k,"   █   ",BR,1,s);
cw.p>T&&cwD(cw.x-4,2+g(cw.x),d>0,0,1);Ym=6;
TF.map(a=>g(a[0])||q(a[0],6,a[1]?"✿":",'\""[(T/170+a[0]*.4|0)%3],a[1]?"rainbow_violet":"success",1));
if(T-hP<550){n=(hx+4-tx)*d<14&&(T/50|0)%2;k=M.ceil(3-3*cl((T-hT)/300));
T<hP+150&&q(hx-1+n,4+k,"\\'       '/",GD);T<hP+350&&q(hx-1+n,5+k,"▗▟▓█▓█▓█▓▙▖",GD);q(hx-2+n,6+k,"▟█▓█▓█▓█▓█▓█▙",GD)}
for(y=0;y<tl;y++){n=+"7654322"[y];x=tx+M.sin(T/170+y*.8)*y*.3;for(s="",k=0;k<n*2+1;k++)s+="█▓▒░▒▓"[(k+y+(T/40|0))%6];
q(x-n,y,s,c.rgb(k=110+y*14,k,k+18),1)}
O.map(o=>{var a=T/(o.k?240:130)+o.a,e=o.p<T?cl((T-o.p)/450):0,x=o.x+(tx+M.cos(a)*o.r-o.x)*e,y=o.y+(o.h+M.sin(a)*.8-o.y)*e,z=M.sin(a)<0,L=!z,U=(T/300|0)%2;
if(o.k){if(o.p>T)return;if(T>o.dt){e=cl((T-o.dt)/550);x+=(o.lx-x)*e;y+=(5-y)*e-M.sin(e*3.14)*3;z=0;if(e>=1){L=d<0;U=0;y+=g(x);T<o.dt+800&&q(x-6,6,"░▒",GD)+q(x+4,6,"▒░",GD)}}
cwD(x-4,y,L,U,z);e>0&&T<o.p+1200&&q(x+(L?-9:5),y,"moo?!","text")}else if(e>0&&(o.s||tl>6))q(x,y,o.t[o.t.length>1?(T/90|0)%4:0],o.c,z)});
return A},
fr=(p,ms,o,ex)=>{f.push({x:X,pose:p,ms,offset:o|0,props:sc().concat(ex||[])});T+=ms;tx+=d*v*ms;O.map(o=>o.p==K&&!o.s&&tl>6&&(o.x-tx)*d<=2&&(o.p=T))},
fol=()=>X+=M.sign(c.clamp(rn(tx)-4,0,c.mx)-X),bang=[CT(X0+4,3,"!",Y,{b:1})];
while(T<1e3||X!=X0)fr((X+=n=M.sign(X0-X),n)?P(LR[+(n>0)],0,LR[X%2]):P(T>700?LK:0),60);
for(hT=n=T;tl<7;)tl=M.min(7,(T-n)/150|0),fr(P(T-n>300?LK:0),60,0,T-n>600&&bang);
fr(P(LK,"up"),400,0,bang);
v=M.max(.012,M.abs(H)/3400);
[0,-1,0,-1].map(o=>fr(P(LK,"up"),70,o));
for(i=0;i<5;i++)X+=2*d,fr(P(LR[+(d>0)],"up",LR[i%2]),50);
[-1,-2,-1,1,2].map((o,j)=>fr(P(Z,"up"),60,o,j>2&&[CT(X-1,4,"'  ,   '",GD)]));
while((n=(hx+4-tx)*d)>3)n>14&&(T/450|0)%3?fr(P((T/150|0)%4?LK:Z),50,0,[CT(X+3,3,"\\|/",GD)]):fr(P(Z),50,2);
hP=T;v=.0035;O.map((o,j)=>o.s&&(o.p=T+j*50));
for(i=0;i<12;i++)fr(P(i<5?Z:i<8?0:LR[i%2]),60,i<6?2:1);
[0,-1,-2,-3].map(o=>(fol(),fr(P(0,"up"),70,o)));
for(i=0;i<56;i++)fol(),fr(i%8<7?{facing:FC[i%8]}:P(Z,"up"),45,-3+rn(M.sin(i/4)));
n=d>0?W+14-tx:tx+14;v=M.max(.02,n/1700);cw.dt=T+700;cw.lx=d<0?X+14:X-6;
[-2,-1,0,1,0].map((o,j)=>fr(P(Z,j<3?"up":0),j<4?45:90,o,j==3&&[CT(X-2,6,"░▒",GD),CT(X+9,6,"▒░",GD)]));
for(i=0;i<34;i++)fr(P(i>22?LK:LR[+(i%8>3)],0,[0,"left",0,"right"][i%4]),70,0,
i<24?[0,1,2].map(k=>CT(X+4+rn(M.cos(n=i*.45+k*2.1)*4),3-(M.sin(n)>.3),"✦★·"[k],Y)):i>25&&[CT(cw.lx+(d<0?-5:2),4,"moo!","text")]);
fr(P(Z),120);fr(P("wink"),400);
for(E=T;T<E+1e3;)fr(P(T<E+500?LK:0),60);
f.push({x:X,pose:"default",ms:200});
return f});
