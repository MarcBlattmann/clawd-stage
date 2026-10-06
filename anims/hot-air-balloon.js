// Clawd inflates a striped balloon, floats over hills past clouds and birds, lands and hops out.
$cdA("hot-air-balloon",{ scene: 1,title:"Hot air balloon",w:70},function(c){
var f=[],W=c.W,R=c.R,m=Math,T=c.T,G=c.G,Z={z:-1},k=0,A=3,d=0,t=0,i,j,q,n,s,o,v,e,
b=c.clamp(c.x,2,c.mx-2),X=c.x,P=W+R(20,40),D=b<c.mx/2?1:-1,SX=R(W/2,W-4)|0,
xt=D*m.min(R(16,30),D>0?c.mx-2-b:b-2),LR=s=>s>0?"r":"l",u,
PL=c.pick(["e45eee","d75fc5","47efd4","c5c5de"]),
// K: hex3 color faded by k (g>1 glows). Q: pose from eye+arm letters.
K=(h,g=1)=>c.rgb(...[0,1,2].map(i=>30+(("0x"+h[i])*17-30)*k*g)),
Q=s=>c.P({l:"left",r:"right",c:"closed",w:"wink"}[s[0]],{u:"up",1:"one-up"}[s[1]]),
// Scenery layers [row,color,parallax,chars] on a P-column loop.
L=[],S=(y,h,v,z)=>(L.push(o=[y,h,v,Array(P).fill(z||" ")]),o),
st=(o,q,s)=>[...s].map((ch,j)=>ch>" "&&(o[3][(q+j)%P]=ch)),
CL=[-3,-2,-1,0,1].map(y=>S(y,"dde",.3)),SN=S(2,"dde",.15),RK=S(3,"79a",.15),
H=[3,4].map(y=>S(y,"6b5",.4)),TR=[2,3,4].map(y=>S(y,"3a5",.4)),
FL=["dc6","9c5","b97"].map(h=>S(5,h,.7)),GR=S(6,"5a4",1,"▁"),FW=["e8c","fd5"].map(h=>S(6,h,1)),
a=6.283/P,p=R(1,8),k1=m.round(P/34)*a,k2=m.round(P/11)*a;
for(q=R(0,9);q<P;q+=R(10,24)){n=R(5,10);j=R(0,3);s=" ";for(i=2;i<n;i++)s+=R(0,2)?"█":"▄";st(CL[j],q,s);st(CL[j+1],q,"▀".repeat(n))}
for(q=R(0,9);q<P;q+=R(14,32)){st(SN,q+1,"▗▟▙▖");st(RK,q,"▟████▙")}
for(q=0;q<P;q++){v=1.1+m.sin(q*k1+p)+.6*m.sin(q*k2+p*p);
 [0,1].map(j=>st(H[j],q," ▄█"[(v>1.5-j)+(v>2-j)]));
 R(0,10)||st(TR[2-(v>1)-(v>2)],q,c.pick("♣♠"));R(0,12)||st(FW[R(0,1)],q,c.pick("✿·,'"))}
for(q=0;q<P;q+=n){n=R(6,14);st(FL[R(0,2)],q,"▓".repeat(n-1))}
L.map(o=>o[3]=o[3].join(""));
// Banner box (rows 4-6, cols 10-64): only trees and blossoms.
var M=(s,y)=>y<4?s:s.slice(0,10)+s.slice(10,65).replace(/[^♣♠✿]/g," ")+s.slice(65),
SC=()=>k>.05?[T(SX,0,"☀",K("fd5"),Z)].concat(L.map((l,i,a,u)=>(u=c.tile(l[3],l[0]+A,K(l[1]),l[2]*d+(l[0]<2)*t*.15,Z),u.t=M(u.t,u.y),u))):[],
F=(p,y,ms,x)=>{t++;f.push({x:X,pose:Q(p),offset:y,ms:ms||70,props:SC().concat(x||[])})},
// Balloon: envelope size s above head row Y, ropes, basket, flame.
w=(a,n,b)=>a+"█".repeat(n)+b,
EN=[[],[w("▄▄▟",3,"▙▄▄")],[w("▗▟",7,"▙▖"),w("▝▀▜",5,"▛▀▘")],[w("▄▟",7,"▙▄"),w("▐",11,"▌"),w("▝▜",7,"▛▘")]],
Env=(cx,yb,sh,g)=>sh.flatMap((w,j)=>{var y=yb-sh.length+1+j,x0=cx-(w.length>>1),z=["",""];
 [...w].map((ch,i)=>{i=(m.abs(x0+i-cx)+1>>1)%2;z[i]+=ch;z[1-i]+=" "});return z.map((s,i)=>T(x0,y,s,K(PL.slice(i*3),g)))}),
Bal=(Y,s,fl,e)=>Env(b+4,Y-1,EN[s],fl?1.3:1).concat(
 s?T(b-1,Y,"│         │",K("a87")):[],T(b-1,Y+1,"▐▓▓▓▓▓▓▓▓▓▌",K("c84")),
 e?{x:b,y:Y+2,t:"         ",o:1}:[],
 fl?[T(b+4,Y-1,c.pick("▲♦▲"),c.pick(["warning","error"]),{b:1}),T(b+R(3,5),Y-2,c.pick("*·'"),K("fd5"))]:[]),
dust=o=>[-3-o,11+o].map(x=>T(b+x,6,"·",K("bbb")));
// Camera drops in, landscape fades in.
for(i=0;i<14;i++){k=m.min(1,i/10);A=m.max(0,3-(i>>2));F("loro"[i>>2]+"d",0,i>12?300:70)}
f=f.concat(c.walk(X,b,{fx:r=>{r.props=SC()}}));X=b;
// Basket pops up; he hops in.
q=T(b-3,5,"✦             ✦",K("fd5"));
[1,-1,-2,-1,0,1,1].map((o,i)=>F("cdouououodcdod".substr(i*2,2),o,i?80:150,i?Bal(5,0).concat(i<3?q:[]):0));
// Burner bursts inflate the envelope.
for(s=0;s<3;s++)for(j=0;j<7;j++)F(j<4?"c1":LR(D)+"d",1,j<4?55:110,Bal(5,s+(j>3),j<4));
F("wu",1,350,Bal(5,3));
// Lift-off with dust.
for(i=0;i<14;i++){o=i<5?1:i<10?0:-1;j=i-5;F(i<5?"c1":"ou",o,80,Bal(G+o,3,i%3<2,o<1).concat(j>=0&&j<4?dust(j):[]))}
// Climb, drift past clouds and birds, sink back.
var N=72,b0=b,SB=D>0?W+3:-12,bv=m.max(1.2,m.abs(SB-b-xt/2)/30),fb;
for(i=0;i<N;i++){
 A=m.min(3,i/5|0,(N-1-i)/5|0);v=m.min(1,i/10,(N-i)/12);d+=D*v*1.5;
 u=i/(N-1);X=b=b0+m.round(xt*u*u*(3-2*u));q=(i+8)%20;o=A>2&&q>14?0:-1;e=i<15?i%3<2:A>2&&q<3;
 fb=m.round(SB-D*bv*m.max(0,i-8));
 n=[0,3,6,9].map((p,j)=>T(fb+D*p,1+j%2,"v^"[(i+j)%2],K("ccd")));
 j=m.abs(fb-X-4)<14;j&&n.push(T(fb+D*3,0,"♪",K("fd5")));
 F(e?"c1":j?"w"+"u1"[i>>1&1]:i>14&&i<21?"ou":(fb-X)*D>0?LR(D)+"d":i%9?LR(-D)+"d":"cd",o,90,Bal(G+o,3,e,1).concat(n));
}
// Bumpy touchdown.
[-1,0,1,0,1,1].map((o,i)=>F(i>4?"wd":o>0?"cd":"od",o,[150,150,90,80,120,300][i],Bal(G+o,3,0,o<1).concat(i==2||i==4?dust(1):[])));
// Envelope flops, Clawd hops out, scene sinks and fades.
var S2=b+10<=c.mx?1:-1,HP=()=>Env(b+4-S2*13,6+A,["▁▃▅▆▇▆▅▃▁"]);
for(s=3;s;)F("od",1,140,Bal(5,--s));
F("cd",1,200,Bal(5,0).concat(HP()));
[-1,-2,-2,-1,0].map(o=>{X+=2*S2;F(LR(S2)+"u",o,70,Bal(5,0).concat(HP()))});
for(i=0;i<16;i++){k=m.max(0,1-i/12);A=i>>2;F(i<6?LR(-S2)+"d":i<10?"wu":"od",0,i<6?120:80,k>.05?Bal(5+A,0).concat(HP()):[])}
f.push({pose:"default",ms:300});
return f;
});
