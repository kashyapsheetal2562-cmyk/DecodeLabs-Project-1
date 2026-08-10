const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");


// Mobile menu
menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// Close menu after clicking a link
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// CTA button
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

    alert("Welcome to DecodeLabs Project 1! 🚀");

});
