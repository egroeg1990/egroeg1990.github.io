let brush = document.getElementById("flappybird").getContext("2d")
let w = 400
let h = 400
let birdX = 50
let birdY = 200
let birdDy = 0 // Increase along y axis in each variable
let birdSize = 20
let g = .5    // Gravity
let jumpImpact = 4// Speed Increase along y axis when bird jumps
let timerId = null;
let pipes = [[150, 50, 50, 150], [300, 100, 50, 150],[500, 80, 40, 150]]
let pipeDx = 1.5
let score = 0
document.addEventListener("keypress", onkeydown)
document.addEventListener("keyup", onkeydown)
drawFrame()
function isXyInRect (x, y, rx, ry, rw, rh){
    if(x > rx && x < rx+rw && y > ry && y < ry+rh){
        return true
    } else {
        return false
    }
}

function gameOver(){
    clearInterval(timerId)
    brush.fillStyle = "#000000"
    brush.textAlign = "center"
    brush.textBaseline = "top"
    brush.font = "30px Arial"
    brush.fillText("GAME OVER", w/2, h/2)
}

function processCollision (){
    for (let i = 0; i<pipes.length; ++i){
        let pipe = pipes[i]
        if(isXyInRect(birdX, birdY,                       pipe[0], 0, pipe[2], pipe[1] ) ||
        isXyInRect(birdX+birdSize, birdY,              pipe[0], 0, pipe[2], pipe[1]) ||
        isXyInRect(birdX, birdY+birdSize,              pipe[0], pipe[1] + pipe[3], pipe[2], h-pipe[1]-pipe[3]) ||
        isXyInRect(birdX+birdSize, birdY+birdSize,     pipe[0], pipe[1]+ pipe[3], pipe[2], h-pipe[1]-pipe[3])) {

        
        gameOver()
        break
        }
    }
    if(birdY <= 0 || birdY >= h){
        gameOver()
    }
}

function drawPipes (){
    brush.fillStyle = "#00FF00"
    for(let i = 0; i < pipes.length; ++i){
        let pipe = pipes[i]
        brush.fillRect(pipe[0], 0, pipe[2], pipe[1])
        brush.fillRect(pipe[0], pipe[1]+pipe[3], pipe[2], h-pipe[1], pipe[3])
        
    }
}

function onkeydown (e){
    if(e.key === "Enter"){
        resetData()
        clearInterval(timerId)
        timerId =  setInterval(drawFrame, 20)

    } else if(e.key === " "){
        birdDy -= jumpImpact + g
    }
}

function resetData (){
    birdY = 200
    birdDy = 0
    score = 0
    pipes = [[400, 50, 50, 125], [600, 100, 50, 80],[800, 80, 40, 50]]
    document.getElementById("h").innerHTML = "Score: " + score 
}

function drawFrame (){
    updateData()
    drawBackground()
    drawPipes()
    drawGround()
    drawBird()
    processCollision()
}
function updateData (){
    birdDy += g     // Speed Increaze by the Gravity
    birdY += birdDy // Y Position Increase by Speed (birdDy)
    // update the pipes
    for (let i = 0; i < pipes.length; ++i){
        let pipe = pipes[i]
        pipe[0] -= pipeDx
        if (pipe[0]+pipe[2] <= 0){
            pipe[0] = w + Math.floor(Math.random()*50 + 50)
            ++score
            document.getElementById("h").innerHTML = "Score:"+ score
        }
    }
}

function drawBird(){
    brush.fillStyle = "#FF0000"  // Bird
    brush.fillRect(birdX, birdY, birdSize, birdSize)
}

function drawBackground (){
    brush.fillStyle = "#85C1E9"//Sky
    brush.fillRect(0, 0, w, 12/16*h)
    brush.fillStyle = "#000000"//Separator
    brush.fillRect(0, 12/16*h, w, 1/16*h)
}
function drawGround(){
    brush.fillStyle = "#F5B041"//Ground
    brush.fillRect(0, 13/16*h, w, 3/16*h)
}