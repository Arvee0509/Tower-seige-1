var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var  polygon;
var slingshot;
let img;
function preload(){
  img1=loadImage('polygon_img');
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  block1=new Block(120,235,30,40);
  block2=new Block(150,235,30,40);
  block3=new Block(180,235,30,40);
  block4=new Block(210,235,30,40);
  block5=new Block(240,235,30,40);
  block6=new Block(270,235,30,40);
  block7=new Block(300,235,30,40);
  block8=new Block(330,235,30,40);
  block9=new Block(360,235,30,40);
  block10=new Block(390,235,30,40);
  block11=new Block(420,235,30,40);
  block12=new Block(450,235,30,40);
  block13=new Block(480,235,30,40);
  block14=new Block(510,235,30,40);
  block15=new Block(540,235,30,40);
  block16=new Block(570,235,30,40);
  polygon=createSprite(100,235,30,40);

  World.add(world,polygon);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}