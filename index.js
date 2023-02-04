const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector("#dino");
const CACTUS = document.querySelector("#cactus");
const NEW_GAME_BUTTON = document.querySelector("#new-game");
const SCORE = document.querySelector("#score");
let highscoreDiv = document.querySelector("#highscore");
let highestScoreOfAll = 0;

let score = 0;
let gameOver = false;

console.log(localStorage.getItem("HS"));

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
	alert("Game over, loser!");
	CACTUS.style.animationPlayState = "paused";

	//localStorage.setItem("HS", JSON.stringify(SCORE.innerHTML));

	let newScore = score;
	//newScore = parseInt(newScore);

	console.log("Highest is" + highestScoreOfAll);
	console.log("new score is" + newScore);

	if (newScore > highestScoreOfAll) {
		localStorage.setItem("HS", newScore);
		highestScoreOfAll = newScore;
		highscoreDiv.innerHTML = highestScoreOfAll;
		return highestScoreOfAll;
	}
	console.log(highestScoreOfAll);
}

requestAnimationFrame(updateScore);

//localStorage.setItem("HS", JSON.stringify(SCORE.innerHTML));

function main() {
	console.log(JSON.parse(localStorage.getItem("HS")));
	//SCORE.innerHTML = 0;
	highscoreDiv.innerHTML = highestScoreOfAll;

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
