// Ice floe: penguins belly-slide into the sea; Clawd follows, overshoots, pops out with a fish.
$cdA("penguin-slide",{ scene: 1,title:"Penguin slide",w:70},function(c){
var C=c.R,W=c.W,G=c.G,P=c.P,T=c.T,M=Math,R=M.random,U=M.round,V=9,t=0,A=0,hd=0,cl,
d=c.x+4<W/2?1:-1,D=d>0,E=D?"right":"left",x=c.clamp(c.x,11,c.mx-11),f=c.walk(c.x,x),
B=[],S=[],N=[],Q=[],Z,I="▗",i,j,w,h,l,r,g,o,pn,lo,hi,CU=P("closed","up"),
K="#d8ecf8 #8fbfe0 #eef4ff #4f7fb8 #3f86d8 #a8d4f5 #5a6a90 #f5a623".split(" "),
pt=(x,y,a,b,g,l,s,co)=>Q.push({x,y,a,b,g,l,s,co:co||K[2]}),
sp=(X,n)=>{while(n--)pt(X,5,R()*1.6-.8,-.5-R()*.7,.18,12,c.pick("·°*'"),c.hsv(205,R()*.7,1))},
F=(X,y)=>T(X,y,D?"><>":"<><","#cfe3ee",{b:1}),fs=o=>[F(x+3,G-1+o)],X=(X,y,k)=>T(X,y,"!",k,{b:1}),L=y=>T(x+4,y,"❄",K[2]),
// q: scenery clipped to lo..hi, so it grows out of Clawd
q=(X,y,s,co,e,a,b)=>(a=M.max(0,lo-X),b=M.min(s.length,hi-X),b>a&&Z.push(Object.assign({x:X+a,y,t:s.slice(a,b),c:co,z:-1},e))),
pg=p=>{var X=U(p.x),e=p.e,r=e>0,s=p.s>1|0;q(s?r?X-2:X+1:X,6,s?"▀▀":r?"▌":"▐",K[6],{bg:K[2]});
q(X,5+s,"●",K[6]);q(X+e,5+s,r?">":"<",K[7]);p.s==1&&q(X-e,6,(r?"▝▗":"▘▖")[t/90&1],K[6])},
sc=()=>{var v=(t/160|0)%5,k=U(A*W),o=U(3-3*A);Z=[];lo=x+4-k;hi=x+4+k;
q(0,0,c.tile("░▒░      ░░▒▓▒░        ",0,0,t/250).t,c.hsv(150+40*M.sin(t/700),.55,.8));
q(0,3,c.tile("~~~             ",3,0,-t/400).t,K[3]);
B.map(b=>b[1]>=o&&q(b[0],3-b[1]+o,b[2],K[b[1]?2:1]));
S.map(s=>s[3]<A&&q(s[0]+U(M.sin(t/500+s[2])),(t/s[1]+s[2])%7|0,s[4],K[2]));
q(V,6,I,K[0]);
[0,W-V].map(X=>{q(X,6,"≈~≈≈~~≈~≈≈~~≈".substr(v,V),K[4]);q(X,5,"  ~     ~   ~ ".substr(v,V),K[5])});
N.map(p=>p.s<4&&pg(p));
Q=Q.filter(a=>(a.x+=a.a,a.y+=a.b,a.b+=a.g,a.l-->0&&a.y<6.5&&a.y>-.5&&(q(U(a.x),U(a.y),a.s,a.co),1)));
return Z},
add=(ms,po,o,ex)=>{t+=ms;
N.map(p=>{if(p.s<4)if(!p.s){R()<.04&&!p.n&&(p.e=-p.e);t>p.g&&(p.s=1,p.e=d,p.u=t+C(300,900))}
else{p.s<2?(p.x+=d*ms/170,t>p.u&&(p.s=2)):(p.x+=d*ms*p.v,R()<.6&&pt(p.x-2*d,6,-d*.3,-.3-R()*.3,.12,4,"·"));
(p.x-W/2)*d>W/2-V+1&&(p.s=4,sp(U(p.x),5))}});
f.push({x,pose:po||"default",offset:o|0,ms,color:cl||"clawd_body",hide:hd>0,props:sc().concat(ex||[])})};
// bergs, ice (sparse over the banner), snow, penguins
for(i=C(0,6);i<W;i+=w+C(3,16))for(w=C(5,12),h=C(1,3),l=r=j=0;j<h&&w-l-r>2;j++,l+=C(1,2),r+=C(1,2))B.push([i+l,j,"▟"+"█".repeat(w-l-r-2)+"▙"]);
for(i=V+1;i<W-V-1;i++)I+=i>9&&i<65?i%6?" ":"▄":R()<.04?" ":"▄";I+="▖";
for(i=0;i<W/10;i++)S.push([R()*W|0,130+R()*200,R()*7,R(),c.pick("··*❄")]);
for(w=M.max(8,(W-20)/9),i=12+C(0,4);i<W-12;i+=w*(.7+R()*.6)|0)M.abs(i-x-4)>7&&N.push({x:i,e:R()<.5?1:-1,s:0,v:M.min(.045,W/C(2e3,3e3))});
// floe grows
for(i=1;i<=14;i++){A=M.min(1,i/12);add(80,P(i<5?"left":i<9?"right":i<13?"open":"wink"),0,i>8?[L(M.min(3,i-9))]:0)}
// penguins go one by one; Clawd waddles along
g=t+600;N.sort(()=>R()-.5).map(p=>g+=C(250,550,p.g=g));
for(i=0;t<g+600;i++){j=i>>1;o=j%8==6?-1:0;add(60,P(j%8==7?"wink":E,j%8>4?"up":"down",j%2?"left":"right"),o,i<16?[i>9?X(x+4,G-1+o,"warning"):L(G-1+o)]:0)}
// run-up, belly-slide
add(220,P("wink"));add(160,P("closed"),1);
for(i=0;i<4;i++){x+=d;add(100,P(E,"down",i%2?"left":"right"))}
add(70,P(E,"up"),-1);
for(j=D?c.mx:0;x!=j;){x+=d*M.min(2,M.abs(j-x));pt(D?x-1:x+9,6,-d*.5,-.4-R()*.4,.15,5,"·");
o=((D?x+8:x)-W/2)*d>W/2-V;add(30,P(o?"closed":E,"up"),1,[T(D?x-4:x+10,5,"≡≡","inactive")].concat(o?X(x+4,4,"error"):[]))}
// overshoot, splash
add(80,CU,2,[X(x+4,3,"error")]);sp(x+4,12);hd=1;
for(i=0;i<10;i++){i%2&&pt(x+3+C(0,2),6,0,-.3,0,5,"°",K[5]);add(90)}
// pops out with a fish, shivers
hd=0;cl="#8cc4f0";sp(x+4,12);
[2,1,-1,-2,-3,-3,-2,-1,0].map((o,i)=>{i<7&&(x-=2*d);add(i<7?55:90,P(i>4?"wink":"open","up"),o,fs(o))});
add(90,CU,1,fs(1));
for(i=0;i<8;i++){x+=i%2?-1:1;pt(x+4+C(-6,6),C(3,5),C(-1,1)*.8,-.3,.15,6,"·",K[5]);i>4&&(cl=0);add(60,CU,0,fs(0))}
add(450,P("wink","up"),0,fs(0).concat(T(D?x+10:x-2,3,"♪","suggestion")));
// a penguin catches the fish
pn={x:D?W-5:4,e:-d,s:0,g:1e9,n:1};N.push(pn);sp(pn.x,6);
add(300,P(E,"up"),0,fs(0));
for(i=1;i<=8;i++){j=i/8;add(50,P(E,i<3?"up":"down"),0,[F(U(c.lerp(x+3,pn.x-d-1,j)),U(3+2*j-3*M.sin(M.PI*j)))])}
for(i=0;i<6;i++)add(110,P(i<3?E:"wink",i>2?"up":"down"),i==4?-1:0,[T(pn.x,4-(i>>1),"♥","error")]);
pn.s=4;sp(pn.x,6);add(300,P("wink"));
// ice shrinks away
for(i=16;i>=0;i--){A=i/16;add(80,i>10?P("left"):i>4?P("right"):"default")}
add(300);
return f;
});
