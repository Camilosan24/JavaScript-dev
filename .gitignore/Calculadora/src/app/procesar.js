export class procesar{
    constructor(numero1,numero2){

        this.suma = numero1 + numero2;
        this.resta = numero1 - numero2;
        this.multi = numero1 * numero2;
        this.divi = numero1 / numero2;
    }

    getDatos(){
        const datos = [
            {numero1,numero2},
            {suma,divi,multi,resta}
        ];

        return datos;
    }
}

