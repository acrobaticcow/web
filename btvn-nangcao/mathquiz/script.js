$(function () {
  let firstNumber;
  let secondNumber;
  let answer;
  let currentOperant;
  function generateNumbers() {
    let number = Math.floor(Math.random() * 10);
    if (number != 0) return number;
    if (number == undefined) return (number = 2);
    else return (number = 1);
  }
  function clearHTML(container) {
    container.html("");
  }
  function renderQuiz(operators) {
    const quizDisplayBlock = $(".quiz");
    clearHTML(quizDisplayBlock);
    firstNumber = generateNumbers();
    secondNumber = generateNumbers();
    let number1 = $("<div></div")
      .appendTo(quizDisplayBlock)
      .addClass("number1")
      .css("color", `${randomColor({ luminosity: "dark" })}`)
      .text(`${firstNumber}`);
    let operator = $("<div></div")
      .appendTo(quizDisplayBlock)
      .addClass("operator")
      .css("color", `${randomColor({ luminosity: "dark" })}`)
      .text(`${operators}`);
    let number2 = $("<div></div")
      .appendTo(quizDisplayBlock)
      .addClass("number2")
      .css("color", `${randomColor({ luminosity: "dark" })}`)
      .text(`${secondNumber}`);
    const equal = $("<div></div")
      .appendTo(quizDisplayBlock)
      .addClass("equal")
      .css("color", `${randomColor({ luminosity: "dark" })}`)
      .text(`=`);
    let result = $("<div></div")
      .appendTo(quizDisplayBlock)
      .addClass("result")
      .css("color", `${randomColor({ luminosity: "dark" })}`)
      .text(`?`);

    return firstNumber, secondNumber;
  }
  function renderResult(operand) {
    const answersDisplayBlock = $(".answers");
    clearHTML(answersDisplayBlock);
    let trueResult;
    operand == "+"
      ? (trueResult = firstNumber + secondNumber)
      : operand == "-"
      ? (trueResult = firstNumber - secondNumber)
      : operand == "*"
      ? (trueResult = firstNumber * secondNumber)
      : (trueResult = parseFloat((firstNumber / secondNumber).toFixed(1)));
    let randomResult_1 = generateNumbers();
    let randomResult_2 = generateNumbers();
    const answerArray = [trueResult, randomResult_1, randomResult_2];
    const shuffledAnswerArray = answerArray.sort((a, b) => 0.5 - Math.random());
    if (
      randomResult_1 != randomResult_2 &&
      randomResult_2 != trueResult &&
      randomResult_1 != trueResult
    ) {
      let answers1 = $("<div></div>")
        .appendTo(answersDisplayBlock)
        .addClass("answer1")
        .css("color", `${randomColor({ luminosity: "dark" })}`)
        .text(`${shuffledAnswerArray[0]}`);
      let answers2 = $("<div></div>")
        .appendTo(answersDisplayBlock)
        .addClass("answer2")
        .css("color", `${randomColor({ luminosity: "dark" })}`)
        .text(`${shuffledAnswerArray[1]}`);
      let answers3 = $("<div></div>")
        .appendTo(answersDisplayBlock)
        .addClass("answer3")
        .css("color", `${randomColor({ luminosity: "dark" })}`)
        .text(`${shuffledAnswerArray[2]}`);
      answer = trueResult;
      currentOperant = operand;
      findingAnswer();
      return answer, currentOperant;
    } else return renderResult(operand);
  }
  function imgTo(el) {
    $("<img>").appendTo($(el)).attr("src", "./decor/Vector 1.svg");
  }

  $(".navigation div").on("click", () => {
    $(".navigation div").each((el) => {
      if ($("img")) {
        $("img").remove();
      }
    });
  });

  $(".add").on("click", () => {
    imgTo(".add");
    renderQuiz("+");
    renderResult("+")
  });
  $(".sub").on("click", () => {
    imgTo(".sub");
    renderQuiz("-");
    renderResult("-")
  });
  $(".mul").on("click", () => {
    imgTo(".mul");
    renderQuiz("*");
    renderResult("*")
  });
  $(".div").on("click", () => {
    imgTo(".div");
    renderQuiz("/");
    renderResult("/")
  });
  renderQuiz("+");
  renderResult("+");
  function findingAnswer() {
    $(".answer1").on("click", (ev) => {
      ev.preventDefault();
      if (answer == parseFloat($(".answer1").text())) {
        $(".result").text(`${answer}`);
        setTimeout(() => {
          renderQuiz(currentOperant);
          renderResult(currentOperant);
        }, 2000);
      } else {
        alert("dUmb bitCh, try AGAIN !!!");
      }
    });
    $(".answer2").on("click", (ev) => {
      ev.preventDefault();
      if (answer == parseFloat($(".answer2").text())) {
        $(".result").text(`${answer}`);
        setTimeout(() => {
          renderQuiz(currentOperant);
          renderResult(currentOperant);
        }, 2000);
      } else {
        alert("dUmb bItcH, , try AGAIN !!!");
      }
    });
    $(".answer3").on("click", (ev) => {
      ev.preventDefault();
      if (answer == parseFloat($(".answer3").text())) {
        $(".result").text(`${answer}`);
        setTimeout(() => {
          renderQuiz(currentOperant);
          renderResult(currentOperant);
        }, 2000);
      } else {
        alert("dUmb bItcH, , try AGAIN !!!");
      }
    });
  }
});
