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
    r=cos(a+m+100)*100
    q=sin(a+m-100)*100
    z=tan(a+m)*10-190
    fill(sin(a)*250,z,sin(m)*100,100)
    circle(r,q,100,(sin(a)*100))
}
  m+=0.002
  
}
