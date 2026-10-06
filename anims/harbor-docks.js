// Full-width harbor (boats, cranes, lighthouse, gulls): a gull nabs Clawd's fries and he chases it down the dock.
$cdA("harbor-docks",{ scene: 1,title:"Harbor",w:70},function(c){
var f=[],W=c.W,M=Math,X=c.T,P=c.P,G=c.G,T=0,o=0,FR=3,tn=0,gx=-99,A,H,GC,TM,gy,i,k,s,b,e=-99,
d=c.x<c.mx/2?1:-1,x=c.x,x0=c.clamp(x,2,c.mx-14),FW=d>0?"right":"left",
R=c.rng(c.R(1,9999)),r=(a,b)=>a+(R()*(b-a+1)|0),
TX="text",Y="chromeYellow",RD="error",WA="warning",IN="inactive",SEA="#3c82c8",B={b:1},RU=P("right","one-up"),CL=P("closed"),
O=[],Q=[],U=[],lx=d>0?W-7:1,
D=(x,y,t,C,v,l)=>Q.push([x,y,t,C,l,v]),fy=(a,b)=>[X(x+a,b,"|",Y)],NM=()=>[X(x+2,3,"nom",TX,B)],
ART=[[" ▐▙"," ▐█▙","▜████▛"],["  ▗▖","▗▟██▙▖","▜█████▛"],["═".repeat(9)+"╦═╗",s=" ".repeat(9)+"║",s,"▟█▙".padStart(11)]];
// far quay: boats, tugs, cranes
for(i=r(0,5);i<W-6;){if(M.abs(i-lx)<9||M.abs(i-x0)<12){i+=3;continue}k=r(0,4);k=k>3&&i-e>50?2:k&1;k>1&&(e=i);
O.push({x:i,k,p:r(0,99),c:c.pick([RD,"permission","success",WA])});i+=[6,7,12][k]+r(3,14)}
for(i=0;i<2+W/60;i++)U.push([r(4,W-4),r(0,1),r(3,8),r(0,99),r(5,12)/10]);
var SC=()=>{var Z=[],h=A*W|0,L=x+4-h,E=x+4+h,b,i,j,s,w,y,
q=(a,y,t,C)=>{var l=M.max(a,L),m=M.min(a+t.length,E);m>l&&Z.push(X(l,y,t.slice(l-a,m-a),C,{z:-1}))},
tl=(p,y,C,sh)=>q(0,y,c.tile(p,y,C,sh).t,C);
tl("  ░▒▒░            ░▒░        ",0,"#7d8aa0",T/700);tl("~≈~-~~≈~^~≈-",3,SEA,T/250);
b=M.cos(T/450);w=M.abs(b)*16|0;w>1&&q(b>0?lx+4:lx-w,0,"─".repeat(w),"#f5e7a1");
[" ▐ ▌"," ▐█▌"," ▐█▌","▟███▙"].map((l,j)=>q(lx,j,l,[RD,TX,RD,IN][j]));q(lx+2,0,w<3?"✸":"☼",Y);
O.map(o=>{var a=o.x,k=o.k,b=k<2&&M.sin(T/380+o.p)>.4?-1:0,t;
ART[k].map((l,j)=>q(a,j+(k<2)+b,l,k>1?WA:j>1?o.c:j||!k?TX:RD));
k==1&&q(a+2+((T/220+o.p)%3|0),b,"°",IN);
k>1&&(t=1+(M.sin(T/700+o.p)+1)*3.5|0,q(a+t,1,"│",TX),q(a+t-1,2,"▐█▌",o.c))});
U.map(g=>{var a=T/900*g[4]+g[3];q(g[0]+M.cos(a)*g[2]|0,g[1]+(M.sin(a)>0),(T/160+g[3]|0)%2?"v":"-",TX)});
// water + dock, off the banner
for(j=4;j<7;j++){s="";for(i=0;i<W;i++)w=i>9&&i<65,y=(T/(j*90)|0)*(j&1||-1)+i+999,
s+=j>5?w?i%6?" ":"▄":i%9?"▄":"▖":w?" ":j>4?"≈~-~≈~~-"[y%8]:y%9?" ":"~";
q(0,j,s,j>5?"#a2703f":j>4?SEA:"#69a8e6")}
return Z},
F=(p,ms,ex)=>{var Z=SC(),y=G+o;
if(TM){tn++;b=T/420;gx=x0+20+M.cos(b)*6|0;gy=(M.sin(b)>0)-M.max(0,4-tn)}
H&&Z.push(X(x+9,y,"▜▓▛",RD),X(x+9,y-1,"¦|¦".slice(0,FR),Y));
gx>-50&&Z.push(X(gx,gy,(T/90|0)%2?"\\v/":"-v-",TX,B));GC&&Z.push(X(gx,gy+1,"▜▓▛",RD));
Q=Q.filter(q=>q[4]-->0&&Z.push(X(q[0],q[1],q[2],q[3]))&&(q[1]+=q[5],1));
f.push({x,pose:p,offset:o,ms,props:Z.concat(ex||[])});T+=ms};
// harbor opens; stroll to the edge
for(i=0;i<14||x-x0;i++){A=M.min(1,i/12);s=x0-x;x+=M.sign(s);F(P(s?s>0?"right":"left":i%8<4?"left":"right",0,s?i%2?"left":"right":0),s?60:110)}
// sit, fries, two bites; a gull circles
o=1;F(CL,140);H=TM=1;D(x+11,G-1,"✦",Y,0,3);F(P("wink","one-up"),450);F(RU,300);
for(k=0;k<2;k++){FR--;[[10,3],[9,2],[8,3],[7,4]].map(p=>F(RU,70,fy(...p)));
for(i=0;i<4;i++)i%2||D(x+9,6,"·",Y,0,2),F(P(i%2?0:"closed","one-up"),150,NM());
F(P(k?"closed":"wink","one-up"),k?200:350);k||F(RU,500,[X(x+12,3,"?",TX)])}
// swoop! snatch
TM=0;s=[gx,gy];for(i=1;i<8;i++)gx=c.lerp(s[0],x+9,i/7)|0,gy=c.lerp(s[1],4,i*i/49)|0,F(P("closed","one-up"),45,[X(gx+3,gy,"≡",IN),X(x+2,3,"mmm",TX)]);
H=0;GC=1;F(P(0,"up"),80,[X(x+4,G,"!",RD,B)]);
o=-1;F(P(0,"up"),90,[X(x+4,G-2,"!!",RD,B)]);o=0;F(P(FW),80);
// chase down the dock
e=d>0?M.min(c.mx,x0+44):M.max(0,x0-44);
for(i=0;x-e;i++){i>2&&(x+=d);gx+=c.clamp(x+4+d*(10+i%3)-gx,-2,2);gy=M.abs(gx-x-4)<7?2:3+(i>>1)%2;
i%9==4&&D(gx+1,gy+2,"|",Y,1,3);
F(P(FW,i%2?"up":"one-up",i%2?"left":"right"),i>2?45:90,[X(x+4-6*d,5,"≡",IN),X(x+3,i%12<6?3:-9,"#@!",RD,B)])}
// escape; fume, slump
for(i=0;i<8;i++)gx+=2*d,gy--,F(P(i<4&&FW,i%2?"up":"one-up"),i<2?60:110,i<2?[X(x+4+4*d,6,"·",TX)]:[X(x+4,G-1,"!",RD)]);
gx=-99;o=1;F(CL,700,[X(x+2,G,"sigh",TX)]);o=0;
// the gull swings back and drops one fry
for(i=0;i<8;i++)gx=x+7+d*(12-3*i),gy=i<5?0:4-i,F(P(i<4?FW:"right",i>6&&"one-up"),i<5?70:130,[X(x+9,i>4?i-5:-9,"|/─\\"[i%4],Y,B)]);gx=-99;
F(P(0,"one-up"),300,fy(9,3));F(RU,80,fy(8,2));F(RU,80,fy(7,3));
F(CL,200,NM());F(P("wink"),600,[X(x+4,3,"♥",RD)]);
// fade out
for(i=11;i>=0;i--)A=i/12,F(P(i>8&&"wink"),80);
f.push({x,pose:"default",ms:300});
return f});
