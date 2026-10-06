// A sheet flutters down, Clawd folds a paper plane and throws it: it loops the loop, banks back and bonks him on the head.
$cdA("paper-plane",{title:"Paper plane",w:52},function(c){
var T=c.T,R=c.R,M=Math,Q=M.round,B={b:1},Y="chromeYellow",N="inactive",RT="right",CL="closed",U1="one-up",
 X=c.clamp(c.x,0,c.mx-34),f=c.walk(c.x,X),X0=X,pc=c.pick(["text",c.hsv(R(0,359),.25,1)]),
 e="open",a="down",o=0,ft="both",pl=0,tr=[],P,k,i,j,p,q,n,x,y,d,ex,lx,tx,L,iL,iT,w,
 // frame + dotted trail + plane pl=[x,y,glyph]
 S=(ms,z)=>f.push({x:X,offset:o,pose:c.P(e,a,ft),ms:ms,props:tr.map((t,j)=>T(t[0],t[1],"·",j>tr.length-3?N:"subtle")).concat(z||[],pl?T(pl[0],pl[1],pl[2],pc,B):[])}),
 // fold stage k
 sh=(k,d,y)=>[0,1,2].map(r=>{var v=7-2*M.max(0,k-r);return T(X+4-(v>>1)+(d|0),1+r+(y|0),v<2?"▲":v<7?"◢"+"█".repeat(v-2)+"◣":"█".repeat(7),pc)}),
 // hops: "dx y glyph" (dx base 36)
 fl=(s,ms)=>s.replace(/.../g,t=>{pl=[X+parseInt(t[0],36),+t[1],t[2]];e=pl[0]>X+5?RT:"open";S(ms)}),
 go=(x,y)=>{p=P[P.length-1];for(n=M.max(M.abs(x-p[0]),M.abs(y-p[1])*2)|0,j=1;j<=n;j++)P.push([p[0]+(x-p[0])*j/n,p[1]+(y-p[1])*j/n])},
 st=z=>[T(X+4,3+o,"◣",pc,B),T(X+5,2+o,"◥",pc,B)].concat(z||[]);

// setup: a sheet see-saws down
q=X+R(0,6);
for(k=0;k<8;k++){p=Q(c.lerp(q,X+2,k/7)+M.sin(k*1.4)*1.5);e=p<X+1?"left":p>X+3?RT:"open";a=k>3?"up":"down";S(k?120:250,[T(p,k>>1,k%2?"▀▀▄▄▄":"▄▄▄▀▀",pc)])}
o=1;e=CL;S(90,sh(0,0,1));o=0;e="open";S(450,sh(0));
// build-up: folds, plane, wind-up
for(k=1;k<4;k++){a=U1;e=CL;S(80,sh(k-1,1).concat(T(X+10,1,"fwip",N)));a="up";S(80,sh(k).concat(T(X+3+R(0,2),k,"✦",Y)));e=c.pick(["open","wink",RT]);S(380,sh(k))}
a=U1;e="wink";pl=[X+8,3,"◥▶"];S(110,c.art(X+2,1," ✦ ✧\n\n·  ·",Y));S(500);e=RT;S(300);
o=1;e=CL;pl=[(X-=X>0)+8,4,"◥▶"];S(200);S(150);

// climax: swoop, loop(s), stall-turn, dive
lx=X0+22+R(0,4);tx=M.min(c.W-4,lx+13+R(0,4));
P=[[X0+11,3]];go(X0+15,1);go(X0+18,1);go(lx,3);iL=P.length;
for(k=R(0,2)?16:32,j=1;j<=k;j++)P.push([lx+4*M.sin(j*M.PI/8),1.5+1.5*M.cos(j*M.PI/8)]);
L=P.length;go(lx+4,3);go(tx,1);go(tx+2,0);P.push([tx+2,0,"▲",170],[tx+2,0,"◤",120]);iT=P.length;
go(tx-2,0);go(X0+13,1);go(X0+4,3);
for(i=0;i<P.length;i++){
 p=P[i];q=P[i-1]||[X0+9,3];n=P.length-i;ex=[];x=Q(p[0]);y=Q(p[1]);
 d=(Q(M.atan2(2*(q[1]-p[1]),p[0]-q[0])*4/M.PI)+8)%8;
 pl=[x-!(d||p[2]),y,p[2]||(d%4?"▶◥▲◤◀◣▼◢"[d]:d?"◀◤":"◥▶")];
 X=X0+(i<2);o=0;a=i<3?U1:"down";e=x>X+5?RT:"left";ft="both";
 if(i<3)ex.push(T(x-3,y,"≡",N));
 if(i>=iL&&i<L)a="up",ft=i%4<2?"left":RT;
 if(i>=L&&i<L+5){o=[-1,-2,-1,0,0][i-L];a="up";e="wink";ex.push(T(X+R(0,8),R(0,2),"✦",c.rainbow(i)))}
 // puzzled, smug catch pose, "!"
 if(i>=iT){if(i<iT+7)ex.push(T(X+4,2,"?",N,B));else{a=U1;e=n<9?RT:"wink"}}
 if(n<9)ex.push(T(X+4,1,"!","warning",B));
 if(n<3)e=CL,a="up";
 S(p[3]||(d&&d<4?60:d>4?36:46),ex);
 tr.push([x,y]);if(tr.length>6)tr.shift();
}

// payoff: BONK, stars, shake
pl=0;tr=[];X=X0;a="down";w=c.pick(["BONK!","TOK!","THWACK"]);
o=1;e=CL;S(60,st(c.art(X,0,[" "+w,"","","  ✦    ✦","*        *"],Y,B)));
S(160,st(T(X+1,0,w,Y,B)));o=0;S(120,st(T(X+1,0,w,N,B)));
for(k=0;k<12;k++){X=X0+(k%4>1);e=[CL,"left",CL,RT][k%4];S(110,st([0,1,2].map(j=>{var t=k*.8+j*2.1;return T(X+4+Q(3.5*M.cos(t)),M.sin(t)>0?2:1,"✦✧★"[j],j?Y:"warning")})))}
for(k=0;k<6;k++){X=X0+k%2;e=k%2?"left":RT;S(45,st())}
X=X0;
// cleanup: catch, scrunch, lob
fl("42▲51◥70▶81◢82▼",60);
a=U1;pl=[X+8,3,"◥▶"];S(300);e=CL;S(450);
["▓▒","▓","●","●"].forEach((g,j)=>{a=j%2?"up":U1;e=j%2?CL:RT;pl[2]=g;S(130,[T(X+10,2,"scrunch".slice(0,2+j*2),N)])});
a=U1;o=1;pl[1]=4;e=CL;S(180);o=0;
fl("a2●c1●e0•g0•h0·",60);fl("i0✦i0✧i0·",120);
pl=0;a="down";e="wink";S(450);
f.push({x:X,pose:"default",ms:200});
return f;
});
