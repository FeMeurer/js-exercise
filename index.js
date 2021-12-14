function faculty(input) {
    var sum = 1;
    while (input > 1) {
        sum = sum * input;
        input = input - 1;
    }
    return sum;
}

function calculate() {
    var inputValue = document.getElementById("inputBox").value;
    document.getElementById("outputBox").value = faculty(inputValue);
}

document.getElementById("calc").addEventListener("click",calculate);







function addNumberToTextbox(number) {
    var existingValue = document.getElementById("outputBox_rechner").value;
    existingValue = existingValue + number;
    document.getElementById("outputBox_rechner").value = existingValue;
}

function calc_Sqrt() {
    var existingValue = document.getElementById("outputBox_rechner").value;
    document.getElementById("outputBox_rechner").value = Math.sqrt(existingValue);
}

function calc_exponential() {
    var existingValue = document.getElementById("outputBox_rechner").value;
    document.getElementById("outputBox_rechner").value = existingValue * existingValue;
}

function clean() {  
    document.getElementById("outputBox_rechner").value = "";
}

function calculateCalculator() {
    var inputValue = document.getElementById("outputBox_rechner").value;
    document.getElementById("outputBox_rechner").value = faculty(inputValue);
}

function addZeroToTextbox() { addNumberToTextbox("0"); }
function addOneToTextbox() { addNumberToTextbox("1"); }
function addTwoToTextbox() { addNumberToTextbox("2"); }
function addThreeToTextbox() { addNumberToTextbox("3"); }
function addFourToTextbox() { addNumberToTextbox("4"); }
function addFiveToTextbox() { addNumberToTextbox("5"); }
function addSixToTextbox() { addNumberToTextbox("6"); }
function addSevenToTextbox() { addNumberToTextbox("7"); }
function addEightToTextbox() { addNumberToTextbox("8"); }
function addNineToTextbox() { addNumberToTextbox("9"); }

document.getElementById("button_0").addEventListener("click",addZeroToTextbox);
document.getElementById("button_1").addEventListener("click",addOneToTextbox);
document.getElementById("button_2").addEventListener("click",addTwoToTextbox);
document.getElementById("button_3").addEventListener("click",addThreeToTextbox);
document.getElementById("button_4").addEventListener("click",addFourToTextbox);
document.getElementById("button_5").addEventListener("click",addFiveToTextbox);
document.getElementById("button_6").addEventListener("click",addSixToTextbox);
document.getElementById("button_7").addEventListener("click",addSevenToTextbox);
document.getElementById("button_8").addEventListener("click",addEightToTextbox);
document.getElementById("button_9").addEventListener("click",addNineToTextbox);
document.getElementById("button_sqrt").addEventListener("click",calc_Sqrt);
document.getElementById("button_exponential").addEventListener("click",calc_exponential);
document.getElementById("button_c").addEventListener("click",clean);
document.getElementById("button_fac").addEventListener("click",calculateCalculator);
