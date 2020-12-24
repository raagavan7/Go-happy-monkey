var PLAY=1;
var END=0;
var gameState=1;

var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup,Food
var score,banana
var ground,invisibleground;
var survivaltime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug=true;
  
  ground=createSprite(400,355,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  score=0;
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  
  background(255);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if (keyDown("space")){
    monkey.velocityY=-18;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
monkey.collide(ground);
  
  Obstacle();
  Food();
  drawSprites();
  
  stroke("black");
  textSize(15);
  fill("black");
  text("Score:"+score,20,30);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivaltime,250,30);
  
}

function Obstacle(){
  
  if (frameCount % 300 === 0){
    var obstacle = createSprite(400,333,20,20);
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifetime=70;
    
    obstacleGroup.add(obstacle);
  }
  
}

function Food() {
  
  if (frameCount % 80 === 0) {
    banana = createSprite(400,250,40,10);
    banana.y = random(120,200);    
  banana.velocityX = -3
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
     banana.addImage(bananaImage);
     banana.scale=0.08;
    FoodGroup.add(banana);
  }
}