

export class tanque {
    private _id: number;
    private _vida: number;

    constructor(id: number) {
        this._id = id;
        this._vida = 10;
    }
    disparar(objetivo: tanque): void {
        objetivo.recibirDisparo();
    }
    recibirDisparo(): void {
        this._vida -= 1;
    }
}

