class Ball{
    constructor(x,y,d,c,velocidad){
        this.x = x;
        this.y = y;
        this.d = d;
        this.c = c
        this.velocidad = 3;
        this.radio = this.d/2
        this.HitboxL = this.x-this.radio;
        this.HitboxR = this.x+this.radio;
        this.HitboxT = this.y-this.radio;
        this.HitboxB = this.y+this.radio;
        this.sentidoX = true;
        this.sentidoY = true;
    }

    draw(){
        stroke('black')
        fill(this.c)
        ellipse(this.x,this.y,this.d,this.d);
        this.rebotar()
    }

    rebotar(){
        /*Determinar sentido en X*/
        if(this.HitboxR >= width){
            this.sentidoX = false;
        }else if(this.HitboxL <= 0){
            this.sentidoX = true
        }

        /*Determinar sentido en Y */
        if(this.HitboxB >= height){
          //this.sentidoY = false;
          this.sentidoY = false
        }else if(this.HitboxT <= 0){
          this.sentidoY = true;
        }

        /*Movimiento en X*/
        if(this.sentidoX){
            this.x += this.velocidad;
            
        }else{
            this.x -= this.velocidad;
        }
        
        /*Movimiento en Y*/
        if(this.sentidoY){
            this.y += this.velocidad;
            
        }else{
            this.y -= this.velocidad;
        }
        this.HitboxL = this.x-this.radio;
        this.HitboxR = this.x+this.radio;
        this.HitboxT = this.y-this.radio;
        this.HitboxB = this.y+this.radio;
    }
}