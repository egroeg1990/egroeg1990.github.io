//Webpage start up
document.getElementById("heading1").innerHTML="Hello World!"

document.getElementById("P1").innerHTML="Welcome and thank you for visiting my first webpage!<br>Do not be afraid!<br>This is all for an assignment!";

function msg(){
    alert("Hello world, my tag is Egroeg1990.\nI am a Software Engineering student.\nThis is my first attempt at coding a webpage.");
}
// Wage Calculator
function get_money() {

    let normal_pay_rate = document.getElementById("NR").valueAsNumber
    let overtime_rate = document.getElementById("OR").valueAsNumber
    let total_hours_worked = document.getElementById("HW").valueAsNumber
    let normal_hours_worked = document.getElementById("NH").valueAsNumber
    let money_earned;
    if (total_hours_worked <= normal_hours_worked) {
    money_earned = total_hours_worked * normal_pay_rate
        }else{
    money_earned = normal_pay_rate * normal_hours_worked
    money_earned += (total_hours_worked-normal_hours_worked)*overtime_rate
    }
    document.getElementById("TP").innerHTML = "$" + money_earned
}
//Comparing Numbers
function get_max (){
    //get numbers from input boxes
    let a=document.getElementById("N1").valueAsNumber
    let b=document.getElementById("N2").valueAsNumber
    let c=document.getElementById("N3").valueAsNumber
    //Compare numbers
    let max=a
    if (b>max) {
        max=b
    }
    if (c>max) {
        max=c
    }
    //Display the max
    document.getElementById("H2").innerHTML=max
}

document.getElementById("B1").addEventListener("click", get_max)

//Canvas Patterns
//Checkered Pattern
let canvas1 = document.getElementById("canvas1");
let painter1 = canvas1.getContext("2d");
//Background
painter1.fillStyle = "#c1b1d1";
painter1.fillRect(0, 0, 400, 400);
//Pattern
painter1.fillStyle = "#0d0daf";
let w = 20
let h = 20
let y = 10
    for(let j = 0; j < 13; j++) {
        let x = 10
        for(let i = 0; i < 13; i++) {  
            //Simplified 
            if((i+j)%2 === 0) {
            //if(i%2 === 1 && j%2 === 1 || i%2 === 0 && j%2 === 0) { 
            painter1.fillRect(x, y, w, h);
            }
            x = x + 30
        }
        y = y + 30
    }    

//Triangle Pattern
let canvas2 = document.getElementById("canvas2");
let painter2 = canvas2.getContext("2d");
//Background
painter2.fillStyle = "#66ccff";
painter2.fillRect(0, 0, 400, 400);
//Flag Pole
painter2.fillStyle = "#999999";
painter2.fillRect(200, 10, 5, 190);
//Flag Pole Top
painter2.fillStyle = "#ffcc00";
painter2.fillRect(197, 5, 12, 12);
//Flag
painter2.fillStyle = "#00cc00";
painter2.fillRect(205, 20, 40, 30);
//Pattern
//Outline
painter2.strokeStyle = "#5c5c3d";
let w1 = 20
let h1 = 20
let y1 = 10
let j1 = 0
while(j1 < 13) {
    let x1 = 10
    let i1 = 0
    while(i1 < 13) {  
        if(j1 >= i1 && i1 >= 12 - j1) { 
        painter2.lineWidth = 20    
        painter2.strokeRect(x1, y1, w1, h1);
        }
        x1 = x1 + 30
        i1++
    }
    y1 = y1 + 30
    j1++
}
//Blocks
painter2.fillStyle = "#800000";
let w2 = 20
let h2 = 20
let y2 = 10
let j2 = 0
while(j2 < 13) {
    let x2 = 10
    let i2 = 0
    while(i2 < 13) {  
        if(j2 >= i2 && i2 >= 12 - j2) {  
        painter2.fillRect(x2, y2, w2, h2);
        }
        x2 = x2 + 30
        i2++
    }
    y2 = y2 + 30
    j2++
}

