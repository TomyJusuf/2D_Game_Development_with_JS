import layer1 from '../assets/layer1.png'
import layer2 from '../assets/layer2.png'
import layer3 from '../assets/layer3.png'
import layer4 from '../assets/layer4.png'
import player from '../assets/player.png'

const imageSources = [layer1, layer2, layer3, layer4]
const playerImagePath = player

export function appendImages(imgPath, playerSrc) {
  const createAndAppendImage = (src, id) => {
    const img = Object.assign(document.createElement('img'), { id, src })
    document.body.appendChild(img)
  }

  imgPath.forEach((src, index) =>
    createAndAppendImage(src, `layer${index + 1}`)
  )

  createAndAppendImage(playerSrc, 'player')
}

appendImages(imageSources, playerImagePath)
