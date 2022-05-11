///Span
const lights__right = document.querySelector('.lights__right');
const lights__yellow = document.querySelector('.lights__yellow');
const lights__green = document.querySelector('.lights__green');
//Inputs
const red__num = document.querySelector('#red__num');
const yellow__num = document.querySelector('#yellow__num');
const green__num = document.querySelector('#green __num');
//Buttons
const lights__start = document.querySelector('.lights__start');
const lights__stop = document.querySelector('.lights__stop');



lights__start.addEventListener('click', () => {

	let delay = red__num.value;
	lights__right.style.background = 'red';
	function getTimer() {
		lights__right.innerHTML = delay;
		if (delay == 0) {
			clearInterval(countTimer);
		} else {
			delay--;
		}
	}
	let countTimer = setInterval(getTimer, 1000)

});

	// setTimeout(() => {
	// 	lights__right.style.background = 'red';
	// 	lights__right.innerHTML = delay;
	// }, delay * 1000)


// function stopFunc() {
// 	clearTimeout(timeout);
// }

// let stop = setTimeout(stopFunc, 3000);
// lights__stop.addEventListener('click', stopFunc);