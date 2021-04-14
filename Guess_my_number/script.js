'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

let check = document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!'

    // when player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('.number').textContent = secretNumber;

        let body = document.querySelector('body');
        let number = document.querySelector('.number');

        body.style.background = 'green';
        number.style.width = '300px';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // when guess is too high
    } else if(guess > secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = 'Too high! Try again!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }

    // when guess is too low
    } else if(guess < secretNumber){

        if(score > 1){
            document.querySelector('.message').textContent = 'Too low! Try again!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})


let again = document.querySelector('.again');
again.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    let body = document.querySelector('body');
    let number = document.querySelector('.number');
    body.style.background = '#222';
    number.style.width = '15rem';

});