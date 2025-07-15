function togglePassword(id) {
  const input = document.getElementById(id);
  const btn = input.nextElementSibling;
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const pwd = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const error = document.getElementById("error");

  if (pwd !== confirm) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    alert("Signup successful (validation passed)!");
  }
});
