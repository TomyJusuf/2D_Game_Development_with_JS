import layer1 from '../assets/layer1.png'
import layer2 from '../assets/layer2.png'
import layer3 from '../assets/layer3.png'
import layer4 from '../assets/layer4.png'

const imageSources = [layer1, layer2, layer3, layer4]

export function appendImages(imgPath) {
  imgPath.forEach((element, index) => {
    const img = document.createElement('img')
    const imgName = `layer${index + 1}`

    img.id = imgName
    img.src = element
    document.body.appendChild(img)
  })
}

appendImages(imageSources)
