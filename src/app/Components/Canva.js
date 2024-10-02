const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
export default class Canva {
  constructor(width, height, background) {
    this.width = width
    this.height = height
    this.background = background
    this.canvas = canvas
    this.ctx = ctx
    this.canvas.width = this.width
    this.canvas.height = this.height
  }
  log() {
    console.log(this.width, this.height, this.background)
  }
}
