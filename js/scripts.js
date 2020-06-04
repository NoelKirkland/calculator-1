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

$(document).ready(function() {
    $("form#calculator").submit(function() {
      event.preventDefault();
      const number1 = parseInt($("#input1").val());
      const number2 = parseInt($("#input2").val());
      if(!number1 || !number2)
      {
          alert("Incorrect input, not a number");
          return;
      }
      let symbol;
      const operator = $("input:radio[name=operator]:checked").val();
      let result;
      if (operator === "add") {
        result = add(number1, number2);
        symbol = "+";
      } else if (operator === "subtract") {
        result = subtract(number1, number2);
        symbol = "-";
      } else if (operator === "multiply") {
        result = multiply(number1, number2);
        symbol = "*";
      } else if (operator === "divide") {
        result = divide(number1, number2);
        symbol = "/";
      }
      $("#output").text(number1 + " " + symbol + " " + number2 + " = " + result);
    });
  });