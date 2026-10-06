// Relay race across the stage: two friends pass the baton, Clawd anchors and breaks the finish tape.
$cdA("relay-race",{title:"Relay race",w:64},function(c){
var M=Math,f=[],G=c.G,W=c.W,P=c.P,T=c.T,R=c.R,Y="warning",I="inactive",E="error",U="one-up",N="text",O={b:1},Z={z:-1},
L=M.round(c.mx/3),X=c.mx-1,Q=W-5,sp=L>40?2:1,ms=c.clamp(1500*sp/L|0,30,70),n=0,th=0,tp=0,H=0,pt=[],i,k,o,p,
S="go! GO! run! yay! woo! wow!".split(" "),K="permission success autoAccept professionalBlue rainbow_violet".split(" ").sort(_=>M.random()-.5),
nr=(x,o,c)=>({x,o,c,m:0,g:R(0,2)}),A=nr(-9,0,K[0]),B=nr(L,-7,K[1]),C=nr(c.x,0),
// finish post: th rows grown, tp tape ok/bulge/snapped
fin=()=>{var r=[],y;if(th){r.push(T(Q,6,"▚",N,Z));th>4&&r.push(T(Q-3,1,"FINISH",Y,O));th>5&&r.push(T(Q-3,0,"▚▞▚▞▚▞",N));
 if(tp==1)r.push(T(Q,2,"│",E),T(Q,3,"\\",E),T(Q+1,4,")",E),T(Q,5,"/",E));
 else for(y=5;y>1&&y>5-th;y--)(!tp||y<4)&&r.push(T(Q+(tp&&y>2&&n>>1&1),y,tp&&y>2?"~":"│",E,Z))}return r},
// runner mode m: 4 coast, 3 pant, 2 cheer
F=(d,p)=>{n++;p=p||[];var q=n>>2&1;
 [A,B,C].map(r=>{
  if(r.m>3){r.x++;run(r,n);--r.cs||(r.m=3,r.t=R(8,14))}
  else if(r.m>2){r.e="closed";r.a=r.l=0;p.push(T(r.x+(q?9:-1),G-1+q,"'",I));--r.t||(r.m=2)}
  else if(r.m>1){r.e=n%23<2?"closed":"right";r.a=q?"up":U;r.o=(n&7)<2?-1:0;n%32<9&&p.push(T(r.x+3,G-2+r.o,S[r.g+(tp>1)*3],r.c,O))}});
 pt=pt.filter(z=>(z.x+=z.d,z.y+=z.v,z.v+=z.g,z.x>=0&&z.x<W&&z.y<7));pt.map(z=>z.y>=0&&p.push(T(z.x|0,z.y|0,z.t,z.c,Z)));
 H&&p.push(H.a=="up"?T(H.x+8,G+H.o-1,"║",Y,O):T(H.x+9,G+H.o+!H.a,"═",Y,O));
 f.push({x:C.x,offset:C.o,pose:P(C.e,C.a,C.l),ms:d,props:p.concat(fin()),
  actors:[A,B].map(r=>({x:r.x,offset:r.o,pose:P(r.e,r.a,r.l),color:r.c}))})},
run=(r,k)=>{r.e="right";r.a=k>>1&1&&U;r.l=k%2?"left":"right"},
mv=(J,d,fx)=>{for(var k=0,b=1;b;k++){b=0;J.map(([r,t])=>{var g=t-r.x;r.o=r.m=0;
 if(g){b=1;r.x+=c.clamp(g,-2,2);run(r,k);g<0&&(r.e="left")}else r.a=r.l=0});b&&F(d,fx&&fx(k))}},
// r brings the baton to q, who jogs off reaching back
leg=(r,q)=>{H=r;r.m=0;for(k=0;(o=q.x-10-r.x)>0;k++){q.e="left";q.a=o<5&&"up";q.l=0;o<7&&k%3<1&&(q.x++,q.l="left");
 r.x+=M.min(q.x-10-r.x,sp);run(r,k);F(k<3?ms+30:ms,k<3?[]:[T(r.x-2,G+1,"≡",I,Z)].concat(k%3?[]:T(r.x-1,6,"·",I)))}
 H=0;r.a=U;q.a="up";q.l=0;F(160,[T(q.x-1,G,"═",Y,O),T(q.x-1,G-1,"✦",Y),T(r.x+2,G-2,S[r.g],r.c,O)]);
 H=q;q.e="right";q.a=U;F(70,[T(q.x-1,G-1,"·",Y)]);r.m=4;r.cs=4};
// post grows, Clawd jogs to the anchor spot
C.e="right";for(th=1;th<7;th++)F(55);F(250);mv([[C,2*L]],35);C.e="left";F(250);
// friend 2 drops in, friend 1 takes the start
[-5,-3,-1,1,0].map(o=>{B.o=o;F(50,o>0&&[T(L-1,6,"°",I),T(L+9,6,"°",I)])});
B.e="right";F(220);B.e="left";F(200);
H=A;mv([[A,0]],40);A.o=1;F(300);
for(i=3;i;i--)F(R(330,420),[T(4,1,""+i,Y,O)]);
A.o=0;F(140,[T(3,1,"GO!","success",O),T(0,6,"°",I)]);
leg(A,B);leg(B,C);
// anchor leg: tape snaps, confetti everywhere
for(k=0;C.x<X;k++){C.x=M.min(X,C.x+sp);run(C,k);p=[T(C.x-4,G+1,"- ≡",I,Z)];
 if(tp==1){tp=2;p.push(T(Q,3,"✦",Y,O),T(Q+1,5,"*",Y));
  for(i=0;i<M.min(85,W/2+5);i++)pt.push(i<5?{x:Q+1,y:2+i%4,d:.3+i*.25,v:i*.3-1.4,g:.25,t:i%2?"✦":"~",c:i%2?Y:E}:{x:R(0,W-1),y:-R(0,10),d:R(-1,1)/9,v:R(35,70)/100,g:0,t:"*✦·•°♦"[R(0,5)],c:c.rainbow(i)})}
 else!tp&&C.x+9>=Q&&(tp=1);
 F(tp==1?120:M.max(28,ms-10),p)}
C.e="closed";C.a=C.l=0;F(130,[T(X-1,6,"°",I),T(X-2,5,"·",I)]);F(120);
// victory hops, baton held high
C.a="up";for(i=0;i<12;i++){C.o=o=[0,-1,-2,-2,-1,0][i%6];C.e=i%6<3?"wink":0;F(85,i%4<2&&[T(X-1,G-2+o,"★",Y),T(X+6,G-3+o,"✦",Y)])}F(300);
// team photo, baton tossed up into a star
C.a=0;C.e="left";mv([[B,X-10],[A,X-20]],32);
for(i=0;i<10;i++){A.o=B.o=C.o=[0,-1,-2,-1,0][i%5];A.a=B.a=C.a="up";C.e=i<5?"left":"wink";F(80,i%5==2&&[T(X-11,G-3,"♥",E),T(X-1,G-3,"♥",E)])}
H=0;C.e=0;for(i=0;i<4;i++)F(70,[T(X+8,G-1-i,"|/-\\"[i],Y,O)]);
A.a=B.a=C.a=0;F(260,[T(X+8,0,"✦",Y,O)]);F(200,[T(X+8,0,"·",Y)]);
// goodbye: friends jog off, post sinks
C.e="left";for(i=0;i<6;i++){A.a=B.a=C.a=i%2&&U;F(150)}
mv([[A,-9],[B,-9]],38,k=>{k%2||!th||th--;C.a=k>>2&1&&U});
for(;th;th--)F(40);
f.push({x:X,pose:P("wink"),ms:400},{x:X,pose:"default",ms:200});
return f;
});
