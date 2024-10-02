const message = `
 <h1>Welcome to My Webpack Project!</h1>
 <br>
  <p>Hi, I'm Tomas Matusek, also known as TomyJusuf. This project is designed to help developers, like yourself, learn how to use Webpack as a bundler. It's inspired by the <strong>Learn 2D Game Development with JavaScript</strong> tutorial by Frank's Laboratory.</p>
  <br>
  <p>Take a moment to explore the code, and see how everything works together—from setting up Webpack to creating a <strong>Canvas-based 2D game</strong>.</p>
  <br>
  <p>If this project helps you or if you have any questions, feel free to reach out!</p>
  <br>
  <strong>Github:</strong>
  <a href="https://github.com/TomyJusuf" target="_blank"> <strong>link here -</strong></a>
  <br>
  <br>
  <strong> - LinkedIn:</strong><a href="https://www.linkedin.com/in/tomas-matusek" target="_blank"> <strong>link here</strong></a> </p>`

const welcome = () => {
  const div = document.createElement('div')
  div.classList.add('welcome')
  div.innerHTML = message
  document.body.appendChild(div)
}

const sayHello = function () {
  const myName = 'Tomas Matusek'
  return `
    Wellcome. \nThis is my small project with Webpack bundler to help people like you\nto learn Webpack including Canva project from tutorial: \n
    *** Learn 2D Game Develoment with JavaScript created from Franks laboratory***. \n \nMy myName is Tomas Matusek a.k.a. ${myName}\n
  Feel free and take little bit time to discover how that all works.
  If that help you let me know on my [Github](https://github.com/TomyJusuf) or [LinkedIn](https://www.linkedin.com/in/tomas-matusek) profile.`
}

export { sayHello, welcome }
