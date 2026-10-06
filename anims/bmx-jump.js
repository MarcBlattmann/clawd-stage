// BMX over a shark pool: 360s, no-handers, a snapping fin, skid landing, score cards.
$cdA("bmx-jump",{title:"BMX jump",w:64},function(c){
var f=[],M=Math,W=c.W,R=c.R,P=c.P,T=c.T,d=c.x+4<W/2?-1:1,A=c.clamp(W/16|0,2,12),B=W-22-A,G=A+8,md=G+B>>1,
K="○╱  ═●═  ╱○",BC=c.hsv(R(0,359),.7,1),D="subtle",Y="chromeYellow",BL="professionalBlue",WN="warning",SP="°    °",
rs=2,wh=0,st=(B-G)/14+1|0,fy=0,fn=md,fv=1,ch=0,x=c.x,o,i,j,k,l,t,e,p,pr,sk,tk,kk,dy,rt=P("right"),cl=P("closed"),Z={z:-1},
// ramp heights in 1/8 rows
H=q=>q>=A&&q<A+8?(q-A+1)*2:q>=B&&q<B+8?(B+8-q)*2:0,
hm=(a,b)=>{for(var m=0;a<=b;)m=M.max(m,H(a++));return-M.round(m/8)},
fr=(x,o,p,pr,ms,h)=>{var r=[],a=M.max(G,md-wh),b=M.min(B,md+wh);
[A,B].map(q=>{for(var y=5;y<7;y++){for(var s="",z=q;z<q+8;)s+=" ▁▂▃▄▅▆▇█"[c.clamp(H(z++)-(6-y)*8,0,8)];r.push(T(q,y+rs,s,"rgb(196,136,78)",Z))}});
a<b&&r.push(T(a,6,"~^~   ~    ~-~     ".repeat(W).substr((a+(f.length>>1))%20,b-a),BL,Z));
fy&&(ch||f.length%2&&(fv=fn<md-9?1:fn>md+7?-1:fv,fn+=fv),r.push(T(fn,fy,fv>0?"▐◣":"◢▌","inactive",Z)));
f.push({x,offset:o,pose:p,props:r.concat(pr||[]),ms,hide:h})},
// bike: k = half length (-5..5), e = parked
bk=(x,y,k,e)=>{var a=k<0?-k:k,z=e?Z:{},s=a>4?e?K.replace(/ /g,"─"):K:a?"○"+"═".repeat(2*a-1)+"○":"│";
return[T(x+4-a,y,k<-4?"○╲  ═●═  ╲○":s,BC,z)].concat(a>4?T(x+4+k,y-1,k>0?"╮":"╭",BC,z):[])},
rd=(x,o,p,pr,ms,k=5,dy=0)=>fr(x,o,p,bk(x,6+o+dy,k).concat(pr||[]),ms),
so=()=>rs?0:hm(x+1,x+7),I=(p,pr,ms)=>fr(x,so(),p,pr,ms);
// ramps, pool, fin! flee, countdown, ride in
for(k=3;k--;)rs=k,I(k%2?P("left"):rt,k&&[A,B].map(q=>T(q-1,6,"·        ·",D)),180);
for(;wh<md-G+2;wh+=st)I(rt,0,45);
fy=5;I(rt,[T(fn-2,5,SP,BL)],350);
I(cl,[T(x+4,3+so(),"!",WN,{b:1})],450);
I(P(e=d<0?"left":"right"),0,150);
for(o=so(),k=W>110?2:1;x>-9&&x<W;fr(x,o,P(e,f.length%4>1&&"one-up",f.length%2?"left":"right"),0,35))x=c.clamp(x+d*k,-9,W),o=c.clamp(hm(x+1,x+7),o-1,o+1);
for(k=4;k--;)fr(-9,0,P(),[T((W>>1)-1,1,k?k+"":"GO!",k?WN:"success",{b:1})],k?420:280,1);
for(x=-9;x<=A-2;x++)o=hm(x-1,x+9),rd(x,o,P("right",0,x%2?"left":"right"),[T(x-7,5+o,"─ ──",D),T(x-3,6+o,"·",D)],x<A-7?40:30);
// flight: trick slots (1 = 360, 2 = no-hander)
var x0=A-2,Dd=B-x0,N=M.max(M.ceil(Dd/2),26),s0=N*.22|0,nt=N*.58/15|0,r0=R(0,1),lp=0,il=N*.45|0,xl=x0+4+(Dd*.47|0),
FC="right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ");
for(ch=i=1;i<=N;i++){
t=i/N;x=x0+M.round(Dd*t);o=-2-M.round(c.clamp(t*(1-t)*10,0,2));
j=i-s0;l=j%15;k=j/15|0;tk=j<0||l>12||k>=nt?0:1+(r0+k)%2,kk=5,dy=0;
p=rt;pr=[T(x-7,5+o,"── ─",D)];
i-il||(lp=1);
lp>0?(fy=+"043345"[lp++],lp>5&&(lp=-1),pr.push(T(fn-2,5,SP,BL))):fn-xl&&(fn+=fv=xl>fn?1:-1);
fy-3||tk||(p=cl,pr.push(T(x+9,4+o,"!",WN,{b:1})));
tk-1||(p={facing:FC[l]},kk=parseInt("a98654210689a"[l],16)-5);
tk>1&&(k=l>1&&l<11,p=P(l%4<2&&"wink",k?"up":"one-up"),dy=k,k&&l%2&&pr.push(T(x+(l%4?-2:10),R(0,2),c.pick("✦✧*"),Y)));
i<3&&pr.push(T(A+8,5,i<2?"✦*":"·",Y));
rd(x,o,p,pr,o<-3?55:40,kk,dy)}
// land, roll down, skid
ch=0;
rd(x=B,-2,cl,[T(B-3,4,"▒░           ░▒",D),T(B-2,3,"*            *",Y)],140);
for(var xe=W-11;x++<xe;)o=hm(x-1,x+9),k=x-B-8,sk=T(B+8,6,"▁".repeat(k>0?k:1),D,Z),rd(x,o,k>0?P("closed",0,"left"):x<B+4?cl:rt,k>0?[sk,T(x-4,5,"░▒","inactive"),T(x-2,4,"·",Y)]:[T(x-3,6+o,"░",D)],k>0?45+k*100/(xe-B-7)|0:50);
x=xe;rd(x,-1,P("wink","up"),[sk],110);rd(x,0,P(0,"up"),[sk],130);
// confetti, score cards
var cf=[];for(k=0;k<W/6;k++)cf.push([R(0,W-1),R(-8,0),c.pick("*✦•·♦"),c.rainbow(R(0,9))]);
for(k=0;k<16;k++){pr=[sk];
cf.map(q=>(l=q[1]+k)>=0&&l<7&&pr.push(T(q[0],l,q[2],q[3])));
[1,2,3].map(m=>k>m*2&&pr.push(T((W*m>>2)-2,1,m-2?" 10 ":" 9.9 ","text",{bg:m-2?"success":WN,o:1,b:1})));
k>6&&(fy=k%4<2?4:5);
rd(x,0,P(k%3&&"wink",k%2?"up":"one-up"),pr,140)}
// hop off, everything sinks
fy=5;var pk=()=>[sk].concat(bk(xe,6,5,1));
for(k=0;k<5;)x-=2,fr(x,-"12210"[k++],P("left","up"),pk(),70);
fr(x,0,rt,pk(),350);fr(x,0,P("wink","one-up"),pk(),450);
for(k=1;wh>0||k<4;k++)rs=M.min(k,2),wh-=st,fy=0,fr(x,0,k%2?P("left"):rt,bk(xe,5+k,5,1).concat(k<3?T(fn,6-k,"°",BL):[]),80);
f.push({x,pose:P(),props:[],ms:300});
return f});
