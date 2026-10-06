// Clawd yo-yos: sleeper, walk the dog, around the world, then a tangle he has to spin out of.
$cdA("yo-yo-tricks", { title: "Yo-yo tricks", w: 46 }, c => {
let T=c.T,R=c.R,M=Math,U=M.round,G=c.G,i,k,n,q,D=R(5,8),
x=c.clamp(c.x,1,c.mx-8-D),X=x,o=0,e="open",a="down",ft,fc,fr,tg,Y,yg="●",b=[],pt=[],tr=[],
K=()=>c.rainbow(R(0,9)),C=K(),L="inactive",O="one-up",RT="right",LT="left",CL="closed",OP="open",W="wink",CY="chromeYellow",
f=c.walk(c.x,x,{ms:55}),
S=(x,y,t,cl,dx=0,dy=0,l=3)=>pt.push({x,y,t,c:cl,dx,dy,l}),
I=(p,q)=>p>=X&&p<X+9&&q>=G+o&&q<G+o+3,
// Y: yo-yo [dx,dy] from the hand; b[r]: string wrapped on body row r
F=(ms,ex=[])=>{let p=[...ex],h=G+o,ax=X+9,j,n,dx,dy,r,Z=(x,y,t,cl=L,f)=>p.push(T(x,y,t,cl,{z:-(I(x,y)&&!f)}));
 for(r=1;r<3;r++)if(b[r]<1)for(j=ax+b[r];j<=ax;j++)r>1&&[1,2,6,7].includes(j-X)||p.push(T(j,h+r,"─","text",r<2&&j>X&&j<X+8?{bg:"clawd_body"}:{}));
 if(tg)Y=[1,2],Z(ax+1,h+1,"╮");
 if(Y){[dx,dy]=Y;
  if(!dx&&dy>0)for(j=0;j<dy;j++)Z(ax,h+j,j?"│":"╮");
  else if(a!="down")for(n=M.max(M.abs(dx),M.abs(dy)),j=0;j<n;j++)Z(ax+U(dx*j/n),h+U(dy*j/n),!dx?"│":!dy?"─":"·");
  tr.map((t,j)=>Z(ax+t[0],h+t[1],"•··"[j],C));
  Z(ax+dx,h+dy,yg,C,fr)}
 pt=pt.filter(q=>q.l-->0);pt.map(q=>{p.push(T(q.x,q.y,q.t,q.c));q.x+=q.dx;q.y+=q.dy});
 f.push({x:X,offset:o,pose:fc?{facing:fc}:c.P(e,a,ft),props:p,ms})},
E=(v,ms,ex)=>{e=v;F(ms,ex)},
Q=()=>{o=1;F(150);o=0;Y=[0,1];F(40);Y=[0,2];F(50)};

// Setup
F(250);E(LT,300);E(RT,250);a=O;Y=[0,0];S(X+10,G-1,"✦",CY,1,-1,2);E(OP,220);E(W,380);e=RT;

// Sleeper: it dozes off, so does he; a tug brings it home
for(k=R(1,2);k--;){Q();
 for(i=0;i<9;i++)yg="●○"[i%2],i%3-1||S(X+10,G+1,"zZ"[i>4|0],"text",1,-1,3),E(i>4&&i<7?CL:RT,100);
 yg="●";o=-1;F(70);o=0;Y=[0,1];F(45);Y=[0,0];F(220)}

// Walk the dog
Q();[-1,1].map(d=>S(X+9+d,6,"°",L,d,0,2));
for(i=1;i<7+D;i++){if(i>6)X++,ft=i%2?LT:RT,i%3||S(X+3,G-1,"♪",K(),-1,-1,3);
 Y=[M.min(i,6),2];yg="●○"[i%2];S(X+8+Y[0],6,".",L,0,0,2);F(i>6?95:55)}
ft=0;yg="●";Y=[6,1];S(X+15,G,"♥","error",0,-1,3);E(W,110);Y=[6,2];F(110);E(RT,250);
for(i=1;i<5;i++)Y=[U(6-1.5*i),U(2-i/2)],F(35);
S(X+10,G-1,"✧",CY,1,-1,2);F(250);E(OP,450);

// Around the world, speeding up
o=1;E(RT,220);o=0;
for(i=1;i<5;i++)Y=[U(1.75*i),0],F(35);
for(n=R(2,3)*24+19,k=1;k<=n;k++){q=k*M.PI/12;tr=[Y,...tr].slice(0,1+2*k/n|0);
 Y=[U(7*M.cos(q)),-U(4*M.max(q=M.sin(q),q/2))];q=Y[0];E(q>-2?RT:q<-4?LT:OP,U(46-18*k/n))}

// Tangle: belly, then feet
tr=[];a="down";fr=1;
for(k=1;k<3;k++){for(i=3-2*k;i>-11;i-=2)Y=[i,k],b[k]=i+1,E(i>0?CL:LT,32);
 fr=0;b[k]=-10;Y=[-5,k];F(40);Y=[1,2];E(RT,40);fr=1}
tg=1;fr=0;E(OP,450,[T(X+4,G-2,"?!","warning")]);

// Tied up: wobble, bunny hops, idea
for(i=0;i<8;i++)X+=[1,-1,-1,1][i%4],i%3||S(X+(i%2?-1:9),G,"'","permission",i%2?-1:1,-1,2),E(i%2?LT:RT,90);
for(k=0;k<2;k++)[1,-1,-2,-1,0].map((v,j)=>{o=v;j-2||X++;E(v<0?CL:OP,j?60:130)});
E(CL,450);E(OP,250,[T(X+4,G-2,"!",CY)]);

// Spin free, the string flies off
tg=0;"right-12 right-30 right-55 right-75 edge back-105 back-125 back-150 back left-75 left-55 left-30 left-12".split(" ").map((v,k)=>{fc=v;
 if(k==2||k==6){q=b.length-1;for(i=-1;i<10;i+=2)S(X+i,G+q,"~",L,i<4?-1:1,R(-1,0),3);b.pop()}
 q=k*M.PI/3.5;Y=[U(6*M.cos(q))-5,1];fr=M.sin(q)>0;F(45)});
fc=fr=0;a=O;

if(R(0,1)){
 Y=[1,1];F(40);Y=[0,0];[-1,0,1].map(d=>S(X+9+d,G-1,"✦*✧"[d+1],K(),d,-1,3));
 E(W,300);[-1,-2,-1,0].map(v=>{o=v;a=v<-1?"up":O;F(70)});F(500)
}else{
 // bonk
 [[1,0],[1,-2],[0,-3],[-1,-4],[-3,-4],[-4,-3],[-5,-2]].map(v=>{Y=v;F(40)});
 o=1;Y=[-5,-1];[-1,1].map(d=>S(X+4+2*d,G,"✶",CY,d,-1,2));E(CL,220);
 Y=[-3,-1];F(50);Y=[-1,0];F(50);Y=[0,0];o=0;
 for(i=0;i<16;i++)q=i*M.PI/4,k=U(4*M.cos(q)),n=M.sin(q)>0,F(70,[T(X+4+k,G-1-n,"✦",CY),T(X+4-k,G-2+n,"·",CY)]);
 E(W,400)}
a="down";Y=0;E(OP,500);
return f});
