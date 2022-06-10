let pass = document.querySelector("#password");
let confirm = document.querySelector("#confirm");

pass.addEventListener("change", () => {
  validate();
});

confirm.addEventListener("change", () => {
  validate();
});

function validate() {
  if (pass.value !== "" && pass.value === confirm.value) {
    document.querySelector("#error").classList.add("hidden");
    pass.classList.remove("invalid");
    confirm.classList.remove("invalid");
  } else {
    document.querySelector("#error").classList.remove("hidden");
    pass.classList.add("invalid");
    confirm.classList.add("invalid");
  }
}
