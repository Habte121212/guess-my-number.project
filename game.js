// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='🎉Correct number!';
// document.querySelector('.Secreatecode').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value );
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.btn_check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No a number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉Correct number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score
      document.querySelector('.Highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 you lost the game';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('.btn_again').addEventListener('click', function(){
      score = 20;
      const number = Math.trunc(Math.random() * 20) + 1;
       document.querySelector('.message').textContent = 'Start guessing...';
       document.querySelector('.score').textContent = score;
       document.querySelector('.number').textContent = '?';

       document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222 ';

    });
  }
});
