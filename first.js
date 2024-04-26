let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let para  = document.querySelector(".msg-container");
let msg = document.querySelector(".msg")

let playerO = true;//;

const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if (playerO === true){
      box.innerText = "O";
      playerO = false;
    }
    else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;

   CheckWinner(); 
  });
});


const enable = () => {
  para.classList.remove("hide");
}
const disable = () => {
  para.classList.add("hide");
}
const ResetButton = () => {
    for(let box of boxes){
      box.innerText = " ";
    }
    disable();
};


const ShowWinner = (winner) =>{
  msg.innerText = `Congrats the winner is ${winner}`;
  enable();
}
 const CheckWinner = () => {
  let patval1,patval2,patval3;
  for(let pattern of winningPattern){
     patval1 = ( boxes[pattern[0]].innerText);
     patval2 = ( boxes[pattern[1]].innerText);
     patval3 = ( boxes[pattern[2]].innerText);
  }
  if (patval1 != "" && patval2 != "" && patval3 != ""){
    if(patval1 === patval2 && patval2 === patval3){
      console.log("winner",patval1);
      ShowWinner(patval1);
    }
  }
  
};

reset.addEventListener("click",ResetButton);