                                        //Speed Demon Bob Game\\
//----------------------------------------------/Variables\-----------------------------------------------------------
let draw = document.getElementById("speedDemonBob").getContext("2d")

//array layout [canvas X positions, canvas Y positions, canvas width, canvas height]
let canvas = [
            //------------------------------------------- X
             0 //---------------------------------------- canvas[0]
            //------------------------------------------- Y
            ,0 //---------------------------------------- canvas[1]
            //------------------------------------------- Width
            ,500 //-------------------------------------- canvas[2]
            //------------------------------------------- Height
            ,500 //-------------------------------------- canvas[3]
            ]

//array layout [road line width, vehicle width, sigh width]
let objectW = [
             1/100*canvas[2]//--------------------------- objectW[0]
            ,1/10*canvas[2] //--------------------------- objectW[1]
            ,1/15*canvas[2] //--------------------------- objectW[2]
            ,3/20*canvas[2] //--------------------------- objectW[2]
            ]

//array layout [[laneMarkers X positions], [laneMarkers Y positions], laneMarkers width, laneMarkers height]
let laneMarkers = [ //------------------------------- X - laneMarkers[0]
             [2/5*canvas[2]-1/2*objectW[0]//------------- laneMarkers[0][0] 
             ,3/5*canvas[2]-1/2*objectW[0]]//------------ laneMarkers[0][1]
            //--------------------------------------- Y - laneMarkers[1]
            ,[1/20*canvas[3]//--------------------------- laneMarkers[1][0]
             ,3/20*canvas[3]//--------------------------- laneMarkers[1][1]
             ,5/20*canvas[3]//--------------------------- laneMarkers[1][2]
             ,7/20*canvas[3]//--------------------------- laneMarkers[1][3]
             ,9/20*canvas[3]//--------------------------- laneMarkers[1][4]
             ,11/20*canvas[3]//-------------------------- laneMarkers[1][5]
             ,13/20*canvas[3]//-------------------------- laneMarkers[1][6]
             ,15/20*canvas[3]//-------------------------- laneMarkers[1][7]
             ,17/20*canvas[3]//-------------------------- laneMarkers[1][8]
             ,19/20*canvas[3]]//------------------------- laneMarkers[1][9]
            //------------------------------------------- Width
            ,objectW[0]//-------------------------------- laneMarkers[2]
            //------------------------------------------- Height
            ,1/20*canvas[3]//---------------------------- laneMarkers[3]
            ]

let bob = [1/25*canvas[2], 1/25*canvas[3]]
         

//array layout [[traffic X positions], [traffic Y positions], traffic width, traffic height]
let traffic = [
            //--------------------------------------- X - traffic[0]
            [3/10*canvas[2]-1/2*objectW[1]//------------- traffic[0][0]
            ,5/10*canvas[2]-1/2*objectW[1]//------------- traffic[0][1]
            ,7/10*canvas[2]-1/2*objectW[1]]//------------ traffic[0][2]
            //--------------------------------------- Y - traffic[1]
            ,[1/4*canvas[3]//---------------------------- traffic[1][0]
            ,15/20*canvas[3]//--------------------------- traffic[1][1]
            ,1/3*canvas[3]]//---------------------------- traffic[1][2]
            //------------------------------------------- Width
            ,objectW[1]//-------------------------------- traffic[2]
            //------------------------------------------- Height
            ,3/20*canvas[3]//---------------------------- traffic[3]
            ]
let trafficSpeedMax = 5
let trafficSpeedMin = 0
let trafficStartMax = 10
let trafficStartMin = 0

//array layout [car X positions, car Y positions, car width, car height]
let car = [
            //------------------------------------------- X
            1/2*canvas[2]-1/2*objectW[1]//--------------- car[0]   
            //------------------------------------------- Y 
            ,2/5*canvas[3]//----------------------------- car[1]
            //------------------------------------------- Width
            ,objectW[1]//-------------------------------- car[2]
            //------------------------------------------- Height
            ,3/20*canvas[3]//---------------------------- car[3]
            ]
