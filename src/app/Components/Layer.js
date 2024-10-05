export default class Layer {
  constructor(game, imageSrc, speedModifier) {
    this.game = game
    this.image = new Image()
    this.image.src = imageSrc

    this.speedModifier = speedModifier
    this.width = 1768
    this.height = 500
    this.x = 0
    this.y = 0
  }
  update() {
    if (this.x <= -this.width) this.x = 0
    this.x -= this.game.speed * this.speedModifier
  }
  draw(context) {
    if (this.image.complete) {
      context.drawImage(this.image, this.x, this.y)
      context.drawImage(this.image, this.x + this.width, this.y)
    } else {
      console.warn(`Image not loaded: ${this.image.src}`)
    }
  }
}
