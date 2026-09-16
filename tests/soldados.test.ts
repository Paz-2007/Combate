import { describe, expect, test } from "vitest";

import { Soldado } from "../src/soldado.js";


describe("Soldado"), () => {
    test("Soldado mmuere cuando recibe un disparo", () => {
        var soldado1 = new Soldado("Soldado 1");
        //se crea un soldado con nombre y vida inicial de 1
        var soldado2 = new Soldado("Soldado 2");
        //se crea un soldado con nombre y vida inicial de 1
        soldado2.disparar(soldado1);
        //el soldado 2 dispara al soldado 1
        soldado1.estaVivo(soldado1);
        //se verifica si el soldado 1 esta vivo
        expect(soldado1.estaVivo(soldado1)).toBe(false);
    });
}



