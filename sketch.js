const WIDTH=400;
const HEIGHT=400;
circles = [];

function setup(){
    createCanvas(WIDTH,HEIGHT);
}

function draw(){
    background('white');
    for(let i=0;i<circles.length;i++){
        fill(circles[i].c);
        //circle(circles[i].x, circles[i].y, circles[i].d);
        circles[i].draw();
        for(let j=0;j<circles.length;j++){
            if(i!=j){
                var dx = circles[i].x - circles[j].x;
                var dy = circles[i].y - circles[j].y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < circles[i].radio + circles[j].radio) {
                   // collision detected!
                   redirect(circles[i]);
                   redirect(circles[j]);
                }
            }
        }
    }
}

function mouseClicked() {
    /*let c = {
        x: mouseX,
        y: mouseY,
        d: 50,
        c: color(random(255),random(255),random(255)),
        move (){
           
        }
    };*/
    let b = new Ball(mouseX,mouseY,50,color(random(255),random(255),random(255)),3)
    redirect(b);
    circles.push(b);
  }

  function redirect(b){
    let rand = Math.floor(random(4));
    console.log(rand);
    switch (rand){
        case 0:
            b.sentidoX = true;
            b.sentidoY = true;
            break;
        case 1:
            b.sentidoX = true;
            b.sentidoY = false;
            break;
        case 2:
            b.sentidoX = false;
            b.sentidoY = true;
            break;
        case 3:
            b.sentidoX = false;
            b.sentidoY = false;
            break;
        default:
    }
  }