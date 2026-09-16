export class Soldado {
    private _nombre: string;
    private _vida: number;

    constructor(nombre: string) {
        this._nombre = nombre;
        this._vida = 1; 
        //se inicializa la vida del soldado en 1
    }
    disparar(objetivo: Soldado): void {
        objetivo.recibirDisparo();
        //el soldado dispara al objetivo
    }
    recibirDisparo(): void {
        this._vida -= 1;
        //se le resta 1 a la vida del soldado
    }
    estaVivo(soldado: Soldado): boolean {
        return soldado._vida > 0;
        //se verifica si el soldado esta vivo
    }
}

