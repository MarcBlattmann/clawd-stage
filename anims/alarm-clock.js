// Clawd sleeps by an alarm clock; at 7:00 it rings wildly, he jolts skyward, slaps it flat and stretches into the sunrise.
$cdA("alarm-clock", { title: "Rise and shine", w: 44 }, function (c) {
var f=[],fx=[],st=[],T=c.T,R=c.R,Y="chromeYellow",A="warning",E="error",S="subtle",I="inactive",W="text",b={b:1},z={z:-1,b:1},
X=c.clamp(c.x,c.W<80?0:50,c.mx-11),K=X+11,t=0,tm="6:5"+R(7,8),rg=0,cs=0,cy=3,ns=0,sy=9,i,j,k,o,sx=X+22<c.W?X+21:X-3,
PM={c:"closed",o:"open",r:"right",l:"left",w:"wink",u:"up",d:"down",1:"one-up"},
em=(n,g)=>fx.push({a:0,n,g}),
zz=()=>em(8,a=>[T(X+6+(a>>1),4-(a>>1),a<4?"z":"Z",a>5?S:I)]),
// clock cs: 0 standing (rg>0 rings), 1 squashed, 2 pancake, 3-4 crumbling
clk=()=>{
var s=rg?[0,1,0,-1][t%4]:0,k=K+s,y=3+cy-(rg>2&&t%3<1),q=t%2,w=["ring","Ring!","RING!!"][rg-1],u=cs?5:y+1,
L=cs>1?cs<5?cs<3?[T(K-1,6,"▂▂    ▂▂",W,z),T(K+1,6,"-:--",E,z)]:[T(K-1,6,cs<4?"░".repeat(8):"· · · · ",cs<4?I:S,z)]:[]
:cs?[T(k-1,5,"◓      ◓",Y,z),T(k,5,"╭────╮",W,z),T(k-1,6,"╰─    ─╯",W,z),T(k+1,6,tm,E,z)]
:c.art(k,y+1,["╭────╮","│    │","╰┬──┬╯"],W,z).concat(T(k+1,y,rg?q?"◓\\ ◓":"◓ /◓":"◓  ◓",Y,z),T(k+1,y+2,rg||t>>2&1?tm:tm.replace(":"," "),E,z));
if(rg)for(L.push(T(K+3-(w.length>>1)+s,rg>2?q:1,w,rg>2?q?E:Y:rg>1?A:I,rg>1?b:z)),j=0;j<2;j++)L.push(T(k-1-cs-(q^j),u+j,"(",A,z),T(k+6+cs+(q^j),u+j,")",A,z));
return L},
// frame: pose letters (eyes arms feet) + stars, sun, clock, particles
pu=(p,ms,x=X,o=0,q=[],cl)=>{
var L=st.slice(0,ns).map(s=>T(s[0],s[1],(t+s[2])%10?s[2]>6?"✧":"·":"✦",I,z)),r=t>>2&1?["\\ /"," ☀ ","/ \\"]:[" | ","-☀-"," | "];
for(j=-1;j<2;j++)if(sy+j<4)L.push(T(sx-1,sy+j,r[j+1],Y,b));
L=L.concat(clk());
fx=fx.filter(e=>(L=L.concat(e.g(e.a++)),e.a<e.n));
f.push({x,offset:o,pose:c.P(...[...p].map(h=>PM[h])),ms,color:cl||(ns>4?"#be6450":cl),props:L.concat(q)});t++};
for(i=0;i<Math.min(16,c.W/5);i++)st.push([R(0,c.W-1),R(0,2),R(0,9)]);
f=c.walk(c.x,X,{ms:45});
// setup: clock pops up, he yawns, curls up, night falls
for(;cy;cy--)pu("r",80);
pu("w",350);pu("cu",550);pu("c",250);
for(k=+tm[3];k<10;k++)for(tm="6:5"+k,i=0;i<11;i++){if(ns<st.length)ns++;if(t%4<1)zz();pu("c",110,X,1)}
// build-up: it rings louder; he sleeps on, peeks, panics
tm="7:00";
for(o=1;o<4;o++)for(rg=o,i=0;i<[9,8,5][o-1];i++){if(o<2&&t%4<1)zz();pu(o>2?"o":o>1&&i>4?"w":"c",o>2&&!i?240:[80,65,45][o-1],X,1,o>2?[T(X+4,3,"!",E,b)]:[])}
// climax: jolt into the sky, tremble, drop, squash
var ht=R(3,4);
for(o=0;o>=-ht;o--)pu("ou",30,X,o,c.art(X+2,7+o,Array(-o).fill("¦   ¦"),I));
for(i=0;i<4;i++)pu("ou",70,X+(i&1),-ht);
for(o=1-ht;o<=0;o++)pu("ou",50,X,o);
em(3,a=>[T(X-1-a,6,"░",S),T(X+9,6,a>1?"·":"░",S)]);
pu("c",70,X,1);pu("o",150);
// he fumes, winds up, slaps it flat (once or twice)
pu("r",350);
for(i=0;i<3;i++)pu("r",160,X,0,[T(X+2+(i&1),3-(i>>1),"~ ~",I)],"#f0503c");
var bw=c.pick(["SLAP!","SMACK!","WHAM!"]);
for(k=R(1,2);k--;){
pu(cs?"rdr":"rdl",90,X+1+cs);
pu("r1",120,X+1);pu("r1",280,X+1,-1);pu("c1",40,X+2,-2,[T(X+1,3,"≡",I)]);
cs=1;rg=k?1:0;
em(5,a=>[T(K+3-(bw.length>>1),2,bw,a<3?Y:S,b)]);
em(4,a=>[T(K+1,4-a,"·",Y),T(K+4+a,4-a,"*",A),T(K+7+a,5,"*",A)]);
pu("c",90,X+3);
if(k)for(i=0;i<7;i++)pu(i<3?"c":"r",110,X+3);
}
// payoff: a bell rolls off, sunrise, a sunny stretch
cs=2;
em(16,a=>[T(K+6+a,a<3?4-a:Math.min(6,a-1),a&1?"◒":"◓",a>13?S:Y)]);
for(i=0;i<6;i++)pu("c",70,X+3);
pu("o",200,X+3);pu("rdl",90,X+2);pu("rdr",90,X+1);pu("r",200);pu("w",400);
for(sy=4;sy>1;){ns=Math.min(ns,--sy*4-4);pu(sx>X?"r":"l",200)}
pu("cu",200);
pu("cu",800,X,-1,[T(X-1,1,"·         ·",A),T(X,2,"✦       ✦",Y)],"#fa965f");
pu("ou",200);pu("wu",450);
// cleanup: pancake crumbles, sun climbs away
for(cs=3;cs<6;cs++){sy--;pu(cs>4?"o":"c",cs>4?150:200)}
sy=9;pu("o",250);
return f;
});
