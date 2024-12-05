function clearFieldCounter() {
  const counterElements = document.querySelectorAll("counter");
  counterElements.forEach((element) => (element.textContent = ""));
}
function displayCounter(counter) {
  const counterElement = document.getElementById('counter');
  if (counter > 1) {
    counterElement.textContent = "Vous avez efectué " + counter + " coups.";
  } else {
    counterElement.textContent = "Vous avez efectué " + counter + " coup.";
  }
}
const victory = (counter) => {
  alert("Félicitation, vous avez gagné en " + counter + " coups");
};
export{clearFieldCounter, displayCounter,victory}