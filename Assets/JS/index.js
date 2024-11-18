for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}


document.addEventListener("keypress", function(event){
    var button = event.key;
    playSound(button);
    buttonAnimation(button);
})


function playSound(antecedent){
    switch (antecedent) {
        case "w":
            var tom1Audio = new Audio("./Assets/sounds/tom-1.mp3");
            tom1Audio.play();
            break;

        case "a":
            var tom2Audio = new Audio("./Assets/sounds/tom-2.mp3");
            tom2Audio.play();
            break;

        case "s":
            var tom3Audio = new Audio("./Assets/sounds/tom-3.mp3");
            tom3Audio.play();
            break;

        case "d":
            var tom4Audio = new Audio("./Assets/sounds/tom-4.mp3");
            tom4Audio.play();
            break;
        
        case "j":
            var snareAudio = new Audio("./Assets/sounds/snare.mp3");
            snareAudio.play();
            break;

        case "k":
            var crashAudio = new Audio("./Assets/sounds/crash.mp3");
            crashAudio.play();
            break;

        case "l":
            var kickAudio = new Audio("./Assets/sounds/kick-bass.mp3");
            kickAudio.play();
            break;
    
        default:
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    for (var i = 0; i < 2; i++) {
        setTimeout(() => {
            activeButton.classList.toggle("pressed");
        }, i * 100);
    }
    
}