// A husky team hauls Clawd on a sled through the snow: MUSH!, out past one edge, back again, then the dogs dash off.
$cdA("dog-sled",{title:"Dog sled",w:64},function(c){
var M=Math,T=c.T,R=c.R,C=c.clamp,W=c.W,G=c.G,Z={z:-1},B={b:1},V=W>110?2:1,
n=C((W-20)/16|0,2,5),K=8*n+8,D=c.x>c.mx/2?-1:1,d=D,
x0=D>0?M.min(c.x,W-K-9):M.max(c.x,K),cx=x0,f=c.walk(c.x,x0),
WD="#b0763e",HC=c.pick(["error","permission","success"]),BG=c.pick(["rainbow_red","professionalBlue"]),L="─",
DC=[],tr=[],fl=[],pt=[],h=4,ph=0,e="open",a="down",o=0,S,tm,run,on,hat,hs,end,jp,i,k,g,Se,
MI="▘▝▖▗▌▐▛▜▙▟┐┌╯╰╭╮",HT="▗▄██▄▖",
X=(x,y,t,k,z)=>T(x,y,t,k||"text",z),Y=(x,y,t)=>T(x,y,t,"warning",B),out=()=>d>0?S<=W:S>-10,
mir=t=>[...t].reverse().map(q=>MI[MI.indexOf(q)^1]||q).join(""),
// pc: sled-layout text at col u, mirrored when heading left
pc=(u,y,t,k,z)=>T(d>0?S+u:S+9-u-t.length,y,d>0?t:mir(t),k,z),
wx=u=>d>0?S+u:S+8-u,EY=()=>d>0?"right":"left",st=()=>d>0?-K-9:W+K,
sp=(x,s,m)=>pt.push({x,y:6,vx:s*R(1,m)/10,vy:-R(3,m)/10,t:"·°*'"[R(0,3)]}),
F=(ms,ex)=>{ph++;var p=[],x=on?C(S,-9,W):cx,hd=on&&(S<-9||S>W),j,u,q,y;
 tr.map(([u,y,s,k])=>(y+=h)<4&&p.push(T(u,y,s,k,Z)));
 fl.map(q=>{q.y+=q.v;q.x=(q.x+.1)%W;end?q.v+=.02:q.y>7&&(q.y=-1);q.y>=0&&p.push(X(q.x|0,q.y|0,q.t,0,Z))});
 run&&tm&&sp(wx(-2),-d,9)&&R(0,1)&&sp(wx(21+8*R(0,n-1)),-d,5);
 pt=pt.filter(q=>(q.x+=q.vx,q.y+=q.vy,q.vy+=.2,q.y<7&&q.x>=0&&q.x<W));pt.map(q=>p.push(X(M.round(q.x),M.round(q.y),q.t)));
 if(hat&&!hd)p.push(T(x+2,G-1+o,HT,HC),X(x+4,G-2+o,"•")),run&&on&&p.push(T(d>0?x-3:x+9,G+o,["~≈-","≈~~","-~≈"][ph%3],HC));
 if(tm){p.push(pc(-1,6,(on?"──  ───  ─":L.repeat(10))+"┴"+L.repeat(6)+"╯",WD,!on&&Z),pc(9,5,"┐",WD,Z),pc(10,5,"▄▄▄▄▄▄",BG,Z),pc(16,5,"╭"+L.repeat(K-14),"inactive",Z));
  hs&&p.push(pc(11,5,"▄▄▄▄",HC),pc(13,4,"•","text"));
  for(j=0;j<n;j++)u=19+8*j,q=run&&(ph+j)%2,y=jp&&jp[j]?4:5,p.push(pc(u,y,((ph+j)%2?"▗":"▝")+"▄▄▄▟▙",DC[j],Z),pc(u,y+1," "+(q?"▜▛▜▛":"▛▀▀▜"),DC[j],Z))}
 f.push({x,offset:o,pose:c.P(e,a,run&&on&&ph%13<2?"left":"both"),hide:hd,ms,props:p.concat(ex||[])})};
// pine trees, tall or short
for(i=R(1,5);i<W;i+=R(10,20))g=R(0,1),(g?["▲","◢█◣","◢███◣","│"]:["▲","◢█◣","│"]).map((s,j)=>tr.push([i-(s.length>>1),j+!g,s,j?s=="│"?WD:"#3f8a5a":"text"]));
for(i=0;i<M.min(W/8,20);i++)fl.push({x:R(0,W-1),y:-R(0,40)/5,v:R(8,22)/100,t:"·*❄·"[R(0,3)]});
for(i=0;i<n;i++)DC.push(c.pick(["#d8dce4","#a5aaba","#e4b260","#c9a27a"]));
// Snow, treeline, a whistle.
for(i=4;i--;)h=i,F(110);
e="closed";a="one-up";F(160,[X(cx+3,G-1,"♪")]);F(160,[X(cx+5,G-2,"♫")]);
a="down";e=D>0?"left":"right";F(350,[Y(D>0?1:W-5,3,"wuf!")]);
// The team races in and stops under him.
tm=run=1;S=st();
for(;S!=x0;)g=M.abs(x0-S),S+=D*M.min(g>12?V:1,g),e=wx(K+6)>cx+4?"right":"left",F(g>12?34:g>4?55:90);
run=0;for(i=0;i<6;i++)sp(wx(K+8),d,8);
e="open";F(200);F(250,[Y(cx+4,G-1,"!")]);
// Hop on, a hat drops.
on=1;a="up";[-1,-2,-1,0].map(v=>{o=v;F(70)});
e="closed";for(i=0;i<4;i++)F(70,[T(cx+2,i,HT,HC),X(cx+4,i-1,"•")]);hat=1;e="wink";F(300);
// Eager dogs, a deep breath, MUSH!
a="down";e=EY();for(i=0;i<8;i++)jp=DC.map(()=>!R(0,2)),F(110,i%3?[]:[X(wx(23+8*R(0,n-1))-1,3,"wuf!")]);jp=0;
e="closed";F(320);a="one-up";e=EY();g=[Y(C(cx+1,0,W-6),1,"MUSH!")];jp=DC;F(200,g);jp=0;F(350,g);
// Out past the far edge.
run=1;
for(k=0;out();k++)S+=d*(k<8?1:V),g=k>13&&k<30,a=g?"up":"down",e=g&&k%4<2?"wink":EY(),F(k<8?80-k*6:30,g?[X(S+1,1,"wheee!")]:[]);
// Turn around offstage, race back, WHOA.
a="down";for(i=0;i<7;i++)i<4&&sp(D>0?W-1:0,-D,11),F(90,i>2?[X(D>0?W-5:1,2,"yip!","inactive")]:[]);
d=-D;e=EY();S=st();Se=d<0?C(x0,K,c.mx-3):C(x0,3,W-K-9);
for(;S!=Se;)g=M.abs(Se-S),S+=d*M.min(g>14?V:1,g),e=g<14?"closed":EY(),g<14&&sp(wx(K+7),d,10),F(g>14?30:40+(14-g)*8,g<14&&g>4?[Y(S+2,1,"WHOA!")]:[]);
run=0;e="open";F(250);
// Good dogs! Hop off, hat into the sled.
e="wink";for(i=0;i<6;i++)F(120,DC.map((_,k)=>T(wx(22+8*k),4-(i>>1),"♥","error")));
on=0;cx=S;a="up";e=EY();[-1,-2,-1,0].map((v,j)=>{o=v;j<3&&(cx-=d);F(70)});
F(120,[X(cx+1,6,"·"),X(cx+7,6,"·")]);
hat=0;a="one-up";for(i=1;i<5;i++)F(70,[T(M.round(c.lerp(cx+2,d>0?S+11:S-7,i/5)),[2,1,1,3][i-1],HT,HC)]);hs=1;F(200);
// The dogs dash off, Clawd waves.
run=end=1;
for(k=0;out();k++)S+=d*(k<6?1:V),a=k%6<3?"one-up":"up",F(k<6?70:34,k<14?[X(cx+1,2,"bye!")]:[]);
tm=run=0;a="down";e="open";for(i=0;i<12;i++)h=M.min(i>>1,4),F(60);
f.push({pose:c.P("wink"),ms:350},{pose:"default",ms:200});
return f;
});
