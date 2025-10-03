// Liste des images
const images = [
    "images/cap1.jpg", "images/cap2.jpg", "images/cap3.jpg", "images/cap4.jpg",
    "images/cap5.jpg", "images/cap6.jpg", "images/cap7.jpg", "images/cap8.jpg",
    "images/cap9.jpg", "images/cap10.jpg", "images/cap11.jpg", "images/cap12.jpg",
    "images/cap13.jpg", "images/cap14.jpg", "images/cap15.jpg", "images/cap16.jpg"
];

// Génération dynamique des images
const gallery = document.getElementById('image-gallery');
images.forEach((src, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    //img.onclick = () => window.location.href = 'videos.html';

    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.getElementById('scroll-indicator');
    const galleryContainer = document.querySelector('.gallery-container');

    let lastScrollTop = 0; // Stocke la position précédente du scroll

    galleryContainer.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = galleryContainer;

        // Vérifie si on est en bas de la galerie
        const atBottom = scrollTop + clientHeight >= scrollHeight;

        if (scrollTop > lastScrollTop) {
            // Si on descend
            if (!atBottom) {
                scrollIndicator.classList.remove('hidden');
            } else {
                scrollIndicator.classList.add('hidden');
            }
        } else {
            // Si on remonte
            scrollIndicator.classList.add('hidden');
        }

        // Mise à jour de la position précédente du scroll
        lastScrollTop = scrollTop;
    });

    // Masque l'indicateur par défaut
    scrollIndicator.classList.add('hidden');
});
