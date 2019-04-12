let one;
let two;
let three;
let four;
let five;

let firstLow = 'cards/1.png';
let secondLow = 'cards/2.png';
let thirdLow = 'cards/3.png';
let fourthLow = 'cards/4.png';
let fifthLow = 'cards/5.png';
let sixthLow = 'cards/6.png';
let seventhLow = 'cards/7.png';
let eightLow = 'cards/8.png';
let ninethLow = 'cards/9.png';
let tenthLow = 'cards/10.png';
let eleventhLow = 'cards/11.png';
let twelvethLow = 'cards/12.png';

let firstHigh = 'cards/13.png';
let secondHigh = 'cards/14.png';
let thirdHigh = 'cards/15.png';
let fourthHigh = 'cards/16.png';
let fifthHigh = 'cards/17.png';
let sixthHigh = 'cards/18.png';
let seventhHigh = 'cards/19.png';
let eightHigh = 'cards/20.png';
let ninethHigh = 'cards/21.png';
let tenthHigh = 'cards/22.png';
let eleventhHigh = 'cards/23.png';
let twelvethHigh = 'cards/24.png';

let lowCards = [firstLow, secondLow, thirdLow, fourthLow, fifthLow, sixthLow, seventhLow, eightLow, ninethLow, tenthLow, eleventhLow, twelvethLow];
let fristLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let secondLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let thirdLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let fourthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let fifthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let sixthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let seventhLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let eightLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let ninethLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let tenthLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1)
let eleventhLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1) 
let twelvethLowCard = lowCards.splice((Math.floor(Math.random() * lowCards.length)), 1) 

let highCards = [firstHigh, secondHigh, thirdHigh, fourthHigh, fifthHigh, sixthHigh, seventhHigh, eightHigh, ninethHigh, tenthHigh, eleventhHigh, twelvethHigh];
let fristHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let secondHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let thirdHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let fourthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let fifthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let sixthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let seventhHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let eightHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let ninethHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let tenthHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1)
let eleventhHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1) 
let twelvethHighCard = highCards.splice((Math.floor(Math.random() * highCards.length)), 1) 

