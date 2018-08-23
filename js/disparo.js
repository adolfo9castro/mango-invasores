function disparo(tablero){   
    this.tablero = tablero;
    this.ancho = 5;
    this.alto = 15;
    this.velocidad = -10;
    this.dibujarDisparo = (xDeNave, y) => {
        this.x = xDeNave;
        this.y = y;
        this.tablero.fillStyle = "#F00";
        while(this.y > 0){
            this.y += this.velocidad
            this.tablero.fillRect(this.x , this.y - 35, this.ancho, this.alto);
        }
    }
}