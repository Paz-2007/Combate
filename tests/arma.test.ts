import {Arma} from "../src/arma.js";
import {describe, expect, test} from "vitest";

describe("Arma"), () => {
    test("Arma dispara y se reducen sus municiones"),() => {
        var arma1 =new Arma (10);
        expect(arma1.municiones).toBe(10); //el arma tiene 10 municiones al inicio
        arma1.disparar();
        expect(arma1.municiones).toBe(9);//el arma reduce sus municiones a 9 al disparar

    }


}
