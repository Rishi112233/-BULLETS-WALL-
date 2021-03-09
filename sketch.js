var bullet,wall;

var speed, weight,thickness;

var damage;

function setup() {
  createCanvas(1600,400);
  thickness =random(22,83);
  bullet =createSprite(50, 200, 100, 10);
  bullet.shapeColor ="grey";
  wall =createSprite(1500,200,thickness,height/2) 
 
 speed   =random(50,100);
weight   =random(30,52);
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);

if (hasCollided (bullet,wall))
 {
 
     damage =0.5 *weight*speed*speed/(thickness*thickness*thickness)

     if(damage>10)
  {
      wall.shapeColor=color(255,0,0) ;
  }

     if(damage<10)
  {
     wall.shapeColor=color(0,255,0)
  }

}

drawSprites();
}

function hasCollided(wall,bullet)
  {
  if ( wall.x-bullet.x<(bullet.width+wall.width)/2)
   {
     bullet.velocityX=0;
  return true;
   }
     else
     { 
         return false; 
  
     }
   } 



