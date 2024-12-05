const match = () => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
};
export{match}