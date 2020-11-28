const Engine = Matter.Engine;
const Bodies= Matter.Bodies
const World= Matter.World
const Constraint = Matter.Constraint;

var score=0
function setup() {
  var canvas=createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  land1 = new Ground(300,285,210,10)
  //First Level
  block1=new Box(215,260,30,40)
  block2=new Box(245,260,30,40)
  block3=new Box(275,260,30,40)
  block4=new Box(305,260,30,40)
  block5=new Box(335,260,30,40)
  block6=new Box(365,260,30,40)
  block7=new Box(395,260,30,40)
//Second Level
  block8=new Box(245,220,30,40)
  block9=new Box(275,220,30,40)
  block10=new Box(305,220,30,40)
  block11=new Box(335,220,30,40)
  block12=new Box(365,220,30,40)
//Third Level
  block13=new Box(275,180,30,40)
  block14=new Box(305,180,30,40)
  block15=new Box(335,180,30,40)
//Last Level
  block16=new Box(305,140,30,40)

 ball=new Ball(100,250,20)
launcher=new Launcher(ball.body,{x:100,y:250})

ground=new Ground(400,400,800,20)
}

function draw() {
  background("black"); 
  noStroke();
  textSize(35) 
  fill("white")
  text("Score " + score, width-300, 50)
  Engine.update(engine);
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  ball.display()
  launcher.display()
  land1.display()
  ground.display()

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}
function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(ball.body,{x:200,y:50})
     launcher.attach(ball.body);
  }
}

    