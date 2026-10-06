// Clawd fishes: casts, dozes off, wins a tug-of-war with a bite, shows off the fish, lets it go.
$cdA("fishing", { title: "Gone fishing", w: 50 }, function (c) {
var T=c.T,R=c.R,M=Math,U=M.round,G=c.G,f,i,j,k,n,z,ph=0,tx,ty,fx,o=1,e="open",a="down",r=1,rn=0,
  x=c.clamp(c.x,M.min(c.mx-23,30),c.mx-23),X=x,A=x+16,B=M.min(c.W,A+22),bx=R(A+3,B-4),
  m=R(1,3),FR="><"+"(((".slice(-m)+"°>",FL="<°"+")))".slice(-m)+"><",N=m+4,H=N>>1,FC=c.rainbow(R(0,9)),
  lx=A+R(1,4),jc=M.min(lx+R(4,7),B-H-5),BL="#96c3ff",WB="#193778",Q="one-up",RT="right",CL="closed",UP="up",
  // rods fwd/up/back/droop/bent: dx+3,-dy,glyph
  RS=["41/52/63/","31|32|33|","21\\12\\03\\","41/51─61─","41/52─62╮"];
// frame: pond, rod, props, line from rod tip to L=[x,y,sag]
function F(ms,ex,L,ft){
  for(var p=[],s="",j=A,d,h,n,q;j<B;j++)s+=(j+(ph>>1))%5?" ":"~";
  for(p.push(T(A,6,s,BL,{bg:WB,o:1,z:-1})),ph++,j=0;j<rn;j++)q=RS[r].substr(3*j,3),p.push(T(tx=+q[0]+X+5,ty=G+o-q[1],q[2],"#af7846"));
  if(L)for(d=L[0]-tx,h=L[1]-ty,n=M.max(M.abs(d),M.abs(h)),j=1;j<n;j++)q=j/n,p.push(T(tx+U(d*q),ty+U(h*(L[2]?2*q-q*q:q)),"·",L[2]?"inactive":"text"));
  f.push({x:X,offset:o,pose:c.P(e,a,ft),props:p.concat(ex||[]),ms:ms});
}
function D(x,y,s){return T(x,y,s,BL)}
function O(x,y,s){return T(x,y,s||"●","error")}
function rip(x,i){return[D(x-i,5,"("),D(x+i,5,")")]}
function W(ms,dip,ex){F(ms,[O(bx,5,dip&&"▄")].concat(ex||[]),[bx,5,1])}
// hop point at t, h rows high
function Y(x0,y0,x1,y1,h,t){return[U(x0+(x1-x0)*t),U(y0+(y1-y0)*t-4*h*t*(1-t))]}
f=c.walk(c.x,x);

// Sit, rod out, cast.
F(150,[T(x-1,6,"·         ·","inactive")]);
for(a=Q;rn<3;)rn++,F(110);
e=RT;F(400);
r=2;a=UP;F(450,[O(x+5,3)]);
r=1;e=CL;F(50,[T(x+9,2,"≡","inactive")]);
for(r=0,e=RT,a=Q,n=bx-x-11,i=1;i<=n;i++)z=Y(x+11,2,bx,5,3,i/n),F(35,[O(z[0],z[1])],z);
W(90,0,[D(bx-1,4,"·°·")]);
for(i=1;i<3;i++)W(120,0,rip(bx,i));

// Wait, doze, nibbles, bite!
for(n=R(5,7),i=0;i<n;i++)e=i==3?CL:RT,W(i==3?120:260,i%2);
for(e=CL,n=R(9,12),i=0;i<n;i++)r=i%4<2?3:0,W(220,i%2,c.art(x+1-i%2,1-i%2,"Z\n\n  z","text"));
for(r=k=0;k<2;k++)e=CL,W(110,1,[D(bx-1,5,"· ·")]),e=k?"wink":CL,W(R(400,700));
r=4;F(90,c.art(bx-2,4," °'·\n\\   /",BL),[bx,6]);
for(e="open",k=0;k<3;k++)o=[1,-1,0][k],a=k?UP:Q,F(k?90:160,[T(x+4,G-2+o,"!","warning",{b:1}),D(bx+R(-1,1),R(3,5),"°")],[bx,6]);

// Tug-of-war.
for(n=R(3,5)*6,k=0;k<n;k++){
  j=k%6;z=j<3;fx=U(c.lerp(bx,A+2,k/n))+z;
  X=x+[1,1,0,-1,-1,0][j];e=z?RT:CL;a=z?Q:UP;r=z?4:0;
  F(z?70:110,[D(fx+R(-2,2),R(3,5),c.pick("°·'")),D(fx+R(-1,1),5,c.pick(["~","><","^"])),D(z?-9:X-1+j%2,3-j%2,"'")],[fx,6],j%2?"left":RT);
}

// Heave: the fish flops on the bank.
X=x-1;o=-1;r=1;F(90,[D(fx-1,4,"\\°/")],[fx,5]);
for(X=x,o=r=0,e=RT,a=Q,i=1;i<5;i++)z=Y(fx,5,x+10,6,3,i/4),F(60,[T(z[0],z[1],FL,FC),D(z[0]+N,z[1]+1,"·")],z);
for(i=0;i<10;i++)e=i>7?"wink":RT,F(i%2?90:130,[D(x+R(9,17),R(3,5),c.pick("·'°")),T(x+10,6-i%2,i%4<2?FL:FR,FC),O(x+11,2)]);

// Grab it, proud hops.
o=1;F(180,[T(x+10,6,FR,FC)]);
fx=x+4-H;r=1;a=UP;o=0;F(70,[T(x+6,3,FR,FC)]);
for(k=0;k<9;k++){
  for(o=-((k+3)%4<2),e=k>6?"wink":k%4<2?"open":CL,z=[T(fx-k%2,3+o,FR,FC)],j=0;j<3;j++)z.push(T(x+R(-3,12),R(0,2+o),c.pick("✦*·★"),c.rainbow(R(0,9))));
  F(k>6?600:130,z);
}

// Toss it back, farewell jump.
for(e=RT,n=M.ceil((lx-fx)/2),i=1;i<=n;i++)z=Y(fx,3,lx-H,5,3,i/n),a=i<3?UP:Q,F(45,[T(z[0],z[1],FR,FC)]);
F(110,c.art(lx-1,4,"°'°\n\\|/",BL));
for(i=1;i<3;i++)F(110,rip(lx,i));
for(i=0;i<5;i++)F(70,[T(jc-H+i,4+M.abs(i-2),FR,FC,i%4||{bg:WB})].concat(i?[]:rip(jc,1)));
for(e="wink",i=0;i<7;i++)a=i%2?Q:UP,F(150,i<5?[O(jc+4,4-i,"♥")].concat(i?[]:rip(jc+4,1)):[]);

// Rod in, pond dries up.
for(e="open",a=Q;rn;)rn--,F(90);
for(a="down";A<B-4;)A+=2,B-=2,F(50);
f.push({pose:c.P("wink"),ms:400},{pose:"default"});
return f;
});
