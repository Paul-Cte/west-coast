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

document.getElementById("btn_fermeture").addEventListener('click',closeMenu);

