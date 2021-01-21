var wall, thickness ;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83)

  speed = random(50, 90);
  weight = random(400, 1500);

  bullet = createSprite(50, 200, 50, 50);

  bullet.velocityX = speed;

  wall = createSprite(1500, 200, 60 , height/2);
  wall.shapeColor = color(80, 80, 80)
}

function draw() {
  background(240,70,240);  
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0
    var damage = 0.5*weight*speed*speed/22500
  }

  if(damage > 180){
    bullet.shapeColor = color(255,0,0)
  }
  if(damage < 100){
    bullet.shapeColor = color(0, 255, 0)
  }
  drawSprites();
}