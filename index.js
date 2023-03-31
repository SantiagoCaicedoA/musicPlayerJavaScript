var numberOfButtonss = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtonss; i++) {
    let buttons = document.querySelectorAll('.drum')[i].addEventListener("click", function() {
        
        var buttonClicked = this.innerHTML;

        makeSound(buttonClicked);

        buttonAnimation(buttonClicked)

    })
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    buttonAnimation(event.key)
})

function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "s":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "d":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "f":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "g":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
    
        case "h":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
    
        case "j":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}
