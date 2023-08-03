export const cafeteria = new Audio("../../assets/cafeteria.wav")

export const chuva = new Audio("../../assets/chuva.wav")

export const floresta = new Audio("../../assets/floresta.wav")

export const lareira = new Audio("../../assets/lareira.wav")

export const buttonPressAudio = new Audio("../../assets/button-press.wav")

export const kitchenTimer = new Audio("../../assets/kichen-timer.mp3")

chuva.preload
cafeteria.preload
floresta.preload
lareira.preload
buttonPressAudio.preload
kitchenTimer.preload

cafeteria.loop = true
chuva.loop = true
floresta.loop = true
lareira.loop = true

cafeteria.volume = 0.5
chuva.volume = 0.5
floresta.volume = 0.5
lareira.volume = 0.5
