// 小手調べ
function setup() {
  createCanvas(100, 100);
  
  for(let i=0; i<10; i++){
    noFill();
    let x=i*10+10
    
    if(i<5){
      stroke(0,0,255);
  
    }
    else{
      stroke(255,0,0);
      
    }
    ellipse(50,50,x);
    }
      