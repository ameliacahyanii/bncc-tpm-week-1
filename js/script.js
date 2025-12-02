// PASSWORD
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (togglePassword) {
  togglePassword.addEventListener("click", () => {
    const isPass = password.type === "password";
    password.type = isPass ? "text" : "password";
    togglePassword.className = isPass ? "ri-eye-off-line" : "ri-eye-line";
  });
}

// CONFIRM PASSWORD
const confirmPass = document.getElementById("confirm-password");
const toggleConfirm = document.getElementById("toggleConfirm");

if (toggleConfirm) {
  toggleConfirm.addEventListener("click", () => {
    const isPass = confirmPass.type === "password";
    confirmPass.type = isPass ? "text" : "password";
    toggleConfirm.className = isPass ? "ri-eye-off-line" : "ri-eye-line";
  });
}
