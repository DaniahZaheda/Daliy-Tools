const body = document.querySelector("body");
const cards = document.querySelectorAll(".card");  

const darkmode = document.querySelector(".darkmode");

darkmode.onclick = function() {
   body.classList.toggle("dark");


   cards.forEach(card => {
       card.classList.toggle("dark");
   });
};

const logo = document.querySelector(".logo");
logo.onclick = function() {
    window.location.href = "./index.html";   
};

const home = document.querySelector(".home");
home.onclick = function() {
    window.location.href = "./index.html";   
};

const login = document.querySelector(".login");
login.onclick = function() {
    window.location.href = "./login.html";   
};

const reg = document.querySelector(".reg");
reg.onclick = function() {
    window.location.href = "./register.html";   
};
