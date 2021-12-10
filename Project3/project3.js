let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessHistory = document.getElementById("guessHistory");
let guessCount = 1;
let score = 10;
let highScore = 0;
let congratsScores = document.getElementById("congratsHighScores");
let congratsHighScore = document.getElementsByClassName("congratsHighScores")[0];
let congratsBest= document.getElementsByClassName("congratsBest")[0];


function checkGuess(){
    let userGuess = Number(guessNumber.value);

        if (userGuess=== null || userGuess <= 0 || userGuess >100 && guessCount >=1) {
        guessHistory.textContent = "Guess History: ";
        document.getElementById("changingP").innerHTML = "No input or invalid value :( <br> Please enter a number between 1-100";

      }else if (userGuess === randomNumber) {
            document.getElementById("line2box").style.backgroundColor = "#99ffcc";
            document.querySelector("img").src = "youwin.jpg";
            document.querySelector("input").hidden = true;
            document.getElementById("changingP").hidden = true;
            document.getElementById("correctNumber").innerHTML = randomNumber;
            document.getElementById("congrats").hidden = false;
            document.getElementById("button").hidden = true;
            document.getElementById("button2").hidden = false;
            highScore++;
            document.getElementById("highScore").textContent = highScore;
            congratsScores.innerHTML =highScore;
            congratsBest.innerHTML=highScore;
            win();

          }else if (guessCount === 10) {
            document.getElementById("changingP").innerHTML = "game over";
            document.getElementById("line2box").style.backgroundColor = "#ff0004";
            document.querySelector("img").src = "gameover.jpg";
            document.querySelector("input").hidden = true;
            document.getElementById("changingP").hidden = true;
            document.getElementById("correctNumberInWrong").innerHTML = randomNumber;
            document.getElementById("gameOver").hidden = false;
            document.getElementById("button").hidden = true;
            document.getElementById("button3").hidden = false;
            document.getElementById("button3").disabled= true;
            document.getElementById("score").innerHTML = 0;


          }else if (userGuess < randomNumber) {
            document.getElementById("changingP").innerHTML = "Number is too low";
            score--;
            document.getElementById("score").innerHTML = score;


        }else if (userGuess > randomNumber) {
            document.getElementById("changingP").innerHTML = "Number is too high :(";
            score--;
            document.getElementById("score").innerHTML = score;

        }
        guessHistory.textContent += "  " + userGuess + " ,";
        guessCount++;
}




function reload() {
    document.getElementById("onRight").addEventListener("click", function() {
     location.reload();
    }
  );
}



function playAgain(){
   randomNumber = Math.floor(Math.random() * 100) + 1;
    score = 10;
    guessCount =1;
    document.getElementById("congrats").hidden = true;
    document.getElementById("button2").hidden = true;
    document.querySelector("img").src = "question.png";
    document.getElementById("button").hidden = false;
    document.getElementById("line2box").style.backgroundColor = "rgb(102, 78, 209)";
    document.getElementById("score").innerHTML = 10;
    guessHistory.textContent = "Guess History: ";
    document.querySelector("input").hidden = false;
    document.getElementById("changingP").hidden = false;
}
