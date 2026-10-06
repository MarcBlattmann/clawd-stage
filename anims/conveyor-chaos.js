// A factory belt spans the stage; boxes, gears and cakes come ever faster until Clawd is buried.
$cdA("conveyor-chaos",{title:"Conveyor chaos",w:64},c=>{
var M=Math,rd=M.round,T=c.T,W=c.W,f=[],B={b:1},Z={z:-1},I="inactive",Y="warning",Op="open",Lf="left",Rt="right",Cl="closed",U="up",O="one-up",i,k,t,p,q,e,a,n,u,o=0,
d=c.x*2<c.mx?-1:1,x=d>0?c.mx-8-c.R(0,2):8+c.R(0,2),
Q=v=>d>0?v:2*x+8-v,E=s=>d>0?s:s==Lf?Rt:s==Rt?Lf:s,
L=x-2,B0=d>0?0:2*x+9-W,BL=L-B0,X=x+11,CX=d>0?X:x-8,WD="#aa703c",
KD=[["■","#cd9155"],["☼",I],["◢","#ff91be"],["♦",Y],["●","#78c8ff"]],
PS=[[4,3],[2,3],[6,3],[3,3],[5,3],[3,2],[5,2],[4,2],[4,1]],S=[0],A=[],K=[],Ts,ST,bS,CI=[],PI=[],DS,
// Belt reaching g cols out, legs, tread.
bel=(s,g,r)=>{if(g<0)return[];var a=Array(W).fill(" "),b=a.slice(),v;
 for(v=L;v>=B0&&v>=L-g;v--){a[Q(v)]=(v-rd(s))%5?"═":d>0?"»":"«";(L-v)%18==3&&(b[Q(v)]="│")}
 b=b.join("");return[T(0,3,a.join(""),I,Z),T(Q(L),3,"●",r),T(Q(M.max(B0,L-g)),3,"●",r)].concat(c.art(0,4,[b,b,b.replace(/│/g,"┴")],"subtle",Z))},
cr=(y,l)=>c.art(CX,4+y,["│    │","│    │","└────┘"],WD).concat(l?[T(CX,3+y,"▄▄▄▄▄▄",WD)]:[]),
F=(e,a,ms,props,offset=0)=>f.push({x,pose:c.P(E(e),a),ms,props,offset}),
J=(i,t,h)=>(h=.5-.36*(t-A[i]-2),[rd(x+4.5-3.6*M.cos(h)),rd(1.6+1.5*M.sin(h))]),
SL=i=>i<8?[X+1+i%4,5-(i>>2)]:i<12?[X+i-7,3]:[X+2,2],
at=(i,t)=>{var a=A[i],e=t-a,s,h,P,m=i<3?7:5;
 if(e<0)return(p=BL-S[a]+S[t])<0?0:[B0+rd(p),2,e>-5&&i<7?7:0];
 if(e<2)return[e?x:L,2,0];
 if(i>12)return s=PS[i-13],e<3?[x+1+(s[0]>>1),s[1]-1+o,0]:[x+s[0],s[1]+o,e<4?6:5];
 h=i<7?i<3?6:4:Ts+2*i-14-a;P=i<7?[x+1,3]:J(i,a+h);
 if(e<h)return i<7?[x+1,3,1]:J(i,t).concat(2);
 u=(e-h+1)/m;s=SL(i);
 return u<1?[rd(P[0]+(s[0]-P[0])*u),rd(P[1]+(s[1]-P[1])*u-12*u*(1-u)),3]:[s[0],s[1],u<1.3?8:4]},
IT=(l,y,h=-9)=>l.filter(v=>v[1]>h).map(v=>T(Q(v[0]),v[1]+y,v[2],v[3],B)),
BG=(g,y,l)=>bel(bS,g,"error").concat(cr(y,l)),OB=xs=>BG(BL,0).concat(IT(CI,0),xs);
// Speed-up, arrival frames, final wave.
for(t=0;t<600;t++)u=M.min(1,t/190),S.push(S[t]+BL/44*(1+2.6*u*u));
for(t=0;S[t]<BL;)t++;A.push(t);
[20,17,14,12,10,9,8,7,6,5,5,4].map((v,j)=>A.push(A[j]+v+c.R(0,j<5?2:0)));
Ts=A[12]+14;for(k=0;k<9;k++)A.push(Ts+12+3*k+(k&1));ST=A[21]+3;
for(i=0;i<22;i++)K.push(c.pick(KD));

// Run in, belt unrolls, crate drops.
for(k=c.x;k!=x;){k+=M.sign(x-k)*M.min(2,M.abs(x-k));f.push({x:k,pose:c.P(x>c.x?Rt:Lf,0,k&2?Lf:Rt),ms:30})}
for(k=0;k<15;k++)F(k<8?Lf:Rt,0,45,bel(0,rd(BL*k/8),I).concat(k>7?cr(k-14):[]));
DS=[T(CX-2,6,"·°",I),T(CX+6,6,"°·",I)];F(Cl,0,120,bel(0,BL,I).concat(cr(0),DS));
F("wink",U,420,bel(0,BL,"success").concat(cr(0)));

// Catch, pack, juggle, stuff, get buried.
for(t=0;t<=ST;t++){
 for(n=0,k=13;k<22;k++)t-A[k]>2&&n++;o=n>4?1:0;
 var pr=bel(S[t],BL,"success").concat(cr(0)),fl=[];
 for(i=0;i<22;i++)(p=at(i,t))&&(fl[p[2]]=1,pr.push(T(Q(p[0]),p[1],K[i][0],K[i][1],B)),p[2]>7&&pr.push(T(Q(p[0]),p[1]-1,"✦","chromeYellow")));
 e=fl[6]?Cl:n?t%6<3?Lf:Op:fl[2]?[Lf,Rt,Cl,Op][t>>1&3]:fl[8]?"wink":fl[3]?Rt:t%40==39?Cl:Lf;
 a=fl[2]?t&2?U:O:n||fl[1]||fl[7]?U:fl[3]?O:0;
 (fl[2]||n)&&pr.push(T(Q(x-1),4+(t>>1&1),"'",q="professionalBlue"),T(Q(x+9),5-(t>>1&1),"'",q));
 t>A[13]-9&&!n&&pr.push(T(x+3,1,"!!","error",B));
 F(e,a,t<A[3]?50:t<A[7]?44:38,pr,o)}

// CLUNK, shrug off the pile, slam the lid.
bS=S[ST];for(i=0;i<22;i++)p=at(i,ST),(i<13?CI:PI).push([p[0],p[1],K[i][0],K[i][1]]);
[110,110,110,500,380,380,220].map((v,j)=>
 F(j<4?Cl:j<5?Lf:j<6?Rt:Op,U,v,OB(IT(PI,0).concat(j<3?[T(Q(rd((B0+L)/2))-2,1,"CLUNK",Y,B),T(Q(L+(j&1)),2,"*",Y)]:[])),1));
F(Cl,0,160,OB(IT(PI,1)),2);
var pv=PI.map(v=>[v[0],v[1],(v[0]-x-4)*.45+M.random()-.5,-.6-M.random()*.8,v[2],v[3]]);
for(k=0;k<14;k++){q=[];pv.map(v=>{v[0]+=v[2];v[1]+=v[3];v[3]+=.28;v[1]<6.5&&q.push(T(Q(rd(v[0])),rd(v[1]),v[4],v[5],{b:1,z:-1}))});
 F(k<5?Op:"wink",U,45,OB(q),[-1,-2,-2,-1][k]||0)}
for(k=1;k<4;k++)F(Rt,O,70,BG(BL,0).concat(IT(CI,0,k),[T(CX,k,"▄▄▄▄▄▄",WD)]));
F("wink",U,650,BG(BL,0,1).concat(IT(CI,0,3),[T(CX+2,1,"✓","success",B),T(CX-1,2,"✦",Y),T(CX+6,2,"✦",Y)],DS));

// Clean up.
for(k=0;k<13;k++)F(k<7?Lf:Op,0,50,BG(rd(BL*(10-k)/10),q=M.min(4,k>>1),1).concat(IT(CI,q,3)));
f.push({x,pose:"default",ms:300});
return f});
