import canva from './Canva'
import Game from './Game'

const game = new Game(canva.width, canva.height)
let lastTime = 0

export function animate(timeStamp) {
  const deleteTime = timeStamp - lastTime
  lastTime = timeStamp
  canva.ctx.clearRect(0, 0, canva.width, canva.height)
  game.update(deleteTime)
  game.draw(canva.ctx)

  requestAnimationFrame(animate)
}
