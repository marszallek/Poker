const fullHouse= () => {
    if(//triple of Aces and Kings
        //one and two and three four five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) &&
        (four > 16 && four < 16) && (five > 16 && five < 16)) ||
        //one and two and four three five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) &&
        (three > 16 && three < 16) && (five > 16 && five < 16)) ||
        //one and two and five three four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (five > 20 && five < 25) &&
        (three > 16 && three < 16) && (four > 16 && four < 16)) ||
        //one and three and four two five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (two > 16 && two < 16) && (five > 16 && five < 16)) ||
        //one and three and two four
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (two > 16 && two < 16) && (four > 16 && four < 16)) ||
        //one and four and five two three
        ((one > 20 && one < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (two > 16 && two < 16) && (three > 16 && three < 16)) ||
        //two and three and four one five
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (one > 16 && one < 16) && (five > 16 && five < 16)) ||
        //two and three and five one four
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (one > 16 && one < 16) && (four > 16 && four < 16)) ||
        //two and four and five one three
        ((two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 16 && one < 16) && (three > 16 && three < 16)) ||
        //three and four and five one two
        ((three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 16 && one < 16) && (two > 16 && two < 16)) ||
        //triple of Aces and Queens
        //one and two and three four five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) &&
        (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and two and four three five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) &&
        (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and five three four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (five > 20 && five < 25) &&
        (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and three and four two five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //one and three and two four
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (two > 12 && two < 17) && (four > 12 && four < 17)) ||
        //one and four and five two three
        ((one > 20 && one < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (two > 12 && two < 17) && (three > 12 && three < 17)) ||
        //two and three and four one five
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two and three and five one four
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (one > 12 && one < 17) && (four > 12 && four < 17)) ||
        //two and four and five one three
        ((two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 12 && one < 17) && (three > 12 && three < 17)) ||
        //three and four and five one two
        ((three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 12 && one < 17) && (two > 12 && two < 17)) ||
        //triple of Aces and Jacks
        //one and two and three four five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) &&
        (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and two and four three five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) &&
        (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and five three four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (five > 20 && five < 25) &&
        (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and three and four two five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //one and three and two four
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (two > 8 && two < 13) && (four > 8 && four < 13)) ||
        //one and four and five two three
        ((one > 20 && one < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (two > 8 && two < 13) && (three > 8 && three < 13)) ||
        //two and three and four one five
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two and three and five one four
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (one > 8 && one < 13) && (four > 8 && four < 13)) ||
        //two and four and five one three
        ((two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 8 && one < 13) && (three > 8 && three < 13)) ||
        //three and four and five one two
        ((three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 8 && one < 13) && (two > 8 && two < 13)) ||
        //triple of Aces and 10's
        //one and two and three four five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (five > 20 && five < 25) &&
        (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and three and four two five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //one and three and two four
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (two > 4 && two < 9) && (four > 4 && four < 9)) ||
        //one and four and five two three
        ((one > 20 && one < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (two > 4 && two < 9) && (three > 4 && three < 9)) ||
        //two and three and four one five
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two and three and five one four
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (one > 4 && one < 9) && (four > 4 && four < 9)) ||
        //two and four and five one three
        ((two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 4 && one < 9) && (three > 4 && three < 9)) ||
        //three and four and five one two
        ((three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 4 && one < 9) && (two > 4 && two < 9)) ||
        //triple of Aces and 10's
        //one and two and three four five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (three > 20 && three < 25) &&
        (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and two and four three five
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (four > 20 && four < 25) &&
        (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and five three four
        ((one > 20 && one < 25) && (two > 20 && two < 25) && (five > 20 && five < 25) &&
        (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and three and four two five
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //one and three and two four
        ((one > 20 && one < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (two > 0 && two < 5) && (four > 0 && four < 5)) ||
        //one and four and five two three
        ((one > 20 && one < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (two > 0 && two < 5) && (three > 0 && three < 5)) ||
        //two and three and four one five
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (four > 20 && four < 25) &&
        (one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two and three and five one four
        ((two > 20 && two < 25) && (three > 20 && three < 25) && (five > 20 && five < 25) &&
        (one > 0 && one < 5) && (four > 0 && four < 5)) ||
        //two and four and five one three
        ((two > 20 && two < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 0 && one < 5) && (three > 0 && three < 5)) ||
        //three and four and five one two
        ((three > 20 && three < 25) && (four > 20 && four < 25) && (five > 20 && five < 25) &&
        (one > 0 && one < 5) && (two > 0 && two < 5)) ||
        //triple of Kings and Aces
        //one and two and three four five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) &&
        (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and two and four three five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) &&
        (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and five three four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (five > 16 && five < 21) &&
        (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and three and four two five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //one and three and two four
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (two > 20 && two < 25) && (four > 20 && four < 25)) ||
        //one and four and five two three
        ((one > 16 && one < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (two > 20 && two < 25) && (three > 20 && three < 25)) ||
        //two and three and four one five
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two and three and five one four
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (one > 20 && one < 25) && (four > 20 && four < 25)) ||
        //two and four and five one three
        ((two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 20 && one < 25) && (three > 20 && three < 25)) ||
        //three and four and five one two
        ((three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 20 && one < 25) && (two > 20 && two < 25)) ||
        //triple of Kings and Queens
        //one and two and three four five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) &&
        (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and two and four three five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) &&
        (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and five three four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (five > 16 && five < 21) &&
        (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and three and four two five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //one and three and two four
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (two > 12 && two < 17) && (four > 12 && four < 17)) ||
        //one and four and five two three
        ((one > 16 && one < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (two > 12 && two < 17) && (three > 12 && three < 17)) ||
        //two and three and four one five
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two and three and five one four
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (one > 12 && one < 17) && (four > 12 && four < 17)) ||
        //two and four and five one three
        ((two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 12 && one < 17) && (three > 12 && three < 17)) ||
        //three and four and five one two
        ((three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 12 && one < 17) && (two > 12 && two < 17)) || 
        //triple of Kings and Jacks
        //one and two and three four five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) &&
        (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and two and four three five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) &&
        (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and five three four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (five > 16 && five < 21) &&
        (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and three and four two five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //one and three and two four
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (two > 8 && two < 13) && (four > 8 && four < 13)) ||
        //one and four and five two three
        ((one > 16 && one < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (two > 8 && two < 13) && (three > 8 && three < 13)) ||
        //two and three and four one five
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two and three and five one four
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (one > 8 && one < 13) && (four > 8 && four < 13)) ||
        //two and four and five one three
        ((two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 8 && one < 13) && (three > 8 && three < 13)) ||
        //three and four and five one two
        ((three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 8 && one < 13) && (two > 8 && two < 13)) ||
        //triple of Kings and 10's
        //one and two and three four five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (five > 16 && five < 21) &&
        (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and three and four two five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //one and three and two four
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (two > 4 && two < 9) && (four > 4 && four < 9)) ||
        //one and four and five two three
        ((one > 16 && one < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (two > 4 && two < 9) && (three > 4 && three < 9)) ||
        //two and three and four one five
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two and three and five one four
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (one > 4 && one < 9) && (four > 4 && four < 9)) ||
        //two and four and five one three
        ((two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 4 && one < 9) && (three > 4 && three < 9)) ||
        //three and four and five one two
        ((three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 4 && one < 9) && (two > 4 && two < 9)) ||
        //triple of Kings and 9's
        //one and two and three four five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (three > 16 && three < 21) &&
        (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and two and four three five
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (four > 16 && four < 21) &&
        (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and five three four
        ((one > 16 && one < 21) && (two > 16 && two < 21) && (five > 16 && five < 21) &&
        (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and three and four two five
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //one and three and two four
        ((one > 16 && one < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (two > 0 && two < 5) && (four > 0 && four < 5)) ||
        //one and four and five two three
        ((one > 16 && one < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (two > 0 && two < 5) && (three > 0 && three < 5)) ||
        //two and three and four one five
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (four > 16 && four < 21) &&
        (one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two and three and five one four
        ((two > 16 && two < 21) && (three > 16 && three < 21) && (five > 16 && five < 21) &&
        (one > 0 && one < 5) && (four > 0 && four < 5)) ||
        //two and four and five one three
        ((two > 16 && two < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 0 && one < 5) && (three > 0 && three < 5)) ||
        //three and four and five one two
        ((three > 16 && three < 21) && (four > 16 && four < 21) && (five > 16 && five < 21) &&
        (one > 0 && one < 5) && (two > 0 && two < 5)) ||
        //triple of Quenns and Aces
        //one and two and three four five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) &&
        (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and two and four three five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) &&
        (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and five three four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (five > 12 && five < 17) &&
        (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and three and four two five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //one and three and two four
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (two > 20 && two < 25) && (four > 20 && four < 25)) ||
        //one and four and five two three
        ((one > 12 && one < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (two > 20 && two < 25) && (three > 20 && three < 25)) ||
        //two and three and four one five
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two and three and five one four
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (one > 20 && one < 25) && (four > 20 && four < 25)) ||
        //two and four and five one three
        ((two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 20 && one < 25) && (three > 20 && three < 25)) ||
        //three and four and five one two
        ((three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 20 && one < 25) && (two > 20 && two < 25)) ||
        //triple of Quenns and Kings
        //one and two and three four five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) &&
        (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //one and two and four three five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) &&
        (three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //one and two and five three four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (five > 12 && five < 17) &&
        (three > 16 && three < 21) && (four > 16 && four < 21)) ||
        //one and three and four two five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (two > 16 && two < 21) && (five > 16 && five < 21)) ||
        //one and three and two four
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (two > 16 && two < 21) && (four > 16 && four < 21)) ||
        //one and four and five two three
        ((one > 12 && one < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (two > 16 && two < 21) && (three > 16 && three < 21)) ||
        //two and three and four one five
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (one > 16 && one < 21) && (five > 16 && five < 21)) ||
        //two and three and five one four
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (one > 16 && one < 21) && (four > 16 && four < 21)) ||
        //two and four and five one three
        ((two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 16 && one < 21) && (three > 16 && three < 21)) ||
        //three and four and five one two
        ((three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 16 && one < 21) && (two > 16 && two < 21)) ||
        //triple of Quenns and Jacks
        //one and two and three four five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) &&
        (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and two and four three five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) &&
        (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and five three four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (five > 12 && five < 17) &&
        (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and three and four two five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //one and three and two four
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (two > 8 && two < 13) && (four > 8 && four < 13)) ||
        //one and four and five two three
        ((one > 12 && one < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (two > 8 && two < 13) && (three > 8 && three < 13)) ||
        //two and three and four one five
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two and three and five one four
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (one > 8 && one < 13) && (four > 8 && four < 13)) ||
        //two and four and five one three
        ((two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 8 && one < 13) && (three > 8 && three < 13)) ||
        //three and four and five one two
        ((three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 8 && one < 13) && (two > 8 && two < 13)) ||
        //triple of Quenns and 10's
        //one and two and three four five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (five > 12 && five < 17) &&
        (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and three and four two five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //one and three and two four
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (two > 4 && two < 9) && (four > 4 && four < 9)) ||
        //one and four and five two three
        ((one > 12 && one < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (two > 4 && two < 9) && (three > 4 && three < 9)) ||
        //two and three and four one five
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two and three and five one four
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (one > 4 && one < 9) && (four > 4 && four < 9)) ||
        //two and four and five one three
        ((two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 4 && one < 9) && (three > 4 && three < 9)) ||
        //three and four and five one two
        ((three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 4 && one < 9) && (two > 4 && two < 9)) ||
        //triple of Quenns and 5's
        //one and two and three four five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (three > 12 && three < 17) &&
        (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and two and four three five
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (four > 12 && four < 17) &&
        (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and five three four
        ((one > 12 && one < 17) && (two > 12 && two < 17) && (five > 12 && five < 17) &&
        (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and three and four two five
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //one and three and two four
        ((one > 12 && one < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (two > 0 && two < 5) && (four > 0 && four < 5)) ||
        //one and four and five two three
        ((one > 12 && one < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (two > 0 && two < 5) && (three > 0 && three < 5)) ||
        //two and three and four one five
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (four > 12 && four < 17) &&
        (one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two and three and five one four
        ((two > 12 && two < 17) && (three > 12 && three < 17) && (five > 12 && five < 17) &&
        (one > 0 && one < 5) && (four > 0 && four < 5)) ||
        //two and four and five one three
        ((two > 12 && two < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 0 && one < 5) && (three > 0 && three < 5)) ||
        //three and four and five one two
        ((three > 12 && three < 17) && (four > 12 && four < 17) && (five > 12 && five < 17) &&
        (one > 0 && one < 5) && (two > 0 && two < 5)) ||
        //triple of Jacks and Aces
        //one and two and three four five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) &&
        (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and two and four three five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) &&
        (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and five three four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (five > 8 && five < 13) &&
        (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and three and four two five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //one and three and two four
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (two > 20 && two < 25) && (four > 20 && four < 25)) ||
        //one and four and five two three
        ((one > 8 && one < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (two > 20 && two < 25) && (three > 20 && three < 25)) ||
        //two and three and four one five
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two and three and five one four
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (one > 20 && one < 25) && (four > 20 && four < 25)) ||
        //two and four and five one three
        ((two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 20 && one < 25) && (three > 20 && three < 25)) ||
        //three and four and five one two
        ((three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 20 && one < 25) && (two > 20 && two < 25)) ||
        //triple of Jacks and Kings
        //one and two and three four five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) &&
        (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //one and two and four three five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) &&
        (three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //one and two and five three four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (five > 8 && five < 13) &&
        (three > 16 && three < 21) && (four > 16 && four < 21)) ||
        //one and three and four two five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (two > 16 && two < 21) && (five > 16 && five < 21)) ||
        //one and three and two four
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (two > 16 && two < 21) && (four > 16 && four < 21)) ||
        //one and four and five two three
        ((one > 8 && one < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (two > 16 && two < 21) && (three > 16 && three < 21)) ||
        //two and three and four one five
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (one > 16 && one < 21) && (five > 16 && five < 21)) ||
        //two and three and five one four
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (one > 16 && one < 21) && (four > 16 && four < 21)) ||
        //two and four and five one three
        ((two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 16 && one < 21) && (three > 16 && three < 21)) ||
        //three and four and five one two
        ((three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 16 && one < 21) && (two > 16 && two < 21)) || 
        //triple of Jacks and Quenns
        //one and two and three four five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) &&
        (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and two and four three five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) &&
        (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and five three four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (five > 8 && five < 13) &&
        (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and three and four two five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //one and three and two four
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (two > 12 && two < 17) && (four > 12 && four < 17)) ||
        //one and four and five two three
        ((one > 8 && one < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (two > 12 && two < 17) && (three > 12 && three < 17)) ||
        //two and three and four one five
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two and three and five one four
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (one > 12 && one < 17) && (four > 12 && four < 17)) ||
        //two and four and five one three
        ((two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 12 && one < 17) && (three > 12 && three < 17)) ||
        //three and four and five one two
        ((three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 12 && one < 17) && (two > 12 && two < 17)) ||
        //triple of Jacks and 10's
        //one and two and three four five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (five > 8 && five < 13) &&
        (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and three and four two five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //one and three and two four
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (two > 4 && two < 9) && (four > 4 && four < 9)) ||
        //one and four and five two three
        ((one > 8 && one < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (two > 4 && two < 9) && (three > 4 && three < 9)) ||
        //two and three and four one five
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two and three and five one four
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (one > 4 && one < 9) && (four > 4 && four < 9)) ||
        //two and four and five one three
        ((two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 4 && one < 9) && (three > 4 && three < 9)) ||
        //three and four and five one two
        ((three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 4 && one < 9) && (two > 4 && two < 9)) ||
        //triple of Jacks and 9's
        //one and two and three four five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (three > 8 && three < 13) &&
        (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and two and four three five
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (four > 8 && four < 13) &&
        (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and five three four
        ((one > 8 && one < 13) && (two > 8 && two < 13) && (five > 8 && five < 13) &&
        (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and three and four two five
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //one and three and two four
        ((one > 8 && one < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (two > 0 && two < 5) && (four > 0 && four < 5)) ||
        //one and four and five two three
        ((one > 8 && one < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (two > 0 && two < 5) && (three > 0 && three < 5)) ||
        //two and three and four one five
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (four > 8 && four < 13) &&
        (one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two and three and five one four
        ((two > 8 && two < 13) && (three > 8 && three < 13) && (five > 8 && five < 13) &&
        (one > 0 && one < 5) && (four > 0 && four < 5)) ||
        //two and four and five one three
        ((two > 8 && two < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 0 && one < 5) && (three > 0 && three < 5)) ||
        //three and four and five one two
        ((three > 8 && three < 13) && (four > 8 && four < 13) && (five > 8 && five < 13) &&
        (one > 0 && one < 5) && (two > 0 && two < 5)) || 
        //triple of 10's and Aces's
        //one and two and three four five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) &&
        (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and two and four three five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) &&
        (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and five three four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (five > 4 && five < 9) &&
        (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and three and four two five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //one and three and two four
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (two > 20 && two < 25) && (four > 20 && four < 25)) ||
        //one and four and five two three
        ((one > 4 && one < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (two > 20 && two < 25) && (three > 20 && three < 25)) ||
        //two and three and four one five
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two and three and five one four
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (one > 20 && one < 25) && (four > 20 && four < 25)) ||
        //two and four and five one three
        ((two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 20 && one < 25) && (three > 20 && three < 25)) ||
        //three and four and five one two
        ((three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 20 && one < 25) && (two > 20 && two < 25)) ||
        //triple of 10's and Kings
        //one and two and three four five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) &&
        (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //one and two and four three five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) &&
        (three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //one and two and five three four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (five > 4 && five < 9) &&
        (three > 16 && three < 21) && (four > 16 && four < 21)) ||
        //one and three and four two five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (two > 16 && two < 21) && (five > 16 && five < 21)) ||
        //one and three and two four
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (two > 16 && two < 21) && (four > 16 && four < 21)) ||
        //one and four and five two three
        ((one > 4 && one < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (two > 16 && two < 21) && (three > 16 && three < 21)) ||
        //two and three and four one five
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (one > 16 && one < 21) && (five > 16 && five < 21)) ||
        //two and three and five one four
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (one > 16 && one < 21) && (four > 16 && four < 21)) ||
        //two and four and five one three
        ((two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 16 && one < 21) && (three > 16 && three < 21)) ||
        //three and four and five one two
        ((three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 16 && one < 21) && (two > 16 && two < 21)) ||
        //triple of 10's and Queens
        //one and two and three four five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) &&
        (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and two and four three five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) &&
        (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and five three four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (five > 4 && five < 9) &&
        (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and three and four two five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //one and three and two four
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (two > 12 && two < 17) && (four > 12 && four < 17)) ||
        //one and four and five two three
        ((one > 4 && one < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (two > 12 && two < 17) && (three > 12 && three < 17)) ||
        //two and three and four one five
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two and three and five one four
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (one > 12 && one < 17) && (four > 12 && four < 17)) ||
        //two and four and five one three
        ((two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 12 && one < 17) && (three > 12 && three < 17)) ||
        //three and four and five one two
        ((three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 12 && one < 17) && (two > 12 && two < 17)) ||
        //triple of 10's and Jacks
        //one and two and three four five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) &&
        (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and two and four three five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) &&
        (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and five three four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (five > 4 && five < 9) &&
        (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and three and four two five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //one and three and two four
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (two > 8 && two < 13) && (four > 8 && four < 13)) ||
        //one and four and five two three
        ((one > 4 && one < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (two > 8 && two < 13) && (three > 8 && three < 13)) ||
        //two and three and four one five
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two and three and five one four
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (one > 8 && one < 13) && (four > 8 && four < 13)) ||
        //two and four and five one three
        ((two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 8 && one < 13) && (three > 8 && three < 13)) ||
        //three and four and five one two
        ((three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 8 && one < 13) && (two > 8 && two < 13)) ||
        //triple of 10's and 9's
        //one and two and three four five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (three > 4 && three < 9) &&
        (four > 0 && four < 5) && (five > 0 && five < 5)) ||
        //one and two and four three five
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (four > 4 && four < 9) &&
        (three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //one and two and five three four
        ((one > 4 && one < 9) && (two > 4 && two < 9) && (five > 4 && five < 9) &&
        (three > 0 && three < 5) && (four > 0 && four < 5)) ||
        //one and three and four two five
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //one and three and two four
        ((one > 4 && one < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (two > 0 && two < 5) && (four > 0 && four < 5)) ||
        //one and four and five two three
        ((one > 4 && one < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (two > 0 && two < 5) && (three > 0 && three < 5)) ||
        //two and three and four one five
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (four > 4 && four < 9) &&
        (one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two and three and five one four
        ((two > 4 && two < 9) && (three > 4 && three < 9) && (five > 4 && five < 9) &&
        (one > 0 && one < 5) && (four > 0 && four < 5)) ||
        //two and four and five one three
        ((two > 4 && two < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 0 && one < 5) && (three > 0 && three < 5)) ||
        //three and four and five one two
        ((three > 4 && three < 9) && (four > 4 && four < 9) && (five > 4 && five < 9) &&
        (one > 0 && one < 5) && (two > 0 && two < 5)) ||
        //triple of 5's and Aces
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 20 && four < 25) && (five > 20 && five < 25)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 20 && three < 25) && (four > 20 && four < 25)) ||
        //one and three and four two five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //one and three and two four
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (two > 20 && two < 25) && (four > 20 && four < 25)) ||
        //one and four and five two three
        ((one > 0 && one < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (two > 20 && two < 25) && (three > 20 && three < 25)) ||
        //two and three and four one five
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two and three and five one four
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (one > 20 && one < 25) && (four > 20 && four < 25)) ||
        //two and four and five one three
        ((two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 20 && one < 25) && (three > 20 && three < 25)) ||
        //three and four and five one two
        ((three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 20 && one < 25) && (two > 20 && two < 25)) ||
        //triple of 5's and Kings
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 16 && four < 21) && (five > 16 && five < 21)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 16 && three < 21) && (four > 16 && four < 21)) ||
        //one and three and four two five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (two > 16 && two < 21) && (five > 16 && five < 21)) ||
        //one and three and two four
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (two > 16 && two < 21) && (four > 16 && four < 21)) ||
        //one and four and five two three
        ((one > 0 && one < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (two > 16 && two < 21) && (three > 16 && three < 21)) ||
        //two and three and four one five
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (one > 16 && one < 21) && (five > 16 && five < 21)) ||
        //two and three and five one four
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (one > 16 && one < 21) && (four > 16 && four < 21)) ||
        //two and four and five one three
        ((two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 16 && one < 21) && (three > 16 && three < 21)) ||
        //three and four and five one two
        ((three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 16 && one < 21) && (two > 16 && two < 21)) || 
        //triple of 5's and Queens
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 12 && four < 17) && (five > 12 && five < 17)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 12 && three < 17) && (four > 12 && four < 17)) ||
        //one and three and four two five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //one and three and two four
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (two > 12 && two < 17) && (four > 12 && four < 17)) ||
        //one and four and five two three
        ((one > 0 && one < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (two > 12 && two < 17) && (three > 12 && three < 17)) ||
        //two and three and four one five
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two and three and five one four
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (one > 12 && one < 17) && (four > 12 && four < 17)) ||
        //two and four and five one three
        ((two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 12 && one < 17) && (three > 12 && three < 17)) ||
        //three and four and five one two
        ((three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 12 && one < 17) && (two > 12 && two < 17)) ||
        //triple of 5's and Jacks
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 8 && four < 13) && (five > 8 && five < 13)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 8 && three < 13) && (four > 8 && four < 13)) ||
        //one and three and four two five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //one and three and two four
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (two > 8 && two < 13) && (four > 8 && four < 13)) ||
        //one and four and five two three
        ((one > 0 && one < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (two > 8 && two < 13) && (three > 8 && three < 13)) ||
        //two and three and four one five
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two and three and five one four
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (one > 8 && one < 13) && (four > 8 && four < 13)) ||
        //two and four and five one three
        ((two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 8 && one < 13) && (three > 8 && three < 13)) ||
        //three and four and five one two
        ((three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 8 && one < 13) && (two > 8 && two < 13)) ||
        //triple of 5's and 10's
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 4 && three < 9) && (four > 4 && four < 9)) ||
        //one and three and four two five
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //one and three and two four
        ((one > 0 && one < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (two > 4 && two < 9) && (four > 4 && four < 9)) ||
        //one and four and five two three
        ((one > 0 && one < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (two > 4 && two < 9) && (three > 4 && three < 9)) ||
        //two and three and four one five
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (four > 0 && four < 5) &&
        (one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two and three and five one four
        ((two > 0 && two < 5) && (three > 0 && three < 5) && (five > 0 && five < 5) &&
        (one > 4 && one < 9) && (four > 4 && four < 9)) ||
        //two and four and five one three
        ((two > 0 && two < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 4 && one < 9) && (three > 4 && three < 9)) ||
        //three and four and five one two
        ((three > 0 && three < 5) && (four > 0 && four < 5) && (five > 0 && five < 5) &&
        (one > 4 && one < 9) && (two > 4 && two < 9))){
        document.getElementById('whatsOnHand').textContent = 'Full House';
        }else straight();
};