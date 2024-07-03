/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const card = document.getElementById("card");
  const button = document.getElementById("button");

  function generateCard() {
    let arrValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let arrType = ["♣", "♦", "♥", "♠"];

    let randValue = Math.floor(Math.random() * arrValue.length);
    let randType = Math.floor(Math.random() * arrType.length);

    let color =
      arrType[randType] === "♦" || arrType[randType] === "♥" ? "red" : "";

    let concat = `      
    <div class="type card-header bg-white border-0 fs-1 ${color}">${arrType[randType]}</div>
    <div class="card-body bg-white">
          <h1 class="card-title">${arrValue[randValue]}</h1>
        </div>
      <div class="type card-footer bg-white border-0 fs-1 ${color}">${arrType[randType]}</div>
        `;

    card.innerHTML = concat;
  }
  addEventListener("click", generateCard);
  generateCard();
  setInterval(generateCard, 10000);
};
