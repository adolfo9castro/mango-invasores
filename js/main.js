(function main(){
    let 
        tablero = document.getElementById("contexto"),
        ejeX = document.getElementById("contenedor").offsetWidth,
        ejeY = document.getElementById("contenedor").offsetHeight,        
        graficos = tablero.getContext('2d'),
        ancho = 40,
        alto = 30;       
    
    tablero.width= ejeX; 
    tablero.height= ejeY;
    tablero.style.backgroundColor="#123";
    let ubicarNave = (ejeX - ancho) / 2;
    nave = new nave(graficos, ubicarNave, ejeX, ejeY, ancho, alto);
    //disparo = new disparo(graficos)
    document.onkeydown=function(e){       
        switch(e.keyCode){
            case 39:
                nave.moverNaveDerecha();
            break;
            case 37:
                nave.moverNaveIzquierda();
            break;  
            case 32:
                let seconds = new Date().getSeconds();
                console.log(seconds)               
                let acaEstaLaNave = nave.dondeEstaLaNave()-1 + (ancho/2)
                initDisparo(graficos, acaEstaLaNave, ejeY)
                //disparo.dibujarDisparo(acaEstaLaNave, ejeY)
            break;              
        }
    };
    nave.dibujarNave();    
})()