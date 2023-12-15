
function rollingDice() {
    //select type of sided-dice
let sides = document.getElementById("diceSides").value;
    //get players name
let userOne = document.getElementById("playerOne").value;
let userTwo = document.getElementById("playerTwo").value;
    //generate 2 random number for both players
let randomNumber1 = Math.floor(Math.random() * sides) + 1;
let randomNumber2 = Math.floor(Math.random() * sides) + 1; 
    //matchup dice image with random number
let randomImage1 = "diceimages/dice" + randomNumber1 + ".png";
let randomImage2 = "diceimages/dice" + randomNumber2 + ".png";
    //replace default img with random number
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);    
    //use condition to present winner's name
if ( randomNumber1 > randomNumber2 ) 
    document.getElementById("gameResult").innerText = userOne + " Wins!"
else if ( randomNumber1 < randomNumber2 ) 
    document.getElementById("gameResult").innerText = userTwo + " Wins!"
else 
    document.getElementById("gameResult").innerText = "Draw Game!" 
}

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("homeMain").style.marginRight = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
  }