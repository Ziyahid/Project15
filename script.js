const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result")
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score")


const choices = ["Rock" , "Paper" , "Scissors"];

pScore.innerHTML = 0;
cScore.innerHTML = 0;

function play(choice){
    if(choice == "🖐️"){
        playerChoice.innerHTML = "Paper";
    }
    else if(choice == "👊"){
        playerChoice.innerHTML = "Rock";

    }
    else{
        playerChoice.innerHTML = "Scissors";
    }

    let computer =Math.floor( Math.random()*choices.length);
    computerChoice.innerHTML = choices[computer]


    if(playerChoice.innerHTML===computerChoice.innerHTML){
        result.innerHTML = "It's Tie!"
        result.style.color == "#333";
        result.classList.remove("red-text")
        result.classList.remove("green-text")
    }
    else if(
        (playerChoice.innerHTML == "Rock" && computerChoice.innerHTML == "Scissors")||
        (playerChoice.innerHTML == "Paper" && computerChoice.innerHTML == "Rock")||
        (playerChoice.innerHTML == "Scissors" && computerChoice.innerHTML == "Paper")

    ){

        result.innerHTML = "You Win!";
        pScore.innerHTML = parseInt(pScore.innerHTML) + 1
        result.classList.add("green-text")
        result.classList.remove("red-text")

    }
    else{
        result.innerHTML = "Computer Wins!"
        cScore.innerHTML = parseInt(cScore.innerHTML) + 1;
        result.classList.add("red-text");
        result.classList.remove("green-text")
    }


}