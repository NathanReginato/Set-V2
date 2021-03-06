export default class {

  constructor(attributesArray) {
    this.element = "";
    this.topCard = attributesArray;
  }

  constructElement() {
    let color = colorArray[this.topCard[0]];
    let shape = shapeArray[this.topCard[1]];
    let shade = shadingArray[this.topCard[2]];
    let hatch = ''

    if (shade === 'hatched') {
      hatch = shapeHatchArray[this.topCard[1]];
    }

    let string = `<div id="${this.topCard.join('')}" class="card ${color} ${shade}">${svgOpeningTag} ${shape} ${hatch} ${svgClosingTag}</div>`
    .repeat(this.topCard[3] + 1);

    this.element = string;
  }

  getElement() {
    this.constructElement();
    return this.element;
  }
}

let svgOpeningTag =`<svg xmlns="http://www.w3.org/2000/svg"
   width="2.77778in" height="4.16667in"
   viewBox="0 0 200 300">`

let svgClosingTag = `</svg>`

let ovalSVGData = `<path id="Unnamed"
        fill="none" stroke="black" stroke-width="1"
        d="M 30.00,80.00
           C 30.00,80.00 30.00,220.00 30.00,220.00
             30.00,220.00 30.00,290.00 100.00,290.00
             170.00,290.00 170.00,220.00 170.00,220.00
             170.00,220.00 170.00,80.00 170.00,80.00
             170.00,80.00 170.00,10.00 100.00,10.00
             30.00,10.00 30.00,80.00 30.00,80.00 Z" />`

let squiggleSVGData = `<path id="Unnamed"
      fill="none" stroke="black" stroke-width="1"
      d="M 40.00,70.00
         C 0.00,35.50 10.00,10.00 60.00,10.00
           80.00,10.00 140.00,20.00 160.00,80.00
           170.00,110.00 120.00,190.00 160.00,230.00
           200.00,270.00 190.00,290.00 140.00,290.00
           120.00,290.00 60.00,280.00 40.00,220.00
           30.00,190.00 80.00,110.00 40.00,70.00 Z" />`

let diamondSVGData = `<path class="symbol"
      fill="none" stroke="black" stroke-width="1"
      d="M 100.00,10.00
         C 100.00,10.00 20.00,150.00 20.00,150.00
           20.00,150.00 100.00,290.00 100.00,290.00
           100.00,290.00 180.00,150.00 180.00,150.00
           180.00,150.00 100.00,10.00 100.00,10.00 Z" />`

let ovalhatchedSVGData = `<path id="hatch"
      fill="none" stroke="black" stroke-width="1"
      d="M 60.73,20.00
         C 60.73,20.00 138.73,20.00 138.73,20.00M 48.91,30.00
         C 48.91,30.00 151.09,30.00 151.09,30.00M 41.82,40.00
         C 41.82,40.00 158.00,40.00 158.00,40.00M 36.91,50.00
         C 36.91,50.00 163.64,50.00 163.64,50.00M 33.09,60.00
         C 33.09,60.00 166.73,60.00 166.73,60.00M 31.09,70.00
         C 31.09,70.00 168.18,70.00 168.18,70.00M 30.00,80.00
         C 30.00,80.00 170.00,80.00 170.00,80.00M 30.00,90.00
         C 30.00,90.00 170.00,90.00 170.00,90.00M 30.00,100.00
         C 30.00,100.00 170.00,100.00 170.00,100.00M 30.00,110.00
         C 30.00,110.36 169.82,110.00 169.82,110.00M 30.00,120.00
         C 30.00,120.00 170.00,120.00 170.00,120.00M 30.00,130.00
         C 29.82,130.00 170.00,130.00 170.00,130.00M 30.00,140.00
         C 30.00,140.00 170.00,140.00 170.00,140.00M 30.00,150.00
         C 30.00,150.00 170.00,150.00 170.00,150.00M 30.00,160.00
         C 30.00,160.00 170.00,160.00 170.00,160.00M 30.00,170.00
         C 30.00,170.00 170.00,170.00 170.00,170.00M 30.00,180.00
         C 30.00,180.00 170.00,180.00 170.00,180.00M 30.00,190.00
         C 30.00,190.00 170.00,190.00 170.00,190.00M 30.00,200.00
         C 30.00,200.00 170.00,200.00 170.00,200.00M 30.00,210.00
         C 30.18,210.00 170.00,210.00 170.00,210.00M 30.00,220.00
         C 30.00,220.00 170.00,220.00 170.00,220.00M 31.09,230.00
         C 31.09,230.00 168.55,230.00 168.55,230.00M 33.27,240.00
         C 33.27,240.00 166.73,240.00 166.73,240.00M 36.73,250.00
         C 36.73,250.00 163.27,250.00 163.27,250.00M 41.64,260.00
         C 41.64,260.00 158.36,260.00 158.36,260.00M 49.27,270.00
         C 49.27,270.00 150.55,270.00 150.55,270.00M 61.64,280.00
         C 61.64,280.00 138.55,280.00 138.55,280.00" />`

