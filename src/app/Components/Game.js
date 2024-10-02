import Player from './Player'
import canva from './Canva'
import InputHandler from './Inputhandler'
export class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.inputHandler = new InputHandler(this)
    this.ammo = 20
    this.maxAmmo = 50
    this.ammoTimer = 0
    this.ammoInterval = 500
    this.ammoElapsed = 0
    this.gameOver = false
  }
  update() {
    this.player.update(this.inputHandler)
    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxAmmo) {
        this.ammo++
        this.ammoTimer = 0
      } else {
        this.ammoTimer += deleteTime
      }
    }
  }

  draw(context) {
    this.player.draw(context)
  }
}

const game = new Game(canva.width, canva.height)
let lastTime = 0
function animate(timeStamp) {
  const deleteTime = timeStamp - lastTime
  lastTime = timeStamp
  canva.ctx.clearRect(0, 0, canva.width, canva.height)
  game.update(deleteTime)
  game.draw(canva.ctx)

  requestAnimationFrame(animate)
}

animate(0)