let carDelta = [15, 15] //[Delta X, Delta Y]

//Array layout [left, right, up, down]
let move = [false, false, false, false]

let intervalTime = 100
let deltaY = 10
let max = 10
let min = 1

//Array layout [score start, [Position: x, y] ]
let score = [0, [9/10*canvas[2]-1/2*objectW[3], 1/20*canvas[3]]]

let timer = 0
let timerId = null

let lives = [5, [1/10*canvas[2]-1/2*objectW[3], 1/20*canvas[3]]]

let isColliding = false
let pause = true
let gameEnd = true
    //r = row
    //c = column 
    //i = index

//-------------------------------------------------------/Game Run\-------------------------------------------------
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        startOrResetGame()
    } else if (e.key === " ") {
     if (pause === true){
        clearInterval(timerId)
        timerId = setInterval(null)
        pause = false
        
     } else if (pause === false){
        timerId = setInterval(updateScore, 1000)

        pause = true
     }
    
    } else { 
        onkeydown(e);
    } 
})
document.addEventListener("keyup", function(e) {
    onkeyup(e)
})
setInterval(moveFrame, intervalTime)
timerId = setInterval(updateScore, 1000)

function moveFrame() {
    if (pause === true){
        if (move[0] && car[0] > 21/100*canvas[2]) {
            car[0] -= carDelta[0]
        }
        if (move[1] && car[0] < 69/100*canvas[2]) {
            car[0] += carDelta[0]
        }
        if (move[2] && car[1] > 0) {
            car[1] -= carDelta[1]
        }
        if (move[3] && car[1] < canvas[3] - car[3]) {
            car[1] += carDelta[1]
        }
        gameFrame();
    }
    }

function gameFrame(){
    background()
    traffics()
    player()
    drawBob()
    updateLaneMarkers()
    updateTraffic()
    checkCollisions()
    displayScore()
    displayLives()

}
//---------------------------------------------/Update Data Functions\----------------------------------------------------
function updateLaneMarkers(){
    if (pause === true){
    for(let i = 0; i < laneMarkers[1].length; ++i) {
        laneMarkers[1][i] += deltaY
        if (laneMarkers[1][i] > canvas[3]) {
            laneMarkers[1][i] = canvas[0]
        }
    }
}
}

function updateTraffic(){
    if (pause === true){
        for(let i = 0; i < traffic[1].length; ++i) {
        traffic[1][i] += deltaY + Math.floor(Math.random()*(trafficSpeedMax-trafficSpeedMin)+trafficSpeedMin)
            if (traffic[1][i] > canvas[3]) {
                traffic[1][i] = canvas[0] + Math.floor(Math.random()*(trafficStartMax-trafficStartMin)+trafficStartMin)
        }
    }
}
}


function updateScore() {
    if (pause === true){
    score[0]++
    }
}

function startOrResetGame() {
    if (pause === true){
    resetGameData()
    timerId = setInterval(updateScore, 1000)
    }
}

function resetGameData() {
    score[0] = 0
    lives[0] = 5
    car = [1/2*canvas[2]-1/2*objectW[1], 2/5*canvas[3], objectW[1], 3/20*canvas[3]]
    isColliding = false
    clearInterval(timerId)
}

function endGame() {
    resetGameData()
}


//---------------------------------------------------/Background\----------------------------------------------------------
function background(){
    pavement()
    edgeLines()
    ditch()
    laneLines()
}

function pavement(){
    draw.fillStyle = "#666666" 
    draw.fillRect(canvas[0], canvas[1], canvas[2], canvas[3])
}

function edgeLines(){
    draw.fillStyle = "#dddd00"
    draw.fillRect(1/5*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3]) //Left edge line
    draw.fillStyle = "#dddddd"
    draw.fillRect(4/5*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3]) //Right edge line  
}

