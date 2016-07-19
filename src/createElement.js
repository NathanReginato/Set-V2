export default class {

  constructor(attributesArray) {
    this.element = ""
    this.topCard = attributesArray
  }

  constructElement() {
    let color = colorArray[this.topCard[0]]
    let shape = shapeArray[this.topCard[1]]
    let shade = shadingArray[this.topCard[2]]

    let string = `<div class="card ${color} ${shape} ${shade}"></div>`
    .repeat(this.topCard[3] + 1)

    this.element = string
  }

  getElement() {
    this.constructElement()
    return this.element
  }
}

let colorArray = ['red', 'green', 'purple'];
let shapeArray = ['oval', 'squiggle', 'diamond'];
let shadingArray = ['empty', 'hatched', 'full'];
