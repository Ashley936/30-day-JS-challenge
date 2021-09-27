window.addEventListener("keydown", function(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`)
    key.classList.add('playing');
    check();
})

function check() {
    let keys = document.querySelectorAll('.keys');
    keys.forEach(key => {
    if (key.classList.contains('playing')) {
        setTimeout(() => {
            key.classList.remove('playing');
        }, 70);
    }
    else return;
});
}
////////////////// using "transitionend" event listener ////////////////////////
/*let keys = document.querySelectorAll('.keys');
keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName === "transform") {
            key.classList.remove('playing');
        }
    })
})*/