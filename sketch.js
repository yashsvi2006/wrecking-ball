const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(200,220,50,50);
    box2= new Box(200,280,50,50);
    box3= new Box(200,300,50,50);
    box4= new Box(200,110,50,50);
    box5= new Box(200,150,50,50);
    ground=new Ground(600,390,1200,20);
    ball =new Ball(300,340,20);


    
   slingshot = new SlingShot(ball.body,{x:300, y:100});
}

function draw(){
   background("pink");
    
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ball.display();
    
    slingshot.display();    
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}



