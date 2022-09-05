const gameForm = document.querySelector(".game__form");
const rangeNumberInput = gameForm.querySelector(".range__number input");
const guessNumberInput = gameForm.querySelector(".guess__number input");
const chosenForm = document.querySelector(".chosen__form");
const resultForm = document.querySelector(".result__form");

function getResult(machineNumber, guessNumber) {
  if (machineNumber === guessNumber) {
    chosenForm.innerText = `You chose ${guessNumber} Machine chose ${machineNumber} `;
    resultForm.innerText = `You won!!!`;
  } else {
    chosenForm.innerText = `You chose ${guessNumber} Machine chose ${machineNumber} `;
    resultForm.innerText = `You lose.`;
  }
}

function makeRandomNum(event) {
  event.preventDefault();
  const rangeNumber = rangeNumberInput.value;
  const machineNumber = Math.ceil(Math.random() * rangeNumber);
  const guessNumber = guessNumberInput.value;
  getResult(parseInt(machineNumber), parseInt(guessNumber));
}

gameForm.addEventListener("submit", makeRandomNum);
