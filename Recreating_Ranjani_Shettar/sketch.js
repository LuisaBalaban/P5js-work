function setup() {
  createCanvas(400, 400);
}
let angle=0;
let bangle=90;
function draw() {
  background(242, 233, 208);
  let offsetY=0;
  let offsetX=1;
  for(x=0;x<width/2;x+=10)
  {
    fill(181, 154, 0,70)
    stroke(181, 154, 0,70)
    a=angle+offsetY;
    b=bangle+offsetX;
    y=map(sin(a)/7*cos(a),-1,1,90,height)
    z=map(sin(a)/7*cos(a)*2,-1,1,5,height)
     ellipse(x*2,y,10,10)
    ellipse(x*1.3,z,10,10)
    ellipse(x*1.5,z*1.1,9,9)
    ellipse(x*3.7,z,10,10)
    ellipse(x*2.7,z*1.2,14,14)
    ellipse(x*1.7,z*2.4,15,10)
    ellipse(x*1.9,z*9,10,10)
    ellipse(z/2,y*5,50,50)
    ellipse(x*2,z*21,9,9)
    ellipse(x*1.9,z*19,10,10)
    ellipse(x*2,z*1.2,20,20)

    
    for(i=30;i<80;i+=5)
    {
      fill(209, 156, 71,30)
      stroke(209, 156, 71,i)
      ellipse(x*2,z*1.1,15,15)
      ellipse(x*7,z*1.2,10,10)
      ellipse(x*3,z*1.3,10,10)
      ellipse(x*5,z*1.2,25,25)
    
    }
    fill(252, 186, 3,90)
    stroke(252, 186, 3,90)
    ellipse(x*7,y-z+x+100,20,20)
    ellipse(x*2,y-19,20,20)
    ellipse(x*2,cos(b)*z-a,20,20)
    ellipse(x*6,-sin(a)*z,10,10)
    
    //entire wave movement
    // m=map(sin(b)/8,1,9,100,height)
    //  for(j=0;j<1;j+=0.1)
    // {
    //   fill(241, 255, 82,70)
    //  stroke(241, 255, 82,70)
    //  ellipse(x+z,z*j,10,10)
    // }
    
    offsetY+=0.2;
    offsetX+=0.018;}
 angle+=0.062;
 bangle+=0.09;
  
}