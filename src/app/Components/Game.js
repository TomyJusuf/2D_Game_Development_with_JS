import Player from './Player'
import InputHandler from './Inputhandler'
import UI from './UI'

class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.input = new InputHandler(this)
    this.ui = new UI(this)
    this.ammo = 20 //Limit shooting
    this.maxAmmo = 50
    this.ammoTimer = 0
    this.ammoInterval = 500
    // this.ammoElapsed = 0
    // this.gameOver = false
  }
  update(deleteTime) {
    this.player.update(this.input)
    this.#ammo_timer(deleteTime)
  }

  draw(context) {
    // context == canva.ctx
    this.player.draw(context)
    this.ui.draw(context)
  }

  #ammo_timer(deleteTime) {
    if (this.ammo < this.maxAmmo) {
      this.ammoTimer += deleteTime
      if (this.ammoTimer > this.ammoInterval) {
        this.ammoTimer = 0
        this.ammo += 1
      }
    }
  }
}
export default Game
