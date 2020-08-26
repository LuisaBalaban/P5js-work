function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
   for(x=50;x<height-45;x+=10)
 { 
   stroke(255,153,0);
   line(x,50,x,height-3*height/4)
 }
  for(x=50;x<height-45;x+=10)
{ 
 
 stroke(255,0,0);
  line(x,150,x,height-2*height/4)
}
  
  for(x=50;x<height-45;x+=10)
{ 
 
  stroke(50, 168, 82);
  line(x,300,x,height/2+height/4)
}
  for(x=50;x<height-45;x+=10)
{ 
 
  stroke(0,0,0);
  line(x,450,x,height+height/4-200)
}
  for(b=50;b<height-45;b+=10)
  {
    if(b<height/4)
    { stroke(255,153,0)
     line(50,b,width-50,b) }
    else if(b<height/2)
    {
      stroke(255,0,0)
       line(50,b,width-50,b) 
    }
    else if(b<height/4+height/2)
    {
      stroke(50, 168, 82)
       line(50,b,width-50,b) 
    }
    else
    {
      stroke(0,0,0);

   line(50,b,width-50,b) 
  }
  }
  
  
}