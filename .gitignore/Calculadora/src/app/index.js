const { procesar } = require('./procesar');
const { UI } = require('./UI');


const botones = document.getElementById('botones').value;


const numero1 = document.getElementById('num1').value;
const numero2 = document.getElementById('num2').value;



async function recibirDatos(){
    const Procesar = new procesar(numero1,numero2);
    e.preventDefault();
    const datos = await Procesar.getDatos();
    const ui = new UI();
    ui.render(datos);
}






Procesar.getDatos();