// Clawd hops into a tiny car; trees, signs and mountains scroll by, a rock bumps him, he stops at the BEACH, shades on.
$cdA("road-trip", { scene: 1, title: "Road trip", w: 70 }, function (c) {
var f,W=c.W,R=c.R,m=Math,Z={z:-1},D="default",i,j,n,u,s,e,b,q,ax,k=0,d=0,t=0,v=0,cy=0,sp=0,rk=-9,cl=0,so=-9;
var x=c.clamp(c.x,3,c.mx-24),V=c.clamp(W/40,2,3.5),CC=c.pick(["e45","5ae","eb4","5c8"]),Y="fd5",GL="#464664";
f=c.walk(c.x,x);
// Q: pose from eye+arm letters. K: 3-digit hex color faded by k.
var Q=s=>c.P({l:"left",o:"open",r:"right",c:"closed",w:"wink"}[s[0]],{d:"down",u:"up",1:"one-up"}[s[1]]);
var K=h=>c.rgb.apply(0,[0,1,2].map(i=>30+(parseInt(h[i],16)*17-30)*k)),T=(a,b,s,h,e)=>c.T(a,b,s,K(h),e);
// Mountains on a 90-col loop.
var r=c.rng(R(1,1e6)),M=[[],[],[]];
for(i=0;i<6;i++)for(u=r()*90|0,n=2+(r()<.5),j=1;j<=n;j++)for(s=(n-j)*2+1,e=-s;e<s;e++)M[3-j][(u+e+90)%90]=1;
M=M.map(a=>{for(s="",q=0;q<90;q++)s+=!a[q]?" ":!a[(q+89)%90]?"▟":!a[(q+1)%90]?"▙":"█";return s});
// Trees and signs on a 150-col loop, a tile per row+color.
var L=[[2,"eee",""],[3,"eee",""],[4,"eee",""],[5,"964",""],[3,"5b5",""],[4,"494",""]],st=(o,q,s)=>L[o][2]=L[o][2].padEnd(q)+s;
for(u=R(0,6);u<140;u+=R(10,19)){
 st(3,u+1,"│");
 if(R(0,3)){j=R(0,1);st(4,u,[" ▲","▗█▖"][j]);st(5,u,["◢█◣","▜█▛"][j])}
 else{st(0,u,"╭──╮");st(1,u,"│"+R(5,9)+"0│");st(2,u,"╰┬─╯")}
}
L.forEach(o=>o[2]=o[2].padEnd(150));
// One world frame. d distance, cy car lift, sp sign col, so sun row.
function F(p,of,ms,ex){
 t++;d+=v;sp&&!v&&cl--;
 var q=[],y=5-cy,w=v?"✚✕"[t%2]:"●",cut=(g,a)=>{if(sp)g.t=g.t.slice(0,sp+a);q.push(g)};
 so>-9&&q.push(...c.art(m.min(W-6,x+29),so,["\\ │ /","─ ☀ ─","/ │ \\"],K(Y),Z));
 M.forEach((a,j)=>k>(2-j)*.3&&q.push(c.tile(a,j+1,K(["eef","88b","669"][j]),d*.15,Z)));
 q.push(...c.art(x+1+cl+m.round(m.sin(t/8)*2),0,[" ▄██▄▄","▀▀▀▀▀▀▀"],K("dde"),Z));
 v>1&&q.push(T(ax-7-t%3,3+t%2,"- -","aab",Z));
 L.forEach(o=>cut(c.tile(o[2],o[0],K(o[1]),d*.75,Z),-6));
 cut(c.tile("═══        ",6,K("99a"),d,Z),5);
 if(sp){
  q.push(...c.art(sp,2,["╭─────╮","│     │","╰──┬──╯","   │"],K(Y),Z),T(sp+1,3,"BEACH","5ae",{b:1,z:-1}));
  sp+9<W&&q.push(T(sp+6,6,"░░░","ec8",Z),T(sp+9,6,c.tile("~^~   ~  ",6,0,t*.4).t.slice(sp+9),"59e",Z))
 }
 rk>-3&&rk<W&&q.push(T(rk,6,"◢◣","a97"));
 v&&q.push(T(ax-3-t%4,y,"▒░··"[t%4],"aab",Z));
 q.push(T(ax-2,y-1,"▗▄          ▄▄▄",CC),T(ax+9,y-1,"▐","9df"),T(ax+13,y-1,"▖","fe8"),T(ax-2,y,"▜██████████████▛",CC),T(ax,y+1,w+"          "+w,"ccd"));
 f.push({x,pose:p,offset:of,ms:ms||45,props:q.concat(ex||[])});
}
// Fade in; the car zooms under the jumping Clawd.
for(i=0;i<16;i++){
 k=m.min(1,i/9);u=c.clamp((i-5)/6,0,1);ax=x-m.round((x+18)*(1-u)*(1-u));
 F(Q("llllllooooorrcww"[i]+(i>5&&i<11?"u":"d")),"4444552111123433"[i]-4,i>14?400:60,u%1?[T(ax-4,6,"▒░","aab")]:0);
}
b=[T(x+12,2,"beep!",Y,{b:1})];
F(Q("o1"),-1,150,b);F(Q("od"),-1,90);F(Q("w1"),-1,220,b);
for(i=1;i<=20;i++){v=V*i/20;F(Q(i<5?"cd":"rd"),-1,50)}
// Cruise with beats; a rock rolls in and bumps both wheels.
var hit=m.max(36,m.ceil((W-x)/V)),rr=m.round(11/V),BT=["rd",...["ld","ow","ru"].sort(()=>R(-1,1))];
for(i=0;i<hit+26;i++){
 u=i-hit;rk=m.round(x+11-u*V);e=BT[(i/14|0)%4];b=[];
 cy=+(u>=0&&u<3||u>=rr&&u<rr+2);
 (!u||u==rr)&&b.push(T(u?x-2:x+12,5,"✦",Y));
 e=="ru"&&u<0&&b.push(T(x+1,1,"whee!",Y));
 F(Q(u>=0&&u<12?u<4?"cu":u<8?"ou":"wd":e[1]=="w"?e[0]+(i%6<3?1:"d"):e),-1-cy+([-1,-2,-2,-1][u]||0)-(u==rr),45,b);
}
// BEACH sign scrolls in; ease to a stop in front of it.
s=W+2;u=x+17;n=V*.75;var A=n*n/2/m.min(30,s-u);
while(s>u){
 n=m.min(n,m.max(.25,m.sqrt(2*A*(s-u))));s=m.max(u,s-n);v=n/.75;sp=m.round(s);e=s-u<24&&t%4<2;
 F(Q("r"+(s-u<24?e?"u":1:"d")),e?-2:-1);
}
v=0;
// Sun rises, cloud drifts off, shades on, all fades.
var G=(y,z,a=0)=>c.T(x+2+a,y,"█▀▀▀█",GL,z?{bg:"clawd_body"}:{});
for(so=3;so;so--)F(Q("rd"),-1,160);
for(i=0;i<6;i++)F(Q("ou"),i%2-2,90);
for(i=0;i<4;i++)F(Q("o1"),-1,80,[G(i,i>2)]);
F(Q("o1"),-1,200,[G(3,1),T(x+8,2,"✦","fff")]);
for(i=15;i>0;i--){k=m.min(1,i/9);F(D,-1,i>9?140:70,[G(3,1)])}
// Car gone: hang, drop, flick the shades away.
f.push({pose:Q("ou"),offset:-1,ms:380,props:[G(3,1),c.T(x+4,1,"!","warning",{b:1})]});
[0,1,0].forEach(o=>f.push({pose:D,offset:o,ms:80,poof:"dot",props:[G(4+o,1)]}));
[2,1,0].forEach(y=>f.push({pose:Q("w1"),ms:80,props:[G(y,0,3-y)]}));
f.push({pose:D,ms:300});
return f;
});
