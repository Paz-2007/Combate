import {describe, expect, test} from "vitest";
import { buque } from "../src/buques.js";
import { Escudo } from "../src/escudo.js";

describe("Buque"), () => {
    test("Buque no muere cuando recibe un disparo gracias al escudo",) => {
        var buque1 = new buque('Buque 1'); 
        expect(buque1.estaVivo).toBe(true);
        var buque2 = new buque('Buque 2');
        expect(buque2.estaVivo).toBe(true);

        var escudo = new Escudo(100);
        buque1.tomarEscudo(escudo);
        buque2.disparar(buque1);
        expect(buque1.estaVivo).toBe(true);

    }
}