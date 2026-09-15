export class Soldado {
    nombre: string;
    vida: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.vida = 1
    }
    disparar(objetivo: Soldado): void {
        objetivo.recibirDisparo();
    }
    recibirDisparo(): void {
        this.vida -= 1;
    }
}