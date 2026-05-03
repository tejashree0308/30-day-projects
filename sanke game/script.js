const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let box = 20;

// Snake starting position
let snake = [{ x: 200, y: 200 }];

// Food position
let food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box
};

// Direction
let direction = "RIGHT";

// Controls
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
    else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
    else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

// Draw everything
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 400, 400);

    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, box, box);
    });

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Move snake
    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "LEFT") headX -= box;
    if (direction === "UP") headY -= box;
    if (direction === "RIGHT") headX += box;
    if (direction === "DOWN") headY += box;

    // Eat food
    if (headX === food.x && headY === food.y) {
        food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box
        };
    } else {
        snake.pop();
    }

    let newHead = { x: headX, y: headY };

    // Game over conditions
    if (
        headX < 0 || headY < 0 ||
        headX >= 400 || headY >= 400 ||
        snake.some(part => part.x === newHead.x && part.y === newHead.y)
    ) {
        clearInterval(game);
        alert("Game Over!");
    }

    snake.unshift(newHead);
}

// Game loop
let game = setInterval(draw, 100);