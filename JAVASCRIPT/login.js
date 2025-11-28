const pass = document.getElementById("password");
const btn = document.getElementById("btn-eye");
const icon = document.querySelector(".icon");
btn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    pass.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
});

const fullname= document.getElementById("fullname");
const username = document.getElementById("username");
username.focus();
fullname.focus();

