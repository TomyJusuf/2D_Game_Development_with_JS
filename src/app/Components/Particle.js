import gears from '../../assets/images/gears.png'

export default class Particle {
  constructor(game, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.image = new Image()
    this.image.id = 'gears'
    this.image.src = gears
    this.frameX = Math.floor(Math.random() * 3)
    this.frameY = Math.floor(Math.random() * 3)
    this.spriteSize = 50
    this.sizeModifier = (Math.random() * 0.5 + 0.5).toFixed(1)
    this.size = this.spriteSize * this.sizeModifier
    this.speedX = Math.random() * 3
    this.speedY = Math.random() * -15
    this.gravity = 0.5
    this.markedForDeletion = false
    this.life = 0
    this.maxLife = Math.random() * 50 + 50
    this.angle = 0
    this.va = Math.random() * 0.2 - 0.1
    this.bounced = 0
    this.bottomBounceBoundry = Math.random() * 100 + 60
  }
  update() {
    this.angle += this.va
    this.speedY += this.gravity
    this.x -= this.speedX
    this.y += this.speedY
    if (this.y > this.game.height + this.size || this.x < -this.size) {
      this.markedForDeletion = true
    }
    if (
      this.y > this.game.height - this.bottomBounceBoundry &&
      this.bounced < 2
    ) {
      this.speedY *= -0.5
      this.bounced++
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.spriteSize,
      this.frameY * this.spriteSize,
      this.spriteSize,
      this.spriteSize,
      this.x,
      this.y,
      this.size,
      this.size
    )
  }
}
