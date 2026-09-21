import { describe, expect, test } from "vitest";
import { Escudo } from "../src/escudo.js";

describe("Escudo", () => {
    test("un escudo del 50% reduce el daño a la mitad", () => {
        const escudo = new Escudo(50);

        const daño = escudo.calcularDaño(1);

        expect(daño).toBe(0.5);
    });
});
