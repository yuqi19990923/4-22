let x;
let y;

function setup() {
   createCanvas(500, 500);
   x=200
   y=200
    }
function draw() {
    background(200,0,0,10);
    x=x+10
    y=y+10
    if(y>height){
      y=0
    }
    if(x>width){
      x=0
    }
    fill(255,255,random(255));
    noStroke();
    for(let i=0; i<7; i++) {
       circle(i*100,i*100,random(50));
    }
      

}
