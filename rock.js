let userscore = 0;
let compscore = 0 ;
let num1 = document.querySelector("#num1");
let num2  = document.querySelector("#num2");
let msg = document.querySelector(".msg");

let userchoice = document.querySelectorAll(".image");

let compchoice = () =>{
    const choices = ["rock","paper","scissor"];
    const randindex = Math.floor(Math.random()*3);
    return choices[randindex];
};

const drawGame = () => {
    console.log("game is a draw");
    msg.innerText = "game is draw";
};

const showwinner = (userwin) => {
    if (userwin) {
        console.log("user won");
        userscore += 1;
        num1.innerText = `${userscore}`;
        msg.innerText = "congrats user won";
    }else {
        console.log("user lost ");
        compscore += 1;
        num2.innerText = `${compscore}`;
        msg.innerText = "user lost ";
    }
};


let playgame = (usrchoice) => {
    const computerchoice = compchoice();
    console.log("computer choice : ",computerchoice);
    if (computerchoice === usrchoice ){
        drawGame();
    }
    
    else{ 
        let userwin = true;
        if (usrchoice === "rock"){
            userwin = computerchoice === "paper" ? false : true;
        }
        else if (usrchoice === "paper"){
            userwin = computerchoice === "scissor" ? false : true;
        
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }
    return 
};
userchoice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userselect  = choice.getAttribute("id");
        console.log("user choice : ",userselect);
        playgame(userselect);
    });
    
    
});



