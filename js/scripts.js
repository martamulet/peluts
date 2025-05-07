// JavaScript per al botó de tornada al principi
const backToTopButton = document.getElementById("back-to-top-btn");

// Fes que el botó porti l'usuari al principi de la pàgina
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplaçament suau 
        });
});


const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('nav_link--show');
});


window.onscroll = function() {
    var btn = document.getElementById("back-to-top-btn");
    btn.style.display = window.pageYOffset > 100 ? "block" : "none";
  };
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.classList.contains("w3-hide")) {
    menu.classList.remove("w3-hide");
  } else {
    menu.classList.add("w3-hide");
  }
}



let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll cap avall: amaga la navbar
    navbar.style.top = "-100px";
  } else {
    // Scroll cap amunt: mostra la navbar
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});


/*
const pagina = document.querySelector(".pagina");
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.classList.add("mode-toggle");

toggleButton.addEventListener("click", () => {
  pagina.classList.toggle("fosc");
});
*/