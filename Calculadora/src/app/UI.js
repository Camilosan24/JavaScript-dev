export class UI{

    constructor(div){
        this.div = div;
    }

    addRender(data){

        const div = this.div;
        let result = data.result;
        const newElement = document.createElement('div')
        newElement.innerHTML=`
        <div class="row mb-4 btn-primary rounded" value="1">
            <div class="col-md-3 text-center">
                <label class="mt-1">Numero 1</label><br/>
                <label class="">${data.numero1}</label>
            </div>
            <div class="col-md-1 text-center">
            <label class="mt-1"></label><br/>
            <label class="">${data.operation}</label>
        </div>
            <div class="col-md-3 text-center">
                <label class="mt-1">Numero 2</label><br/>
                <label class="">${data.numero2}</label>
            </div>
            <div class="col-md-2 text-center btn-secondary">
                <label class="mt-1">Resultado</label><br/>
                <label class="">${result}</label>
            </div>
            <div class="col-md-3 text-center">
                <button type="submit" class="btn btn-block btn-danger mt-2" value="${data.id}">Borrar</button>
            </div
        </div>
        `;

        div.appendChild(newElement);

    }

    allRender(results){
        const div = this.div;

        results.forEach(result => {
            this.addRender(result);
        });

    }

    deleteRender(e){
        const element = e.target.parentElement.parentElement.parentElement;
        element.remove();
    }
}