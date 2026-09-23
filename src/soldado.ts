import type { Escudo } from "./escudo.js";
import type {Arma} from "../src//arma.js"; 


export class Soldado {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean = true;
    private _tieneEscudo: boolean = false;
    private _tenerArma: Arma | null = null;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida = 1;
        this._estaVivo = true;
        //se inicializa la vida del soldado en 1
    }

    
    get estaVivo(): boolean {
        return this._estaVivo;
    }

    set estaVivo(value: boolean) {
        this._estaVivo = value;
    }
    
    disparar(objetivo: Soldado): void {
    if (this._tenerArma != null) {
        if (this._tenerArma.disparar()) {
            objetivo.recibirDisparo();
        }
    }
}
    recibirDisparo(): void {
        this._estaVivo = false;
        //el soldado muere al recibir un disparo

    }

    tomarEscudo(escudo: Escudo): void {
        this._tieneEscudo = true;

        //el soldado toma un escudo
    }

     tomarArma(arma:Arma): void {
        this._tenerArma= arma;
    }
   
}

