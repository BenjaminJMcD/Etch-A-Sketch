
// ---------- INPUT FOR GRID DIMENSIONS-----------

    //Declare HTML elements as variables
let textBox = document.getElementById('textDimensions');
let rangeSlider = document.getElementById("cell-dimensions");
let rangeDisplay = document.getElementById('rangeDisplay');

    //Initialize grid
rangeDisplay.textContent = "16x16"
var inputSide;
createGrid(16);

    //Display change of cell dimensions for range slider
rangeSlider.addEventListener("input", function displayChange() {
    let x = document.getElementById("cell-dimensions");
    let currentVal = x.value;
    rangeDisplay.textContent = `${currentVal}x${currentVal}`;
    textBox.value = x.value; 
});

    //Update slider and cell dimensions with text box
textBox.addEventListener("change", updateSlider)

function updateSlider() {
    let x = document.getElementById("textDimensions");
    let currentVal = x.value;
    rangeDisplay.textContent = `${currentVal}x${currentVal}`;
    rangeSlider.value = x.value;
}

    //Create new grid using slider input
rangeSlider.addEventListener("change", updateGrid);

function updateGrid() {
    deleteGrid();
    let x = document.getElementById("cell-dimensions");
    let currentVal = x.valueAsNumber;
    createGrid(currentVal);
}

    //Create new grid using numerical text input
textBox.addEventListener("change", textGrid);

function textGrid() {
    deleteGrid();
    let x = document.getElementById("textDimensions");
    let currentVal = x.value;
    createGrid(parseInt(currentVal));  
}


// ---------- REMOVE OLD GRID ------------

function deleteGrid() {
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.firstChild);
    }
}


// ---------- CREATE NEW GRID -------------

function createGrid(inputSide) {
//Append variable amount of divs as flex-columns to sketchPad div
    const sketchPad = document.getElementById("sketchPad");

    function appendDiv() {
        const singleDiv = document.createElement("div");
        sketchPad.appendChild(singleDiv);
    }

    const divArray = Array(inputSide).fill(appendDiv);

    for (let i = 0; i < divArray.length; i++) {
        const func = divArray[i];
        func();
    }

//Append same variable amount of divs as flex-rows to div columns
    let children = sketchPad.childNodes;

    repeat(function childDiv() {
        for (let i=0; i<children.length; i++) {
            const child = document.createElement("div");
            const chunk = children[i];
            chunk.appendChild(child);}}
        , inputSide);
    
    function repeat(childDiv, inputSide) {
        childDiv();
        inputSide && --inputSide && repeat(childDiv, inputSide);
    }
}
// --------- BUTTON FUNCTIONS -------------

    // Create variables for button items
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const colorButton = document.getElementById('colorButton')
const color = document.getElementById('chooseColor');
const erase = document.getElementById('erase');
const reset = document.getElementById('reset');

let choice
let children = sketchPad.childNodes;

black.addEventListener('click', function decision () {
    buttonChoice(1);
});
rainbow.addEventListener('click', function decision () {
    buttonChoice(2);
});
colorButton.addEventListener('click', function decision () {
    try {
        color.showPicker();
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


function buttonChoice(choice) {
    if (choice == 1) {              //BLACK

        let firstDiv = Array.from(children);

        for (i=0; i<firstDiv.length; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<firstDiv.length; j++) {
                let single = gridSquares[i, j];

                single.addEventListener("mouseover", function changeToBlack() {
                    single.style.backgroundColor = "black";
                });
            }
        }
    }

    else if (choice == 2) {         //RAINBOW

        let firstDiv = Array.from(children);

        for (i=0; i<firstDiv.length; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<firstDiv.length; j++) {
                let single = gridSquares[i, j];
                             
                single.addEventListener("mouseover", function rainbowRandom() {
                    let variable = Math.floor(Math.random() * 7)
                    if (variable == 0) { //GREEN
                        single.style.backgroundColor = "rgb(44, 221, 56)";
                    }                     
                    else if (variable == 1) { //RED
                        single.style.backgroundColor = "rgb(255, 0, 0)";
                    }                     
                    else if (variable == 2) { //BLUE
                        single.style.backgroundColor = "rgb(20, 27, 255)";
                    }                     
                    else if (variable == 3) { //YELLOW
                        single.style.backgroundColor = "rgb(255, 223, 0)";
                    }                    
                    else if (variable == 4) { //PURPLE
                        single.style.backgroundColor = "rgb(172, 34, 276)";
                    }                    
                    else if (variable == 5) { //ORANGE
                        single.style.backgroundColor = "rgb(255, 121, 0)";
                    }                       
                    else if (variable == 6) { //INDIGO
                        single.style.backgroundColor = "rgb(52, 188, 242)";
                    }                                     
                 });
             }
        }
    }

    else if (choice == 3) {         //COLOR

        let firstDiv = Array.from(children);

        for (i=0; i<firstDiv.length; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<firstDiv.length; j++) {
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

        let firstDiv = Array.from(children);

        for (i=0; i<firstDiv.length; i++) {
            let gridSquares = Array.from(firstDiv[i].childNodes);
        
            for (j=0; j<firstDiv.length; j++) {
                let single = gridSquares[i, j];
        
                 single.addEventListener("mouseover", function changeToWhite() {
                     single.style.backgroundColor = "white";
                 });
            }
        }

    }

    else if (choice == 5) {         //RESET

         let firstDiv = Array.from(children);

         for (i=0; i<firstDiv.length; i++) {
             let gridSquares = Array.from(firstDiv[i].childNodes);
        
             for (j=0; j<firstDiv.length; j++) {
                 let single = gridSquares[i, j];

                single.style.backgroundColor = null;
            }
        }
    }
}



