// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector('#dino');

function main() {}

DINO_EL.addEventListener('animationend', function () {
	DINO_EL.classList.remove('jump');
});

document.addEventListener('keydown', () => {
	DINO_EL.classList.add('jump');
});

// document.addEventListener('keydown', (event) => {
// 	if (event.code === 'Space') {
// 		DINO_EL.style.bottom = parseInt(DINO_EL.style.bottom || 40) + 100 + 'px';
// 		console.log('hi');
// 	}
// });

// document.addEventListener('keyup', (event) => {
// 	if (event.code === 'Space' && DINO_EL.style.bottom === '140px') {
// 		DINO_EL.style.bottom = parseInt(DINO_EL.style.bottom) - 100 + 'px';
// 	}
// });

main();
