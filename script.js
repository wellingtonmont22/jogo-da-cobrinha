let canvas = document.querySelector('#snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = { 
    x: 8 * box,
    y: 8 * box
}
let direct = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function foodDrop() {
    context.fillStyle = "white";
    context.fillRect(food.x, food.y, box, box);
}
document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direct != "right") direct = "left";
    if(event.keyCode == 38 && direct != "down") direct = "up";
    if(event.keyCode == 39 && direct != "left") direct = "right";
    if(event.keyCode == 40 && direct != "up") direct = "down";
}

function iniciarJogo() {
    if(snake[0].x > 15 * box && direct == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direct == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direct == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direct == "up") snake[0].y = 16 * box;

    criarBG();
    criarCobrinha();
    foodDrop();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direct == "right") snakeX += box;
    if(direct == "left") snakeX -= box;
    if (direct == "up") snakeY -= box;
    if (direct == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    

    let newHead = {
        x: snakeX,
        y:snakeY
    }

    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100);