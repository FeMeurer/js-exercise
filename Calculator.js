var operantLeft;
var operantRight;
var operation;

function faculty(input) {
    var sum = 1;
    while (input > 1) {
        sum = sum * input;
        input = input - 1;
    }
    return sum;
}

function addNumberToTextbox(number) {
    var existingValue = document.getElementById("outputBox_rechner").value;
    existingValue = existingValue + number;
    document.getElementById("outputBox_rechner").value = existingValue;
}

function clean() {  
    document.getElementById("outputBox_rechner").value = "";
    operantLeft = "";
    operantRight = "";
    operation = "";
}

function startAddition() {
    operantLeft = document.getElementById("outputBox_rechner").value;
    operation = "add"
    document.getElementById("outputBox_rechner").value = "";
}

function addition(number1, number2) {
    return (Number(number1) + Number(number2));
}

function startSubstraction() {
    operantLeft = document.getElementById("outputBox_rechner").value;
    operation = "sub"
    document.getElementById("outputBox_rechner").value = "";
}

function substraction(number1, number2) {
    return (Number(number1) - Number(number2));
}

function startDivide() {
    operantLeft = document.getElementById("outputBox_rechner").value;
    operation = "div"
    document.getElementById("outputBox_rechner").value = "";
}

function divide(number1, number2) {
    return (Number(number1) / Number(number2));
}

function startMultiplication() {
    operantLeft = document.getElementById("outputBox_rechner").value;
    operation = "mult"
    document.getElementById("outputBox_rechner").value = "";
}

function multiplication(number1, number2) {
    return (Number(number1) * Number(number2));
}

function equal() {
    operantRight = document.getElementById("outputBox_rechner").value;
    switch (operation) {
        case "add": document.getElementById("outputBox_rechner").value = addition(operantLeft, operantRight)
                    break;
        case "sub": document.getElementById("outputBox_rechner").value = substraction(operantLeft, operantRight)
                    break;
        case "div": document.getElementById("outputBox_rechner").value = divide(operantLeft, operantRight)
                    break;
        case "mult": document.getElementById("outputBox_rechner").value = multiplication(operantLeft, operantRight)
                    break;
    }
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
document.getElementById("button_add").addEventListener("click",startAddition);
document.getElementById("button_sub").addEventListener("click",startSubstraction);
document.getElementById("button_div").addEventListener("click",startDivide);
document.getElementById("button_mult").addEventListener("click",startMultiplication);
document.getElementById("button_equal").addEventListener("click",equal);
document.getElementById("button_c").addEventListener("click",clean);

