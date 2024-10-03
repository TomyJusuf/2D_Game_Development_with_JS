import Player from './Player'
import InputHandler from './Inputhandler'
import UI from './UI'
import Angler from './Enemy'
class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.player = new Player(this)
    this.input = new InputHandler(this)
    this.ui = new UI(this)
    this.enemies = []
    this.score = 0
    this.enemyTimer = 0
    this.enemyInterval = 1000
    this.ammo = 20 //Limit shooting
    this.maxAmmo = 50
    this.ammoTimer = 0
    this.ammoInterval = 500
    this.gameOver = false
    this.winningScore = 10
    this.gameTime = 0
    this.timeLimit = 5000
  }
  update(deleteTime) {
    this.player.update(this.input)
    this.#ammo_timer(deleteTime)
    this.#enemyUpdate(deleteTime)
  }

  draw(context) {
    this.player.draw(context) // context == canva.ctx
    this.ui.draw(context)
    this.enemies.forEach((enemy) => {
      enemy.draw(context)
    })
  }
  addEnemy() {
    this.enemies.push(new Angler(this))
    // console.log(this.enemies)
  }

  checkCollision(rec1, res2) {
    return (
      rec1.x < res2.x + res2.width &&
      rec1.x + rec1.width > res2.x &&
      rec1.y < res2.y + res2.height &&
      rec1.height + rec1.y > res2.y
    )
  }

  #ammo_timer(deleteTime) {
    if (this.ammo < this.maxAmmo) {
      this.ammoTimer += deleteTime
      if (this.ammoTimer > this.ammoInterval) {
        this.ammoTimer = 0
        this.ammo += 1
      }
    }
  }

  #enemyUpdate(deleteTime) {
    this.enemies.forEach((enemy) => {
      enemy.update()

      //check collision
      if (this.checkCollision(this.player, enemy)) {
        this.gameOver = true
        enemy.markedForDeletion = true
      }
      //check if projectiles hit enemy
      this.player.projectile.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.lives -= 1
          projectile.markForDeletion = true
          if (enemy.lives === 0) {
            enemy.markedForDeletion = true
            this.score += enemy.score
            if (this.score > this.winningScore) {
              this.gameOver = true
            }
          }
        }
      })
    })

    //remove dead enemies
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
    if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deleteTime
    }
  }
}
export default Game
