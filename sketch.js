var asciiValues = [];
var allChar =[];

function setup() {

  createCanvas(1600,400);

  

}

function draw() {
  background(200);
  
  spawnAlphabets()

  drawSprites();
}

  function spawnAlphabets(){

     if(frameCount % 10 === 0){


        var num = Math.round( random(32,126));
        asciiValues.push(num)
        var showChar = String.fromCharCode(num);
        var x = random(0,width);
        var y = 50;
        fill(0)
        textSize(40)
        /*
        text(showChar,x,y);
        setInterval(function(){
          y=y+0.5
          fill(0)
          textSize(40)
          for(var i=0;i<asciiValues.length;i++){
             text(showChar,x,y);
          }
          clearTimeout() 
        },100)
        */
        allChar.push(showChar);
        console.log(showChar);

        for(var i=0;i<allChar.length;i++){
          for(var j=0;j<width;j++){
            for(var k=0;k<height;k++){
              text(allChar[i],j,k)
            }
          }
        }


     }

  }

  
  function keyPressed(){
    for(var i = 0;i<asciiValues.length;i++){
    
      if(keyCode === asciiValues[i]){
        asciiValues.splice(i,1);
      }

    }
  }