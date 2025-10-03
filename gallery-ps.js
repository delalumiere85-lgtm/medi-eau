// Liste des images
const images = [
    "images/psg1.jpg", "images/psg2.jpg", "images/psg3.jpg", "images/psg4.jpg",
    "images/psg5.jpg", "images/psg6.jpg", "images/psg7.jpg", "images/psg8.jpg",
    "images/psg9.jpg", "images/psg10.jpg", "images/psg11.jpg", "images/psg12.jpg",
    "images/psg13.jpg", "images/psg14.jpg", "images/psg15.jpg", "images/manif.jpg"
];

// Génération dynamique des images
const gallery = document.getElementById('image-gallery');
images.forEach((src, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
   // img.onclick = () => window.location.href = 'videos.html';

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
