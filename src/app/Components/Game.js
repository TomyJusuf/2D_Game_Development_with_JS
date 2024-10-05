import Player from './Player'
import InputHandler from './Inputhandler'
import UI from './UI'
import { Angler, Angler2, Lucky } from './Enemy'
import background from './Background'
class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.background = new background(this)
    this.player = new Player(this)
    this.input = new InputHandler(this)
    this.ui = new UI(this)
    this.enemies = []
    this.score = 0
    this.enemyTimer = 0
    this.enemyInterval = 1000
    this.ammo = 20 //Limit shooting
    this.maxAmmo = 30
    this.ammoTimer = 0
    this.ammoInterval = 500
    this.gameOver = false
    this.winningScore = 10
    this.gameTime = 0
    this.timeLimit = 50000
    this.speed = 0.8
    this.debug = true
  }
  update(deleteTime) {
    if (!this.gameOver) this.gameTime += deleteTime
    if (this.gameTime > this.timeLimit) this.gameOver = true

    this.background.update()
    this.background.layer4.update()

    this.player.update(this.input, deleteTime)
    this.#ammo_timer(deleteTime)
    this.#enemyUpdate(deleteTime)
  }

  draw(context) {
    this.background.draw(context)
    this.player.draw(context)
    this.ui.draw(context)
    this.enemies.forEach((enemy) => {
      enemy.draw(context)
    })
    this.background.layer4.draw(context)
  }
  addEnemy() {
    const randomize = Math.random()
    if (randomize < 0.3) this.enemies.push(new Angler(this))
    else if (randomize < 0.6) this.enemies.push(new Angler2(this))
    else this.enemies.push(new Lucky(this))
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
        // this.gameOver = true
        enemy.markedForDeletion = true
        if (enemy.type === 'lucky') this.player.enterPowerUp()
        else this.score--
      }
      //score points
      //check if projectiles hit enemy
      this.player.projectile.forEach((projectile) => {
        if (this.checkCollision(projectile, enemy)) {
          enemy.lives -= 1
          projectile.markForDeletion = true
          if (enemy.lives <= 0) {
            enemy.markedForDeletion = true
            if (!this.gameOver) {
              this.score += enemy.score
            }
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
