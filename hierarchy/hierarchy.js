import {data} from '../app.js';

export const hierarchy = {
    fourAces: [49, 50, 51, 52],
    fourKings: [45, 46, 47, 48],
    fourQueens: [41, 42, 43, 44],
    fourJacks: [37, 38, 39, 40],
    fourTens: [33, 34, 35, 36],
    fourNines: [29, 30, 31, 32],
    fourEights: [25, 26, 27, 28],
    fourSevens: [21, 22, 23, 24],
    fourSixes: [17, 18, 19, 20],
    fourFives: [13, 14, 15, 16],
    fourFours: [9, 10, 11, 12],
    fourThrees: [5, 6, 7, 8],
    fourTwos: [1, 2, 3, 4],
    flushHearts: [4, 8, 12, 16, 24, 28, 32, 36, 40, 44, 48, 52],
    flushDiamonds: [3, 7, 11, 15, 23, 27, 31, 35, 39, 43, 47, 51],
    flushClubs: [2, 6, 10, 14, 22, 26, 30, 34, 38, 42, 46, 50],
    flushSpades: [1, 5, 9, 13, 21, 25, 29, 33, 37, 41, 45, 49],

    checkHand: function (whereToLook, onHand) {
     return whereToLook.filter((x) => onHand.includes(x));
    },
    lookForPairs: function (block) {
        return block.filter((x) => x.length === 2).length;
    },
    lookForThreeOfAKind: function (block) {
        return block.filter((x) => x.length === 3).length;
    },
    lookForStraight: function (block) {
        return block.filter((x) => x.length === 1).length;
    },
    lookForFourOfAKind: function (block) {
        return block.filter((x) => x.length === 4).length;
    },
    lookForFlush: function (block){
        return block.filter((x) => x.length === 5).length;
    },

    straightFlush: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];
        let sortedHand = whatsOnHand.sort((a,b) => a-b);

        if(sortedHand[0] + 4 === sortedHand[1] && sortedHand[0] + 8 === sortedHand[2] &&
            sortedHand[0] + 12 === sortedHand[3] && sortedHand[0] + 16 === sortedHand[4]){
            return data.round === 3 ? data.money += data.bigStraightFlushValue : data.score = 'Straight Flush';
        }else this.fourOfAKind();

    },
    fourOfAKind: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfCards = [
            this.aces = this.checkHand(this.fourAces, whatsOnHand),
            this.kings = this.checkHand(this.fourKings, whatsOnHand),
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
            this.threes = this.checkHand(this.fourThrees, whatsOnHand),
            this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];

        if (this.lookForFourOfAKind(blockOfCards) === 1) {
            return data.round === 3 ? data.money += data.fourOfTheKindValue : data.score = 'Four Of The Kind';
        } else this.fullHouse();
    },
    fullHouse: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfCards = [
            this.aces = this.checkHand(this.fourAces, whatsOnHand),
            this.kings = this.checkHand(this.fourKings, whatsOnHand),
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
            this.threes = this.checkHand(this.fourThrees, whatsOnHand),
            this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];
        
        if (this.lookForPairs(blockOfCards) === 1 && this.lookForThreeOfAKind(blockOfCards) === 1) {
            return data.round === 3 ? data.money += data.fullHouseValue : data.score = 'Full House';
        } else this.flush();
    },
    flush: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfFlush = [
            this.flushOfHearts= this.checkHand(this.flushHearts, whatsOnHand),
            this.flushOfDiamonds = this.checkHand(this.flushDiamonds, whatsOnHand),
            this.flushOfClubs = this.checkHand(this.flushClubs, whatsOnHand),
            this.flushOfSpades = this.checkHand(this.flushSpades, whatsOnHand)
        ];
        
        if (this.lookForFlush(blockOfFlush) === 1) {
            return data.round === 3 ? data.money += data.flushValue : data.score = 'Flush';
        } else this.straight();
    },
    straight: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];
        
        let highest = [
            this.aces = this.checkHand(this.fourAces, whatsOnHand),
            this.kings = this.checkHand(this.fourKings, whatsOnHand),
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand)
        ];

        let veryHigh = [
            this.kings = this.checkHand(this.fourKings, whatsOnHand),
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand)   
        ];

        let high = [
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand)
        ];

        let mediumHigh = [
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand)
        ];

        let medium = [
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand)
        ];

        let mediumSmall = [
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand)
        ];

        let small = [
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
        ];

        let smaller = [
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
            this.threes = this.checkHand(this.fourThrees, whatsOnHand)
        ];

        let smallest = [
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
            this.threes = this.checkHand(this.fourThrees, whatsOnHand),
            this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];
         
        if (this.lookForStraight(highest) === 5 || this.lookForStraight(veryHigh) === 5 ||
        this.lookForStraight(high) === 5 || this.lookForStraight(mediumHigh) === 5 ||
        this.lookForStraight(medium) === 5 || this.lookForStraight(mediumSmall) === 5 ||
        this.lookForStraight(small) === 5 || this.lookForStraight(smaller) === 5 ||
        this.lookForStraight(smallest) === 5){
            return data.round === 3 ? data.money += data.straightValue : data.score = 'Straight';
        }else this.threeOfAKind();
    },
    threeOfAKind: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfCards = [
            this.aces = this.checkHand(this.fourAces, whatsOnHand),
            this.kings = this.checkHand(this.fourKings, whatsOnHand),
            this.queens = this.checkHand(this.fourQueens, whatsOnHand),
            this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
            this.tenns = this.checkHand(this.fourTens, whatsOnHand),
            this.nines = this.checkHand(this.fourNines, whatsOnHand),
            this.eights = this.checkHand(this.fourEights, whatsOnHand),
            this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
            this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
            this.fives = this.checkHand(this.fourFives, whatsOnHand),
            this.fours = this.checkHand(this.fourFours, whatsOnHand),
            this.threes = this.checkHand(this.fourThrees, whatsOnHand),
            this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];

        if (this.lookForThreeOfAKind(blockOfCards) === 1){
            return data.round === 3 ? data.money += data.threeOfTheKindValue : data.score = 'Three of a Kind';
        } else this.twoPairs();
    },

    twoPairs: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfCards = [
                this.aces = this.checkHand(this.fourAces, whatsOnHand),
                this.kings = this.checkHand(this.fourKings, whatsOnHand),
                this.queens = this.checkHand(this.fourQueens, whatsOnHand),
                this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
                this.tenns = this.checkHand(this.fourTens, whatsOnHand),
                this.nines = this.checkHand(this.fourNines, whatsOnHand),
                this.eights = this.checkHand(this.fourEights, whatsOnHand),
                this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
                this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
                this.fives = this.checkHand(this.fourFives, whatsOnHand),
                this.fours = this.checkHand(this.fourFours, whatsOnHand),
                this.threes = this.checkHand(this.fourThrees, whatsOnHand),
                this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];

        if (this.lookForPairs(blockOfCards) === 2){
            return data.round === 3 ? data.money += data.twoPairsValue : data.score = '2 Pairs';
        } else this.pair();
    },
    
    pair: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let blockOfCards = [
                this.aces = this.checkHand(this.fourAces, whatsOnHand),
                this.kings = this.checkHand(this.fourKings, whatsOnHand),
                this.queens = this.checkHand(this.fourQueens, whatsOnHand),
                this.jacks = this.checkHand(this.fourJacks, whatsOnHand),
                this.tenns = this.checkHand(this.fourTens, whatsOnHand),
                this.nines = this.checkHand(this.fourNines, whatsOnHand),
                this.eights = this.checkHand(this.fourEights, whatsOnHand),
                this.sevens = this.checkHand(this.fourSevens, whatsOnHand),
                this.sixes = this.checkHand(this.fourSixes, whatsOnHand),
                this.fives = this.checkHand(this.fourFives, whatsOnHand),
                this.fours = this.checkHand(this.fourFours, whatsOnHand),
                this.threes = this.checkHand(this.fourThrees, whatsOnHand),
                this.twos = this.checkHand(this.fourTwos, whatsOnHand)
        ];

        if (this.lookForPairs(blockOfCards) === 1) {
                if(data.round === 3){
                    data.money += data.pairValue;
                }else data.score = 'Pair';
            }else if(data.round === 1){
                data.score = 'Change Cards';
            }else data.score = 'Shit Happens';
    }
};