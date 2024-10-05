import Projectile from './Projectile'
import player from '../../assets/player.png'
export default class Player {
  constructor(game) {
    this.game = game
    this.width = 120
    this.height = 190
    this.x = 20
    this.y = 100
    this.frameX = 0
    this.frameY = 0
    this.maxFrame = 37
    this.speedY = 0
    this.maxSpeed = 2
    this.projectile = []
    this.image = new Image()
    this.image.id = 'player'
    this.image.src = player
  }

  update(input) {
    this.#keyMovement(input)
    this.y += this.speedY
    this.projectile.forEach((projectile) => {
      projectile.update()
    })
    this.projectile = this.projectile.filter(
      (projectile) => !projectile.markForDeletion
    )
    if (this.frameX < this.maxFrame) this.frameX++
    else this.frameX = 0
  }

  shootTop() {
    if (this.game.ammo > 0) {
      const shoot = new Projectile(this.game, this.x + 80, this.y + 30)
      this.projectile.push(shoot)
      //Limit ammo ↓
      this.game.ammo--
    }
  }

  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height)
    }
    if (this.image.complete && this.image.naturalWidth > 0) {
      context.drawImage(
        this.image,
        this.frameX * this.width,
        this.frameY * this.height,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      )
    } else {
      console.log('Image is not loaded yet or is broken')
    }

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
  }
}
