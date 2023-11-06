const player0 = document.querySelector('.player_0');
const player1 = document.querySelector('.player_1');

const score0 = document.getElementById('score_0');
const score1 = document.getElementById('score_1');

const dice1 = document.querySelector('.dice');

const current0 = document.getElementById('current_0');
const current1 = document.getElementById('current_1');

//btns
const btnRoll = document.querySelector('.btn_roll');
const btnHold = document.querySelector('.btn_hold');
const btnNew = document.querySelector('.btn_new');


let scores, activePlayer, currentScore, playGame;

//initialize function
const init = function() {
score0.textContent = 0;
score1.textContent = 0;
dice1.classList.add('hidden');

scores = [0, 0];
activePlayer = 0;
currentScore = 0;
playGame = true;

current0.textContent = 0;
current1.textContent = 0;

dice1.classList.add('hidden');
player0.classList.remove('player_winner');
player1.classList.remove('player_winner');
player0.classList.add('player_active');
player1.classList.remove('player_active');
};

init();

//switch the player
let switchPlayer = function(){
    document.getElementById(`current_${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    player0.classList.toggle('player_active');
    player1.classList.toggle('player_active');

}

btnRoll.addEventListener('click', function() {
    
    if(playGame) {
       dice1.classList.remove('hidden');

      //generate the random number
      const dice = Math.floor(Math.random() * 6) + 1;

      //display random img
      dice1.src = `./img/dice-${dice}.png`;

      //check for rolled 1
      if(dice !== 1){
          //display the score
          currentScore += dice;
          //current0.textContent = currentScore;
         document.getElementById(`current_${activePlayer}`).textContent = currentScore;
      }else {
          //switch the player
          switchPlayer();
       }
    }
});

//btn hold event
btnHold.addEventListener('click', function (){
    if (playGame){
      scores[activePlayer] += currentScore;
      document.getElementById(`score_${activePlayer}`).textContent = scores[activePlayer];

      if(scores[activePlayer] >= 100){
        playGame = false;
        document.querySelector(`.player_${activePlayer}`).classList.add('player_winner');


        document.querySelector(`.player_${activePlayer}`).classList.add('player_active');
        dice1.classList.add('hidden');
      }else {
        //switch player
        switchPlayer();
      }
    }
});

btnNew.addEventListener('click', init);


