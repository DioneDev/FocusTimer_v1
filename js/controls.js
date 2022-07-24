import { Timer } from "./timer.js"
import { minutesDisplay, secondsDisplay } from "./elements.js"

let timer = Timer({ 
	minutesDisplay, 
	secondsDisplay
})

export function Controls({
	buttonPlay,
	buttonPause,
	minutesDisplay,
	secondsDisplay
}) {

	function playEvent() {
		buttonPlay.classList.add('hideButton')
		buttonPause.classList.remove('hideButton')
	}

	function pauseEvent() {
		buttonPause.classList.add('hideButton')
		buttonPlay.classList.remove('hideButton')
	}

	function stopEvent() {
		buttonPause.classList.add('hideButton')
		buttonPlay.classList.remove('hideButton')
	}

	function resetControl() {
		buttonPause.classList.add('hideButton')
		buttonPlay.classList.remove('hideButton')
	}

	function incrementFiveMinutes() {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes > 55) {
			minutes = 5
			seconds = 0
		} else {
			minutes += 5
			seconds = 0
		}
		timer.realTimeTimerUpdate(minutes, seconds)
	}

	function decrementFiveMinutes() {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes < 5) {
			minutes = 25
			seconds = 0
		} else {
			minutes -= 5
		}
		timer.realTimeTimerUpdate(minutes, seconds)
	}

	return {
		playEvent,
		pauseEvent,
		stopEvent,
		incrementFiveMinutes,
		decrementFiveMinutes,
		resetControl
	}
}