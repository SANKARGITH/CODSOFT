var min = 30;
var sen = 60;
function time() {
  --sen;
  if (sen == 0) {
    --min;
    sen = 59;
  }
  sen < 10
    ? (document.getElementById("seconds").innerHTML = "0" + sen)
    : (document.getElementById("seconds").innerHTML = sen);
  min < 10
    ? (document.getElementById("min").innerHTML = "0" + min)
    : (document.getElementById("min").innerHTML = min);
}

document.getElementById("start").addEventListener("click", () => {
  let head = document.getElementById("exam_heads");
  head.innerHTML = "<h3>lET'S BEGIN YOUR EXAM YOUR EXAM END'S IN:</SPAN></h3>";
  setInterval("time()", 1000);
});

function display_question() {
  var btns = document.querySelectorAll(".btn");
  btns.forEach((btns) => {
    btns.style.display = "block";
    btns.style.float = "right";
    btns.innerHTML = btns;
  });
}
function buttons() {
  var display = document.getElementsByClassName("questions_display")[0];
  var btnsns = document.getElementsByClassName("btn")[0];
  var question_paper =
    document.getElementsByClassName("question_paper")[0].innerHTML;
  display.style.width = "80%";
  display.style.borderRight = "1px solid black";
  btnsns.style.backgroundColor = "green";
  document.getElementsByClassName("questions_display")[0].innerHTML =
    question_paper;
}

var individual_question = document.querySelectorAll(".btn");
individual_question.forEach((individual_question) => {
  individual_question.addEventListener("click", () => {
    var individual =
      document.getElementsByClassName("question_paper")[
        individual_question.value - 1
      ].innerHTML;
    individual_question.style.backgroundColor = "green";
    individual_question.style.opacity = "0.8";
    document.getElementById("questions_display").innerHTML = individual;
  });
});

function success() {
  let afterSubmission = document.getElementsByClassName("paper")[0];
  afterSubmission.innerHTML = `<div class="end"><h2 class='successhead'>Your answer has been successfully updated</h2>
    <h4>Do you want to re-write the exam <span class="redirectLink"><a href="exampaper.htm">Exam link</a></span></h4>
    </div>
    `;
}
