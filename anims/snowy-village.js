// Snowy village: Santa-hat Clawd hops roof to roof dropping gifts down chimneys, then the lights twinkle out.
$cdA("snowy-village",{ scene: 1,title:"Snowy village",w:70},function(c){
var W=c.W,M=Math,R=M.random,P=c.P,C=c.T,T=0,OUT=1e9,SK=1e9,f=[],H=[],S=[],Tr=[],x=c.x,co=0,HW=0,fc,i,j,k,w,s,a,b,n,g,
K=P("closed"),Y="chromeYellow",D="default",RD="#e03a3a",WH="#f5f5f5",LL="look-left",LR="look-right",L=[0,1,2,3,4].map(i=>c.hsv(i*72,.65,1)),U=P(0,"up"),
cl=v=>v<0?0:v>1?1:v,
dl=p=>120+M.abs(p-x-4)/W*900,
sk=h=>M.ceil(4*M.max(1-cl((T-h.d)/300),cl((T-SK-h.e)/300)));
// houses: chimney y3, roof y4, walls y5-6; cols 11-36 stay open
for(i=0;i+11<=W;i+=k){
w=i?M.min(12+(R()*4|0),W-i):11;s=i&&R()<.5?1:-1;
for(a=b=n=g="",j=0;j<w;j++){a+=j%6==1?"•":" ";b+=j%6==4?"•":" ";n+=j==2||j==w-3||j==w>>1&&w>13?"■":" ";g+=j==w>>1?"█":" "}
H.push({x:i,w,m:i+w/2,s,cx:s>0?i+w-2:i+1,a,b,n,g,bx:i&&i<65,r:c.hsv(R()*360,.6,.5),wl:c.hsv(15+R()*40,.35,.45),ph:R()*8,lt:R()<.4?0:1e9,lo:R()*1500,wo:300+R()*1500});
i+=w;k=i<37?37-i:3+(R()*6|0);k>5&&i>36&&i+k<W&&Tr.push({x:i+(k>>1)-1,m:i+(k>>1)})}
var V=H.concat(Tr),z=()=>V.map(h=>h.e=dl(h.m));z();V.map(h=>h.d=h.e);
for(i=0;i<W/10;i++)S.push({x:R()*W|0,v:180+R()*240,p:R()*8,r:R(),ch:c.pick("❄**···")});
var sc=()=>{var A=[],k,q=(X,y,t,col,e)=>y<7&&A.push(Object.assign({x:X,y,t,c:col,z:-1},e)),sn=cl(T/900)*(1-cl((T-SK)/700));
S.map(s=>{var y=((T/s.v+s.p)%8|0)-1;s.r<sn&&y>=0&&q(s.x+M.round(M.sin(T/700+s.p)),y,s.ch,"text")});
Tr.map(t=>{k=sk(t);q(t.x+1,4+k,"▲","#3f8f5a");q(t.x,5+k,"◢█◣","#3f8f5a");q(t.x+1,6+k,"▀","#7a5030")});
H.map(h=>{k=sk(h);var y=3+k,b=(T/380+h.ph)|0,g=h.bx?{}:{bg:h.wl,o:1},u=(T/300+h.ph)%3,r={bg:h.r};
q(h.cx,y,"█","#9a4a3a");q(h.x,y+1,"▀".repeat(h.w),WH,r);
T>h.d+400&&T<OUT+h.lo&&(T<OUT+h.lo-500||(T/70|0)%3)&&q(h.x,y+1,h.a,L[b%5],r)&&q(h.x,y+1,h.b,L[(b+2)%5],r);
q(h.x,y+2,h.n,T>=h.lt&&T<OUT+h.wo?"#ffd06a":"#40362e",g);q(h.x,y+3,h.g,"#5a3622",g);
T>h.d+300&&T<SK&&q(h.cx+(u>1.8),2-(u|0),u<1?"▒":u<2?"░":"·",T-h.gt<1600?c.hsv(T/4,.5,1):"inactive")});
return A},
Ht=(X,y)=>y<0?[]:[C(X+3,y,"▄▄▄▄",WH,{bg:RD}),C(X+(fc>0?2:7),y,"▀",RD),C(X+(fc>0?1:8),y,"●",WH)],
add=(o,p,ms,e)=>{f.push({x,offset:o,pose:p,ms,props:sc().concat(HW?Ht(x,3+o):[],e||[])});T+=ms},
ey=e=>e>0?"right":"left",
// roof -3, gap hop -4, else walk
dR=X=>M.min.apply(0,H.map(h=>M.max(h.x-X-4,X+5-h.x-h.w,0))),
go=xt=>{for(var n=0,e,o,p;x!=xt;n++){fc=e=xt>x?1:-1;x+=e*M.min(M.abs(xt-x),co&&M.abs(xt-x)>16?2:1);
p=co;o=[-3,-4,-4,-4,-4,-2,-1,0][M.min(dR(x),7)];co=o=M.max(M.min(o,co+2),co-2);
add(o,P(ey(e),o<-3?"up":"down",n%2?"left":"right"),o<-3?55:45,o==-3&&p<-3?[C(x,3,"·       ·",WH)]:0)}},
// lob a gift down the chimney
toss=h=>{var s=h.s,cx=h.cx,hc=cx-2*s,e=ey(s),ar=s>0?"one-up":"up",gc=c.pick(L),G=(X,y)=>[C(X,y,"■",gc,{b:1})],t=(p,m,g)=>add(-3,p,m,g);fc=s;
t(P(e),120);t(P(e,ar),220,G(hc,0));t(P("wink",ar),140,G(hc,0));t(P(e,ar),70,G(hc+s,0));t(P(e),70,G(cx,1));t(P(e),80,G(cx,2));
h.gt=T;h.lt=M.min(h.lt,T+250);
for(k=0;k<4;k++)t(P(k<2?e:"wink"),90,[C(cx,2-(k>>1),"♥",RD),C(cx-1-(k>>1),2-k%2,"✦",c.pick(L)),C(cx+1+(k>>1),1-k%2,"*",c.pick(L))]);
add(-4,"arms-up",70);t(P("wink","up"),130)};
var d=fc=x+4<W/2?1:-1,rt=H.filter(h=>(h.m-x-4)*d>-8),bk=H.filter(h=>rt.indexOf(h)<0),sp=h=>h.s>0?h.cx-10:h.cx+2,Q=[];
if(d<0)rt.reverse();else bk.reverse();if(rt.length<3)rt=rt.concat(bk);n=M.min(W>150?4:5,rt.length);
for(j=0;j<n;j++)Q.push(rt[n>1?M.round(j*(rt.length-1)/(n-1)):0]);
// village rises, hat drops on
[D,LL,LR].map(p=>add(0,p,300));
for(k=0;k<4;k++)add(0,P(),90,Ht(x,k));
HW=1;add(1,K,110);add(0,P("wink"),300);add(1,P(),150);
if(!dR(x)){add(-1,U,50);add(-3,U,50);add(-4,U,80);add(co=-3,K,100)}
Q.map(h=>{go(sp(h));toss(h)});
// hop down, lights twinkle out
var dd=fc=x+fc*6>=0&&x+fc*6<=c.mx?fc:-fc;
[-4,-4,-3,-2,-1,0].map(o=>{x+=dd;add(o,P(ey(dd),"up"),55)});
add(1,K,120);add(0,D,200);
OUT=T;while(T<OUT+1700)add(0,[LL,LR,K,P("wink")][(T-OUT)/450|0],100);
// hat becomes a star, village sinks
HW=0;for(k=0;k<4;k++)add(0,U,70,Ht(x,3-k));
add(0,P("wink","up"),160,[C(x+4,0,"★",Y)]);add(0,D,120,[C(x+4,0,"✦",Y)]);
z();SK=T;while(T<SK+1400)add(0,T-SK<700?LL:LR,90);
f.push({x,pose:D,ms:300});
return f});
