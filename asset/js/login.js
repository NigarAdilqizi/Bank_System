const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.getElementById("login");

login.onmouseover = function(e) {
    if (!email.value.trim() || !password.value.trim()) {
        login.classList.toggle("right");
        login.innerHTML = "ahah";
    } else {
        login.innerHTML = "Daxil ol";
    }
}

login.addEventListener("click", (e) => {
    e.preventDefault();
    const p = document.getElementById("emailError");
    if (!isSuccess(email.value.trim(), password.value.trim())) {
        p.style.display = "block";
        p.innerHTML = "Email və ya Şifrə düzgün deyil!";
    } else {
        p.style.display = "none";
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
