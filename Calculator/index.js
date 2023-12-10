const calculationDiv = document.querySelector(".calculations");
let calculationsText = "";
const AnswerDiv = document.querySelector(".Canswer");
let res = 0;
let restoCal = false;
let newValue = "";
let prevValue = "";
let memory = "";
document.querySelectorAll(".child1").forEach((el) =>
  el.childNodes.forEach((it) => {
    if (it.nodeName !== "#text") {
      if (it.classList.contains("clear-btn")) {
        it.addEventListener("click", (e) => {
          calculationDiv.innerText = 0;
          return;
        });
      }
      if (it.classList.contains("CalculateResult")) {
        it.addEventListener("click", (e) => {
          res = eval(calculationsText);
          AnswerDiv.innerText = res;
          calculationDiv.innerText = 0;
          calculationsText = "";
          restoCal = true;
          newValue = "";
          prevValue = "";
          console.log(res);
        });
      }
      if (it.classList.contains("calculatorSymbol")) {
        it.addEventListener("click", (e) => {
          prevValue = newValue;
          newValue = "";
          console.log(prevValue);
        });
      }
      if (it.classList.contains("numbers")) {
        it.addEventListener("click", (e) => {
          newValue = newValue + e.target.getAttribute("data-value");
          console.log(newValue);
        });
      }
      if (it.classList.contains("back")) {
        it.addEventListener("click", (e) => {
          let text = calculationDiv.innerText;
          console.log("e");
          calculationDiv.innerText = text.slice(0, text.length - 1);
          calculationsText = calculationsText.slice(
            0,
            calculationsText.length - 1
          );
          newValue = newValue.slice(0, newValue.length - 1);
        });
      }

      it.addEventListener("click", (e) => {
        if (
          !e.target.classList.contains("CalculateResult") &&
          !e.target.classList.contains("sq") &&
          !e.target.classList.contains("sq2") &&
          !e.target.classList.contains("val")
        ) {
          calculationDiv.innerText =
            calculationDiv.innerText !== "0"
              ? calculationDiv.innerText + e.target.getAttribute("data-value")
              : e.target.getAttribute("data-value");

          calculationsText =
            calculationsText.innerText !== "0"
              ? calculationsText + e.target.getAttribute("data-value")
              : e.target.getAttribute("data-value");
        }

        if (restoCal) {
          if (e.target.classList.contains("calculatorSymbol") && res !== 0) {
            calculationDiv.innerText = "";
            calculationsText = "";
            calculationDiv.innerText =
              res + e.target.getAttribute("data-value");
            restoCal = false;
            calculationsText = res + e.target.getAttribute("data-value");
            return;
          }
          if (e.target.classList.contains("numbers") && res !== 0) {
            calculationDiv.innerText = "";
            calculationsText = "";
            calculationDiv.innerText = e.target.getAttribute("data-value");
            restoCal = false;
            calculationsText = e.target.getAttribute("data-value");
            return;
          }

          if (e.target.classList.contains("sq") && res !== 0) {
            calculationDiv.innerText = res;
            for (let i = 0; i < e.target.getAttribute("data-inde") - 1; i++) {
              calculationDiv.innerText = calculationDiv.innerText + `*${res}`;
              calculationsText = calculationsText + `*${res}`;
            }
            return;
          }
          if (e.target.classList.contains("power10")) {
            calculationDiv.innerText = "10^" + res;
            calculationsText = `Math.pow(10,${res})`;
            return;
          }
        }
        if (e.target.classList.contains("square")) {
          let text = calculationDiv.innerText;
          if (text[text.length - 1] === ")" || text[text.length - 1] === "(") {
            const li = text.lastIndexOf("(");
            const ri = text.lastIndexOf(")");
            calculationDiv.innerText = text + `*${text.slice(li, ri + 1)}`;
            calculationsText = calculationsText + `*${text.slice(li, ri + 1)}`;
          } else {
            let previousindex = text.lastIndexOf(newValue);
            calculationDiv.innerText = `${text.slice(
              0,
              previousindex
            )}(${newValue}*${newValue})`;
            let cpreviousindex = calculationsText.lastIndexOf(newValue);
            calculationsText = `${calculationsText.slice(
              0,
              cpreviousindex
            )}(${newValue}*${newValue})`;
          }
        }
        if (e.target.classList.contains("cube")) {
          let text = calculationDiv.innerText;
          if (text[text.length - 1] === ")" || text[text.length - 1] === "(") {
            const li = text.lastIndexOf("(");
            const ri = text.lastIndexOf(")");
            calculationDiv.innerText =
              text + `*${text.slice(li, ri + 1)}*${text.slice(li, ri + 1)}`;
            calculationsText =
              calculationsText +
              `*${text.slice(li, ri + 1)}*${text.slice(li, ri + 1)}`;
          } else {
            let previousindex = text.lastIndexOf(newValue);
            calculationDiv.innerText = `${text.slice(
              0,
              previousindex
            )}(${newValue}*${newValue}*${newValue})`;
            let cpreviousindex = calculationsText.lastIndexOf(newValue);
            calculationsText = `${calculationsText.slice(
              0,
              cpreviousindex
            )}(${newValue}*${newValue}*${newValue})`;
          }
        }
        if (e.target.classList.contains("power10")) {
          restoCal = restoCal === true && false;
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(0, previousindex)}10^(`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText =
            calculationsText.slice(0, cpreviousindex) + `Math.pow(10,`;
        }
        if (e.target.classList.contains("value_pie")) {
          restoCal = restoCal === true && false;
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(0, previousindex)}π`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText =
            calculationsText.slice(0, cpreviousindex) +
            `3.1415926535897932384626433832795`;
        }
        if (e.target.classList.contains("value_e")) {
          restoCal = restoCal === true && false;
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(0, previousindex)}e`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText =
            calculationsText.slice(0, cpreviousindex) +
            `2.7182818284590452353602874713527`;
        }
        if (e.target.classList.contains("log")) {
          restoCal = restoCal === true && false;
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(0, previousindex)}log(`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText =
            calculationsText.slice(0, cpreviousindex) + `Math.log10(`;
        }
        if (e.target.classList.contains("trignofunc")) {
          restoCal = restoCal === true && false;
          const func = e.target.getAttribute("data-value");
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(
            0,
            previousindex
          )}${newValue}${func}(`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText = `${calculationsText.slice(
            0,
            cpreviousindex
          )}${newValue}Math.${func}(`;
        }
        if (e.target.classList.contains("ln")) {
          restoCal = restoCal === true && false;
          let text = calculationDiv.innerText;
          let previousindex = text.lastIndexOf(newValue);
          calculationDiv.innerText = `${text.slice(0, previousindex)}ln(`;
          let cpreviousindex = calculationsText.lastIndexOf(newValue);
          calculationsText =
            calculationsText.slice(0, cpreviousindex) + `Math.log(`;
        }
        if (e.target.classList.contains("memoryStore")) {
          memory = res;
        } else if (e.target.classList.contains("memory--")) {
          memory = memory - res;
        } else if (e.target.classList.contains("memory++")) {
          memory = memory + res;
        } else if (e.target.classList.contains("memoryclear")) {
          memory = "";
        } else if (e.target.classList.contains("memoryShow")) {
          res = memory;
          AnswerDiv.innerText = res;
        }
      });
    }
  })
);
