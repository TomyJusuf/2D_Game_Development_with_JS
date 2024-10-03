export default class UI {
  constructor(game) {
    this.game = game
    this.fontSite = 20
    this.fontFamily = 'Helvetica'
    this.color = 'yellow'
  }
  draw(context) {
    //ammo
    context.fillStyle = this.color
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 5 * i, 50, 3, 20)
    }
  }

  drawScore(context) {
    context.fillStyle = this.color
    context.font = `${this.fontSite}px ${this.fontFamily}`
    context.fillText(`Score: ${this.game.score}`, 20, 20)
  }

  drawGameOver(context) {
    context.fillStyle = this.color
    context.font = `${this.fontSite * 2}px ${this.fontFamily}`
    context.fillText(`Game Over`, 300, 300)
  }
}
