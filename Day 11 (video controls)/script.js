//getting controls
let video = document.querySelector('.content');
let playBtn = document.querySelector('.play-btn');
//let volume = document.querySelector('input[name="volume"]');
//let playbackRate = document.querySelector('input[name="playbackRate"]')
let skipBtns = document.querySelectorAll('[data-skip]')
let sliders = document.querySelectorAll('input[type="range"]');
let progressBar = document.querySelector('.progress-bar')



//rough work



//event listenters
playBtn.addEventListener('click', play);
video.addEventListener('click', play);
skipBtns.forEach(btn => {
    btn.addEventListener('click', skip);
});
sliders.forEach(slider => {
    let click = false;
    slider.addEventListener('mousedown', () => click = true);
    slider.addEventListener('mouseup', () => click = false);
    slider.addEventListener('mousemove', function () {
        if (!click)
            return;
        video[this.name] = this.value;
});
})
video.addEventListener('timeupdate', progress)




//functions
function play() {
    if (video.paused) {
        video.play();
        playBtn.innerHTML = "&#10074;&#10074;";
    }
    else {
        video.pause();
        playBtn.innerHTML = "&#9658;";
    }
   
}
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
function progress() {
    let percentage = video.currentTime * 100 / video.duration;
    progressBar.style.width = percentage + '%';
}

