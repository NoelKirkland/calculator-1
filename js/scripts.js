const add = function(number1, number2) {
    return number1 + number2;
};

const subtract = function(number1, number2){
    return number1-number2;
}

const multiply = function(number1, number2){
    return number1*number2;
}

const divide = function(number1, number2){
    return number1/number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const result = "Addition: " + add(number1, number2) + ", Subtraction: " 
+ subtract(number1, number2) + ", Multiplication: " + multiply(number1, number2)
+ ", Division: " + divide(number1, number2);
alert(result);