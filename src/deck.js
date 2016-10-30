export default class {

  constructor() {
    this.deck = []
  }

  generate() {
    let cardCombinations = 4;
    for (var i = 0; i < cardCombinations; i++) {
      for (var j = 0; j < cardCombinations; j++) {
        for (var k = 0; k < cardCombinations; k++) {
          for (var l = 0; l < cardCombinations; l++) {
            this.deck.push([i,j,k,l]);
          }
        }
      }
    }
  }

  shuffle() {
    this.deck.sort(() => 0.5 - Math.random());
  }

  getCard() {
    let topCard = this.deck.pop();
    return topCard;
  }

  getDeck() {
    return this.deck
  }
}
