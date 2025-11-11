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

<img width="213" height="332" alt="image" src="https://github.com/user-attachments/assets/a3400bb0-1f7a-4de5-aed1-2782677fe6cd" />

----------------------------------------------------------
2. Función borrar()
Limpia la pantalla, permitiendo reiniciar el cálculo.

```javascript
function borrar() {
  document.getElementById("pantalla").value = "";
}
```
<img width="213" height="332" alt="image" src="https://github.com/user-attachments/assets/20aa70af-db54-49df-b70e-359d9e9ce385" />

----------------------------------------------------------
3. Función operadorUnario(operador)
Gestiona operaciones unarias como elevar al cuadrado, raíz cuadrada, porcentaje y cambio de signo.
```javascript
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
```
<img width="215" height="257" alt="image" src="https://github.com/user-attachments/assets/53be1317-f687-43a4-9ce6-13f607091f1a" />
<img width="217" height="257" alt="image" src="https://github.com/user-attachments/assets/a6ff2364-118a-499a-9496-5d830b5fa3b1" />


----------------------------------------------------------
4. Función calcular()
Evalúa la expresión completa mediante eval() y muestra el resultado.
```javascript
function calcular() {
  const pantalla = document.getElementById("pantalla");
  if (pantalla.value === "Error") pantalla.value = "";
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = "Error";
  }
}
```
<img width="201" height="241" alt="image" src="https://github.com/user-attachments/assets/0687d25a-0027-485c-8d58-8c2fa4ae1394" />
<img width="200" height="238" alt="image" src="https://github.com/user-attachments/assets/c2fc70e2-3fcb-4f70-b1df-b54824cf949e" />


----------------------------------------------------------
🧱 INTEGRACIÓN CON HTML
Los botones de la calculadora están enlazados con las funciones JavaScript mediante el atributo onclick.
```html
<button class="btn btn-primary" onclick="agregar('7')">7</button>
<button class="btn btn-dark" onclick="borrar()">C</button>
<button class="btn btn-warning" onclick="calcular()">=</button>
```
<img width="442" height="53" alt="image" src="https://github.com/user-attachments/assets/3e93c272-c3bf-467f-be10-b0f05a6f0bb3" />
<img width="442" height="226" alt="image" src="https://github.com/user-attachments/assets/aa3b2c2b-6ef7-43d9-b517-924a720aa538" />

----------------------------------------------------------
📱 INTERFAZ DE USUARIO
La interfaz fue construida con Bootstrap 5, utilizando contenedores, filas y columnas para garantizar una disposición responsive.  
Los botones usan clases contextuales (btn-primary, btn-info, btn-warning) para mejorar la accesibilidad.

<img width="442" height="226" alt="image" src="https://github.com/user-attachments/assets/ba8b92ce-80e1-4e03-a52f-86c4b6c0b687" />
<img width="216" height="334" alt="image" src="https://github.com/user-attachments/assets/e20c5781-966e-44ac-b20e-37c7c57758e9" />


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

