import type { Escudo } from "./escudo.js";

export class buque {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean = true;
    private _tieneEscudo: boolean = false;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida =3;
        this._estaVivo = true;
    }
    get estaVivo(): boolean{
    return this._estaVivo;
    }

 set estaVivo(value: boolean) {
    this._estaVivo = value;
 }

    disparar(objetivo: buque): void {
        objetivo.recibirDisparo();
    }
    
    recibirDisparo(): void {
        this._vida -= 1;
        if (this._vida <= 0) {
            this._estaVivo = false;
        }
    }
    
    tomarEscudo(escudo: Escudo): void {
    this._tieneEscudo = true;
    //el soldado toma un escudo
    }
}
