// ---------------------------------------------values when clicking the btn to the display-----------------------------

var a = document.querySelectorAll(".btn");
a.forEach((a) => {
  a.addEventListener("click", () => {
    document.getElementById("screen").value += a.value;
  });
});
var r = document.querySelector(".btn1");
const b = document.getElementById("screen");
r.addEventListener("click", () => {
  document.getElementById("screen").value = eval(b.value);
});
var acs = document.getElementById("ac");
acs.addEventListener("click", () => {
  document.getElementById("screen").value = "";
  document.getElementById("screen1").value = "";
});
var so = document.getElementById("clear");
so.addEventListener("click", () => {
  var c = document.getElementById("screen").value;
  var d = c.substr(0, c.length - 1);
  document.getElementById("screen").value = d;
});

// -----------------------------------------------automatic  value displayer------------------------------------------
var sc = document.querySelectorAll(".btn");
sc.forEach((sc) => {
  sc.addEventListener("click", () => {
    var re = document.getElementById("screen").value;
    var rm = document.getElementById("screen1");
    rm.style.color = "whitesmoke";
    rm.style.fontFamily = "monospace";
    rm.style.textShadow = " 2px 2px 4px yellow";
    rm.style.fontSize = "bolder";
    var re2 = eval(re);
    rm.value = re2;
  });
});

// ------------------------------------------------------clearing the displayed numbers or values (<-- btn)----------------------------------

var so1 = document.getElementById("clear");
so1.addEventListener("click", () => {
  var c1 = document.getElementById("screen").value;
  var d1 = c1.substr(0, c1.length - 1);
  var re3 = "";
  if (d1 == "") {
    document.getElementById("screen1").value = "";
  } else {
    re3 = eval(d1);
  }
  document.getElementById("screen1").value = re3;
});
