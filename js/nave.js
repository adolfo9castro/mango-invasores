function nave(tablero, ubicacionNave, x, y, ancho, alto){
    this.tablero = tablero;
    this.ubicacionNave = ubicacionNave;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.velocidad = 10;
    this.dibujarNave = function(){
        this.tablero.fillStyle = "#0F0";
        this.tablero.fillRect(ubicacionNave, y-30, this.ancho, this.alto);
    }
    this.moverNaveDerecha = function(){
        this.tablero.clearRect(0, y-30, ubicacionNave*2, this.alto)
        this.tablero.fillStyle = "#0F0";
        this.ubicacionNave += this.ubicacionNave < this.x-this.ancho ? this.velocidad : 0;
        this.tablero.fillRect(this.ubicacionNave, y-30, this.ancho, this.alto); 
    }
    this.moverNaveIzquierda = function(){
        this.tablero.clearRect(0, y-30, ubicacionNave*4, this.alto)
        this.tablero.fillStyle = "#0F0";
        this.ubicacionNave -= this.ubicacionNave >= 10 ? this.velocidad : 0;
        this.tablero.fillRect(this.ubicacionNave, y-30, this.ancho, this.alto);        
    }

    this.dondeEstaLaNave = function(){
        return this.ubicacionNave
    }
}