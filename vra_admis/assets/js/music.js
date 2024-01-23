// made by tr1x_em
// optimized by vra.admis

let songList = [
    './assets/audio/CLANDESTINA.mp3',
    './assets/audio/ME AND MY BROTHER.MP3',
    './assets/audio/TUTUTU.mp3',
    './assets/audio/BRAZAILIAN PHONK.mp3',
    './assets/audio/FALLING.mp3'
];
let currentSongIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPause');
const nowPlayingText = document.getElementById('nowPlayingText');
const playPauseIcon = document.getElementById('playPauseIcon');

function loadSong(songIndex) {
    const songPath = songList[songIndex];
    const songName = songPath.split('/').pop().split('.').shift().replace(/_/g, ' ');
    nowPlayingText.textContent = `Now Playing - ${songName}`;
    audioPlayer.src = songList[songIndex];
    audioPlayer.load();
}

function togglePlayPause() {
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (audioPlayer.paused) {
        playPauseIcon.src = './assets/images/play-solid.svg';
    } else {
        playPauseIcon.src = './assets/images/pause.svg';
    }
}

document.getElementById('prev').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

document.getElementById('next').addEventListener('click', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

audioPlayer.addEventListener('ended', function () {
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    updatePlayPauseIcon();
});

playPauseButton.addEventListener('click', togglePlayPause);
