'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector(".message").textContent="Correct Number!!!!"
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=10
// document.querySelector(".guess").value=23
// console.log(document.querySelector(".guess").value)
// //handling click events


//define secret number at top


let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

//event listner we need for it
document.querySelector(".check").addEventListener("click",function(){
const guess=Number(document.querySelector(".guess").value)
console.log(guess)
//when there is no number
if(!guess){
    document.querySelector(".message").textContent="No Number!"
} 
//player wins
else if(guess===secretNumber){
    document.querySelector(".message").textContent="Correct Number!"
document.querySelector("body").style.backgroundColor='#60b347'
document.querySelector(".number").style.width="30rem"
document.querySelector(".number").textContent=secretNumber
if(score>highScore){
    highScore=score;
    document.querySelector(".highscore").textContent=highScore;
}


}
//when guess is too high
else if(guess>secretNumber){
    if(score>1){
        document.querySelector(".message").textContent="too high!";
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="u lost the game";
        document.querySelector(".score").textContent=0;
    }
   
}
else if(guess<secretNumber){
    if(score>1){
        document.querySelector(".message").textContent="Too Low";
        score--;
        document.querySelector(".score").textContent=score;
    }
    else{
        document.querySelector(".message").textContent="u lost the game";
        document.querySelector(".score").textContent=0;
    }
    
}

})

document.querySelector(".again").addEventListener("click",function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector(".score").textContent=20;
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value=""
    document.querySelector("body").style.backgroundColor='#222'
    document.querySelector(".number").style.width="15rem"
    document.querySelector(".message").textContent="start guessing!!!!"

})
