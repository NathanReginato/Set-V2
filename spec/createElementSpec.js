import Element from "../src/createElement.js"

describe("Create element suit", function() {

  let element = new Element([0,0,0,0])

  it("will return a div element", function() {
    expect(element.getElement()).toEqual(`<div class="card red oval empty"></div>`);
  });

});
