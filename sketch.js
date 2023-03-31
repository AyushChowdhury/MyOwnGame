var bg,ground;
var arrow,arrowImg
var bow,bowImg
var chain,chainImg
var player
var obst1,obst1Img
var option1,option2,option3,option4;
var option1img,option2img,option3img,option4img;
var floor;
var ground,groundImg;
//var background;
var gameState = 0;
var PLAY = 1;
var END = 2;
var SERVE = 0;
var score = 0;
var obstGroup;

function preload(){
  bg = loadImage("image/Background.jpg")
  arrowImg = loadImage("image/Arrow.jpg")
  bowImg = loadImage("image/Bow.jpg")
  chainImg = loadImage("image/chain-saw.jpg")
  option1img = loadImage("image/player1.png")
  option2img = loadImage("image/player2.png")
  option3img = loadImage("image/player3.png")
  option4img = loadImage("image/player4.png")
  obst1Img = loadImage("image/monster_08.png")
  floor=loadImage("image/floor.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ground = createSprite(width/2,height-50,width+60,height/4)
  ground.addImage(floor);
  ground.scale=0.8;

  option1 = createSprite(100,height/2,10,30);
  option1.addImage(option1img);
  option1.scale = 0.7;

  option2 = createSprite(width/4+100,height/2,10,30);
  option2.addImage(option2img);
  option2.scale = 0.7;

  option3 = createSprite(width/2+100,height/2,10,30);
  option3.addImage(option3img);
  option3.scale = 0.7;

  option4 = createSprite(width-150,height/2,10,30);
  option4.addImage(option4img);
  option4.scale = 0.7;
  
  obstGroup = new Group()
}

function draw() {
  background(bg);

  if(gameState === 0){

    textSize(30);
    fill("white");
    text("Choose a player from these options",width/2-200,height/8);

    if(mousePressedOver(option1)){
      option2.destroy()
      option3.destroy()
      option4.destroy()
      gameState = 1;
      option1.x = width/4+50;
      option1.y = height/2+100
    }

    else if(mousePressedOver(option2)){
      option1.visible = false;
      option3.visible = false;
      option4.visible = false;
      gameState = 1;
      option2.x = width/4+50;
      option2.y = height/2+100
    }
    
    else if(mousePressedOver(option3)){
      option1.visible = false;
      option2.visible = false;
      option4.visible = false;
      gameState = 1;
    }
  
    else if(mousePressedOver(option4)){
      option1.visible = false;
      option2.visible = false;
      option3.visible = false;
      gameState = 1;
    }
  } 

 if(gameState === 1){
    // move bg just like trex game
    ground.velocityX = -10;

    if(ground.x< 580){
      ground.x = width/2;
    }

    // change position of options

    textSize(30)
    fill("white")
    text("Score : "+score,width/2,50)

    //call the functions 

     spawnPlayer();

     if(obstGroup.isTouching(option1)||obstGroup.isTouching(option2)||obstGroup.isTouching(option3)||obstGroup.isTouching(option4)){
      score = score+ Math.round(frameRate()/60)
     }

  }
  
 

  drawSprites();
}
function spawnPlayer(){
  if(frameCount%600 === 0){
      obst1 = createSprite(width+10,height/2+100,20,50)
      obst1.addImage(obst1Img)
      obst1.velocityX=-3
      obst1.scale = 0.8
      obstGroup.add(obst1)
  }
}