'use strict';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.score').textContent = '50';

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

// const scorer = function () {
//   document.querySelector('.number').textContent = document.querySelector(
//     '.guess'
//   ).value;
// };

const messager = function (message) {
  document.querySelector('.message').textContent = message;
};

var highscore = 0;

var secret_number = Math.trunc(Math.random() * 20);
console.log(secret_number);
var score = 20;
document.body.style.background = 'black';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';

const loser = function (a, score) {
  if (score > 1) {
    if (a == 'h') {
      messager('tooHigh');
    } else {
      messager('too Low');
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    messager('you LOST hahahaha');
    document.querySelector('.score').textContent = '0';
  }
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = parseFloat(document.querySelector('.guess').value);
  if (!guess) {
    messager('Please Enter a number');
    // gamefunction();
  } else {
    if (guess > secret_number) {
      loser('h', score);
      // gamefunction();
    } else {
      if (guess < secret_number) {
        loser('l', score);
        // gamefunction();
      } else {
        if (guess == secret_number) {
          document.querySelector('.message').textContent = 'Correct';
          document.querySelector('.number').textContent = guess;
          document.body.style.background = 'green';
          if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
        }
      }
    }
  }

  // console.log(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('again');
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#000000';
  score = 20;
  // let guess = null;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  var secret_number = Math.trunc(Math.random() * 20);
  console.log(secret_number);
});
