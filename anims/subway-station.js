// Subway: lights flicker on, a train brakes in, Clawd hops aboard, peeks from the door window, rides off, walks back.
$cdA("subway-station", { scene: 1, title: "Subway", w: 70 }, function (c) {
var W=c.W,M=Math,f=[],T=0,E=1e9,Z={z:-1},S="#9aa3b5",Y="#f2dc9a",G="#454b5a",V="#fff2c0",Df="default",Q=c.P,Tx="text",
D=c.pick([1,0]),L=33,P=35,X=c.x,u=D?X:W-9-X,F=((u-12)%P+P)%P-P,N=((W-F)/P|0)+2,kc=(u-12-F)/P,
LC=c.pick("#e0503c #3c8ce6 #3cb46a #f0a032 #b45ae6".split(" ")),LN=c.pick([..."ACDGLNQR"]),
bx=c.clamp(X>W/2?X-15:X+13,0,W-12),rr=-1e4,k=0,fp=0,hd=0,fe,msg,fx=[],BG=[],PX=[],i,j,t,
H=(s,n)=>s.repeat(n),v=d=>T>=d&&T<E+900-d,O=e=>Object.assign({z:-1},e),
b=(d,a,y,s,col,e)=>BG.push([d,c.T(a,y,s,col,O(e))]),
SD="   ██████   ",RF="▗"+H("▄",L-2)+"▖",mi=(a,w)=>D?a:W-a-w,
dr=r=>{for(var s="",q=r==3?" ██ │ ██ ":"    │    ",m=0;m<9;m++)s+=m<=4-k?q[m+k]:m>=4+k?q[m-k]:"█";return s},
ee=D?"left":"right",eo=D?"right":"left",eb=bx>X?"right":"left";
// backdrop: tube lights, mosaic trim + signs, tiled wall + posters, platform edge
[["▀","#4b5162"],["▄▀","#8a6f4a"],["┬───",G],["─┴──",G]].forEach((q,y)=>BG.push([y*150,c.tile(q[0],y,q[1],0,Z)]));
b(150,0,6,H("▄",10)+H(" ",55)+H("▄",W-65),"warning");
for(i=c.R(0,8);i<W-6;i+=16)b(80+700*M.abs(i-X)/W|0,i,0,"▀▀▀▀▀▀",V);
t=c.pick("CLAWD ST,PIXEL SQ,OPUS AVE,TOKEN PL,BYTE BLVD".split(","));
for(i=c.R(2,12);i<W-13;i+=c.R(38,50))b(600,i,1," "+LN+" "+t+" ",Tx,{bg:"#262b38",o:1,b:1}),b(600,i+1,1,LN,Tx,{bg:LC,b:1});
for(i=c.R(18,28);i<W-9;i+=c.R(30,40))t=c.pick("♪ JAZZ,★ SALE,☀ SURF,♥ LOVE,✿ BLOOM,❄ SKI".split(",")),j=c.hsv(c.R(0,359),.55,.5),b(700,i,2," "+t+" ",Tx,{bg:j,o:1}),b(700,i,3,H("▀",t.length+2),j);
for(i=0;i<N;i++)for(PX[i]=[],j=c.R(0,2);j--;)PX[i].push([c.pick([3,4,5,7,8])+c.pick([0,21]),c.hsv(c.R(0,359),.5,.75)]);
var sc=()=>{var A=[],p=(a,y,s,col,e)=>A.push(c.T(a,y,s,col,O(e))),s,a,r,t,i;
BG.forEach(q=>v(q[0])&&(T>q[0]+150||T%80<40)&&A.push(q[1]));
// cars, mirrored right-to-left; k = door gap; fp = doors drawn in front of Clawd
if(rr>-1e3)for(i=0;i<N;i++){s=rr+i*P;if(s>W||s+L<0)continue;a=mi(s,L);p(a,1,RF,S);
for(r=2;r<6;r++)p(a,r,(t=r<4?SD:H(" ",12))+dr(r)+t,Y,{bg:r==4?LC:S,o:1});
PX[i].forEach(q=>p(mi(s+q[0],1),3,"●",q[1],{bg:Y}));
i==N-1&&p(mi(s+L-1,1),4,"●","#fffbe0",{bg:LC});i||p(mi(s,1),4,"●","error",{bg:LC});
if(i==kc){hd&&p(a+13,3,fe,"clawd_body",{bg:Y});if(fp)for(r=3;r<6;r++)A.push(c.T(a+12,r,dr(r).replace(/./g,h=>h=="█"?" ":"█"),r==4?LC:S))}}
msg&&A.push(c.T(bx,0," "+LN+" "+msg+" ","#ffa53c",{bg:"#3a2c1c",o:1}),c.T(bx+1,0,LN,Tx,{bg:LC,b:1}));
return A.concat(fx)},
add=(pose,ms,o)=>{f.push({x:X,pose,ms,offset:o||0,hide:!!hd,props:sc()});T+=ms;fx=[]},
sp=n=>{for(;n--;)t=rr+c.R(0,N-1)*P+c.pick([5,27])+c.R(-1,1),fx.push(c.T(mi(t,1),c.R(5,6),c.pick([..."*✦·"]),c.pick(["#ffd23c","#ff8c3c",Tx])))},
note=s=>fx=[c.T(X+3,0,s,Tx,{b:1})];
// wait: tap a foot at the board, stretch
for(;T<1100;)add(T<300?Df:T<700?"look-left":"look-right",70);
msg="2 min";for(j=0;j<8;j++)add(Q(eb,"down",j%2?"left":"both"),150);
msg="1 min";add(Q("closed","up"),450);add(Q("wink"),250);add(Q(eb),400);
// tunnel glow
for(j=0;j<14;j++){msg=j%4<2?"ARRIVING":"        ";t="▓▒░░".slice(0,j/4+1|0);t=D?t:[...t].reverse().join("");
fx=[2,3,4].map(y=>c.T(mi(0,t.length),y,t,V,Z));add(Q(ee,"down",j>9&&j%2?"left":"both"),80)}
// train rushes in, brake sparks, Clawd squints
var R0=-N*P-4,n=46;
for(j=0;j<n;j++){t=j/(n-1);rr=M.round(R0+(F-R0)*(1-M.pow(1-t,3)));i=rr+N*P-2>=u+4;t>.5&&t<.97&&sp(5);add(Q(i&&t<.45?"closed":i?eo:ee,"down",i&&t<.45?j%2?"left":"right":"both"),40)}
rr=F+1;add(Df,70);rr=F;msg=c.pick("DOWNTOWN UPTOWN AIRPORT SEASIDE".split(" "));add(Df,250);
// ding-dong, doors open, hop in, wave
note("♪");add(Df,160);note("♫");add(Df,160);
for(k=1;k<6;k++)add(Q(k>3?"wink":"open"),60);
add(Df,140,1);add("arms-up",90,-2);add(Df,160,-1);
for(j=0;j<6;j++)add(Q(j%2?"open":"wink",j%2?"up":"one-up"),150,-1);
// doors close, his eyes peek through the windows
fp=1;note("♪");add(Df,150,-1);
for(j=5;j--;){k=j;add(Df,70,-1)}
add(Q("wink"),350,-1);
// departure with wind streaks
fp=0;hd=1;msg="DEPARTING";
for(j=0;j<n;j++){t=j/(n-1);rr=M.round(F+(W+2-F)*t*t);fe=j%10<3?"▐▛   ▂█":"▐▛   ▛█";
for(i=3;j>8&&i--;)t=c.R(3,9),fx.push(c.T(mi(rr-3-c.R(0,12)-t,t),c.R(2,5),H("≡",t),"subtle"));
add(Df,40)}
rr=-1e4;msg="8 min";add(Df,450);
// lights out; he walks back in from where the train went
E=T;msg="";hd=0;
c.walk(D?W:-9,D?c.mx-c.R(2,12):c.R(2,12),{ms:45}).forEach(r=>{X=r.x;r.props=sc();f.push(r);T+=r.ms||60});
add(Q(eo),300);fx=[c.T(X+9,3,"'","permission")];add(Q("closed"),350);add(Q("wink"),450);
f.push({x:X,pose:Df,ms:300});
return f;
});
