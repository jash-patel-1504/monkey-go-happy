
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500)
  monkey=createSprite(100,350,10,10);
monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.2;
  
  ground=createSprite(600,410,1200,10);
  ground.velocityX=-10
  ground.x=ground.width/2
  
  
  FoodGroup=new Group()
  obstacleGroup=new Group()
  
  score=0;
}


function draw() {
background("cyan");
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
 
  monkey.velocityY = monkey.velocityY + 0.8
 if(ground.x<0){
   ground.x=ground.width/2
 } 

  spawnFood();
  spawnObstacles();
  
 monkey.collide(ground) 
  drawSprites();
  textSize(20)
  text("score : "+score,500,50)
}

function spawnFood(){
  if (frameCount%60===0){
  banana=createSprite(600,180,10,10);
  banana.addAnimation("photo",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-10;
  banana.lifetime=50;
  monkey.depth=banana.depth+1;
    FoodGroup.add(banana)
      }
}

function spawnObstacles(){
  if (frameCount%60===0){
  obstacle=createSprite(600,370,10,10);
  obstacle.addAnimation("rock",obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-15;
  obstacle.lifetime=50;
  
    
  }
}


 
  