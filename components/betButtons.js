import {data} from '../app.js';

export let BetButtonComponent = Vue.extend({
    data () {
        return data;
    },
    methods: {
        betPlusOne () { 
            if(this.bet >= this.money || this.bet + 1 >= this.money){
                this.bet = this.money;
                return this.money;
            }else return this.bet ++;
        },
        betMinusOne () {
            if(this.bet <= 0 || this.bet - 1 <= 0) {
                this.bet = 1;
            }else return this.bet--;
        },
        betPlusTen () {
            if(this.bet >= this.money || this.bet + 10 >= this.money){
                this.bet = this.money;
                return this.money;
            }else return this.bet += 10;
        },
        betMinusTen () {
            if(this.bet <= 0 || this.bet - 10 <= 0) {
                this.bet = 1;
            }else return this.bet -= 10;
        },
        betPlusFifty () {
            if(this.bet >= this.money || this.bet + 50 >= this.money){
                this.bet = this.money;
                return this.money;
            }else return this.bet += 50;
        },
        betMinusFifty () {
            if(this.bet <= 0 || this.bet - 50 <= 0) {
                this.bet = 1;
            }else return this.bet -= 50;
        },
        betMax () {
            this.bet = this.money;
        },
    },
    template:   
            `<div>
                <table>
                    <tr>
                        <th class="moneyAndBet">Your Money</th>
                        <th class="moneyAndBet">{{ money }}</th>
                    </tr>
                    <tr>
                        <th class="moneyAndBet">Your Bet</th>
                        <th class="moneyAndBet">{{ bet }}</th>
                    </tr>
                    <tr>
                        <th><button class="betButtons" v-if="round === 1" @click="betMinusOne()">- 1</button></th>
                        <th v-if="round === 1 && money <= 400"><button class="betButtons" @click="betPlusOne()">+ 1</button></th>
                        <th v-if="money > 400 && round === 1"><button class="betButtons" @click="betMax()">MAX</button></th>
                    </tr>
                    <tr>
                        <th><button class="betButtons" v-if="round === 1" @click="betMinusTen()">- 10</button></th>
                        <th><button class="betButtons" v-if="round === 1" @click="betPlusTen()">+ 10</button></th>
                    </tr>
                    <tr>
                        <th><button class="betButtons" v-if="round === 1" @click="betMinusFifty()">- 50</button></th>
                        <th><button class="betButtons" v-if="round === 1" @click="betPlusFifty()">+ 50</button></th>
                    </tr>
                </table>
            </div>`
});