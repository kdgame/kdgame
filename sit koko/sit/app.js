
let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWorld(letter) {
	if (letter === "r") return "Pierre";
	if (letter === "p") return "Feuille";
 return "Ciseaux";
}


function win(userChoice, computerChoice) {
	const smallUserWorld = "(joueur)".fontsize(3).sup();
    const smallCompWorld = "(machine)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
	userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWorld} bat ${convertToWorld(computerChoice)}${smallCompWorld}. Pfff je t'ai laissé gagner Bouffon ! ( you win )`
userChoice_div.classList.add('green-glow');
setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);

}

function lose(userChoice, computerChoice) {
	const smallUserWorld = "(joueur)".fontsize(3).sup();
const smallCompWorld = "(machine)".fontsize(3).sup();
 const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWorld} perd face à ${convertToWorld(computerChoice)}${smallCompWorld}. Tu ne peux rien faire contre moi misérable ! ( you lose )`
userChoice_div.classList.add('red-glow');
setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);

}

function draw(userChoice, computerChoice) {
	 const userChoice_div = document.getElementById(userChoice);
const smallUserWorld = "(joueur)".fontsize(3).sup();
const smallCompWorld = "(machine)".fontsize(3).sup();
result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWorld} égal ${convertToWorld(computerChoice)}${smallCompWorld}. Ne me copie pas espece de... ! ( its a draw )`
userChoice_div.classList.add('gray-glow');
setTimeout(()=> userChoice_div.classList.remove('gray-glow'), 1000);

}



function game(userChoice){
 const computerChoice = getComputerChoice();
const name = "pine"
switch (userChoice + computerChoice) {
	case "rs":
	case "pr":
	case "sp":
	win( userChoice, computerChoice);
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


function main() {
rock_div.addEventListener('click',() => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));
}

main();





























