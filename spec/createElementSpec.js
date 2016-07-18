import Element from "../src/createElement.js"

describe("Create element suit", function() {

  let element = new Element()

  it("will return an HTML element", function() {
    expect(element.getElement()).toEqual("");
  });

});
