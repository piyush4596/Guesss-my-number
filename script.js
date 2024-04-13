let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMsg("No Number ⛔");
  }
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       displayMsg("ops! it's high");
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       displayMsg("Game Over");
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       displayMsg("ops! it's low");
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       displayMsg("Game Over");
  //     }
  //   }
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? "ops! it's high" : "ops! it's low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("Game Over, please restart it");
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    displayMsg("Correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".contain").style.background = "#13cc3b";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    displayMsg("Game Over");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".restart").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".contain").style.background =
    "linear-gradient(2900deg, #13cc3b, #00102b";
});
