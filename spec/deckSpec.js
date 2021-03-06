import Deck from "../src/deck.js"

describe("Deck suit", function() {

  let deck = new Deck()

  it("will return an array", function() {
    expect(deck.getDeck()).toEqual([]);
  });

  it("will return an array of arrays that holds every possible card combination", function() {
    deck.generate()
    expect(deck.getDeck()).toEqual(baseArray);
  });

  it("will return the last element in the array", function() {
    deck.generate()
    expect(deck.getCard()).toEqual([3,3,3,3]);
  });

  it("will return an array that is shuffled", function() {
    deck.generate()
    deck.shuffle()
    expect(deck.getDeck()).toEqual(jasmine.arrayContaining(baseArray));
    expect(deck.getDeck()).not.toEqual(baseArray);
  });

});


const baseArray = [[ 0, 0, 0, 0 ],
[ 0, 0, 0, 1 ],
[ 0, 0, 0, 2 ],
[ 0, 0, 0, 3 ],
[ 0, 0, 1, 0 ],
[ 0, 0, 1, 1 ],
[ 0, 0, 1, 2 ],
[ 0, 0, 1, 3 ],
[ 0, 0, 2, 0 ],
[ 0, 0, 2, 1 ],
[ 0, 0, 2, 2 ],
[ 0, 0, 2, 3 ],
[ 0, 0, 3, 0 ],
[ 0, 0, 3, 1 ],
[ 0, 0, 3, 2 ],
[ 0, 0, 3, 3 ],
[ 0, 1, 0, 0 ],
[ 0, 1, 0, 1 ],
[ 0, 1, 0, 2 ],
[ 0, 1, 0, 3 ],
[ 0, 1, 1, 0 ],
[ 0, 1, 1, 1 ],
[ 0, 1, 1, 2 ],
[ 0, 1, 1, 3 ],
[ 0, 1, 2, 0 ],
[ 0, 1, 2, 1 ],
[ 0, 1, 2, 2 ],
[ 0, 1, 2, 3 ],
[ 0, 1, 3, 0 ],
[ 0, 1, 3, 1 ],
[ 0, 1, 3, 2 ],
[ 0, 1, 3, 3 ],
[ 0, 2, 0, 0 ],
[ 0, 2, 0, 1 ],
[ 0, 2, 0, 2 ],
[ 0, 2, 0, 3 ],
[ 0, 2, 1, 0 ],
[ 0, 2, 1, 1 ],
[ 0, 2, 1, 2 ],
[ 0, 2, 1, 3 ],
[ 0, 2, 2, 0 ],
[ 0, 2, 2, 1 ],
[ 0, 2, 2, 2 ],
[ 0, 2, 2, 3 ],
[ 0, 2, 3, 0 ],
[ 0, 2, 3, 1 ],
[ 0, 2, 3, 2 ],
[ 0, 2, 3, 3 ],
[ 0, 3, 0, 0 ],
[ 0, 3, 0, 1 ],
[ 0, 3, 0, 2 ],
[ 0, 3, 0, 3 ],
[ 0, 3, 1, 0 ],
[ 0, 3, 1, 1 ],
[ 0, 3, 1, 2 ],
[ 0, 3, 1, 3 ],
[ 0, 3, 2, 0 ],
[ 0, 3, 2, 1 ],
[ 0, 3, 2, 2 ],
[ 0, 3, 2, 3 ],
[ 0, 3, 3, 0 ],
[ 0, 3, 3, 1 ],
[ 0, 3, 3, 2 ],
[ 0, 3, 3, 3 ],
[ 1, 0, 0, 0 ],
[ 1, 0, 0, 1 ],
[ 1, 0, 0, 2 ],
[ 1, 0, 0, 3 ],
[ 1, 0, 1, 0 ],
[ 1, 0, 1, 1 ],
[ 1, 0, 1, 2 ],
[ 1, 0, 1, 3 ],
[ 1, 0, 2, 0 ],
[ 1, 0, 2, 1 ],
[ 1, 0, 2, 2 ],
[ 1, 0, 2, 3 ],
[ 1, 0, 3, 0 ],
[ 1, 0, 3, 1 ],
[ 1, 0, 3, 2 ],
[ 1, 0, 3, 3 ],
[ 1, 1, 0, 0 ],
[ 1, 1, 0, 1 ],
[ 1, 1, 0, 2 ],
[ 1, 1, 0, 3 ],
[ 1, 1, 1, 0 ],
[ 1, 1, 1, 1 ],
[ 1, 1, 1, 2 ],
[ 1, 1, 1, 3 ],
[ 1, 1, 2, 0 ],
[ 1, 1, 2, 1 ],
[ 1, 1, 2, 2 ],
[ 1, 1, 2, 3 ],
[ 1, 1, 3, 0 ],
[ 1, 1, 3, 1 ],
[ 1, 1, 3, 2 ],
[ 1, 1, 3, 3 ],
[ 1, 2, 0, 0 ],
[ 1, 2, 0, 1 ],
[ 1, 2, 0, 2 ],
[ 1, 2, 0, 3 ],
[ 1, 2, 1, 0 ],
[ 1, 2, 1, 1 ],
[ 1, 2, 1, 2 ],
[ 1, 2, 1, 3 ],
[ 1, 2, 2, 0 ],
[ 1, 2, 2, 1 ],
[ 1, 2, 2, 2 ],
[ 1, 2, 2, 3 ],
[ 1, 2, 3, 0 ],
[ 1, 2, 3, 1 ],
[ 1, 2, 3, 2 ],
[ 1, 2, 3, 3 ],
[ 1, 3, 0, 0 ],
[ 1, 3, 0, 1 ],
[ 1, 3, 0, 2 ],
[ 1, 3, 0, 3 ],
[ 1, 3, 1, 0 ],
[ 1, 3, 1, 1 ],
[ 1, 3, 1, 2 ],
[ 1, 3, 1, 3 ],
[ 1, 3, 2, 0 ],
[ 1, 3, 2, 1 ],
[ 1, 3, 2, 2 ],
[ 1, 3, 2, 3 ],
[ 1, 3, 3, 0 ],
[ 1, 3, 3, 1 ],
[ 1, 3, 3, 2 ],
[ 1, 3, 3, 3 ],
[ 2, 0, 0, 0 ],
[ 2, 0, 0, 1 ],
[ 2, 0, 0, 2 ],
[ 2, 0, 0, 3 ],
[ 2, 0, 1, 0 ],
[ 2, 0, 1, 1 ],
[ 2, 0, 1, 2 ],
[ 2, 0, 1, 3 ],
[ 2, 0, 2, 0 ],
[ 2, 0, 2, 1 ],
[ 2, 0, 2, 2 ],
[ 2, 0, 2, 3 ],
[ 2, 0, 3, 0 ],
[ 2, 0, 3, 1 ],
[ 2, 0, 3, 2 ],
[ 2, 0, 3, 3 ],
[ 2, 1, 0, 0 ],
[ 2, 1, 0, 1 ],
[ 2, 1, 0, 2 ],
[ 2, 1, 0, 3 ],
[ 2, 1, 1, 0 ],
[ 2, 1, 1, 1 ],
[ 2, 1, 1, 2 ],
[ 2, 1, 1, 3 ],
[ 2, 1, 2, 0 ],
[ 2, 1, 2, 1 ],
[ 2, 1, 2, 2 ],
[ 2, 1, 2, 3 ],
[ 2, 1, 3, 0 ],
[ 2, 1, 3, 1 ],
[ 2, 1, 3, 2 ],
[ 2, 1, 3, 3 ],
[ 2, 2, 0, 0 ],
[ 2, 2, 0, 1 ],
[ 2, 2, 0, 2 ],
[ 2, 2, 0, 3 ],
[ 2, 2, 1, 0 ],
[ 2, 2, 1, 1 ],
[ 2, 2, 1, 2 ],
[ 2, 2, 1, 3 ],
[ 2, 2, 2, 0 ],
[ 2, 2, 2, 1 ],
[ 2, 2, 2, 2 ],
[ 2, 2, 2, 3 ],
[ 2, 2, 3, 0 ],
[ 2, 2, 3, 1 ],
[ 2, 2, 3, 2 ],
[ 2, 2, 3, 3 ],
[ 2, 3, 0, 0 ],
[ 2, 3, 0, 1 ],
[ 2, 3, 0, 2 ],
[ 2, 3, 0, 3 ],
[ 2, 3, 1, 0 ],
[ 2, 3, 1, 1 ],
[ 2, 3, 1, 2 ],
[ 2, 3, 1, 3 ],
[ 2, 3, 2, 0 ],
[ 2, 3, 2, 1 ],
[ 2, 3, 2, 2 ],
[ 2, 3, 2, 3 ],
[ 2, 3, 3, 0 ],
[ 2, 3, 3, 1 ],
[ 2, 3, 3, 2 ],
[ 2, 3, 3, 3 ],
[ 3, 0, 0, 0 ],
[ 3, 0, 0, 1 ],
[ 3, 0, 0, 2 ],
[ 3, 0, 0, 3 ],
[ 3, 0, 1, 0 ],
[ 3, 0, 1, 1 ],
[ 3, 0, 1, 2 ],
[ 3, 0, 1, 3 ],
[ 3, 0, 2, 0 ],
[ 3, 0, 2, 1 ],
[ 3, 0, 2, 2 ],
[ 3, 0, 2, 3 ],
[ 3, 0, 3, 0 ],
[ 3, 0, 3, 1 ],
[ 3, 0, 3, 2 ],
[ 3, 0, 3, 3 ],
[ 3, 1, 0, 0 ],
[ 3, 1, 0, 1 ],
[ 3, 1, 0, 2 ],
[ 3, 1, 0, 3 ],
[ 3, 1, 1, 0 ],
[ 3, 1, 1, 1 ],
[ 3, 1, 1, 2 ],
[ 3, 1, 1, 3 ],
[ 3, 1, 2, 0 ],
[ 3, 1, 2, 1 ],
[ 3, 1, 2, 2 ],
[ 3, 1, 2, 3 ],
[ 3, 1, 3, 0 ],
[ 3, 1, 3, 1 ],
[ 3, 1, 3, 2 ],
[ 3, 1, 3, 3 ],
[ 3, 2, 0, 0 ],
[ 3, 2, 0, 1 ],
[ 3, 2, 0, 2 ],
[ 3, 2, 0, 3 ],
[ 3, 2, 1, 0 ],
[ 3, 2, 1, 1 ],
[ 3, 2, 1, 2 ],
[ 3, 2, 1, 3 ],
[ 3, 2, 2, 0 ],
[ 3, 2, 2, 1 ],
[ 3, 2, 2, 2 ],
[ 3, 2, 2, 3 ],
[ 3, 2, 3, 0 ],
[ 3, 2, 3, 1 ],
[ 3, 2, 3, 2 ],
[ 3, 2, 3, 3 ],
[ 3, 3, 0, 0 ],
[ 3, 3, 0, 1 ],
[ 3, 3, 0, 2 ],
[ 3, 3, 0, 3 ],
[ 3, 3, 1, 0 ],
[ 3, 3, 1, 1 ],
[ 3, 3, 1, 2 ],
[ 3, 3, 1, 3 ],
[ 3, 3, 2, 0 ],
[ 3, 3, 2, 1 ],
[ 3, 3, 2, 2 ],
[ 3, 3, 2, 3 ],
[ 3, 3, 3, 0 ],
[ 3, 3, 3, 1 ],
[ 3, 3, 3, 2 ],
[ 3, 3, 3, 3 ]
]
