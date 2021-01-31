let canvas = document.querySelector('#snake');
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = { 
    x: 8 * box,
    y: 8 * box
}
let direct = "right";

function criarBG() {
    context.fillStyle = 'lightgreen';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function iniciarJogo() {
    criarBG();
    criarCobrinha();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direct == "right") snakeX += box;
    if(direct == "left") snakeX -= box;
    if (direct == "up") snakeY += box;
    if (direct == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y:snakeY
    }

    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100);