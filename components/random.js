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
        //first card on hand
        if (data.one === 1) {
            document.getElementById('first').src = 'cards/1.jpg';
        } else if (data.one === 2) {
            document.getElementById('first').src = 'cards/2.jpg';
        } else if (data.one === 3) {
            document.getElementById('first').src = 'cards/3.jpg';
        } else if (data.one === 4) {
            document.getElementById('first').src = 'cards/4.jpg';
        } else if (data.one === 5) {
            document.getElementById('first').src = 'cards/5.jpg';
        } else if (data.one === 6) {
            document.getElementById('first').src = 'cards/6.jpg';
        } else if (data.one === 7) {
            document.getElementById('first').src = 'cards/7.jpg';
        } else if (data.one === 8) {
            document.getElementById('first').src = 'cards/8.jpg';
        } else if (data.one === 9) {
            document.getElementById('first').src = 'cards/9.jpg';
        } else if (data.one === 10) {
            document.getElementById('first').src = 'cards/10.jpg';
        } else if (data.one === 11) {
            document.getElementById('first').src = 'cards/11.jpg';
        } else if (data.one === 12) {
            document.getElementById('first').src = 'cards/12.jpg';
        } else if (data.one === 13) {
            document.getElementById('first').src = 'cards/13.jpg';
        } else if (data.one === 14) {
            document.getElementById('first').src = 'cards/14.jpg';
        } else if (data.one === 15) {
            document.getElementById('first').src = 'cards/15.jpg';
        } else if (data.one === 16) {
            document.getElementById('first').src = 'cards/16.jpg';
        } else if (data.one === 17) {
            document.getElementById('first').src = 'cards/17.jpg';
        } else if (data.one === 18) {
            document.getElementById('first').src = 'cards/18.jpg';
        } else if (data.one === 19) {
            document.getElementById('first').src = 'cards/19.jpg';
        } else if (data.one === 20) {
            document.getElementById('first').src = 'cards/20.jpg';
        } else if (data.one === 21) {
            document.getElementById('first').src = 'cards/21.jpg';
        } else if (data.one === 22) {
            document.getElementById('first').src = 'cards/22.jpg';
        } else if (data.one === 23) {
            document.getElementById('first').src = 'cards/23.jpg';
        } else if (data.one === 24) {
            document.getElementById('first').src = 'cards/24.jpg';
        } else if (data.one === 25) {
            document.getElementById('first').src = 'cards/25.jpg';
        } else if (data.one === 26) {
            document.getElementById('first').src = 'cards/26.jpg';
        } else if (data.one === 27) {
            document.getElementById('first').src = 'cards/27.jpg';
        } else if (data.one === 28) {
            document.getElementById('first').src = 'cards/28.jpg';
        } else if (data.one === 29) {
            document.getElementById('first').src = 'cards/29.jpg';
        } else if (data.one === 30) {
            document.getElementById('first').src = 'cards/30.jpg';
        } else if (data.one === 31) {
            document.getElementById('first').src = 'cards/31.jpg';
        } else if (data.one === 32) {
            document.getElementById('first').src = 'cards/32.jpg';
        } else if (data.one === 33) {
            document.getElementById('first').src = 'cards/33.jpg';
        } else if (data.one === 34) {
            document.getElementById('first').src = 'cards/34.jpg';
        } else if (data.one === 35) {
            document.getElementById('first').src = 'cards/35.jpg';
        } else if (data.one === 36) {
            document.getElementById('first').src = 'cards/36.jpg';
        } else if (data.one === 37) {
            document.getElementById('first').src = 'cards/37.jpg';
        } else if (data.one === 38) {
            document.getElementById('first').src = 'cards/38.jpg';
        } else if (data.one === 39) {
            document.getElementById('first').src = 'cards/39.jpg';
        } else if (data.one === 40) {
            document.getElementById('first').src = 'cards/40.jpg';
        } else if (data.one === 41) {
            document.getElementById('first').src = 'cards/41.jpg';
        } else if (data.one === 42) {
            document.getElementById('first').src = 'cards/42.jpg';
        } else if (data.one === 43) {
            document.getElementById('first').src = 'cards/43.jpg';
        } else if (data.one === 44) {
            document.getElementById('first').src = 'cards/44.jpg';
        } else if (data.one === 45) {
            document.getElementById('first').src = 'cards/45.jpg';
        } else if (data.one === 46) {
            document.getElementById('first').src = 'cards/46.jpg';
        } else if (data.one === 47) {
            document.getElementById('first').src = 'cards/47.jpg';
        } else if (data.one === 48) {
            document.getElementById('first').src = 'cards/48.jpg';
        } else if (data.one === 49) {
            document.getElementById('first').src = 'cards/49.jpg';
        } else if (data.one === 50) {
            document.getElementById('first').src = 'cards/50.jpg';
        } else if (data.one === 51) {
            document.getElementById('first').src = 'cards/51.jpg';
        } else if (data.one === 52) {
            document.getElementById('first').src = 'cards/52.jpg';
        }
        //second card on hand
        if (data.two === 1) {
            document.getElementById('second').src = 'cards/1.jpg';
        } else if (data.two === 2) {
            document.getElementById('second').src = 'cards/2.jpg';
        } else if (data.two === 3) {
            document.getElementById('second').src = 'cards/3.jpg';
        } else if (data.two === 4) {
            document.getElementById('second').src = 'cards/4.jpg';
        } else if (data.two === 5) {
            document.getElementById('second').src = 'cards/5.jpg';
        } else if (data.two === 6) {
            document.getElementById('second').src = 'cards/6.jpg';
        } else if (data.two === 7) {
            document.getElementById('second').src = 'cards/7.jpg';
        } else if (data.two === 8) {
            document.getElementById('second').src = 'cards/8.jpg';
        } else if (data.two === 9) {
            document.getElementById('second').src = 'cards/9.jpg';
        } else if (data.two === 10) {
            document.getElementById('second').src = 'cards/10.jpg';
        } else if (data.two === 11) {
            document.getElementById('second').src = 'cards/11.jpg';
        } else if (data.two === 12) {
            document.getElementById('second').src = 'cards/12.jpg';
        } else if (data.two === 13) {
            document.getElementById('second').src = 'cards/13.jpg';
        } else if (data.two === 14) {
            document.getElementById('second').src = 'cards/14.jpg';
        } else if (data.two === 15) {
            document.getElementById('second').src = 'cards/15.jpg';
        } else if (data.two === 16) {
            document.getElementById('second').src = 'cards/16.jpg';
        } else if (data.two === 17) {
            document.getElementById('second').src = 'cards/17.jpg';
        } else if (data.two === 18) {
            document.getElementById('second').src = 'cards/18.jpg';
        } else if (data.two === 19) {
            document.getElementById('second').src = 'cards/19.jpg';
        } else if (data.two === 20) {
            document.getElementById('second').src = 'cards/20.jpg';
        } else if (data.two === 21) {
            document.getElementById('second').src = 'cards/21.jpg';
        } else if (data.two === 22) {
            document.getElementById('second').src = 'cards/22.jpg';
        } else if (data.two === 23) {
            document.getElementById('second').src = 'cards/23.jpg';
        } else if (data.two === 24) {
            document.getElementById('second').src = 'cards/24.jpg';
        } else if (data.two === 25) {
            document.getElementById('second').src = 'cards/25.jpg';
        } else if (data.two === 26) {
            document.getElementById('second').src = 'cards/26.jpg';
        } else if (data.two === 27) {
            document.getElementById('second').src = 'cards/27.jpg';
        } else if (data.two === 28) {
            document.getElementById('second').src = 'cards/28.jpg';
        } else if (data.two === 29) {
            document.getElementById('second').src = 'cards/29.jpg';
        } else if (data.two === 30) {
            document.getElementById('second').src = 'cards/30.jpg';
        } else if (data.two === 31) {
            document.getElementById('second').src = 'cards/31.jpg';
        } else if (data.two === 32) {
            document.getElementById('second').src = 'cards/32.jpg';
        } else if (data.two === 33) {
            document.getElementById('second').src = 'cards/33.jpg';
        } else if (data.two === 34) {
            document.getElementById('second').src = 'cards/34.jpg';
        } else if (data.two === 35) {
            document.getElementById('second').src = 'cards/35.jpg';
        } else if (data.two === 36) {
            document.getElementById('second').src = 'cards/36.jpg';
        } else if (data.two === 37) {
            document.getElementById('second').src = 'cards/37.jpg';
        } else if (data.two === 38) {
            document.getElementById('second').src = 'cards/38.jpg';
        } else if (data.two === 39) {
            document.getElementById('second').src = 'cards/39.jpg';
        } else if (data.two === 40) {
            document.getElementById('second').src = 'cards/40.jpg';
        } else if (data.two === 41) {
            document.getElementById('second').src = 'cards/41.jpg';
        } else if (data.two === 42) {
            document.getElementById('second').src = 'cards/42.jpg';
        } else if (data.two === 43) {
            document.getElementById('second').src = 'cards/43.jpg';
        } else if (data.two === 44) {
            document.getElementById('second').src = 'cards/44.jpg';
        } else if (data.two === 45) {
            document.getElementById('second').src = 'cards/45.jpg';
        } else if (data.two === 46) {
            document.getElementById('second').src = 'cards/46.jpg';
        } else if (data.two === 47) {
            document.getElementById('second').src = 'cards/47.jpg';
        } else if (data.two === 48) {
            document.getElementById('second').src = 'cards/48.jpg';
        } else if (data.two === 49) {
            document.getElementById('second').src = 'cards/49.jpg';
        } else if (data.two === 50) {
            document.getElementById('second').src = 'cards/50.jpg';
        } else if (data.two === 51) {
            document.getElementById('second').src = 'cards/51.jpg';
        } else if (data.two === 52) {
            document.getElementById('second').src = 'cards/52.jpg';
        };
        //third card on hand
        if (data.three === 1) {
            document.getElementById('third').src = 'cards/1.jpg';
        } else if (data.three === 2) {
            document.getElementById('third').src = 'cards/2.jpg';
        } else if (data.three === 3) {
            document.getElementById('third').src = 'cards/3.jpg';
        } else if (data.three === 4) {
            document.getElementById('third').src = 'cards/4.jpg';
        } else if (data.three === 5) {
            document.getElementById('third').src = 'cards/5.jpg';
        } else if (data.three === 6) {
            document.getElementById('third').src = 'cards/6.jpg';
        } else if (data.three === 7) {
            document.getElementById('third').src = 'cards/7.jpg';
        } else if (data.three === 8) {
            document.getElementById('third').src = 'cards/8.jpg';
        } else if (data.three === 9) {
            document.getElementById('third').src = 'cards/9.jpg';
        } else if (data.three === 10) {
            document.getElementById('third').src = 'cards/10.jpg';
        } else if (data.three === 11) {
            document.getElementById('third').src = 'cards/11.jpg';
        } else if (data.three === 12) {
            document.getElementById('third').src = 'cards/12.jpg';
        } else if (data.three === 13) {
            document.getElementById('third').src = 'cards/13.jpg';
        } else if (data.three === 14) {
            document.getElementById('third').src = 'cards/14.jpg';
        } else if (data.three === 15) {
            document.getElementById('third').src = 'cards/15.jpg';
        } else if (data.three === 16) {
            document.getElementById('third').src = 'cards/16.jpg';
        } else if (data.three === 17) {
            document.getElementById('third').src = 'cards/17.jpg';
        } else if (data.three === 18) {
            document.getElementById('third').src = 'cards/18.jpg';
        } else if (data.three === 19) {
            document.getElementById('third').src = 'cards/19.jpg';
        } else if (data.three === 20) {
            document.getElementById('third').src = 'cards/20.jpg';
        } else if (data.three === 21) {
            document.getElementById('third').src = 'cards/21.jpg';
        } else if (data.three === 22) {
            document.getElementById('third').src = 'cards/22.jpg';
        } else if (data.three === 23) {
            document.getElementById('third').src = 'cards/23.jpg';
        } else if (data.three === 24) {
            document.getElementById('third').src = 'cards/24.jpg';
        } else if (data.three === 25) {
            document.getElementById('third').src = 'cards/25.jpg';
        } else if (data.three === 26) {
            document.getElementById('third').src = 'cards/26.jpg';
        } else if (data.three === 27) {
            document.getElementById('third').src = 'cards/27.jpg';
        } else if (data.three === 28) {
            document.getElementById('third').src = 'cards/28.jpg';
        } else if (data.three === 29) {
            document.getElementById('third').src = 'cards/29.jpg';
        } else if (data.three === 30) {
            document.getElementById('third').src = 'cards/30.jpg';
        } else if (data.three === 31) {
            document.getElementById('third').src = 'cards/31.jpg';
        } else if (data.three === 32) {
            document.getElementById('third').src = 'cards/32.jpg';
        } else if (data.three === 33) {
            document.getElementById('third').src = 'cards/33.jpg';
        } else if (data.three === 34) {
            document.getElementById('third').src = 'cards/34.jpg';
        } else if (data.three === 35) {
            document.getElementById('third').src = 'cards/35.jpg';
        } else if (data.three === 36) {
            document.getElementById('third').src = 'cards/36.jpg';
        } else if (data.three === 37) {
            document.getElementById('third').src = 'cards/37.jpg';
        } else if (data.three === 38) {
            document.getElementById('third').src = 'cards/38.jpg';
        } else if (data.three === 39) {
            document.getElementById('third').src = 'cards/39.jpg';
        } else if (data.three === 40) {
            document.getElementById('third').src = 'cards/40.jpg';
        } else if (data.three === 41) {
            document.getElementById('third').src = 'cards/41.jpg';
        } else if (data.three === 42) {
            document.getElementById('third').src = 'cards/42.jpg';
        } else if (data.three === 43) {
            document.getElementById('third').src = 'cards/43.jpg';
        } else if (data.three === 44) {
            document.getElementById('third').src = 'cards/44.jpg';
        } else if (data.three === 45) {
            document.getElementById('third').src = 'cards/45.jpg';
        } else if (data.three === 46) {
            document.getElementById('third').src = 'cards/46.jpg';
        } else if (data.three === 47) {
            document.getElementById('third').src = 'cards/47.jpg';
        } else if (data.three === 48) {
            document.getElementById('third').src = 'cards/48.jpg';
        } else if (data.three === 49) {
            document.getElementById('third').src = 'cards/49.jpg';
        } else if (data.three === 50) {
            document.getElementById('third').src = 'cards/50.jpg';
        } else if (data.three === 51) {
            document.getElementById('third').src = 'cards/51.jpg';
        } else if (data.three === 52) {
            document.getElementById('third').src = 'cards/52.jpg';
        };
        //fourthh card on hand
        if (data.four === 1) {
            document.getElementById('fourth').src = 'cards/1.jpg';
        } else if (data.four === 2) {
            document.getElementById('fourth').src = 'cards/2.jpg';
        } else if (data.four === 3) {
            document.getElementById('fourth').src = 'cards/3.jpg';
        } else if (data.four === 4) {
            document.getElementById('fourth').src = 'cards/4.jpg';
        } else if (data.four === 5) {
            document.getElementById('fourth').src = 'cards/5.jpg';
        } else if (data.four === 6) {
            document.getElementById('fourth').src = 'cards/6.jpg';
        } else if (data.four === 7) {
            document.getElementById('fourth').src = 'cards/7.jpg';
        } else if (data.four === 8) {
            document.getElementById('fourth').src = 'cards/8.jpg';
        } else if (data.four === 9) {
            document.getElementById('fourth').src = 'cards/9.jpg';
        } else if (data.four === 10) {
            document.getElementById('fourth').src = 'cards/10.jpg';
        } else if (data.four === 11) {
            document.getElementById('fourth').src = 'cards/11.jpg';
        } else if (data.four === 12) {
            document.getElementById('fourth').src = 'cards/12.jpg';
        } else if (data.four === 13) {
            document.getElementById('fourth').src = 'cards/13.jpg';
        } else if (data.four === 14) {
            document.getElementById('fourth').src = 'cards/14.jpg';
        } else if (data.four === 15) {
            document.getElementById('fourth').src = 'cards/15.jpg';
        } else if (data.four === 16) {
            document.getElementById('fourth').src = 'cards/16.jpg';
        } else if (data.four === 17) {
            document.getElementById('fourth').src = 'cards/17.jpg';
        } else if (data.four === 18) {
            document.getElementById('fourth').src = 'cards/18.jpg';
        } else if (data.four === 19) {
            document.getElementById('fourth').src = 'cards/19.jpg';
        } else if (data.four === 20) {
            document.getElementById('fourth').src = 'cards/20.jpg';
        } else if (data.four === 21) {
            document.getElementById('fourth').src = 'cards/21.jpg';
        } else if (data.four === 22) {
            document.getElementById('fourth').src = 'cards/22.jpg';
        } else if (data.four === 23) {
            document.getElementById('fourth').src = 'cards/23.jpg';
        } else if (data.four === 24) {
            document.getElementById('fourth').src = 'cards/24.jpg';
        } else if (data.four === 25) {
            document.getElementById('fourth').src = 'cards/25.jpg';
        } else if (data.four === 26) {
            document.getElementById('fourth').src = 'cards/26.jpg';
        } else if (data.four === 27) {
            document.getElementById('fourth').src = 'cards/27.jpg';
        } else if (data.four === 28) {
            document.getElementById('fourth').src = 'cards/28.jpg';
        } else if (data.four === 29) {
            document.getElementById('fourth').src = 'cards/29.jpg';
        } else if (data.four === 30) {
            document.getElementById('fourth').src = 'cards/30.jpg';
        } else if (data.four === 31) {
            document.getElementById('fourth').src = 'cards/31.jpg';
        } else if (data.four === 32) {
            document.getElementById('fourth').src = 'cards/32.jpg';
        } else if (data.four === 33) {
            document.getElementById('fourth').src = 'cards/33.jpg';
        } else if (data.four === 34) {
            document.getElementById('fourth').src = 'cards/34.jpg';
        } else if (data.four === 35) {
            document.getElementById('fourth').src = 'cards/35.jpg';
        } else if (data.four === 36) {
            document.getElementById('fourth').src = 'cards/36.jpg';
        } else if (data.four === 37) {
            document.getElementById('fourth').src = 'cards/37.jpg';
        } else if (data.four === 38) {
            document.getElementById('fourth').src = 'cards/38.jpg';
        } else if (data.four === 39) {
            document.getElementById('fourth').src = 'cards/39.jpg';
        } else if (data.four === 40) {
            document.getElementById('fourth').src = 'cards/40.jpg';
        } else if (data.four === 41) {
            document.getElementById('fourth').src = 'cards/41.jpg';
        } else if (data.four === 42) {
            document.getElementById('fourth').src = 'cards/42.jpg';
        } else if (data.four === 43) {
            document.getElementById('fourth').src = 'cards/43.jpg';
        } else if (data.four === 44) {
            document.getElementById('fourth').src = 'cards/44.jpg';
        } else if (data.four === 45) {
            document.getElementById('fourth').src = 'cards/45.jpg';
        } else if (data.four === 46) {
            document.getElementById('fourth').src = 'cards/46.jpg';
        } else if (data.four === 47) {
            document.getElementById('fourth').src = 'cards/47.jpg';
        } else if (data.four === 48) {
            document.getElementById('fourth').src = 'cards/48.jpg';
        } else if (data.four === 49) {
            document.getElementById('fourth').src = 'cards/49.jpg';
        } else if (data.four === 50) {
            document.getElementById('fourth').src = 'cards/50.jpg';
        } else if (data.four === 51) {
            document.getElementById('fourth').src = 'cards/51.jpg';
        } else if (data.four === 52) {
            document.getElementById('fourth').src = 'cards/52.jpg';
        };
        //fifth card on hand
        if (data.five === 1) {
            document.getElementById('fifth').src = 'cards/1.jpg';
        } else if (data.five === 2) {
            document.getElementById('fifth').src = 'cards/2.jpg';
        } else if (data.five === 3) {
            document.getElementById('fifth').src = 'cards/3.jpg';
        } else if (data.five === 4) {
            document.getElementById('fifth').src = 'cards/4.jpg';
        } else if (data.five === 5) {
            document.getElementById('fifth').src = 'cards/5.jpg';
        } else if (data.five === 6) {
            document.getElementById('fifth').src = 'cards/6.jpg';
        } else if (data.five === 7) {
            document.getElementById('fifth').src = 'cards/7.jpg';
        } else if (data.five === 8) {
            document.getElementById('fifth').src = 'cards/8.jpg';
        } else if (data.five === 9) {
            document.getElementById('fifth').src = 'cards/9.jpg';
        } else if (data.five === 10) {
            document.getElementById('fifth').src = 'cards/10.jpg';
        } else if (data.five === 11) {
            document.getElementById('fifth').src = 'cards/11.jpg';
        } else if (data.five === 12) {
            document.getElementById('fifth').src = 'cards/12.jpg';
        } else if (data.five === 13) {
            document.getElementById('fifth').src = 'cards/13.jpg';
        } else if (data.five === 14) {
            document.getElementById('fifth').src = 'cards/14.jpg';
        } else if (data.five === 15) {
            document.getElementById('fifth').src = 'cards/15.jpg';
        } else if (data.five === 16) {
            document.getElementById('fifth').src = 'cards/16.jpg';
        } else if (data.five === 17) {
            document.getElementById('fifth').src = 'cards/17.jpg';
        } else if (data.five === 18) {
            document.getElementById('fifth').src = 'cards/18.jpg';
        } else if (data.five === 19) {
            document.getElementById('fifth').src = 'cards/19.jpg';
        } else if (data.five === 20) {
            document.getElementById('fifth').src = 'cards/20.jpg';
        } else if (data.five === 21) {
            document.getElementById('fifth').src = 'cards/21.jpg';
        } else if (data.five === 22) {
            document.getElementById('fifth').src = 'cards/22.jpg';
        } else if (data.five === 23) {
            document.getElementById('fifth').src = 'cards/23.jpg';
        } else if (data.five === 24) {
            document.getElementById('fifth').src = 'cards/24.jpg';
        } else if (data.five === 25) {
            document.getElementById('fifth').src = 'cards/25.jpg';
        } else if (data.five === 26) {
            document.getElementById('fifth').src = 'cards/26.jpg';
        } else if (data.five === 27) {
            document.getElementById('fifth').src = 'cards/27.jpg';
        } else if (data.five === 28) {
            document.getElementById('fifth').src = 'cards/28.jpg';
        } else if (data.five === 29) {
            document.getElementById('fifth').src = 'cards/29.jpg';
        } else if (data.five === 30) {
            document.getElementById('fifth').src = 'cards/30.jpg';
        } else if (data.five === 31) {
            document.getElementById('fifth').src = 'cards/31.jpg';
        } else if (data.five === 32) {
            document.getElementById('fifth').src = 'cards/32.jpg';
        } else if (data.five === 33) {
            document.getElementById('fifth').src = 'cards/33.jpg';
        } else if (data.five === 34) {
            document.getElementById('fifth').src = 'cards/34.jpg';
        } else if (data.five === 35) {
            document.getElementById('fifth').src = 'cards/35.jpg';
        } else if (data.five === 36) {
            document.getElementById('fifth').src = 'cards/36.jpg';
        } else if (data.five === 37) {
            document.getElementById('fifth').src = 'cards/37.jpg';
        } else if (data.five === 38) {
            document.getElementById('fifth').src = 'cards/38.jpg';
        } else if (data.five === 39) {
            document.getElementById('fifth').src = 'cards/39.jpg';
        } else if (data.five === 40) {
            document.getElementById('fifth').src = 'cards/40.jpg';
        } else if (data.five === 41) {
            document.getElementById('fifth').src = 'cards/41.jpg';
        } else if (data.five === 42) {
            document.getElementById('fifth').src = 'cards/42.jpg';
        } else if (data.five === 43) {
            document.getElementById('fifth').src = 'cards/43.jpg';
        } else if (data.five === 44) {
            document.getElementById('fifth').src = 'cards/44.jpg';
        } else if (data.five === 45) {
            document.getElementById('fifth').src = 'cards/45.jpg';
        } else if (data.five === 46) {
            document.getElementById('fifth').src = 'cards/46.jpg';
        } else if (data.five === 47) {
            document.getElementById('fifth').src = 'cards/47.jpg';
        } else if (data.five === 48) {
            document.getElementById('fifth').src = 'cards/48.jpg';
        } else if (data.five === 49) {
            document.getElementById('fifth').src = 'cards/49.jpg';
        } else if (data.five === 50) {
            document.getElementById('fifth').src = 'cards/50.jpg';
        } else if (data.five === 51) {
            document.getElementById('fifth').src = 'cards/51.jpg';
        } else if (data.five === 52) {
            document.getElementById('fifth').src = 'cards/52.jpg';
        };
    },
}