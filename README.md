# Grupo6_Actividad2
Este repositorio contiene la actividad 2 de grupo 6 de la asignatura de Aplicaciones Web
🧮 CALCULADORA ESPECIAL
Proyecto desarrollado para la asignatura: Aplicación de Tecnologías Web
Universidad de las Fuerzas Armadas – ESPE
Grupo 6 — Noviembre 2025

----------------------------------------------------------
📘 DESCRIPCIÓN DEL PROYECTO
La Calculadora ESPEcial es una aplicación web que permite realizar operaciones aritméticas básicas y unarias 
(raíz cuadrada, porcentaje, cambio de signo y potencia cuadrada). 
El proyecto fue desarrollado utilizando HTML5, Bootstrap 5 para el diseño responsivo y JavaScript para la lógica funcional.

----------------------------------------------------------
🎯 OBJETIVOS DEL PROYECTO
- Aplicar los fundamentos de JavaScript en el manejo de eventos y manipulación del DOM.
- Implementar Bootstrap para crear una interfaz limpia, accesible y adaptable.
- Desarrollar una aplicación funcional que ejecute operaciones matemáticas sin recargar la página.
- Reforzar la comprensión del modelo cliente y la programación en el navegador.

----------------------------------------------------------
🧩 TECNOLOGÍAS UTILIZADAS
HTML5 ............. Estructura base del documento.
Bootstrap 5 ........ Sistema de rejilla, botones y diseño adaptable.
JavaScript (ES6) ... Control lógico, manejo de eventos y cálculos.
CSS ................ Estilos personalizados (archivo estilo.css).

----------------------------------------------------------
## 💻 Estructura del proyecto

```bash
📂 Calculadora-ESPEcial/
├── index.html
├── script.js
├── css/
│   └── estilo.css
├── public/
│   ├── img/
│   │   └── fondo.jpg
│   └── vendor/
│       └── bootstrap-5.3.8-dist/
└── README.md
```

----------------------------------------------------------
🧠 LÓGICA DE JAVASCRIPT

1. Función agregar(valor)
Agrega el número u operador presionado al campo de texto 'pantalla'.

function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

[Espacio para imagen: vista de la calculadora al ingresar números]

----------------------------------------------------------
2. Función borrar()
Limpia la pantalla, permitiendo reiniciar el cálculo.

function borrar() {
  document.getElementById("pantalla").value = "";
}

[Espacio para imagen: demostración del botón “C”]

----------------------------------------------------------
3. Función operadorUnario(operador)
Gestiona operaciones unarias como elevar al cuadrado, raíz cuadrada, porcentaje y cambio de signo.

function operadorUnario(operador) {
  const pantalla = document.getElementById("pantalla");
  let valorActual = pantalla.value;
  if (valorActual === "" || valorActual === "Error") return;
  try {
    let numero = parseFloat(valorActual);
    switch (operador) {
      case 'sq': pantalla.value = Math.pow(numero, 2); break;
      case 'sqrt': pantalla.value = numero < 0 ? "Error" : Math.sqrt(numero); break;
      case 'percent': pantalla.value = numero / 100; break;
      case 'negate': pantalla.value = numero * -1; break;
    }
  } catch {
    pantalla.value = "Error";
  }
}

[Espacio para imagen: ejemplo de operación √ o x²]

----------------------------------------------------------
4. Función calcular()
Evalúa la expresión completa mediante eval() y muestra el resultado.

function calcular() {
  const pantalla = document.getElementById("pantalla");
  if (pantalla.value === "Error") pantalla.value = "";
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}

[Espacio para imagen: resultado de una operación completa]

----------------------------------------------------------
🧱 INTEGRACIÓN CON HTML
Los botones de la calculadora están enlazados con las funciones JavaScript mediante el atributo onclick.

<button class="btn btn-primary" onclick="agregar('7')">7</button>
<button class="btn btn-dark" onclick="borrar()">C</button>
<button class="btn btn-warning" onclick="calcular()">=</button>

[Espacio para imagen: fragmento del HTML mostrando los botones y su vínculo con las funciones JS]

----------------------------------------------------------
📱 INTERFAZ DE USUARIO
La interfaz fue construida con Bootstrap 5, utilizando contenedores, filas y columnas para garantizar una disposición responsive.  
Los botones usan clases contextuales (btn-primary, btn-info, btn-warning) para mejorar la accesibilidad.

[Espacio para imagen: interfaz completa en modo escritorio]
[Espacio para imagen: interfaz en vista móvil o responsiva]

----------------------------------------------------------
🧩 MEJORAS FUTURAS
- Añadir historial de operaciones.
- Implementar teclas del teclado.
- Agregar temas de color personalizables.
- Incluir una función de memoria (M+, M-, MR).

----------------------------------------------------------
👨‍💻 AUTORES
Grupo 6 – Universidad de las Fuerzas Armadas ESPE
- Betún Vergara Issac Geovanny
- Díaz Chávez Diego Roberto
- Enríquez Sánchez Cristina Belén
- Haro Velasco María José
- Morales Velasco Marcos Moisés

----------------------------------------------------------
📚 REFERENCIAS
- Bootstrap Documentation v5.3: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- MDN Web Docs – JavaScript Guide: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide
- W3Schools – JavaScript Functions: https://www.w3schools.com/js/js_functions.asp

----------------------------------------------------------
NOTA:
Agrega tus capturas de pantalla en la carpeta 'img' del proyecto y reemplaza los espacios [Espacio para imagen: ...]
por enlaces o nombres de archivo correspondientes.
