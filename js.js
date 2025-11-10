console.log('si cargaa')

//captura valores

let num1 = document.getElementById("txt_numero_uno");
let num2 = document.getElementById("txt_numero_dos");
let btnCalcular = document.getElementById("bnt_calcular");

//evento 
btnCalcular.addEventListener("click", sumar);
//funcion sumar             
function sumar(){
    let resultado = parseFloat (num1.value) + parseFloat (num2.value);
    alert("la respuesta es: " + resultado);
}