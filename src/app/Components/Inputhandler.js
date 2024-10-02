class InputHandler {
  constructor(game) {
    this.game = game
    this.key = []
    window.addEventListener('keydown', (e) => {
      if (
        (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') &&
        !this.key.includes(e.key)
      ) {
        this.key.push(e.key)
      }
    })
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
        const index = this.key.indexOf(e.key)
        if (index > -1) {
          this.key.splice(index, 1)
        }
      }
    })
  }
}

export default InputHandler
