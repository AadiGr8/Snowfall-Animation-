const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint; 

var snow = [];
var snow;
var snowImg;
var girl, girlImg;
var boy, boyImg;
var maxSnow = 5;

function preload() {
  snowImg = loadImage("snow1.jpg");
  boyImg = loadAnimation("6.png","7.png","8.png");
  girlImg = loadAnimation("2.png","3.png","4.png");

}


function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;

  if(frameCount%150===0) {

    for(var i=0; i<maxSnow; i++) {
     snow.push(new Snow(random(0,1600), random(0,300)));
   
   }
  }


  boy = createSprite(300,600,20,20);
  boy.addAnimation("faltu",boyImg);
  boy.frameDelay = 4;
  boy.scale=2;
  
  girl = createSprite(1300,600,20,20);
  girl.addAnimation("fake",girlImg);
  girl.frameDelay = 6;
  girl.scale=2;

}

function draw() {
  background(snowImg);  
  drawSprites();
  
  Engine.update(engine);

  for(var i=0; i<maxSnow; i++){
    snow[i].display();
    snow[i].updateY();

  }

  drawSprites();
}