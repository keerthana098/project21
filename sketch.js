var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(10,200,40,10,speed,weight);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "blue";

  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background('black');  

  thickness = random(22,83);

  bullet.velocityX = speed;

  if(bullet.isTouching(wall)){
    bullet.shapeColor = "green";
    bullet.velocityX=0;

  }
  drawSprites();
}