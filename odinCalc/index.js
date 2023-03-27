// main function stages and resolves the equations

function main() {
  let param1 = "";
  let param2 = "";
  let operator = null;

  function concatVar(num) {
    if (operator == null) {
      param1 += num;
    } else {
      param2 += num;
    }
  }

  const eScreen = document.getElementById("eScreen");
  const rScreen = document.getElementById("rScreen");
  const equation = document.createElement("p");
  const result = document.createElement("p");

  const keypadBtns = document.getElementsByClassName("keypad-btn");
  for (const btn of keypadBtns) {
    btn.addEventListener("click", () => {
      concatVar(btn.innerText);
      equation.innerText += btn.innerText;
      eScreen.append(equation);
    });
  }

  const operatorBtns = document.getElementsByClassName("operator-btn");
  for (const btn of operatorBtns) {
    btn.addEventListener("click", () => {
      operator = btn.id;
      equation.innerText += btn.innerText;
    });
  }

  const evaluateBtn = document.getElementById("evaluate-btn");
  evaluateBtn.addEventListener("click", () => {
    var vo = new varOperator(operator);
    result.innerText = vo.evaluate(parseInt(param1), parseInt(param2));
    rScreen.append(result);
  });

  function varOperator(op) {
    this.operation = op;

    this.evaluate = function evaluate(param1, param2) {
      switch (this.operation) {
        case "plus":
          return param1 + param2;
        case "minus":
          return param1 - param2;
        case "multiply":
          return param1 * param2;
        case "divide":
          return param1 / param2;
        case "sqrt":
          return Math.sqrt(param2);
        case "square":
          return param1 * param1;
      }
    };
  }

  const clearBtn = document.getElementById("clear");
  clearBtn.addEventListener("click", () => {
    location.reload();
  });
}
main();
