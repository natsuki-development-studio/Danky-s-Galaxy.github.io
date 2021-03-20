const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "edesaM2010" && password === "edesaM2010") {
        location.replace("https://www.danky.dev/dankys/betaskripts/g.html")
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})