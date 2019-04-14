import {data} from '../app.js'

export const hierarchy = {
    checkHand: function (y, z) {
     return y.filter((x) => z.includes(x));
    },
    
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

    straightFlush: function () {
        let straightFlushHearts = [4, 8, 12, 16, 20,];
        let straightFlushHearts1 = [8, 12, 16, 20, 24];
        let straightFlushHearts2 = [12, 16, 20, 24, 28];
        let straightFlushHearts3 = [16, 20, 24, 28, 32];
        let straightFlushHearts4 = [20, 24, 28, 32, 36];
        let straightFlushHearts5 = [24, 28, 32, 36, 40];
        let straightFlushHearts6 = [28, 32, 36, 40, 44];
        let straightFlushHearts7 = [32, 36, 40, 44, 48];
        let straightFlushHearts8 = [36, 40, 44, 48, 52];

        let straightFlushDiamonds = [3, 7, 11, 15, 19,];
        let straightFlushDiamonds1 = [7, 11, 15, 19, 23];
        let straightFlushDiamonds2 = [11, 15, 19, 23, 27];
        let straightFlushDiamonds3 = [15, 19, 23, 27, 31];
        let straightFlushDiamonds4 = [19, 23, 27, 31, 35];
        let straightFlushDiamonds5 = [23, 27, 31, 35, 39];
        let straightFlushDiamonds6 = [27, 31, 35, 39, 43];
        let straightFlushDiamonds7 = [31, 35, 39, 43, 47];
        let straightFlushDiamonds8 = [35, 39, 43, 47, 51];
        
        let straightFlushClubs = [2, 6, 10, 14, 28,];
        let straightFlushClubs1 = [6, 10, 14, 18, 22];
        let straightFlushClubs2 = [10, 14, 18, 22, 26];
        let straightFlushClubs3 = [14, 18, 22, 26, 30];
        let straightFlushClubs4 = [18, 22, 26, 30, 34];
        let straightFlushClubs5 = [22, 26, 30, 34, 38];
        let straightFlushClubs6 = [26, 30, 34, 38, 42];
        let straightFlushClubs7 = [30, 34, 38, 42, 46];
        let straightFlushClubs8 = [34, 38, 42, 46, 50];

        let straightFlushSpades = [1, 5, 9, 13, 17];
        let straightFlushSpades1 = [5, 9, 13, 17, 21];
        let straightFlushSpades2 = [9, 13, 17, 21, 25];
        let straightFlushSpades3 = [13, 17, 21, 25, 29];
        let straightFlushSpades4 = [17, 21, 25, 29, 33];
        let straightFlushSpades5 = [21, 25, 29, 33, 37];
        let straightFlushSpades6 = [25, 29, 33, 37, 41];
        let straightFlushSpades7 = [29, 33, 37, 41, 45];
        let straightFlushSpades8 = [33, 37, 41, 45, 49];

        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let flushOfHeartsOnHand = this.checkHand(straightFlushHearts, whatsOnHand);
        let flushOfHeartsOnHand1 = this.checkHand(straightFlushHearts1, whatsOnHand);
        let flushOfHeartsOnHand2 = this.checkHand(straightFlushHearts2, whatsOnHand);
        let flushOfHeartsOnHand3 = this.checkHand(straightFlushHearts3, whatsOnHand);
        let flushOfHeartsOnHand4 = this.checkHand(straightFlushHearts4, whatsOnHand);
        let flushOfHeartsOnHand5 = this.checkHand(straightFlushHearts5, whatsOnHand);
        let flushOfHeartsOnHand6 = this.checkHand(straightFlushHearts6, whatsOnHand);
        let flushOfHeartsOnHand7 = this.checkHand(straightFlushHearts7, whatsOnHand);
        let flushOfHeartsOnHand8 = this.checkHand(straightFlushHearts8, whatsOnHand);

        let flushOfDiamondsOnHand = this.checkHand(straightFlushDiamonds, whatsOnHand);
        let flushOfDiamondsOnHand1 = this.checkHand(straightFlushDiamonds1, whatsOnHand);
        let flushOfDiamondsOnHand2 = this.checkHand(straightFlushDiamonds2, whatsOnHand);
        let flushOfDiamondsOnHand3 = this.checkHand(straightFlushDiamonds3, whatsOnHand);
        let flushOfDiamondsOnHand4 = this.checkHand(straightFlushDiamonds4, whatsOnHand);
        let flushOfDiamondsOnHand5 = this.checkHand(straightFlushDiamonds5, whatsOnHand);
        let flushOfDiamondsOnHand6 = this.checkHand(straightFlushDiamonds6, whatsOnHand);
        let flushOfDiamondsOnHand7 = this.checkHand(straightFlushDiamonds7, whatsOnHand);
        let flushOfDiamondsOnHand8 = this.checkHand(straightFlushDiamonds8, whatsOnHand);

        let flushOfClubsOnHand = this.checkHand(straightFlushClubs, whatsOnHand);
        let flushOfClubsOnHand1 = this.checkHand(straightFlushClubs1, whatsOnHand);
        let flushOfClubsOnHand2 = this.checkHand(straightFlushClubs2, whatsOnHand);
        let flushOfClubsOnHand3 = this.checkHand(straightFlushClubs3, whatsOnHand);
        let flushOfClubsOnHand4 = this.checkHand(straightFlushClubs4, whatsOnHand);
        let flushOfClubsOnHand5 = this.checkHand(straightFlushClubs5, whatsOnHand);
        let flushOfClubsOnHand6 = this.checkHand(straightFlushClubs6, whatsOnHand);
        let flushOfClubsOnHand7 = this.checkHand(straightFlushClubs7, whatsOnHand);
        let flushOfClubsOnHand8 = this.checkHand(straightFlushClubs8, whatsOnHand);

        let flushOfSpadesOnHand = this.checkHand(straightFlushSpades, whatsOnHand);
        let flushOfSpadesOnHand1 = this.checkHand(straightFlushSpades1, whatsOnHand);
        let flushOfSpadesOnHand2 = this.checkHand(straightFlushSpades2, whatsOnHand);
        let flushOfSpadesOnHand3 = this.checkHand(straightFlushSpades3, whatsOnHand);
        let flushOfSpadesOnHand4 = this.checkHand(straightFlushSpades4, whatsOnHand);
        let flushOfSpadesOnHand5 = this.checkHand(straightFlushSpades5, whatsOnHand);
        let flushOfSpadesOnHand6 = this.checkHand(straightFlushSpades6, whatsOnHand);
        let flushOfSpadesOnHand7 = this.checkHand(straightFlushSpades7, whatsOnHand);
        let flushOfSpadesOnHand8 = this.checkHand(straightFlushSpades8, whatsOnHand);

        if ((flushOfHeartsOnHand.length === 5) || (flushOfHeartsOnHand1.length === 5) || (flushOfHeartsOnHand2.length === 5) ||
        (flushOfHeartsOnHand3.length === 5) || (flushOfHeartsOnHand4.length === 5) || (flushOfHeartsOnHand5.length === 5) ||
        (flushOfHeartsOnHand6.length === 5) || (flushOfHeartsOnHand7.length === 5) || (flushOfHeartsOnHand8.length === 5) ||
        (flushOfDiamondsOnHand.length === 5) || (flushOfDiamondsOnHand1.length === 5) || (flushOfDiamondsOnHand2.length === 5) ||
        (flushOfDiamondsOnHand3.length === 5) || (flushOfDiamondsOnHand4.length === 5) || (flushOfDiamondsOnHand5.length === 5) ||
        (flushOfDiamondsOnHand6.length === 5) || (flushOfDiamondsOnHand7.length === 5) || (flushOfDiamondsOnHand8.length === 5) ||
        (flushOfClubsOnHand.length === 5) || (flushOfClubsOnHand1.length === 5) || (flushOfClubsOnHand2.length === 5) || 
        (flushOfClubsOnHand3.length === 5) || (flushOfClubsOnHand4.length === 5) || (flushOfClubsOnHand5.length === 5) ||
        (flushOfClubsOnHand6.length === 5) || (flushOfClubsOnHand7.length === 5) || (flushOfClubsOnHand8.length === 5) ||
        (flushOfSpadesOnHand.length === 5) || (flushOfSpadesOnHand1.length === 5) || (flushOfSpadesOnHand2.length === 5) ||
        (flushOfSpadesOnHand3.length === 5) || (flushOfSpadesOnHand4.length === 5) || (flushOfSpadesOnHand5.length === 5) ||
        (flushOfSpadesOnHand6.length === 5) || (flushOfSpadesOnHand7.length === 5) || (flushOfSpadesOnHand8.length === 5)) {
                if(data.round === 3){data.money += data.bigStraightFlushValue}
                return data.score = 'Straight Flush'
        } else this.flush();
    },
    flush: function () {
        let FlushHearts = [4, 8, 12, 16, 24, 28, 32, 36, 40, 44, 48, 52];
        let FlushDiamonds = [3, 7, 11, 15, 23, 27, 31, 35, 39, 43, 47, 51];
        let FlushClubs = [2, 6, 10, 14, 22, 26, 30, 34, 38, 42, 46, 50];
        let FlushSpades = [1, 5, 9, 13, 21, 25, 29, 33, 37, 41, 45, 49,];

        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let flushOfHearts= this.checkHand(FlushHearts, whatsOnHand);
        let flushOfDiamonds = this.checkHand(FlushDiamonds, whatsOnHand);
        let flushOfClubss = this.checkHand(FlushClubs, whatsOnHand);
        let flushOfSpades = this.checkHand(FlushSpades, whatsOnHand);

        if ((flushOfHearts.length === 5) || (flushOfDiamonds.length === 5) ||
            (flushOfClubss.length === 5) || (flushOfSpades.length === 5)) {
                if(data.round === 3){data.money += data.flushValue}
                return data.score = 'Flush';
        } else this.fourOfAKind();
    },
    fourOfAKind: function () {

        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let aces = this.checkHand(this.fourAces, whatsOnHand);
        let kings = this.checkHand(this.fourKings, whatsOnHand);
        let queens = this.checkHand(this.fourQueens, whatsOnHand);
        let jacks = this.checkHand(this.fourJacks, whatsOnHand);
        let tenns = this.checkHand(this.fourTens, whatsOnHand);
        let nines = this.checkHand(this.fourNines, whatsOnHand);
        let eights = this.checkHand(this.fourEights, whatsOnHand);
        let sevens = this.checkHand(this.fourSevens, whatsOnHand);
        let sixes = this.checkHand(this.fourSixes, whatsOnHand);
        let fives = this.checkHand(this.fourFives, whatsOnHand);
        let fours = this.checkHand(this.fourFours, whatsOnHand);
        let threes = this.checkHand(this.fourThrees, whatsOnHand);
        let twos = this.checkHand(this.fourTwos, whatsOnHand);

        if ((aces.length === 4) || (kings.length === 4) || (queens.length === 4) || (jacks.length === 4) ||
            (tenns.length === 4) || (nines.length === 4) || (eights.length === 4) || (sevens.length === 4) ||
            (sixes.length === 4) || (fives.length === 4) || (fours.length === 4) || (threes.length === 4) ||
            (twos.length === 4) ) {
                if(data.round === 3){data.money += data.fourOfTheKindValue}
                return data.score = 'Four Of The Kind'
        } else return this.fullHouse()
    },
    fullHouse: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let aces = this.checkHand(this.fourAces, whatsOnHand);
        let kings = this.checkHand(this.fourKings, whatsOnHand);
        let queens = this.checkHand(this.fourQueens, whatsOnHand);
        let jacks = this.checkHand(this.fourJacks, whatsOnHand);
        let tenns = this.checkHand(this.fourTens, whatsOnHand);
        let nines = this.checkHand(this.fourNines, whatsOnHand);
        let eights = this.checkHand(this.fourEights, whatsOnHand);
        let sevens = this.checkHand(this.fourSevens, whatsOnHand);
        let sixes = this.checkHand(this.fourSixes, whatsOnHand);
        let fives = this.checkHand(this.fourFives, whatsOnHand);
        let fours = this.checkHand(this.fourFours, whatsOnHand);
        let threes = this.checkHand(this.fourThrees, whatsOnHand);
        let twos = this.checkHand(this.fourTwos, whatsOnHand);

        //Aces
        if (((aces.length === 3) && (kings.length === 2)) ||
            ((aces.length === 3) && (queens.length === 2)) ||
            ((aces.length === 3) && (jacks.length === 2)) ||
            ((aces.length === 3) && (tenns.length === 2)) ||
            ((aces.length === 3) && (nines.length === 2)) ||
            ((aces.length === 3) && (eights.length === 2)) ||
            ((aces.length === 3) && (sevens.length === 2)) ||
            ((aces.length === 3) && (sixes.length === 2)) ||
            ((aces.length === 3) && (fives.length === 2)) ||
            ((aces.length === 3) && (fours.length === 2)) ||
            ((aces.length === 3) && (threes.length === 2)) ||
            ((aces.length === 3) && (twos.length === 2)) ||
            //Kings
            ((kings.length === 3) && (aces.length === 2)) ||
            ((kings.length === 3) && (queens.length === 2)) ||
            ((kings.length === 3) && (jacks.length === 2)) ||
            ((kings.length === 3) && (tenns.length === 2)) ||
            ((kings.length === 3) && (nines.length === 2)) ||
            ((kings.length === 3) && (eights.length === 2)) ||
            ((kings.length === 3) && (sevens.length === 2)) ||
            ((kings.length === 3) && (sixes.length === 2)) ||
            ((kings.length === 3) && (fives.length === 2)) ||
            ((kings.length === 3) && (fours.length === 2)) ||
            ((kings.length === 3) && (threes.length === 2)) ||
            ((kings.length === 3) && (twos.length === 2)) ||
            //Queens
            ((queens.length === 3) && (aces.length === 2)) ||
            ((queens.length === 3) && (kings.length === 2)) ||
            ((queens.length === 3) && (jacks.length === 2)) ||
            ((queens.length === 3) && (tenns.length === 2)) ||
            ((queens.length === 3) && (nines.length === 2)) ||
            ((queens.length === 3) && (eights.length === 2)) ||
            ((queens.length === 3) && (sevens.length === 2)) ||
            ((queens.length === 3) && (sixes.length === 2)) ||
            ((queens.length === 3) && (fives.length === 2)) ||
            ((queens.length === 3) && (fours.length === 2)) ||
            ((queens.length === 3) && (threes.length === 2)) ||
            ((queens.length === 3) && (twos.length === 2)) ||
            //Jacks
            ((jacks.length === 3) && (aces.length === 2)) ||
            ((jacks.length === 3) && (kings.length === 2)) ||
            ((jacks.length === 3) && (queens.length === 2)) ||
            ((jacks.length === 3) && (tenns.length === 2)) ||
            ((jacks.length === 3) && (nines.length === 2)) ||
            ((jacks.length === 3) && (eights.length === 2)) ||
            ((jacks.length === 3) && (sevens.length === 2)) ||
            ((jacks.length === 3) && (sixes.length === 2)) ||
            ((jacks.length === 3) && (fives.length === 2)) ||
            ((jacks.length === 3) && (fours.length === 2)) ||
            ((jacks.length === 3) && (threes.length === 2)) ||
            ((jacks.length === 3) && (twos.length === 2)) ||
            //Tens
            ((tenns.length === 3) && (aces.length === 2)) ||
            ((tenns.length === 3) && (kings.length === 2)) ||
            ((tenns.length === 3) && (queens.length === 2)) ||
            ((tenns.length === 3) && (jacks.length === 2)) ||
            ((tenns.length === 3) && (nines.length === 2)) ||
            ((tenns.length === 3) && (eights.length === 2)) ||
            ((tenns.length === 3) && (sevens.length === 2)) ||
            ((tenns.length === 3) && (sixes.length === 2)) ||
            ((tenns.length === 3) && (fives.length === 2)) ||
            ((tenns.length === 3) && (fours.length === 2)) ||
            ((tenns.length === 3) && (threes.length === 2)) ||
            ((tenns.length === 3) && (twos.length === 2)) ||
            //Nines
            ((nines.length === 3) && (aces.length === 2)) ||
            ((nines.length === 3) && (kings.length === 2)) ||
            ((nines.length === 3) && (queens.length === 2)) ||
            ((nines.length === 3) && (jacks.length === 2)) ||
            ((nines.length === 3) && (tenns.length === 2)) ||
            ((nines.length === 3) && (eights.length === 2)) ||
            ((nines.length === 3) && (sevens.length === 2)) ||
            ((nines.length === 3) && (sixes.length === 2)) ||
            ((nines.length === 3) && (fives.length === 2)) ||
            ((nines.length === 3) && (fours.length === 2)) ||
            ((nines.length === 3) && (threes.length === 2)) ||
            ((nines.length === 3) && (twos.length === 2)) ||
            //Eights
            ((eights.length === 3) && (aces.length === 2)) ||
            ((eights.length === 3) && (kings.length === 2)) ||
            ((eights.length === 3) && (queens.length === 2)) ||
            ((eights.length === 3) && (jacks.length === 2)) ||
            ((eights.length === 3) && (tenns.length === 2)) ||
            ((eights.length === 3) && (nines.length === 2)) ||
            ((eights.length === 3) && (sevens.length === 2)) ||
            ((eights.length === 3) && (sixes.length === 2)) ||
            ((eights.length === 3) && (fives.length === 2)) ||
            ((eights.length === 3) && (fours.length === 2)) ||
            ((eights.length === 3) && (threes.length === 2)) ||
            ((eights.length === 3) && (twos.length === 2)) ||
            //Sevens
            ((sevens.length === 3) && (aces.length === 2)) ||
            ((sevens.length === 3) && (kings.length === 2)) ||
            ((sevens.length === 3) && (queens.length === 2)) ||
            ((sevens.length === 3) && (jacks.length === 2)) ||
            ((sevens.length === 3) && (tenns.length === 2)) ||
            ((sevens.length === 3) && (nines.length === 2)) ||
            ((sevens.length === 3) && (eights.length === 2)) ||
            ((sevens.length === 3) && (sixes.length === 2)) ||
            ((sevens.length === 3) && (fives.length === 2)) ||
            ((sevens.length === 3) && (fours.length === 2)) ||
            ((sevens.length === 3) && (threes.length === 2)) ||
            ((sevens.length === 3) && (twos.length === 2)) ||
            //Sixes
            ((sixes.length === 3) && (aces.length === 2)) ||
            ((sixes.length === 3) && (kings.length === 2)) ||
            ((sixes.length === 3) && (queens.length === 2)) ||
            ((sixes.length === 3) && (jacks.length === 2)) ||
            ((sixes.length === 3) && (tenns.length === 2)) ||
            ((sixes.length === 3) && (nines.length === 2)) ||
            ((sixes.length === 3) && (eights.length === 2)) ||
            ((sixes.length === 3) && (sevens.length === 2)) ||
            ((sixes.length === 3) && (fives.length === 2)) ||
            ((sixes.length === 3) && (fours.length === 2)) ||
            ((sixes.length === 3) && (threes.length === 2)) ||
            ((sixes.length === 3) && (twos.length === 2)) ||
            //Fives
            ((fives.length === 3) && (aces.length === 2)) ||
            ((fives.length === 3) && (kings.length === 2)) ||
            ((fives.length === 3) && (queens.length === 2)) ||
            ((fives.length === 3) && (jacks.length === 2)) ||
            ((fives.length === 3) && (tenns.length === 2)) ||
            ((fives.length === 3) && (nines.length === 2)) ||
            ((fives.length === 3) && (eights.length === 2)) ||
            ((fives.length === 3) && (sevens.length === 2)) ||
            ((fives.length === 3) && (sixes.length === 2)) ||
            ((fives.length === 3) && (fours.length === 2)) ||
            ((fives.length === 3) && (threes.length === 2)) ||
            ((fives.length === 3) && (twos.length === 2)) ||
            //Fours
            ((fours.length === 3) && (aces.length === 2)) ||
            ((fours.length === 3) && (kings.length === 2)) ||
            ((fours.length === 3) && (queens.length === 2)) ||
            ((fours.length === 3) && (jacks.length === 2)) ||
            ((fours.length === 3) && (tenns.length === 2)) ||
            ((fours.length === 3) && (nines.length === 2)) ||
            ((fours.length === 3) && (eights.length === 2)) ||
            ((fours.length === 3) && (sevens.length === 2)) ||
            ((fours.length === 3) && (sixes.length === 2)) ||
            ((fours.length === 3) && (fives.length === 2)) ||
            ((fours.length === 3) && (threes.length === 2)) ||
            ((fours.length === 3) && (twos.length === 2)) ||
            //Threes
            ((threes.length === 3) && (aces.length === 2)) ||
            ((threes.length === 3) && (kings.length === 2)) ||
            ((threes.length === 3) && (queens.length === 2)) ||
            ((threes.length === 3) && (jacks.length === 2)) ||
            ((threes.length === 3) && (tenns.length === 2)) ||
            ((threes.length === 3) && (nines.length === 2)) ||
            ((threes.length === 3) && (eights.length === 2)) ||
            ((threes.length === 3) && (sevens.length === 2)) ||
            ((threes.length === 3) && (sixes.length === 2)) ||
            ((threes.length === 3) && (fives.length === 2)) ||
            ((threes.length === 3) && (fours.length === 2)) ||
            ((threes.length === 3) && (twos.length === 2)) ||
            //Twos
            ((twos.length === 3) && (aces.length === 2)) ||
            ((twos.length === 3) && (kings.length === 2)) ||
            ((twos.length === 3) && (queens.length === 2)) ||
            ((twos.length === 3) && (jacks.length === 2)) ||
            ((twos.length === 3) && (tenns.length === 2)) ||
            ((twos.length === 3) && (nines.length === 2)) ||
            ((twos.length === 3) && (eights.length === 2)) ||
            ((twos.length === 3) && (sevens.length === 2)) ||
            ((twos.length === 3) && (sixes.length === 2)) ||
            ((twos.length === 3) && (fives.length === 2)) ||
            ((twos.length === 3) && (fours.length === 2)) ||
            ((twos.length === 3) && (threes.length === 2))) {
                if(data.round === 3){data.money += data.fullHouseValue}
                return data.score = 'Full House'
        } else this.straight();
    },
    straight: function () {
        if ((data.one + 4 === data.two && data.one + 8 === data.three && data.one + 12 === data.four && data.one + 16 === data.five) ||
            (data.two + 4 === data.three && data.two + 8 === data.four && data.two + 12 === data.five && data.two + 16 === data.one) ||
            (data.three + 4 === data.four && data.three + 8 === data.five && data.three + 12 === data.one && data.three + 16 === data.two) ||
            (data.four + 4 === data.five && data.four + 8 === data.one && data.four + 12 === data.two && data.four + 16 === data.three) ||
            (data.five + 4 === data.one && data.five + 8 === data.two && data.five + 12 === data.three && data.five + 16 === data.four) ||
            (data.one - 4 === data.two && data.one - 8 === data.three && data.one - 12 === data.four && data.one - 16 === data.five) ||
            (data.two - 4 === data.three && data.two - 8 === data.four && data.two - 12 === data.five && data.two - 16 === data.one) ||
            (data.three - 4 === data.four && data.three - 8 === data.five && data.three - 12 === data.one && data.three - 16 === data.two) ||
            (data.four - 4 === data.five && data.four - 8 === data.one && data.four - 12 === data.two && data.four - 16 === data.three) ||
            (data.five - 4 === data.one && data.five - 8 === data.two && data.five - 12 === data.three && data.five - 16 === data.four)){
                    if(data.round === 3){data.money += data.straightValue}
                    return data.score = 'Straight'
        } else this.threeOfAKind();
    },
    threeOfAKind: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let aces = this.checkHand(this.fourAces, whatsOnHand);
        let kings = this.checkHand(this.fourKings, whatsOnHand);
        let queens = this.checkHand(this.fourQueens, whatsOnHand);
        let jacks = this.checkHand(this.fourJacks, whatsOnHand);
        let tenns = this.checkHand(this.fourTens, whatsOnHand);
        let nines = this.checkHand(this.fourNines, whatsOnHand);
        let eights = this.checkHand(this.fourEights, whatsOnHand);
        let sevens = this.checkHand(this.fourSevens, whatsOnHand);
        let sixes = this.checkHand(this.fourSixes, whatsOnHand);
        let fives = this.checkHand(this.fourFives, whatsOnHand);
        let fours = this.checkHand(this.fourFours, whatsOnHand);
        let threes = this.checkHand(this.fourThrees, whatsOnHand);
        let twos = this.checkHand(this.fourTwos, whatsOnHand);

        if ((aces.length === 3) || (kings.length === 3) || (queens.length === 3) ||
            (jacks.length === 3) || (tenns.length === 3) || (nines.length === 3) ||
            (eights.length === 3) || (sevens.length === 3) || (sixes.length === 3)||
            (fives.length === 3) || (fours.length === 3) || (threes.length === 3) ||
            (twos.length === 3)) {
                if(data.round === 3){data.money += data.threeOfTheKindValue}
                return data.score = 'Three of a Kind'
        } else this.twoPairs()
    },
    twoPairs: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let aces = this.checkHand(this.fourAces, whatsOnHand);
        let kings = this.checkHand(this.fourKings, whatsOnHand);
        let queens = this.checkHand(this.fourQueens, whatsOnHand);
        let jacks = this.checkHand(this.fourJacks, whatsOnHand);
        let tenns = this.checkHand(this.fourTens, whatsOnHand);
        let nines = this.checkHand(this.fourNines, whatsOnHand);
        let eights = this.checkHand(this.fourEights, whatsOnHand);
        let sevens = this.checkHand(this.fourSevens, whatsOnHand);
        let sixes = this.checkHand(this.fourSixes, whatsOnHand);
        let fives = this.checkHand(this.fourFives, whatsOnHand);
        let fours = this.checkHand(this.fourFours, whatsOnHand);
        let threes = this.checkHand(this.fourThrees, whatsOnHand);
        let twos = this.checkHand(this.fourTwos, whatsOnHand);

        //Aces
        if  (((aces.length === 2) && (kings.length === 2)) ||
            ((aces.length === 2) && (queens.length === 2)) ||
            ((aces.length === 2) && (jacks.length === 2)) ||
            ((aces.length === 2) && (tenns.length === 2)) ||
            ((aces.length === 2) && (nines.length === 2)) ||
            ((aces.length === 2) && (eights.length === 2)) ||
            ((aces.length === 2) && (sevens.length === 2)) ||
            ((aces.length === 2) && (sixes.length === 2)) ||
            ((aces.length === 2) && (fives.length === 2)) ||
            ((aces.length === 2) && (fours.length === 2)) ||
            ((aces.length === 2) && (threes.length === 2)) ||
            ((aces.length === 2) && (twos.length === 2)) ||
            //Kings
            ((kings.length === 2) && (aces.length === 2)) ||
            ((kings.length === 2) && (queens.length === 2)) ||
            ((kings.length === 2) && (jacks.length === 2)) ||
            ((kings.length === 2) && (tenns.length === 2)) ||
            ((kings.length === 2) && (nines.length === 2)) ||
            ((kings.length === 2) && (eights.length === 2)) ||
            ((kings.length === 2) && (sevens.length === 2)) ||
            ((kings.length === 2) && (sixes.length === 2)) ||
            ((kings.length === 2) && (fives.length === 2)) ||
            ((kings.length === 2) && (fours.length === 2)) ||
            ((kings.length === 2) && (threes.length === 2)) ||
            ((kings.length === 2) && (twos.length === 2)) ||
            //Queens
            ((queens.length === 2) && (aces.length === 2)) ||
            ((queens.length === 2) && (kings.length === 2)) ||
            ((queens.length === 2) && (jacks.length === 2)) ||
            ((queens.length === 2) && (tenns.length === 2)) ||
            ((queens.length === 2) && (nines.length === 2)) ||
            ((queens.length === 2) && (eights.length === 2)) ||
            ((queens.length === 2) && (sevens.length === 2)) ||
            ((queens.length === 2) && (sixes.length === 2)) ||
            ((queens.length === 2) && (fives.length === 2)) ||
            ((queens.length === 2) && (fours.length === 2)) ||
            ((queens.length === 2) && (threes.length === 2)) ||
            ((queens.length === 2) && (twos.length === 2)) ||
            //Jacks
            ((jacks.length === 2) && (aces.length === 2)) ||
            ((jacks.length === 2) && (kings.length === 2)) ||
            ((jacks.length === 2) && (queens.length === 2)) ||
            ((jacks.length === 2) && (tenns.length === 2)) ||
            ((jacks.length === 2) && (nines.length === 2)) ||
            ((jacks.length === 2) && (eights.length === 2)) ||
            ((jacks.length === 2) && (sevens.length === 2)) ||
            ((jacks.length === 2) && (sixes.length === 2)) ||
            ((jacks.length === 2) && (fives.length === 2)) ||
            ((jacks.length === 2) && (fours.length === 2)) ||
            ((jacks.length === 2) && (threes.length === 2)) ||
            ((jacks.length === 2) && (twos.length === 2)) ||
            //Tens
            ((tenns.length === 2) && (aces.length === 2)) ||
            ((tenns.length === 2) && (kings.length === 2)) ||
            ((tenns.length === 2) && (jacks.length === 2)) ||
            ((tenns.length === 2) && (queens.length === 2)) ||
            ((tenns.length === 2) && (nines.length === 2)) ||
            ((tenns.length === 2) && (eights.length === 2)) ||
            ((tenns.length === 2) && (sevens.length === 2)) ||
            ((tenns.length === 2) && (sixes.length === 2)) ||
            ((tenns.length === 2) && (fives.length === 2)) ||
            ((tenns.length === 2) && (fours.length === 2)) ||
            ((tenns.length === 2) && (threes.length === 2)) ||
            ((tenns.length === 2) && (twos.length === 2)) ||
            //Nines
            ((nines.length === 2) && (aces.length === 2)) ||
            ((nines.length === 2) && (kings.length === 2)) ||
            ((nines.length === 2) && (jacks.length === 2)) ||
            ((nines.length === 2) && (queens.length === 2)) ||
            ((nines.length === 2) && (tenns.length === 2)) ||
            ((nines.length === 2) && (eights.length === 2)) ||
            ((nines.length === 2) && (sevens.length === 2)) ||
            ((nines.length === 2) && (sixes.length === 2)) ||
            ((nines.length === 2) && (fives.length === 2)) ||
            ((nines.length === 2) && (fours.length === 2)) ||
            ((nines.length === 2) && (threes.length === 2)) ||
            ((nines.length === 2) && (twos.length === 2)) ||
            //Eights
            ((eights.length === 2) && (aces.length === 2)) ||
            ((eights.length === 2) && (kings.length === 2)) ||
            ((eights.length === 2) && (jacks.length === 2)) ||
            ((eights.length === 2) && (queens.length === 2)) ||
            ((eights.length === 2) && (tenns.length === 2)) ||
            ((eights.length === 2) && (nines.length === 2)) ||
            ((eights.length === 2) && (sevens.length === 2)) ||
            ((eights.length === 2) && (sixes.length === 2)) ||
            ((eights.length === 2) && (fives.length === 2)) ||
            ((eights.length === 2) && (fours.length === 2)) ||
            ((eights.length === 2) && (threes.length === 2)) ||
            ((eights.length === 2) && (twos.length === 2)) ||
            //Sevens
            ((sevens.length === 2) && (aces.length === 2)) ||
            ((sevens.length === 2) && (kings.length === 2)) ||
            ((sevens.length === 2) && (jacks.length === 2)) ||
            ((sevens.length === 2) && (queens.length === 2)) ||
            ((sevens.length === 2) && (tenns.length === 2)) ||
            ((sevens.length === 2) && (nines.length === 2)) ||
            ((sevens.length === 2) && (eights.length === 2)) ||
            ((sevens.length === 2) && (sixes.length === 2)) ||
            ((sevens.length === 2) && (fives.length === 2)) ||
            ((sevens.length === 2) && (fours.length === 2)) ||
            ((sevens.length === 2) && (threes.length === 2)) ||
            ((sevens.length === 2) && (twos.length === 2)) ||
            //Sixes
            ((sixes.length === 2) && (aces.length === 2)) ||
            ((sixes.length === 2) && (kings.length === 2)) ||
            ((sixes.length === 2) && (jacks.length === 2)) ||
            ((sixes.length === 2) && (queens.length === 2)) ||
            ((sixes.length === 2) && (tenns.length === 2)) ||
            ((sixes.length === 2) && (nines.length === 2)) ||
            ((sixes.length === 2) && (eights.length === 2)) ||
            ((sixes.length === 2) && (sevens.length === 2)) ||
            ((sixes.length === 2) && (fives.length === 2)) ||
            ((sixes.length === 2) && (fours.length === 2)) ||
            ((sixes.length === 2) && (threes.length === 2)) ||
            ((sixes.length === 2) && (twos.length === 2)) ||
            //Fives
            ((fives.length === 2) && (aces.length === 2)) ||
            ((fives.length === 2) && (kings.length === 2)) ||
            ((fives.length === 2) && (jacks.length === 2)) ||
            ((fives.length === 2) && (queens.length === 2)) ||
            ((fives.length === 2) && (tenns.length === 2)) ||
            ((fives.length === 2) && (nines.length === 2)) ||
            ((fives.length === 2) && (eights.length === 2)) ||
            ((fives.length === 2) && (sevens.length === 2)) ||
            ((fives.length === 2) && (sixes.length === 2)) ||
            ((fives.length === 2) && (fours.length === 2)) ||
            ((fives.length === 2) && (threes.length === 2)) ||
            ((fives.length === 2) && (twos.length === 2)) ||
            //Fours
            ((fours.length === 2) && (aces.length === 2)) ||
            ((fours.length === 2) && (kings.length === 2)) ||
            ((fours.length === 2) && (jacks.length === 2)) ||
            ((fours.length === 2) && (queens.length === 2)) ||
            ((fours.length === 2) && (tenns.length === 2)) ||
            ((fours.length === 2) && (nines.length === 2)) ||
            ((fours.length === 2) && (eights.length === 2)) ||
            ((fours.length === 2) && (sevens.length === 2)) ||
            ((fours.length === 2) && (sixes.length === 2)) ||
            ((fours.length === 2) && (fives.length === 2)) ||
            ((fours.length === 2) && (threes.length === 2)) ||
            ((fours.length === 2) && (twos.length === 2)) ||
            //Threes
            ((threes.length === 2) && (aces.length === 2)) ||
            ((threes.length === 2) && (kings.length === 2)) ||
            ((threes.length === 2) && (jacks.length === 2)) ||
            ((threes.length === 2) && (queens.length === 2)) ||
            ((threes.length === 2) && (tenns.length === 2)) ||
            ((threes.length === 2) && (nines.length === 2)) ||
            ((threes.length === 2) && (eights.length === 2)) ||
            ((threes.length === 2) && (sevens.length === 2)) ||
            ((threes.length === 2) && (sixes.length === 2)) ||
            ((threes.length === 2) && (fives.length === 2)) ||
            ((threes.length === 2) && (fours.length === 2)) ||
            ((threes.length === 2) && (twos.length === 2)) ||
            //Twos
            ((twos.length === 2) && (aces.length === 2)) ||
            ((twos.length === 2) && (kings.length === 2)) ||
            ((twos.length === 2) && (jacks.length === 2)) ||
            ((twos.length === 2) && (queens.length === 2)) ||
            ((twos.length === 2) && (tenns.length === 2)) ||
            ((twos.length === 2) && (nines.length === 2)) ||
            ((twos.length === 2) && (eights.length === 2)) ||
            ((twos.length === 2) && (sevens.length === 2)) ||
            ((twos.length === 2) && (sixes.length === 2)) ||
            ((twos.length === 2) && (fives.length === 2)) ||
            ((twos.length === 2) && (fours.length === 2)) ||
            ((twos.length === 2) && (threes.length === 2))){
                if(data.round === 3){data.money += data.twoPairsValue}
                return data.score = '2 Pairs';
        } else this.pair()
    },
    pair: function () {
        let whatsOnHand = [data.one, data.two, data.three, data.four, data.five];

        let aces = this.checkHand(this.fourAces, whatsOnHand);
        let kings = this.checkHand(this.fourKings, whatsOnHand);
        let queens = this.checkHand(this.fourQueens, whatsOnHand);
        let jacks = this.checkHand(this.fourJacks, whatsOnHand);
        let tenns = this.checkHand(this.fourTens, whatsOnHand);
        let nines = this.checkHand(this.fourNines, whatsOnHand);
        let eights = this.checkHand(this.fourEights, whatsOnHand);
        let sevens = this.checkHand(this.fourSevens, whatsOnHand);
        let sixes = this.checkHand(this.fourSixes, whatsOnHand);
        let fives = this.checkHand(this.fourFives, whatsOnHand);
        let fours = this.checkHand(this.fourFours, whatsOnHand);
        let threes = this.checkHand(this.fourThrees, whatsOnHand);
        let twos = this.checkHand(this.fourTwos, whatsOnHand);

        if ((aces.length === 2) || (kings.length === 2) || (queens.length === 2) ||
            (jacks.length === 2) || (tenns.length === 2) || (nines.length === 2) || (eights.length === 2)
            || (sevens.length === 2)|| (sixes.length === 2)|| (fives.length === 2)|| (fours.length === 2)
            || (threes.length === 2)|| (twos.length === 2)) {
                if(data.round === 3){
                    data.money += data.pairValue
                }else return data.score = 'Pair';
            }else if(data.round === 1){
                data.score = 'Change Cards'
            }else return data.score = 'Shit Happens'
    }
}