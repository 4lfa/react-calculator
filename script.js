//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener
keys.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerText;
  if (buttonText === "C") {
    output.innerText = "";
    result.innerText = "0";
    return;
  }
  if (buttonText === "%") {
    output.innerText = `${output.innerText}/100`;
    return;
  }

  if (buttonText === "⟵") {
    output.textContent = output.textContent.substr(
      0,
      output.textContent.length - 1
    );
    return;
  }

  if (buttonText === "=") {
    try {
      result.innerText = `= ${eval(output.innerText)}`;
    } catch {
      result.innerText = "error!";
    }
  } else {
    output.textContent += buttonText;
    return;
  }
}
