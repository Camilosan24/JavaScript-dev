import { UI } from './UI.js';
import { Process } from './Process.js';
import { Store } from './Store.js';

const div = document.getElementById('resultados');
const store = new Store();
const ui = new UI(div);
const commit = document.getElementById('commits');
window.onload = ui.allRender(store.getLocalStorage());


//agregar elementos
document.getElementById('botones').addEventListener('click',(e)=>{

    const numero1 = parseInt(document.getElementById('num1').value);
    const numero2 = parseInt(document.getElementById('num2').value);
    const option = parseInt(e.target.value);

    if(!isNaN(numero1) && !isNaN(numero2)){

        const id = store.getId();
        const process = new Process(id,numero1,numero2);
        const result = process.getData(option);
        store.addLocalStorage(result);
        ui.addRender(result);
        commit.innerHTML=`<div class="btn btn-block btn-success text-center">Datos Procesados</div>`;

        setTimeout(()=>{
            commit.remove();
            location.reload(true);
        },3000)
        e.preventDefault();

    } else{
        commit.innerHTML=`<div class="btn btn-block btn-danger text-center">Datos invalidos</div>`;

        setTimeout(()=>{
            commit.remove();
            location.reload(true);
        },3000)
        e.preventDefault();
    }
})

div.addEventListener('click',(e)=>{

    const eliminar = confirm('Esta seguro de eliminar esta elemento?')
    if(eliminar){
        ui.deleteRender(e);
        store.deleteLocalStorage(e);
        commit.innerHTML=`<div class="btn btn-block btn-danger text-center">Elemento eliminado</div>`;
        setTimeout(()=>{
            commit.remove();
            location.reload(true);
        },3000)
        e.preventDefault();
    }
})



