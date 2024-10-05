import projectile from '../../assets/projectile.png'

export default class Projectile {
  constructor(game, x, y) {
    this.game = game
    this.x = x
    this.y = y
    this.width = 10
    this.height = 3
    this.speed = 3
    this.markForDeletion = false
    this.image = new Image()
    this.image.src = projectile
    this.image.id = 'projectile'
  }
  update() {
    this.x += this.speed
    if (this.x > this.game.width * 0.8) {
      this.markForDeletion = true
    }
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y)
  }
}
