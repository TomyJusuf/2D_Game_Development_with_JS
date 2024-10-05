import angler from '../../assets/angler1.png'
import angler2 from '../../assets/angler2.png'
import lucky from '../../assets/lucky.png'

class Enemy {
  constructor(game) {
    this.game = game
    this.x = this.game.width
    this.speed = Math.random() * -1.5 - 0.5
    this.markedForDeletion = false

    this.frameX = 0
    this.frameY = 0
    this.maxFrame = 37
  }
  update() {
    this.x += this.speed - this.game.speed
    if (this.x + this.width < 0) this.markedForDeletion = true
    // sprite animation
    if (this.frameX < this.maxFrame) this.frameX++
    else this.frameX = 0
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
    context.fillText(this.lives, this.x, this.y)
    context.font = '20px Helvetica'
  }
}

class Angler extends Enemy {
  constructor(game) {
    super(game)
    this.width = 228
    this.height = 169
    this.image = new Image()
    this.image.id = 'angler1'
    this.image.src = angler
    this.lives = 2
    this.score = this.lives
    this.y = Math.random() * (this.game.height * 0.9 - this.height)

    this.frameY = Math.floor(Math.random() * 3)
  }
}

class Angler2 extends Enemy {
  constructor(game) {
    super(game)
    this.width = 213
    this.height = 165
    this.image = new Image()
    this.image.id = 'angler2'
    this.image.src = angler2
    this.lives = 3
    this.score = this.lives
    console.log(angler2)
    this.y = Math.random() * (this.game.height * 0.9 - this.height)

    this.frameY = Math.floor(Math.random() * 2)
  }
}

class Lucky extends Enemy {
  constructor(game) {
    super(game)
    this.width = 99
    this.height = 95
    this.image = new Image()
    this.image.id = 'lucky'
    this.image.src = lucky
    this.lives = 3
    this.score = 15
    this.type = 'lucky'
    this.y = Math.random() * (this.game.height * 0.9 - this.height)
    this.frameY = Math.floor(Math.random() * 2)
  }
}
export { Angler, Angler2, Lucky }
