class UI{
    constructor(){
        this.division = document.getElementById('resultados');
    }

    render(datos){

        this.division = document.createElement('div').innerHTML=`
        <div class="row">
            <div class="col-4">
                <label class="btn-block">Numero 1</label>
                <label class="btn-block">${datos[0].numer1}</label>
            </div>
            <div class="col-4">
                <label class="btn-block">Numero 2</label>
                <label class="btn-block">${datos[0].numer2}</label>
            </div>
            <div class="col-4">
                <label class="btn-block">Resultado</label>
                <label class="btn-block">${datos[0].resultado}</label>
            </div>
        </div>
        `;
    }
}