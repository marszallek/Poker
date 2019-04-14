import {playButtons} from './components/random.js'
import {BetButtonComponent} from './components/betButtons.js'
import {changeObj} from './components/changeCards.js'
import {riskObj} from './components/risk.js'

Vue.component('bet-button-component', BetButtonComponent);


export let data = {
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
}

const app = new Vue({
    el: '#app',
    data: data,
    computed: {
        bigStraightFlushValue: function () {
            return this.bet * 100
        },
        smallStraightFlushValue: function () {
            return this.bet * 50
        },
        flushValue: function () {
            return this.bet * 25
        },
        fourOfTheKindValue: function () {
            return this.bet * 16
        },
        fullHouseValue: function () {
            return this.bet * 10
        },
        straightValue: function () {
            return this.bet * 6
        },
        threeOfTheKindValue: function () {
            return this.bet * 4
        },
        twoPairsValue: function () {
            return this.bet * 2
        },
        pairValue: function () {
            return this.bet
        },
        moneyToBeTaken: function() {
            if(this.score === 'Big Straight Flush'){
                return this.moneyWon = this.bigStraightFlushValue
            }else if(this.score === 'Small Straight Flush'){
                return this.moneyWon = this.smallStraightFlushValue
            }else if(this.score === 'Flush'){
                return this.moneyWon = this.flushValue
            }else if(this.score === 'Four Of The Kind'){
                return this.moneyWon = this.fourOfTheKindValue
            }else if(this.score === 'Full House'){
                return this.moneyWon = this.fullHouseValue
            }else if(this.score === 'Straight'){
                return this.moneyWon = this.straightValue
            }else if(this.score === 'Three of a Kind'){
                return this.moneyWon = this.threeOfTheKindValue
            }else if(this.score === '2 Pairs'){
                return this.moneyWon = this.twoPairsValue
            }else if(this.score === 'Pair'){
                return this.moneyWon = this.pairValue
            }else return this.moneyWon = 0
        },
    },
    methods: {
        start: function () {
            playButtons.start()
        },
        checkButton: function() {
            playButtons.checkButton()
        },
        changeSelected: function() {
            changeObj.changeSelected()
        },
        collectMoney: function() {
            playButtons.collectMoney()
        },
        collectMoneyFromRisk: function() {
            playButtons.collectMoneyFromRisk()
        },
        startOver: function() {
            playButtons.startOver()
        },
        selectFirst: function() {
            if(this.round === 2){
                this.firstSelected = !this.firstSelected
            }else this.firstSelected = this.firstSelected
        },
        selectSecond: function() {
            if(this.round === 2){
                this.secondSelected = !this.secondSelected
            }else this.secondSelected = this.secondSelected
        },
        selectThird: function() {
            if(this.round === 2){
            this.thirdSelected = !this.thirdSelected
            }else this.thirdSelected = this.thirdSelected
        },
        selectFourth: function() {
            if(this.round === 2){
            this.fourthSelected = !this.fourthSelected
            }else this.fourthSelected = this.fourthSelected
        },
        selectFifth: function() {
            if(this.round === 2){
            this.fifthSelected = !this.fifthSelected
            }else this.fifthSelected = this.fifthSelected
        },
        takeARisk: function() {
            this.round = 4;
            this.secretLevel = 1
        },
        lowCard1: function() {
            riskObj.lowCard1()
        },
        lowCard2: function() {
            riskObj.lowCard2()
        },
        lowCard3: function() {
            riskObj.lowCard3()
        },
        lowCard4: function() {
            riskObj.lowCard4()
        },
        lowCard5: function() {
            riskObj.lowCard5()
        },
        lowCard6: function() {
            riskObj.lowCard6()
        },
        lowCard7: function() {
            riskObj.lowCard7()
        },
        lowCard8: function() {
            riskObj.lowCard8()
        },
        lowCard9: function() {
            riskObj.lowCard9()
        },
        lowCard10: function() {
            riskObj.lowCard10()
        },
        lowCard1: function() {
            riskObj.lowCard1()
        },
        highCard1: function() {
            riskObj.highCard1()
        },
        highCard2: function() {
            riskObj.highCard2()
        },
        highCard3: function() {
            riskObj.highCard3()
        },
        highCard4: function() {
            riskObj.highCard4()
        },
        highCard5: function() {
            riskObj.highCard5()
        },
        highCard6: function() {
            riskObj.highCard6()
        },
        highCard7: function() {
            riskObj.highCard7()
        },
        highCard8: function() {
            riskObj.highCard8()
        },
        highCard9: function() {
            riskObj.highCard9()
        },
        highCard10: function() {
            riskObj.highCard10()
        },
        // for testing invoke when needed
        tillGet: function (iWant) {
            playButtons.random();
            playButtons.check();
            playButtons.whatIsOnHand();
            if (this.score !== iWant) {
                this.tillGet(iWant)
            } else return this.score
        },
    },
})