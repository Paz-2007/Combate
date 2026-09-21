export class Escudo {
    private _porcentaje: number;

    constructor(porcentaje: number) {
        this._porcentaje = porcentaje;
    }

    get porcentaje(): number {
        return this._porcentaje;
    }

    calcularDaño(daño: number): number {
        return daño * (1 - this._porcentaje / 100);
    }
}
