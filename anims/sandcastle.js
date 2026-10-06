// Clawd builds a sandcastle with bucket and spade; a wave washes it away; he sulks, shrugs, digs again.
$cdA("sandcastle",{title:"Sandcastle",w:50},function(c){
var D=s=>s.replace(/[a-m]/g,m=>"▄█▀▗▖▟▙▛▜▝▘▐▌"[m.charCodeAt()-97]).split(","),
N=Math,R=c.R,T=c.T,P=c.P,M=N.round,op="open",cl="closed",wk="wink",W=c.W,X=c.clamp(c.x,2,W-42),f=c.walk(c.x,X,{ms:40}),B=X+15,
S0=N.min(W-4,N.max(B+30,62)),t=0,ps=[],E=[],K=["#ff5a5a","#ffd23c","#ff7ab8","#5ad26e"],i=R(0,3),BC=K[i],SC=K[3-i],
S1="#f0d08c",S2="#d4a95e",mc=S2,WC="#3c8ce6",TX="text",
md=0,h=[0,0,0],am="down",bk=[X+11,-1,0],sp=5,fg=[],wf=S0,wh=1,cut=W,Z=0,
MD=D("|,|    daaae,   daaaaae| fbbbbbbbbbg,dbbbbbbbbbbbe|fbbbbbbbbbbbg"),TW=D("bab|bbb,bab|bbb, bab | bbb |abcba"),
WV=D("~aaa,daccaa|caaaaaaa, daaa|fh  iba|caaaabbaaa,  daaae|dfhc cba|jk   lbba|aaaaafbbbbaa"),BU=D("gaf,gaf,hci,◀bm"),
S=(a,b,dx,dy,l,s,k,g)=>ps.push([t,a,b,dx,dy,l,s,k,g||0]),
G=x=>S(x,1,0,-.1,6,"✦✧·","chromeYellow"),
arc=(a,b,x,y,n,s,k,fn)=>{S(a,b,(x-a)/n,-1,n,s,k,2*(y-b+n)/n/n);E.push([t+n*50,fn])},
puff=(x,y)=>{S(x-1,y,-.5,-.15,4,"·.",S2);S(x+3,y,.5,-.15,4,"·.",S2)};
function A(e,ms,o,ex){o|=0;e=e||"right";
for(var m=N.ceil(ms/60),d=M(ms/m),q=0;q++<m;t+=d){
E=E.filter(v=>v[0]>t||v[1]());
var p=[],r=MD[md].split("|"),L=WV[wh-1].split("|"),n=L.length,y=wf+L[n-1].length,u=bk[0],v=bk[1],x=fg[0],z=fg[1],
U=(x,y,s,k,b)=>s.trim()&&p.push(T(x,y,s,k,b)),Q=(x,y,s,k)=>x<cut&&U(x,y,s.slice(0,cut-x),k);
Q(B,5,r[0],mc);Q(B,6,r[1],mc);
TW.forEach((w,n)=>{for(var a=w.split("|"),l=a.length,j=l-h[n];j<l;j++)Q(B+[1,9,4][n],5-l+j,a[j],S1)});
L.forEach((s,k)=>U(wf,7-n+k,s,k||wh<2?WC:TX));
wh<2&&U(wf,6,"~",TX);y<W&&U(y,6,"▄".repeat(W-y),WC);
bk[2]>=0&&U(u,v,BU[bk[2]],BC);bk[2]==1&&U(u+1,v,"▄",BC,{bg:S1});
sp%3==1&&p.push(...c.art(X+8,2+o,"◆\n│",SC));sp==4&&U(X+8,1+o,"▄",S1);
sp==2&&(U(X+9,5,"╲",SC),U(X+10,6,"▼",SC));sp==5&&U(u+2,v-1,"╱",SC);
sp==3&&p.push(...c.art(X-2,4,"┬\n│\n▼",SC));
fg[2]==1&&p.push(...c.art(x,z-1,"│\n│",TX),T(x+1,z-1,t%400<200?"▶":"◥","error"));
fg[2]==2&&(U(x,6,"╱",TX),U(x+1,5,"▶","error"));
ps.forEach(g=>{var a=(t-g[0])/50;a<g[5]&&U(M(g[1]+a*g[3]),M(g[2]+a*g[4]+g[8]*a*a/2),g[6][a/g[5]*g[6].length|0],g[7])});
Z&&p.forEach(v=>v.c=Z);
f.push({x:X,offset:o,ms:d,pose:e.eyes?e:P(e,am),props:p.concat(ex||[])});
}}
function fly(o,x1,y1,a,b,st){for(var x0=o[0],y0=o[1],n=N.ceil(N.abs(x1-x0)/st),i=1,s;i<=n;i++)s=i/n,o[0]=M(x0+(x1-x0)*s),o[1]=M(y0+(y1-y0)*s-8*s*(1-s)),o[2]=s<.4?a:s>.7?b:a-b?3:a,A(0,32)}
function dig(n){for(var i=0;i<n;i++)R(0,1)&&S(X+4,2,R(-1,1)*.15,-.2,8,"♪♫·",c.rainbow(R(0,6))),sp=2,am="down",A(0,R(100,160)),S(X+11,5,.2,-.3,3,"·.",S2),sp=4,am="one-up",A(0,70,-(i%2)),
sp=1,arc(X+8,1,B+6+R(-2,2),5,13,"●●•",S1,()=>{md<3&&md++;mc=S2;puff(B+5,5)}),A(0,R(150,230));A(0,250)}

// Bucket drops in; spade heaps a mound.
while(bk[1]<6)bk[1]++,A(bk[1]>3?0:op,45);
puff(bk[0],6);A(cl,90,1);A(0,250);A(wk,250);
sp=1;am="one-up";A(0,200);dig(R(3,4));A(wk,250);
sp=0;arc(X+8,2,X-2,4,10,"◆╲─╱│",SC,()=>{sp=3});A(P(op,"up"),120);am="down";A(op,250);A("left",250);
// Towers: scoop, toss, thump, lift.
bk=[X+10,6,0];A(0,60);bk[0]--;
(R(0,1)?[0,1,2]:[1,0,2]).forEach(n=>{
var x1=B+[1,9,5][n],l=n>1?3:2;
A(cl,150,1);S(X+12,6,.4,-.3,3,"·",S2);bk=[X+9,5,1];A(0,70);
am="one-up";bk=[X+8,3,1];A(0,R(100,170));am="down";
fly(bk,x1,4,1,2,1);puff(x1,4);A(cl,80);A(0,R(80,180));
while(bk[1]>4-l)bk[1]--,h[n]=4-bk[1],A(0,70);
G(x1+1);A(R(0,2)?wk:P(op,"up"),160,-R(0,1));
fly(bk,X+9,6,2,0,2)});
// Flag; hops.
fg=[X+8,3,1];am="one-up";G(X+9);A(op,300);fg[1]++;A(0,150,1);am="down";
fly(fg,B+6,1,1,1,1);A(cl,80);A(0,200);
for(i=0;i<8;i++)i%2||S(B+R(0,12),R(0,2),R(-1,1)*.3,-.2,6,"✦✧·",c.rainbow(R(0,6))),A(P(i%4?op:wk,"up"),80,[-1,-2,-1,0][i%4]);
A(wk,300);
// Sea draws back... wave!
for(i=0;i<3;i++)wf++,A(0,130);
A(op,R(150,350));
while(wf>X-3){
wf-=wf-B>16?2:1;wh=c.clamp(N.min(1+(S0-wf>>1),wf-B+4>>2),1,4);cut=N.min(cut,wf+1);
wf<B+13&&wf>X+8&&S(wf+1,R(2,5),.5,-.6,5,"·°",R(0,1)?S1:TX,.15);
fg[2]==1&&wf<=B+7&&(fg[2]=2);fg[2]>1&&(fg[0]=wf+3);wf<=X+11&&(bk=[wf+1,6,2]);
A(wf>B+14?0:P(wf>B?op:cl,"up"),wf-B>16?30:wf-B==12?220:45,-(wf<=X+9),wf>B+8&&[T(X+4,2,"!","warning",{b:1})])}
// Bucket and flag float off.
md=1;mc="#a88450";h=[0,0,0];cut=W;wh=1;
for(i=0;wf<S0;i++)wf+=wf-X>20?2:1,bk=[wf+1,5+(i>>1)%2,2],fg[0]=wf+6,A(wf>X+8?0:op,wf-X>20?30:45,-(wf<=X+8));
for(i=0;i<3;i++)S(wf+2+i*4,5,0,-.2,4,"°o·",TX);bk[2]=-1;fg[2]=0;A(0,300);
// Sulk, shrug, dig again.
for(i=0;i<6;i++)i%2&&i<5&&S(X+2*i,6,0,.2,5,"'·","#9ad0ff"),A(cl,120,1);
A(op,200);S(X-1,3,-.4,-.15,5,"~·","inactive");A(P(cl,"up"),400);A(wk,300);
sp=0;arc(X-2,3,X+8,2,8,"│╱─╲◆",SC,()=>{sp=1;am="one-up"});A("left",450);dig(2);A(wk,350);
Z="#8a7a5a";A(wk,120);Z="#505050";A(op,120);
f.push({x:X,pose:"default",ms:200});
return f;
});
