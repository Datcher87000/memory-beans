

const match = () => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};

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
function displayCounter(counter) {
  const counterElement = document.getElementById(`counter`);
  if (counter > 1) {
    counterElement.textContent = "Vous avez efectué " + counter + " coups.";
  } else {
    counterElement.textContent = "Vous avez efectué " + counter + " coup.";
  }
}

function clearFieldCounter() {
  const counterElements = document.querySelectorAll("counter");
  counterElements.forEach((element) => (element.textContent = ""));
}
const victory =(counter) => {
    alert("Félicitation, vous avez gagné en " + counter + " coups")
};

//import des images dans un tableau
const cardsArray = [
  {
    name: "monkey",
    img: "./img/1.webp",
  },
  {
    name: "buffle",
    img: "./img/2.webp",
  },
  {
    name: "pork",
    img: "./img/3.webp",
  },
  {
    name: "otherMonkey",
    img: "./img/4.webp",
  },
  {
    name: "croco",
    img: "./img/5.webp",
  },
  {
    name: "elephant",
    img: "./img/6.webp",
  },
];
console.log(cardsArray.length);
//création du tableau sur le DOM
const game = document.getElementById("game");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");
game.appendChild(grid);
//duplication du tableaux dans gameGrid puis ajout du premier
let gameGrid = cardsArray.concat(cardsArray);
//ramdomize l'affichage des cartes
gameGrid.sort(() => 0.5 - Math.random());
let rebours = cardsArray.length
let firstGuess = "";
let secondGuess = "";
let count = 0;
let counter = 0;
let previousTarget = null;
let delay = 1200;
displayCounter(counter);

// Affichage du tableau
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
//fonction d'event de bordure en cas de click
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
  if (count < 2) {
    count++;
    if (count === 1) {
      // Affect le nom de la carte au "premier coup" et affecter la selection à l'img
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    } else {
      // Comme le premier mais au "deuxieme coup"
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add("selected");
    }
    // Si les selections ne sont pas vides alors ...
    if (firstGuess !== "" && secondGuess !== "") {
      // Verification de si les "coups" ont le même noms et s'ils le sont alors ...
      if (firstGuess === secondGuess) {
        // après un délais les carte disparaissent, sinon ...
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        clearFieldCounter();
        counter++;
        displayCounter(counter);
        rebours --
        if (rebours == 0) {
           setTimeout(victory, delay, counter); 
        }
      } else {
        // les coups sont annulés
        setTimeout(resetGuesses, delay);
        clearFieldCounter();
        counter++;
        displayCounter(counter);
      }
    }
    previousTarget = clicked;
  }
  console.log(counter);
});
