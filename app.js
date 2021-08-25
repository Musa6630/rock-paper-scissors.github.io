let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice() {
    const choices= ['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToword(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(userChoice)}${smalluserword} beats ${convertToword(computerChoice)}${smallcompword}. you win!`;
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(userChoice)}${smalluserword} lost to ${convertToword(computerChoice)}${smallcompword}. You lost!`;
}
function draw(userChoice, computerChoice) {
    
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToword(userChoice)}${smalluserword} Equals to  ${convertToword(computerChoice)}${smallcompword}. It's a Draw!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":
           win(userChoice, computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;   
   }
}

function main(){
rock_div.addEventListener('click', function()
{
   game("r");
})
paper_div.addEventListener('click', function()
{
    game("p");
})
scissor_div.addEventListener('click', function()
{
    game("s");
})
}
main();