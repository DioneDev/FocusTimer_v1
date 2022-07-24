import { Sound } from "./sounds.js"
import {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonPlus,
	buttonMinus,
	forestSoundButton,
	rainSoundButton,
	coffeeshopSoundButton,
	fireplaceSoundButton
} from "./elements.js"

export function Events({ controls, timer, sound }) {
	
	let soundControl = Sound({})

	// BUTTONS EVENTS
	buttonPlay.addEventListener('click', () => {
		controls.playEvent()
		timer.countdown()
	})

	buttonPause.addEventListener('click', () => {
		controls.pauseEvent()
		timer.pauseId()
	})

	buttonStop.addEventListener('click', () => {
		controls.stopEvent()
		timer.resetTimer()
	})

	buttonPlus.addEventListener('click', () => {
		controls.incrementFiveMinutes()
	})

	buttonMinus.addEventListener('click', () => {
		controls.decrementFiveMinutes()
	})

	// SOUNDS EVENTS
	forestSoundButton.addEventListener('click', () => {
		soundControl.playPause(sound.forestSoundBg)
		sound.rainSoundBg.pause()
		sound.coffeeshopSoundBg.pause()
		sound.fireplaceSoundBg.pause()

		forestSoundButton.classList.toggle('soundButtonColor')
		rainSoundButton.classList.remove('soundButtonColor')
		coffeeshopSoundButton.classList.remove('soundButtonColor')
		fireplaceSoundButton.classList.remove('soundButtonColor')
	})

	rainSoundButton.addEventListener('click', () => {
		soundControl.playPause(sound.rainSoundBg)
		sound.forestSoundBg.pause()
		sound.coffeeshopSoundBg.pause()
		sound.fireplaceSoundBg.pause()

		forestSoundButton.classList.remove('soundButtonColor')
		rainSoundButton.classList.toggle('soundButtonColor')
		coffeeshopSoundButton.classList.remove('soundButtonColor')
		fireplaceSoundButton.classList.remove('soundButtonColor')
	})

	coffeeshopSoundButton.addEventListener('click', () => {
		soundControl.playPause(sound.coffeeshopSoundBg)
		sound.forestSoundBg.pause()
		sound.rainSoundBg.pause()
		sound.fireplaceSoundBg.pause()

		forestSoundButton.classList.remove('soundButtonColor')
		rainSoundButton.classList.remove('soundButtonColor')
		coffeeshopSoundButton.classList.toggle('soundButtonColor')
		fireplaceSoundButton.classList.remove('soundButtonColor')
	})

	fireplaceSoundButton.addEventListener('click', () => {
		soundControl.playPause(sound.fireplaceSoundBg)
		sound.forestSoundBg.pause()
		sound.rainSoundBg.pause()
		sound.coffeeshopSoundBg.pause()

		forestSoundButton.classList.remove('soundButtonColor')
		rainSoundButton.classList.remove('soundButtonColor')
		coffeeshopSoundButton.classList.remove('soundButtonColor')
		fireplaceSoundButton.classList.toggle('soundButtonColor')
	})
}