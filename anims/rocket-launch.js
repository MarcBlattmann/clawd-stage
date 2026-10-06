// Clawd tosses a rocket together, hops in, counts down 3-2-1, blasts off in billowing smoke, then parachutes home.
$cdA("rocket-launch",{title:"Rocket launch",w:50},function(c){
var R=c.R,T=c.T,P=c.P,Q=Math.round,M=Math.random,A=Math.abs,B=Math.max,V="right",L="left",H={hide:!0},E="error",Y="warning",I="inactive",X="text";
// Wide stage: pad right of the banner text.
var x=c.clamp(c.x,c.W>72?48:0,c.mx-16),r=x+12,lo=6,ry=1,rx=0,w=0,s=0,fd=0,tr=7,n=0,f=c.walk(c.x,x,{ms:35}),i,j,k,t,o,a,d,xl,px,sx;
// Rocket rows: nose 0-1, cabin 2-3, base 4-5; band = chute color.
var cc=c.pick(["claude","success","permission","autoAccept"]),RK=["  ▲"," ▟█▙"," █ █"," ███"," ███","◢███◣"],RC=[E,E,X,X,cc,E];
var rk=(ox,oy,a,b)=>{
for(var q=[],e=a;e<=b;e++)q.push(T(ox,oy+e,RK[e],RC[e]));
a<3&&b>1&&q.push(T(ox+2,oy+2,w?w>1||n%9<1?"─":"●":"○",w?"clawd_body":"permission"));
return q;
};
var pc=(px,py)=>rk(px,py-a,a,a+1);
// Frame = smoke mound + trail, rocket, extras.
function F(p,ms,e,o){
var q=[],y,i,h,sm=(px,y,v)=>{v+=M()*.4-.2-fd;v>0&&q.push(T(px,y,"·░▒▓"[v>.55?3:v>.3?2:+(v>.1)],v>.7&&fd<.1?"fastMode":v>.3?X:I))};
for(y=4;s&&y<7;y++)for(h=s*(y-3)/3,i=-s;i<=s;i++)A(i)<=h&&sm(r+2+i,y,1-A(i)/(h+1));
for(y=tr;y<7;y++)sm(r+2,y,.7);
n++;
f.push(Object.assign({pose:p,ms:ms,props:q.concat(rk(r+rx,ry,lo,5),e||[])},o));
}
var Z=(ms,e)=>F("default",ms,e,H);
// Build: part pops up overhead; crouch, lob it onto the stack (peak stays on stage), clank.
for(k=2;k>=0;k--){
a=2*k;o=R(8,10);t=1.2+a/4;
F("arms-up",220,pc(x+2,2).concat(T(x+1,1,"✦",Y),T(x+7,2,"·",Y)));
F("arms-up",R(120,260),pc(x+2,2));
F(P("closed","up"),140,pc(x+2,3),{offset:1});
for(j=0;j<=o;j++)i=j/o,F(P(V,j<3?"up":j<6?"one-up":"down"),55,pc(Q(x+2+10*i),B(0,Q(1+a*i-4*t*i*(1-i)))),{offset:j<2?-1:0});
lo=a;
F(P("closed"),80,[T(r-1,1+a,"*     *",Y)]);
F(P(c.pick(["open",V,"wink"])),R(120,240));
}
// Admire, thumbs up, walk over, leap in behind the hull.
F("look-right",400,[T(r+3,0,"✦",Y)]);
F(P("wink","one-up"),500);
for(k=x;k++<r-9;)F(P(V,"down",k%2?L:V),80,0,{x:k});
F(P(V),160,0,{offset:1});
for(k=1;k<4;k++)F(P(V,"up"),50,0,{x:r-9+k,offset:-k});
w=1;
Z(90,[T(r+1,2,"· ·",Y),T(r+1,4,"· ·",Y)]);
Z(600);
// Countdown in the sky; puffs, then a rumble.
var D="▀▀█, ▀█,▀▀▀|▀▀█,█▀▀,▀▀▀|▄█ , █ ,▀▀▀".split("|");
for(k=0;k<3;k++)for(j=0;j<9;j++)s=k&&2,fd=.9-k*.2,rx=k>1&&j%2,Z(90,c.art(r-7,1,D[k].split(","),j<6?[E,Y,"success"][k]:I,{b:1}));
// Ignition: eye squeezed shut, smoke billows.
w=2;fd=0;
for(j=0;j<14;j++)s=2+j,rx=j%2,Z(60);
// Lift-off: accelerating, flickering flame, trail.
rx=0;w=1;
for(k=0;ry>-9;k++)ry--,tr=B(ry+8,0),s+=k%2,fd=k*.03,Z(B(35,170-25*k),[T(r+1,ry+6,n%2?"▓█▓":" █",Y),T(r+2,ry+7,"▒","fastMode")]);
// Smoke clears. Quiet. A twinkle up high.
for(lo=6;fd<1.3;fd+=.1)s+=n%2,Z(90);
s=0;tr=7;sx=r+2+R(-3,3);
Z(400);
[..."·✦·"].map(s=>Z(150,[T(sx,0,s,Y)]));
Z(300);
// Parachute: shadow grows, Clawd drifts down swaying.
d=c.pick([-1,1]);xl=c.clamp(r-2+d*R(6,9),0,c.mx);
var ch=(px,y,s)=>{
var q=s?[T(px,y-1,"\\",I),T(px+8,y-1,"/",I)]:[];
for(var i=0;i<11;i++)q.push(T(px-1+i,y-3," ▗▄█████▄▖ "[i],i&2?X:cc),T(px-1+i,y-2,"▟█▀█▀█▀█▀█▙"[i],i&2?X:cc));
return q;
};
for(j=0;j<25;j++){
o=(j/3|0)-8;px=j<24?Q(c.lerp(r-2,xl,j/24)+Math.sin(j*.6)*.8):xl;
F(P(j>11&&j<21?"closed":"open","up",j&4?L:"both"),62+3*j,ch(px,4+o,1).concat(o<0?T(px+4-(9+o>>1),6,"─".repeat(9+o),"subtle"):[]),{x:px,offset:B(o,-7)});
}
// Touchdown. A gust rolls in (he eyes it), yanks the canopy away.
F(P("closed","up"),130,ch(xl,5,1),{offset:1});
F(P("open","up"),160,ch(xl,4,1));
for(j=-3;j<9;j++)k=B(j,0),F(P(j<1==d>0?L:V,j<1?"up":"down"),j<1?100:70,ch(xl+2*d*k,4-(k>>1),j<1).concat(T(xl+4+d*(2*j-8),3,"~≈~",I),T(xl+3+d*(2*j-12),1,"≈~",I)));
F(P("open"),300);
F("arms-up",90,0,{offset:-1});
F("arms-up",90);
// Thumbs up to the star: the rocket made it.
[..."✦·"].map((e,i)=>F(P("wink","one-up"),i?150:500,[T(sx,0,e,Y)]));
F("default",100);
return f;
});
