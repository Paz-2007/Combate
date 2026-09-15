export class Soldado {
    nombre: string;
    vida: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.vida = 1
    }
    disparar(): void {
    }
    recbirDisparo(): void {
        this.vida -= 1;
    }
}