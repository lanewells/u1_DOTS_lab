/*
 * DOTS: Level Three
 *
 */
let score = 0
let ball = document.querySelectorAll('.js-ball')
let scoreDisplay = document.querySelector('.js-score')
let levelWinner = document.querySelector('.level-winner')

//Using a for Loop

// for (let i = 0; i < ball.length; i++) {
// ball[i].addEventListener('click', function() {
//     score += parseInt(this.getAttribute('data-increment'))
//     scoreDisplay.innerText = score
//     if (score >= 100) {levelWinner.style.opacity = 1}
// })}

//Using a forEach Loop

ball.forEach((ballito) => ballito.addEventListener('click', function() {
    score += parseInt(this.getAttribute('data-increment'))
    scoreDisplay.innerText = score
    if (score >= 100) {levelWinner.style.opacity = 1}
}))