import type { Soldado } from "./soldado.js";

export class tanque {
    id: number;
    vida: number;

    constructor(id: number) {
        this.id = id;
        this.vida =20;
    }
    disparar(objetivo: Soldado): void {
        objetivo.recibirDisparo();
    }
    recibirDisparo(): void {
        this.vida -= 1;
    }
}
