
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2
  console.log(ground.x);

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(225);
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  surivivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
   if (ground.x < 0){
    ground.x = ground.width/2;
   }
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -10 ;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  spawnFood();
  spawnObs();
  drawSprites();
}
function spawnFood(){
  if(frameCount % 80==0){
    banana = createSprite(200,200);
    banana.addImage("banana", bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale  = 0.1;
    banana.velocityX=-2;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
  
}
function spawnObs(){
  if(frameCount % 300==0){
    rock = createSprite(160,310,20,20);
    rock.addImage("rock", obstacleImage);
    rock.scale = 0.2;
    rock.lifetime = 500;
    
    obstacleGroup.add(rock);
  }
  
  
}




