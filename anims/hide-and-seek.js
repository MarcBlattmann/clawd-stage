// Clawd counts at a tree, a friend hides in a bush; he searches, finds them, both laugh.
$cdA("hide-and-seek",{title:"Hide and seek",w:50},function(c){
var f,W=c.W,P=c.P,T=c.T,R=c.R,
 tx=c.clamp(c.x-9,6,W-41),bx=tx+28,cx=tx+9,cp=P(),co=0,fx=W,fp=0,fo=0,
 fc=c.pick(["permission","autoAccept","chromeYellow"]),
 ty=7,by=3,bj=0,t=0,ps=[],k,s,pk=R(0,1)?R(2,6):99,
 l="left",r="right",C="closed",K="wink",O="one-up",L="success",B="#a0643c",GR="inactive",U="up",FL=P(l);
function X(x,y,s,q){return T(x,y,s,q||"warning",{b:1})}
// particle: t0,x,y,dx,dy,life,glyphs,color,grav
function sp(x,y,dx,dy,n,g,q,v){ps.push([t,x,y,dx,dy,n,g,q,v||0])}
function S(ms,ex){
 var p=c.art(tx,ty,["  ▄███▄","▗███████▖","█████████"," ▀█▛▀▜█▀"],L,{z:-1});
 ps.forEach(function(q){var a=t-q[0];a<q[5]&&p.push(T(q[1]+a*q[3]+.5|0,q[2]+a*q[4]+q[8]*a*a/2+.5|0,q[6][a*q[6].length/q[5]|0],q[7],{z:-1}))});
 p=p.concat(c.art(tx+2,ty+4,[" ▐██▌"," ▐██▌","▗▟██▙▖"],B),c.art(bx,5+by,["▗██▙▄███▄▟██▖","▐███████████▌"],L,{o:1}),[T(bx+2+bj,4+by,"▗▄     ▄▖",L)],ex||[]);
 t++;
 f.push({x:cx,pose:cp,offset:co,ms:ms,props:p.filter(function(q){return q.t}),actors:fp?[{x:fx,offset:fo,pose:fp,color:fc}]:[]});
}
f=c.walk(c.x,cx);
cp=FL;S(200);
for(;ty;S(80))ty--,sp(tx+(ty%2?1:7),6,ty%2?-.6:.6,-.3,4,"▒░·",B);
cp=P();S(250,[X(cx+4,2,"!")]);cp=P(r);S(150);
for(;by;S(70))by--;
for(k=0;k<8;k++)sp(bx+6,4,(k-3.5)/4,-.6,6,"✿*·",c.rainbow(k),.12);
S(150);cp=P(K);S(350);cp=P(r);
for(k=0;fx>tx+19;S(fx>bx?35:50))fx-=fx>bx+4?2:1,fp=P(l,0,k++%2?l:r);
fp=P(0,O);S(800,[T(fx-2,2,"hide & seek?","text")]);
for(k=0;k<7;k++)co=fo=1-"0123211"[k],cp=fp=co<0?P(0,U):P(k?K:C),S(k>5?300:co<0?60:100,[X(cx+3,1,"ok!")]);
// Count; friend sneaks off.
fp=FL;
for(;cx>tx+7;S(90))cx--,cp=P(l,0,cx%2?l:r);
for(k=0;k<21;k++){
 s=k>=pk&&k<pk+3;cp=P(s?K:C,U);co=k%7?0:1;
 if(fx<bx+2){s||fx++;fp=P(s?0:l,U,s?0:fx%2?l:r)}else fo=k<18?1:0,fp=FL;
 S(s?160:100,[X(cx+4,1,"1..2..3..".slice(0,3*(k/7+1|0))),s&&X(fx+4,3,"!")]);
}
// The friend ducks when he looks.
cp=P();co=-1;S(90);co=0;S(600,[X(cx+3,1,"ready or not!")]);
for(k=0;k<2;k++)cp=FL,S(R(120,200)),fo=0,S(R(200,300)),cp=P(r),S(80),fo=1,S(R(280,380),[X(cx+4,3,"?",GR)]);
// Behind the tree; maybe a bird.
fo=0;
for(;cx>tx-6;S(65)){cx--;cp=P(l,U,cx%2?l:r);
 if(cx==tx+4&&R(0,2)){sp(tx+7,.4,1,-.1,16,"v^".repeat(8),"text");for(k=0;k<4;k++)sp(tx+R(1,7),4,0,.35,6,"♣·",L);
  cp=P(C);co=1;S(120,[X(cx+5,4,"!")]);S(250);co=0}}
cp=FL;S(350);cp=P(r);S(250);cp=P(0,U);S(500,[X(cx+4,2,"?",GR)]);
// Sneeze!
s=c.pick(["achoo!","hihi","*giggle*"]);fp=P(C);
for(k=0;k<9;k++){bj=k<6?k%2:0;fo=k==1?-1:k>6?1:0;
 k>1&&k<7&&sp(bx+2*k-2,3,(k-4)*.4,-.4,5,"♣·",L);
 cp=P(k>2?r:l,k>2?U:0);co=k==3?-1:0;
 S(k==1?150:80,[T(bx+3,1,s,GR),k>2&&X(cx+4,2+co,"!")])}
fp=FL;
for(;cx<tx+19;S(s?40:120,s?[T(cx-1,5,"≡",GR,{z:-1})]:[fo||X(fx+4,3,"!")]))cx++,s=cx<tx+13,cp=P(r,s?0:U,cx%2?l:r),fo=cx-tx-15>>>1?1:0;
// Found!
cp=P(r);co=1;S(350);
for(k=0;k<6;k++)sp(bx+6,4,(k-2.5)*.6,-.7,7,"♣✿·",k%2?L:"error",.2);
for(k=0;k<6;k++)co=-"122100"[k],fo=1-"023322"[k],cp=P(0,U),fp=P(k?C:l,U),S(k<4?70:150,[X(cx+1,0,"FOUND YOU!"),k>1&&X(fx+3,3+fo,"!!")]);
for(k=0;k<14;k++){co=-(k%2);fo=-1-(k+1)%2;cp=P(k%3?C:K,k%2?U:O);fp=P(C,k%2?O:U);
 k%3||sp(cx+9+R(0,1),2,0,-.4,6,"♥·","error");
 S(90,[X(cx+(k%4<2?0:6),2+co,"ha"),X(fx+(k%4<2?6:1),1,"HA")])}
// Bye; scenery sinks.
co=0;
for(k=0;fx<W;k++,S(s?35:55,[k<12&&T(fx+2,2,"bye!","text")]))s=fx>bx+14,fx+=s+1,fo=fx<bx+8?-1:0,fp=P(l,O,k%2?l:r),cp=P(r,k%4<2?O:0);
fp=0;cp=P();
for(;ty<7;S(70))ty++,by<3&&by++,sp(tx+R(0,8),6,0,-.3,3,"░·",B),sp(bx+R(0,12),6,0,-.3,3,"░·",L);
cp=P(K);S(400);
f.push({pose:"default",ms:200});
return f;
});
