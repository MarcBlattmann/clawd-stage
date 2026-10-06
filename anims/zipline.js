// Clawd climbs a tower, ziplines the whole stage past a startled bird and tumbles off the end.
$cdA("zipline",{title:"Zipline",w:64},function(c){
var T=c.T,R=c.R,N=Math,U=N.round,G=c.G,W=c.W,f=[],Z={z:-1},O={b:1},Y="warning",I="inactive",
L="left",H="right",d=c.x<c.mx/2?1:-1,FW=d>0?H:L,BW=d>0?L:H,
A=10,B=W-2,K=W-14,BR="#b07840",bd=d>0?"<)":"(>",
lad=7,pr=7,lim=0,s=1,uw=-1,tu=-1,tw=0,ps=[],ux=d>0?c.x:W-9-c.x,o=0,e=BW,a="down",ft="both",fc=0,
bu=A+U((B-A)*R(50,70)/100),bs=0,bc=c.pick(["permission","success","error"]),i,k,m,ex,
FC="right-30 right-75 edge back-125 back left-75 left-30".split(" ");
// text u cols from the tower edge
function Q(u,y,t,k,x){return T(d>0?u:W-u-t.length,y,t,k,x)}
// cable height in braille dots, sags under the trolley
function dv(u){var w=uw<0?(A+B)/2:N.max(uw,A+1);return c.clamp(U(u<=A?1:1+8*(u-A)/(B-A)+s*(u<w?(u-A)/(w-A):(B-u)/(B-w))),0,11)}
function cr(u){return dv(u)>>2}
function cab(){var r=[[],[],[]],p=[],x,k,u,v,y,t;
for(x=0;x<W;x++)for(k=0;k<2;k++){u=d>0?x+k/2:W-.5-x-k/2;
if(u>A+.5&&u<=lim&&u<B){v=dv(u);y=v&3;r[v>>2][x]|=y<3?1<<y+3*k:64<<k}}
for(y=0;y<3;y++){for(t="",x=0;x<W;x++)t+=r[y][x]?String.fromCharCode(10240+r[y][x]):" ";t.trim()&&p.push(T(0,y,t,"text",Z))}
return p}
function P(){ps.push([].slice.call(arguments))}
function S(){var p=[],y;
if(tw)s=3*N.cos(tw*2.3)*.7**tw++;
for(y=lad;y<7;y++)p.push(Q(0,y,y>lad?"║─────────║":"╔═════════╗",BR,Z));
for(y=pr;y<7;y++)p.push(Q(B,y,y>pr?y>5?"┴":"│":d>0?"┐":"┌",BR,Z));
p=p.concat(cab());
if(lim>=K)p.push(Q(K,cr(tu<K-5?K:tu),"■","error"));
if(tu>=0)p.push(Q(tu-4,cr(tu),"┌───●───┐",Y,O));
if(lim>=B&&bu<W+2)p.push(bs>1?Q(U(bu+=3),0,bs++%2?"v":"^",bc):Q(bu-1,cr(bu)-1,bd[0]+(bs?(bs++,"O"):"°")+bd[1],bc));
ps=ps.filter(function(q){return q[6]-->0});
ps.forEach(function(q){p.push(Q(U(q[0]),U(q[1]),q[4],q[6]<2?"subtle":q[5],Z));q[0]+=q[2];q[1]+=q[3]});
return p}
function F(ms,ex){f.push({x:d>0?ux:W-9-ux,offset:o,pose:fc?{facing:fc}:c.P(e,a,ft),ms:ms,props:S().concat(ex||[])})}

// tower rises, cable shoots, post thunks in
ex=[Q(ux+4,G-1,"!",Y,O)];
for(;lad;)lad--,F(60);
tu=5;F(220,ex);
for(lim=A;lim<B;){lim+=(B-A)/8;e=lim<ux+4?BW:FW;F(45,[Q(U(N.min(lim,B-1)),cr(lim),"✦",Y)])}
for(;pr>2;)pr--,F(50);
P(B-1,6,-.5,0,"·",I,4);P(B+1,6,.5,0,"·",I,4);F(500,ex);e="wink";F(300);
f=f.concat(c.walk(c.x,d>0?1:W-10,{ms:35,fx:function(r){r.props=S()}}));ux=1;

// climb, look down the line, hook on, countdown
for(e="open",i=0;i<6;i++)a=i%2?"up":"one-up",ft=i%2?L:H,o=-((i+2)>>1),F(140);
a="down";ft="both";F(250);e=FW;F(450);F(250,[Q(11,1,"?",Y,O)]);e="closed";F(140);e=BW;F(300);e=FW;F(250);
a="up";F(260,[Q(11,1,"click",I)]);e="wink";F(300);
"3 2 1 GO!".split(" ").forEach(function(n,k){e=FW;ft=k%2?L:H;F(k>2?260:330,[Q(11,2,n,k>2?"success":Y,O)])});
ux=0;tu=4;ft="both";F(220);

// zip edge to edge
for(s=2,i=0;ux<K-9;i++){
m=N.max(38,110-i*6);ux=N.min(K-9,ux+(m<60?2:1));tu=uw=ux+4;
o=cr(tu)+1-G;ft=i%4<2?L:H;ex=[];
if(!bs&&bu-tu<16)bs=1,P(bu,0,.4,.4,"·",bc,7);
if(m<60){for(k=0;k<3;k++)ex.push(Q(ux-R(6,9),G+o+k,c.pick(["═══ ═","── ──"]),I,Z));P(tu-5,cr(tu),-1.5,.4,c.pick("*·"),Y,3)}
e=FW;if(ux>K-28)ex.push(Q(ux+10,G+o+1,"uh-oh",Y));else if(i>8)e="closed",k=N.min(i-5,9),ex.push(Q(ux+10,G+o+1,"wheeeeeee".slice(0,k)+"!","text"));
F(m,ex)
}
// CLANK, let go, tumble, dazed
for(i=0;i<5;i++)P(K,cr(K),R(-6,6)/5,-.4+i*.2,"*",Y,4);
e="closed";F(110,[Q(K,cr(K),"✸",Y,O)]);
tu=uw=K-5;tw=1;
[-1,-1,0,-1,0,0,1].forEach(function(v,k){fc=FC[d>0?k:6-k];o=v;ux+=k<6;if(!v)P(ux+1,6,-.6,0,"░",I,3),P(ux+7,6,.6,0,"░",I,3);F(75)});
for(fc=0,a="down",i=0;i<9;i++)F(110,[Q(ux+1,G,"✦  ·  ✧·  ✧  ✦✧  ✦  ·".substr(i%3*7,7),Y)]);
o=0;[BW,FW,BW,"open"].forEach(function(v){e=v;F(160)});
a="up";e="wink";P(ux-1,G-1,-.3,-.5,"✦",Y,5);P(ux+9,G-1,.3,-.5,"✧","success",5);
o=-1;F(110);o=0;F(110);o=-1;F(110);o=0;F(500);
// pack up: cable reels back, post and tower sink
for(a="down",e=BW,uw=-1;lim>A;)lim-=(B-A)/8,tu=N.max(5,N.min(K-5,U(lim)-1)),pr<7&&pr++,F(50);
for(tu=-1;lad<7;)lad++,F(55);
e="open";F(400);
return f;
});
