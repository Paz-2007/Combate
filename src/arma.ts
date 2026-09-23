

export class Arma { 
    protected _municiones: number;

    constructor(_municiones:number){
        this._municiones = _municiones;
    }
get municiones(): number {
        return this._municiones
}
  disparar(): boolean {
    const puedeDisparar = this._municiones > 0; //verifica si el arma tiene municiones
    this._municiones -= puedeDisparar ? 1 : 0; //si tiene se reducen las municiones
    return puedeDisparar; //devuelve trrue si puede y false si no
}
   }

