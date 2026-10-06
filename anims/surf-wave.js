// Full-width sea; Clawd paddles out, rides a big barrel, spins a 360, wipes out and swims back.
$cdA("surf-wave", { scene: 1, title: "Surf's up", w: 70 }, function (c) {
var f=[],S=[],W=c.W,mx=c.mx,R=c.R,P=c.P,T=c.T,pk=c.pick,lv=0,t=0,k,n,o,p,b,a,
d=c.x>mx/2?-1:1,x=d>0?c.x:mx-c.x,Y="chromeYellow",FO="#e1f5ff",LB="#82c8f5",Z={z:-1},
U="up",O="one-up",L="left",E="right",C="closed",K="wink",F=q=>({facing:q}),bc=c.hsv(R(0,359),.7,1),
FC=["right-30","edge","back","left-30"],
Q=(s,n)=>s.repeat(n),
WV=[[-8,"▗"+Q("▄",11)+"▖"],[-11,"▗▟███"+Q("▀",14)+"▜▙▖"]],
PT=[Q("─",17)+" "+Q("─",9)+"  ","  ~^~         ~~~       ","~~~^~~   ~~~~^~~~    ","~^~~~~^~~~ ~~~^~~~~^~~~ "],
CL="    ░▒▓▒░             ░▒░                   ",sx=W-8,
fr=(v,o,p,ms,...a)=>{x=v;f.push({x,offset:o,pose:p,props:c.cat(...a),ms});S.push([lv,t]);t+=ms/50},
g=(...a)=>fr(x,...a),
B=(x,y=6,s=0)=>s>1?T(x+3,y,"▐█▌",bc):[T(x-1,y,s?"▗"+Q("▄",9)+"▖":"▝"+Q("▀",9)+"▘",bc),T(x+3,y,Q(s?"▄":"▀",3),"text")],
wv=(a,h=0,q=0)=>WV.map((l,j)=>T(a+l[0],j+1+h,l[1].replace(/./g,ch=>Math.random()<q?pk("░▒  "):ch),j?c.hsv(200+j*3,.3+j*.1,1-j*.09):FO,Z)),
sp=(a,b,y,z,n,col)=>{for(var r=[];n-->0;)r.push(T(R(a,b),R(y,z),pk("*·°'"),col||FO));return r},
lap=x=>T(x-1,6,"~^~~~^~~~^~",LB),
sea=(L,t)=>{var r=[],y,j;
for(y=6;y>6-L&&y>2;y--){p=c.tile(PT[y-3],y,c.hsv(212-y*3,.55,.3+.14*(y-2)),-d*t*(y-2)*.3,Z);
if(y>3)p.t=p.t.replace(/./g,(h,j)=>j>9&&j<65&&(j+y*3)%7?" ":h);r.push(p)}
if(L>3)r.push(T(sx,Math.max(1,7-L),"☀",Y,Z));
if(L>5){r.push(c.tile(CL,0,"#96a5c3",-d*t*.15,Z));
for(j=4;j<7;j++)r.push(T(sx-1+(t/3+j|0)%3,j,j%2?"-":"·",Y,Z));
for(j=0;j<3;j++)r.push(T((j*W/3+t*(.5+j*.2))%(W+4)-2|0,1+j%2,(t/2+j|0)%3?"-v-":"\\v/","text",Z))}
return r};
for(k=3;k<7;k++)WV.push([-6-2*k,"▟"+Q("█",2*k+3)+(k>5?"▙":"▌")]);
// sea rises, board drops in
if(x<20)c.walk(x,20).map((q,i)=>{lv=i>>2;fr(q.x,0,q.pose,q.ms||60)});
for(lv++;lv<7;lv++)g(0,P(lv%3?L:E),140,T(x-1,6,"~         ~",FO));
g(0,P(),300,T(x+4,0,"✦",Y));
for(k=-1;k<4;k++)g(0,P(0,k>1?U:"down"),k<3?80:60,B(x,k,k<3?(k+3)%3:1));
g(1,P(C,U),100,B(x,4,1));
g(0,P(K,U),450,B(x,3,1));
g(-1,P(),90,B(x),sp(x-2,x+10,4,6,5));
g(0,P(E),250,B(x));
// paddle out; the swell builds
for(n=x-R(4,7);x>n;)fr(x-1,0,P(L,x%2?U:O),110,B(x-1),sp(x+8,x+10,5,6,1));
["left-55","back","back-125","right-55"].map(q=>g(0,F(q),90,B(x)));
for(a=x-26,k=0;a<x;k++){a=Math.min(x,a+(k<18?1:2));if(k>18&&k%2)x++;
g(0,k<9?P(k%6?E:C):k<16?P(L):P(E,k%2?U:O),k>15?60:110,wv(a,k<18?6-k/3|0:0),B(x),k>8&&k<16&&T(x+4,3,"!",Y,{b:1}),k>15&&sp(x-3,x-1,5,6,1))}
// barrel ride with an aerial
g(0,P(C),130,wv(x),B(x));
fr(x+1,-1,P(0,U,L),110,wv(x+1),B(x+1),sp(x-3,x,5,6,3));
var xe=mx-8,ms=c.clamp(5000/(xe-x)|0,30,80),rd=to=>{for(k=0;x<to;k++){x=Math.min(x+2,to);
g(-1,P(k%9==4?K:E,k%4<2?U:O),ms,wv(x-(k%6>3)),B(x),sp(x-5,x-2,5,6,2),sp(x+10,x+12,3,5,k%2))}};
n=xe-x>50?2:1;o=R(0,1);rd(x+(xe-x-9*n>>1));
[..."234444321"].map((h,j)=>{x+=n;g(-h,j<8?o?F(FC[j>>1]):P(j%4<2?K:C,j%2?U:O):P(K,U),j>2&&j<6?110:70,wv(x),B(x,7-h,+"021202120"[j]),j>1&&j<7&&sp(x-3,x+11,0,2,3,c.rainbow(j)))});
rd(xe);
// crash and wipeout
for(b=n=x,k=0;k<15;k++){o=k<6?-"234432"[k]:k-6;if(k<6)x++;if(k<9)b-=2;
g(k>9?0:o,k<6?F(FC[k%4]):P(C,U),k<6?70:90,k<12?wv(n+k,k>>1,.1+k*.07):T(n-4,6,"░▒░▒░",FO),sp(n-12,n+14,0,k<6?2:5,k<8?7:2),B(b,+"532112345666666"[k],k<9?k%3:0),k>9&&T(x+4,6-k%3,"°",FO),o>0&&lap(x));
if(k>9)f.at(-1).hide=1}
// swim back; sea drains
g(2,P(C),180,B(b),lap(x),sp(x+2,x+6,5,5,2));
g(1,P(C,O),250,B(b),lap(x),T(x-2,4,"~",FO));
g(1,P(L),400,B(b),lap(x),T(x+4,3,"?",Y,{b:1}));
while(x>b)fr(x-1,1,P(L,x%2?U:"down"),60,B(b),lap(x-1),sp(x+8,x+10,5,6,1));
g(-1,P(0,U),90,B(x),sp(x-2,x+10,5,6,3));
g(0,P(K),450,B(x));
for(lv=6;lv>=0;lv--)g(0,P(lv%3?E:L),120,B(x));
g(1,P(0,U),110,B(x,4,1));
for(k=3;k>-3;k--)g(0,P(k>1?0:E,k>1?U:O),70,B(x,k,k>2?1:(k+3)%3));
g(0,P(E),250,T(x+4,0,"✦",Y));
for(k=0;k<4;k++)g(0,P(C,0,k%2?L:E),80,sp(x-3,x-1,3,5,2,LB),sp(x+9,x+11,3,5,2,LB));
g(0,P(K),400);g(0,P(),200);
// built rolling right: mirror if needed, add the backdrop
var M="▌▐▛▜▙▟▖▗▘▝",sw=s=>s.replace(/left|right/g,m=>m<"m"?E:L);
f.map((q,i)=>{if(d<0){q.x=mx-q.x;q.pose=JSON.parse(sw(JSON.stringify(q.pose)));
q.props=q.props.map(p=>({...p,x:W-p.x-p.t.length,t:[...p.t].reverse().map(h=>(k=M.indexOf(h))<0?h:M[k^1]).join("")}))}
q.props=sea(...S[i]).concat(q.props)});
return f;
});
