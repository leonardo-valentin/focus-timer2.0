import state from "./state.js"
import { registerControls } from "./events.js"
import * as timer from "./timer.js"

export function start(min, seg) {
  state.minutes = min
  state.seconds = seg

  timer.updateDisplay()
  registerControls()
}
