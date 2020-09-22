var x=200;
var y=200;
let z1=0;
let z2=0;
var score =0;
var xspeed = 2;
var yspeed = 6;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180);
  scoring();
  text("your score:"+score,100,20,100);
  text("Pong Game",150,30,100);
  
  fill(0,0,150);
  rect(0,y,20,150);
  
  fill(0,0,150);
  rect(370,mouseY,20,150);
  
  x=x+xspeed;
  y=y+yspeed;

  fill(140,0,0);
  rect(x,y,24,24);
  
  if(x<=0 || x>=400)
  { xspeed *=-1;
   console.log("balltouching the edge,x-axix"+z1);
   z1++;
  }
  
  if(y<=0 || y>=400)
  
  { yspeed *= -1;
   console.log("balltouching the edge,y-axix"+z2);
  z2++;}
  
  function scoring()
 {
   // if(y>mouseY && y<mouseY +90) &&
     // (x+10>= 375)) 
  //{
    //  xspeed *= 1;
      //yspeed *=-1;
     score++;
    }
  
  for(i=0;i<90;i++){
    line(200,48,200,380);
    stroke(255);}
  }
