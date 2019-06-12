import {data} from '../app.js';

let firstLow = 'cards/1.jpg';
let secondLow = 'cards/4.jpg';
let thirdLow = 'cards/7.jpg';
let fourthLow = 'cards/10.jpg';
let fifthLow = 'cards/13.jpg';
let sixthLow = 'cards/16.jpg';
let seventhLow = 'cards/19.jpg';
let eightLow = 'cards/21.jpg';
let ninethLow = 'cards/23.jpg';
let tenthLow = 'cards/24.jpg';

let firstHigh = 'cards/26.jpg';
let secondHigh = 'cards/29.jpg';
let thirdHigh = 'cards/32.jpg';
let fourthHigh = 'cards/35.jpg';
let fifthHigh = 'cards/38.jpg';
let sixthHigh = 'cards/41.jpg';
let seventhHigh = 'cards/44.jpg';
let eightHigh = 'cards/47.jpg';
let ninethHigh = 'cards/50.jpg';
let tenthHigh = 'cards/52.jpg';

let lowCards = [firstLow, secondLow, thirdLow, fourthLow, fifthLow, sixthLow, seventhLow, eightLow, ninethLow, tenthLow];

let fristLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let secondLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let thirdLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let fourthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let fifthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let sixthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let seventhLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let eightLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let ninethLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);
let tenthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1);

let highCards = [firstHigh, secondHigh, thirdHigh, fourthHigh, fifthHigh, sixthHigh, seventhHigh, eightHigh, ninethHigh, tenthHigh];

let fristHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let secondHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let thirdHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let fourthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let fifthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let sixthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let seventhHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let eightHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let ninethHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);
let tenthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1);

export const riskObj = {
    
    lowCard1: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('firstSecret').src = fristLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard2: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('secondSecret').src = secondLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won !';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard3: function() {
            let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('thirdSecret').src = thirdLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won !!';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard4: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('fourthSecret').src = fourthLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won Again :)';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard5: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('fifthSecret').src = fifthLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'And Won Again !!! :)';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard6: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('sixthSecret').src = sixthLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'And Again !!! :)';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard7: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('seventhSecret').src = seventhLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'Won You Lucky You... :)';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard8: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('eightSecret').src = eightLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'Won You Lucky Bastardo';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard9: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('ninethSecret').src = ninethLowCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Should Try Lottery :)';
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    lowCard10: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard < 13){
            document.getElementById('tenthSecret').src = tenthLowCard;
            data.moneyWon *= 10;
            alert('You Smash The Bank');
            data.secretLevel = 0
        }else if (secretCard > 12){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard1: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('firstSecret').src = fristHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }      
    },
    highCard2: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('secondSecret').src = secondHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won !';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard3: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('thirdSecret').src = thirdHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won !!';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard4: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('fourthSecret').src = fourthHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Won Again :)';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard5: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('fifthSecret').src = fifthHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'And Won Again !!! :)';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard6: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('sixthSecret').src = sixthHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'And Again !!! :)';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard7: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('seventhSecret').src = seventhHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'Won You Lucky You... :)';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard8: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('eightSecret').src = eightHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'Won You Lucky Bastardo';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard9: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('ninethSecret').src = ninethHighCard;
            data.moneyWon *= 2;
            data.secretLevel ++;
            data.riskMessage = 'You Should Try Lottery :)';
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.riskMessage = 'Classic Poker';
            data.score = 'You Lost';
            data.round = 5;
        }
    },
    highCard10: function() {
        let secretCard = 0;
        secretCard = Math.floor(Math.random() * 24 + 1);
        if(secretCard > 12){
            document.getElementById('tenthSecret').src = tenthHighCard;
            data.moneyWon *= 100;
            alert('You Smash The Bank');
            data.secretLevel = 0;
        }else if (secretCard < 13){
            data.moneyWon = 0;
            data.secretLevel = 0;
            data.score = 'You Lost';
            data.round = 5;
        }
    },
};