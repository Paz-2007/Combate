

import { describe, expect, test } from "vitest";

import {tanque} from "../src/tanque.js";


describe("Tanque"), () => {
    test("Tanque mmuere cuando recibe 2 disparo", () => {
        var tanque1 = new tanque("Tanque 1");
        //se crea un tanque con nombre y vida inicial de 2
        var tanque2 = new tanque("Tanque 2");
        //se crea un tanque con nombre y vida inicial de 2
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


