const buttons = document.querySelectorAll('.drum');
let l = buttons.length;
for (let i = 0; i < l; i++) {
    buttons[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        switch (buttonInnerHTML) {
            case "w":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "a":
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            case "s":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
            case "d":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "j":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "k":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "l":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        }
    })
}

addEventListener('keydown', function (e) {
    let pressedKey = e.key;
    buttonAnimation(pressedKey);
    switch (pressedKey) {
        case "w":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    }
})

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100)

}