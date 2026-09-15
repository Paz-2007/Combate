export class tanque {
    id: number;
    vida: number;

    constructor(id: number) {
        this.id = id;
        this.vida =20;
    }
    disparar(): void {
    }
    recbirDisparo(): void {
        this.vida -= 1;
    }
}
