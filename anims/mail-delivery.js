// Mail carrier Clawd fills mailboxes across the stage; a dog chases him onto the last one until a ball lures it away.
$cdA("mail-delivery", { title: "Mail delivery", w: 64 }, function (c) {
var W=c.W,M=Math,R=c.R,T=c.T,f=[],i,k,t,U,p,q,A,
d=c.x>c.mx/2?-1:1,Fw=d>0?"right":"left",Bk=d<0?"right":"left",HA=d>0?"one-up":"up",
MI="▘▝▖▗▌▐▛▜▙▟",mir=s=>[...s].reverse().map(h=>MI[MI.indexOf(h)^1]||h).join(""),
// route coords, mirrored when d<0
P=(u,y,s,k,e,r)=>T(d>0?u:W-u-s.length,y,d>0||r?s:mir(s),k,e),Q=(u,y,s,k,e)=>P(u,y,s,k,e,1),
X=u=>d>0?u:c.mx-u,
n=c.clamp(W/24|0,3,7),bx=[],sk=[],fl=[],bc=[],fly=[],fx=[],
RD="error",BL="permission",S="inactive",LT="text",WB={b:1},Z={z:-1},DC=c.hsv(R(20,40),R(2,6)/10,.85),
u=d>0?c.x:c.mx-c.x,o=0,e="open",a="down",ft="both",cy=4,dg=-20,dd=1,dn=0,wf="",
B=()=>{var p=[],q,s,b;for(q=0;q<n;q++){s=sk[q];b=bx[q];
p.push(P(b,4+s,"▗▄▄▄▖",bc[q],Z),P(b,5+s,"█████",bc[q],Z),P(b+2,6+s,"┃",S,Z),
fl[q]?P(b+5,3+s,"▛▀",RD,Z):P(b+5,5+s,"▀",RD,Z),P(b+5,4+s,fl[q]?"▌":" ",RD,Z));s<0&&(sk[q]=0)}return p},
cap=()=>cy>3?[]:[T(X(u)+2,3+o-cy,e=="right"||e!="left"&&d>0?"▟██▙▄":"▄▟██▙",BL)],
// dog (dn>99: hopping)
D=()=>{var j=dn%2,y=4-(dn>99),L=["     ▄▄  ",(j?"▘":"▖")+"▄▄▄▄█▀█▄",j?"  ▌▐  ▌▐ ":" ▌▐  ▌▐  "];
return(dd>0?L:L.map(mir)).map((s,j)=>P(dg,y+j,s,DC)).concat(P(dg+(dd>0?6:2),y+1,"•","#3a2418",{bg:DC}),wf?Q(dg+2,2,wf,"warning",WB):[])},
sp=(x,y,s,k,l)=>fx.push([x,y,s,k||"chromeYellow",l||4]),
// letters [i,n,x0,y0,x1,y1,arc,box]
FL=()=>{var p=[];fly=fly.filter(L=>{var q=++L[0]/L[1];if(q<1)return p.push(P(M.round(c.lerp(L[2],L[4],q)),M.round(c.lerp(L[3],L[5],q)-L[6]*M.sin(M.PI*q)),"▬",LT));
L[7]<0||(fl[L[7]]=1,sk[L[7]]=-1,sp(L[4]+3,2),sp(L[4]+5,1))});
fx=fx.filter(s=>(p.push(Q(s[0],s[1],s[2]||(s[4]>2?"✦":"·"),s[3])),--s[4]));return p},
F=(ms,ex)=>f.push({x:X(u),offset:o,pose:c.P(e,a,ft),ms:ms,props:B().concat(D(),cap(),FL(),ex||[])}),
st=ms=>{u++;ft=u%2?"left":"right";F(ms)},
J=(s,g)=>s.forEach(s=>{u+=s[0];o=s[1];g&&(dn++,dg=M.min(dg+2,U-1));F(55)}),
del=b=>{var h=bx[b],L=[P(u+8,3,"▬",LT)];ft="both";a=HA;e=Fw;F(140,L);R(0,2)||(e="open",F(380,L.concat(Q(u+4,2,"?",LT))),e=Fw);
F(80,[P(h+1,4,"▬",LT)]);F(80,[P(h+2,5,"▬",LT)]);a="down";fl[b]=1;sk[b]=-1;sp(h+6,2);sp(h+4,1);e="wink";F(R(220,360));e=Fw;F(80)};
for(i=0;i<n;i++)bx.push(14+M.round(i*(W-26)/(n-1))),sk.push(4),fl.push(0),bc.push(c.hsv(R(150,290),.55,.8));
// cap on, boxes pop up
F(200);for(;cy;)cy--,F(60);o=1;e="wink";F(90);o=0;F(220);
U=bx[0]-9;for(t=0;u-U||t<n*2+5;t++){if(u-U)i=c.clamp(U-u,-2,2),u+=i,e=i>0?Fw:Bk,ft=t%2?"left":"right";else ft="both",e=Fw;
for(k=0;k<n;k++){i=c.clamp(4-t+k*2,0,4);sk[k]-1||i||sp(bx[k]+2,3,"*",S,2);sk[k]=i}F(u-U?40:70)}
F(250);
var m=M.max(1,n>>1);
for(k=0;k<m;k++){while(u<bx[k]-9)st(42),R(0,9)||sp(u+R(3,6),2,"♪",LT,6);del(k)}
// WOOF! run; letters fly into the boxes
for(k=0;k<6;k++)st(45);ft="both";F(160,[Q(0,2,"WOOF!","warning",WB)]);
e=Bk;o=-1;k=[Q(u+4,1,"!",RD,WB)];F(90,k);o=0;F(260,k);
dg=-12;U=bx[n-1]-9;
for(t=0;u<U;t++){e=t%9<2?Bk:Fw;a=t%2?"up":"one-up";dn++;dg=M.min(dg+(u-dg>30?3:2),u-11);wf=t%7<3?"woof":"";
for(k=m;k<n-1;k++)u-bx[k]+14||fly.push([0,9,u+4,2,bx[k]+2,4,3,k]);
R(0,4)||fly.push([0,R(6,9),u+3,3,u-R(3,9),7,R(1,3),-1]);t%5||sp(u-1,3,"°",BL,3);st(30)}
// onto the last box
ft="both";o=1;a="down";F(70);a="up";J([[2,-2],[2,-3],[1,-4],[1,-4],[1,-3]],1);
sp(u+1,3,"·",S,3);sp(u+7,3,"·",S,3);
for(;dg<U-1;)dg++,dn++,F(40);
for(k=0;k<10;k++){dn=100+k%2;wf=c.pick(["WOOF!","woof","grr"]);e=k%3?"closed":Bk;F(k%2?90:130,[Q(u+(k%2?9:-1),2,"'",BL)])}
// a ball lures the dog away
dn=0;wf="";e=Fw;a=HA;sp(u+9,0,"✦",0,3);F(300);k=[P(u+9,1,"●",RD)];F(250,k);e="wink";F(200,k);
p=u+1;A=5;for(t=0;p>-3||dg>-12;t++){e=Bk;a=t<2?"up":"down";p-=3;A*=.93;q=6-M.round(A*M.abs(M.cos(t*.36)));
t-3||(dd=-1);wf=t<3?"?":t<6?"!":"";t>3&&(dg-=3,dn++);F(t<4?110:45,p>-3?[P(p,q,"●",RD)]:[])}
dg=-20;e="wink";a="up";F(400,[Q(u-5,1,"phew",LT)]);e=Fw;a="down";F(200);
// last letter, boxes sink, cap off
J([[-2,-4],[-1,-3],[-1,-2],[-1,-1],[-1,0],[-1,1],[0,0]]);
del(n-1);
for(k=0;k<n;k++)sp(bx[k]+5,2,0,c.rainbow(k),5),F(60);
e="open";a="up";o=-1;F(120);o=0;F(120);a="down";F(200);
for(t=0;t<n*2+5;t++){for(k=0;k<n;k++)sk[k]=c.clamp(t-k*2,0,4);F(50)}
a=HA;F(150);for(;++cy<4;)F(70);sp(u+4,1);F(80);F(80);a="down";e="wink";F(300);
f.push({x:X(u),pose:"default",ms:300});
return f;
});
