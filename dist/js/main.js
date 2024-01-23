// script.js
const inputs = document.getElementById("inputs");

inputs.addEventListener("input", function (e) {
  const target = e.target;
  const val = target.value;

  if (isNaN(val)) {
    target.value = "";
    return;
  }

  if (val != "") {
    const next = target.nextElementSibling;
    if (next) {
      next.focus();
    }
  }
});

function checkInputs() {
  // for(var i ; i<5 ; i++){
  //     var input1Value = document.getElementById("input1").value;

  // }
  var input1Value = document.getElementById("input1").value;
  var input2Value = document.getElementById("input2").value;
  var input3Value = document.getElementById("input3").value;
  var input4Value = document.getElementById("input4").value;
  var input5Value = document.getElementById("input5").value;
  var input6Value = document.getElementById("input6").value;

  var submitButton = document.getElementById("submitButton");

  if (
    input1Value !== "" &&
    input2Value !== "" &&
    input3Value !== "" &&
    input4Value !== "" &&
    input5Value !== "" &&
    input6Value !== ""
  ) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.add("active");
    submitButton.classList.remove("inactive");
    submitButton.innerHTML = "التالي ";
  } else {
    submitButton.setAttribute("disabled", "true");
    submitButton.classList.add("inactive");
    submitButton.classList.remove("active");
    submitButton.innerHTML = "تاكيد";
  }
}

inputs.addEventListener("keyup", function (e) {
  const target = e.target;
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
});


function showPassword() {

}
