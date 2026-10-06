// Clawd tries to catch a snowflake on his tongue, misses twice (head, eye), gets one (brain freeze!) and shakes off his snow cap.
$cdA("snowflake-catch",{title:"First snow",w:44},function(c){
// rows: 3 cap/tongue, 4 eyes, 6 ground
var R=c.R,T=c.T,K=c.pick,M=Math.random,rd=Math.round,mn=Math.min,W=c.W,i,o,q,
x=c.clamp(c.x,7,c.mx-9),f=c.walk(c.x,x),s=K([-1,1]),FL=[],P=[],gd=Array(W).fill(0),hp=[0,1,0,0,0,0,0,0,1],
off=0,tg=0,rate=0,cold=0,hd=1,O="open",C="closed",Wk="wink",SN="text",IC="#9fc8ff",PK="#ff6e96",LR=["left","right"],
fx=(o,y)=>o.b+rd(o.A*Math.sin(o.p+y*o.k)),
// flake hitting column L at row Y, sway A; t: his target
fl=(L,Y,A,k,v,t,n={A,k,p:t?-Y*k:M()*7,b:0,y:-.5,v,t,ch:t?"❄":K("❄❅❆**··"),c:t?SN:K([SN,IC,"inactive"])})=>(n.b=L-fx(n,Y),FL.push(n),n),
ey=(o,d=(o.dn?o.L:fx(o,o.y))-x-4)=>d<-1?LR[0]:d>1?LR[1]:O,
pt=(x,y,vx,vy,g,ch,c,l,s)=>P.push({x,y,vx,vy,g,ch,c,l,s}),
gr=X=>{if(X>=0&&X<W&&(X-x-4)**2<260)gd[X]=mn(4,gd[X]+1)},
// head snow slides outward when steep
add=h=>{hp[h]++;for(var n;h>1&&h<8;h=n){n=h<5?h-1:h+1;if(hp[h]-hp[n]<2)break;hp[h]--;
if(n<2||n>7)return pt(x+n,3+off,(n-4.5)*.12,0,.25,"·",SN,9,1);hp[n]++}};
function F(e,ms,a,ft,xp=[]){var p=[],top=3+off,n,j,cd=cold;
for(j=rate*W/60;M()<j;j--)n=M()<.5?x+4+R(-18,18):R(0,W-1),rate<1&&(n-x-4)**2<81||fl(n,6,M()*2,.4+M()*.5,.18+M()*.17);
FL=FL.filter(o=>{o.y+=o.v;var r=o.y|0,L=fx(o,r),h=L-x;
if(o.e?r>3:hd&&h>1&&h<8&&r>=top&&r<=top+1)return o.e||o.t&&tg&&h==4||add(h),o.dn=1,0;
if(r>5)return gr(L),o.L=L,o.dn=1,0;
return p.push(T(fx(o,o.y),r,o.ch,o.c,{z:-1,b:o.t}))});
P=P.filter(o=>{o.x+=o.vx;o.y+=o.vy;o.vy+=o.g;var X=rd(o.x),Y=rd(o.y);return o.s&&Y>5?gr(X):--o.l<0?0:p.push(T(X,Y,o.ch,o.c))});
p.push(T(0,6,gd.map(g=>" .▁▂▃"[g]).join(""),SN,{z:-1}),T(x+2,top,hp.slice(2,8).map(g=>" ▂▄▆█"[g]).join(""),SN));
tg&&p.push(T(x+4,top,tg>1?"█":"▄",PK));
f.push({x,offset:off,pose:c.P(e,a,ft),ms,props:p.concat(xp),paint:cd?(_,y,t=c.clamp(cd*1.7-y*.45,0,1))=>c.rgb(215-85*t,119+86*t,87+168*t):void 0})}
// the first flake: he watches it land
o=fl(x+4+8*s,6,1.5,.7,.35,1);
for(i=0;!o.dn;i++)F(i<3?O:ey(o),i<3?120:80);
pt(o.L,5,0,0,0,"✧",IC,3);F(ey(o),450);F(O,200);
// more! hop, look around
rate=.35;
[1,-1,-1,0,0].map((v,j)=>{off=v;F(j>3?Wk:O,j>3?300:80,v<0?"up":0)});
for(i=0;i<6;i++)F(LR[i>2^s>0],90);
// try 1: it swerves onto his head
o=fl(x+4+2*s,3,2.5*s,.8,.22,1);
while(!o.dn)q=o.y,tg=q>.6?1+(q>1.8):0,F(tg?O:ey(o),q>1.8?120:80);
tg=0;F(C,450);F(LR[+(s>0)],350);
// try 2: jump! past his hand... into his eye
o=fl(x+6,4,-3,.8,.25,1);o.e=1;
while(o.y<1.1)tg=o.y>.4|0,F(ey(o),80);
[1,-1,-2,-2,-1,0].map(v=>{off=v;tg=v<0?2:1;F(v<0?LR[1]:O,v<-1?130:70,v<0?"one-up":0)});
for(tg=0;!o.dn;)F(LR[1],90);
q=[T(x+6,4,"❄",SN,{b:1})];F(O,300,0,0,q);F(Wk,150,0,0,q);
pt(x+6,5,0,.2,0,"·",IC,4);F(Wk,250);F(C,450);
// try 3: eyes shut, patience... got it!
i=0;o=fl(x+4,3,2*s,1.2,.17,1);
while(!o.dn)q=o.y,tg=q>.3?1+(q>2.2):0,F(q<.6?ey(o):i++%6>3?Wk:C,q>2.2?170:90);
tg=2;F(O,300,0,0,[T(x+4,2,"✦","chromeYellow",{b:1})]);tg=1;F(O,100);tg=0;F(C,400);
// brain freeze (icy from the top), shiver, joy
for(i=0;i<12;i++)cold=mn(1,cold+.18),x+=i&1?-1:1,F(C,55,0,LR[i&1],[T(x-1,5,"(         )",IC)]);
for(i=0;i<4;i++)cold-=.25,F(i<3?C:Wk,90);
[-1,-1,0,-1,-1,0].map((v,j)=>{off=v;j%3||pt(x+4+R(-3,3),1,R(-1,1)*.2,-.3,0,"♥",K(["error",PK]),5);F(O,85,"up")});
// heavy snow caps his head while he hums
rate=1.2;
for(i=0;i<15;i++){i<8&&[1,2].map(_=>fl(x+R(3,6),3,1+M()*2,.6,.3+M()*.05));i%6==1&&pt(x+10,3,.15,-.2,0,"♪",K([SN,IC]),6);
if(i==8)rate=0;F(i<12?C:O,i<12?100:200,0,i<12?LR[i>>2&1]:0)}
F(LR[0],180);F(LR[1],180);off=1;F(C,140);off=0;
// shake it off!
for(i=0;i<10;i++){x+=[1,-1,-1,1][i&3];
for(q=2;q<8;q++)hp[q]>0&&M()<.6&&pt(x+q,3,(q-5+M()*1.2)*.35,-.4-M()*.5,.22,K("·*"),SN,30,1,hp[q]--);
F(C,50,i&1?"up":0,LR[i&1])}
// the sky clears, the first snow melts
for(hd=i=0;FL.length+P.length||gd.some(g=>g);i++){i>4&&(gd=gd.map(g=>g&&(M()<.4||i>30)?g-1:g));
tg=i==12;F(i<12?LR[i>>2&1]:Wk,80)}
f.push({x,pose:"default",ms:400});
return f;
});
