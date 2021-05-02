var thickness, wall
var bullet, speed, weight
var movingRect, fixedRect


function setup() {
  createCanvas(1600,400);
  background.color = color(166,166,166);

  speed = random(200,320);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,80,10);
  //bullet.shapeColor = color (255,255,255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
background(255,255,255);

if (hasCollided(bullet,wall)){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10){

wall.shapeColor = color(255,0,0);  
}


if (damage<10){

  wall.shapeColor = color(0,255,0);
}
}

drawSprites();

}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge){

    return true

  }

  return false;
}