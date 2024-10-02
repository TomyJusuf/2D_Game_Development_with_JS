import Projectile from './Projectile'

export default class Player {
  constructor(game) {
    this.game = game
    this.width = 120
    this.height = 190
    this.x = 20
    this.y = 100
    this.speedY = 0
    this.maxSpeed = 3
    this.projectile = []
  }

  update(keysPressed) {
    this.#keyMovement(keysPressed)
    this.projectile.forEach((projectile) => {
      projectile.update()
    })
    this.projectile = this.projectile.filter(
      (projectile) => !projectile.markForDeletion
    )
  }

  shootTop() {
    if (this.game.ammo > 0) {
      this.projectile.push(new Projectile(this.game, this.x + 80, this.y + 30))
      this.game.ammo--
    }
  }

  draw(context) {
    //set color of player
    context.fillStyle = 'green'
    context.fillRect(this.x, this.y, this.width, this.height)
    this.projectile.forEach((projectile) => {
      projectile.draw(context)
    })
  }

  // private methods
  #keyMovement(keyPressed) {
    if (keyPressed.key.includes('ArrowUp')) {
      this.speedY = -this.maxSpeed
    } else if (keyPressed.key.includes('ArrowDown')) {
      this.speedY = this.maxSpeed
    } else {
      this.speedY = 0
    }

    if (keyPressed.key.includes(' ')) {
      this.shootTop()
    }
    this.y += this.speedY
  }
}
