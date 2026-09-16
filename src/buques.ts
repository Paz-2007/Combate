
export class buque {
    private _id: number;
    private _vida: number;

    constructor(id: number) {
        this._id = id;
        this._vida =20;
    }
    disparar(objetivo: buque): void {
        objetivo.recibirDisparo();
    }
    recibirDisparo(): void {
        this._vida -= 1;
    }
}
