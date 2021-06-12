var ground,luka;
var groundImage1
var groundImage2
var groundImage3
var crateGroup
function preload(){
groundImage1 = loadImage("IMAGES/Village.png")
lukarunning=loadAnimation("IMAGES/G1.png","IMAGES/G2.png","IMAGES/G3.png","IMAGES/G4.png","IMAGES/G5.png","IMAGES/G5.png","IMAGES/G6.png","IMAGES/G7.png","IMAGES/G8.png","IMAGES/G9.png","IMAGES/G10.png","IMAGES/G11.png","IMAGES/G12.png")
crateImg=loadImage("IMAGES/crate.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  ground =createSprite(displayWidth/2, displayHeight/2,displayWidth,displayHeight);
  iground=createSprite(displayWidth/2,displayHeight-10,displayWidth,10)
  ground.addImage(groundImage1)
  ground.scale=2.5
  ground.velocityX=-3
luka=createSprite(100,displayHeight-100,10,10)
luka.addAnimation("running",lukarunning)
crateGroup=new Group()
}

function draw() {
  background(0);  
  drawSprites();
  if(ground.x<0){
    ground.x=displayWidth/2
  }
  if(keyDown("space")){
    luka.velocityY=-8
  }
  luka.velocityY+=1
  luka.collide(iground)
  spawnCrate()
}

function spawnCrate(){
if(frameCount%200===0){
  crate=createSprite(displayWidth,displayHeight-100,10,10)
  crate.addImage(crateImg)
  crate.velocityX=-4
  crate.scale=0.5
}
}