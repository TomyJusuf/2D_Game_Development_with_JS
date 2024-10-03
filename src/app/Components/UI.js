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
}
