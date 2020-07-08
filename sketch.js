var bulletCar, wall;
var speed, weight;
var thikness;

function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);
  bulletCar = createSprite(50,200,50,50);
  wall = createSprite(1100,200,thikness,height/2);
  speed = random(50,300);
  weight = random(30,52);
  thikness = random(22,83);
}

function draw() {
background(255,255,255);  
bulletCar.velocityX = speed;
wall.shapeColor= color(80,80,80);
//thikness = random(22,83);
if(hasCollided(bulletCar,wall)){
  bulletCar.velocityX= 0;
  var deformation=0.5* weight * speed* speed/(thikness* thikness* thikness);
  if(deformation>10){
    wall.shapeColor= color(255,0,0);
  }

  if(deformation<100){
    wall.shapeColor= color(0,255,0);
  }
}
  drawSprites();
}
function hasCollided(bulletCar,wall){
    bulletCarRightEdge= bulletCar.x+ bulletCar.width;
    wallLiftEdge = wall.x;
  if(bulletCarRightEdge>=wallLiftEdge){
    return true;
  }
    return false;
}