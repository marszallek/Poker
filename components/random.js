import {data} from '../app.js'
import {hierarchy} from '../hierarchy/hierarchy.js'

export const playButtons = {

    start: function () {
        this.random();
        this.check();
        this.whatIsOnHand();
        data.round = 2;
        data.money -= data.bet;
    },
    checkButton: function() {
        this.whatIsOnHand();
        data.round = 3
    },
    collectMoney: function() {
        data.money = data.money + data.moneyWon;
        data.round = 3;
        data.round = 1;
        data.moneyWon = 0;
        data.score = 'Good Luck'
    },
    collectMoneyFromRisk: function() {
        data.money = data.money + data.moneyWon;
        data.round = 1;
        data.secretLevel = 0;
        data.moneyWon = 0;
        data.score = 'Good Luck';
        data.riskMessage = 'Classic Poker'
    },
    startOver: function() {
        if(data.money <= 0){
            data.score = 'You Lost';
            this.bet = 0;
            return data.round = 5
        }data.score = 'Good Luck';
        data.round = 1;
        data.riskMessage = 'Classic Poker'
    },
    random: function () {
        data.one = Math.floor(Math.random() * 52 + 1);
        data.two = Math.floor(Math.random() * 52 + 1);
        data.three = Math.floor(Math.random() * 52 + 1);
        data.four = Math.floor(Math.random() * 52 + 1);
        data.five = Math.floor(Math.random() * 52 + 1);

        if (data.one === data.two || data.one === data.three || data.one === data.four || data.one === data.five || data.two === data.three ||
            data.two === data.four || data.two === data.five || data.three === data.four || data.three === data.five || data.four === data.five) {
            this.random()
        }
    },
    whatIsOnHand: function () {
        hierarchy.straightFlush();
    },
    check: function () {
        document.getElementById('first').src = `cards/${data.one}.jpg`;
        document.getElementById('second').src = `cards/${data.two}.jpg`;
        document.getElementById('third').src = `cards/${data.three}.jpg`;
        document.getElementById('fourth').src = `cards/${data.four}.jpg`;
        document.getElementById('fifth').src = `cards/${data.five}.jpg`;
    },
}