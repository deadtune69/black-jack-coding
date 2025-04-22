let dealerCards1 = 0;
let dealerCards2 = 0;
dealerCardsTotal = dealerCards1 + dealerCards2;
let playerCards = 0;

function getCards () {
    return Math.floor(Math.random()*12)
}

function startGame() {
    dealerCards1 = getCards();
    dealerCards2 = getCards();
    
    playerCards = getCards() + getCards();
    console.log("you have a total of " + playerCards)
    console.log
    while(playerTotal < 21) {
        let question = prompt("hit or stand?");
        if(prompt = "hit") {
            playerTotal = playerTotal + getCards;
        }
    }
    if(playerTotal > 21) {
        console.log("you lost");
        break;

    }
}

startGame();