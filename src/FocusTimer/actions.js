import state from "./state.js"
import * as sound from "./sounds.js"
import * as timer from "./timer.js"

export function toggleRunning() {
  sound.buttonPressAudio.play()
  state.isRunning = document.documentElement.classList.toggle("running")
  if (!state.isRunning) {
    clearTimeout(timer.pauseCountDown)
    return
  }
  timer.countDown()
}

export function addMinutes() {
  sound.buttonPressAudio.play()

  timer.increaseMinutes()
}

export function reduceMinutes() {
  sound.buttonPressAudio.play()

  timer.reduceMinutes()
}

export function stopRunning() {
  sound.buttonPressAudio.play()

  state.isRunning = false
  document.documentElement.classList.remove("running")
  clearTimeout(timer.pauseCountDown)
  timer.updateDisplay()
}
/* soundeffects */

export function rainSound() {
  state.soundRainOn = document.documentElement.classList.toggle("rain-on")
  state.soundForestOn = document.documentElement.classList.remove("forest-on")
  state.soundFireOn = document.documentElement.classList.remove("fire-on")
  state.soundShopOn = document.documentElement.classList.remove("shop-on")

  sound.lareira.pause()
  sound.cafeteria.pause()
  sound.floresta.pause()

  if (state.soundRainOn) {
    sound.chuva.play()
    return
  }

  sound.chuva.pause()
}

export function treeSound() {
  state.soundForestOn = document.documentElement.classList.toggle("forest-on")
  state.soundRainOn = document.documentElement.classList.remove("rain-on")
  state.soundFireOn = document.documentElement.classList.remove("fire-on")
  state.soundShopOn = document.documentElement.classList.remove("shop-on")

  sound.chuva.pause()
  sound.lareira.pause()
  sound.cafeteria.pause()

  if (state.soundForestOn) {
    sound.floresta.play()
    return
  }

  sound.floresta.pause()
}
export function fireSound() {
  state.soundFireOn = document.documentElement.classList.toggle("fire-on")
  state.soundRainOn = document.documentElement.classList.remove("rain-on")
  state.soundForestOn = document.documentElement.classList.remove("forest-on")
  state.soundShopOn = document.documentElement.classList.remove("shop-on")

  sound.chuva.pause()
  sound.cafeteria.pause()
  sound.floresta.pause()

  if (state.soundFireOn) {
    sound.lareira.play()
    return
  }

  sound.lareira.pause()
}
export function shopSound() {
  state.soundShopOn = document.documentElement.classList.toggle("shop-on")
  state.soundRainOn = document.documentElement.classList.remove("rain-on")
  state.soundForestOn = document.documentElement.classList.remove("forest-on")
  state.soundFireOn = document.documentElement.classList.remove("fire-on")

  sound.chuva.pause()
  sound.lareira.pause()
  sound.floresta.pause()

  if (state.soundShopOn) {
    sound.cafeteria.play()
    return
  }

  sound.cafeteria.pause()
}
