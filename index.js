const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector("#dino");
const CACTUS = document.querySelector("#cactus");
const NEW_GAME_BUTTON = document.querySelector("#new-game");
const SCORE = document.querySelector("#score");
let highscoreArr = [];

let score = 0;
let gameOver = false;

function updateScore() {
	if (gameOver) {
		return;
	}

	score++;
	SCORE.innerHTML = score;
	requestAnimationFrame(updateScore);
}

function endGame() {
	gameOver = true;

	alert("Collision detected!");
	CACTUS.style.animationPlayState = "paused";

	let highscoreDiv = document.querySelector("#highscore");

	localStorage.setItem("HS", JSON.stringify(SCORE.innerHTML));
	highscoreDiv.innerHTML = JSON.parse(localStorage.getItem("HS"));
}

// Start the animation frame loop
requestAnimationFrame(updateScore);

function main() {
	SCORE.innerHTML = 0;

	DINO_EL.addEventListener("animationend", function () {
		DINO_EL.classList.remove("jump");
	});

	document.addEventListener("keydown", () => {
		DINO_EL.classList.add("jump");
	});
	document.addEventListener("keydown", () => {
		DINO_EL.classList.add("jump");
	});

	let dinoRect, cactusRect;

	function updateCollisionDetection() {
		dinoRect = DINO_EL.getBoundingClientRect();
		cactusRect = CACTUS.getBoundingClientRect();

		if (
			dinoRect.left < cactusRect.right &&
			dinoRect.right > cactusRect.left &&
			dinoRect.top < cactusRect.bottom &&
			dinoRect.bottom > cactusRect.top
		) {
			endGame();
		}

		if (!gameOver) {
			requestAnimationFrame(updateCollisionDetection);
		}
	}

	requestAnimationFrame(updateCollisionDetection);
}

main();

NEW_GAME_BUTTON.addEventListener("click", () => {
	window.location.reload();
});
