document.addEventListener('DOMContentLoaded', function () {
    // Sample music data (you can replace it with your own data)
    const musicData = [
        { title: 'Song 1', artist: 'Artist 1', src: 'path/to/song1.mp3' },
        { title: 'Song 2', artist: 'Artist 2', src: 'path/to/song2.mp3' },
        // Add more music items as needed
    ];

    // Function to create a music grid item
    function createMusicItem(music) {
        const musicItem = document.createElement('div');
        musicItem.classList.add('musicItem');
        musicItem.innerHTML = `
            <h3>${music.title}</h3>
            <p>${music.artist}</p>
            <audio controls>
                <source src="${music.src}" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
        `;
        return musicItem;
    }

    // Function to populate the music grid
    function populateMusicGrid() {
        const musicGrid = document.getElementById('musicGrid');

        // Clear existing content
        musicGrid.innerHTML = '';

        // Create and append music items to the grid
        musicData.forEach(music => {
            const musicItem = createMusicItem(music);
            musicGrid.appendChild(musicItem);
        });
    }

    // Populate the music grid on page load
    populateMusicGrid();
});
