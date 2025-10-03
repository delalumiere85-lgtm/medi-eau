// URLs des images (ajoutez 32 images ou plus selon votre besoin)
const images = [
    "images/socialinf.jpg", "images/infos2.jpg", "images/infos3.jpg", "images/infos4.jpg",
    "images/infos5.jpg", "images/infos6.jpg", "images/infos7.jpg", "images/infos8.jpg",
    "images/infos9.jpg", "images/infos10.jpg", "images/infos11.jpg", "images/infos12.jpg",
    "images/infos13.jpg", "images/infos14.jpg", "images/infos15.jpg", "images/infos16.jpg",
        
        
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
