import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sound } from "./sounds.js"
import { Events } from "./events.js"
import {
	buttonPlay,
	buttonPause,
	minutesDisplay,
	secondsDisplay,
	minutesDefault,
	secondsDefault
} from "./elements.js"


let controls = Controls({ 
	buttonPlay, 
	buttonPause, 
	minutesDisplay, 
	secondsDisplay 
})

let timer = Timer({ 
	minutesDisplay, 
	secondsDisplay, 
	minutesDefault, 
	secondsDefault 
})

let sound = Sound()

Events({ controls, timer, sound })
