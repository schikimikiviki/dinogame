// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

let DINO_EL = document.querySelector('#dino');
const CACTUS = document.querySelector('#cactus');
const NEW_GAME_BUTTON = document.querySelector('#new-game');
const SCORE = document.querySelector('#score');
const DINO_EL = document.querySelector("#dino");
const CACTUS = document.querySelector("#cactus");
const NEW_GAME_BUTTON = document.querySelector("#new-game");

const scoreIncrease = () => {
	setInterval(function () {
		if (CACTUS.style.animationPlayState === 'running') {
			SCORE.innerHTML++;
		}
	}, 500);
};
let score = 0;
let gameRunning = true;

function main() {
	DINO_EL.addEventListener('animationend', function () {
		DINO_EL.classList.remove('jump');
	let score = document.querySelector("#score");
	score.innerHTML++;

	CACTUS.style.animationPlayState = "running";
	requestAnimationFrame(incrementScore);

	// const scoreIncrease = setInterval(function () {
	// 	score.innerHTML++;
	// }, 500);

	DINO_EL.addEventListener("animationend", function () {
		DINO_EL.classList.remove("jump");
	});

	document.addEventListener('keydown', () => {
		DINO_EL.classList.add('jump');
	});
	document.addEventListener('keydown', () => {
		DINO_EL.classList.add('jump');
	});

	function detectCollision() {
		const DINO_RECT = DINO_EL.getBoundingClientRect();
		const CACTUS_RECT = CACTUS.getBoundingClientRect();

		if (
			DINO_RECT.left < CACTUS_RECT.right &&
			DINO_RECT.right > CACTUS_RECT.left &&
			DINO_RECT.top < CACTUS_RECT.bottom &&
			DINO_RECT.bottom > CACTUS_RECT.top
		) {
			alert("Collision detected!");
			CACTUS.style.animationPlayState = "paused";
			clearInterval(scoreIncrease);
		}
	}

	setInterval(detectCollision, 100);
}



NEW_GAME_BUTTON.addEventListener('click', () => {
	CACTUS.style.animationPlayState = 'running';
	clearInterval(scoreIncrease);
	scoreIncrease();
});
