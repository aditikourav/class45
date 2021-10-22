var bG , bGImage;

function preload(){
  bGImage = loadImage("Forest.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bG = createSprite(0,0,windowWidth,windowHeight);
  bG.addImage(bGImage);
  bG.scale = 2;
  bG.velocityX = -4;
  bG.x = bG.width/2;
}

function draw() {
  background(255,245,250); 

  if(bG.x < 0){
    bG.x = bG.width/2;
    
  }
  

  drawSprites();
}