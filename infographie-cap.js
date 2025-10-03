// URLs des images (ajoutez 32 images ou plus selon votre besoin)
const images = [
    "images/infocap1.jpg", "images/infocap2.jpg", "images/infocap3.jpg", "images/infocap4.jpg",
    "images/infocap5.jpg", "images/infocap6.jpg", "images/infocap7.jpg", "images/infocap8.jpg",
    "images/infocap9.jpg", "images/infocap10.jpg", "images/infocap11.jpg", "images/infocap12.jpg",
    "images/infocap13.jpg", "images/infocap14.jpg", "images/infocap15.jpg", "images/infocap16.jpg",
        
        
    ];
    // Génération dynamique des images
const gallery = document.getElementById('image-gallery');
images.forEach((src, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    //img.onclick = () => window.location.href = 'graphisme-ps.html';

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
