(function main() {
    let
        tablero = document.getElementById("contexto"),
        ejeX = document.getElementById("contenedor").offsetWidth,
        ejeY = document.getElementById("contenedor").offsetHeight,
        graficos = tablero.getContext('2d'),
        ancho = 40,
        alto = 30,
        anchoB = 10,
        altoB = 20;

    tablero.width = ejeX;
    tablero.height = ejeY;
    tablero.style.backgroundColor = "#123";
    let ubicarNave = (ejeX - ancho) / 2;
    nave = new Nave(graficos, ubicarNave, ejeX, ejeY, ancho, alto);
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 39:
                nave.moverNaveDerecha();
                break;
            case 37:
                nave.moverNaveIzquierda();
                break;
            case 32:
                let acaEstaLaNave = nave.dondeEstaLaNave() + (ancho / 2) - (anchoB / 2)
                let disparo = new Disparo(graficos, acaEstaLaNave, ejeX, ejeY, anchoB, altoB)
                disparo.dibujarDisparo()
                break;
        }
    };
    nave.dibujarNave();
})()