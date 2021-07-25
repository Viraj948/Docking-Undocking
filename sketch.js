var iss_img,b_img,space1_img,space2_img,space3_img,space4_img;
var spacecraft,iss;
var hasDocked=false;
function preload() {
  iss_img=loadImage("iss.png");
  b_img=loadImage("spacebg.jpg");
  space1_img=loadImage("spacecraft1.png");
  space2_img=loadImage("spacecraft2.png");
  space3_img=loadImage("spacecraft3.png");
  space4_img=loadImage("spacecraft4.png");
}
function setup() {
  
createCanvas(600,350);
spacecraft=createSprite(285,240);
 spacecraft.addImage(space1_img);
 spacecraft.scale=0.15

 iss= createSprite(330,130);
 iss.addImage(iss_img)
 iss.scale=0.25;

 
}

function draw() {
  background(b_img);
  spacecraft.addImage(space1_img)
if(!hasDocked){
  
spacecraft.x=spacecraft.x+ random (-1,1)
  if(keyDown("right_arrow")){
    spacecraft.addImage(space3_img);
    spacecraft.x=spacecraft.x+2
  
  }
  if(keyDown("left_arrow")){
    spacecraft.addImage(space4_img);
    spacecraft.x=spacecraft.x-1
  
  }
  if(keyDown("up_arrow")){
   
 
  spacecraft.y=spacecraft.y-2
  }
  if(keyDown("down_arrow")){
    spacecraft.addImage(space2_img);
    //spacecraft.y=spacecraft.y+1
 
}
}
if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked=true
 textSize(25);
 fill ("white");
 text ("DOCKING SUCCESSFUL !!",200,300)
}



  
  
  
 



  drawSprites();
  
}
