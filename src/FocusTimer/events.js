import * as actions from "./actions.js"
import * as el from "./elements.js"
import * as sound from "./sounds.js"

export function registerControls() {
  el.controls.addEventListener("click", getClicks)

  el.sounds.addEventListener("click", getClicks)

  el.sounds.addEventListener("input", (e) => {
    const soundAction = e.target.dataset.sound

    if (el[soundAction] == undefined) {
      return
    }

    const volume = el[soundAction].value / 100
    sound[soundAction].volume = volume
  })
}

function getClicks(e) {
  const action = e.target.dataset.action
  if (typeof actions[action] != "function") {
    return
  }
  actions[action]()
}
