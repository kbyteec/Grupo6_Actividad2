// funcion para que aparezcan los numeros en la pantalla de la calculadora
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// para el boton C reemplaza los datos en pantalla por una cadena vacia
function borrar() {
  document.getElementById("pantalla").value = "";
}

// para el boton = evalua las operaciones y da el valor exacto
function calcular() {
  const pantalla = document.getElementById("pantalla");
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}
