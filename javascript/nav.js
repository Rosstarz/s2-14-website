let screenWidth = window.innerWidth;
const nav = document.querySelector(".nav-container");
const menuButton = document.querySelector(".popup-nav");
const loginbutton = document.querySelector(".loginbtn");
const loginForm = document.getElementById('login-form');
const closeBtnLog = document.querySelector(".close-btn-log");
const closeBtnReg = document.querySelector(".close-btn-reg");


menuButton.addEventListener("click", function(){
    nav.classList.toggle("active");
});

loginbutton.addEventListener("click", function(){
    // onclick="document.getElementById('login-form').style.display='block'" style="width: auto;"
    loginForm.classList.toggle("active-login-form");
});

closeBtnLog.addEventListener("click", function(){
    loginForm.classList.remove("active-login-form")
});

closeBtnReg.addEventListener("click", function(){
    loginForm.classList.remove("active-login-form")
});

console.log(screenWidth);
console.log(nav);
