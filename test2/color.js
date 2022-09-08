const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const changeButton = document.querySelector(".bg__button");

function changeBgColor() {
  const chosenColors = [];
  while (chosenColors.length < 2) {
    const choiceColor = colors[Math.floor(Math.random() * colors.length)];
    if (chosenColors.indexOf(choiceColor) === -1) {
      chosenColors.push(choiceColor);
    }
  }

  const firstColor = chosenColors[0];
  const secondColor = chosenColors[1];
  document.body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;
}

changeButton.addEventListener("click", changeBgColor);
changeBgColor();
