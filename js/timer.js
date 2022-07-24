import { Controls } from "./controls.js"
import { Sound } from "./sounds.js"
import {
	buttonPlay,
	buttonPause
} from "./elements.js"

export function Timer({
	minutesDisplay,
	secondsDisplay, 
	minutesDefault, 
	secondsDefault
}) {
	
	let idSetTimeOut
	
	let controls = Controls({
		buttonPlay, 
		buttonPause
	})

	let sound = Sound({})
	
	function realTimeTimerUpdate(minutes, seconds) {
		minutesDisplay.textContent = String(minutes).padStart(2, '0')
		secondsDisplay.textContent = String(seconds).padStart(2, '0')
	}

	function updateTimerWithDefaultMinutes(minutesDefault, secondsDefault) {
		minutesDisplay.textContent = String(minutesDefault).padStart(2, '0')
		secondsDisplay.textContent = String(secondsDefault).padStart(2, '0')
	}
	
	function resetTimer() {
		clearTimeout(idSetTimeOut)
		updateTimerWithDefaultMinutes(minutesDefault, secondsDefault)
	}

	function pauseId() {
		clearTimeout(idSetTimeOut)
	}
	
	function countdown() {
		idSetTimeOut = setTimeout(() => {

			let minutes = Number(minutesDisplay.textContent)
			let seconds = Number(secondsDisplay.textContent)
			let isFinished = minutes <= 0 && seconds <= 0
	
			realTimeTimerUpdate(minutes, 0)
	
			if (isFinished) {
				resetTimer()
				controls.resetControl()
				sound.timerEndSound()
				return
			}
	
			if (seconds <= 0) {
				seconds = 60
				--minutes
			}
	
			realTimeTimerUpdate(minutes, String(seconds - 1))
	
			countdown()
	
		}, 1000)
	}

	/* short form to return an object that has the same property name and value.
	
	let output = {
		countdown: countdown
	}

	return output
	*/

	return { 
		realTimeTimerUpdate,
		resetTimer,
		pauseId,
		countdown
	}
}