//Optical Illusion
let canvas3 = document.getElementById("canvas3");
let painter3 = canvas3.getContext("2d");
//Background
painter3.fillStyle = "#9999ff";
painter3.fillRect(0, 0, 400, 400);
//Pattern
//Checkered 1
painter3.fillStyle = "#000099";
let w3 = 10
let h3 = 10
let y3 = 0
    for(let j = 0; j < 40; j++) {
        let x3 = 0
        for(let i = 0; i < 40; i++) {  
            if((i+j)%2 === 0) {
            painter3.fillRect(x3, y3, w3, h3);
            }
            x3 = x3 + 10
        }
        y3 = y3 + 10
    }    

//Small Checkered 
let w4 = 4
let h4 = 4
let y4 = 8
let j3 = 0
while(j3 < 39) {
    let x4 = 7.5
    let i3 = 0
    while(i3 <39){
        if(j3 >= 12 && j3 <= 26 && i3 >= 12 && i3 <= 26 && (i3+j3)%2 === 1) {
          painter3.fillStyle = "#000033";
          painter3.fillRect(x4, y4, w4, h4);
          } else if(j3 >= 12 && j3 <= 26 && i3 >= 12 && i3 <= 26 && (i3+j3)%2 === 0) {
            painter3.fillStyle = "#e6e6ff";
            painter3.fillRect(x4, y4, w4, h4);  
            } else if ((i3+j3)%2 === 0){
                painter3.fillStyle = "#000033";
                painter3.fillRect(x4, y4, w4, h4);
            } else if ((i3+j3)%2 === 1){
                painter3.fillStyle = "#e6e6ff";
                painter3.fillRect(x4, y4, w4, h4); 
            }
          x4 = x4 + 10
          i3++
      }
      y4 = y4 + 10
      j3++
    }
    

