const $bars = document.querySelectorAll('.bar')
const $ball = document.querySelector('.ball')
const $playArea = document.querySelector('.wrapper')
const $startBtn = document.querySelector('.start')

//let ballTilt, ballTop, ballBottom;
let ballHit = false;

let gameStart = false;
let ballSpeed = 5;
let barSpeed = 50;
let barPosition = [0,0]

$startBtn.addEventListener('click', () => {
    gameStart = true;
    $startBtn.classList.add('hide');
    throwBall();
})

window.addEventListener('keydown', (e) => {
    if (!gameStart) {
        console.log('not true')
        return;
    }

    let barDia = $bars[0].getBoundingClientRect()
    let playDia = $playArea.getBoundingClientRect()

    if (e.keyCode === 68 && playDia.right>=barDia.right+barSpeed+10) {
        for (let i = 0; i < $bars.length; i++) {
            barPosition[i] += barSpeed
            $bars[i].style.left = barPosition[i] + 'px'
        }
    }

    if (e.keyCode === 65 && playDia.left+barSpeed+10<= barDia.left) {
        for (let i = 0; i < $bars.length; i++) {
            barPosition[i] -= barSpeed
            $bars[i].style.left = barPosition[i] + 'px'
        }
    }
})
function throwBall() {
    ballTop = ($playArea.clientHeight - $ball.offsetHeight) + 'px'
    ballBottom = 0;
    ballTilt = Math.floor(Math.random() * 100)
    $ball.style.left = ballTilt + 'px';
    $ball.style.bottom = ballBottom;
}
    /* check()
}

function check() {
    let barDia = $bars[0].getBoundingClientRect()
    let ballDia = $ball.getBoundingClientRect()
    let ballCenter = ballDia.x + ballDia.width / 2
    if (ballCenter > barDia.x && ballCenter < (barDia.right)) {
        ($ball.style.left === 0) ? ($ball.style.left = ($playArea.clientHeight - $ball.offsetHeight) + 'px') : ($ball.style.left = 0)
        check()
    }
    return;
} */