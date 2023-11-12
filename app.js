let score = [];
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cards_txt = document.getElementById("cards_txt");
let sumx = 0;
let finalMsg = document.getElementById("message-final");
let newCardBtn = document.getElementById("new_card");
// 2. Store the cards paragraph in a variable called cardsEl



function gameLoop() 
{

    sumx = totalScore(cards);
    sumEl.textContent = "Sum: " + sumx;
   
    if (sumx <= 20) {
        message = "Do you want to draw a new card?";
        showCards(cards);
        
    } else if (sumx === 21) {
        message = "You've got Blackjack!";
        showCards(cards);
        hasBlackJack = true;
        resetGame();
        
    } else {
        message = "You're out of the game!";
        showCards(cards);
        isAlive = false;
        resetGame();
    }
    messageEl.textContent = message

}


function newCard()
{
    cards.push(getRandomCard());
    gameLoop();
}

function totalScore(sco)
{
    let sum=0;
    for (const item of sco)
    {
        sum+= item;
    }
    
    return sum;
}

function showCards(arr)
{    
    cards_txt.textContent = "Cards:  ";
    for (let index = 0; index < arr.length; index++) 
    {
     cards_txt.textContent += arr[index] + " ";
    
    }
    
}

function resetGame()
{
    score = [];
    sumx = 0;
    finalMsg.hidden = false;
    finalMsg.textContent = " Thank you for Playing!";
    newCardBtn.hidden = true;

}

function getRandomCard() 
{

    let randomNumer = Math.floor( Math.random()*13 ) + 1;
    if (randomNumer > 10) 
    {
        return 10;
    } 
    else if (randomNumer === 1) 
    {
        return 11;
    } 
    else 
    {
        return randomNumer;
    }
}