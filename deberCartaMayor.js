"use strict"

/*Diseñar una función constructora que acepte un apodo, 
un número de vidas y un valor de carta (del 1 al 7). 
Además, se requiere incluir dos métodos como propiedades: 
uno para reducir las vidas y otro para mostrar el apodo 
junto con la cantidad de vidas restantes*/

// Función Cpnstructora
function Jugador(apodo, vidas, valorCarta) {
    this.apodo = apodo;
    this.vidas = vidas;
    this.valorCarta = validarValorCarta(valorCarta);

    // Reduccion de Vidas
    this.reducirVidas = function() {
        if (this.vidas > 0) {
            this.vidas--;
            
            console.log(`${this.apodo} perdió una Vida. Vidas Restantes: ${this.vidas}`);
        } else {
            console.log(`${this.apodo} Sin Vidas.`);
        }
    };

    // Ver Apodo y Vidas Restantes
    this.mostrarEstado = function() {
        console.log(`${this.apodo} - Vidas Restantes: ${this.vidas}, Valor de Carta: ${this.valorCarta}`);
    };

    //  Valor de la carta
    function validarValorCarta(valorCarta) {
       
        return Math.max(1, Math.min(valorCarta, 7));
    }
}


const jugador1 = new Jugador("Jonnathan", 0, 5);
const jugador2 = new Jugador("Tatiana", 2, 1); 
const jugador3 = new Jugador("Holly", 0, 4); 
const jugador4 = new Jugador("Xavier", 3, 1); 

jugador1.reducirVidas();
jugador1.mostrarEstado();

jugador2.reducirVidas();
jugador2.mostrarEstado();

jugador3.reducirVidas();
jugador3.mostrarEstado();

jugador4.reducirVidas();
jugador4.mostrarEstado();