import {data} from '../app.js';
import {hierarchy} from '../hierarchy/hierarchy.js';

export const playButtons = {
    allCards: [],
    start () {
        this.allCards = [];
        this.random();
        this.check();
        this.whatIsOnHand();
        data.round = 2;
        data.money -= data.bet;
    },
    checkButton () {
        this.whatIsOnHand();
        data.round = 3;
    },
    collectMoney () {
        data.money = data.money + data.moneyWon;
        data.round = 1;
        data.moneyWon = 0;
        data.score = 'Good Luck';
    },
    collectMoneyFromRisk () {
        data.money = data.money + data.moneyWon;
        data.round = 1;
        data.secretLevel = 0;
        data.moneyWon = 0;
        data.score = 'Good Luck';
        data.riskMessage = 'Classic Poker';
    },
    startOver () {
        if(data.bet > data.money) {data.bet = data.money;}
        if(data.money <= 0){
            data.bet = 0;
            data.score = 'You Lost';
            data.round = 5;
        }data.score = 'Good Luck';
        data.round = 1;
        data.riskMessage = 'Classic Poker';
    },
    random () {
        let i;
        for(i = 1; i < 53; i ++){
            this.allCards.push(i);
        }
        data.one = this.allCards.splice(Math.random()*51+1, 1)[0];
        data.two = this.allCards.splice(Math.random()*50+1, 1)[0];
        data.three = this.allCards.splice(Math.random()*49+1, 1)[0];
        data.four = this.allCards.splice(Math.random()*48+1, 1)[0];
        data.five = this.allCards.splice(Math.random()*47+1, 1)[0];
    },
    whatIsOnHand () {
        hierarchy.straightFlush();
    },
    check () {
        document.getElementById('first').src = `cards/${data.one}.jpg`;
        document.getElementById('second').src = `cards/${data.two}.jpg`;
        document.getElementById('third').src = `cards/${data.three}.jpg`;
        document.getElementById('fourth').src = `cards/${data.four}.jpg`;
        document.getElementById('fifth').src = `cards/${data.five}.jpg`;
    },
};