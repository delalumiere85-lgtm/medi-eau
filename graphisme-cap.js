// Liste des images
const images = [
    "images/gracap1.jpg", "images/gracap3.jpg", "images/gracap2.jpg", "images/gracap4.jpg",
    "images/gracap5.jpg", "images/gracap6.jpg", "images/gracap7.jpg", "images/gracap8.jpg",
    "images/gracap9.jpg", "images/gracap10.jpg", "images/gracap11.jpg", "images/gracap12.jpg",
    "images/gracap13.jpg", "images/gracap14.jpg", "images/gracap15.jpg", "images/gracap16.jpg"
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
