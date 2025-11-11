function calcular(operacion) {
    // 1. Obtener los elementos de la interfaz por su ID
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    // 2. Obtener los valores de los inputs y convertirlos a números
    // Usamos parseFloat para permitir números decimales.
    const numero1 = parseFloat(inputNum1.value);
    const numero2 = parseFloat(inputNum2.value);

    // Variable para almacenar el resultado
    let resultado = 0;

    // 3. Validar si los valores son números válidos (opcional, pero buena práctica)
    if (isNaN(numero1) || isNaN(numero2)) {
        inputResultado.value = "Error: Ingrese números válidos";
        // Salir de la función si hay un error
        return; 
    }

    // 4. Realizar la operación usando una estructura switch
    switch (operacion) {
        case '+':
            // Suma: operador aritmético de adición (+)
            resultado = numero1 + numero2; 
            break;
        case '-':
            // Resta: operador aritmético de sustracción (-)
            resultado = numero1 - numero2;
            break;
        case '*':
            // Multiplicación: operador aritmético de multiplicación (*)
            resultado = numero1 * numero2;
            break;
        case '/':
            // División: operador aritmético de división (/)
            // Manejo de la división por cero
            if (numero2 === 0) {
                inputResultado.value = "Error: División por cero";
                return; 
            }
            resultado = numero1 / numero2;
            break;
        default:
            // Manejo de operación no reconocida
            inputResultado.value = "Error: Operación no válida";
            return;
    }

    // 5. Mostrar el resultado en el input de resultado
    // Usamos toFixed(2) para limitar a dos decimales, si es necesario.
    inputResultado.value = resultado.toFixed(2);
}

/**
 * Función para limpiar los campos de entrada y el resultado.
 */
function limpiar() {
    // Limpia y restablece los valores de los inputs
    document.getElementById('numero1').value = '0';
    document.getElementById('numero2').value = '0';
    document.getElementById('resultado').value = '0';
    console.log("Campos de la calculadora limpiados.");
}
