const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, hero, monster, fly;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;
var box31, box32, box33, box34, box35, box36, box37, box38, box39, box40;
var heroImg, monsImg, bg;

function preload() {
  //preload the images here
  bg = loadImage('images/GamingBackground.png');
  heroImg = loadImage('images/Superhero-01.png');
  monsImg = loadImage('images/Monster-01.png');
}

function setup() {
  createCanvas(2000, 1200);
  engine = Engine.create();
  world = engine.world;

  var c1 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c2 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c3 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c4 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c5 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c6 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c7 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c8 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c9 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);
  var c10 = random(['silver', 'yellow', 'red', 'green', 'blue', 'purple', 'gold', 'lightgreen', 'orange', 'grey']);

  // Create all sprites here

  ground = new Ground(700, height - 200, 1400, 30);
  hero = new Hero(300, 360, 220, 120, heroImg);
  monster = new Monster(1200, 660, 380, 380, monsImg);
  fly = new Fly(hero.body, {x:300, y:50});

  box11 = new Box(600, -100, c10);
  box1 = new Box(600, 0, c1);
  box2 = new Box(600, 100, c2);
  box3 = new Box(600, 200, c3);
  box4 = new Box(600, 300, c4);
  box5 = new Box(600, 400, c5);
  box6 = new Box(600, 500, c6);
  box7 = new Box(600, 600, c7);
  box8 = new Box(600, 700, c8);
  box9 = new Box(600, 800, c9);
  box10 = new Box(600, 900, c10);

  box12 = new Box(685, 100, c9);
  box13 = new Box(685, 200, c8);
  box14 = new Box(685, 300, c7);
  box15 = new Box(685, 400, c6);
  box16 = new Box(685, 500, c5);
  box17 = new Box(685, 600, c4);
  box18 = new Box(685, 700, c3);
  box19 = new Box(685, 800, c2);
  box20 = new Box(685, 900, c1);

  box25 = new Box(770, 330, c4);
  box26 = new Box(770, 380, c8);
  box27 = new Box(770, 430, c3);
  box28 = new Box(770, 480, c1);
  box29 = new Box(770, 530, c9);
  box30 = new Box(770, 580, c10);

  box33 = new Box(855, 200, c1);
  box34 = new Box(855, 300, c7);
  box35 = new Box(855, 400, c4);
  box36 = new Box(855, 500, c6);
  box37 = new Box(855, 600, c8);
  box38 = new Box(855, 700, c5);
  box39 = new Box(855, 800, c9);
  box40 = new Box(855, 900, c10);

}

function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();
  hero.display();
  monster.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

}


function mouseDragged() {
  Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}

