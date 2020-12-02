var bBi;
var bRi ;
var bGi;
var bPi;
var balloon1;
var balloon2;
var balloon3;
var balloon4;
var backgroundImage;
var backgroundSprite;
var bowSprite;
var bowImage;
var arrowImage;

function preload(){
 //load your images here 
bBi=loadImage ("red_balloon0.png") ;
 bRi=loadImage ("blue_balloon0.png") ; 
bGi=loadImage ("green_balloon0.png") ;  
 bPi=loadImage ("pink_balloon0.png") ; 
backgroundImage=loadImage("background0.png") ; 
 bowImage=loadImage("bow0.png") ;
 arrowImage=loadImage("arrow0.png") ;
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
   backgroundSprite=createSprite(0,0,600,600);
 backgroundSprite.addImage(backgroundImage);
 backgroundSprite.scale=2.5;
  
// console.log(backgroundSprite.width);
//  backgroundSprite.velocityX=-3;
  
  bowSprite=createSprite(380,200);  
 bowSprite.addImage(bowImage);
 bowSprite.scale=1.5; 
 

  for(var y=60;y<390;y=y+60){
    balloon1=createSprite(60,y,1,1);
    balloon1.addImage(bBi);
    balloon1.scale=0.1
  }
  
    for(var i=110;i<390;i=i+60){
    balloon2=createSprite(100,i,10,10) 
     balloon2.addImage("blue_balloon0",bRi)
    balloon2.scale=0.1
  }  
  for(var a=130;a<350;a=a+60){
    balloon3=createSprite(130,a,10,10); 
    balloon3.addImage("green_balloon0",bGi)
    balloon3.scale=0.1
  }    
   for(var z=180;z<250;z=z+60){
    balloon4=createSprite(180,z,10,10) 
     balloon4.addImage("pink_balloon0",bPi)
    balloon4.scale=0.1
  }  
}

function draw() {

  //add code here
 //background("white") 
  backgroundSprite.velocityX=-3;
  if(backgroundSprite.x<0) {
    backgroundSprite.x=backgroundSprite.width/2
  }
 // if(KeyDown("space")){
  //  arrow();
//  }
  bowSprite.y=World.mouseY;
  
 drawSprites() ;
  
}
function arrow(){
 // var arrowSprite=createSprite(380,200,0,0)
// arrowSprite.addImage("arrow0",arrowImage) 
//  arrowSprite.y=bowsprite.y
 // arrowSprite.velocityX=-6;
//  arrowSprite.scale=5;
}
