const comingSoonBG = document.querySelectorAll('.bgImage');
const body = document.querySelector('body');
let current = 0;

bgTransition();
function bgTransition() {
	for (let i = 0; i < comingSoonBG.length; i++) {
		comingSoonBG[i].classList.remove('showImg');
		comingSoonBG[i].classList.add('hideImg');
	}
	comingSoonBG[current].classList.remove('hideImg');
	comingSoonBG[current].classList.add('showImg');

	current < comingSoonBG.length - 1 ? current++ : (current = 0);
}

let t = setInterval(bgTransition, 7000);

const getInTouch = document.querySelector('button');
const contact = document.querySelector('.contact');
const back = document.querySelector('.back');
const leftScreen1 = document.querySelector('.left-screen1');
const leftScreen2 = document.querySelector('.left-screen2');

getInTouch.addEventListener('click', () => {
	leftScreen1.classList.remove('moveDown');
	leftScreen2.classList.remove('moveDown');
	leftScreen1.classList.add('moveUp');
	leftScreen2.classList.add('moveUp');
});

back.addEventListener('click', () => {
	leftScreen1.classList.remove('moveUp');
	leftScreen2.classList.remove('moveUp');
	leftScreen1.classList.add('moveDown');
	leftScreen2.classList.add('moveDown');
});

getInTouch.addEventListener('click', () => {
	leftScreen1.classList.remove('moveRight');
	leftScreen2.classList.remove('moveRight');
	leftScreen1.classList.add('moveLeft');
	leftScreen2.classList.add('moveLeft');
});

back.addEventListener('click', () => {
	leftScreen1.classList.remove('moveUp');
	leftScreen2.classList.remove('moveUp');
	leftScreen1.classList.add('moveDown');
	leftScreen2.classList.add('moveDown');
});
