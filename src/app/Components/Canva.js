const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

class Canva {
  constructor(width, height, background) {
    this.width = width
    this.height = height
    this.background = background
    this.canvas = canvas
    this.ctx = ctx
    this.canvas.width = this.width
    this.canvas.height = this.height
  }
}
const canva = new Canva(1500, 500, 'yellow')

export default canva
