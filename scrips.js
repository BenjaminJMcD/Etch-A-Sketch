const sketchPad = document.getElementById("sketchPad");
const divSquares = document.getElementById("divSquares");
//const inputSide = document.getElementById("textDimensions").value;

//inputSide.addEventListener("change", multiplyValue);

//console.log(typeof(inputSide));

inputSide = 16;


//  function multiplyValue(inputSide) {
//          if (isNaN(inputSide)) {
//              return 0;
//          }
//         divAmount = (inputSide * inputSide);
//         return divAmount;
//  }
 
//console.log(inputSide);

//multiplyValue(3);

// console.log(divAmount);

function appendDiv() {
    const singleDiv = document.createElement("div");
    sketchPad.appendChild(singleDiv);
}

const divArray = Array(inputSide).fill(appendDiv);

for (let i = 0; i < inputSide; i++) {
    const func = divArray[i];
    func();
}

let children = sketchPad.childNodes;
console.log(children);

 repeat(function childDiv() {
     const child = document.createElement("div");
    for (let i=0; i<inputSide; i++) {
        const chunk = children[i];
        chunk.appendChild(child);}}
     , inputSide);

 function repeat(childDiv, inputSide) {
     childDiv();
     inputSide && --inputSide && repeat(childDiv, inputSide);
 }




// function divChild() {
//     const div = document.createElement("div");
//     const chile = childArray[i]
//     for (i=0; i<children.length; i++) {
//         children.appendChild(chile());
//     }
// }

//childArray.forEach(doIt);

// function doIt() {
// for (let i=0; i<children.length; i++) {
//     const child = document.createElement("div");
//     children[i].appendChild(child);
// }
// }

// repeat(function childDiv() {
//     const child = document.createElement("div");
//     children.appendChild(child);}, inputSide);

// function repeat(childDiv, inputSide) {
//     childDiv();
//     inputSide && --inputSide && repeat(childDiv, inputSide);
// }





// repeat(function appendDiv() {
//       const singleDiv = document.createElement("div");
//       sketchPad.appendChild(singleDiv);} 
//       ,
//       inputSide);
    
//   function repeat(appendDiv, inputSide) {
//       appendDiv();
//       inputSide && --inputSide && repeat(appendDiv, inputSide);
//}

//  repeatChild(function childDivs() {
//      const childDiv = document.createElement("div");
//      singleDiv.appendChild(childDiv);}
//      , inputSide);

//  function repeatChild(childDivs, inputSide) {
//      childDivs();
//      inputSide && --inputSide && repeatChild(childDivs, inputSide);
//  }



// create squares from 16-960 squared divs
// take number given. square it. append divSquares that many times -1 and add to HTML