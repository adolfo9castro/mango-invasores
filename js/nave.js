class Nave {
    constructor(tablero, ubicacionNave, x, y, ancho, alto) {
        this.tablero = tablero;
        this.ubicacionNave = ubicacionNave;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.velocidad = 10;        
    }
    dibujarNave() {
        this.tablero.fillStyle = "#0F0";
        this.tablero.fillRect(this.ubicacionNave, this.y - 30, this.ancho, this.alto);
    }
    moverNaveDerecha() {
        this.tablero.clearRect(0, this.y - 30, this.ubicacionNave * 2, this.alto)
        this.tablero.fillStyle = "#0F0";
        this.ubicacionNave += this.ubicacionNave < this.x - this.ancho ? this.velocidad : 0;
        this.tablero.fillRect(this.ubicacionNave, this.y - 30, this.ancho, this.alto);
    }
    moverNaveIzquierda() {
        this.tablero.clearRect(0, this.y - 30, this.ubicacionNave * 4, this.alto)
        this.tablero.fillStyle = "#0F0";
        this.ubicacionNave -= this.ubicacionNave >= 10 ? this.velocidad : 0;
        this.tablero.fillRect(this.ubicacionNave, this.y - 30, this.ancho, this.alto);
    }

    dondeEstaLaNave() {
        return this.ubicacionNave
    }
}