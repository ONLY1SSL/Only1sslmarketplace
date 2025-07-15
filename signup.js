function togglePassword(id, btn) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const errorMsg = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pwd = document.getElementById("password").value;
    const confirmPwd = document.getElementById("confirmPassword").value;

    if (pwd !== confirmPwd) {
      errorMsg.classList.remove("hidden");
    } else {
      errorMsg.classList.add("hidden");
      alert("Signup successful!");
    }
  });
});