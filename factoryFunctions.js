function guessing_Game (){
    let randomNumber = Math.ceil((Math.random() * 100))

    function newGame(){

    }

    function guessBtnClicked() {
        const guessedNo = Number;
        const message = "";
    
        if (guessedNo > 100 || guessedNo < 1) {
            message.innerHTML = 'You have exceeded the limit, enter a number between 1 & 100';
    
        }else if (guessedNo < randomNumber) {
            message.innerHTML = "Your guess is too low!";
    
        } else if (guessedNo > randomNumber) {
            message.innerHTML = "Your guess is too high!";
    
        } else {
            message.innerHTML =  `Correct, the secret number is ${guessedNo}!`;
        }
    }

    function reset(){

    }
    return {
        newGame,
        guessBtnClicked,
        reset
    }
}