function ditch(){
    draw.fillStyle = "#00aa00"
    draw.fillRect(0, 0, 1/10*canvas[2], canvas[3]) //Left ditch
    draw.fillRect(9/10*canvas[2], 0, 1/10*canvas[2], canvas[3]) //Right ditch
}

function laneLines(){
    draw.fillStyle = "#DDDDDD"
        for (let c = 0; c < 2; ++c){ 
            let x = laneMarkers[0][c] 
            for (let r = 0; r < 11; ++r){ 
                let y = laneMarkers[1][r]
            draw.fillRect(x, y, laneMarkers[2], laneMarkers[3])
        }
    }
}

//--------------------------------------------------/Foreground\----------------------------------------------------------
function traffics(){
    draw.fillStyle = "#DD00DD"
        draw.fillRect(traffic[0][0], traffic[1][0], traffic[2], traffic[3])
        draw.fillRect(traffic[0][1], traffic[1][1], traffic[2], traffic[3])
        draw.fillRect(traffic[0][2], traffic[1][2], traffic[2], traffic[3])
    }  

function displayScore() {
    draw.fillStyle = "#000000"
    draw.fillRect(score[1][0], score[1][1]-1/20*canvas[2], objectW[3], 11/100*canvas[2])
    draw.font = "25px Arial" 
    draw.fillStyle = "#FFFFFF"
    draw.fillText("Score", score[1][0]+5, score[1][1])
    draw.fillText(" " + score[0], score[1][0], score[1][1]+1/20*canvas[3])
}

function displayLives() {
    draw.fillStyle = "#000000"
    draw.fillRect(lives[1][0], lives[1][1] - 1/20*canvas[2], objectW[3], 11/100*canvas[2]);
    draw.font = "25px Arial"
    draw.fillStyle = "#FFFFFF"
    draw.fillText("Lives", lives[1][0]+5, lives[1][1])
    draw.fillText("    " + lives[0], lives[1][0], lives[1][1] + 1/20*canvas[3])
    if (lives < 1){
        gameOver()
    }
}


//------------------------------------------------------/Player\-------------------------------------------------
function player(){
    getawayCar()
}

function getawayCar(){
    draw.fillStyle = "#DD0000"
    draw.fillRect(car[0], car[1], car[2], car[3])
}


//----------------------------------------------------Player Movement-------------------------------------------------- 
function onkeydown(e) {
     if (e.key === "ArrowLeft" || e.key === "a") {
        move[0] = true
    } else if (e.key === "ArrowRight" || e.key === "d") {
        move[1] = true
    } else if (e.key === "ArrowUp" || e.key === "w") {
        move[2] = true
    } else if (e.key === "ArrowDown"|| e.key === "s") {
        move[3] = true
    }
}

function onkeyup(e) {
    if (e.key === "ArrowLeft" || e.key === "a") {
        move[0] = false
    } else if (e.key === "ArrowRight" || e.key === "d") {
        move[1] = false
    } else if (e.key === "ArrowUp" || e.key === "w") {
        move[2] = false
    } else if (e.key === "ArrowDown" || e.key === "s") {
        move[3] = false
    }
}

//----------------------------------------------------Collision-------------------------------------------------- 
function checkCollisions() {
    for (let i = 0; i < traffic[0].length; ++i) {
        if (
            car[0] < traffic[0][i] + traffic[2] &&
            car[0] + car[2] > traffic[0][i] &&
            car[1] < traffic[1][i] + traffic[3] &&
            car[1] + car[3] > traffic[1][i]
        ) {
            if (!isColliding) {
                handleCollision()
                isColliding = true
                setTimeout(resetCollisionFlag, 2000) //Prevents losing a life for 2 seconds
            }
        }
    }
}

function resetCollisionFlag() {
    isColliding = false
}

