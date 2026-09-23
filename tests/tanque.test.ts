import { describe, expect, test } from "vitest";

import {tanque} from "../src/tanque.js";
import { Escudo } from "../src/escudo.js";


describe("Tanque"), () => {
    test("Tanque mmuere cuando recibe 2 disparo", () => {
        var tanque1 = new tanque("Tanque 1");
        //se crea un tanque con nombre y vida inicial de 2
        var tanque2 = new tanque("Tanque 2");
        //se crea un tanque con nombre y vida inicial de 2
        expect (tanque1.estaVivo).toBe(true);
        //el tanque 1 esta vivo al inicio
        expect (tanque2.estaVivo).toBe(true);
        //el tanque 2 esta vivo al inicio

        tanque2.disparar(tanque1);
        //el tanque 2 dispara al tanque 1
        expect(tanque1.estaVivo).toBe(true);
        //el tanque 1 sigue vivo despues de recibir un disparo
        tanque2.disparar(tanque1);
        //el tanque 2 dispara al tanque 1
        expect(tanque1.estaVivo).toBe(false);
        //el tanque 1 muere despues de recibir 2 disparos
    });
}

describe("Tanque"), () => {
    test('Tanque con escudo no muere cuando recibe un disparo'), () => {
        var tanque1 = new tanque("Tanque 1");
        expect(tanque1.estaVivo).toBe(true); //el tanque 1 esta vivo al inicio
        var tanque2 = new tanque("Tanque 2");
        expect(tanque2.estaVivo).toBe(true); //el tanque 2 esta vivo al inicio

        var escudo = new Escudo(100); //se crea un escudo con porcentaje de 100%
        tanque1.tomarEscudo(escudo); //el tanque 1 toma el escudo
        tanque2.disparar(tanque1);
        //el tanque 2 dispara al tanque 1
        expect(tanque1.estaVivo).toBe(true); //el tanque 1 sigue vivo despues de recibir un disparo gracias al escudo
    }

}
