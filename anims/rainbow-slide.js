// Rain from grey clouds, then sun and a huge full-width rainbow; Clawd climbs it and slides down into a puddle.
$cdA("rainbow-slide",{title:"Rainbow slide",w:70,scene:1},c=>{
var W=c.W,M=Math,f=[],T=0,R=c.rng(c.R(1,1e6)),Z={z:-1},t=c.T,Y=c.P,L=c.clamp,N="one-up",U="up",YC="chromeYellow",H=Y("open",N),i,j,k,s,
x=c.x,O=0,cy=-1,ck=0,rn=0,um=0,sy=9,rv=0,rf=1,pd=0,hit=0,P=[],D=[],S=[],E=[],Q=[],c0="",c1="",rk,rc,
lr=j=>j&1?"left":"right",cl=v=>v<0?0:v>1?1:v,wk=(e,j,a)=>Y(e,a||(j&2?N:"down"),lr(j)),
cx=(W-9)/2,d=x+4<cx?1:-1,X0=d>0?0:c.mx-8,X1=c.mx-8-X0,A=(W-11)/2,p=M.max(2.5,W/32),XA=cx-4|0,B="#7fa7d6",F=lr(d<0),
// rainbow: top edge E (half rows), slope Q
bd=(i,s)=>(s+=.5-E[i])<0||(s=s*Q[i]|0)>5?-1:s,
off=x=>L(((E[x+4]+1)/2|0)-6,-4,0);
for(i=0;i<W;i++)s=M.abs(i+.5-cx)/A,k=1-s**p,E[i]=k>0?14-14*k**(1/p):99,Q[i]=k>0?1/M.hypot(1,14*s**(p-1)*k**(1/p-1)/A):0;
// clouds; puddles off the banner
for(;c0.length<W+30;c0+=j,c1+=j){k=6+R()*12|0;for(j=0;j<k;j++)c0+=j&&j<k-1?R()<.6?"█":"▄":" ",c1+=j&&j<k-1?"█":"▀";j=" ".repeat(R()*4|0)}
for(i=3+R()*8|0;i<W-3;i+=10+R()*18|0)(i<7||i>67)&&M.abs(i-X1-4)>9&&P.push([i,1+R()*3|0]);
P.push([X1+4,6]);
var rb=(i,r,a,b,p,q,h,o,C,K=rv+"/"+rf)=>{if(rk==K)return rc;o=[];C=[0,30,55,120,210,275].map(h=>c.hsv(h,.75,.15+.85*rf));
for(r=0;r<7;r++)for(p=q=-1,h=i=0;i<=W;i++){a=b=-1;i<rv*W&&(a=bd(i,2*r),b=a>=0&&Q[i]<.5?a:bd(i,2*r+1));
if(a!=p||b!=q){(p>=0||q>=0)&&o.push(t(h,r,(p<0?"▄":p==q?"█":"▀").repeat(i-h),C[p<0?q:p],{z:-1,bg:C[p<0|p==q?-1:q]}));p=a;q=b;h=i}}
rk=K;return rc=o},
sc=(i,j,k,o)=>{o=sy<9?c.art(W-8,sy,T/300&1?["\\ ▄█▄ /","- ███ -","/ ▀█▀ \\"]:[" ·▄█▄·","· ███ ·"," ·▀█▀·"],YC,Z):[];
[c0,c1].map((p,j)=>cy+j>=0&&o.push(c.tile(p,cy+j,c.hsv(220,.1,(j?.45:.6)+.38*ck),T/150,Z)));
D.map(p=>o.push(t(p[0],p[1]>>1,p[1]&1?",":"'",B,Z)));
if(rv*rf>0)for(o=o.concat(rb()),j=0;j<2+6*(1-rf);j++)i=R()*W*rv|0,E[i]<12&&o.push(t(i,E[i]+R()*5>>1,R()<.5?"✦":"·","text",Z));
pd>.1&&P.map(p=>o.push(t(p[0]-(k=M.round(p[1]*pd)),6,"▂".repeat(2*k+1),B,Z)));
return o.concat(S)},
// drops in half rows; splash on ground or head
st=(ms,k)=>{S=[];for(k=W*rn*ms/1800+R();k>1;k--)D.push([R()*W|0,4,.02+R()*.012]);pd=cl(pd+rn*ms/3e3);
D=D.filter(p=>{var l=um>2&&p[0]>x+2&&p[0]<x+15?4:p[0]>=x&&p[0]<x+9?8:14;if((p[1]+=p[2]*ms)<l)return 1;l>4&&S.push(t(p[0],l>8?6:3,"·",B,Z));hit|=l==8})},
add=(p,ms,e)=>{st(ms);f.push({x,pose:p,ms,offset:O,props:sc().concat(um?[t(x+9-2*um,2,"▗▟"+"█".repeat(4*um-4)+"▙▖","#e2585e"),t(x+8,3,"│","text")]:[],e||[])});T+=ms};
// rain, umbrella, singing
add(Y("left"),250);cy=0;add(Y("right"),250);
for(;T<2100;)rn=cl((T-500)/900),add(Y(hit?"closed":lr(T/450)),60,hit=0);
for(;um<3;)um++,add(H,90);
for(;T<4200;)k=T/250%3|0,add(Y(T%1600<1100?"open":"wink",N,["both","left","both","right"][T/240&3]),80,[t(x>3?x-1-k:x+15+k,3-k,"♪","text")]);
// rain stops, umbrella down
for(rn=j=0;D.length||j<8;j++)ck=cl(j/10),add(Y(lr(j/3),N),80);
for(;um;um--)add(H,90);
cy=-1;add(H,220);cy=-2;add(Y("closed"),160);
// sun, rainbow sweeps across
for(sy=3;sy;sy--)add(Y(F),150);
for(;rv<1;)rv=cl(rv+.05),k=M.min(rv*W|0,W-1),add(Y(k<x+2?"left":k>x+6?"right":"open"),50,E[k]<14?[t(k,E[k]>>1,"✦","text",{b:1})]:[]);
add(Y("open",U),300,[t(x+4,3,"!",YC,{b:1})]);add(Y("wink",U),300);
// dash, climb, run along the top
for(j=0;x-X0;j++)k=X0-x,x+=L(k,-2,2),add(wk(lr(k<0),j),35);
add(Y(F),200);
for(j=0;;j++){for(k=off(x);O-k;j++)O+=O>k?-1:1,add(wk(F,j,j&1?U:N),110);
if(x==XA)break;s=O<-3&&M.abs(XA-x)>3?2:1;x+=d*s;add(wk(F,j),s>1?40:70,[t(d>0?x-1:x+9,6+O,"·",c.rainbow(j))])}
// on top, then wheee
for(j=0;j<7;j++)add(Y("wink",j&1?U:N),120,[t(x-2+j%2,j%2,"✦",YC),t(x+10-j%2,1-j%2,"✧","text")]);
add(Y(F),300);O=-3;add(Y("closed"),250);
for(j=0;x-X1;j++){x+=d*M.min(j<4?1:2,M.abs(X1-x));O+=L(off(x)-O,-2,2);
add(Y(F,U),M.max(24,60-j*5),[t(d>0?x-3:x+10,5+O,"≡≡","text"),t(d>0?x-5-j%3:x+12+j%3,6+O,"·",c.rainbow(j))])}
for(;O<1;)O=M.min(1,O+2),add(Y("open",U),40);
// splash!
for(s=[],j=0;j<12;j++)s.push([X1+1+R()*6,5,(j%2*2-1)*(.3+R()*1.8),-.3-R()*1.3]);
for(j=0;j<12;j++)O=j<3?1:0,add(Y(j<5?"closed":"open",j<3?U:"down"),45,s.map(p=>t(M.round(p[0]+=p[2]),M.round(p[1]+=p[3]+=.25),p[3]<0?"°":"'",B)));
// shake off, everything fades
for(j=0;j<30;j++)rf=cl(1.6-j/16),pd=cl(2-j/14),sy=j<12?0:j<15?11-j:9,add(j<8?Y(lr(j)):j<14?Y("wink",U):"default",j<8?70:110,j<8?[t(x-1,4+j%2,"'",B),t(x+9,5-j%2,",",B)]:[]);
f.push({x,pose:"default",ms:300});
return f;
});
