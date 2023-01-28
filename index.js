// The size of our game area
const WIDTH = 800;
const HEIGHT = 256;

const DINO_EL = document.querySelector('#dino');

function main() {}

main();

$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd =
			"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

		$(this)
			.addClass("animated " + animationName)
			.one(animationEnd, function () {
				$(this).removeClass("animated " + animationName);
			})
			.one(animationEnd, function () {
				$(this).addClass("displaynone");
			});
	},
});

// $('h1').animateCss('pulse');

$("h3").mouseover(function () {
	$("h3").animateCss("rubberBand");
});

setTimeout(function () {
	randomAnimate();
}, 3000);

function randomAnimate() {
	var ranNum = Math.floor(Math.random() * 7 + 1);
	if (ranNum == 1) {
		$("h3").animateCss("tada");
	} else if (ranNum == 2) {
		$("h3").animateCss("swing");
	} else if (ranNum == 3) {
		$("h3").animateCss("shake");
	} else if (ranNum == 4) {
		$("h3").animateCss("pulse");
	} else if (ranNum == 5) {
		$("h3").animateCss("bounce");
	} else if (ranNum == 6) {
		$("h3").animateCss("jello");
	} else {
	}
	setTimeout(function () {
		randomAnimate();
	}, 3000);
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
