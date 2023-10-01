const email = document.querySelector("#email");
const password = document.querySelector("#password");
const login = document.getElementById("login");
const errorMessage = document.getElementById("error-message"); 

login.addEventListener("mouseover", function (e) {
    if (!email.value.trim() || !password.value.trim()) {
        login.style.transform = "translateX(-230px)";
        login.innerHTML = "ahah";
    } else {
        login.style.transform = "translateX(0px)";
        login.innerHTML = "Daxil ol";
    }
});

login.addEventListener("mouseout", function (e) {
    login.style.transform = "translateX(0)";
    login.innerHTML = "ahah";
});

login.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isSuccess(email.value.trim(), password.value.trim())) {
        errorMessage.style.display = "block"; 
        errorMessage.style.fontSize = "13px";
        errorMessage.style.marginLeft = "33px";
        errorMessage.style.marginTop = "-20px";
        errorMessage.style.fontWeight = "bold";
        errorMessage.innerHTML = "Email və ya Şifrə düzgün deyil!";
        login.style.transform = "translateX(0)";
        login.innerHTML = "Daxil ol";
    } else {
        errorMessage.style.display = "none"; 
        window.location.href = "./asset/pages/bank.html";
    }
});

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
