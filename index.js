window.onload = () => {
    let homeScore = 0;
    let guestScore = 0;
    let startGame = false;
    let savedScores = document.querySelector("#saved-scores");

    const newGame = document.querySelector('#new-game');
    const saveGame = document.querySelector('#save-game');
    const resetGame = document.querySelector('#reset-game');

    const home = document.querySelector('#home');
    const guest = document.querySelector('#guest');

    home.addEventListener('click', event => {
        if (!startGame) {
            window.alert("Please Click on New Game to Start");
        }
        else {
            if (event.target.matches('#plusOne')) { homeScore += 1 };
            if (event.target.matches('#plusTwo')) { homeScore += 2 };
            if (event.target.matches('#plusThree')) { homeScore += 3 };
            document.querySelector("#score-value-home").textContent = homeScore;
        }
    })

    guest.addEventListener('click', event => {
        if (!startGame) {
            window.alert("Please Click on New Game to Start");
        }
        else {
            if (event.target.matches('#plusOne')) { guestScore += 1 };
            if (event.target.matches('#plusTwo')) { guestScore += 2 };
            if (event.target.matches('#plusThree')) { guestScore += 3 };
            document.querySelector("#score-value-guest").textContent = guestScore;
        }
    })

    newGame.addEventListener('click', () => {
        if(!startGame) {
            startGame = true;
        }
        else {
            window.alert('Game is already running');
        }
    })
    
    saveGame.addEventListener('click', () => {
        if (startGame) {
            savedScores.textContent += `Home: ${homeScore}, Guest: ${guestScore} - `
            homeScore = 0;
            guestScore = 0;
            document.querySelector("#score-value-home").textContent = homeScore;
            document.querySelector("#score-value-guest").textContent = guestScore;
        }
        else {
            window.alert("Please Click on New Game first");
        }
    })

    resetGame.addEventListener('click', () => {
        startGame = false;
        homeScore = 0;
        guestScore = 0;
        document.querySelector("#score-value-home").textContent = "--";
        document.querySelector("#score-value-guest").textContent = "--";
        savedScores.textContent = "";
    })
}