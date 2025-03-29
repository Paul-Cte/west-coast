document.getElementById("goto").addEventListener("click", function () {
    window.scrollBy({
        top: window.innerHeight - 90, // 90vh en pixels
        behavior: "smooth", // Défilement fluide
    });
});

const header = document.querySelector("header");
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition <= windowHeight) {
        header.style.transform = "translateY(-100%)"; // Cache le header
    } else {
        header.style.transform = "translateY(0)"; // Réaffiche le header
    }
});

const menu = document.getElementsByClassName('menu_deroulant')[0];



document.getElementById("btn_burger").addEventListener("click", function () {
    const isOpen = menu.classList.contains('menu_deroulant_active'); // Vérifie si le menu est ouvert
    
    menu.classList.toggle('menu_deroulant_active');

    if (isOpen) {
        body.classList.remove('bodyactive');
        
    } else {
        body.classList.add('bodyactive');
        
    }
});

const closeMenu = () => {
    menu.classList.remove('menu_deroulant_active');
    body.classList.remove('bodyactive');
};

document.getElementById("btn_fermeture").addEventListener('click',closeMenu)

