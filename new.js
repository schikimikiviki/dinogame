// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector('#dino');
const CACTUS = document.querySelector('#cactus');
const NEW_GAME_BUTTON = document.querySelector('#new-game');
const SCORE = document.querySelector('#score');
const DINO_EL = document.querySelector('#dino');
const CACTUS = document.querySelector('#cactus');
const NEW_GAME_BUTTON = document.querySelector('#new-game');

setInterval(cactusMove);

const cactusMove = () => {
	CACTUS.style.left += 10;
};
