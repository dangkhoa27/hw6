function showCalculator() {
    var calculator = document.getElementById("calculator");
    calculator.style.display = "block";
  }
  
  function appendNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
  }
  
  function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
  }
  
  function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
  }
  