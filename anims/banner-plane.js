// A prop plane tows a "HELLO WORLD" banner across the whole sky; Clawd waves, it loops back with "HI CLAWD" and he jumps for joy.
$cdA("banner-plane",{title:"Banner plane",w:64},function(c){
var W=c.W,G=c.G,P=c.P,Y=c.T,R=c.R,M=Math,Q=M.random,f=[],S=[],C=[],ph=0,T=0,D=1e9,i,k,a,hx,hy,j=-1,q=0,
x=c.clamp(c.x,4,c.mx-4),I="inactive",JM=[1,-1,-2,-2,-1,0,0],r=c.rng(R(1,1e6)),
V=c.pick(["error","permission","autoAccept","#e4e8f0"]),B=c.pick(["#f4ecd0","#ffe9a0","#d4ecff"]),
m1=c.pick(["HELLO WORLD","HELLO WORLD","SHIP IT!","HAPPY CODING"]),m2=c.pick(["HI CLAWD ♥","HI CLAWD!","GO CLAWD GO"]),d=c.pick([1,-1]),
MP="▐▌▙▟▛▜▖▗▘▝◀▶",PW=15,RL=4,
PL=[[0,0,"▐▙",V],[8,0,"▗▄▄▖","#8fd8ff"],[0,1,"▐██▄▄▄▄██████▙",V],[7,2,"▀▀▀▀▀",V]],
mir=s=>[...s].reverse().map(q=>MP[MP.indexOf(q)^1]||q).join(""),
sp=(a,b,vx,vy,l,ch,cl)=>S.push([a,b,vx,vy,0,l,ch,cl]),
ey=r=>r<-5?"left":r>5?"right":"open",
ex=t=>[Y(x+4,G-1,t,"warning",{b:1})],
snd=(d,k)=>Y(d>0?0:W-2*k-1,1,d>0?") ) )".slice(0,2*k+1):"( ( (".slice(4-2*k),I),
// plane, rope, waving banner; lx = left edge of the train
tr=(lx,d,g)=>{var A=[],bl=g.length+4,bx=d>0?lx:lx+PW+RL+1,px=d>0?bx+bl+1+RL:lx,pl=d>0?bx+bl:bx-1,t="",u="",s,n;
PL.concat([[PW-1,1,ph&1?"|":"¦",I]]).map(q=>A.push(Y(d>0?px+q[0]:px+PW-q[0]-q[2].length,q[1],d>0?q[2]:mir(q[2]),q[3])));
A.push(Y(d>0?px-RL:px+PW,1,"─".repeat(RL),I),Y(pl,1,d>0?"┌":"┐",I),Y(pl,2,"│",I),Y(pl,3,"│",I));
for(n=0;n<bl;n++)s=M.sin(n*.9+d*ph*.8),t+=s>-.6?"▄":" ",u+=s<.6?"▀":" ";
A.push(Y(bx,1,t,B),Y(bx,2,"  "+g+"  ","#c0303a",{bg:B,o:1,b:1}),Y(bx,3,u,B));
Q()<.4&&sp(d>0?px-1:px+PW,2,-d*.4,.05,5);return A},
// clouds, particles, train behind Clawd; e in front
fr=(p,ms,o,e,a)=>{ph++;var A=[];
C.map(s=>{var g=((s[0]-T/500)%(W+9)+W+9)%(W+9)-7,t=T<s[3]||T>D+s[3]?0:T<s[3]+200||T>D+s[3]-200?"·":s[2];t&&A.push(Y(M.round(g),s[1],t,"#aab4c4"))});
S=S.filter(s=>(A.push(Y(M.round(s[0]),M.min(6,M.floor(s[1])),s[6]||"°·"[s[4]*2/s[5]|0],s[7]||"subtle")),s[0]+=s[2],s[1]+=s[3],++s[4]<s[5]));
A=A.concat(a||[]);A.map(q=>q.z=-1);
f.push({x,pose:p,ms,offset:o|0,props:A.concat(e||[])});T+=ms},
pass=(d,g,fx)=>{var bl=g.length+4,L=bl+5+PW,N=60+W/4|0,i,lx,bx;
for(i=0;i<=N;i++){lx=M.round(d>0?(W+L)*i/N-L:W-(W+L)*i/N);bx=d>0?lx:lx+PW+RL+1;
a=fx(i,lx+L/2-x-4,bx,bl);fr(a[0],40,a[1],a[2],tr(lx,d,g))}},
heart=()=>sp(x+R(1,7),G-2,(Q()-.5)*.5,-.35,7,"♥",Q()<.5?"error":"#ff8fb8");
for(i=r()*12|0;i<W;i+=14+r()*18|0)C.push([i,r()<.7?0:1,["░▒▓▒░","░▒▒░","▒▓▓▒░","░▒░"][r()*4|0],100+r()*800]);
// walk to a spot, hear an engine coming
c.walk(c.x,x).map(z=>{x=z.x;fr(z.pose,z.ms||60)});
for(i=0;i<10;i++)fr(P(i<3?"open":ey(-d*9)),110,0,[snd(d,i%3)].concat(i>5?ex("?"):[]));
// pass 1: Clawd waves as it flies over
pass(d,m1,(i,r)=>{var a=M.abs(r)<34,w=(i/3|0)%2;a&&i%8==0&&sp(x+8,G-1,.15,-.3,6,"♪","chromeYellow");
return [P(ey(r),a?w?"up":"one-up":"down",a&&w?"left":"both")]});
// bye-bye, then far away it loops the loop and turns back
for(i=0;i<6;i++)fr(P(ey(d*9),i%2?"one-up":"down"),90);
for(k=d>0?W-10:9,i=0;i<27;i++){a=(i-5)*M.PI/8;
i<5?(hx=k+d*(5-i)*1.6,hy=3,a=0):i<21?(hx=k-d*5*M.sin(a),hy=1.5+1.5*M.cos(a)):(hx=k-d*(i-21)*1.6,hy=3,a=0);
hx=M.round(hx);hy=M.round(hy);i%2&&sp(hx,hy,0,0,14);
fr(P(i==12?"closed":ey(hx-x-4)),60,0,[],i<25?[Y(hx,hy,i>22?"·":-d*M.cos(a)<0?"◀":"▶",V)]:[])}
for(i=0;i<8;i++)fr(P(i<2?"open":i==5?"wink":ey(d*9)),100,0,[snd(-d,i%3)]);
// pass 2: the new banner rains confetti; Clawd reads it and jumps for joy
pass(-d,m2,(i,r,bx,bl)=>{var e=[],o=0;
Q()<.7&&sp(bx+R(0,bl-1),3,(Q()-.5)*.3,.3+Q()*.2,R(8,12),"*✦·•"[R(0,3)],c.rainbow(R(0,6)));
if(j<0&&M.abs(bx+bl/2-x-4)<30&&bx>-3&&bx+bl<W+3)j=0;
if(j>=0){j++;if(j<8)e=ex("!");else{q=(j-8)%7;o=JM[q];q==1&&heart()}}
return [P(j<0?ey(r):j<8?"open":q&1?"closed":"wink",j<8?"down":"up"),o,e]});
// bounce while confetti settles and clouds fade, then land
j<8&&(j=8);D=T;
for(i=0;i<60&&(S.length||(j-8)%7||T<D+1e3);i++){j++;q=(j-8)%7;q==1&&i<14&&heart();fr(P(q&1?"closed":"wink","up"),40,JM[q])}
fr(P("closed","down"),120,1);fr(P("wink","up"),450);
f.push({x,pose:"default",ms:300});
return f;
});
