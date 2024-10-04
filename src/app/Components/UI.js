export default class UI {
  constructor(game) {
    this.game = game
    this.fontSite = 20
    this.fontFamily = 'Helvetica'
    this.color = 'yellow'
  }
  draw(context) {
    //score
    this.#drawScore(context)

    //ammo
    context.fillStyle = this.color
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 5 * i, 50, 3, 20)
    }

    //timer
    const formattedTime = (this.game.gameTime * 0.001).toFixed(1)
    context.fillText('Timer: ' + formattedTime, 20, 100)
    //game over messages
    this.#gameOver(context)
    context.restore()
  }

  #positionOfWinnerMessage(context) {
    context.save()
    context.fillStyle = this.color
    context.shadowOffsetX = 2
    context.shadowOffsetY = 2
    context.shadowColor = 'black'
    context.font = this.fontSite + 'px ' + this.fontFamily
  }

  #drawScore(context) {
    context.fillStyle = this.color
    context.font = `${this.fontSite}px ${this.fontFamily}`
    context.fillText(`Score: ${this.game.score}`, 20, 20)
  }

  #gameOver(context) {
    this.#positionOfWinnerMessage(context)
    if (this.game.gameOver) {
      context.textAlign = 'center'
      let message1
      let message2
      if (this.game.score >= this.game.winningScore) {
        message1 = 'You Win!'
        message2 = 'Well Done!'
      } else {
        message1 = 'Game Over'
        message2 = 'Try Again!'
      }
      context.font = `100px ${this.fontFamily}`
      context.fillText(
        message1,
        this.game.width * 0.5,
        this.game.height * 0.5 - 40
      )
      context.font = `50px ${this.fontFamily}`
      context.fillText(
        message2,
        this.game.width * 0.5,
        this.game.height * 0.5 + 40
      )
    }
  }
}
