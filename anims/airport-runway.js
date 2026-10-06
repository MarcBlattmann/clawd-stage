// Airport rises; Clawd hops into a jet, waves, takes off, then parachutes back as it all fades.
$cdA("airport-runway",{ scene: 1,title:"Takeoff",w:70},function(c){
var W=c.W,M=Math,R=c.R,Q=M.random,P=c.P,Y=c.T,cc=c.clamp,ab=M.abs,T=0,f=[],S=[],B=[],C=[],I="inactive",X="text",CL="closed",i,k,a,n,o,
d=c.x+4<W/2?1:-1,x=cc(c.x,d>0?0:50,d>0?c.mx-50:c.mx),x0=x,xl=x,
E=d>0?"right":"left",j=null,z=1,h=0,gr=1,D=1e9,
V=c.pick(["error","permission","success","autoAccept"]),F="#d4d8e0",K="#566070",
r=c.rng(R(1,1e6)),tx=d>0?W-8:3,MP="▐▌▙▟▛▜▖▗▘▝",
TW=["▗▄▄▄▖","▐   ▌"," ▀█▀","  █","  █"," ▟█▙"],
// jet faces right (mirrored for d<0); window gap at cols 16-24
SG=[[1,0,"▐█▙",V],[1,1,"▐██",V],[4,1,"▄".repeat(22)+"▖"],[2,2,"▜█",V],[4,2," ■".repeat(6),"#8fd8ff",{bg:F,o:1}],[25,2,"██▙▖"],[3,3,"▀".repeat(24)+"▘"],[16,4," ".repeat(9),0,{o:1}],[8,4,"●●",I],[19,4,"●●",I],[26,4,"●",I]]
.map(s=>d>0?s:[29-s[0]-s[2].length,s[1],[...s[2]].reverse().map(q=>MP[MP.indexOf(q)^1]||q).join(""),s[3],s[4]]),
sk=(l,n)=>M.ceil(n*cc(M.max(1-(T-l)/450,(T-D-2*l-300)/450),0,1)),
tc=()=>j+(d>0?1:27),
sc=()=>{var A=[],q=(x,y,t,cl,e)=>A.push(Y(x,y,t,cl,e)),n=sk(250,7),m,g,rp=(T/16)%(W+40)-20;
C.map(s=>{g=(s[0]+T*s[3]/1e3)%(W+8)-6;if(T>D)g+=(g<W/2?-1:1)*(T-D)*(T-D)/4e4;T>s[4]&&g>-6&&g<W&&q(g|0,s[1],T<s[4]+200?"░░░":s[2],"#b8c0cc")});
B.map(b=>(g=b[1]+sk(ab(b[0]-x0)*700/W,2))<4&&q(b[0],g,b[2],b[3]||K,b[4]));
TW.map((t,y)=>q(tx,y+1+n,t,I));
q(tx+1,2+n,"▒▒▓▒▒".substr(T/350%3|0,3),"#78d0e0");
q(tx+2,n,"●",T/400&1?"error":"#703838");q(tx+3,n,"-\\|/"[T/120&3],I);
for(m=2;m<W;m+=6)if((m<10||m>64||m%12==2)&&ab(m-tx-2)>2&&T>150+ab(m-x0)*900/W&&T<D+300+ab(m-xl)*1500/W){g=ab(d>0?m-rp:W-m-rp)<3&&T<D;q(m,6,g?"●":"•",g?X:m%12<6?"#8ab4ff":"warning")}
return A},
fr=(p,ms,o,e,hd)=>{var A=sc(),N=e||[];
j!=null&&(z?A:N).push(...SG.slice(0,gr?11:8).map(s=>Y(j+s[0],2-h+s[1],s[2],s[3]||F,s[4])));
S=S.filter(s=>(A.push(Y(s[0]|0,s[1]|0,s[6]||"▓▒░·"[s[4]*4/s[5]|0],s[7]||(s[4]<2?"fastMode":I))),s[0]+=s[2],s[1]+=s[3],++s[4]<s[5]));
A.map(q=>q.z=-1);
f.push({x,pose:p,ms,offset:o|0,props:A.concat(N),hide:!!hd});T+=ms},
sp=(a,b,vx,vy,l,ch,cl)=>S.push([a,b,vx,vy,0,l,ch,cl]),
sm=n=>{for(;n--;)sp(tc()-d,4-h-(Q()<.4),-d*(.4+Q()),(Q()-.5)*.3,R(5,9))},
fl=n=>[Y(tc()-(d>0?n-1:0),4-h,(d>0?"══◀":"▶══").substr(d>0?3-n:0,n),T/60&1?"warning":"fastMode",{b:1})],
cp=(x,y,b,n)=>{for(var A=n?[Y(x,y+1,"╲",I),Y(x+9,y+1,"╱",I)]:[],i=0;i<11;i+=2)A.push(Y(x+i-1,y-1," ▗▄▄▄▄▄▄▄▖ ".substr(i,2),i&2?X:V),Y(x+i-1,y,"▟█████████▙".substr(i,2),i&2?X:V));b&&A.map(q=>q.z=-1);return A};
// backdrop
for(i=r()*5|0;i<W-7;i+=k+2+(r()*7|0)){a=r();k=a<.3?7:a<.65?6+2*(r()*4|0):3;
ab(i-tx)<10||B.push(...a<.3?[[i,2,"▗▄███▄▖"],[i,3,"█▌   ▐█"]]:a<.65?[[i,2,"▄".repeat(k)],[i,3," ■".repeat(k/2),"#e8c070",{bg:K,o:1}]]:[[i,3,"♣ ♣","#4f8a5a"]])}
for(i=0;i<W/16;i++)C.push([r()*W,r()*2|0,["▄█▄","▗▄█▄▖","▄▄▄","▗██▄▖"][r()*4|0],.6+r()*1.6,r()*900]);
// rise
c.walk(c.x,x).map(q=>{x=q.x;fr(q.pose,q.ms||60)});
while(T<1500)fr(P(T<900&&T%500<80?CL:T<900?0:E),100);
// taxi in, hop aboard
j=d>0?-29:W;o=x-(d>0?16:4);
while(j-o){j+=d*cc(ab(o-j)/5|0,1,4);Q()<.5&&sm(1);fr(P(d>0?"left":"right"),50)}
fr(P(),300,0,[Y(x+4,3,"!","warning",{b:1})]);
[1,-1,-2,-3,-3,-2,-1,0].map((o,i)=>{z=i<4;fr(P(i?0:CL,i?"up":0),i?70:160,o)});
sp(x+4,2,0,-.5,4,"✦","chromeYellow");
// wave, run-up, take off
for(i=0;i<16;i++){if(i>3)j+=d,x+=d;i%5==2&&sp(x+4+d*2,2,d*.3,-.4,4,"♪",X);Q()<.5&&sm(1);fr(P(i%6==3?"wink":0,i&1?"up":"one-up"),110)}
for(i=0;i<12;i++){k=i&1?-d:d;j+=k;x+=k;sm(2);fr(P(i<5?CL:E),80,0,fl(1+(i>>2)))}
for(i=0;h<7;i++){k=d*(i<6?i&1:i<11?1:2);j+=k;x+=k;
if(i>13&&(i<20?i&1:1))h++;gr=h<1;sm(2);i&1&&sp(tc()-d*R(3,9),R(3,5)-h,-d*2,0,3,"─",I);
fr(P(i<6?CL:E,h?"up":0),M.max(45,80-3*i),-h,fl(3))}
for(j=null,i=8;i--;)fr(P(),90,0,0,1);
// parachute in as it fades, wind takes the chute
xl=cc(x0+d*R(4,16),1,c.mx-1);D=T;
for(n=0;n<18;n++)o=(n/3|0)-6,x=xl+[0,1,1,0,-1,-1][n%6],fr(P(n<6?0:n<14?n&4?"left":"right":"wink","up",n&1?"left":"right"),125,o,cp(x,o+2,0,1));
x=xl;sp(x,6,-1,0,3,"·",I);sp(x+8,6,1,0,3,"·",I);
fr(P(CL,"up"),90,1,cp(x,3,0,1));
for(k=1;k<11;k++){if(k==4)for(i=4;i--;)sp(x+4-d*R(8,16),R(3,6),d*3,0,6,"~",X);fr(P(k<5?0:k<7?CL:E,k>7?"one-up":0),k==4?400:85,0,cp(x+d*2*k,M.min(2+k,14-2*k),1))}
fr(P(CL),300);fr(P("wink","up"),400);
f.push({x,pose:"default",ms:300});
return f;
});
