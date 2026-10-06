// Fetch: a dog brings a stick, a fake-out, a sky-high mid-air catch, licks and hearts.
$cdA("dog-fetch", { title: "Fetch", w: 60 }, function (c) {
var T=c.T,R=c.R,M=Math,i,k,n,q,x=c.clamp(c.x,0,c.mx-42),o=0,e="open",Dn="down",a=Dn,pt,H=x+11,f=c.walk(c.x,x),
DC=c.pick(["#e4b260","#eee4d0","#a5aaba"]),SC="#b0763e",PK="#ff82aa",EY="#46281e",CY="chromeYellow",S="subtle",U="one-up",E="right",Wk="wink",Cl="closed",Up="up",
MI="▘▝▖▗▌▐▛▜▙▟",LG=[" ▛▀▀▀▛  ","▗▀▀▀▀▀▖ "," ▀▙▀▟▀  "],
mir=t=>[...t].reverse().map(h=>MI[MI.indexOf(h)^1]||h).join(""),
// dog(col,row,dir,legs,tail,stick,extra)
D=(u,y,d,l,w,s,ex)=>{var p=["     ▗  ",(w?"▝":"▗")+"▄▄▄▄▟ ▙",LG[l]].map((t,j)=>T(u,y-1+j,d>0?t:mir(t),DC));
p.push(T(u+(d>0?6:1),y,"•",EY,{bg:DC}));s&&p.push(T(d>0?u+8:u-2,y,"──",SC));return p.concat(ex||[])},
F=(ms,p)=>f.push({x,offset:o,pose:c.P(e,a),props:p||[],ms,paint:pt}),
Y=(u,v,t)=>T(u,v,t,"warning",{b:1}),L=(u,v,t)=>T(u,v,t||"·",S),St=T(x+9,6,"──",SC,{z:-1}),
Bk=Y(H-2,2,c.pick(["wuf!","woof!"])),Hd=()=>T(x+8,3+o,"/",SC),Bs=()=>T(x+7,3+o,"\\",SC),
Wg=(k,ex,hp)=>D(H,hp&&k%4==1?4:5,-1,0,k%2,0,ex),
pick=()=>{o=1;a=Dn;F(160,Wg(1,[St]));a=U;F(120,Wg(0,[Hd()]));o=0;e=Wk;F(350,Wg(1,[Hd()]));e=E},
back=u=>{F(70,D(u,4,-1,1,1,1));for(k=u;k>H;k--)a=k<H+4?Up:Dn,F(36,D(k,5,-1,1+k%2,k%2,1,[L(k+8,6)]));
e=Wk;F(160,D(H,5,-1,0,0,1));e=E;a=Dn;F(220,Wg(1,[St]))},
// throw N cols, arc h, ca: caught
thr=(N,h,ca)=>{var sy=i=>M.round(3+3*(i/=N)-4*h*i*(1-i)),nc=N+2,k0=12,tg=x+N+1,u,y,g,z;
if(ca)for(nc=M.ceil(N/2),k0=nc-12;sy(nc)<3;)nc++,k0++,tg=x+nc;
for(i=1;i<=nc;i++){u=i<k0?H:H+M.round((tg-H)*(i-k0)/(nc-k0));y=i==4?4:5;o=ca&&i<2?-1:0;a=i<3?U:Dn;e=E;z=ca&&i==nc;
g=[i<k0?Y(u+6,3,i<5?" ":ca&&i<k0-2?"?":"!"):L(u-2,5,"≡")];if(ca&&i>nc-3)y=i>nc-2?M.min(sy(nc),4):4;
if(z)a=Up,o=-1,g.push(T(u+9,y-1,"✦",CY),T(u+10,y+1,"*",CY));
else g.push(i>N?T(x+N+9,i>N+1?6:5,i>N+1?"──":"/",SC):T(x+8+i,sy(i),"─\\│/"[i%4],SC));
F(z?280:40,D(u,y,i<4?-1:1,y<5||i>=k0?1+i%2*(y>4):0,i%2,z,g))}
if(ca){for(k=1;k<3;k++)o=k-2,F(60,D(u+k,M.min(y+k,5),1,1,k%2,1));F(160,D(u+=2,5,1,0,0,1,[L(u-2,6,"°·")]))}
else F(240,D(u,5,1,0,0,0,[T(u+8,6,"──",SC),L(u+8,4,"sniff")])),F(180,D(u,5,1,0,1,1));back(u)},
Hs=k=>{for(var q=[St],i=0;i<=M.min(k,11);i+=2)q.push(T(x+5+i*3%7,3-(k-i>>1),"♥",i%4?PK:"error"));return q};
// Arrival.
for(k=c.W+1,n=0;k>H;n++)k-=k>H+14?2:1,e=k<H+24?E:"open",F(34,D(k,5,-1,1+n%2,n%2,1,[L(k+8,6)]));
F(150,D(H,5,-1,0,0,1,[L(H+8,6,"°·")]));F(240,Wg(0,[St]));
for(k=0;k<6;k++)F(110,Wg(k,[St,Bk,Y(x+4,3,k==2?"!":" ")],1));
pick();for(k=0;k<4;k++)F(100,Wg(k,[Hd()],1));a=Up;F(300,Wg(0,[Bs()]));thr(R(19,23),3);
// Round two, maybe a fake throw.
pick();
if(R(0,1)){a=Up;F(250,Wg(1,[Bs()]));a=U;F(80,Wg(0,[Hd()]));a=Dn;e=Cl;
for(k=0;k<7;k++)F(40,D(H+k,5,1,1+k%2,k%2,0,[L(H+k-2,5,"≡")]));
F(450,D(H+7,5,1,0,0,0,[Y(H+13,3,"?"),L(x+1,2,"hehe")]));a=U;e=Wk;F(450,D(H+7,5,-1,0,0,0,[Hd(),Y(H+8,3,"?!")]));
e=E;for(k=7;k>0;k--)F(45,D(H+k,5,-1,1+k%2,k%2,0,[Hd()]));F(250,Wg(0,[Hd(),Bk]))}
a=Up;F(200,Wg(1,[Bs()]));o=1;e=Cl;for(k=0;k<4;k++)F(110,Wg(k,[Bs(),L(x+R(0,8),3,"'")]));
thr(R(34,37),5,1);
// Paws up, licks, hearts.
F(140,D(H,5,-1,2,1,0,[St]));F(60,D(H-2,4,-1,1,0,0,[St]));
for(k=0;k<12;k++){e=k%3>1?Wk:Cl;a=k%2?Up:U;q=Hs(k);k%2||q.push(T(x+7,4,"~",PK));if(k>4)pt=(u,v)=>v==1&&u%4==2?PK:void 0;
F(k%2?110:150,c.art(x+8,3,[" ▗","▟ ▌","▀▐█▖"+(k%2?"▘":"▗"),"  ▛▌"],DC).concat([T(x+9,4,"•",EY,{bg:DC})],q))}
e=Wk;a=U;F(70,D(H-1,4,-1,1,1,0,Hs(12)));for(k=13;k<19;k++)F(130,Wg(k,Hs(k)));
// Exit, waving.
F(180,D(H,5,-1,0,1,1));F(70,D(H,4,1,1,0,1));e=E;
for(k=H,n=0;k<c.W+1;n++)k+=k>H+16?2:1,a=n%6<3?U:Dn,F(38,D(k,5,1,1+n%2,n%2,1,[L(k-1,6)]));
pt=void 0;e=Wk;a=Dn;F(400);e="open";F(200);
return f;
});
