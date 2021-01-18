const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0
function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1= new Ground(800,300,400,20);
    ground2= new Ground(400,350,400,20);
    box1 = new Box(760,200,70,70);
    box2 = new Box(890,200,70,70)
    box3 = new Box(700,200,70,70);
    box4 = new Box(920,240,70,70)
   box5 = new Box(760,240,70,70);
   //creating other level
   box6= new Box(400,300,70,70);
   box7 = new Box(350,300,70,70);
   box8 = new Box(330,310,70,70);
   box9 = new Box(340,200,70,70)
   box10 = new Box(460,200,70,70);
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Slingshot(bird.body,{x:300, y:50});
}

function draw(){
    background("grey");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    textSize(20)
    text("score="+score,800,50)
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    
    ground.display();
    ground1.display();
    ground2.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
 
   
    bird.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){  
    slingshot.fly();
}