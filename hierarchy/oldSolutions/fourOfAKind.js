const fourOfAKind = () => {
    if ( //Four Of A Kind Aces
        //one and two and three and four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and two and three and five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and four and five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and three and four and five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //two and three and four and five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //Four Of A Kind Kings
        //one and two and three and four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21)) ||
        //one and two and three and five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //one and two and four and five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //one and three and four and five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //two and three and four and five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //Four Of A Kind Queens
        //one and two and three and four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and two and three and five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and four and five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and three and four and five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //two and three and four and five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //Four Of A Kind Jacks
        //one and two and three and four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and two and three and five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and four and five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and three and four and five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //two and three and four and five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //Four Of A Kind 10's
        //one and two and three and four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and two and three and five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and four and five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and three and four and five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //two and three and four and five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //Four Of A Kind 5's
        //one and two and three and four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and two and three and five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and four and five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and three and four and five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //two and three and four and five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5))) {
        document.getElementById('whatsOnHand').textContent = 'Four Of A Kind';
    } else fullHouse();
};