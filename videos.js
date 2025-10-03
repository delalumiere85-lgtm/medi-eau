const videos = [ 
    "videos/video1.mp4", "videos/water.mp4", "videos/video2.mp4", "videos/video3.mp4",
    "videos/video4.mp4", "videos/video6.mp4", "videos/video7.mp4", "videos/video8.mp4",
    "videos/video9.mp4", "videos/video10.mp4", "videos/video11.mp4", "videos/video12.mp4",
    "videos/video13.mp4", "videos/video14.mp4", "videos/video15.mp4", "videos/video16.mp4",
    "videos/video17.mp4", "videos/video18.mp4", "videos/video19.mp4", "videos/video20.mp4",
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

