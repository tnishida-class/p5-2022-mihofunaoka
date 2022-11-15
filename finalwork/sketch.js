// 最終課題を制作しよう

function setup() {
  createCanvas(400, 400);
  
  let color=[[0,0,255],[255,0,0],[0,255,0],[250,100,50],[50,200,200],[200,100,200],[50,200,0],[20,250,250]]
  check(color)
  balloon("global culture IT",100,100);
 }



function check(color){ 
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2==0) {
      
        fill(0);
      }
      else{ 
      fill(color[j][0], color[j][1], color[j][2]);
       rect(i*size, j*size,size,size);
      } }
    
    for(let i = 0; i < 9; i++){
    for(let j = 0; j < 4; j++){
    
      
    }
    } 
  }
  
  
}


function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  
  fill(234,210,52);
  stroke(250,60,60)
  rect(x, y, w + x, h + 2*y);
  triangle(w+x*2-20,h+3*y,w+x*2,h+2*y+y,w+2*x,h+2*y+y+30);
  fill(250,60,60);
  text(t, 3/2*x, h + 2*y);

}

