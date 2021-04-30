const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;


function preload(){
 

}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

 
}

function draw() {
  background("black");  
  Engine.update(myEngine);

  
  
  }

 /* function keyPressed()
  {
    if(keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y},
        {x:0.5,y:0});
     
    }


  }*/