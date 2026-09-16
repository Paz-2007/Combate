export class Soldado {
    private _nombre: string;
    private _vida: number;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida = 1;
    }
    disparar(objetivo: Soldado): void {
        objetivo.recibirDisparo();
    }
    recibirDisparo(): void {
        this._vida -= 1;
    }
}