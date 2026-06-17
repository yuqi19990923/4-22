let x;
// let y;

function setup() {
   createCanvas(1800, 1000);
    x=0
    y=0
    }
function draw() {
    background(220);
    x=x+20;
    if(x>width){
       x=0;
    }


    //  y=y+1;
    circle(x,y,50);
    textSize(200,200);
    textAlign(CENTER,CENTER);
    text("川﨑瑞生",width/2,height/2);

    }