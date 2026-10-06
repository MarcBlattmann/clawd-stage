// Clawd whistles up a horse, gallops edge to edge over hurdles in clouds of dust, rears up waving his hat, then the horse trots off.
$cdA("horse-gallop",{title:"Gallop",w:64},function(c){
var f=[],W=c.W,G=c.G,R=c.R,T=c.T,P=c.P,Z={z:-1},
K=c.pick([["#aa693c","#5a3219"],["#d7af69","#faf0d7"],["#b9b9c3","#6e6e7d"],["#8c5532","#462d1e"]]),
H=K[0],MN=K[1],SD=c.pick(["error","permission","success","autoAccept"]),
YH="Yee-haw!",CY="chromeYellow",IN="inactive",D=[],hs=[],hh=[],sk=0,st=W>130?2:1,X,k,n,L,i,
LG=["  ▐▌      ▐▌","╱╱          ╲╲"," ╱│        ╲│","   ╲╲    ╱╱","  │╲      │╲"],
// horse at rider column X, back row b; m: 0 stand 1 gallop 2 jump 3 rear 4 graze
hz=(X,b,m,p)=>{var r=m==3?2:m>3?-3:0,y=b-r,q=[T(X-2,b,"▄▄▄",H),T(X+1,b,"▀▀▀▀▀▀▀",SD,{bg:H}),T(X+8,b,"▄██",H),
T(X-1,b+1,"▐██████████▘",H),T(X+11,y-2,"▗",MN),T(X+12,y-2,"•","#3c281e",{bg:H}),T(X+13,y-2,"▙▄",H),
T(X+10,y-1,"▟",MN),T(X+11,y-1,"█▀▀▘",H),T(X-4,b,p%2?"▀▄":"▄▄",MN)];
q.push(r<0?T(X+15,b+2,"wW","success"):T(X+12,y-3,"▗",H));
r>1?q.push(T(X+10,b-2,"▐█"+(p%2?"╲╲":"╯╯"),H),T(X+10,b-1,"▟█▘",H),T(X-1,b+2,"▐▌▐▌",H)):q.push(T(X-2,b+2,LG[m%4>1?1:m%4?1+p%4:0],H));
return q},
fr=(x,o,pose,ex,ms,hr,hide,hat)=>{var p=[];
sk&&hh.some((v,j)=>v&&hh[j]--);
hs.forEach((h,j)=>{var k=hh[j];k&&p.push(T(h,7-k,"╤══╤","error",Z));k>1&&p.push(T(h,6,"│  │",IN,Z))});
D=D.filter(d=>(d[2]=-~d[2])<6);
D.forEach(d=>p.push(T(d[0],d[1]-(d[2]>3),"▒▒░░·"[d[2]-1],d[2]<3?IN:"subtle",Z)));
hr&&(p=p.concat(hz.apply(0,hr)));
hide||hat===0||p.push(T(hat?hat[0]:x+2,hat?hat[1]:G-1+o,hat&&hat[2]||"▂▄██▄▂","#a56937"));
f.push({x:c.clamp(x,-9,W),offset:o,pose:pose,props:p.concat(ex||[]),ms:ms,hide:hide})},
run=(a,b,stop,s)=>{var pl=0,e;s=s||st;for(n=0,X=b-s*Math.ceil((b-a)/s);X<=b;X+=s,n++){L=0;
hs.forEach(h=>{var d=X-h;d>-12&&d<6?L=-2:d>-14&&d<8&&(L=L||-1)});
e=stop?(b-X)/s:9;
L||D.push([X-2+R(0,2),6]);
pl&&!L&&(wk=4)&&D.push([X-4,5],[X,6],[X+3,5],[X+9,6]);
fr(X,L?-3:n%4==1?-3:-2,P(L<-1?"closed":wk-->0?"wink":"right",L?"one-up":"down"),L?[T(X-10,5+L,"── ─","subtle")]:0,e<6?45+(6-e)*25:L?30:35,[X,4+L,L?2:1,n],X<-9||X>=W);
pl=L}},
x=c.clamp(c.x,21,c.mx),Xm=x-17,Xe=W-22,xf=Xe-11,S=[Xm,4,4,0],S0=[Xm,4,0,0],E0=[Xe,4,0,0],CL=P("closed"),wk=0;
f=f.concat(c.walk(c.x,x));
// hat drops on, he whistles
for(k=-1;k<4;k++)fr(x,0,P(),0,70,0,0,[x+2,k]);
fr(x,1,CL,0,90);fr(x,0,P("wink"),0,250);
for(k=0;k<8;k++)fr(x,0,P(k>5?"left":"wink"),[T(x-2-(k>>1),3-(k>>1),k%2?"♪":"♫","text")].concat(k>4?T(1,2,"neigh!",IN):[]),100);
// horse arrives and grazes; Clawd vaults on
for(k=(Xm+17)/st|0;k>0;k--){X=Xm-k*st;D.push([X-2+R(0,2),6]);fr(x,0,P("left"),0,k<6?45+(6-k)*25:35,[X,4,1,k])}
D.push([Xm-3,6],[Xm+8,6],[Xm+11,5]);
fr(x,0,P("left"),[T(x-1,3,"!","warning",{b:1})],300,S0);
fr(x,0,P("left"),0,250,S);
fr(x,1,CL,0,120,S);
[-1,-2,-3,-3,-3,-3,-3,-3,-2].forEach((o,i)=>fr(x-Math.round(17*(i+1)/9),o,P("left","up"),0,55,S));
fr(Xm,-1,CL,0,90,S);
for(k=0;k<7;k++)fr(Xm,-2,P("wink","one-up"),[T(Xm,0,YH,CY,{b:1})],110,[Xm,4,k?3*(k<5):0,k]);
run(Xm,W+5,0,2);
// hurdles pop up, the real run
for(i=0,n=(W-54)/26|0;i<=n;i++)hs.push(Math.round(n?14+(W-54)*i/n:W/2-8)),hh.push(0);
for(i=0;i<hs.length;i++)for(k=1;k<3;k++)hh[i]=k,fr(W,0,P(),[T(hs[i]-1,7-k,"·    ·",IN)],60,0,1);
fr(W,0,P(),0,300,0,1);
run(-17,Xe,1);
// rear up, wave the hat, hurdles sink
for(k=0;k<16;k++){var w=k>2&&k<13;sk=k>5;fr(Xe,-3,P(k%3?"wink":"open",w?"one-up":"down"),
[T(Xe-11,1,YH,CY,{b:1})].concat(k<8?T(Xe+16,1,"neigh!","text"):[]),k?120:200,[Xe,4,3,k],0,w?[Xe+4+k%2,0,k%2?"▂▄█▄▂":0]:void 0)}
D.push([Xe+9,6],[Xe+12,5],[Xe-2,6]);
fr(Xe,-2,CL,0,200,E0);
// hop off, wave, toss the hat
[-3,-4,-4,-3,-2,-1,0].forEach((o,i)=>fr(Xe-Math.round(11*(i+1)/7),o,P("left","up"),0,60,E0));
fr(xf,1,CL,0,100,E0);
for(n=0,X=Xe;X<W+5;X++,n++)n%3||D.push([X-2,6]),fr(xf,0,P(n<4?"right":"open",n%6<3?"one-up":"down"),0,60,[X,4,1,n>>1]);
for(k=0;k<5;k++)fr(xf,0,P("wink","one-up"),k>2?[T(xf+6,0,k>3?"·":"✦",CY)]:0,90,0,0,k<3?[xf+3+k,2-k]:0);
f.push({x:xf,pose:"default",props:[],ms:300});
return f});
