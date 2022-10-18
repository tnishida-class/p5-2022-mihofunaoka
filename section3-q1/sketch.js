let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
 count = (count + 1) % 70 ;
  
 
  // BLANK[1]
  let size=count;
  ellipse(width / 2, height / 2, size);

if(keyIsDown("1".charCodeAt(0))){
 count = (count + 7) % 70 ;
  size=count;
   ellipse(width / 2, height / 2, size);
}
}
  


