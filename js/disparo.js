class Disparo {
    constructor(tablero, ubicacionDisparo, x, y, ancho, alto) {
        this.tablero = tablero;
        this.ubicacionDisparo = ubicacionDisparo;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.velocidad = 0
        this.borrarDisparo()
        this.interval
    }
    borrarDisparo(){
        clearInterval(this.interval);
        this.tablero.clearRect(this.ubicacionDisparo, 0, this.ancho, 50)
    }
    dibujarDisparo(){
        const renderDisparo = () => {
            this.velocidad += 50
            this.tablero.fillStyle = "#000";
            this.tablero.fillRect(this.ubicacionDisparo, this.y - this.velocidad, this.ancho, this.alto);
            this.tablero.clearRect(this.ubicacionDisparo, this.y - this.velocidad + (this.alto + 30), this.ancho, this.alto)
            if((this.y - this.velocidad) == 0) {
                this.borrarDisparo()
            }
        }
        this.interval = setInterval(renderDisparo, 500);

        
    }


}


    /*   this.moverDisparoDerecha = function(){
          this.tablero.clearRect(0, y-30, ubicacionDisparo*2, this.alto)
          this.tablero.fillStyle = "#0F0";
          this.ubicacionDisparo += this.ubicacionDisparo < this.x-this.ancho ? this.velocidad : 0;
          this.tablero.fillRect(this.ubicacionDisparo, y-30, this.ancho, this.alto); 
      }
      this.moverDisparoIzquierda = function(){
          this.tablero.clearRect(0, y-30, ubicacionDisparo*4, this.alto)
          this.tablero.fillStyle = "#0F0";
          this.ubicacionDisparo -= this.ubicacionDisparo >= 10 ? this.velocidad : 0;
          this.tablero.fillRect(this.ubicacionDisparo, y-30, this.ancho, this.alto);        
      }
  
      this.dondeEstaLaDisparo = function(){
          return this.ubicacionDisparo
      } */
