var database;
var position;

function setup() {
  createCanvas(800,400);

  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value", readPosition, showError)
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function updateHeight(x, y){
  database.ref('balloon/height').set({
    'x' : height.x+x,
    'y' : height.y+y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showError(){
  console.log("error in the code");
}