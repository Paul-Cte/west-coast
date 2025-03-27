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
