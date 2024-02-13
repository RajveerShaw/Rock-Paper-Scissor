let cho = document.querySelectorAll(".chose");
let you = document.querySelector("#You");
let comp = document.querySelector("#Comp");
let x = y = 0;

const generate = () => {
    let choice = ["rock", "paper", "scissor"];
    let rand = Math.floor(Math.random() * choice.length);
    return choice[rand];
};

const win = (userChoice,compChoice,winStatus) => {
    let h2 = document.querySelector("#result");
    if(winStatus=="draw"){
        h2.innerText = "It was a draw";
        h2.style.backgroundColor = "black";
        h2.style.width = "270px";
    }
    else if(winStatus=="false"){
        h2.innerText = `You lost! ${compChoice} beats ${userChoice}`;
        h2.style.backgroundColor = "red";
        h2.style.width = "370px";
        comp.innerText = ++x;
    }
    else{
        h2.innerText = `You won! ${userChoice} beats ${compChoice}`;
        h2.style.backgroundColor = "green";
        h2.style.width = "370px";
        you.innerText = ++y;
    }
};

const playGame = (userChoice) => {
    compChoice = generate();
    let winStatus = "true";
    if(userChoice == compChoice)
    {
        winStatus = "draw";
    }
    else if(userChoice == "rock")
    {
        if(compChoice == "paper"){
            winStatus = "false";
        }
    }
    else if(userChoice == "paper")
    {
        if(compChoice == "scissor"){
            winStatus = "false";
        }
    }
    else if(userChoice == "scissor")
    {
        if(compChoice == "rock"){
            winStatus = "false";
        }
    }
    win(userChoice,compChoice,winStatus);
};

cho.forEach((ch) => {
    ch.addEventListener("click", ()=> {
        let userChoice = ch.getAttribute("id");
        playGame(userChoice);
    });
});
