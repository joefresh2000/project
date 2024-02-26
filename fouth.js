function updateWelcomeMessage() {
    var currentHour = new Date().getHours();

    var welcomeMessage;
    if (currentHour >= 0 && currentHour < 12) {
        welcomeMessage = 'Good morning';
    }else if (currentHour >= 12 && currentHour < 16){
        welcomeMessage = 'Good afternoon';
    }else {
        welcomeMessage = 'Good evening!';
    }

    document.getElementById('third').innerText =  welcomeMessage + ', Joseph!'

}

window.onload = updateWelcomeMessage;

function playPauseAudio(audioSource, playButtonId) {
    var audio = new Audio(audioSource);
    var playButton = document.getElementById(playButtonId);

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '⏸ Pause';
        } else {
            audio.pause();
            playButton.innerHTML = '▶️ Play';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    
    playPauseAudio('./music/mi.mp3', 'playButton1');
    playPauseAudio('./music/kiss-daniel.mp3', 'playButton2');
    playPauseAudio('./music/Runtown.mp3', 'playButton3');
    playPauseAudio('./music/Kizz-Daniel---Twe-Twe', 'playButton4');
});