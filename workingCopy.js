let allCards = []


for(i = 1; i < 53; i ++){
    allCards.push(i);
}
let cardsLeft = allCards.length
console.log(cardsLeft)
let one = allCards.splice(Math.random()*cardsLeft, 1)[0];

console.log(one)
console.log(cardsLeft)
