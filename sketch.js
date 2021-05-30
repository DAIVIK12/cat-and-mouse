var cat,mouse;






function preload() {
catimg1=loadAnimation("images/cat1.png")
catimg2=loadAnimation("images/cat2.png","images/cat4.png")
mouseimg1=loadAnimation("images/mouse1.png")
mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
backgroundimg=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,600);
    backgroundbg=createSprite(500,350,500,600)
backgroundbg.addImage(backgroundimg)

    cat=createSprite(700,450,50,50)
cat.addAnimation("cat",catimg1)
mouse=createSprite(200,450,50,50)
mouse.addAnimation("mouse",mouseimg1)
cat.scale=0.2
mouse.scale=0.1


}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x < cat.width/2-mouse.width/2 &&
mouse.x-cat.x < cat.width/2-mouse.width/2 ){
    cat.velocityX=0
cat.addAnimation("catRunning",catimg2)
cat.changeAnimation("catRunning",catimg2)
mouse.velocityX=0
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code her
if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseimg2)
mouse.changeAnimation("mouseTeasing",mouseimg2)
mouse.frameDelay=25
}

if(keyCode===RIGHT_ARROW){
    mouse.velocityX=2
}



}
