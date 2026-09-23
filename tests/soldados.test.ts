import { describe, expect, test } from "vitest";

import { Soldado } from "../src/Soldado.js";
import { Escudo } from "../src/escudo.js";
import {Arma} from '../src/arma.js';
import { Pistola } from "../src/pistola.js";
import { Rifle } from "../src/rifle.js";

describe("Soldado"), () => {
    test("Soldado mmuere cuando recibe un disparo de pistola", () => {
        var soldado1 = new Soldado("Soldado 1");
        expect(soldado1.estaVivo).toBe(true);
                //se crea un soldado con nombre y vida inicial de 1
        var soldado2 = new Soldado("Soldado 2");
        expect(soldado1.estaVivo).toBe(true);
        //se crea un soldado con nombre y vida inicial de 1

        
        soldado2.tomarArma(new Pistola());

        soldado2.disparar(soldado1);
        //el soldado 2 dispara al soldado 1
        expect(soldado1.estaVivo).toBe(false);
    });
}

describe("Soldado"), () => {
    test("Soldado mmuere cuando recibe un disparo de rifle", () => {
        var soldado1 = new Soldado("Soldado 1");
        expect(soldado1.estaVivo).toBe(true);
                //se crea un soldado con nombre y vida inicial de 1
        var soldado2 = new Soldado("Soldado 2");
        expect(soldado1.estaVivo).toBe(true);
        //se crea un soldado con nombre y vida inicial de 1

        
        soldado2.tomarArma(new Rifle());

        soldado2.disparar(soldado1);
        //el soldado 2 dispara al soldado 1
        expect(soldado1.estaVivo).toBe(false);
    });
}

describe("Soldado"), () => {
    test('Soldado con escudo no muere cuando recibe un disparo'), () => {
        var soldado1 = new Soldado("Soldado 1");
        expect(soldado1.estaVivo).toBe(true); //el soldado 1 esta vivo al inicio
        var soldado2 = new Soldado("Soldado 2");
        expect(soldado2.estaVivo).toBe(true); //el soldado 2 esta vivo al inicio

        var escudo = new Escudo(100); //se crea un escudo con porcentaje de 100%
        soldado1.tomarEscudo(escudo); //el soldado 1 toma el escudo
        soldado2.disparar(soldado1); //el soldado 2 dispara al soldado 1
        expect(soldado1.estaVivo).toBe(true); //el soldado 1 sigue vivo despues de recibir un disparo gracias al escudo
    }
}


