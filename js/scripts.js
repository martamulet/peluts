document.addEventListener('DOMContentLoaded', () => {
  
  // Funcionalitat per al botó de "Torna a dalt"
  const backToTopButton = document.getElementById("back-to-top-btn");

  // Funcionalitat per a la navbar i el botó "Torna a dalt" en un únic esdeveniment de "scroll"
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener("scroll", () => {
    // Botó "Torna a dalt"
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }

    // Navbar amagat/mogut
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll cap avall: amaga la navbar
      navbar.style.top = "100px";
    } else {
      // Scroll cap amunt: mostra la navbar
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
  });

  // Fes que el botó "Torna a dalt" porti l'usuari al principi de la pàgina amb desplaçament suau
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Funcionalitat per al menú mòbil (toggle del menú)
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('w3-show');
  });

});