motion()
function motion(){
    let draw = document.getElementById("motion").getContext("2d")

    //array lay out [canvas X positions, canvas Y positions, canvas width, canvas height]
    let canvas = [0, 0, 500, 500]
    
    //array lay out [road line width, vehicle width, sigh width]
    let objectW = [1/200*canvas[2], 1/20*canvas[2], 1/30*canvas[2]]
    
    //array lay out [[laneMarkers X positions], [laneMarkers Y positions], laneMarkers width, laneMarkers height]
    let laneMarker = [[1/5*canvas[2]-1/2*objectW[0],3/10*canvas[2]-1/2*objectW[0],4/5*canvas[2]-1/2*objectW[0],7/10*canvas[2]-1/2*objectW[0]], [1/30*canvas[3],3/30*canvas[3],5/30*canvas[3],7/30*canvas[3],9/30*canvas[3],11/30*canvas[3],13/30*canvas[3],15/30*canvas[3],17/30*canvas[3],19/30*canvas[3],21/30*canvas[3] ,23/30*canvas[3],25/30*canvas[3],27/30*canvas[3],29/30*canvas[3]], objectW[0], 1/40*canvas[3]]
    
    
    //array lay out [[sign X positions], sign Y positions, sign width, sign height]
    let sign = [[canvas[0]+1/4*objectW[2],19/20*canvas[2]+1/4*objectW[2]], 1/20*canvas[3], objectW[2], 1/100*canvas[3]]       
    
    //array lay out [[traffic X positions], [traffic Y positions], traffic width, traffic height]
    let traffic = [[3/20*canvas[2]-1/2*objectW[1],5/20*canvas[2]-1/2*objectW[1],7/20*canvas[2]-1/2*objectW[1],13/20*canvas[2]-1/2*objectW[1],15/20*canvas[2]-1/2*objectW[1],17/20*canvas[2]-1/2*objectW[1]], [1/4*canvas[3],15/20*canvas[3],1/3*canvas[3],2/3*canvas[3],9/20*canvas[3],3/4*canvas[3]], objectW[1], 3/40*canvas[3]]
    let trafficSpeedMax = 5
    let trafficSpeedMin = 0
    let trafficStartMax = 10
    let trafficStartMin = 0
    
    let intervalTime = 100
    let timerId = null
    let deltaY = 5
    
    
        //r = row
        //c = column 
        //i = index
    
    setInterval(motionFrame, intervalTime)
    
    function motionFrame(){
        backGround()
        signs()
        traffics()
        updateLaneMarkers()
        updateSigns()
        updateTraffic()
    
    }
    
    function updateLaneMarkers(){
        for(let i = 0; i < laneMarker[1].length; ++i) {
            laneMarker[1][i] += deltaY
            if (laneMarker[1][i] > canvas[3]) {
                laneMarker[1][i] = canvas[0]
            }
        }
    }
    
    function updateSigns(){
            sign[1] += deltaY
            if (sign[1] > canvas[3]) {
                sign[1] = canvas[0]
            }
        }
    
    function updateTraffic(){
            for(let i = 0; i < traffic[1].length; ++i) {
            traffic[1][i] += deltaY + Math.floor(Math.random()*(trafficSpeedMax-trafficSpeedMin)+trafficSpeedMin)
                if (traffic[1][i] > canvas[3]) {
                    traffic[1][i] = canvas[0] + Math.floor(Math.random()*(trafficStartMax-trafficStartMin)+trafficStartMin)
            }
        }
    }
    
    function backGround(){
        solidBackGround()
        laneLines()
    }
    
    function solidBackGround(){
        draw.fillStyle = "#666666" // Pavemnet
        draw.fillRect(canvas[0], canvas[1], canvas[2], canvas[3])
        draw.fillStyle = "#dddd00" // Center Lines
        draw.fillRect(2/5*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3])
        draw.fillRect(3/5*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3]) 
        draw.fillStyle = "#dddddd" // Side lines
        draw.fillRect(1/10*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3]) 
        draw.fillRect(9/10*canvas[2]-1/2*objectW[0], canvas[1], objectW[0], canvas[3])
        draw.fillStyle = "#00aa00"
        draw.fillRect(0, 0, 1/20*canvas[2], canvas[3]) //Left ditch
        draw.fillRect(1/2*canvas[2]-1/20*canvas[2], 0, 1/10*canvas[2], canvas[3]) //center ditch ditch
        draw.fillRect(19/20*canvas[2], 0, 1/20*canvas[2], canvas[3]) //Right ditch
        draw.fillStyle = "#dddddd" // Side lines
        draw.fillRect(1/2*canvas[2]-1/2*objectW[0], canvas[1], 3/4*objectW[0], canvas[3]) 
    }
    
    function laneLines(){
        draw.fillStyle = "#DDDDDD"
            for (let c = 0; c < laneMarker[0].length; ++c){ 
                let x = laneMarker[0][c] 
                for (let r = 0; r <  laneMarker[1].length; ++r){ 
                    let y = laneMarker[1][r]
                draw.fillRect(x, y, laneMarker[2], laneMarker[3])
            }
        }
    }
       
    function signs(){        
        draw.fillStyle = "#dddddd"            
            for (let c = 0; c < sign[0].length; ++c){ 
                let x = sign[0][c]
                draw.fillRect(x, sign[1], sign[2], sign[3])
            }
        }
    
    function traffics(){
        draw.fillStyle = "#0000DD"
            draw.fillRect(traffic[0][0], traffic[1][0], traffic[2], traffic[3])
            draw.fillRect(traffic[0][1], traffic[1][1], traffic[2], traffic[3])
            draw.fillRect(traffic[0][2], traffic[1][2], traffic[2], traffic[3])
            draw.fillRect(traffic[0][3], traffic[1][1], traffic[2], traffic[3])
            draw.fillRect(traffic[0][4], traffic[1][2], traffic[2], traffic[3])
            draw.fillRect(traffic[0][5], traffic[1][0], traffic[2], traffic[3])
            draw.fillRect(traffic[0][0], traffic[1][3], traffic[2], traffic[3])
            draw.fillRect(traffic[0][1], traffic[1][4], traffic[2], traffic[3])
            draw.fillRect(traffic[0][2], traffic[1][5], traffic[2], traffic[3])
            draw.fillRect(traffic[0][3], traffic[1][4], traffic[2], traffic[3])
            draw.fillRect(traffic[0][4], traffic[1][5], traffic[2], traffic[3])
            draw.fillRect(traffic[0][5], traffic[1][3], traffic[2], traffic[3])
        }
}