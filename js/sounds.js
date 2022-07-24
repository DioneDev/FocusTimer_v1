export function Sound() {

	const forestSoundBg = new Audio("./assets/sounds/forest.wav")
	const rainSoundBg = new Audio("./assets/sounds/rain.wav")
	const coffeeshopSoundBg = new Audio("./assets/sounds/coffeeshop.wav")
	const fireplaceSoundBg = new Audio("./assets/sounds/fireplace.wav")
	const endSound = new Audio("./assets/sounds/endSound.wav")

	forestSoundBg.loop = true
	rainSoundBg.loop = true
	coffeeshopSoundBg.loop = true
	fireplaceSoundBg.loop = true
	endSound.loop = false

	function playPause(sounds) {
		 let paused = sounds.paused
		if(paused) {
			sounds.play()
		}
		else {
			sounds.pause()
		}
	}

	function timerEndSound() {
		endSound.play()
	}

	return {
		forestSoundBg,
		rainSoundBg,
		coffeeshopSoundBg,
		fireplaceSoundBg,
		playPause,
		timerEndSound
	}
}