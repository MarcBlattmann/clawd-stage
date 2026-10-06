// Tug of war: Clawd bowls out a rope, a friend grabs the far end, they sway and strain until the friend slips and Clawd wins.
$cdA("tug-of-war",{title:"Tug of war",w:50},function(c){
var f=[],W=c.W,R=c.R,P=c.P,T=c.T,pk=c.pick,O=Math.round,Z={z:-1},B={b:1},i,j,k,t,n,s=0,e=0,on=0,pt=[],
x=c.clamp(c.x,6,W-40),M=x+16,fx=x+24,E=fx+12,fc=pk(["permission","success","autoAccept"]),
Q="#c8a069",r="right",l="left",C="closed",U="one-up",D="down",V="error",I="inactive",Y="chromeYellow",N="both",pr=P(r),pl=P(l),
rp=(a,b,yf,sh)=>{for(var o=[],u=a,y,q;u<=b;u++){y=yf(u);q=u<b?yf(u+1):y;
o.push(T(u,y,q>y?"╮":q<y?"╯":Math.random()<sh?"~":"─",Q,Z));if(q!=y)o.push(T(u,q,q>y?"╰":"╭",Q,Z));if(q-y>1)o.push(T(u,y+1,"│",Q,Z))}return o},
// rope: Clawd a/ch, friend b/fh, sg slack
rq=(a,ch,b,fh,sg,sh)=>{var m=a+b+8>>1,yf=u=>u>b+9?6:sg&&u>a+11&&u<b-2?6:u>b-3?fh:ch,y=yf(m);
return rp(a+9,b+12,yf,sh).concat(T(m,y<6?y+1:6,y<6?"▼":"◆",V))},
em=(...a)=>pt.push(a),
tk=()=>(pt=pt.filter(p=>p[6]-->0)).map(p=>T(O(p[0]+=p[2]),O(p[1]+=p[3]+=.35),p[4],p[5],Z)),
rd=v=>c.rgb(215+25*(e=c.clamp(e+v,0,1)),119-55*e,87-25*e),
F=(a,co,cp,b,bo,bp,pr,ms,col)=>f.push({x:a,offset:co,pose:cp,ms,color:col,
props:(on?[3,4,6].map(r=>T(M,r,"¦","subtle",Z)):[]).concat(pr,tk()),actors:[{x:b,offset:bo,pose:bp,color:fc}]}),
H=(o,p,a,b,ms)=>F(x,o,p,W,0,pl,[T(x+a,b,"@",Q)],ms),wk=(e,i)=>P(e,(i>>1)%2?U:D,i%2?l:r);
f=f.concat(c.walk(c.x,x));
H(0,"look-right",0,-9,300);H(0,P(r,U),8,3,400);H(0,pr,9,5,80);H(1,P(C),9,6,140);
for(k=x+10;k<=E;k++){on=k>M;F(x,k<x+15|0,k<x+15?P(C):pr,W,0,pl,rp(x+9,k-1,u=>u>x+9||k<x+15?6:5).concat(on?T(M,6,"◆",V):[],T(k,6,k<E-2?"@":"o",Q)),40)}
var gr=rp(x+9,E,u=>u>x+9?6:5).concat(T(M,6,"◆",V));
n=W-fx;for(i=0;i<=n;i++)F(x,0,pr,W-i,0,wk(l,i),gr,c.clamp(1500/n|0,20,50));
F(x,0,pr,fx,0,pl,gr,250);F(x,0,pr,fx,1,P(C),gr,160);var S=rq(x,5,fx,5,1);F(x,0,P("wink"),fx,0,pl,S,350);
[..."321"].map((d,j)=>F(x,0,P(j>1?C:r),fx,0,P(j>1?C:l),S.concat(T(M,1,d,"text",B)),450));
for(t=0;t<3;t++)F(x,0,pr,fx,0,pl,rq(x,5,fx,5,0,t<2?.6:0).concat(T(M-2,1,"PULL!",Y,B)),t<2?60:250);
// tug: d>0 friend gains, d<0 Clawd gains, 0 shaking hold
var cs=(d,t,j)=>{var a=x+s+j,b=fx+s+j;
[[d>=0,a+2,-.8],[d<=0,b+6,.8]].map(w=>w[0]&&R(0,4)<2&&em(w[1],3.4,w[2],-1,"°","#78beff",6));
em(d>0?a+9:d<0?b-1:t%2?a-1:b+10,d||t%2?6:5,d?d*.6:t%2?-.5:.5,-.7,pk("·."),I,3);
F(a,0,P(d<0||t%4==0?r:C,D,d?t%2?l:r:N),b,0,P(d>0||t%4==2?l:C,D,d?t%2?r:l:N),rq(a,5,b,5,0,d?0:.3),d?R(150,200):R(50,75),rd(d<0?-.15:.1))},
d0=pk([1,-1]);
[d0*R(2,3),-d0*R(1,3),d0*R(1,2),0].map((g,q)=>{var d=Math.sign(g-s);for(t=0;s!=g;t++){s+=d;cs(d,t,0)}
for(t=0,k=pk([1,-1]);t<(q>2?14:R(4,7));t++)cs(0,t,t%2*k)});
F(x,0,pr,fx,0,pl,rq(x,5,fx,5),350,rd(0));
// slip
for(j=0;j<7;j++){var a=x-"0123345"[j],b=fx-"1233345"[j],bo="3245555"[j]-3;j>4&&em(b+9,6,.5,-.5,"·",I,3);
F(a,j==3|0,P(j>3?r:j==1?"open":C,D,j>4?j%2?l:r:N),b,bo,P(j<2?"open":C,D,j?N:r),
rq(a,5+(j==3),b,bo>0?6:5+bo,!j).concat(j<2?T(b+4,3+bo,"!","warning",B):j==3||j==4?[T(b-2,6,j<4?"░▒":"·░",I),T(b+3,4,"oof!",fc,B)]:[]),[9,8,7,16,26,15,15][j]*10,rd(-.15))}
[0,-1,-2,-1,0,0,-1,-2,-1,0,0].map((o,t)=>{if(t%5==0)for(k=0;k<9;k++)em(a+4,3,R(-12,12)/10,-R(8,16)/10,pk("*✦·•°"),c.rainbow(R(0,9)),R(4,8));
F(a,o,P(t%4?"open":"wink","up"),b,2,P(C),rq(a,6,b,6).concat([2,4,6].map((p,j)=>T(b+p,5,j==t%3?"✦":"·",Y)),T(a+2,0,"WIN!",c.rainbow(t),B)),o?70:130,rd(-.2))});
// gg
for(j=0;j<7;j++)F(a,0,pr,b,k=j<2?2-j:0,P(j<3?C:j%2?r:l),rq(a,6,b,5+(k>0)),j<3?200:120);
var g=rq(a,6,b,5);F(a,0,pr,b,0,P(l,U),g.concat(T(b+3,2,"gg",fc,B)),600);F(a,0,P("wink",U),b,0,pl,g.concat(T(a+3,2,"gg","text",B)),600);
on=0;n=W+16-b;for(i=0;i<=n;i++)F(a,0,P(r,(i>>3)%2?U:D),b+i,0,wk(r,i),rq(b+i-24,6,b+i,5),c.clamp(2000/n|0,20,50));
f.push({pose:P("wink"),ms:400},{pose:"default",ms:200});
return f});