function handleCollision() {
    --lives[0]

    if (lives[0] <= 0) {
        endGame()
    }
}
function gameOver(){
    clearInterval(timerId)
    brush.fillStyle = "#000000"
    brush.textAlign = "center"
    brush.textBaseline = "top"
    brush.font = "30px Arial"
    brush.fillText("GAME OVER", canvas[2]/2, canvas[3]/2)
}

//-----------------------------------------------------------Bob--------------------------------------------------
function drawBob(){
    draw.fillStyle= "#FFF000"
    draw.fillRect(1/10*bob[0],    1/2*bob[1]+1/5*canvas[2],  1/2*bob[0], 1/2*bob[1])
    draw.fillRect(10/16*bob[0]-8, 9/11*bob[1]+1/5*canvas[2], bob[0],     bob[1])
    draw.fillRect(bob[0]-8,       5/4*bob[1]+1/5*canvas[2],  4/3*bob[0], 4/3*bob[1])
    draw.fillRect(2*bob[0]-8,     3/2*bob[1]+1/5*canvas[2],  5/4*bob[0], 5/4*bob[1])
    draw.fillRect(2.8*bob[0]-8,   9/6*bob[1]+1/5*canvas[2],  5/4*bob[0], 5/4*bob[1])
    draw.fillRect(3.8*bob[0]-8,   8/6*bob[1]+1/5*canvas[2],  bob[0],     bob[1])
    draw.fillRect(4.5*bob[0]-8,   9/8*bob[1]+1/5*canvas[2],  1/2*bob[0], 1/2*bob[1])
    draw.fillStyle= "#FFFFFF"
    draw.fillRect(5/4*bob[0]-8,   3/2*bob[1]+1/5*canvas[2],  1/2*bob[0], 1/2*bob[1])
    draw.fillRect(1.8*bob[0]-8,   3/2*bob[1]+1/5*canvas[2],  1/2*bob[0], 1/2*bob[1])
    draw.fillRect(2.2*bob[0]-8,   1.95*bob[1]+1/5*canvas[2], 1/4*bob[0], 1/4*bob[1])
    draw.fillStyle="#000000"
    draw.fillRect(4/3*bob[0]-8,   6/4*bob[1]+1/5*canvas[2],  1/5*bob[0], 1/5*bob[1])
    draw.fillRect(1.8*bob[0]-8,   6/4*bob[1]+1/5*canvas[2],  1/5*bob[0], 1/5*bob[1])
    draw.fillRect(2.3*bob[0]-8,   2*bob[1]+1/5*canvas[2],    1/2*bob[0], 1/3*bob[1])
    draw.fillRect(2.2*bob[0]-8,   1.95*bob[1]+1/5*canvas[2], 1/4*bob[0], 1/4*bob[1])
    draw.fillRect(2.8*bob[0]-8,   1.95*bob[1]+1/5*canvas[2], 1/5*bob[0], 1/4*bob[1])
    draw.fillStyle="#FF6699"
    draw.fillRect(2.5*bob[0]-8,   2.1*bob[1]+1/5*canvas[2],  1/3*bob[0], 1/4*bob[1])
    draw.fillStyle="#FFFFFF"
    draw.fillRect(2.2*bob[0]-8,   1.93*bob[1]+1/5*canvas[2], 1/5*bob[0], 1/5*bob[1])
    draw.fillRect(2.3*bob[0]-8,   1.93*bob[1]+1/5*canvas[2], 1/5*bob[0], 1/5*bob[1])
    draw.fillRect(2.5*bob[0]-8,   1.93*bob[1]+1/5*canvas[2], 1/5*bob[0], 1/5*bob[1])
    draw.fillRect(2.7*bob[0]-8,   1.93*bob[1]+1/5*canvas[2], 1/5*bob[0], 1/5*bob[1])
    draw.fillRect(2.8*bob[0]-8,   1.9*bob[1]+1/5*canvas[2],  1/5*bob[0], 1/5*bob[1])
}


