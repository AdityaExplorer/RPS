let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg1");
const userScorePar=document.querySelector("#user-score");
const comScorePar=document.querySelector("#computer-score");

// Computer Game
const generateComChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomID=Math.floor(Math.random() * 3);
    return options[randomID];
    
}


// Draw Function
 const drawFunction=()=>{
    console.log("Game was Draw")
 }

 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePar.innerText=userScore;
        msg.innerText=`You Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        comScore++;
        comScorePar.innerText=comScore;
        msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
 }

// User Game 
const startGame=(userChoice)=>{
        console.log("user choice =",userChoice);
        const compChoice= generateComChoice();
        console.log("Computer Choice =",compChoice)

        // Draw condition
        if(userChoice === compChoice ){
            drawFunction(); 
            msg.innerText="Game was Draw";  
            msg.style.backgroundColor="black";  
        } else{
            let userWin=true;
            if(userChoice==="rock"){
                // scissore or paper
                userWin = compChoice==="paper"? false:true;
            } else if(userChoice==="paper"){
            // rock,scossors
              userWin= compChoice==="scissors"?false:true;
            } else {
                // rock , paper
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin,userChoice,compChoice);
        }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").getAttribute("id");
        startGame(userChoice);
    });
});

