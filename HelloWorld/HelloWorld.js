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
