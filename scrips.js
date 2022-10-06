






let inputSide;
inputSide = 96;

// ----------- INPUT FOR GRID DIMENSIONS-----------
// let rangeBox = document.getElementById('cell-dimensions').valueAsNumber;
// let textBox = document.getElementById('textDimensions');
// textBox.addEventListener('input', updateDimensions);
// function updateDimensions() {
//     textBox.valueAsNumber = inputSide;
// }




// ---------- SKETCHPAD GRID -------------

const sketchPad = document.getElementById("sketchPad");

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

 repeat(function childDiv() {
     for (let i=0; i<inputSide; i++) {
        const child = document.createElement("div");
        const chunk = children[i];
        chunk.appendChild(child);}}
     , inputSide);
    

 function repeat(childDiv, inputSide) {
     childDiv();
     inputSide && --inputSide && repeat(childDiv, inputSide);
 }

// --------- BUTTON FUNCTIONS -------------

const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const colorButton = document.getElementById('colorButton')
const color = document.getElementById('chooseColor');
const erase = document.getElementById('erase');
const reset = document.getElementById('reset');

let choice

black.addEventListener('click', function decision () {
    buttonChoice(1);
});
rainbow.addEventListener('click', function decision () {
    buttonChoice(2);
});
colorButton.addEventListener('click', function decision () {
    try {
        colorButton.showPicker();
        // A color picker is shown.
      } catch (error) {
        // Use external library when this fails.
      }
    buttonChoice(3);
});
erase.addEventListener('click', function decision () {
    buttonChoice(4);
});
reset.addEventListener('click', function decision () {
    buttonChoice(5);
});

console.log(choice)
console.log(typeof(choice))

function buttonChoice(choice) {
    if (choice == 1) {              //BLACK

        console.log(1);

        let firstDiv = Array.from(children);

        for (i=0; i<inputSide; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<inputSide; j++) {
                let single = gridSquares[i, j];

                //single.classList.remove("rainbowNow", "eraseNow");
        
                single.addEventListener("mouseover", function changeToBlack() {
                    single.style.backgroundColor = "black";
                });
            }
        }
    }

    else if (choice == 2) {         //RAINBOW

        console.log(2);



        let firstDiv = Array.from(children);

        for (i=0; i<inputSide; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<inputSide; j++) {
                let single = gridSquares[i, j];
                             

                single.addEventListener("mouseover", function rainbowRandom() {
                    let variable = Math.floor(Math.random() * 6)
                    if (variable == 0) {
                        single.style.backgroundColor = "rgb(0, 255, 0)";
                    
                    }                     
                    else if (variable == 1) {
                        single.style.backgroundColor = "rgb(255, 0, 0)";
                    
                    }                     
                    else if (variable == 2) {
                        single.style.backgroundColor = "rgb(0, 0, 255)";
                    }                     
                    else if (variable == 3) {
                        single.style.backgroundColor = "rgb(255, 255, 0)";
                    }                    
                    else if (variable = 4) {
                        single.style.backgroundColor = "rgb(255, 0, 255)";
                    }                    
                    else if (variable == 5) {
                        single.style.backgroundColor = "rgb(0, 255, 255)";
                    }                                     
                     
                 });
             }
        }
    }

    else if (choice == 3) {         //COLOR

        console.log(3);



        let firstDiv = Array.from(children);

        for (i=0; i<inputSide; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<inputSide; j++) {
                let single = gridSquares[i, j];
                
                single.classList.remove("blackNow", "rainbowNow", "eraseNow");


                
                let colorChoice = document.getElementById("chooseColor")
                
                color.addEventListener("change", function changeColor() {
                    let newColor = colorChoice.value;

                    single.addEventListener("mouseover", function setColor() {
                            single.style.backgroundColor = newColor;
                    })
                })
            }
        }    
    }

    else if (choice == 4) {         //ERASE

        console.log(4)

        let firstDiv = Array.from(children);

        for (i=0; i<inputSide; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<inputSide; j++) {
                let single = gridSquares[i, j];

                single.classList.remove ("blackNow", "rainbowNow")
        
                 single.addEventListener("mouseover", function changeToWhite() {
                     single.style.backgroundColor = "white";
                 });
            }
        }

    }

    else if (choice == 5) {         //RESET ???

        console.log(5);

         let firstDiv = Array.from(children);

         for (i=0; i<inputSide; i++) {
             let gridSquares = Array.from(firstDiv[i].childNodes);
        
             for (j=0; j<inputSide; j++) {
                 let single = gridSquares[i, j];

                single.style.backgroundColor = null;
            }
        }
    }
}



