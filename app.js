let score = [];
let firstCard = Math.ceil(Math.random()*11);
let secondCard = Math.ceil(Math.random()*11);
let cards = [firstCard, secondCard];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cards_txt = document.getElementById("cards_txt");
let sumx = 0;
// 2. Store the cards paragraph in a variable called cardsEl



function startGame() 
{

    sumx = totalScore(cards);
    sumEl.textContent = "Sum: " + sumx;
    

    if (sumx <= 20) {
        message = "Do you want to draw a new card?";
        showCards(cards);
        
    } else if (sumx === 21) {
        message = "You've got Blackjack!";
        showCards(cards);
        hasBlackJack = true
    } else {
        message = "You're out of the game!";
        showCards(cards);
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard()
{
    cards.push(Math.ceil(Math.random()*10));
    startGame();
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

     console.log(arr[index]);
     cards_txt.textContent += arr[index] + " ";
    
    }
    
}