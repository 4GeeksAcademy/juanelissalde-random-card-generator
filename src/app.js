/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const card = document.getElementById("card");
  const button = document.getElementById("button");

  function generateCard() {
    // Creando cadenas de datos
    let arrValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let arrType = ["♣", "♦", "♥", "♠"];

    // Generando un numero aleatorio dependiendo del largo de cada cadena
    let randValue = Math.floor(Math.random() * arrValue.length);
    let randType = Math.floor(Math.random() * arrType.length);

    // Estableciendo nombre de clase 'color' a los elementos correspondientes al color rojo
    let color =
      arrType[randType] === "♦" || arrType[randType] === "♥" ? "red" : "";

    // Creando variable 'concat' con la esctructura HTML para el formato de carta
    let concat = `      
    <div class="type card-header bg-white border-0 fs-1 ${color}">${arrType[randType]}</div>
    <div class="card-body bg-white">
          <h1 class="card-title">${arrValue[randValue]}</h1>
        </div>
      <div class="type card-footer bg-white border-0 fs-1 ${color}">${arrType[randType]}</div>
        `;

    // Llamo al contenedor de la carta e introduzco la estructura 'concat' previamente creada
    card.innerHTML = concat;
  }
  // Funcionalidad para generar carta aleatoria tras presionar boton
  addEventListener("click", generateCard);
  generateCard();

  // Agregando cuenta regresiva de 10 segundos para generar nueva carta aleatoria
  setInterval(generateCard, 10000);
};
