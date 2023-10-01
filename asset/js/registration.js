const registrationForm = document.querySelector("#registrationForm");

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Formun avtomatik göndərilməsini dayandırır

    // Inputları aliriq
    const usernameInput = document.querySelector("#username");
    const surnameInput = document.querySelector("#surname");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const confirmPasswordInput = document.querySelector("#confirmPassword");
    const agreeCheckbox = document.querySelector("#agree");

    // Tesdiqleme səhvlərini yığır
    const validationErrors = [];

    if (!validateAlphabeticNotEmpty(usernameInput)) {
        validationErrors.push("Ad yalnızca hərflərdən ibarət olmalıdır və boş buraxılmamalıdır.");
    }

    if (!validateAlphabeticNotEmpty(surnameInput)) {
        validationErrors.push("Soyad yalnızca hərflərdən ibarət olmalıdır və boş buraxılmamalıdır.");
    }

    if (!validateEmail(emailInput.value)) {
        validationErrors.push("Düzgün email ünvanı daxil edin (nümunə: example@example.com).");
    }

    if (!validatePassword(passwordInput)) {
        validationErrors.push("Şifrə 8-20 simvoldan ibarət olmalıdır.");
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        validationErrors.push("Şifrələr eyni olmalıdır.");
    }

    if (!agreeCheckbox.checked) {
        validationErrors.push("Qaydalarla razı olmalısınız.");
    }

    if (!validateLength(usernameInput, 3, 10)) {
        validationErrors.push("Ad 3-10 simvoldan ibarət olmalıdır.");
    }

    if (!validateLength(surnameInput, 4, 15)) {
        validationErrors.push("Soyad 4-15 simvoldan ibarət olmalıdır.");
    }

    // Hər bir doğrulama səhvindən sonra uyğun inputun altında xəbərdarlıq mesajını göstərir
    for (const input of [usernameInput, surnameInput, emailInput, passwordInput, confirmPasswordInput, agreeCheckbox]) {
        const errorMessage = input.nextElementSibling;

        if (errorMessage && errorMessage.classList.contains("error-message")) {
            errorMessage.remove(); // Əvvəlki xəbərdarlıq mesajını silir
        }
    }

    // Hər bir error mesajının inputa uyğun olduğunu bildirən map yaradırıq
    const errorInputMapping = {
        "Ad yalnızca hərflərdən ibarət olmalıdır və boş buraxılmamalıdır.": "username",
        "Soyad yalnızca hərflərdən ibarət olmalıdır və boş buraxılmamalıdır.": "surname",
        "Düzgün email ünvanı daxil edin (nümunə: example@example.com).": "email",
        "Şifrə 8-20 simvoldan ibarət olmalıdır.": "password",
        "Şifrələr eyni olmalıdır.": "confirmPassword",
        "Qaydalarla razı olmalısınız.": "agree"
    };

    for (const error of validationErrors) {
        const inputId = errorInputMapping[error];
        const input = document.querySelector(`#${inputId}`);
        displayErrorMessage(input, error); // Uyğun inputun altında xəbərdarlıq mesajını göstərir
    }

    // Əgər hər şey düzgündirsə, login.html e kecir
    if (validationErrors.length === 0) {
     localStorage.setItem("email", emailInput.value.trim());
    localStorage.setItem("password", passwordInput.value.trim());
      window.location.href="./asset/pages/login.html";
    }
});

// Input tesdiqlemeleri
function validateAlphabeticNotEmpty(input) {
    const value = input.value.trim();
    const alphabeticRegex = /^[A-Za-z]+$/; // Yalnızca hərfləri qəbul edir  
    return alphabeticRegex.test(value) && value.length > 0;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(input) {
    const value = input.value.trim();
    return value.length >= 8 && value.length <= 20;
}

function validateLength(input, minLength, maxLength) {
    const value = input.value.trim();
    return value.length >= minLength && value.length <= maxLength;
}

// Xəbərdarlıq mesajını göstərmək üçün funksiya
function displayErrorMessage(input, message) {
    const errorMessage = document.createElement("p");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red"; 
    errorMessage.style.fontSize = "12px";
    errorMessage.style.marginLeft = "0px";
    errorMessage.textContent = message;

    // Inputun altına əlavə edir
    const parent = input.parentElement;
    parent.insertBefore(errorMessage, input.nextElementSibling);
}
