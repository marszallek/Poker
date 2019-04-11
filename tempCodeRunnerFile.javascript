const highCard = () => {
    let objectOfTenHighCards = [];
    let fristHighCard;
    let cardsLeft;
    for(let i = 1; i < 11; i++){
        objectOfTenHighCards.push(i)
    };
    cardsLeft = objectOfTenHighCards.length
    fristHighCard = objectOfTenHighCards.splice((Math.random()* cardsLeft), 1)
    console.log(fristHighCard)
    console.log(objectOfTenHighCards.length)
};

highCard()