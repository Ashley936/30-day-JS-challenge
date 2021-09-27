const $holes = document.querySelectorAll('.hole')
const $moles = document.querySelectorAll('.mole')
const $countDown = document.querySelector('.countdown')
const $scoreboard = document.querySelector('.score')
const $startBtn = document.querySelector('.startbutton')
const $highScore = document.querySelector('.highscore')

let lastmole = undefined;
let timeUp;
let timeLimit = 30000;
let score = 0;
let countdown;
let time; //Comes random and control hardness
let highScore = localStorage.getItem('highscore') || 0;

//localstorage
function getHighScore() {
    if (highScore < score) {
        localStorage.setItem('highscore', score)
        $highScore.innerHTML = "High Score: " + score
    }
    if (highScore >= score) {
        $highScore.innerHTML = "High Score: " + highScore
    }
}
getHighScore()

//Start game
const startGame = () => {
    countdown = timeLimit / 1000;
    timeUp = false;
    $countDown.innerHTML = countdown;
    
    popOut()

    setTimeout(() => {
        timeUp = true
    }, timeLimit)

    let startCountdown = setInterval(() => {

        countdown -= 1;
        $countDown.innerHTML = countdown;

        if (countdown < 0 || timeUp) {
            clearInterval(startCountdown)
            getHighScore()
            $countDown.innerHTML = "<h3>Times Up!!</h3>"
        
        }
    }, 1000)
}

const pickrandomMoles = (moles) => {
    const moleIndex = Math.floor(Math.random() * moles.length)
    const mole = moles[moleIndex]
    if (mole === lastmole) {
        return pickrandomMoles(moles)
    }
    lastmole = mole
    return mole;
}

const popOut = () => {

    time = Math.random() * 2300 + 800; //Hardness controller
    const mole = pickrandomMoles($moles)
    mole.classList.add('up')

    setTimeout(() => {
        mole.classList.remove('up')
        if (!timeUp) {
            popOut()
        }
    }, time);
}

function whack(e){
    score++;
    $scoreboard.innerHTML = score;

    this.style.backgroundImage = "url('./Images/yoda2.png')"
    this.style.pointerEvents = "none"

    setTimeout(() => {
        this.style.pointerEvents = "all"
        this.style.backgroundImage = "url('./Images/yoda1.png')"
    }, time)
}

$moles.forEach((mole) => mole.addEventListener('click',whack))

$startBtn.addEventListener('click', startGame)