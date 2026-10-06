// Clawd sculpts a volcano and pours in baking soda; lava erupts, runs down the sides and splatters him. He grins.
$cdA("volcano-experiment",{title:"Science volcano",w:40},function(c){
var M=Math,R=c.R,T=c.T,P=c.P,rn=M.random,Rt="right",Cl="closed",U="one-up",
X=c.clamp(c.x,2,c.mx-16),cx=X,V=X+6,f=c.walk(c.x,X),
BR="#9a6a3a",LV=["#ff3b1f","#ff6a00","#ffa31a","#ffd23c"],CL=["#d04020","#a04028","#7a5038",BR],
VL=["     ▟▀ ▀▙","    ▟█████▙","   ▟███████▙"],MK=["     21012","    3 2  43"," 6545 3   54567"],
SG=[[],["","","     ▗▄▄▄▖"],["","     ▄▄▄▄▄",VL[2]],["      ▄ ▄",VL[1],VL[2]],VL],
JH=[2,4,4,4,4,3,3,2,2,1,1,1,0,0,0,0,0,1,3,3,2,1],hs=[R(1,3),R(5,7),R(17,19)],
st=0,lv=-1,cool=0,sh=0,pw=0,jet=0,grin=0,ps=[],sp={},i,k,t,n,
S=(x,y,u,v,s,k,l,g,h)=>ps.push({x,y,u,v,s,k,l,g,h,a:0}),
dust=n=>{for(;n--;)S(V+R(4,10),M.max(3,6-st),R(-1,1)*.5,-.4,"°·.","#c8a070",3,.1)},
box=t=>t?[T(cx+8,3,"▜▙","text")]:c.art(cx+8,2,["▗▖","▐▌"],"text"),
pat=k=>{A(P(Rt,"up"),R(90,130));st=k;lv=-1;dust(3);A(P(Cl),80,1);A(P(Rt),R(140,240))};
function A(e,ms,o,ex){
o|=0;var p=[],s=SG[st],Q=Object.assign({},sp),r,q,d,ch,h=0;
for(r=0;r<3;r++){s[r]&&p.push(T(V+sh,4+r,s[r],BR));
if(lv>=0)for(q=0;d=MK[r][q];q++){ch=VL[r][q]>" "?VL[r][q]:"▄";
d>" "&&lv>=d&&!(cool>3&&r>1&&ch=="▄")&&p.push(T(V+sh+q,4+r,ch,cool?CL[cool-1]:LV[R(0,2)+!r]))}}
pw&&lv<0&&p.push(T(V+7,4,"▄","text"));
for(q=0;q<jet;q++)p.push(T(V+7+(q>1?R(-1,1):0),3-q,q<jet-1?"█":"●",LV[R(0,3)]));
ps=ps.filter(g=>{var x=M.round(g.x),y=M.round(g.y),u=x-cx,v=y-4-o;
if(g.h&&u>0&&u<8&&v>=0&&v<2&&(v||u>1))Q[u+v*9]=sp[u+v*9]=g.k=LV[R(0,1)*3],h=Object.assign(g,{h:0,s:"*·",a:0,l:2,u:0,v:-.6,g:0});
if(g.a>=g.l||y>6)return 0;
p.push(T(x,y,g.s[g.a*g.s.length/g.l|0],g.k));g.x+=g.u;g.y+=g.v;g.v+=g.g;return++g.a});
grin&&p.push(T(cx+3,5+o,"╰─╯","#5a1e0a",{bg:"clawd_body"}));
f.push({x:cx,offset:o,ms,pose:h?P(Cl,e.arms,e.feet):e,props:p.concat(ex||[]),paint:(u,v)=>Q[u+v*9]})}

// Sculpt: four pats grow the mound.
A(P(Rt),300);for(k=1;k<5;k++)pat(k);dust(2);A(P("wink"),400);
// Baking soda: show the box, tilt, pour.
A(P(0,U),250,0,box());A(P(Rt,U),300,0,box());
for(i=0;i<9;i++)pw=i>2,A(P(Rt,U),70,0,box(1).concat(T(cx+10,3,["·.·:","..·.",".·.·"][i%3],"text")));
// Toss the box; rumble; back off.
S(cx+8,3,-1.5,-1.2,["▜▙","▐▌","▟▛","▐▌"],"text",10,.3);A(P(Rt,"up"),90);
pw=0;lv=0;
for(i=0;i<12;i++){sh=i>3&&i%2;i%2||S(V+7,3,R(-1,1)*.3,-.5,"o°·",LV[R(2,3)],3,0);
if(i==6||i==8)cx--;
A(P(i>9?Cl:Rt,0,i==6?"left":i==8?Rt:0),i>9?120:R(60,110),0,i>4&&[T(cx+4,2,"!","warning",{b:1})])}
sh=0;
// Eruption: two spurts, lava flows, blobs fly at Clawd.
for(t=0;t<32||ps.length;t++){jet=JH[t]|0;lv=M.min(7,t/3|0);
for(k=t<5?3:jet>2?2:jet;k--;)S(V+7,M.max(1,4-jet),(rn()-.5)*2.6,-.2-rn()*.9,"●●•o",LV[R(0,3)],14,.3,1);
jet||t%4||S(V+7,3,0,-.5,"o°·",LV[R(1,3)],3,0);
if(hs.indexOf(t)>=0)n=R(8,10),S(V+7,1,(cx+R(2,7)-V-7)/n,(3+R(0,1)-.15*n*(n-1))/n,"●●•",LV[R(0,1)*3],n+2,.3,1);
A(P(t<2?Cl:Rt,jet>1&&t>1?"up":0),t<2?90:R(60,80),t<2,t==1&&c.art(V+5,2,["\\   /","─   ─"],LV[3]))}
// Splattered! Look at the spots, grin.
A(P("left"),350);A(P(Cl),120);A(P(Rt),300);grin=1;A(P(),250);
[0,-1,0,-1,0].forEach((o,j)=>A(P(j%2?"wink":0,"up"),110,o));A(P(Cl),400);
// Lava cools and steams.
for(;cool<4;A(P(Rt),R(220,300)))for(cool++,k=2;k--;)S(V+R(3,13),4-k,0,-.4,"▒░·","inactive",4,0);
grin=0;
// Shake off the spots, flatten the volcano.
for(i=0;i<6;i++){for(k in sp)if(rn()<.5||i>4)S(cx+k%9,4+(k/9|0),R(-1,1),-.6,"•·",sp[k],4,.2),delete sp[k];
cx+=i%2?-1:1;A(P(Cl,0,i%2?"left":Rt),55)}
for(i=0;i<2;i++)cx++,A(P(Rt,0,i?Rt:"left"),90);
for(k=4;k--;)pat(k);
A(P("wink"),350);A(P(),200);
f.push({x:cx,pose:"default",ms:200});
return f;
});
