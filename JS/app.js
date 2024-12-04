import { clearFieldCounter, displayCounter, victory } from "./counter.js";
import { cardsArray } from "./imgGrid.js";
import { match } from "./checker.js";

let rebours = cardsArray.length;
let firstGuess = "";
let secondGuess = "";
let count = 0;
let counter = 0;
let previousTarget = null;
let delay = 1200;

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    if (card.classList == "card selected") {
      card.classList.remove("selected");
    }
  });
};

//création du tableau sur le DOM
const game = document.getElementById("game");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");
game.appendChild(grid);
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

// Affichage des images du tableau
gameGrid.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = item.name;

  const front = document.createElement("div");
  front.classList.add("front");

  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = "url(" + item.img + ")";
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

displayCounter(counter);

//fonction d'event  en cas de click
grid.addEventListener("click", function (event) {
  let clicked = event.target;
  if (
    // Si la selection contient la class "grid" ou "selected", le coup n'est pas joué
    clicked.classList.contains("grid") ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match") ||
    clicked === previousTarget
  ) {
    return;
  }
  //Vérif des coups jouers
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {

      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        clearFieldCounter();
        counter++;
        displayCounter(counter);
        rebours--;
        if (rebours == 0) {
          setTimeout(victory, delay, counter);
          document.body.classList.add("victory");
        }
      } else {
        setTimeout(resetGuesses, delay);
        clearFieldCounter();
        counter++;
        displayCounter(counter);
      }
    }
    previousTarget = clicked;
          document.addEventListener("keydown", (e) => {
         if (e.key === " ") {
          location.reload()
        } 
        }
      );
    }
 
});
