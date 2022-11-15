// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I am funaoka",100,100);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(260,20,200);
  stroke(260,20,200)
  rect(x, y, w + x, h + 2*y);
  triangle(w+x*2-20,h+3*y,w+x*2,h+2*y+y,w+2*x,h+2*y+y+30);
  fill(200,250,100);
  text(t, 3/2*x, h + 2*y);
}

