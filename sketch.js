
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(50,500,30,50);
  monkey.addAnimation("running",monkey_running);
monkey.scale=0.2;
  
  ground=createSprite(300,580,1200,40);
  ground.shapeColor="lightblue";

 FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
background("lightgreen");
    ground.velocityX=-3;
  if(ground.x<0){
     ground.x=ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-17;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  spawnBanana();
  spawnObstacle();
  monkey.collide(ground);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);

  drawSprites();
  
}
function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(600,300,10,10);
    banana.velocityX=-3;
    banana.y=Math.round(random(120,400));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=200;
    FoodGroup.add(banana);
  }
}
function spawnObstacle(){
    if(frameCount%200===0){
    obstacle=createSprite(600,540,10,10);
    obstacle.velocityX=-3;
    
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.lifetime=200;
    obstacleGroup.add(obstacle);
  }
}




