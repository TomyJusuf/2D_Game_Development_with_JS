import layer1 from '../assets/images/layer1.png'
import layer2 from '../assets/images/layer2.png'
import layer3 from '../assets/images/layer3.png'
import layer4 from '../assets/images/layer4.png'
import player from '../assets/images/player.png'
import angler1 from '../assets/images/angler1.png'
import angler2 from '../assets/images/angler2.png'
import lucky from '../assets/images/lucky.png'
import projectile from '../assets/images/projectile.png'

const imagesObj = {
  angler1,
  angler2,
  lucky,
  player,
  layer1,
  layer2,
  layer3,
  layer4,
  projectile,
}

export function appendImages(newObj) {
  const createAndAppendImage = (newObj) => {
    for (const idKey in newObj) {
      const id = idKey
      const src = newObj[idKey]
      const img = Object.assign(document.createElement('img'), { id, src })
      document.body.appendChild(img)
    }
  }

  createAndAppendImage(newObj)
}

appendImages(imagesObj)
