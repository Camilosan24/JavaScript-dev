export class Process{
    constructor(id,numero1,numero2){
        this.id = id;
        this.numero1 = numero1;
        this.numero2 = numero2;
}

    getData(option){
        let data;
        let result;
        let operation;

        switch(option){
            case 1:
                result = this.numero1 + this.numero2;
                operation = '+';
                break;
            case 2:
                result = this.numero1 - this.numero2;
                operation = '-';
                break;
            case 3:
                result = this.numero1 * this.numero2;
                operation = '*';
                break;
            case 4:
                result = this.numero1 / this.numero2;
                operation = '/';
                break;
        }

        data = {id: this.id, numero1: this.numero1, numero2: this.numero2, result: result.toFixed(1), operation: operation};
        return data;
    }
}

