


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        let buttonInnerHTML = this.innerHTML
        drumSounds(buttonInnerHTML);
        drumAnimation(buttonInnerHTML);
     });
}


document.addEventListener("keypress", function(event) {
    drumSounds(event.key);
    drumAnimation(event.key);

});


function drumSounds(key) {
    switch(key) {
             
        case "j":
            let tom1 = new Audio("drumSounds/tom-1.mp3");
            tom1.play();
        break;
            
        case "k":
            let tom2 = new Audio("drumSounds/tom-2.mp3");
            tom2.play();
        break;
                
        case "l":
            let tom3 = new Audio("drumSounds/tom-3.mp3");
            tom3.play();
         break;
                    
        case "i":
            let tom4 = new Audio("drumSounds/tom-4.mp3");
            tom4.play();
        break;
                        
        case "f":
            let snare = new Audio("drumSounds/snare.mp3");
            snare.play();
        break;                   
                            
        case "d":
            let crash = new Audio("drumSounds/crash.mp3");
            crash.play();
        break;

        case "b":
            let kickBass1 = new Audio("drumSounds/kick-bass.mp3");
            kickBass1.play();
        break;

        case " ":
            let kickBass2 = new Audio("drumSounds/kick-bass.mp3");
            kickBass2.play();
        break;
y
    default: console.log(key);
    }
}

function drumAnimation(currentKey) {
    let pressedButton = document.querySelector("." + currentKey);     
    
    pressedButton.classList.add("drum-hit")

    pressedButton.addEventListener('animationend', () => {
       pressedButton.classList.remove("drum-hit") 
    }, { once: true })
        //  pressedButton.classList.add("drumanimation");
        //  setTimeout(function() {pressedButton.classList.remove("drumanimation");}, 100);
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