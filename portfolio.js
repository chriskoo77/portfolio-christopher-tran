document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    
    console.log(toggleButton); // Vérifie si l'élément est bien sélectionné
    console.log(nav); // Vérifie si le menu est bien sélectionné

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("nav-open"); // Ajoute/retire la classe 'nav-open'
    });
});


    // Animation du scroll vers les sections 
    const links = document.querySelectorAll(".navigation_liste a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste selon la hauteur de ton header
                    behavior: "smooth"
                });
            }
        });
    });
});
