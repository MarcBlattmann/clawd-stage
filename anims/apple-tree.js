// Clawd plants a seed, the tree grows apples, one BONKs him in his nap; he re-tests it: lightbulb, gravity!
$cdA("apple-tree",{title:"Gravity",w:40},c=>{
var T=c.T,R=c.R,M=Math,X=c.clamp(c.x,7,c.mx-12),tx=X+11,x=X+2,f=c.walk(c.x,x),
 t=0,ps=[],ap=[],g=-3,au=0,hp=0,fa=0,bl=0,tl=0,so=0,aa="down",k,a,
 E="right",L="left",O="open",S="closed",W="wink",U="one-up",V="up",N="inactive",RD="#e8402f",RA="●"+RD,BR="#a0703c",SD="•"+BR,Y="#ffd84a",
 RP=(",✿#ffc0d8,•#b8d040,●#f0a030,"+RA).split(","),
 // bark rows 0-6, leaf rows 0-2, bulb
 SK=",  \\   \\  |  /   /, --\\---\\ | /---/-,        \\#/,         #,         #,        [#],   ^^###^  ^##^^, ^##############^,v###v###vv###v##v,^###^,v###v, v#v".replace(/./g,m=>"╲╱│─█▟▙▄▀"["\\/|-#[]^v".indexOf(m)]||m).split(","),
 gk=(i,r)=>(i*3+r*5+(i>>2))%4,
 H=(q,b)=>b?c.hsv(42-q*9,.8,.92):c.hsv(100+q*9,.62,.55+q%2*.18),
 Q=(x,y,s)=>T(x,y,s[0],s.slice(1)),
 // particle: t0,x,y,dx,dy,life,glyphs,color,gravity
 sp=(a,b,dx,dy,l,s,col,gr,d)=>ps.push([t+(d|0),a,b,dx,dy,l,s,col,gr||0]),
 A=(e,ms,o,ar,ft,ex)=>{
 for(var m=M.ceil(ms/100),d=M.round(ms/m),j=0,p,r,s,q,i;j++<m;t+=d){
 p=[];o=o<9?o:so;
 g>-3&&g<0&&p.push(T(tx-1,6,"▗▄▖",BR));
 g>-2&&g<4&&p.push(T(tx,5-g,"♣",H(2)));
 // leaf group q turns at au>q, falls at au>q+4
 for(r=0;r<10;r++)for(q=0;q<(r>6?4:1);q++){
  for(s="",i=0;i<18;i++)s+=(r>6?7+(r<8)+(gk(i,r-7)!=q||au>q+4)*99:6-r)+(M.abs(i-9)>>1)>g?" ":SK[r][i]||" ";
  s.trim()&&p.push(T(tx-9,r%7,s,r<7?BR:H(q,au>q)));
 }
 ap.map(a=>{var i=a[0]+(a[3]|0),k=gk(i,a[1]);a[2]&&p.push({...Q(tx-9+i,a[1],a[2]),bg:H(k,au>k)})});
 ps.map(a=>{var b=(t-a[0])/50;b>=0&&b<a[5]&&p.push(T(M.round(a[1]+b*a[3]),M.round(a[2]+b*a[4]+a[8]*b*b/2),a[6][b/a[5]*a[6].length|0],a[7]))});
 hp&&p.push(Q(x+8,3+o,hp));
 fa&&p.push(Q(fa[0],fa[1],fa[2]||RA));
 bl&&p.push(...[1,2,3].map(i=>T(x+2,i,SK[i+9],i>2?N:bl>1?Y:"#8a7a40")),T(x,0,"gravity!".slice(0,tl)||" ",Y,{b:1}));
 f.push({x:x,offset:o,ms:d,pose:c.P(e,ar||(hp?U:aa),ft),props:ex?p.concat(ex):p});
 }};
// plant
hp=SD;A(E,250);sp(x+8,2,0,-.15,6,"✦✧·",Y);A(W,350);
for(hp=0,k=4;k<7;k++)fa=[tx,k,SD],A(E,100-k*10,0,k<5&&U);
fa=0;g=-2;for(k=4;k--;)sp(tx,6,k*.2,-.5,4,"·.",BR,.15);
A(E,250);A(W,250);
for(;x>X;)x--,A(E,90,0,0,x%2?L:E);
// sit; it sprouts and grows
so=1;A(E,150);g=-1;sp(tx,5,0,-.1,6,"✦·",Y);A(E,300);A(O,100);A(E,150);
for(g=0;g<13;g++){for(k=g>6?2:0;k--;)sp(tx+R(-8,7),R(0,2),R(-1,1)*.15,-.1,R(3,6),"✦✧·",R(0,1)?Y:H(2));A(g<4?E:g<9?g&1?O:L:E,g<4?160:100)}
g=12;A(O,250,1,V);A(W,250,1,V);
// blossoms, green, ripe; the one over his head last
ap=[[2,2,0]];
[[6,2],[11,2],[15,2],[4,1],[8,1],[13,1],[12,0]].sort(_=>R(0,1)-.5).slice(0,R(3,5)).map(p=>ap.push(p.concat(0)));
for(k=1;k<5;k++)[...ap.slice(1),ap[0]].map(p=>{p[2]=RP[k];a=tx-9+p[0];k<2&&sp(a,p[1],0,-.1,4,"✧·","#ffc0d8");A(a<X+3?L:a>X+5?E:O,R(50,90))});
// nap; it wobbles... BONK
aa=V;A(W,250);
for(k=3;k--;)sp(X+7,4,.12,-.09,12,"zzZZ·",N,0,k*300);
A(S,R(6,10)*100);
for(k=0;k<6;k++)ap[0][3]=k%2?k&2?1:-1:0,A(S,70);
ap[0][2]=0;fa=[X+4,3];A(S,100);fa=[X+4,4];A(S,50);
for(k=8;k--;)sp(X+4,4,1.5*M.cos(a=3.2+k*.45),.6*M.sin(a),5,"✶✦*·",k%2?Y:"text");
[[X+5,3],[X+6,3],[X+7,3],[X+8,4],[X+9,5],[X+9,6]].map((p,j)=>{fa=p;A(S,j?70:130,j<2?2:1,0,0,j<5&&[T(X-3,3,"BONK!",j%2?"text":Y,{b:1})])});
aa="down";
for(k=R(7,11);k--;)A(k&1?L:E,90,1,0,0,[0,1,2].map(i=>T(X+4+M.round(4*M.cos(a=k*.8+i*2.1)),M.sin(a)>0?4:3,"✦*·"[i],Y)));
A(O,200);A(E,300);sp(X+5,3,0,-.1,6,"?",Y);A(O,200);A(E,150);
// grab it, stand, walk out from under the tree, drop it again
x++;A(E,100);fa=0;hp=RA;A(E,150);so=0;A(E,150);A(O,200);
for(;x>X-7;)x--,A(L,80,0,U,x%2?L:E);
A(E,300);A(S,90);A(E,200);
hp=0;fa=[x+8,3];A(E,160);
[[x+8,4],[x+9,5],[x+9,6]].map((p,j)=>{fa=p;A(E,60-j*12)});
for(k=4;k--;)sp(x+9,6,(k-1.5)*.3,-.4,4,"·.",N,.15);
A(E,400);A(S,90);A(E,200);
// eureka
A(O,80,-1,V);
[1,0,2,1,2,0,2].map((b,j)=>{bl=b;A(O,50+j%3*20,0,V)});
for(k=6;k--;)sp(x+4,2,1.5*M.cos(k),.6*M.sin(k),5,"✦✧·",Y);
for(tl=1;tl<9;tl++)A(O,45,0,V);
for(k=0;k<7;k++)sp(x+1+R(0,1)*6,R(1,3),0,0,3,"✧·",Y),A(k%4>2?W:O,130,0,V,k%2?L:E);
bl=1;tl=0;A(W,150);bl=0;A(E,150);
// munch while the leaves turn and fall; the bare tree sinks away
A(E,100,1,U);fa=0;hp=RA;A(E,100,1);A(E,150);
for(au=1;au<9;au++){
 for(k=au>4?4:0;k--;)sp(tx+R(-7,7),R(0,2),R(-1,1)*.1,.3,18,"▘▖▘▖▘▖",H(au-5,1));
 au==5&&ap.map(p=>{p[2]&&sp(tx-9+p[0],p[1],0,0,M.sqrt((6-p[1])/.06),"●",RD,.12);p[2]=0});
 au%2||(hp=au<6&&"●•·"[au/2]+RD,sp(x+8,3,R(-1,1)*.2,.15,5,"·",RD,.1));
 A(au%2?E:S,130);
}
A(O,450);
for(g=12;g>-4;g--)g<4&&sp(tx,6,R(-1,1)*.3,-.2,3,"·",BR,.1),A(E,g>4?50:70);
A(O,150);A(W,300);f.push({pose:"default",ms:200});
return f;
});
