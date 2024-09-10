const prayer = document.querySelector(".prayer");
prayer.onclick = function () {
    window.location.href = "./prayer-times.html";
};


const currencyconversion = document.querySelector(".currencyconversion");
currencyconversion.onclick = function () {
    window.location.href = "./currencyconversion.html";
};


const weather = document.querySelector(".weather");
weather.onclick = function () {
    window.location.href = "./weather.html";
};



window.onscroll = function () {

    const nav = document.querySelector("nav");
    const carousel = document.querySelector(".carousel");

    if (window.scrollY > carousel.offsetTop) {

        nav.classList.add('scrolNavbar');



    } else

        nav.classList.remove('scrolNavbar');

}