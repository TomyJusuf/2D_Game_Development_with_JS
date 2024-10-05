import Layer from '../Components/Layer'
import layer1 from '../../assets/layer1.png'
import layer2 from '../../assets/layer2.png'
import layer3 from '../../assets/layer3.png'
import layer4 from '../../assets/layer4.png'
export default class Background {
  constructor(game) {
    this.game = game
    this.image1 = layer1
    this.image2 = layer2
    this.image3 = layer3
    this.image4 = layer4

    this.layer1 = new Layer(this.game, this.image1, 0.3)
    this.layer2 = new Layer(this.game, this.image2, 0.5)
    this.layer3 = new Layer(this.game, this.image3, 1)
    this.layer4 = new Layer(this.game, this.image4, 1.2)
    this.layers = [this.layer1, this.layer2, this.layer3]
  }

  update() {
    this.layers.forEach((layer) => {
      layer.update()
    })
  }
  draw(context) {
    this.layers.forEach((layer) => {
      layer.draw(context)
    })
  }
}
