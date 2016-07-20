import Element from "../src/createElement.js"

describe("Create element suit", function() {

  let element1 = new Element([0,0,0,0])

  it("will return a div element", function() {
    expect(element1.getElement()).toMatch(/<div class="card red empty">/)
  });

  let element2 = new Element([1,1,1,1])

  it("will return a div element", function() {
    expect(element2.getElement()).toMatch(/<div class="card green hatched">/)
  });

  let element3 = new Element([2,2,2,2])

  it("will return a div element", function() {
    expect(element3.getElement()).toMatch(/<div class="card purple full">/)
  });



});
