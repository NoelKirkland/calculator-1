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

$(function() {
  $("form#add").submit(function(event){
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = add(number1, number2);
      $("#add-output").text(result);
  });
  $("form#sub").submit(function(event){
      event.preventDefault();
      const number1 = parseInt($("#sub1").val());
      const number2 = parseInt($("#sub2").val());
      const result = subtract(number1, number2);
      $("#sub-output").text(result);
  });
  $("form#mult").submit(function(event){
      event.preventDefault();
      const number1 = parseInt($("#mult1").val());
      const number2 = parseInt($("#mult2").val());
      const result = multiply(number1, number2);
      $("#mult-output").text(result);
  });
  $("form#div").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const result = divide(number1, number2);
    $("#div-output").text(result);
  });
});
