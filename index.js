const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector('#dino');
const CACTUS = document.querySelector('#cactus');
const NEW_GAME_BUTTON = document.querySelector('#new-game');
const SCORE = document.querySelector('#score');
let highscoreDiv = document.querySelector('#highscore');
let highestScoreOfAll = 0;

let score = 0;
let gameOver = false;

console.log('this is the local storage at start', localStorage.getItem('HS'));

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
	alert('Game over, loser!');
	CACTUS.style.animationPlayState = 'paused';

	let newScore = parseInt(SCORE.innerHTML);

	if (newScore > highestScoreOfAll) {
		localStorage.setItem('HS', newScore);
		highestScoreOfAll = newScore;
		console.log('this should be the updated high score:', highestScoreOfAll);
		highscoreDiv.innerHTML = highestScoreOfAll;
		return highestScoreOfAll;
	}
}

requestAnimationFrame(updateScore);

function main() {
	highscoreDiv.innerHTML = highestScoreOfAll;

	DINO_EL.addEventListener('animationend', function () {
		DINO_EL.classList.remove('jump');
	});

	document.addEventListener('keydown', () => {
		DINO_EL.classList.add('jump');
	});
	document.addEventListener('keydown', () => {
		DINO_EL.classList.add('jump');
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

NEW_GAME_BUTTON.addEventListener('click', () => {
	window.location.reload();
});
