// Clawd steps into a portal, the years spin back, he pops out in sepia with top hat and monocle, then warps home.
$cdA("time-machine",{title:"Time machine",w:44},function(c){
var R=c.R,T=c.T,G=c.G,M=Math,A=M.round,V=c.hsv,L=c.lerp,P=c.pick,k,j,q,
d=c.x>c.mx-15?-1:c.x<15?1:P([1,-1]),x=c.clamp(c.x,d>0?0:15,c.mx-(d>0?15:0)),cx=x,px=x+4+14*d,lx,
l="left",r="right",N={o:"open",c:"closed",w:"wink",t:d>0?r:l,a:d>0?l:r,u:"up",1:"one-up",l:l,r:r},
hu=R(0,359),hs=1,sa=.75,fr=0,pa=-1,pb=0,ph=0,fc=0,ht=0,mo=0,lf=0,sp=0,lm=0,mi=0,hi=0,yt=0,yc,ss=[],
S="#cda069",Hd={hide:1},Zb={z:-1},Y="chromeYellow",B={b:1},X="text",U="subtle",O="clawd_body",
D=[0,1,1,1,0,-1,-1,-1],y0=2026,y1=R(1850,1912),f=c.walk(c.x,x);
// swirl round (px,4); fr: far half in front; fc: clock face
function po(){var r=[],u,v,q,n,a=pa+.5,b=pb+.5;ph++;
if(!pa)r.push(T(px,4,"·✦✧*"[ph%4],Y));
if(pa>0)for(v=-pb;v<=pb;v++)for(u=-pa;u<=pa;u++)if((q=M.sqrt(u*u/a/a+v*v/b/b))<=1){n=(M.atan2(v*2,u)/M.PI/2+60+q*.7-ph*.08)%1;
r.push(T(px+u,4+v,fc&&q<.6?" ":q<.15?"●":q<.6?" ·*"[n*3|0]:"░▒▓"[n*3|0],V(hu+(q*90+n*70)*hs,sa,1),{o:1,z:fr&&u*d>0?0:-1}))}
if(fc){r.push(T(px-3,4,"·     ·",X),T(px,4,"●",X,B));[[hi,1,Y],[mi,2,X]].forEach(function(h){var i=(h[0]%8+8)%8,e=D[(i+6)%8];for(var m=1;m<=(e?1:h[1]);m++)r.push(T(px+D[i]*m,4+e,"|/─\\"[i%4],h[2],B))})}
yt&&r.push(T(px-2,1,""+yt,yc,B));return r}
function H(a,y){var h="#7d6e82";return[T(a+1,y,"███",h),T(a,y+1,"▄   ▄",h),T(a+1,y+1,"▀▀▀","error",{bg:h})]}
// s: eyes,arms,feet; adds swirl, lamp, hat, monocle, grain
function F(s,ms,pr,o){o=o||{};var e=N[s[0]],y=o.offset|0,i=R(0,c.W-1),k=7,z=po().concat(ht?H(cx+2,G-2+y+lf):[],
lm?[T(lx,2,"▗█▖",lm>1?Y:U)].concat(c.art(lx,3," ║\n ║\n ║\n▄█▄",lm>1?S:U)):[],mo?[T(cx+(e==r?7:6),G+y,"○",Y,B)]:[],pr||[]);
if(sp){z.push(T(R(0,c.W-1),R(0,3),P("·'.,"),U,Zb));if(R(0,4)<1&&ms<200)while(k--)z.push(T(i,k,"│",U,Zb))}
f.push(Object.assign({x:cx,ms:ms,pose:c.P(e,N[s[1]]||"down",N[s[2]]||"both"),color:sp?S:O,props:z},o))}
function Q(t,l){return[T(cx+4,ht?1:G-1,t,l||X,B)]}
function wp(j){return function(a){return(d>0?a>=8-j:a<=j)?O:S}}
// spark tears open
F("o",R(300,700));pa=0;F("o",150);F("o",130);F("t",400,Q("!","warning"));F("t",150);
for(k=1;k<6;k++){pa=k;pb=k>>1;F(k<4?"t":"cu",k<4?90:110,0,{offset:-(k==4)})}
for(k=0;k<12;k++)F(k==6?"c":"t",80,k>7?Q("?"):0);
// tiptoe, glow on his face
for(k=0;k<5;k++){cx+=d;F("td"+"rl"[k%2],R(110,170))}
q={paint:function(a){return(d>0?a>5:a<3)?V(hu,.45,1):void 0}};
F("t",500,0,q);F("o",350);F("w",450);F("c",250,0,q);F("t",200,0,q);
// step in
fr=1;for(k=0;k<9;k++){cx+=d;F("td"+"rl"[k%2],80,k>3?[T(px,G+R(0,2),"✦",X)]:0,k>3?q:0)}
fr=0;F("t",70,[T(cx+4-2*d,G,"✧",X),T(cx+4-3*d,G+1,"·",Y)],Hd);
// clock runs back, years roll
sa=0;F("o",60,0,Hd);sa=.75;fc=1;
for(j=R(36,46),k=0;k<j;k++){q=k/(j-1);mi--;k%3||hi--;hu+=9;yt=A(y0+(y1-y0)*(1-M.cos(M.PI*q))/2);yc=V(hu+180,.4,1);
R(0,4)&&ss.push({u:4,y:R(0,6),s:P([-1,1]),t:Array(R(3,5)).join(P("─═≡~"))});
ss=ss.filter(function(s){return(s.u+=2)<c.W});
F("o",A(120-90*M.sin(M.PI*q)),ss.map(function(s){return T(s.s>0?px+s.u:px-s.u-s.t.length+1,s.y,s.t,V(hu+s.u*6,.6,1))}),Hd)}
sa=fc=0;yc=S;F("o",80,0,Hd);
// pops out in sepia, hat, monocle
hu=30;hs=.15;sa=.45;sp=ht=mo=1;
for(j=0;j<10;j++){cx=px-4-d*j;pa=M.max(2,5-(j>>1));pb=pa>>1;F("au",50,j<2?[T(px,4,"✸",X,B)]:0,{offset:-A(2.5*M.sin(M.PI*j/9))})}
lx=d>0?cx-4:cx+10;
F("cd",110,[T(cx-1,6,"·",U),T(cx+9,6,"·",U)],{offset:1});lm=1;F("o",90);lm=2;F("o",R(500,800));
// when am I? monocle pops; hat tip
F("a",450);F("c",90);F("a",350);F("t",500,Q("?"));F("o",150);F("a",300,Q("?"));F("t",400,Q("?!",Y));
mo=0;for(k=0;k<5;k++)F(k>2?"o1":"o",k>3?400:60,[T(cx+ +"78998"[k],G-"12211"[k],"○",Y,B)]);
mo=1;F("c",250);lf=-1;F("c1",550,[T(cx+1,1,"✧",Y)]);lf=0;F("o",350);
// snap back: hat sucked in, colour returns
pa=3;sa=.6;hs=.6;F("t",120,Q("!","warning"));pa=4;pb=2;sa=.75;hs=1;ht=mo=0;yc=X;
for(j=0;j<12;j++){q=M.min(j/9,1);hu+=15;yt=A(y1+(y0-y1)*q);if(j==6)lm=1;if(j==9)lm=sp=0;
F(j<9?"tu":"t",j<9?70:150,(j<9?H(A(L(cx+2,px-2,q)),A(L(G-2,3,q)-1.5*M.sin(M.PI*q))):[]).concat(j<8?[T(A(L(cx+6,px,M.min(q*1.2,1))),G+(j>3),"○",Y,B)]:[]),{paint:wp(j)})}
for(k=0;k<5;k++){pa=3-k;pb=+(k<2);if(k>3)yc=U;F("t",k>3?200:80)}
yt=0;F("o",300);F("ou",300,Q("?"));F("c",110);F("w",500);F("o",300);
return f});
