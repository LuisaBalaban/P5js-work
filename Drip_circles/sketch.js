let m=0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(39, 20, 217);
  noStroke()
  fill(255,10,150,100)
  translate(width/2,height/2)
  for(a=0;a<TWO_PI;a+=0.3)
  {
    r=cos(a+m+100)*100+10
    q=tan(a+m-100)*100
    fill(sin(a)*200,900,sin(m)*100,800)
    ellipse(r,q,30,cos(a)*100)
}
  m+=0.015
}
