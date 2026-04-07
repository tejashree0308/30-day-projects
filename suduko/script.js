const board = document.getElementById("sudoku-board");
const message = document.getElementById("message");

let solution = [];

function createBoard() {
    board.innerHTML = "";

    for (let i = 0; i < 81; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.min = "1";
        input.max = "9";
        input.classList.add("cell");

        board.appendChild(input);
    }
}

function generateSudoku() {
    message.textContent = "";

    // Simple predefined puzzle + solution
    let puzzle = [
        5,3,"", "",7,"", "", "", "",
        6,"","", 1,9,5, "", "", "",
        "",9,8, "", "", "", "",6,"",

        8,"","", "",6,"", "", "",3,
        4,"","", 8,"",3, "", "",1,
        7,"","", "",2,"", "", "",6,

        "",6,"", "", "", "", 2,8,"",
        "","", "", 4,1,9, "", "",5,
        "","", "", "",8,"", "",7,9
    ];

    solution = [
        5,3,4,6,7,8,9,1,2,
        6,7,2,1,9,5,3,4,8,
        1,9,8,3,4,2,5,6,7,

        8,5,9,7,6,1,4,2,3,
        4,2,6,8,5,3,7,9,1,
        7,1,3,9,2,4,8,5,6,

        9,6,1,5,3,7,2,8,4,
        2,8,7,4,1,9,6,3,5,
        3,4,5,2,8,6,1,7,9
    ];

    createBoard();

    let cells = document.querySelectorAll(".cell");

    puzzle.forEach((value, index) => {
        if (value !== "") {
            cells[index].value = value;
            cells[index].disabled = true;
        }
    });
}

function checkSolution() {
    let cells = document.querySelectorAll(".cell");
    let correct = true;

    cells.forEach((cell, index) => {
        if (parseInt(cell.value) !== solution[index]) {
            correct = false;
        }
    });

    if (correct) {
        message.textContent = "🎉 Correct Solution!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Try Again!";
        message.style.color = "red";
    }
}

// Load board initially
generateSudoku();