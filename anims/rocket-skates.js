// Rocket skates: Clawd zooms wall to wall, faster each run, spins out, crashes in dust, sees stars.
$cdA("rocket-skates",{title:"Rocket skates",w:64},function(c){
var f=[],M=Math,W=c.W,mx=c.mx,P=c.P,T=c.T,R=c.R,Y="chromeYellow",O="fastMode",E="error",S="subtle",BL="permission",
K="●▀▀● ●▀▀●",sm=[],ef=[],fy=[],i,j,k,q,o,a,b,L,ms,lim,
d=c.x<mx/2?1:-1,x=c.x,sx=x+d*11,ey=()=>d>0?"right":"left",
// frame + smoke, debris, timed fx
F=(x,o,p,ms,pr)=>{sm=sm.filter(s=>++s[2]<12&&(R(0,3)||s[1]--,s[1]>=0));
fy=fy.filter(s=>(s[0]+=s[2],s[1]+=s[3],s[4]&&sm.push([M.round(s[0]-s[2]),M.round(s[1]),0]),s[0]>-12&&s[0]<W+3&&s[1]>-1));
f.push({x,offset:o,pose:p,ms,props:(pr||[]).concat(sm.map(s=>T(s[0],s[1],"▒▒▒▒░░░░····"[s[2]],s[2]<5?"inactive":S,{z:-1})),
fy.map(s=>T(M.round(s[0]),M.round(s[1]),s[5],E)),...ef.filter(e=>e[1]-->0).map(e=>e[0]))});ef=ef.filter(e=>e[1]>0)},
// skates + flame (e: smoke)
sk=(x,o,L,e)=>{var y=7+o,t=d>0?x-1-L:x+9+L,r=[T(x,y,K,E)];e&&sm.push([t,y,0],[t-d,y,1]);
for(var i=0;i<L;i++)R(0,4)>i-4&&r.push(T(d>0?x-1-i:x+9+i,y,"▓▓▒▒░░·"[i],[Y,Y,O,O,E,E,S][i]));return r},
K0=sk(sx,-1,0);
// skates drop, he hops on
[..."012345656"].map((y,i)=>{i-6||ef.push([T(x+4,3,"!",Y,{b:1}),4]);F(x,0,P(i>5?ey():0),i>5?90:45,[T(sx,+y,K,E)])});
F(x,0,P("wink"),350,K0);F(x,1,P(ey()),110,K0);
for(k=0;k<6;)F(x+d*M.min(11,2*++k),-"233321"[k-1],P(ey(),"up"),55,K0);
x=sx;F(x,-1,P("closed","up"),110,K0.concat(T(x-1,6,"·         ·",S)));
// ignition
for(k=0;k<10;k++){k%3||sm.push([d>0?x-2:x+10,5,0]);F(x,-1,P(k<5?k%2?"closed":0:ey(),k<5?0:"up"),k<5?150:70,sk(x,-1,k<5?k%2:k-4))}
// runs, each faster
var n=W<90?5:W<170?4:3,sp=0;
for(k=0;k<=n;k++){ms=M.round(38-16*k/n);L=M.min(7,2+k);
lim=k<n?d>0?mx-1:1:x+d*M.max(8,mx*(W<90?.2:R(25,40)/100)|0);
for(i=0;x!=lim;i++){x+=d*M.min(sp<5?1:2,(lim-x)*d);o=k>1&&R(0,6)<1?-2:-1;
F(x,o,P(k>1&&i%11==5?"closed":k%2&&i%9<3?"wink":ey(),k%2?"one-up":"up"),ms+M.max(0,(6-sp++)*12),
sk(x,o,L,1).concat(k?[T(d>0?x-2-2*k:x+11,3+R(0,1),"── ─── ── ─".slice(0,2*k+1),S)]:[]))}
if(k<n){b=d>0?W-1:0;
ef.push([c.art(b,3,[..."*✸*"],Y,{b:1}),4],[T(d>0?W-8:2,1,c.pick("BOING! BONK! WHEE! ZOOM!".split(" ")),c.rainbow(k),{b:1}),14]);
F(x,-1,P("closed","up"),70,sk(x,-1,1));d=-d;F(x,-2,P(ey(),"up"),50,sk(x,-2,2))}}
// wobble
for(i=0;i<8;i++){x=c.clamp(x+2*d,0,mx);o=-1-i%2;
F(x,o,P(i%2?"closed":ey(),i%2?"up":0),40,sk(x,o,R(1,6),1).concat([T(x+4,3+o,"!",E,{b:1}),T(d>0?x-1:x+9,3+o,"'",BL)]))}
// skates fly off, he spins
var FC="right-30 right-75 edge back-125 back left-75 left-30".split(" ");
fy.push([x+(d>0?5:0),6,4*d,0,1,"●▀▀●"],[x+2,5,-2*d,-.5,1,"●▀▀●"]);
for(i=0;i<13;i++){x=c.clamp(x+d*(i<7?2:1),0,mx);ef.push([T(x+R(-2,10),R(0,5),c.pick("✦*·"),c.pick([Y,O])),2]);
F(x,-"2334443322110"[i],{facing:FC[d>0?i%7:6-i%7]},45)}
// crash, dust cloud
F(x,0,P("closed","up"),60,[T(x-1,6,"*         *",Y)]);
var DU=c.rgb(205,185,150),cl=(r,th)=>{var Q=[],y,s,h;for(y=2;y<7;y++)if((h=r-"53100"[y-2])>0){for(s="",j=-h;j<=h;j++)s+=R(0,99)<th?" ":"▓▒░·"[M.min(3,(M.abs(j)*3/h|0)+(th>50))];Q.push(T(x+4-h,y,s,DU))}return Q};
for(i=0;i<22;i++){i>5&&i<12&&ef.push([T(x+R(-4,12),R(1,5),c.pick("✦*★"),c.pick([Y,O,"text"])),2]);
F(x,1,P("closed"),i<6?45:70,cl(i<6?3+i:9+(i>11?i-11:R(0,1)),i<12?15:(i-11)*9))}
// dizzy stars
for(i=0;i<26;i++){q=[];for(j=0;j<3;j++)a=i*.5+j*2.1,q.push(T(x+4+M.round(M.cos(a)*5),M.sin(a)>0?4:3,"★✦☆"[j],[Y,"warning","text"][j]));
F(x,1,P(i%6<2?"left":i%6<4?"closed":"right"),80,q)}
"closed left right left right open".split(" ").map((e,i)=>F(x,i?0:1,P(e),i%5?90:250,i<3?[T(x+4+(i%2?3:-3),3,"✧",Y)]:[]));
// a wheel rolls back; kick
var s=x+4<W/2?1:-1,wx=s>0?W:-1,wt=s>0?x+9:x-1,ew=s>0?"right":"left",kf=s>0?"left":"right",WH=w=>[T(w,6,"●",E)];
for(;wx!=wt;)wx-=s*M.max(1,M.min(4,M.abs(wt-wx)>>2)),F(x,0,P(ew),35,WH(wx));
ef.push([T(x+4,3,"?",BL,{b:1}),10]);F(x,0,P(ew),450,WH(wt));F(x,0,P("closed",0,kf),110,WH(wt));
fy.push([wt,6,3*s,-.6,0,"●"]);
for(i=0;fy.length&&i<40;i++)F(x,0,P(i<2?"wink":ew,i<2?0:"one-up",i<2&&kf),45,i<2?[T(wt,5,"✦",Y)]:[]);
F(x,0,P("wink","one-up"),350);
f.push({x,pose:"default",props:[],ms:300});
return f});
