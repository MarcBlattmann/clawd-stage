// Circus: Clawd dives into a cannon, BOOM, arcs across the stage into a net, bounces, bows, catches a flower.
$cdA("human-cannonball",{title:"Human cannonball",w:64},function(c){
var W=c.W,G=c.G,T=c.T,P=c.P,R=c.R,L=c.lerp,M=Math,Q=M.round,f=[],n=0,Z={z:-1},Y="chromeYellow",E="error",K="text",I="inactive",B="subtle",U="one-up",V="up",rr="right",ll="left",RU=P(rr,U),O="warning",C="closed",N="open",
d=c.x*2+M.random()-.5<c.mx?1:-1,fw=d>0?rr:ll,bw=d>0?ll:rr,
// S/X/A: local col (cannon edge 0) to stage, mirrored.
S=l=>d>0?l:W-1-l,X=l=>d>0?l:c.mx-l,
A=(x,y,s,k,e)=>T(d>0?x:W-x-s.length,y,d>0?s:[...s].reverse().join(""),k,e),
nl=W-15,nx=d>0?nl:2,fl=R(24,28),bk=0,cy=5,ny=6,cx=0,sg=0,fp=fl,lit=0,tr=[],fo=[],x=c.x,j,k,o,t,p,e,
CN=["            ▄▄","      ▄▄▄█████"," ▄▄██████▀▀▀"," ██▀▀▀"],
FC="right-30 right-75 back-105 back-150 back left-75 left-30".split(" ");
function F(p,m,e,y,u,h){n++;var q=[],i,a;
for(bk&&q.push(A(0,0,"─".repeat(bk),B,Z)),i=3;i<bk;i+=8)q.push(A(i,0,"▼",[E,Y,"permission"][((i>>3)+(n>>2))%3],Z));
cy<3&&fp>2&&q.push(A(2,6,"~".repeat(fp-2+!lit),I,Z));
lit&&fp>1&&q.push(A(fp,6,"✶✷✸"[n%3],O,Z),A(fp--,5,n%3?" ":"·",B,Z));
CN.map((s,j)=>q.push(A(cx,2+j+cy,s,E,Z)));
q=q.concat(c.art(S(cx+14),2+cy,["█","█","▀"],Y,Z),T(S(cx+4)-1,6+cy,"(✹)",Y,Z),T(S(cx+6),4+cy,"★",Y,{bg:E,z:-1}));
for(i=0;i<13;i++)q.push(T(nx+i,4+ny+(i%12&&Q(sg*M.sin(M.PI*i/12))),i%12?"╳":"╫",K));
for(i=5;i<7;i++)q.push(T(nx,i+ny,"║           ║",I));
tr.map(t=>{a=++t[2];a>=0&&a<15&&q.push(T(t[0],t[1]-(a>8),"▓▒░·"[a/4|0],a<3?K:a<9?I:B,Z))});
fo.map(t=>bk&&q.push(T(t[0],6,bk<W/2?"·":"✿",t[1])));
f.push({pose:p,ms:m,props:q.concat(e||[]).filter(r=>r.y<7),offset:y,x:u,hide:h})}
var H=(m,e)=>F("default",m,e,0,x,1),
mt=(h,k)=>[T(x+8,G-1,"│",K)].concat(h?T(x+8,G-2,h,k):[]),
bm=k=>[T(d>0?17:W-22,0,"BOOM!",k%2?O:E,{b:1})];
// Bunting unrolls, cannon and net rise, walk to the fuse.
var tx=c.clamp(S(fl)-10,0,c.mx);
for(k=0;k<16||x!=tx;k++){
bk=M.min(W,(k+1)*W/12|0);ny=cy=M.max(0,5-k/2|0);
o=x<tx?1:-1;t=x!=tx;x+=t?o:0;
F(t?P(o>0?rr:ll,k&2?U:"down",k%2?ll:rr):P(bw),t?30:50,0,0,x)}
// Match, light the fuse.
F("arms-up",450);F(P("wink",U),300);F(RU,300,mt());
F(P(C,U),70,mt("✦",Y));
for(k=0;k<5;k++)F(RU,90,mt("♦*"[k%2],"fastMode"));
F(RU,150,[e=T(x+9,5,"╲",K),T(x+10,6,"♦","fastMode")],1);
lit=1;
F(RU,200,[e],1);
F(P(N,V),280,[T(x+4,G-2,"!",E,{b:1})],-1);
F(P(bw),150);
// Dive in; a hand waves while the fuse burns.
p=x;t=X(10);j=M.max(6,M.abs(t-p)+1>>1);
F(P(bw,V),90,0,1);
for(k=1;k<=j;k++)o=k/j,F(P(bw,V,k%2?ll:rr),50,0,-Q(4*o+2*o*(1-o)),Q(L(p,t,o)));
x=t;tr.push([S(13),1,2],[S(15),2,3]);
cx=-1;H(70);cx=0;H(120);
for(k=0;fp>1;k++)cx=fp<9?k%2:0,H(R(60,110),fp>8?[A(14,1,k&2?"▟":"▙","clawd_body")]:[]);
cx=0;H(380);
// BOOM, then the arc with a smoke trail and a twirl.
for(k=0;k<14;k++)tr.push([S(14+R(0,6)),R(1,4),R(-6,0)]);
cx=-1;H(70,bm(0).concat(c.art(S(15)-1,1,["\\|/","─✸─","/|\\"],O)));
H(60,bm(1).concat(T(S(15),2,"✹",Y)));
var le=nl+2,D=le-10>>1;
for(j=0;j<=D;j++){o=j/D;k=M.max(-5,Q(L(-3,-2,o)-9*o*(1-o)));j>1&&(cx=0);
t=X(Q(L(11,le,o)));p=d>0?t-1:t+9;tr.push([p,G+1+k,0]);j%2&&tr.push([p-d,G+1+k,-1]);
F(o>.68&&o<.89?{facing:FC[(o-.68)/.03|0]}:P(o<.5?fw:o>.85?C:N,V),32,j<7?bm(j):[],k,t)}
x=t;
// Net: sag, bounce, hop out.
[..."100123443211233212"].map((h,j)=>{o=-h;sg=M.max(0,o+2);F(P(o>-2&&j<4?C:N,o<-2||j>12?V:"down"),o<-3?90:50,0,o)});
F(P("wink",V),300,0,-2);
p=x;t=X(nl-9);
for(k=1;k<=8;k++)o=k/8,sg=k<2,F(P(bw,V),55,0,M.min(0,Q(L(-2,0,o)-10*o*(1-o))),Q(L(p,t,o)));
x=t;sg=0;F(P(C),120,0,1);F("arms-up",400);
// Bows; flowers fly in, he catches one.
var fs=[[x-4,E,-7],[x+12,"autoAccept",7],[x+8,Y,8]];
for(j=0;j<34;j++){e=[];
fs.map((h,k)=>{t=(j-k*7)/10;
t<0||(t<1?e.push(T(Q(h[0]+h[2]*(1-t)),Q(L(7,k>1?G-1:6,t)-20*t*(1-t)),"✿",h[1])):k>1?e.push(T(x+8,G-1,"✿",Y)):h[3]||(h[3]=fo.push(h)))});
F(j>23?P("wink",U):P(j>18?rr:C),j>23?120:70,e,j<6||j>11&&j<18?1:0)}
// Flower sparkles away; everything sinks.
F(P(N,U),200,[T(x+8,G-2,"✦",Y)]);
for(k=0;k<12;k++)bk=M.max(0,bk-(W/8|0)),cy++,ny++,F(P(k<4?bw:k<8?fw:N),80);
F("default",300);
return f;
});
