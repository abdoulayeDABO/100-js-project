const otpInputs = document.querySelectorAll(".otp-input");

const OTPINPUTS_LENGTH = otpInputs.length;

otpInputs.forEach((otpInput) => {
otpInput.addEventListener("input", function (e) {
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
});

  otpInputs.forEach((otpInput) => {
    otpInput.addEventListener("keyup", (event) => {
          if (event.key === "Backspace") {
              event.target.value = "";
              moveToPreviousInput(event);
          }
      });
  });

function moveToNextInput(event) {
  const otpInput = event.target;
  if (otpInput.value === "") return;
  const nextInput = otpInput.nextElementSibling;
  if (nextInput) {
    nextInput.focus({ focusVisible: true, preveventScroll: false });
  }
}

function moveToPreviousInput(event) {
  const otpInput = event.target;
  const previousInput = otpInput.previousElementSibling;
  if (previousInput) {
    previousInput.focus({ focusVisible: true, preveventScroll: false });
  }
}


const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", () => {
    let otp = '';
    otpInputs.forEach((otpInput) => {
        otp += otpInput.value;
    });
    alert(otp);
});