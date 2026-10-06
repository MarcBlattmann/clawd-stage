// Clawd pogo-sticks across, higher each boing, mega-bounces off the top and lands dizzy.
$cdA("pogo-stick", { title: "Pogo stick", w: 60 }, function (c) {
var f=[],fx=[],T=c.T,P=c.P,R=c.R,Y="chromeYellow",G="inactive",S="subtle",A="warning",E="error",b={b:1},hot=Y,i,j,k,o,r,L,
nb=R(4,5),H=[1,1,2,2,3].slice(5-nb),hg=[],B=0,trick=c.pick(["one-up","up"]);
for(i=0;i<nb;i++)B+=[4,5,7][H[i]-1]+(hg[i]=(i+5-nb>>1)+R(0,1));
// fit: trim hang time if narrow; go right when there's room
while(B>c.mx-22){for(i=0;i<nb-1&&!hg[i];i++);hg[i]--;B--}
var m=c.mx-c.x,d=m>21+B||m>=c.x?1:-1,e=d>0?"right":"left",X=d>0?Math.min(c.x,c.mx-22-B):Math.max(c.x,22+B),
// pogo: shaft column p, foot row r, s spring rows (0 = squashed)
pg=(p,r,s)=>{var a=[T(p-5,r-1,"═════╦═════",E,{z:-1}),T(p,r,s?"║":"≡",s?G:hot,b)];while(s)a.push(T(p,r+s--,"§",Y,b));return a},
sh=(p,w)=>T(p-w,6,w?"─".repeat(2*w+1):"·",S),
em=(n,g)=>fx.push({a:0,n:n,g:g}),
du=(s,p=X+4,w=5)=>em(s.length,a=>[T(p-w-a,6,s[a],G),T(p+w+a,6,s[a],G)]),
wd=(t,col,n,y,x=d>0?X-t.length:X+10)=>em(n,a=>[T(x,y-(a>>1),t,a>n-3?S:col,b)]),
bg=()=>[T(X+4,3,"!",A,b)],
pu=(po,ms,q,o=0,s=-1,ex)=>{
var p=s<0?[]:pg(X+4,6+o,s);
fx=fx.filter(z=>z.a<z.n);
fx.forEach(z=>p=p.concat(z.g(z.a++)));
f.push(Object.assign({x:X,offset:o,pose:po,ms:ms,props:p.concat(q||[])},ex));
},
p0=X+4+10*d;
f=c.walk(c.x,X);
// setup: pogo drops in, he hops on
for(r=-1;r<5;r++)pu(P(r>2?e:0),45,pg(p0,r,1).concat(r>0?sh(p0,r>>1):[]));
du("··",p0,2);
[[6,0,70],[4,1,60],[5,1,400],[5,1,300],[5,1,140]].forEach((q,j)=>pu(P(j-3?e:"wink"),q[2],pg(p0,q[0],q[1]).concat(j<3?bg():[]),j>3?1:0));
[[-1,2],[-2,2],[-3,2],[-3,2],[-2,1],[-1,1]].forEach((q,j)=>{X+=d*q[1];pu(P(e,j<5?"up":"down"),55,pg(p0,5,1),q[0])});
// build-up: higher and louder
var ws="boing boing! Boing! BOING! BOING!!".split(" ").slice(5-nb),wc=[S,G,"text",A,Y].slice(5-nb);
for(i=0;i<nb;i++){
var h=H[i],sq=[[0,0],[-1,1],[-2,2]];
for(o=h>1?-3:-2;o>=-1-h;o--)sq.push([o,1]);
for(k=0;k<hg[i];k++)sq.push([-1-h,1]);
for(o=-h;o<0;o++)sq.push([o,1]);
sq.forEach((q,j)=>{
var top=j>2&&q[0]==-1-h;
if(j)X+=d;else du("···");
if(j==2)wd(ws[i],wc[i],7,5);
pu(P(j?top&&i>1?"wink":e:"closed",top&&h>2?trick:"down"),j?q[1]>1?55:top?90:45:80,0,q[0],q[1]);
});
}
// climax: strain, launch off the top, "BOOOING!", fall back
for(k=0;k<7;k++){hot=k%2?E:A;pu(P(k<6?"closed":"open"),k<6?75:260,k<6?[T(X-2,4+k%2,"~",G),T(X+10,5-k%2,"~",G)]:[T(X+3,3,"!!",E,b)],0,0,{color:c.rgb(215+6*k,119-12*k,87-10*k)})}
hot=Y;du("▒▒░░·");
var cx=X+4,m0=c.clamp(cx-4,0,c.W-8),n=R(11,14);
for(o=-1;o>-8;o--){
for(L=[],k=o<-1&&o>-5?2:1,r=7+o+k;r<7;r++)L.push(T(X+2,r,"¦   ¦",S));
pu(P("open"),35,L,o,k);
}
for(k=0;k<n;k++){
for(L=[],j=0;j<8&&j<=k;j++)L.push(T(m0+j,j<k?2:1,"BOOOING!"[j],c.rainbow(j+k),b));
if(k<4)L.push(T(cx,0,"✦✸✦·"[k],Y));
if(k>n-4)L.push(sh(cx,k-n+3));
pu(P(),80,L,-7,-1,{hide:true});
}
for(o=-7;o<0;o++){
for(L=[sh(cx,3)],r=3+o;r>=0&&r>o;r--)L.push(T(X+2,r,"¦   ¦",S));
pu(P("open","up"),30,L,o,1);
}
// payoff: thud, pogo flies out, dizzy stars
var bz={b:1,z:-1},li=(m,y,s="§")=>[T(cx+d*m,y,"╫",E,bz),T(cx+d*(m+2)-1,y,"═══",G,bz),T(cx+d*(m+4),y,s,Y,bz)];
du("▒▒░░·");wd("THUD!",E,6,3);
pu(P("closed"),60,0,0,0);
[[2,6,1],[4,5,1],[6,4],[7,3],[8,4],[8,5],[8,6]].forEach(q=>pu(P("closed"),50,li(q[0],q[1]),q[2]));
var X0=X,ns=R(2,3),nd=R(14,18);
for(k=0;k<nd;k++){
X=X0+[0,1,1,0,-1,-1][k%6];L=li(8,6);
for(j=0;j<ns;j++){
var a=k*0.6+j*6.283/ns,fr=Math.sin(a)>0;
L.push(T(X+4+Math.round(4.5*Math.cos(a)),fr?3:2,k>nd-4?"·":fr?"★":"✧",fr?Y:A,b));
}
pu(P(["left","closed","right","closed"][(k>>1)%4],"down",k%3?"both":k%2?"left":"right"),110,L);
}
// cleanup: shake it off; the pogo twitches and boings away
X=X0;
[["closed",200],["open",250],["left",90],["right",90],["left",90],[e,400]].forEach(q=>pu(P(q[0]),q[1],li(8,6)));
for(k=0;k<4;k++)pu(P(k>1?"closed":e),90,li(8,6-k%2,k%2?"§":"≡").concat(k>1?bg():[]));
var pc=cx+10*d;
wd("boing",A,6,6,d>0?pc+2:pc-6);
pu(P(e),70,pg(pc,6,0));
for(r=5;r>-3;r--)pu(P(e),40,pg(pc,r,r<4?1:2));
["✦","✸","·"].forEach((q,j)=>pu(P(e),j%2?250:80,[T(pc,0,q,Y,b)]));
pu(P("closed","up"),450);pu(P("wink"),300);pu(P(),150);
return f;
});
