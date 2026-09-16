import { describe, expect, test } from "vitest";

import { Soldado } from "../src/soldado.js";

describe("Soldado", () => {
    test("Cuando un soldado dispara a otro, el otro pierde una vida", () => {
        const soldado1 = new Soldado("Soldado 1");
        const soldado2 = new Soldado("Soldado 2");
        //se crean dos soldados con nombre y vida inicial de 1

        soldado1.disparar(soldado2);
        //el soldado 1 dispara al soldado 2

        expect(soldado2.vida).toBe(0);
    });
});