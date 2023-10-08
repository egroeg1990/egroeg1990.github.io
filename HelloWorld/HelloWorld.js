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