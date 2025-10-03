const videos = [ 
    "videos/videos1.mp4", "videos/videos2.mp4", "videos/videos3.mp4", "videos/videos4.mp4",
    "videos/videos5.mp4", "videos/videos6.mp4", "videos/videos7.mp4", "videos/videos8.mp4",
    "videos/videos9.mp4", "videos/videos10.mp4", "videos/videos11.mp4", "videos/videos12.mp4",
    "videos/videos13.mp4", "videos/videos14.mp4", "videos/videos15.mp4", "videos/videos16.mp4",
    "videos/videos17.mp4", "videos/videos18.mp4", "videos/videos19.mp4", "videos/videos20.mp4",
];

// Sélection de la galerie
const gallery = document.getElementById('video-gallery');

// Génération des vidéos dynamiquement
videos.forEach((src) => {
    // Créer un conteneur pour chaque vidéo
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    // Créer l'élément vidéo
    const video = document.createElement('video');
    video.src = src;
    video.classList.add('video-element');

    // Créer le bouton play
    const playButton = document.createElement('button');
    playButton.classList.add('play-button');
    playButton.textContent = '▶';

    // Créer le bouton pause
    const pauseButton = document.createElement('button');
    pauseButton.classList.add('pause-button');
    
    

    // Ajouter les événements au bouton play
    playButton.addEventListener('click', () => {
        video.play();
        playButton.style.display = 'none'; // Cacher le bouton play
        pauseButton.style.display = 'flex'; // Afficher le bouton pause
    });

    // Ajouter les événements au bouton pause
    pauseButton.addEventListener('click', () => {
        video.pause();
        pauseButton.style.display = 'none'; // Cacher le bouton pause immédiatement
        playButton.style.display = 'flex'; // Réafficher le bouton play
    });

    // Réafficher les boutons en fonction de l'état de la vidéo
    video.addEventListener('pause', () => {
        pauseButton.style.display = 'none'; // Cacher le bouton pause
        playButton.style.display = 'flex'; // Afficher le bouton play
    });

    video.addEventListener('play', () => {
        playButton.style.display = 'none'; // Cacher le bouton play
        pauseButton.style.display = 'flex'; // Afficher le bouton pause
    });

    video.addEventListener('ended', () => {
        pauseButton.style.display = 'none'; // Cacher le bouton pause
        playButton.style.display = 'flex'; // Réafficher le bouton play
    });

    // Ajouter les éléments dans le conteneur
    videoContainer.appendChild(video);
    videoContainer.appendChild(playButton);
    videoContainer.appendChild(pauseButton);

    // Ajouter le conteneur dans la galerie
    gallery.appendChild(videoContainer);
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
