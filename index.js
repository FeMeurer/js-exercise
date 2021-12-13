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