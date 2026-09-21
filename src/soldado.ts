export class Soldado {
    private _nombre: string;
    private _vida: number;
    private _estaVivo: boolean = true;

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
        objetivo.recibirDisparo();
        //el soldado dispara al objetivo
    }
    recibirDisparo(): void {
        this._estaVivo = false;
        //el soldado muere al recibir un disparo

    }


}

