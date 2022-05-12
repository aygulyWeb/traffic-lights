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
	let delayRed = red__num.value;
	let delayYellow = yellow__num.value;
	let delayGreen = yellow__num.value;
	setTimeout(() => {
		// let delayRed = red__num.value;
		lights__right.style.background = 'red';
		function getTimerRed() {

			lights__right.innerHTML = delayRed;
			if (delayRed == 0) {
				lights__right.innerHTML = ' ';
				clearInterval(countTimerRed);
			} else {
				delayRed--;
			}
		}
		let countTimerRed = setInterval(getTimerRed, 1000)
		setTimeout(() => {
			// let delayYellow = yellow__num.value;
			lights__yellow.style.background = 'yellow';
			function getTimerYellow() {
				lights__yellow.innerHTML = delayYellow;
				if (delayYellow == 0) {
					lights__yellow.innerHTML = ' ';
					clearInterval(countTimerYellow);
				} else {
					delayYellow--;
				}
			}
			let countTimerYellow = setInterval(getTimerYellow, 1000)
			setTimeout(() => {
				// let delayGreen = yellow__num.value;
				lights__green.style.background = 'green';

				function getTimerGreen() {
					lights__green.innerHTML = delayGreen;
					if (delayGreen == 0) {
						lights__green.innerHTML = ' ';
						clearInterval(countTimerGreen);
					} else {
						delayGreen--;
					}
				}
				let countTimerGreen = setInterval(getTimerGreen, 1000)
			}, delayGreen * 1000)

		}, delayYellow * 1000)

	}, delayRed * 1000)

	// let delayRed = red__num.value;
	// lights__right.style.background = 'red';

	// function getTimerRed() {

	// 	lights__right.innerHTML = delayRed;
	// 	if (delayRed == 0) {
	// 		lights__right.innerHTML = ' ';
	// 		clearInterval(countTimerRed);
	// 	} else {
	// 		delayRed--;
	// 	}
	// }
	// let countTimerRed = setInterval(getTimerRed, 1000)


	// let delayYellow = yellow__num.value;
	// lights__yellow.style.background = 'yellow';
	// function getTimerYellow() {
	// 	lights__yellow.innerHTML = delayYellow;
	// 	if (delayYellow == 0) {
	// 		lights__yellow.innerHTML = ' ';
	// 		clearInterval(countTimerYellow);
	// 	} else {
	// 		delayYellow--;
	// 	}
	// }
	// let countTimerYellow = setInterval(getTimerYellow, 1000)

});


