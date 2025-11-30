const passwordInput = document.getElementById("password-input");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.classList.toggle("ph-eye");
  togglePassword.classList.toggle("ph-eye-slash");
});
