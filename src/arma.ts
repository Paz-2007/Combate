

export class Arma { 
    protected _municiones: number;

    constructor(_municiones:number){
        this._municiones = _municiones;
    }
get municiones(): number {
        return this._municiones
}
   disparar(): boolean{
    if(this._municiones>0){
        this._municiones=this._municiones-1;
        return true;
    }
    return false;
   }
}
