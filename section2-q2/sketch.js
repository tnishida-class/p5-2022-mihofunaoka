function setup() {
  createCanvas(400, 400);
  let size = width / 8;
  noStroke();

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    
      if((i+j)%2==0) {
      
        fill(256);
      }
      else{ 
      fill(147);
       rect(i*20, j*20,20,20);
      } }
    
    for(let i = 0; i < 9; i++){
    for(let j = 0; j < 4; j++){
    
      if((i+j)%2==1) {
        fill(255,0,0);
        ellipse((i-0.5)*20,(j-0.5)*20,18);
      }
    }
      } 
   for(let i = 0; i < 9; i++){
    for(let j = 6; j < 9; j++){
    
      if((i+j)%2==1) {
        fill(2);
        ellipse((i-0.5)*20,(j-0.5)*20,18);
      }
    }
      }  
  
  }   
 }


