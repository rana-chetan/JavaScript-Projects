// Select DOM elements
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

// Game variables
let turnO = true; // true -> Player O, false -> Player X
let moveCount = 0;

// Winning combinations
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Reset game function
const resetGame = () => {
    turnO = true;
    moveCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

// Disable all boxes after game over
const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

// Enable all boxes for a new game
const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

// Display the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check for a draw
const checkDraw = () => {
    if (moveCount === 9) {
        msg.innerText = "Game was a Draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const pos1 = boxes[pattern[0]].innerText;
        const pos2 = boxes[pattern[1]].innerText;
        const pos3 = boxes[pattern[2]].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return; // stop checking if winner is found
        }
    }

    // If no winner, check for draw
    checkDraw();
};

// Add click event listener to all boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#b0413e";
        } else {
            box.innerText = "X";
            box.style.color = "#3e88b0";
        }
        box.disabled = true;
        turnO = !turnO;
        moveCount++;

        checkWinner();
    });
});

// Event listeners for reset and new game buttons
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);