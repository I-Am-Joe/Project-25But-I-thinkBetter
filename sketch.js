var Paper,Paper_img,groundSprite
var BoxSide1, BoxSide2
var BoxSideImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	BoxSideImg = loadImage("sprites/dustbingreen.png");
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	Paper = new PaperClass(50,300,70);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 Paper.display();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
	}
}


