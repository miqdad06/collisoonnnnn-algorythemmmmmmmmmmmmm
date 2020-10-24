var fixdRect,movngRect






function setup() {
   createCanvas(1200,800);
 fixdRect= createSprite(600, 400, 50, 80);
 fixdRect.shapeColor="green";

 movngRect= createSprite(400, 200, 80, 30);
 movngRect.shapeColor="green";



}

function draw() {
  background(0,0,0);  
  movngRect.x=World.mouseX;
  movngRect.y=World.mouseY;
  
  if(movngRect.x-fixdRect.x < fixdRect.width/2 + movngRect.width/2
    && fixdRect.x-movngRect.x < fixdRect.width/2 + movngRect.width/2
    &&movngRect.y-fixdRect.y < fixdRect.width/2 + movngRect.width/2
    && fixdRect.y-movngRect.y < fixdRect.width/2 + movngRect.width/2 ){ 
    movngRect.shapeColor="red";
     fixdRect.shapeColor="red";
     }
  else{
     movngRect.shapeColor="green";
   fixdRect.shapeColor="green";
   }
  






  drawSprites();
}