// A butterfly flits by; Clawd chases it with a net, keeps missing, flings the net away and sits; it lands on his head.
$cdA("butterfly-chase",{title:"Butterfly",w:50},function(c){
var T=c.T,R=c.R,M=Math,G=c.G,Y=G-1,ps=[],k=0,o=0,e,a,ft,tr=0,s=-1,fl,fz=0,B=0,pt,bx,by,ax,ay,hx,hy,i,j,n,q,
 h=R(0,359),x=c.clamp(c.x,1,c.mx-30),f=c.walk(c.x,x),BD={b:1},WD="#b07c48",IN="inactive",SB="subtle",L="left",RT="right",CL="closed",W="wink",U="one-up",bl=function(X,Z){return Z==1&&(X==2||X==6)?"#ff8ca5":void 0};
function P(X,Z,u,v,t,k,n){ps.push([X,Z,u,v,t,k,n])}
function H(X,Z){return[T(X,Z,"( )","text"),T(X+1,Z,"▒",IN)]}
function mk(t,k){return[T(x+4-(t.length>>1),G-2+o,t,k||"warning",BD)]}
// erratic step toward (ax,ay)
function st(){var r=M.random(),d=M.sign(ax-bx),v=M.sign(ay-by);
 if(d||v)bx+=r<.1?-d:r<.2?0:d,by+=d&&r>.6?R(-1,1):v;else bx+=r<.15?R(-1,1):0,by+=r>.6?R(-1,1):0;
 by=c.clamp(by,-1,M.max(ay,3))}
function F(ms,ex){
 var p=[],q,y=G+o,cl=c.hsv(h+40*M.sin(k++*.3),.6,1);
 if(B&&!fz){k%3||P(bx+R(0,1),by,0,.34,c.pick("··✧"),cl,3);st()}
 ps=ps.filter(function(q){p.push(T(M.round(q[0]),M.round(q[1]),q[4],q[5],{z:-1}));q[0]+=q[2];q[1]+=q[3];return--q[6]});
 if(B){p.push(T(bx,by,(fl==null?k%3:fl)?"▶◀":"▐▌",cl,BD));if(tr&&by>=0)e=bx<x+2?L:bx>x+6&&RT}
 tr>1&&(a=k%4<2&&U);
 // net s: back, up, ready, level, slammed
 if(s>=0)q=s<3?-2:2*s-6,hx=x+M.min(4+3*s,10),hy=y+q,a=s<2?"up":s<4&&U,p=p.concat([T(x+M.min(7+s,9),y+q/2,"\\│/─\\"[s],WD)],H(hx,hy));
 f.push({x:x,offset:o,pose:c.P(e,a,ft),ms:ms,paint:pt,props:p.concat(ex||[])});
}
function go(X,Z,ms){ax=X;ay=Z;for(var g=0;(bx!=X||by!=Z)&&g<40;g++)F(ms)}
// swing; J leaps, dg dodges
function sw(w,J,dg){fz=1;tr=0;e=RT;
 for(j=0;j<6;j++){
  j>1&&P(hx+1,hy,0,0,"~",SB,2);
  s=+"101234"[j];o=J?-"122210"[j]:0;x+=J&&j<5;dg(j);
  j>4&&(P(x+9,6,0,-.5,"°",IN,3),P(x+13,6,1,-.5,"°",IN,3),P(x+11,5,0,-1,"✶","warning",2));
  F(j==1?w:j>4?120+w:j?35:70)}
 fz=0;ax=bx;ay=by;e=CL;F(160)}

// drifts down, bumps his head
bx=ax=M.min(x+R(12,16),c.W-3);by=ay=-1;F(300);B=tr=1;
go(x+11,1,60);go(x+2,Y-1,65);go(x+5,Y,80);
tr=0;e=CL;F(140,mk("!"));e=0;F(120);tr=1;go(x+14,1,55);
// idea: hop, grab a net
tr=0;e=RT;F(260,mk("!"));o=-1;F(80,mk("!"));o=0;F(90);
o=1;e=CL;F(150);s=2;F(90);o=0;e=W;F(340,[T(x+13,G-3,"✦","chromeYellow")]);
// tiptoe, swing, miss
tr=1;n=R(3,5);ax=x+n+13;ay=Y-1;
for(i=0;i<n;i++){x++;ft=i%2?L:RT;F(130);ft=0;F(i%2?200:100)}
go(x+13,Y,90);F(220);
sw(250,0,function(j){if(j>1)bx-=j>3?2:1,by=M.max(by-1,0)});
s=2;q=mk("?","text");e=0;F(320,q);e=RT;F(260,q);tr=1;go(x+14,1,55);
// run, leap, swing, miss
for(n=R(5,7),i=0;i<n;i++){x++;ft=i%2?L:RT;ax=x+14;ay=R(0,2);i%2&&P(x-1,6,-.5,0,"·",IN,2);F(45)}
ft=0;o=1;F(120);
sw(70,1,function(j){bx=x+11+(j<2)+2*(j>4);by=M.min(by+1,4)});
s=2;for(i=0;i<4;i++){x+=i%2?-1:1;F(70,mk("#@!","error"))}
// frantic swats
tr=1;go(x+13,2,50);
for(n=R(1,2);n--;){s=2;tr=1;x++;ft=L;F(50);x++;ft=RT;F(50);ft=0;ax=x+13;ay=R(2,3);F(60);F(60);
 sw(40,0,function(j){if(j>1)bx+=R(-1,2),by=c.clamp(by+c.pick([-2,-1,1]),0,3)})}
// give up: pant, fling net, sit
ax=x+R(6,10);ay=0;tr=0;s=2;for(j=-1;j<2;j+=2)P(x+4+3*j,Y,j,.2,"°","permission",3);F(400);
s=0;F(160);s=-1;a="up";
for(i=0;i<8;i++){n=x+4-(i*3>>1);q=G-2-(i+1>>1);P(n+1,q,0,0,"·",SB,2);
 F(55,H(n-1,q).concat([T(n+ +"44200024"[i]-2,q+ +"10001222"[i]-1,"─/│\\─/│\\"[i],WD)]));a=0}
o=1;P(x+9,G,1,-.4,"~",SB,4);F(250,[T(x-1,6,"°",IN),T(x+9,6,"°",IN)]);F(450);
// spirals down onto his head
go(x+1,2,100);go(x+4,G,130);fz=1;
for(i=0;i<7;i++){fl=i%3==1;e=[0,0,L,RT,W,W,CL][i];i>3&&(pt=bl);
 i==4&&P(x+7,G-1,.3,-.4,"♥","error",4);F(i<2?350:300)}
// off it goes; he waves
fz=0;pt=fl=void 0;tr=2;o=0;
go(x+R(9,13),1,80);go(x+R(13,17),-1,60);
B=a=tr=0;e=W;F(300);
f.push({x:x,pose:"default",ms:200});
return f;
});
