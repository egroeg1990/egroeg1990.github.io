let brush = document.getElementById("objectMove").getContext("2d");
let canvasSquared = 400

let object = [1/10*canvasSquared, 4/5*canvasSquared, 1/10*canvasSquared]

let delta = [5, 5]

let jumpImpact = 20
let gravity = 1           
let timer = null   
let left = false
let right = false
let ground = false

document.addEventListener("keydown", onkeydown)
document.addEventListener("keyup", onkeyup)
drawBackground()
drawSquare()

function drawSquare (){
    brush.fillStyle = "#DD0000"
    if(object[0] < 0) {
        brush.fillRect(object[0], object[1], object[2], object[2])  
        brush.fillRect(object[0] + canvasSquared, object[1], object[2], object[2])
    } else if (object[0] > canvasSquared - object[2]){
    brush.fillRect(object[0], object[1], object[2], object[2])
    brush.fillRect(object[0] - canvasSquared, object[1], object[2], object[2])
    } else{
        brush.fillRect(object[0], object[1], object[2], object[2])
    }
}

function drawBackground (){
    brush.fillStyle = "#00AAff"
    brush.fillRect(0, 0, canvasSquared, canvasSquared)
    brush.fillStyle = "#00AA00"
    brush.fillRect(0, 29/30*canvasSquared, canvasSquared, 1/30*canvasSquared)
}

function drawFrame(){
    delta[1] += gravity
    object[1] += delta[1]
        if(left){
            object[0] -= delta[0]
        }
        if (right){
            object[0] += delta[0]
        }
        if(object[1] > canvasSquared - object[2]){  
            object[1] = canvasSquared - object[2];
            delta[1] = 0
            ground = true
        }else{
            ground= false
        }

        if (object[0] < - object[2]) {
            object[0] = canvasSquared - object[2]
        }
        if ( object[0] > canvasSquared) {
            object[0] = 0
        }
    drawBackground()
    drawSquare()  
}

function onkeydown (e) {
    if (e.key === "Enter" || e.key === "s") {
       clearInterval(timer)
       y = 0
       timer = setInterval(drawFrame, 20)
    } else if (e.key === "ArrowLeft" || e.key === "a"){
       left = true
    } else if (e.key === "ArrowRight"|| e.key === "d"){
       right = true
    } else if (e.key === "ArrowUp" || e.key === " " || e.key === "w") {
       if (ground)
       delta[1] -= jumpImpact
    }
}

function onkeyup (e) {
    if (e.key === "ArrowLeft" || e.key === "a"){
       left = false
    } else if (e.key === "ArrowRight" || e.key === "d"){
        right = false
    } 
}