const app = new Vue({
    el: '#app',
    data: {
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
        riskMessage: ''
    },
    computed: {
        bigStraightFlushValue: function () {
            return this.bet * 100
        },
        smalStraightFlushValue: function () {
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
                return this.moneyWon = this.smalStraightFlushValue
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
        betPlusOne: function () { 
            if(this.bet >= this.money || this.bet + 1 >= this.money){
                this.bet = this.money
                return this.money
            }else return this.bet ++
        },
        betMinusOne: function () {
            if(this.bet <= 0 || this.bet - 1 <= 0) {
                this.bet = 1;
            }else return this.bet--
        },
        betPlusTen: function () {
            if(this.bet >= this.money || this.bet + 10 >= this.money){
                this.bet = this.money
                return this.money
            }else return this.bet += 10
        },
        betMinusTen: function () {
            if(this.bet <= 0 || this.bet - 10 <= 0) {
                this.bet = 1;
            }else return this.bet -= 10
        },
        betPlusFifty: function () {
            if(this.bet >= this.money || this.bet + 50 >= this.money){
                this.bet = this.money
                return this.money
            }else return this.bet += 50
        },
        betMinusFifty: function () {
            if(this.bet <= 0 || this.bet - 50 <= 0) {
                this.bet = 1;
            }else return this.bet -= 50
        },
        random: function () {
            one = Math.floor(Math.random() * 24 + 1);
            two = Math.floor(Math.random() * 24 + 1);
            three = Math.floor(Math.random() * 24 + 1);
            four = Math.floor(Math.random() * 24 + 1);
            five = Math.floor(Math.random() * 24 + 1);

            if (one === two || one === three || one === four || one === five || two === three ||
                two === four || two === five || three === four || three === five || four === five) {
                this.random()
            }
        },
        check: function () {
            //first card on hand
            if (one === 1) {
                document.getElementById('first').src = 'cards/1.png';
            } else if (one === 2) {
                document.getElementById('first').src = 'cards/2.png';
            } else if (one === 3) {
                document.getElementById('first').src = 'cards/3.png';
            } else if (one === 4) {
                document.getElementById('first').src = 'cards/4.png';
            } else if (one === 5) {
                document.getElementById('first').src = 'cards/5.png';
            } else if (one === 6) {
                document.getElementById('first').src = 'cards/6.png';
            } else if (one === 7) {
                document.getElementById('first').src = 'cards/7.png';
            } else if (one === 8) {
                document.getElementById('first').src = 'cards/8.png';
            } else if (one === 9) {
                document.getElementById('first').src = 'cards/9.png';
            } else if (one === 10) {
                document.getElementById('first').src = 'cards/10.png';
            } else if (one === 11) {
                document.getElementById('first').src = 'cards/11.png';
            } else if (one === 12) {
                document.getElementById('first').src = 'cards/12.png';
            } else if (one === 13) {
                document.getElementById('first').src = 'cards/13.png';
            } else if (one === 14) {
                document.getElementById('first').src = 'cards/14.png';
            } else if (one === 15) {
                document.getElementById('first').src = 'cards/15.png';
            } else if (one === 16) {
                document.getElementById('first').src = 'cards/16.png';
            } else if (one === 17) {
                document.getElementById('first').src = 'cards/17.png';
            } else if (one === 18) {
                document.getElementById('first').src = 'cards/18.png';
            } else if (one === 19) {
                document.getElementById('first').src = 'cards/19.png';
            } else if (one === 20) {
                document.getElementById('first').src = 'cards/20.png';
            } else if (one === 21) {
                document.getElementById('first').src = 'cards/21.png';
            } else if (one === 22) {
                document.getElementById('first').src = 'cards/22.png';
            } else if (one === 23) {
                document.getElementById('first').src = 'cards/23.png';
            } else if (one === 24) {
                document.getElementById('first').src = 'cards/24.png';
            };
            //second card on hand
            if (two === 1) {
                document.getElementById('second').src = 'cards/1.png';
            } else if (two === 2) {
                document.getElementById('second').src = 'cards/2.png';
            } else if (two === 3) {
                document.getElementById('second').src = 'cards/3.png';
            } else if (two === 4) {
                document.getElementById('second').src = 'cards/4.png';
            } else if (two === 5) {
                document.getElementById('second').src = 'cards/5.png';
            } else if (two === 6) {
                document.getElementById('second').src = 'cards/6.png';
            } else if (two === 7) {
                document.getElementById('second').src = 'cards/7.png';
            } else if (two === 8) {
                document.getElementById('second').src = 'cards/8.png';
            } else if (two === 9) {
                document.getElementById('second').src = 'cards/9.png';
            } else if (two === 10) {
                document.getElementById('second').src = 'cards/10.png';
            } else if (two === 11) {
                document.getElementById('second').src = 'cards/11.png';
            } else if (two === 12) {
                document.getElementById('second').src = 'cards/12.png';
            } else if (two === 13) {
                document.getElementById('second').src = 'cards/13.png';
            } else if (two === 14) {
                document.getElementById('second').src = 'cards/14.png';
            } else if (two === 15) {
                document.getElementById('second').src = 'cards/15.png';
            } else if (two === 16) {
                document.getElementById('second').src = 'cards/16.png';
            } else if (two === 17) {
                document.getElementById('second').src = 'cards/17.png';
            } else if (two === 18) {
                document.getElementById('second').src = 'cards/18.png';
            } else if (two === 19) {
                document.getElementById('second').src = 'cards/19.png';
            } else if (two === 20) {
                document.getElementById('second').src = 'cards/20.png';
            } else if (two === 21) {
                document.getElementById('second').src = 'cards/21.png';
            } else if (two === 22) {
                document.getElementById('second').src = 'cards/22.png';
            } else if (two === 23) {
                document.getElementById('second').src = 'cards/23.png';
            } else if (two === 24) {
                document.getElementById('second').src = 'cards/24.png';
            };
            //third card on hand
            if (three === 1) {
                document.getElementById('third').src = 'cards/1.png';
            } else if (three === 2) {
                document.getElementById('third').src = 'cards/2.png';
            } else if (three === 3) {
                document.getElementById('third').src = 'cards/3.png';
            } else if (three === 4) {
                document.getElementById('third').src = 'cards/4.png';
            } else if (three === 5) {
                document.getElementById('third').src = 'cards/5.png';
            } else if (three === 6) {
                document.getElementById('third').src = 'cards/6.png';
            } else if (three === 7) {
                document.getElementById('third').src = 'cards/7.png';
            } else if (three === 8) {
                document.getElementById('third').src = 'cards/8.png';
            } else if (three === 9) {
                document.getElementById('third').src = 'cards/9.png';
            } else if (three === 10) {
                document.getElementById('third').src = 'cards/10.png';
            } else if (three === 11) {
                document.getElementById('third').src = 'cards/11.png';
            } else if (three === 12) {
                document.getElementById('third').src = 'cards/12.png';
            } else if (three === 13) {
                document.getElementById('third').src = 'cards/13.png';
            } else if (three === 14) {
                document.getElementById('third').src = 'cards/14.png';
            } else if (three === 15) {
                document.getElementById('third').src = 'cards/15.png';
            } else if (three === 16) {
                document.getElementById('third').src = 'cards/16.png';
            } else if (three === 17) {
                document.getElementById('third').src = 'cards/17.png';
            } else if (three === 18) {
                document.getElementById('third').src = 'cards/18.png';
            } else if (three === 19) {
                document.getElementById('third').src = 'cards/19.png';
            } else if (three === 20) {
                document.getElementById('third').src = 'cards/20.png';
            } else if (three === 21) {
                document.getElementById('third').src = 'cards/21.png';
            } else if (three === 22) {
                document.getElementById('third').src = 'cards/22.png';
            } else if (three === 23) {
                document.getElementById('third').src = 'cards/23.png';
            } else if (three === 24) {
                document.getElementById('third').src = 'cards/24.png';
            };
            //fourth card on hand
            if (four === 1) {
                document.getElementById('fourth').src = 'cards/1.png';
            } else if (four === 2) {
                document.getElementById('fourth').src = 'cards/2.png';
            } else if (four === 3) {
                document.getElementById('fourth').src = 'cards/3.png';
            } else if (four === 4) {
                document.getElementById('fourth').src = 'cards/4.png';
            } else if (four === 5) {
                document.getElementById('fourth').src = 'cards/5.png';
            } else if (four === 6) {
                document.getElementById('fourth').src = 'cards/6.png';
            } else if (four === 7) {
                document.getElementById('fourth').src = 'cards/7.png';
            } else if (four === 8) {
                document.getElementById('fourth').src = 'cards/8.png';
            } else if (four === 9) {
                document.getElementById('fourth').src = 'cards/9.png';
            } else if (four === 10) {
                document.getElementById('fourth').src = 'cards/10.png';
            } else if (four === 11) {
                document.getElementById('fourth').src = 'cards/11.png';
            } else if (four === 12) {
                document.getElementById('fourth').src = 'cards/12.png';
            } else if (four === 13) {
                document.getElementById('fourth').src = 'cards/13.png';
            } else if (four === 14) {
                document.getElementById('fourth').src = 'cards/14.png';
            } else if (four === 15) {
                document.getElementById('fourth').src = 'cards/15.png';
            } else if (four === 16) {
                document.getElementById('fourth').src = 'cards/16.png';
            } else if (four === 17) {
                document.getElementById('fourth').src = 'cards/17.png';
            } else if (four === 18) {
                document.getElementById('fourth').src = 'cards/18.png';
            } else if (four === 19) {
                document.getElementById('fourth').src = 'cards/19.png';
            } else if (four === 20) {
                document.getElementById('fourth').src = 'cards/20.png';
            } else if (four === 21) {
                document.getElementById('fourth').src = 'cards/21.png';
            } else if (four === 22) {
                document.getElementById('fourth').src = 'cards/22.png';
            } else if (four === 23) {
                document.getElementById('fourth').src = 'cards/23.png';
            } else if (four === 24) {
                document.getElementById('fourth').src = 'cards/24.png';
            };
            //fifth card on hand
            if (five === 1) {
                document.getElementById('fifth').src = 'cards/1.png';
            } else if (five === 2) {
                document.getElementById('fifth').src = 'cards/2.png';
            } else if (five === 3) {
                document.getElementById('fifth').src = 'cards/3.png';
            } else if (five === 4) {
                document.getElementById('fifth').src = 'cards/4.png';
            } else if (five === 5) {
                document.getElementById('fifth').src = 'cards/5.png';
            } else if (five === 6) {
                document.getElementById('fifth').src = 'cards/6.png';
            } else if (five === 7) {
                document.getElementById('fifth').src = 'cards/7.png';
            } else if (five === 8) {
                document.getElementById('fifth').src = 'cards/8.png';
            } else if (five === 9) {
                document.getElementById('fifth').src = 'cards/9.png';
            } else if (five === 10) {
                document.getElementById('fifth').src = 'cards/10.png';
            } else if (five === 11) {
                document.getElementById('fifth').src = 'cards/11.png';
            } else if (five === 12) {
                document.getElementById('fifth').src = 'cards/12.png';
            } else if (five === 13) {
                document.getElementById('fifth').src = 'cards/13.png';
            } else if (five === 14) {
                document.getElementById('fifth').src = 'cards/14.png';
            } else if (five === 15) {
                document.getElementById('fifth').src = 'cards/15.png';
            } else if (five === 16) {
                document.getElementById('fifth').src = 'cards/16.png';
            } else if (five === 17) {
                document.getElementById('fifth').src = 'cards/17.png';
            } else if (five === 18) {
                document.getElementById('fifth').src = 'cards/18.png';
            } else if (five === 19) {
                document.getElementById('fifth').src = 'cards/19.png';
            } else if (five === 20) {
                document.getElementById('fifth').src = 'cards/20.png';
            } else if (five === 21) {
                document.getElementById('fifth').src = 'cards/21.png';
            } else if (five === 22) {
                document.getElementById('fifth').src = 'cards/22.png';
            } else if (five === 23) {
                document.getElementById('fifth').src = 'cards/23.png';
            } else if (five === 24) {
                document.getElementById('fifth').src = 'cards/24.png';
            }
        },
        whatIsOnHand: function () {
            this.straightFlushBig();
        },
        straightFlushBig: function () {
            let straightFlushHearts = [8, 12, 16, 20, 24];
            let straightFlushDiamonds = [7, 11, 15, 19, 23];
            let straightFlushClubs = [6, 10, 14, 18, 22];
            let straightFlushSpades = [5, 9, 13, 17, 21];

            let whatsOnHand = [one, two, three, four, five];

            let allHearts = (y, z) => y.filter((x) => z.includes(x));
            let allDiamonds = (y, z) => y.filter((x) => z.includes(x));
            let allClubs = (y, z) => y.filter((x) => z.includes(x));
            let allSpades = (y, z) => y.filter((x) => z.includes(x));

            let flushOfHeartsOnHand = allHearts(straightFlushHearts, whatsOnHand);
            let flushOfDiamondsOnHand = allDiamonds(straightFlushDiamonds, whatsOnHand);
            let flushOfClubssOnHand = allClubs(straightFlushClubs, whatsOnHand);
            let flushOfSpadesOnHand = allSpades(straightFlushSpades, whatsOnHand);

            if ((flushOfHeartsOnHand.length === 5) || (flushOfDiamondsOnHand.length === 5) ||
                (flushOfClubssOnHand.length === 5) || (flushOfSpadesOnHand.length === 5)) {
                    if(this.round === 3){this.money += this.bigStraightFlushValue}
                    return this.score = 'Big Straight Flush'
            } else this.straightFlushSmall();
        },
        straightFlushSmall: function () {
            let straightFlushHearts = [4, 8, 12, 16, 20];
            let straightFlushDiamonds = [3, 7, 11, 15, 19];
            let straightFlushClubs = [2, 6, 10, 14, 18];
            let straightFlushSpades = [1, 5, 9, 13, 17];

            let whatsOnHand = [one, two, three, four, five];

            let allHearts = (y, z) => y.filter((x) => z.includes(x));
            let allDiamonds = (y, z) => y.filter((x) => z.includes(x));
            let allClubs = (y, z) => y.filter((x) => z.includes(x));
            let allSpades = (y, z) => y.filter((x) => z.includes(x));

            let flushOfHeartsOnHand = allHearts(straightFlushHearts, whatsOnHand);
            let flushOfDiamondsOnHand = allDiamonds(straightFlushDiamonds, whatsOnHand);
            let flushOfClubssOnHand = allClubs(straightFlushClubs, whatsOnHand);
            let flushOfSpadesOnHand = allSpades(straightFlushSpades, whatsOnHand);

            if ((flushOfHeartsOnHand.length === 5) || (flushOfDiamondsOnHand.length === 5) ||
                (flushOfClubssOnHand.length === 5) || (flushOfSpadesOnHand.length === 5)) {
                    if(this.round === 3){this.money += this.smalStraightFlushValue}
                    return this.score = 'Small Straight Flush';
            } else this.flush();
        },
        flush: function () {
            let straightFlushHearts = [4, 8, 12, 16, 24];
            let straightFlushDiamonds = [3, 7, 11, 15, 23];
            let straightFlushClubs = [2, 6, 10, 14, 22];
            let straightFlushSpades = [1, 5, 9, 13, 21];

            let whatsOnHand = [one, two, three, four, five];

            let allHearts = (y, z) => y.filter((x) => z.includes(x));
            let allDiamonds = (y, z) => y.filter((x) => z.includes(x));
            let allClubs = (y, z) => y.filter((x) => z.includes(x));
            let allSpades = (y, z) => y.filter((x) => z.includes(x));

            let flushOfHeartsOnHand = allHearts(straightFlushHearts, whatsOnHand);
            let flushOfDiamondsOnHand = allDiamonds(straightFlushDiamonds, whatsOnHand);
            let flushOfClubssOnHand = allClubs(straightFlushClubs, whatsOnHand);
            let flushOfSpadesOnHand = allSpades(straightFlushSpades, whatsOnHand);

            if ((flushOfHeartsOnHand.length === 5) || (flushOfDiamondsOnHand.length === 5) ||
                (flushOfClubssOnHand.length === 5) || (flushOfSpadesOnHand.length === 5)) {
                    if(this.round === 3){this.money += this.flushValue}
                    return this.score = 'Flush';
            } else this.fourOfAKind();
        },
        fourOfAKind: function () {
            let fourOfAKindAces = [21, 22, 23, 24];
            let fourOfAKindKings = [17, 18, 19, 20];
            let fourOfAKindQueens = [13, 14, 15, 16];
            let fourOfAKindJacks = [9, 10, 11, 12];
            let fourOfAKindTens = [5, 6, 7, 8];
            let fourOfAKindNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let fourOfAKindAcesOnHand = allAces(fourOfAKindAces, whatsOnHand);
            let fourOfAKindKingsOnHand = allKings(fourOfAKindKings, whatsOnHand);
            let fourOfAKindQueensOnHand = allQueens(fourOfAKindQueens, whatsOnHand);
            let fourOfAKindJacksOnHand = allJacks(fourOfAKindJacks, whatsOnHand);
            let fourOfAKindTennsOnHand = allTenns(fourOfAKindTens, whatsOnHand);
            let fourOfAKindNinesOnHand = allNines(fourOfAKindNines, whatsOnHand);

            if ((fourOfAKindAcesOnHand.length === 4) || (fourOfAKindKingsOnHand.length === 4) ||
                (fourOfAKindQueensOnHand.length === 4) || (fourOfAKindJacksOnHand.length === 4) ||
                (fourOfAKindTennsOnHand.length === 4) || (fourOfAKindNinesOnHand.length === 4)) {
                    if(this.round === 3){this.money += this.fourOfTheKindValue}
                    return this.score = 'Four Of The Kind'
            } else return this.fullHouse()
        },
        fullHouse: function () {
            let fourAces = [21, 22, 23, 24];
            let fourKings = [17, 18, 19, 20];
            let fourQueens = [13, 14, 15, 16];
            let fourJacks = [9, 10, 11, 12];
            let fourTens = [5, 6, 7, 8];
            let fourNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let aces = allAces(fourAces, whatsOnHand);
            let kings = allKings(fourKings, whatsOnHand);
            let queens = allQueens(fourQueens, whatsOnHand);
            let jacks = allJacks(fourJacks, whatsOnHand);
            let tenns = allTenns(fourTens, whatsOnHand);
            let nines = allNines(fourNines, whatsOnHand);

            //Aces
            if (((aces.length === 3) && (kings.length === 2)) ||
                ((aces.length === 3) && (queens.length === 2)) ||
                ((aces.length === 3) && (jacks.length === 2)) ||
                ((aces.length === 3) && (tenns.length === 2)) ||
                ((aces.length === 3) && (nines.length === 2)) ||
                //Kings
                ((kings.length === 3) && (aces.length === 2)) ||
                ((kings.length === 3) && (queens.length === 2)) ||
                ((kings.length === 3) && (jacks.length === 2)) ||
                ((kings.length === 3) && (tenns.length === 2)) ||
                ((kings.length === 3) && (nines.length === 2)) ||
                //Queens
                ((queens.length === 3) && (aces.length === 2)) ||
                ((queens.length === 3) && (kings.length === 2)) ||
                ((queens.length === 3) && (jacks.length === 2)) ||
                ((queens.length === 3) && (tenns.length === 2)) ||
                ((queens.length === 3) && (nines.length === 2)) ||
                //Jacks
                ((jacks.length === 3) && (aces.length === 2)) ||
                ((jacks.length === 3) && (kings.length === 2)) ||
                ((jacks.length === 3) && (queens.length === 2)) ||
                ((jacks.length === 3) && (tenns.length === 2)) ||
                ((jacks.length === 3) && (nines.length === 2)) ||
                //Tens
                ((tenns.length === 3) && (aces.length === 2)) ||
                ((tenns.length === 3) && (kings.length === 2)) ||
                ((tenns.length === 3) && (queens.length === 2)) ||
                ((tenns.length === 3) && (jacks.length === 2)) ||
                ((tenns.length === 3) && (nines.length === 2)) ||
                //Nines
                ((nines.length === 3) && (aces.length === 2)) ||
                ((nines.length === 3) && (kings.length === 2)) ||
                ((nines.length === 3) && (queens.length === 2)) ||
                ((nines.length === 3) && (jacks.length === 2)) ||
                ((nines.length === 3) && (tenns.length === 2))) {
                    if(this.round === 3){this.money += this.fullHouseValue}
                    return this.score = 'Full House'
            } else this.straight();
        },
        straight: function () {
            let fourOfAces = [21, 22, 21, 24];
            let fourOfKings = [17, 18, 19, 20];
            let fourOfQueens = [13, 14, 15, 16];
            let fourOfJacks = [9, 10, 11, 12];
            let fourOfTens = [5, 6, 7, 8];
            let fourOfNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let aces = allAces(fourOfAces, whatsOnHand);
            let kings = allKings(fourOfKings, whatsOnHand);
            let queens = allQueens(fourOfQueens, whatsOnHand);
            let jacks = allJacks(fourOfJacks, whatsOnHand);
            let tenns = allTenns(fourOfTens, whatsOnHand);
            let nines = allNines(fourOfNines, whatsOnHand);

            if (((aces.length === 1) && (kings.length === 1) && (queens.length === 1) &&
                    (jacks.length === 1) && (tenns.length === 1)) ||
                ((kings.length === 1) && (queens.length === 1) &&
                    (jacks.length === 1) && (tenns.length === 1) && (nines.length === 1))) {
                        if(this.round === 3){this.money += this.straightValue}
                        return this.score = 'Straight'
            } else this.threeOfAKind();
        },
        threeOfAKind: function () {
            let fourOfAces = [21, 22, 23, 24];
            let fourOfKings = [17, 18, 19, 20];
            let fourOfQueens = [13, 14, 15, 16];
            let fourOfJacks = [9, 10, 11, 12];
            let fourOfTens = [5, 6, 7, 8];
            let fourOfNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let aces = allAces(fourOfAces, whatsOnHand);
            let kings = allKings(fourOfKings, whatsOnHand);
            let queens = allQueens(fourOfQueens, whatsOnHand);
            let jacks = allJacks(fourOfJacks, whatsOnHand);
            let tenns = allTenns(fourOfTens, whatsOnHand);
            let nines = allNines(fourOfNines, whatsOnHand);

            if ((aces.length === 3) || (kings.length === 3) || (queens.length === 3) ||
                (jacks.length === 3) || (tenns.length === 3) || (nines.length === 3)) {
                    if(this.round === 3){this.money += this.threeOfTheKindValue}
                    return this.score = 'Three of a Kind'
            } else this.twoPairs()
        },
        twoPairs: function () {
            let fourAces = [21, 22, 23, 24];
            let fourKings = [17, 18, 19, 20];
            let fourQueens = [13, 14, 15, 16];
            let fourJacks = [9, 10, 11, 12];
            let fourTens = [5, 6, 7, 8];
            let fourNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let aces = allAces(fourAces, whatsOnHand);
            let kings = allKings(fourKings, whatsOnHand);
            let queens = allQueens(fourQueens, whatsOnHand);
            let jacks = allJacks(fourJacks, whatsOnHand);
            let tenns = allTenns(fourTens, whatsOnHand);
            let nines = allNines(fourNines, whatsOnHand);

            //Aces
            if (((aces.length === 2) && (kings.length === 2)) ||
                ((aces.length === 2) && (queens.length === 2)) ||
                ((aces.length === 2) && (jacks.length === 2)) ||
                ((aces.length === 2) && (tenns.length === 2)) ||
                ((aces.length === 2) && (nines.length === 2)) ||
                //Kings
                ((kings.length === 2) && (aces.length === 2)) ||
                ((kings.length === 2) && (queens.length === 2)) ||
                ((kings.length === 2) && (jacks.length === 2)) ||
                ((kings.length === 2) && (tenns.length === 2)) ||
                ((kings.length === 2) && (nines.length === 2)) ||
                //Queens
                ((queens.length === 2) && (aces.length === 2)) ||
                ((queens.length === 2) && (kings.length === 2)) ||
                ((queens.length === 2) && (jacks.length === 2)) ||
                ((queens.length === 2) && (tenns.length === 2)) ||
                ((queens.length === 2) && (nines.length === 2)) ||
                //Jacks
                ((jacks.length === 2) && (aces.length === 2)) ||
                ((jacks.length === 2) && (kings.length === 2)) ||
                ((jacks.length === 2) && (queens.length === 2)) ||
                ((jacks.length === 2) && (tenns.length === 2)) ||
                ((jacks.length === 2) && (nines.length === 2)) ||
                //Tens
                ((tenns.length === 2) && (aces.length === 2)) ||
                ((tenns.length === 2) && (kings.length === 2)) ||
                ((tenns.length === 2) && (queens.length === 2)) ||
                ((tenns.length === 2) && (jacks.length === 2)) ||
                ((tenns.length === 2) && (nines.length === 2)) ||
                //Nines
                ((nines.length === 2) && (aces.length === 2)) ||
                ((nines.length === 2) && (kings.length === 2)) ||
                ((nines.length === 2) && (queens.length === 2)) ||
                ((nines.length === 2) && (jacks.length === 2)) ||
                ((nines.length === 2) && (tenns.length === 2))) {
                    if(this.round === 3){this.money += this.twoPairsValue}
                    return this.score = '2 Pairs';
            } else this.pair()
        },
        pair: function () {
            let fourAces = [21, 22, 23, 24];
            let fourKings = [17, 18, 19, 20];
            let fourQueens = [13, 14, 15, 16];
            let fourJacks = [9, 10, 11, 12];
            let fourTens = [5, 6, 7, 8];
            let fourNines = [1, 2, 3, 4];

            let whatsOnHand = [one, two, three, four, five];

            let allAces = (y, z) => y.filter((x) => z.includes(x));
            let allKings = (y, z) => y.filter((x) => z.includes(x));
            let allQueens = (y, z) => y.filter((x) => z.includes(x));
            let allJacks = (y, z) => y.filter((x) => z.includes(x));
            let allTenns = (y, z) => y.filter((x) => z.includes(x));
            let allNines = (y, z) => y.filter((x) => z.includes(x));

            let aces = allAces(fourAces, whatsOnHand);
            let kings = allKings(fourKings, whatsOnHand);
            let queens = allQueens(fourQueens, whatsOnHand);
            let jacks = allJacks(fourJacks, whatsOnHand);
            let tenns = allTenns(fourTens, whatsOnHand);
            let nines = allNines(fourNines, whatsOnHand);

            if ((aces.length === 2) || (kings.length === 2) || (queens.length === 2) ||
                (jacks.length === 2) || (tenns.length === 2) || (nines.length === 2)) {
                    if(this.round === 3){
                        this.money += this.pairValue
                    }else return this.score = 'Pair';
                }else if(this.round === 1){
                    this.score = 'Change Cards'
                }else return this.score = 'Shit Happens'
        },
        start: function () {
            this.random();
            this.check();
            this.whatIsOnHand();
            this.round = 2;
            this.money -= this.bet;
        },
        checkButton: function() {
            this.whatIsOnHand();
            this.round = 3
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
        changeSelected: function() {
            const changeFirstOne = () => {
                if(this.firstSelected){
                    let newOne;
                    newOne = Math.floor(Math.random() * 24 + 1);
                    if (newOne != one && newOne != two && newOne != three && newOne != four && newOne != five) {
                        one = newOne;
                        this.check();
                        this.firstSelected = !this.firstSelected;
                    }else changeFirstOne()
                };
            };
            const changeSecondOne = () => {
                if(this.secondSelected){
                    let newTwo;
                    newTwo = Math.floor(Math.random() * 24 + 1);
                    if (newTwo != one && newTwo != two && newTwo != three && newTwo != four && newTwo != five) {
                        two = newTwo;
                        this.check();
                        this.secondSelected = !this.secondSelected;
                    }else changeSecondOne()
                };
            };
            const changeThirdOne = () => {
                if(this.thirdSelected){
                    let newThree;
                    newThree = Math.floor(Math.random() * 24 + 1);
                    if (newThree != one && newThree != two && newThree != three && newThree != four && newThree != five) {
                        three = newThree;
                        this.check();
                        this.thirdSelected = !this.thirdSelected;
                    }else changeThirdOne()
                };
            };
            const changeFourthOne = () => {
                if( this.fourthSelected){
                    let newFour;
                    newFour = Math.floor(Math.random() * 24 + 1);
                    if (newFour != one && newFour != two && newFour != three && newFour != four && newFour != five) {
                        four = newFour;
                        this.check();
                        this.fourthSelected = !this.fourthSelected;
                    }else changeFourthOne()
                };
            };
            const changeFifthOne = () => {
                if( this.fifthSelected){
                    let newFive;
                    newFive = Math.floor(Math.random() * 24 + 1);
                    if (newFive != one && newFive != two && newFive != three && newFive != four && newFive != five) {
                        five = newFive;
                        this.check();
                        this.fifthSelected = !this.fifthSelected;
                    }else changeFifthOne()
                };
            };
            changeFirstOne();
            changeSecondOne();
            changeThirdOne();
            changeFourthOne();
            changeFifthOne();
            this.whatIsOnHand();
            this.round = 3;
        },
        collectMoney: function() {
            this.round = 3;
            this.whatIsOnHand()
            this.round = 1;
            this.moneyWon = 0;
            this.score = 'Good Luck'
        },
        takeARisk: function() {
            this.round = 4;
            this.secretLevel = 1
        },
        lowCard1: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('firstSecret').src = fristLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won';
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };      
        },
        lowCard2: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('secondSecret').src = secondLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won !'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard3: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('thirdSecret').src = thirdLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won !!'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard4: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('fourthSecret').src = fourthLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won Again :)'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard5: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('fifthSecret').src = fifthLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'And Won Again !!! :)'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard6: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('sixthSecret').src = sixthLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'And Again !!! :)'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard7: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('seventhSecret').src = seventhLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'Won You Lucky You... :)'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard8: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('eightSecret').src = eightLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'Won You Lucky Bastardo'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard9: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('ninethSecret').src = ninethLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = '9 In The Row Won !!!'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard10: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('tenthSecret').src = tenthLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Should Try Lottery :)'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard11: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('eleventhSecret').src = eleventhLowCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'One More And JACKPOT !!!'
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        lowCard12: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard < 13){
                document.getElementById('twelvethSecret').src = twelvethLowCard;
                this.moneyWon *= 10;
                alert('You Smash The Bank');
                this.secretLevel = 0
            }else if (secretCard > 12){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard1: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('firstSecret').src = fristHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };      
        },
        highCard2: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('secondSecret').src = secondHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won !'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard3: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('thirdSecret').src = thirdHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won !!'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard4: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('fourthSecret').src = fourthHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Won Again :)'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard5: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('fifthSecret').src = fifthHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'And Won Again !!! :)'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard6: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('sixthSecret').src = sixthHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'And Again !!! :)'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard7: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('seventhSecret').src = seventhHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'Won You Lucky You... :)'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard8: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('eightSecret').src = eightHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'Won You Lucky Bastardo'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard9: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('ninethSecret').src = ninethHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = '9 In The Row Won !!!'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard10: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('tenthSecret').src = tenthHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'You Should Try Lottery :)'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard11: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('eleventhSecret').src = eleventhHighCard;
                this.moneyWon *= 2;
                this.secretLevel ++;
                this.riskMessage = 'One More And JACKPOT !!!'
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.riskMessage = '';
                this.score = 'You Lost';
                this.round = 5
            };
        },
        highCard12: function() {
            let secretCard = 0;
            secretCard = Math.floor(Math.random() * 24 + 1);
            if(secretCard > 12){
                document.getElementById('twelvethSecret').src = twelvethHighCard;
                this.moneyWon *= 2;
                alert('You Smash The Bank');
                this.secretLevel = 0
            }else if (secretCard < 13){
                this.moneyWon = 0;
                this.secretLevel = 0;
                this.score = 'You Lost';
                this.round = 5
            };
        },
        startOver: function() {
            if(this.money <= 0){
                this.score = 'You Lost';
                this.bet = 0;
                return this.round = 5
            }else this.score = 'Good Luck';
            this.round = 1;
            this.riskMessage = ''
        },
        collectMoneyFromRisk: function() {
            this.money = this.money + this. moneyWon;
            this.round = 1;
            this.secretLevel = 0;
            this.moneyWon = 0;
            this.score = 'Good Luck';
            this.riskMessage = ''
        }
        // for testing invoke when needed
        /*tillGet: function (iWant) {
            this.random();
            this.check();
            this.whatIsOnHand();
            if (this.score !== iWant) {
                this.tillGet(iWant)
            } else return this.score
        },*/
    },
})