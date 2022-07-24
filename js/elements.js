const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const forestSoundButton = document.querySelector('.forestSound')
const rainSoundButton = document.querySelector('.rainSound')
const coffeeshopSoundButton = document.querySelector('.coffeeshopSound')
const fireplaceSoundButton = document.querySelector('.fireplaceSound')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let minutesDefault = Number(minutesDisplay.textContent)
let secondsDefault = Number(secondsDisplay.textContent)

export {
	buttonPlay,
	buttonPause,
	buttonStop,
	buttonPlus,
	buttonMinus,
	forestSoundButton,
	rainSoundButton,
	coffeeshopSoundButton,
	fireplaceSoundButton,
	minutesDisplay,
	secondsDisplay,
	minutesDefault,
	secondsDefault
}