let form = document.forms[0];

form.onsubmit = function (event) {
  event.preventDefault();
  let first_name = document.querySelector(".first_name").value,
    last_name = document.querySelector(".last_name").value,
    email = document.querySelector(".email").value,
    num = document.querySelector(".phone").value,
    message = document.querySelector(".message").value;
  if (!isNaN(parseInt(first_name)) || !isNaN(parseInt(last_name))) {
    alert(
      "you cant type numbers in the name fields, please rewrite your first and last name."
    );
    document.querySelector(".first_name").value = "";
    document.querySelector(".last_name").value = "";
  }
  if (!email.includes("@")) {
    alert("⚠️ Invalid email: missing '@'");
    document.querySelector(".email").value = "";
  } else if (!email.endsWith(".com")) {
    alert("⚠️ Email must end with '.com'");
    document.querySelector(".email").value = "";
  }
  if (message == "") {
    alert("please enter a message, you can't submit an empty message");
  }
  if (
    isNaN(parseInt(first_name)) &&
    isNaN(parseInt(last_name)) &&
    email.includes("@") &&
    email.endsWith(".com") &&
    message != ""
  ) {
    alert("Your message has been sent successfully");
    window.location.href = "Home.html";
    return false;
  }
};
