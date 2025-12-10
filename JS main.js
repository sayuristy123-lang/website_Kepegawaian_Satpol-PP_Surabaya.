function validateCaptcha() {
  let input = document.getElementById("captcha_input").value;
  if (input !== captchaCode) {
    alert("Captcha salah! Coba lagi.");
    generateCaptcha();
    return false;
  }

  // cek username dan password sederhana (contoh hardcode)
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    alert("Login berhasil!");
    window.location.href = "dashboard.html"; // pindah ke halaman dashboard
    return false; // supaya form tidak reload
  } else {
    alert("Username atau password salah!");
    return false;
  }
}