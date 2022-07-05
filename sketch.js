var mar, seaImg;
var barco, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimantion("ship-2.png");
}

function setup(){
createCanvas(400,400);

barco=createSprite(100,250,);
barco.addAnimation("movingShip", shipImg1);
barco.scale=0.6;

mar=createSprite(400,200,);
mar.addImage(seaImg);
}

function draw() {
background("blue");

if (mar.x<0){
mar.x = mar.width/2;
}
mar.velocityX=-2; 

drawSprites();
}


