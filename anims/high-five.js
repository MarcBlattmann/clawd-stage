// A friend dashes in, a frozen mid-air high five (SLAP!, sparks, shockwaves), a dance, bye.
$cdA("high-five",{title:"Epic high five",w:56},function(c){
var f=[],G=c.G,W=c.W,R=c.R,P=c.P,T=c.T,pk=c.pick,rd=Math.round,mn=Math.min,i,t,y,B={b:1},Z={z:-1},I="inactive",Y="chromeYellow",X="closed",V="down",U="up",O="one-up",K="wink",x=c.x;
var d=(x+R(-3,3))*2<c.mx?1:-1,s=c.clamp(x+d*R(4,W/6|0),d>0?0:18,d>0?c.mx-18:c.mx);
var fs=s+16*d,E=d>0?W:-9,fc=pk(["permission","success","autoAccept","error"]);
var ce=d>0?"right":"left",fe=d>0?"left":"right",ch=d>0?O:U,fh=d>0?U:O;
var ft=i=>i%2?"left":"right",ar=i=>(i>>1)%2?O:V;
// Clawd x/o/p, friend y/q/fp
var F=(x,o,p,y,q,fp,pr,ms,col)=>f.push({x,offset:o,pose:p,ms,props:pr||[],color:col,actors:[{x:y,offset:q,pose:fp,color:col||fc}]});
var tr=(x,m)=>T(m>0?x-3:x+9,G+1,m>0?"- ≡":"≡ -",I),du=x=>T(x-1,G+2,"·°       °·",I);
// hey!
var hey=T(d>0?W-5:1,G-2,"hey!",fc,B),bang=o=>[hey,T(x+4,G-1+o,"!","warning",B)];
F(x,0,P(),E,0,P(),[],350);
F(x,0,P(ce),E,0,P(),[hey],300);
F(x,-1,P(ce,U),E,0,P(),bang(-1),160);
F(x,0,P(ce,U),E,0,P(),bang(0),300);
// run to meet
var r=(s-x)*d,D=(E-fs)*d,n=Math.max(r,D),ms=c.clamp(2400/n|0,22,50);
for(i=0;i<n;i++){t=n-1-i;var cx=s-d*mn(r,t),px=fs+d*mn(D,t);
F(cx,0,t<r?P(ce,ar(i),ft(i)):P(ce,(i>>2)%2?ch:V),px,0,P(fe,ar(i),ft(i)),t<r?[tr(cx,d),tr(px,-d)]:[tr(px,-d)],ms)}
// skid, shaky crouch, leap
F(s,0,P(ce),fs,0,P(fe),[du(s),du(fs)],140);
F(s-d,1,P(ce),fs+d,1,P(fe),[],280);
for(i=0;i<4;i++)F(s-d-d*(1-i%2),1,P(X),fs+d+d*(1-i%2),1,P(X),[],50);
for(i=0;i<3;i++)F(s+i*d,-1-i,P(ce,i?ch:V),fs-i*d,-1-i,P(fe,i?fh:V),i?[]:[du(s-d),du(fs+d)],40);
// impact fx at tick t
var A=s+3*d,M=A+4+5*d,sp=[];
for(i=0;i<18;i++)sp.push([R(2,8)/4*pk([-1,1]),R(-3,2)/4,pk([..."✦*·✧+"])]);
var bz=t=>{var pr=[];
if(t)sp.forEach((p,j)=>pr.push(T(rd(M+p[0]*t),rd(1+p[1]*t+t*t/10),p[2],c.rainbow(j),Z)));
[2*t,2*t-6].forEach(k=>{if(k>1&&k<24)[0,1,2,6].forEach(y=>{var o=y%5==1?k:k-1,rc=k<8?"text":k<14?I:"subtle";pr.push(T(M-o,y,y>5?"~":"(",rc,Z),T(M+o,y,y>5?"~":")",rc,Z))})});
if(t<11)pr.push(T(M,1,"✹✸✸✦✦·"[t>>1],t?t<10?Y:I:"text",B));
if(t&&t<12)pr.push(T(M-2+(t<4?t%2:0),0,"SLAP!",t<4?pk(["error","warning",Y]):t<10?Y:I,B));
return pr};
// frozen mid-air
for(t=0;t<10;t++){F(A,-3,P(t<3?X:ce,ch),A+10*d,-3,P(t<3?X:fe,fh),bz(t),t?120:70,t?void 0:"warning")}
// fall, land, shake stinging hands
var L=s+d,Q=fs-d,mid=L+4+7*d;
[-2,-1,0,1,0].forEach((o,j)=>{var e=j==3?X:0,a=j?d:2*d;
F(s+a,o,P(e||ce,j<2?ch:V),fs-a,o,P(e||fe,j<2?fh:V),bz(10+j).concat(j>2?[du(L),du(Q)]:[]),e?150:60)});
for(i=0;i<6;i++){t=i%2;F(L,0,P(X,t?ch:V),Q,0,P(X,t?fh:V),t?[T(mid-3*d,G-1,"~",I),T(mid+3*d,G-1,"~",I)]:[],70)}
F(L,0,P(ce),Q,0,P(fe),[],300);
F(L,0,P(K),Q,0,P(K),[T(mid,G-1,"♥","error",B)],450);
// dance; heart rises with the notes
var nt=[[mid,G-1,"♥","error"]],b=0,nn=a=>{if(a&&b++%2==0)nt.push([mid+R(-2,2),4,pk([..."♪♫"]),c.rainbow(R(0,9))]);
return nt.map(u=>T(u[0],--u[1],u[2],u[3])).filter(u=>u.y>=0)},N=(xo,o,p,q,fp,ms)=>F(L+xo,o,p,Q+xo,q,fp,nn(1),ms);
var mv=[()=>{for(i=0;i<8;i++){t=i%2;N(0,-t,P(t?K:ce,t?U:V),t-1,P(fe,t?V:U),150)}},
()=>{"right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ").forEach(k=>N(0,0,{facing:k},0,{facing:k},60));
N(0,0,"arms-up",0,"arms-up",250)},
()=>{for(i=0;i<8;i++)N([0,1,0,-1][i%4],0,P(ce,i%2?U:O,ft(i)),0,P(fe,i%2?O:U,ft(i+1)),150)}],k=R(0,2);
for(y=0;y<3;y++)mv[(k+y)%3]();
// bye, friend leaves
for(i=0;i<4;i++)F(L,0,P(ce,i%2?ch:V),Q,0,P(fe,i%2?V:fh),nn(0).concat(i?[T(Q+2,G-2,"bye!",fc,B)]:[]),180);
ms=c.clamp(1800/((E-Q)*d)|0,20,45);
for(y=Q,i=0;y!=E+d;y+=d,i++)F(L,0,P(ce,(i>>2)%2?ch:V),y,0,P(ce,ar(i),ft(i)),[tr(y,d)],ms);
f.push({x:L,pose:P(ce),ms:250},{x:L,pose:P(K),ms:400},{x:L,pose:P(),ms:200});
return f;
});
