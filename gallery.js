// Liste des images
const images = [
    "images/eau.jpg", "images/home.jpg", "images/inondation.jpg", "images/monte.jpg",
    "images/destruction.jpg", "images/pluie.jpg", "images/bois.jpg", "images/water.jpg",
    "images/inondation1.jpg", "images/gal7.jpg", "images/gal1.jpg", "images/gal2.jpg",
    "images/gal3.jpg", "images/gal4.jpg", "images/gal5.jpg", "images/gal6.jpg"
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
