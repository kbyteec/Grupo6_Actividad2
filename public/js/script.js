// funcion para que aparezcan los numeros en la pantalla de la calculadora
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

// para el boton C reemplaza los datos en pantalla por una cadena vacia
function borrar() {
  document.getElementById("pantalla").value = "";
}

// para operadores unarios (√, %, +/-, x²)
function operadorUnario(operador) {
  const pantalla = document.getElementById("pantalla");
  let valorActual = pantalla.value;

  // No hacer nada si la pantalla está vacía o tiene un error
  if (valorActual === "" || valorActual === "Error") {
    return;
  }

  try {
    let numero = parseFloat(valorActual);

    switch (operador) {
      // *** NUEVO CASE AÑADIDO ***
      case 'sq': // Elevar al cuadrado
        pantalla.value = Math.pow(numero, 2);
        break;
      
      case 'sqrt': // Raíz cuadrada
        if (numero < 0) {
          pantalla.value = "Error"; // Raíz de negativo no es real
        } else {
          pantalla.value = Math.sqrt(numero);
        }
        break;
      
      case 'percent': // Porcentaje
        pantalla.value = numero / 100;
        break;
      
      case 'negate': // Cambiar signo
        pantalla.value = numero * -1;
        break;
    }
  } catch {
    pantalla.value = "Error"; // Si parseFloat falla
  }
}


// para el boton = evalua las operaciones y da el valor exacto
function calcular() {
  const pantalla = document.getElementById("pantalla");
  
  // Prevenir que eval() intente procesar "Error"
  if (pantalla.value === "Error") {
      pantalla.value = "";
      return;
  }

  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}
