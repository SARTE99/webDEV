
var numberOfButtons = document.querySelectorAll(".drum").length; 

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

} 





document.addEventListener("keydown", function (event){
    console.log(event);
    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
})






function makeSound(item) {
    switch(item) {
        case "w":
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound2 = new Audio("sounds/kick-bass.mp3");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("sounds/snare.mp3");
            sound3.play();
            break;
        case "d":
            var sound4 = new Audio("sounds/tom-1.mp3");
            sound4.play();
            break;
        case "j":
            var sound5 = new Audio("sounds/tom-2.mp3");
            sound5.play();
            break;
        case "k": 
            var sound6 = new Audio("sounds/tom-3.mp3");
            sound6.play();
            break;
        case "l":
            var sound7 = new Audio("sounds/tom-4.mp3");
            sound7.play();
            break;
        default:
    }
}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100); 
}





