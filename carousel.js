const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const carouselContent = document.querySelector(".carousel-content");

let currentIndex = 0;

function updateCarousel() {
    const totalItems = document.querySelectorAll(".carousel-item").length;
    const visibleItems = 2; // Nombre d'avis visibles
    const itemWidth = 350; // Largeur d'un élément
    const totalWidth = totalItems * itemWidth;

    // Limiter l'index dans les bornes valides
    currentIndex = Math.max(0, Math.min(currentIndex, totalItems - visibleItems));

    // Déplacer le contenu du carrousel
    carouselContent.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

prevBtn.addEventListener("click", () => {
    currentIndex -= 1;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    currentIndex += 1;
    updateCarousel();
});
