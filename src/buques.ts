
export class buque {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean = true;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida =3;
        this._estaVivo = true;
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
}
