let kitty = document.getElementById("kitty");
let scoreText = document.getElementById("score");
let timeText = document.getElementById("time");
let playBtn = document.getElementById("playAgain");
let music = document.getElementById("bgMusic");

let score = 0;
let timeLeft = 20;
let moveInterval;
let timerInterval;

function moveKitty() {
  let x = Math.random() * 520;
  let y = Math.random() * 320;
  kitty.style.left = x + "px";
  kitty.style.top = y + "px";
}

kitty.addEventListener("click", function () {
  score++;
  scoreText.innerText = score;
  moveKitty();
});

function startGame() {
  score = 0;
  timeLeft = 20;
  scoreText.innerText = score;
  timeText.innerText = timeLeft;
  playBtn.style.display = "none";

  music.currentTime = 0;
  music.play();

  moveKitty();
  moveInterval = setInterval(moveKitty, 800);

  timerInterval = setInterval(function () {
    timeLeft--;
    timeText.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      clearInterval(moveInterval);
      music.pause();
      alert("Time's up! Your score is " + score);
      playBtn.style.display = "inline-block";
    }
  }, 1000);
}

playBtn.addEventListener("click", startGame);

// Start game on load
startGame();