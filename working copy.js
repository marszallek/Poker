//triple of 5's and 10's
        //one and two and three four five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (three > 0 && three < 5) &&
        (four > 4 && four < 9) && (five > 4 && five < 9)) ||
        //one and two and four three five
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (four > 0 && four < 5) &&
        (three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //one and two and five three four
        ((one > 0 && one < 5) && (two > 0 && two < 5) && (five > 0 && five < 5) &&
        (three > 4 && three < 9) && (four > 4 && four < 9))
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
        (one > 4 && one < 9) && (two > 4 && two < 9)) ||