// A plane hooks Clawd on a trapeze; he skydives, pops a striped chute, drifts down, gets buried by it and crawls out.
$cdA("parachute-drop",{title:"Skydive",w:60},function(c){
var G=c.G,T=c.T,R=c.R,mx=c.mx,i,k,ps=[],X=[],I="inactive",Y="text",O="open",C="closed",U="up",W="wink",V=["right","left"],b;
var d=c.x>mx-28?-1:c.x<28?1:c.pick([1,-1]),x=c.clamp(c.x,d<0?28:0,d>0?mx-28:mx),f=c.walk(c.x,x);
var E=V[d<0|0],B=V[d>0|0],PC=c.pick(["error","professionalBlue","chromeYellow","success"]);
var S=c.pick([["error",Y],["chromeYellow","error"],["permission",Y],0]);
var PL=d>0?["█▄▄▄▟▀▀▙▄▄▖","▀▀▀██▀▀▀▀▀▘"]:["▗▄▄▟▀▀▙▄▄▄█","▝▀▀▀▀▀██▀▀▀"];
var pc=x+4-26*d,py=-9,br=-9,inn=0,n=-1,cc,hc,hj=0,FF=R(22,28);
function sp(a,y,u,v,t,k,m,z){ps.push([a,y,u,v,t,k,m,z]);}
function dust(a,b){sp(a,6,-1,0,"·",I,3);sp(b,6,1,0,"·",I,3);}
// striped cloth row centred on cx; D(m): dome 2m+1 wide
function row(s,cx,y,p){for(var j=0,h=s.length>>1,q;j<s.length;j++)if(s[j]>" ")q=Math.abs(j-h),p.push(T(cx-h+j,y,s[j],S?S[q+1>>1&1]:c.rainbow(q)));}
function D(m){return m<1?"▄":"▗"+(m>1?"▟"+"█".repeat(2*m-3)+"▙":"█")+"▖";}
function ln(t,h,y,p){p.push(T(t+h>>1,y,t<h?"╲":t>h?"╱":"│",I));}
function H(j){return [[4,D(5),j],[5,D(6),0],[6,D(7),0]];}
// frame: particles, plane, trapeze, canopy on his hands, cloth
function F(e,a,ft,ms,o,z){
 var p=[],L=pc-5;
 o|=0;
 ps=ps.filter(function(q){p.push(T(q[0]|0,q[1]|0,q[4],q[5],q[7]));q[0]+=q[2];q[1]+=q[3];return --q[6]>0;});
 if(py>-3){
  if(br>py+1){for(k=py+2;k<br;k++)p.push(T(pc,k,"│",I));p.push(T(pc-4,br,"────┴────",I));}
  PL.forEach(function(s,r){p.push(T(L,py+r,s,PC),T(d>0?L+11:L-1,py+r,f.length&1?"│":d>0?")":"(",I));});
  if(inn)p.push(T(L+5-(d<0),py,"▄▄","clawd_body",{bg:PC}));
 }
 pc+=d;
 if(n>=0){k=G+o-2;if(n>4)row(D(3),cc,k-1,p);row(D(n),cc,k,p);ln(cc-n,x+1,k+1,p);ln(cc+n,x+8,k+1,p);}
 X.forEach(function(r){row(r[1],hc+r[2],r[0],p);});
 f.push({x:x,offset:o,pose:e.facing?e:c.P(e,a,ft),ms:ms,hide:z,props:p});
}
// a trapeze swoops in; he reaches up
for(i=0;i<26;i++){
 py=Math.min(0,(i/3|0)-3);br=py+3;
 if(i==6)sp(x+4,3,0,0,"?",Y,8);
 if(i==15)sp(x+4,3,0,0,"!","warning",5);
 F(i<6?O:B,i>14?U:0,i>17?V[i>>1&1]:0,i<15?45:5*i-30);
}
// grab! reeled up into the plane
[0,-1,-1,-2,-3,-4,-4,-5].forEach(function(o,j){
 x=pc-4;br=G+o-1;
 if(j==1)dust(x,x+8);
 F(j?j&1?W:O:C,U,j>3?V[j&1]:0,j?65:160,o,o<-4);
});
// aboard, humming; then he jumps
for(i=0;i<6;i++){inn=i<4;if(i==1)sp(pc-6*d,0,-d/2,0,"♪",Y,4);x=pc-4;F(O,0,0,90,-5,1);}
b=pc-4;
[-4,-3,-2,-1].forEach(function(o,j){x=b+(j>>1)*d;F(O,U,V[j&1],60,o);});
// freefall: tumble, spread-eagle, wind
for(i=0;i<FF;i++){
 if(py>-3&&i&1)py--;
 sp(x+R(-4,12),7,0,-1,c.pick("││'·"),"subtle",8,{z:-1});
 if(i%3==0)sp(x+R(-4,12),7,0,-2,"│",I,4,{z:-1});
 if(i==12)sp(x+1,2,0,-.5,"wheee!",Y,5);
 if(i%9==4)x+=d;
 F(i<8?{facing:"right-55 edge back left-55".split(" ")[i&3]}:i%5==4?C:O,U,V[i&1],55,i%7==3?-2:-1);
}
// ripcord: bloom and yank
F(O,"one-up",0,220,-1);
F(C,0,0,80,-1);
cc=x+4;
for(n=0;n<6;n++)F(n<3?C:O,U,0,50,-1);
n=5;
ps=[];
sp(cc-7,1,-1,0,"✦",Y,2);sp(cc+7,1,1,0,"✦",Y,2);
F(C,U,0,160,-2);
F(W,U,0,300,-2);
// sway down, whistling
for(b=x,i=0;i<18;i++){
 if(i%3==2)b+=d;
 if(i==7)sp(x+4-5*d,G-2,-d/2,-.3,"♪",Y,5);
 cc=b+4;x=b+(i<15?[0,1,1,0,-1,-1][i%6]:0);
 F([O,E,O,B,O,W][i/3|0],U,i>14?0:V[i>>1&1],200,i<8?-2:-1);
}
// touchdown; the canopy buries him
F(O,U,0,90);
n=-1;hc=cc+d;X=[[2,D(3),0],[3,D(5),0]];
dust(x-1,x+9);
F(C,0,0,110,1);
F(O,0,0,160);
X=[[3,D(4),0],[4,D(6),0],[5,"▐           ▌",0]];F(C,0,0,120);
X=H(0);F(C,0,0,350,0,1);
for(i=0;i<12;i++){
 hj=c.clamp(hj+R(-1,1),-2,2);X=H(hj);
 if(i%4==2)X.push([3,"▗▖",hj+R(-3,3)]);
 if(i==5)sp(hc-1,2,0,-.5,"mmf!",I,3);
 F(C,0,0,R(90,160),0,1);
}
// crawl out, shake off
for(i=0;i<12;i++){x-=d;X=H(0).slice(i>7);F(B,0,V[i&1],80);}
for(i=0;i<4;i++){x+=i&1?d:-d;F(C,0,V[i&1],70);}
// a gust steals the chute; shrug, wink
for(k=6,b=i=0;i<18;i++){
 if(i<6)sp(x+4-8*d,R(2,6),2*d,0,"~",I,14,{z:-1});
 if(i>4){b+=d;if(i&1)k--;}
 X=i<2?[[5,"▄".repeat(11),0],[6,"█".repeat(15),0]]:i<5?[[6,"▄".repeat(13),0]]:k>-1?[[k,"▄▀".repeat(5).substr(i&1,9),b]]:[];
 F(i<4?C:E,i>5&&i<12?"one-up":0,i==7?"left":0,i<5?140:70,i==7||i==8?-1:0);
}
F(C,0,0,300);F(W,U,0,450);
f.push({x:x,pose:"default",ms:200});
return f;
});
