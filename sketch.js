var dog,sadDog,happyDog, database,firebase;
var foodS,foodStock;
var addFood;
var foodObj;
var feed ,lastfeed



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feed=createButton("feed the dog");
  feed.position(500,95);
  feed.mousePressed(addFoods);


  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  
  FeedTime:1;
  Food:22
  
 
  //write code to display text lastFed time here
 if(lastFed>=12){
//show time in PM format when lastFed is greater than 12
 }else if(lastFed==0){
   Text("last Feed  : 12 AM",350,30)
 }else {
   //show time in AM format lastFed is greater than 12
 }
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time

}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
