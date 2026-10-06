// Clawd glitches, dissolves into sparkles that rebuild him at his ghost elsewhere; a 404 stays behind; shrug.
$cdA("teleport-glitch", { title: "Glitch teleport", w: 44 }, function (c) {
var R=c.R,T=c.T,G=c.G,M=Math,Z=M.random,f=[],x=c.x,i,j,k,u,v,
 Q=["#00e6ff","#ff3cd2","#8cff5a","text"],O="clawd_body",S="subtle",I="inactive",E="error",
 rt=x<c.mx-x,d=R(14,M.min(rt?c.mx-x:x,48)),nx=rt?x+d:x-d,fw=rt?"r":"l",bk=rt?"l":"r",
 N={o:"open",l:"left",r:"right",c:"closed",w:"wink",u:"up",1:"one-up"},
 Y={o:"▛███▛█",c:"▂███▂█"},B=[T(x+4,G-1,"!","warning",{b:1})];
function rc(){return c.pick(Q)}
// sprite rows; up: arms raised
function rows(e,up){return[(up?"▗▟":" ▐")+Y[e]+(up?"▄":""),up?" ▜██████▘":"▝▜██████▀"," ▝▝   ▝▝"]}
// glitch paint: random colors on share p of (masked) cells
function gp(p,m){for(var t=[],j=0;j<27;j++)t.push(Z()<p&&(!m||m(j%9,j/9|0))?rc():void 0);return function(a,b){return t[b*9+a]}}
function hd(a,b){return a>6&&b<2}
// the raised hand pops off one row
function hs(){return[T(x+8,G-1,"▄",rc()),T(x+8,G," ",O,{o:1})]}
// scanlines; o:1 blanks cut through him
function sc(n){for(var r=[];n-->0;)r.push(T(x+R(-3,5),G+R(-1,2),Array(R(3,7)).join(c.pick("▀▄─░ ")),rc(),{o:1}));return r}
// Clawd as props, one row torn sideways
function tw(){var z=R(0,2);return rows("o").map(function(t,b){return T(x+(b==z?c.pick([-2,-1,1,2]):0),G+b,t,b==z?rc():O)})}
function gh(j){return[{x:x+j-1,color:Q[0]},{x:x+j+1,color:Q[1]}]}
// his ghost at the target, already in the arrival pose
function gs(p){return{x:nx,color:S,paint:gp(p),pose:c.P("closed","up")}}
// p: eyes+arms letters; x kept on stage
function F(p,ms,pr,ex){var o=Object.assign({x:x,pose:c.P(N[p[0]],N[p[1]]),ms:ms,props:pr||[]},ex);o.x=c.clamp(o.x,0,c.mx);f.push(o)}

// a blip, "huh?"
F("o",R(500,800));F("c",110);F("o",400);F("o",50,sc(1),{x:x+(rt?1:-1),paint:gp(.3)});F("o",450);
var q=[T(x+4,G-1,"?",I)];F("l",300,q);F("r",300,q);
// the hand glitches; shake it off
F("r1",350);
for(i=0;i<6;i++)F("r1",R(60,120),i%2?[T(x+R(7,8),G-R(1,2),"·",rc())]:hs(),{paint:gp(.8,hd)});
F("o1",350,B);for(i=0;i<6;i++)F(i%2?"c":"c1",45,0,{x:x+(i%2?1:-1)});F("o",300);
// escalate: unaware, nervous glances, flailing panic; his ghost flickers at nx
for(i=0;i<34;i++){k=i/34;var g=i%4==1||Z()<.2+.75*k,o={x:x+(j=g?R(-1,1):0),actors:[]};
 if(g){o.paint=gp(.2+.7*k);o.props=sc(R(0,1+3*k|0));if(Z()<k)o.actors=gh(j);
  if(Z()<.3*k){o.hide=1;o.props=o.props.concat(tw())}}
 if(k>.5&&Z()<.35)o.actors.push(gs(.2));
 F(k<.3?"o":k<.65?"lr"[i>>2&1]:c.pick("clr")+(i%4<2?"u":""),R(30,50)+(g?0:90*(1-k)|0),0,o)}
// he sees it, looks at us, gets zapped
F("o",250);for(i=0;i<5;i++)F(fw,i?90:500,B,{actors:i%2?[]:[gs(.25)]});
F(fw,300,0,{actors:[gs(.1)]});F("o",450);
for(i=0;i<4;i++)F("cu",40,sc(3),{x:x+(j=R(-1,1)),paint:gp(1),actors:gh(j)});
F("cu",70,0,{color:Q[3]});F("cu",60,0,{paint:gp(.4)});

// cells decay to sparkles, arc over, rebuild at nx
var cl=[],md=0,A;
rows("c",1).forEach(function(t,b){for(var a=0;a<9;a++)if(t[a]>" "){k=R(0,5)+(rt?8-a:a);md=M.max(md,k);cl.push({a:a,b:b,ch:t[a],d:k,h:R(3,G),L:M.round(d/(1+Z()*.6))})}});
function at(q,w,t,cc){var s=w/q.L;return T(M.round(x+q.a+(nx-x)*s),G+q.b-M.round(q.h*M.sin(M.PI*s)),t,cc)}
function nf(t,cc){return[T(c.x+3,G+1,t,cc)]}
for(u=0;;u++){var p=[],tr=[],D=1;
 cl.forEach(function(q,n){var w=u-q.d;
  if(w<-3)p.push(T(x+q.a,G+q.b,q.ch,Z()<.3?rc():O));
  else if(w<0)p.push(T(x+q.a,G+q.b,"▓▒░"[w+3],rc()));
  else if(w<q.L){p.push(at(q,w,"✦✧*+"[(w+n)%4],Q[(w+n)%3]));if(w)tr.push(at(q,w-1,"·",S))}
  else{A=v=w-q.L;p.push(T(nx+q.a,G+q.b,v<1?"✦":v<2?"▒":q.ch,v<5?rc():O));if(v>4)return}
  D=0});
 F("o",38,(u>md+1?nf("404",u%5?E:S):[]).concat(tr,p),{hide:1,actors:A>=0||u%3>1?[]:[gs(.1)]});if(D)break}

// frozen in the zap pose, comes to, looks back at the 404 as it fades
var o4=nf("404",E),n4=nf("404",S);x=nx;
F("cu",350,o4);F("ou",200,o4);F("o",250,o4);F(bk,700,o4);F(bk,250,n4);F("c",120,n4);
F(bk,150,nf("4·4",S));F(bk,150,nf(" · ",S));F(bk,250);
// checks the hand: fine... glitch; shrug
F("r1",550);F("w1",350);
F("r1",45,sc(1),{x:x+(rt?-1:1),paint:gp(.9,hd)});F("r1",60,hs(),{paint:gp(.9,hd)});F("r1",250);F("o",450);
var sx=c.clamp(x-1,0,c.W-11);function sh(y,cc){return[T(sx,y,"¯\\_(°_°)_/¯",cc)]}
F("ou",120,sh(G-1,I));F("cu",800,sh(G-2,Q[3]));F("o",160,sh(G-2,I));F("w",400,sh(G-3,S));F("o",300);
return f;
});
