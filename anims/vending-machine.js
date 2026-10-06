// Vending machine drops in: Clawd pays, hops to press, the snack sticks; he rocks it, kicks it, two snacks fall. Nom.
$cdA("vending-machine",{title:"Stuck snack",w:44},function(c){
var P=c.P,T=c.T,R=c.R,pk=c.pick,r="right",C="closed",N="wink",A="up",D="down",Lf="left",Y="chromeYellow",I="inactive",S="subtle",E="error",V="warning",B={b:1},
x=c.clamp(c.x,c.W>79?52:3,c.mx-11),m=x+9,f=c.walk(c.x,x,{ms:40}),k,j,a,b,g="■▄▖·",U="one-up",Q=P(r,U),
mc=pk([E,"permission","autoAccept","#2f9e8f"]),sc=[],gone=[],dx=0,tl=0,dy=-7,hc=S,bc=E,sg="■",
s1=R(0,5),s2=(s1+R(1,2))%3+3*R(0,2),y1=1+(s1/3|0),y2=1+(s2/3|0),
X=(q,y)=>m+dx+(y<3?tl:0)+(q<0?0:2+2*(q%3)),
K=(q,y,u,cx)=>T(cx||X(q,y),y,u||"■",sc[q]),
M=()=>{var Z={z:-1},p=[],y,q;
for(y=0;y<7;y++)p.push(T(X(-1,y),y+dy,y?y>5?"╰───────╯":"│       │":"╭───────╮",mc,Z));
p.push(T(X(-1,0)+2,dy,"SNACK",hc,{z:-1,b:1}),T(m+dx+1,5+dy,"▀▀▀▀▀▀▀",S,Z),T(m+dx,3+dy,"¤",I,Z),T(X(-1,2),2+dy,"●",bc,Z));
for(q=0;q<9;q++)if(!gone[q])y=1+(q/3|0),p.push(K(q,y+dy,q==s1&&sg,X(q,y)));
return p},
F=(po,ms,pr,o,col,d)=>f.push({x:x+(d|0),pose:po,ms:ms,offset:o|0,color:col||void 0,props:(pr||[]).concat(M())}),
L=(ms,pr,o,col)=>F(P(r),ms,pr,o,col),
H=(o,t,q)=>T(x+4,o,t,q||Y,B),
W=(t,q,b,y)=>T(x+2,y||1,t,q||I,b),
bin=t=>[K(s1,5),K(s2,5)].concat(t||[]),
hold=(o,u,v)=>[K(s1,3+o,u,x+1),K(s2,3+o,v,x+8)],rb=()=>c.rainbow(R(0,9));
for(k=0;k<9;k++)sc.push(rb());
for(;dy<0;dy++)F(P(dy<-2?"open":r),35,[T(m+1,6,dy<-3?"· · · ·":"░░░░░░░",S)]);
F(P(C),110,[T(m-2,6,"▒░",I),T(m+9,6,"░▒",I),W("THUD",V,B)],1);
L(70,[T(m-3,5,"░",S),T(m+10,5,"░",S),H(2,"!")],-1);
L(350,[H(3,"!")]);
for(k=0;k<5;k++)hc=k%2?S:Y,L(70);
F(P(N),400,[T(x+3,2,"♪",Y)]);
F(Q,250,[T(x+8,3,"●",Y)]);
[2,1,0,0,1,2].forEach((y,k)=>F(Q,y?60:90,[T(x+8,y,k%2?"─":"●",Y)].concat(y?[]:T(x+7,0,"✦",Y))));
F(P(N,U),300,[T(x+8,3,"●",Y)]);
F(Q,150,[T(m,3,"●",Y)],0,0,1);
F(Q,300,[W("clink",0,0,2)],0,0,1);
L(150);
for(k=0;k<4;k++)bc=k%2?E:"success",L(110);
L(140,0,1);
F(Q,50,0,-1,0,1);
F(Q,220,[W("beep",S)],-2,0,1);
L(50,0,-1);
L(120);
for(k=0;k<8;k++)sg=k%2?"▪":"■",L(90,[W("whirr",k%2?S:I)]);
sg="◆";
L(250,[W("clunk")]);
L(600);
for(k=0;k<7;k++)F(P(k>5?C:k>3?"open":r,D,k%2?Lf:r),160,[H(2,"?")]);
for(k=0,j=R(9,13);k<j;k++)tl=[1,0,-1,0][k%4],sg=tl?"■":"◆",
F(P(k%3?C:N,A),70,[W("rattle")].concat(tl?T(m+(tl<0?-2:10),0,"≈",I):[]),0,c.rgb(215+k*3,119-k*6,87-k*4),-(tl<0));
tl=0;sg="◆";
L(500,[T(x+3,2,"...",I)]);
F(P(C),300);
for(k=0;k<4;k++)F(P(k%2?C:r,D,k%2?Lf:r),120,[W("#@!",E,B),T(x+1+6*(k%2),3-(k>>1),"°",I)],0,E);
F(P(r,D,Lf),80,0,0,E,-1);
F(P(r,D,r),80,0,0,E,-2);
F(P(C),250,[T(x-2,4,"≡",I)],1,E,-2);
F(P(r,A,Lf),45,[T(x-3,5,"≡",I)],0,E,-1);
F(P(r,A,Lf),45,[T(x-2,5,"≡",I)],0,E);
dx=tl=1;
F(P(C,A,Lf),90,[T(x+7,6,"▝▀▀",E),T(m+1,5,"✸",Y,B),W("BAM!",V,B)],0,E,1);
gone[s1]=1;
for(j=0;j<8;j++){dx=+!j;tl="21012111"[j]-1-dx;hc=j<5?pk([Y,S]):Y;if(j==2)gone[s2]=1;
a=Math.min(5,y1+j);b=Math.min(5,y2+j-2);k=j==5-y1||j==7-y2;
F(P(j<2?C:r),k?160:80,[K(s1,a,a<5&&j%2&&"◆")].concat(j>1?K(s2,b):[],
j<3?[W("BAM!",j?S:I,B),T(X(-1,0)-1-j,j,"·",I),T(X(-1,0)+9+j,j,"·",I)]:[],k?W("thunk",0,0,2):[]),0,j<2&&E)}
L(400,bin(H(2,"!")));
a=bin(W("x2!",Y,B));
F(P(N,A),120,a,-1);
F(P(N,A),300,a);
F(Q,220,bin(),1,0,1);
[-1,-2,-1,0,-1,-2,-1,0].forEach((o,k)=>F(P(k%4?"open":N,A),o?70:120,hold(o).concat(T(x+R(-1,8),R(0,2),pk("✦·♥*"),rb())),o));
for(k=0;k<6;k++)F(P(k%2?C:N,A),160,hold(0,g[(k+1)>>1],g[(k+2)>>1]).concat(T(x+(k%2?1:5),1,"nom",k%2?I:"text"),T(x+(k%2?R(0,2):R(6,8)),2,"·",sc[k%2?s1:s2])));
F(P(N),300,[H(2,"♥",E)]);
F(P(C),300,[H(1,"♥",E),T(x-2,2,"burp",S)]);
for(;dy>-7;dy--)F(P(r,dy>>1&1?U:D),60);
f.push({pose:P(N),ms:300},{pose:"default",ms:200});
return f;
});
