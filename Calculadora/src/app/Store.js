export class Store{

    addLocalStorage(result){
        const results = this.getLocalStorage();
        results.push(result);
        localStorage.setItem('results',JSON.stringify(results));
    }

    getLocalStorage(){

        if(localStorage.getItem('results') == null){
            //crear arreglo
            let results = [];
            return results;
        } else {
            //obtener arreglo de objetos almacenados
            let results = JSON.parse(localStorage.getItem('results'));
            return results;
        }
    }

    getId(){
        let id = this.getLocalStorage();


        if(id.length == 0){
            id = 1;
            return id;
        } else {
            let ultimo = id.length-1;
            let idLast = id[ultimo].id;
            idLast += 1;
            return idLast;
        }
    }

    deleteLocalStorage(e){
        const id = parseInt(e.target.value);
        const results = this.getLocalStorage();
        const indexed = results.findIndex(res => res.id == id);
        results.splice(indexed,1);
        localStorage.setItem('results',JSON.stringify(results));
    }

}