// A hoop drops over Clawd: he hula-hoops into a blur, it lifts him off as a rotor on his raised hand, slides down, and he kicks it rolling away and waves.
$cdA("hula-hoop",{title:"Hula hoop",w:44},function(c){
var G=c.G,P=c.P,R=c.R,M=Math,x=c.clamp(c.x,5,c.mx-9),f=c.walk(c.x,x),pt=[],s=0,a=0,k,y,o,cx,bx=x,d,bl,
A="111111111",B="011111111",FT="011000110",I="inactive",U="one-up",W="wink",
pal=c.pick([[0,35,60,130,210,280],[350,50],[300,185],[20,130,200]]).map(function(h){return c.hsv(h,.7,1)}),
col=function(i){return pal[(i+3e3)%pal.length]};
// particles [x,y,dx,dy,t,color,life]
function E(px,py,dx,dy,t,l,cl){pt.push([px,py,dx,dy,t,cl||col(R(0,5)),l])}
function push(o,pr){pt=pt.filter(function(p){return p[6]-->0});
o.props=(pr||[]).concat(pt.map(function(p){var q=c.T(M.round(p[0]),M.round(p[1]),p[4],p[5],{z:-1});p[0]+=p[2];p[1]+=p[3];return q}));f.push(o);s++}
// hoop edge-on, striped; mask m (from col bx): 1 = Clawd covers that cell
function hoop(cx,y,m,ph){for(var o=[],i=-6;i<7;i++)if(m[cx+i-bx]!=1)o.push(c.T(cx+i,y,i<-5?"(":i>5?")":"━",col(i+ph>>1)));return o}
function fl(m){return hoop(x+4,G+2,m,0)}
// orbit step: front half over him, back half behind, hips sway against it; blur adds grey afterimages
function spin(ms,y,cb,e,ar,o,am){o=o||0;am=am==null?2:am;
var t=a++*M.PI/4,co=M.cos(t),fr=M.sin(t+.4)>0,r=y-G-o,sw=r<0?0:M.round(co*am*.45),pc=cx,h;
bx=x-sw;cx=cb+M.round(co*am);
h=hoop(cx,y,r>1?FT:r<0||fr?"":r?ar==U?A:B:ar==U?B:"011111110",fr?s:-s);
bl&&h.push(c.T(cx>pc?cx-8:cx+7,y,cx>pc?"((":"))",I,{z:fr?0:-1}));
push({x:bx,offset:o,ms:ms,pose:P(e||(co>.5?"right":co<-.5?"left":"open"),ar,o<0?(a%2?"left":"right"):r>1||!sw?"both":sw>0?"left":"right")},h)}
function S(y){if(a%4==1){d=a%8==1?1:-1;E(cx+7*d,y,d,R(-2,1)/4,c.pick("*·✦"),R(3,6))}}
// upright ring, 11x5, stripes turn as it rolls
function ring(rx,ry,k){for(var q=[],j=0;j<28;j++)q.push(c.T(rx+parseInt("1234567899aaa998765432110001"[j],16),ry+ +"0000000001123344444444433211"[j],"╭───────╮╰╮│╯╭╯───────╰╮╰│╭╯"[j],col(j-k*D>>1),{z:-1}));return q}
// 1. it flies in: "!" beat, arms up, it drops over his head onto his hips
push({pose:"default",ms:300});d=R(0,1)*2-1;
E(x+4,G-1,0,0,"!",2,"warning");push({pose:"default",ms:380},hoop(x+4,0,"",0));
for(y=1;y<=G+1;y++)push({pose:P(y>3?"closed":"open","up"),ms:100-y*10},hoop(x+4+y%2*d,y,y==G?A:"",0));
push({offset:1,pose:P("closed","up"),ms:90},fl(""));
E(x-3,G+1,-1,-.3,"✦",3);E(x+11,G+1,1,-.3,"✦",3);
for(k=0;k<4;k++)push({pose:P(["open","left","right",W][k],"up"),ms:k%3?260:120+k*77},hoop(x+4,G+1,"",0));
// 2. slow nudges build into a blur
var T=R(3,4)*8;
for(k=0;k<T+40;k++){bl=k>=T;spin(k<T?150-100*k/T|0:R(30,36),G+1,x+4,k>20&&(k%23==7?W:"closed"),"up");
k%8==3&&k>6&&E(x+R(1,7),G-1,R(-1,1)*.3,-.35,c.pick("♪♫"),8);bl&&S(G+1)}
// 3. arm up: the hoop climbs to his hand, whirls like a rotor, he lifts off
for(k=bl=0;k<24;k++){y=G+1-(k>11)-(k>17);spin(k<8?48:42,y,x+4+c.clamp(k-8>>1,0,4),y==G?"closed":"right",U)}
var L=c.pick([[-1,-2,-3,-2,-1],[-1,-2,-2,-1]]);
for(k=0;k<L.length*8+8;k++){o=L[(k>>3)-1]||0;bl=k>7;spin(32,G-1+o,x+8,k%16==9?W:"open",U,o);S(G-1+o);
o&&E(x+4+R(2,5)*(d=R(0,1)*2-1),G+2,d,0,"~",2,I)}
// 4. it slides down to the floor and rattles flat
for(k=bl=0;k<14;k++){y=M.min(G-1+(k>>2),G+2);spin(60+k*4,y,x+8-M.min(4,k>>1),y==G?"closed":0,k<3?U:"down")}
[2,2,1,1,1,1,0,0,0,0,0,0].forEach(function(w,i){spin(110-i*7,G+2,x+4,0,"down",0,w);i%3==2&&E(x-2+R(0,12),G+2,0,-.4,"·",2,I)});
bx=x;var F=fl(FT),D=x+4>c.W/2?1:-1,lk=D>0?"right":"left";
["left","right","open"].forEach(function(e){push({x:x,pose:P(e),ms:260},F)});
// 5. crouch, confetti ta-da hop
push({offset:1,pose:P("closed"),ms:160},fl(A));
for(k=0;k<12;k++)E(x+4+R(-7,7),R(0,1),R(-1,1)*.2,.4,c.pick("✦*·°"),R(5,9));
[-1,-2,-2,-1].forEach(function(o){push({offset:o,pose:P(W,"up"),ms:80},fl(""))});
push({pose:P(W,"up"),ms:450},F);
// 6. kick: it flips up behind him, poses as a frame, then rolls off to the nearer edge
push({pose:P(lk,"down",D>0?"left":"right"),ms:260},fl(D>0?"011":"00000011"));
push({pose:P("closed"),ms:60},hoop(x+4+D,G+1,A,0).concat(c.T(x+4+5*D,G+2,"✦","text")));
push({pose:P("open"),ms:80},ring(x-1,G-3,0));
push({pose:P(W),ms:420},ring(x-1,G-2,0));
for(k=1,cx=x-1;cx>-11&&cx<c.W;k++){k%2&&E(cx+5-D*5,G+2,-D/2,-.3,"·",3,I);
push({pose:P(lk),ms:k<5?80:45},ring(cx,G-2,k));cx+=D*(k<5?1:2)}
// 7. bye!
for(k=0;k<6;k++)push({pose:P(k%2?lk:W,k%2?"down":U),ms:170});
pt=[];push({pose:P(W),ms:250});push({pose:"default",ms:100});
return f});
