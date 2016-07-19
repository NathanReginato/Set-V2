
export default class {

  constructor(attributesArray) {
    this.element = ""
    this.topCard = attributesArray
  }

  constructElement(symbolArray) {
    this.element = `<div class="card red oval empty"></div>`
  }

  getElement() {
    this.constructElement()
    return this.element
  }
}

let colorArray = ['red', 'green', 'purple'];
let shapeArray = ['oval', 'squiggle', 'diamond'];
let shadingArray = ['empty', 'hatched', 'full'];
