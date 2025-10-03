// URLs des images (ajoutez 32 images ou plus selon votre besoin)
const images = [
    "images/info1.png", "images/info2.jpg", "images/info3.jpg", "images/info4.jpg",
    "images/info5-1.jpg", "images/info5.jpg", "images/info6.jpg", "images/info7.jpg",
    "images/info8.jpg", "images/state.jpg", "images/neige.jpg", "images/info11.jpg",
    "images/info12.jpg", "images/info13.jpg", "images/info14.jpg", "images/info15.jpg",
        "images/info16.jpg", "images/info17.jpg", "images/info18.jpg", "images/info19.jpg",
        "images/info20.jpg", "images/info21.jpg", "images/info22.jpg", "images/info23.jpg",
        "images/info24.jpg", "images/info25.jpg", "images/info26.jpg", "images/info27.jpg",
        "images/info28.jpg", "images/info29.jpg", "images/info30.jpg", "images/info31.jpg",
        
    ];
    // Génération dynamique des images
const gallery = document.getElementById('image-gallery');
images.forEach((src, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Image ${index + 1}`;
    //img.onclick = () => window.location.href = 'graphisme.html';

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
