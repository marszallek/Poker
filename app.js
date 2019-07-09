import {playButtons} from './components/random.js';
import {BetButtonComponent} from './components/betButtons.js';
import {changeSelected} from './components/changeCards.js';
import {riskObj} from './components/risk.js';

Vue.component('bet-button-component', BetButtonComponent);

export const data = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    money: 20,
    bet: 1,
    round: 1,
    score: 'Make A Bet',
    firstSelected: false,
    secondSelected: false,
    thirdSelected: false,
    fourthSelected: false,
    fifthSelected: false,
    secretLevel: 0,
    moneyWon: 0,
    riskMessage: 'Classic Poker'
};

const app = new Vue({
    el: '#app',
    data: data,
    computed: {
        straightFlushValue () {
            return this.bet * 500;
        },
        fourOfTheKindValue () {
            return this.bet * 200;
        },
        fullHouseValue () {
            return this.bet * 50;
        },
        flushValue () {
            return this.bet * 20;
        },
        straightValue () {
            return this.bet * 10;
        },
        threeOfTheKindValue () {
            return this.bet * 5;
        },
        twoPairsValue () {
            return this.bet * 2;
        },
        pairValue () {
            return this.bet;
        },
        moneyToBeTaken () {
            if(this.score === 'Straight Flush') return this.moneyWon = this.straightFlushValue;
            if(this.score === 'Four Of The Kind') return this.moneyWon = this.fourOfTheKindValue;
            if(this.score === 'Full House') return this.moneyWon = this.fullHouseValue;
            if(this.score === 'Flush') return this.moneyWon = this.flushValue;
            if(this.score === 'Straight') return this.moneyWon = this.straightValue;
            if(this.score === 'Three of a Kind') return this.moneyWon = this.threeOfTheKindValue;
            if(this.score === '2 Pairs') return this.moneyWon = this.twoPairsValue;
            if(this.score === 'Pair') return this.moneyWon = this.pairValue;
            return this.moneyWon = 0;
        },
    },
    methods: {
        start () {
            playButtons.start();
        },
        checkButton () {
            playButtons.checkButton();
        },
        changeSelected () {
            changeSelected(data);
        },
        collectMoney () {
            playButtons.collectMoney();
        },
        collectMoneyFromRisk () {
            playButtons.collectMoneyFromRisk();
        },
        startOver () {
            playButtons.startOver();
        },
        selectFirst () {
            if(this.round === 2){
                this.firstSelected = !this.firstSelected;
            }else this.firstSelected = this.firstSelected;
        },
        selectSecond () {
            if(this.round === 2){
                this.secondSelected = !this.secondSelected;
            }else this.secondSelected = this.secondSelected;
        },
        selectThird () {
            if(this.round === 2){
            this.thirdSelected = !this.thirdSelected;
            }else this.thirdSelected = this.thirdSelected;
        },
        selectFourth () {
            if(this.round === 2){
            this.fourthSelected = !this.fourthSelected;
            }else this.fourthSelected = this.fourthSelected;
        },
        selectFifth () {
            if(this.round === 2){
            this.fifthSelected = !this.fifthSelected;
            }else this.fifthSelected = this.fifthSelected;
        },
        takeARisk () {
            this.round = 4;
            this.secretLevel = 1;
        },
        lowCard1 () {
            riskObj.lowCard1();
        },
        lowCard2 () {
            riskObj.lowCard2();
        },
        lowCard3 () {
            riskObj.lowCard3();
        },
        lowCard4 () {
            riskObj.lowCard4();
        },
        lowCard5 () {
            riskObj.lowCard5();
        },
        lowCard6 () {
            riskObj.lowCard6();
        },
        lowCard7 () {
            riskObj.lowCard7();
        },
        lowCard8 () {
            riskObj.lowCard8();
        },
        lowCard9 () {
            riskObj.lowCard9();
        },
        lowCard10 () {
            riskObj.lowCard10();
        },
        highCard1 () {
            riskObj.highCard1();
        },
        highCard2 () {
            riskObj.highCard2();
        },
        highCard3 () {
            riskObj.highCard3();
        },
        highCard4 () {
            riskObj.highCard4();
        },
        highCard5 () {
            riskObj.highCard5();
        },
        highCard6 () {
            riskObj.highCard6();
        },
        highCard7 () {
            riskObj.highCard7();
        },
        highCard8 () {
            riskObj.highCard8();
        },
        highCard9 () {
            riskObj.highCard9();
        },
        highCard10 () {
            riskObj.highCard10();
        },
        // for testing invoke when needed
        tillGet (iWant) {
            playButtons.start();
            if (this.score !== iWant) {
                this.tillGet(iWant);
            }else return this.score;
        },
    },
});