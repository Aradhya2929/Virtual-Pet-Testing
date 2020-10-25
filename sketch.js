//Create variables here
var dog;
var dogIMG;
var happyDog;
var happyDogIMG;
var database;
var foodS;
var foodStock;
function preload()
{

  //load images here
  dogIMG=loadImage("C:\Users\Aradhya\Downloads\dogImg.png")
  happyDogIMG=loadImage("C:\Users\Aradhya\Downloads\dogImg1.png")
}

function setup() {
  database= firebase.database();
  createCanvas(500, 500);
  dog=createSprite(100, 100, 100,100);
  dog.addImage(dogIMG);
  
  
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here
  if(KeyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogIMG);
  }

}



