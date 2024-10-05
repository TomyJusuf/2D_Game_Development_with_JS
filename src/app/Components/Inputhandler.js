class InputHandler {
  constructor(game) {
    this.game = game
    this.key = []
    window.addEventListener('keydown', (e) => {
      if (
        (e.key === 'ArrowDown' || e.key === 'ArrowUp') &&
        this.key.indexOf(e.key) === -1
      ) {
        this.key.push(e.key)
      } else if (e.key === ' ') {
        this.game.player.shootTop()
      } else if (e.key === 'd') {
        this.game.debug = !this.game.debug
      }
    })
    window.addEventListener('keyup', (e) => {
      if (this.key.indexOf(e.key) > -1) {
        this.key.splice(this.key.indexOf(e.key), 1)
      }
    })
  }
}
export default InputHandler