let squigglehatchedSVGData = `<path id="hatch"
      fill="none" stroke="black" stroke-width="1"
      d="M 20.00,20.00
         C 20.00,20.00 104.55,20.00 104.55,20.00M 15.64,30.00
         C 15.64,30.00 122.55,30.00 122.55,30.00M 17.09,40.00
         C 17.09,40.00 134.91,40.00 134.91,40.00M 22.00,50.00
         C 22.00,50.00 144.00,50.00 144.00,50.00M 30.00,60.00
         C 30.00,60.00 150.55,60.00 150.55,60.00M 40.00,70.00
         C 40.00,70.00 155.82,70.00 155.82,70.00M 47.64,80.00
         C 47.64,80.00 160.00,80.00 160.00,80.00M 52.18,90.00
         C 52.18,90.00 160.91,90.00 160.91,90.00M 54.73,100.00
         C 54.73,100.00 160.18,100.00 160.18,100.00M 56.00,110.00
         C 56.00,110.00 158.36,110.00 158.36,110.00M 55.82,120.00
         C 55.82,120.00 156.00,120.00 156.00,120.00M 54.55,130.00
         C 54.55,130.00 153.64,130.00 153.64,130.00M 53.27,140.00
         C 53.27,140.00 150.91,140.00 150.91,140.00M 50.91,150.00
         C 50.91,150.00 148.73,150.00 148.73,150.00M 48.91,160.00
         C 48.91,160.00 146.55,160.00 146.55,160.00M 46.73,170.00
         C 46.73,170.00 145.45,170.00 145.45,170.00M 43.45,180.00
         C 43.45,180.00 144.36,180.00 144.36,180.00M 41.45,190.00
         C 41.45,190.00 144.00,190.00 144.00,190.00M 39.45,200.00
         C 39.45,200.00 145.09,200.00 145.09,200.00M 38.36,210.00
         C 38.36,210.00 147.45,210.00 147.45,210.00M 40.00,220.00
         C 40.00,220.00 152.55,220.00 152.55,220.00M 43.82,230.00
         C 43.82,230.00 160.00,230.00 160.00,230.00M 49.45,240.00
         C 49.45,240.00 169.45,240.00 169.45,240.00M 56.00,250.00
         C 56.00,250.00 176.91,250.00 176.91,250.00M 65.09,260.00
         C 65.09,260.00 182.55,260.00 182.55,260.00M 77.27,270.00
         C 77.27,270.00 184.55,270.00 184.55,270.00M 95.27,280.00
         C 95.27,280.00 180.00,280.00 180.00,280.00" />`

let diamondhatchedSVGData = `<path id="hatch"
      fill="none" stroke="black" stroke-width="1"
      d="M 94.36,20.00
         C 94.36,20.00 105.27,20.00 105.27,20.00
           105.27,20.00 94.36,20.00 94.36,20.00 Z
         M 111.64,30.00
         C 111.64,30.00 88.36,29.82 88.36,30.00M 82.91,40.00
         C 82.91,40.00 117.09,40.00 117.09,40.00M 77.09,50.00
         C 77.09,50.00 122.91,50.00 122.91,50.00M 71.64,60.00
         C 71.64,60.00 128.18,60.00 128.18,60.00M 65.64,70.00
         C 65.64,70.00 134.18,70.00 134.18,70.00M 60.00,80.00
         C 60.00,80.00 140.00,80.00 140.00,80.00M 54.18,90.00
         C 54.18,90.18 145.64,90.00 145.64,90.00M 151.45,100.00
         C 151.45,100.00 48.36,100.00 48.36,100.00M 42.91,110.00
         C 42.91,110.00 156.91,110.00 156.91,110.00M 37.09,120.00
         C 37.09,120.00 162.91,120.00 162.91,120.00M 31.64,130.00
         C 31.64,130.00 168.36,130.00 168.36,130.00M 25.64,140.00
         C 25.64,140.00 174.00,140.00 174.00,140.00M 20.00,150.00
         C 20.00,150.00 180.00,150.00 180.00,150.00M 25.64,160.00
         C 25.64,160.00 174.18,160.00 174.18,160.00M 31.64,170.00
         C 31.64,170.00 168.36,170.00 168.36,170.00M 36.91,180.00
         C 36.91,180.00 162.73,180.00 162.73,180.00M 42.91,190.00
         C 42.91,190.00 156.91,190.00 156.91,190.00M 48.36,200.00
         C 48.36,200.00 151.45,200.00 151.45,200.00M 54.36,210.00
         C 54.36,210.00 145.64,210.00 145.64,210.00M 60.00,220.00
         C 60.00,220.00 140.00,220.00 140.00,220.00M 65.64,230.00
         C 65.64,230.00 134.18,230.00 134.18,230.00M 71.64,240.00
         C 71.64,240.00 128.18,240.00 128.18,240.00M 77.09,250.00
         C 77.09,250.00 122.55,250.00 122.55,250.00M 82.91,260.00
         C 82.91,260.00 117.09,260.00 117.09,260.00M 88.18,270.00
         C 88.18,270.00 111.64,270.00 111.64,270.00M 94.36,280.00
         C 94.36,280.00 105.64,280.00 105.64,280.00" />`



 let colorArray = ['red', 'green', 'purple'];
 let shapeArray = [ovalSVGData, squiggleSVGData, diamondSVGData];
 let shapeHatchArray = [ovalhatchedSVGData, squigglehatchedSVGData, diamondhatchedSVGData];
 let shadingArray = ['empty', 'hatched', 'full'];
