const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.getElementById("login");
const errorMessage = document.getElementById("error-message"); // Hata mesajını alırız

login.onmouseover = function (e) {
    if (!email.value.trim() || !password.value.trim()) {
        login.style.float = "left"; // Düğmeyi sağa kaydırırız
    } else {
        login.style.float = "right"; // Düğmeyi eski konumuna getiririz
    }
}

login.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isSuccess(email.value.trim(), password.value.trim())) {
        errorMessage.style.display = "block"; // Hata mesajını görünür yaparız
        errorMessage.innerHTML = "Email və ya Şifrə düzgün deyil!";
    } else {
        errorMessage.style.display = "none"; // Hata mesajını gizleriz
        window.location.href = "./asset/pages/bank.html";
    }
})

const isSuccess = (email, password) => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (
        email === storedEmail &&
        password === storedPassword
    ) {
        return true;
    }
    return false;
}
