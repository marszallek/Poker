const straight = () => {
    if(//one two three four five
        ((one > 0 && one < 5) && (two > 4 && two < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //two three four five one
        ((two > 0 && two < 5) && (three > 4 && three < 9) && (four > 8 && four < 13) && (five > 12 && five < 17) &&
        (one > 16 && one < 21)) ||
        //three four five one two
        ((three > 0 && three < 5) && (four > 4 && four < 9) && (five > 8 && five < 13) && (one > 12 && one < 17) &&
        (two > 16 && two < 21)) ||
        //four five one two three
        ((four > 0 && four < 5) && (five > 4 && five < 9) && (one > 8 && one < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five one two three four
        ((five > 0 && five < 5) && (one > 4 && one < 9) && (two > 8 && two < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //one three two four five
        ((one > 0 && one < 5) && (three > 4 && three < 9) && (two > 8 && two < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //one two three five four
        ((one > 0 && one < 5) && (two > 4 && two < 9) && (three > 8 && three < 13) && (five > 12 && five < 17) &&
        (four > 16 && four < 21)) ||
        //two one three four five
        ((two > 0 && two < 5) && (one > 4 && one < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //three two one four five
        ((three > 0 && three < 5) && (two > 4 && two < 9) && (one > 8 && one < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //four two three one five
        ((four > 0 && four < 5) && (two > 4 && two < 9) && (three > 8 && three < 13) && (one > 12 && one < 17) &&
        (five > 16 && five < 21)) ||
        //five two three four one
        ((five > 0 && five < 5) && (two > 4 && two < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (one > 16 && one < 21)) ||
        //four two one three five
        ((four > 0 && four < 5) && (two > 4 && two < 9) && (one > 8 && one < 13) && (three > 12 && three < 17) &&
        (five > 16 && five < 21)) ||
        //four one two five three
        ((four > 0 && four < 5) && (one > 4 && one < 9) && (two > 8 && two < 13) && (five > 12 && five < 17) &&
        (three > 16 && three < 21)) ||
        //one five two three four
        ((one > 0 && one < 5) && (five > 4 && five < 9) && (two > 8 && two < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //three four one five two
        ((three > 0 && three < 5) && (four > 4 && four < 9) && (one > 8 && one < 13) && (five > 12 && five < 17) &&
        (two > 16 && two < 21)) ||
        //one two five four three
        ((one > 0 && one < 5) && (two > 4 && two < 9) && (five > 8 && five < 13) && (four > 12 && four < 17) &&
        (three > 16 && three < 21)) ||
        //two four one five three
        ((two > 0 && two < 5) && (four > 4 && four < 9) && (one > 8 && one < 13) && (five > 12 && five < 17) &&
        (three > 16 && three < 21)) ||
        //five one three four two
        ((five > 0 && five < 5) && (one > 4 && one < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (two > 16 && two < 21)) ||
        //five three two one four
        ((five > 0 && five < 5) && (three > 4 && three < 9) && (two > 8 && two < 13) && (one > 12 && one < 17) &&
        (four > 16 && four < 21)) ||
        //four one three two five
        ((four > 0 && four < 5) && (one > 4 && one < 9) && (three > 8 && three < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five two four three one
        ((five > 0 && five < 5) && (two > 4 && two < 9) && (four > 8 && four < 13) && (three > 12 && three < 17) &&
        (one > 16 && one < 21)) ||
        //five three one four two
        ((five > 0 && five < 5) && (three > 4 && three < 9) && (one > 8 && one < 13) && (four > 12 && four < 17) &&
        (two > 16 && two < 21)) ||
        //four one three five two
        ((four > 0 && four < 5) && (one > 4 && one < 9) && (three > 8 && three < 13) && (five > 12 && five < 17) &&
        (two > 16 && two < 21)) ||
        //three two five four one
        ((three > 0 && three < 5) && (two > 4 && two < 9) && (five > 8 && five < 13) && (four > 12 && four < 17) &&
        (one > 16 && one < 21)) ||
        //four one five three two
        ((four > 0 && four < 5) && (one > 4 && one < 9) && (five > 8 && five < 13) && (three > 12 && three < 17) &&
        (two > 16 && two < 21)) ||
        //two five one three four
        ((two > 0 && two < 5) && (five > 4 && five < 9) && (one > 8 && one < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //one four five two three
        ((one > 0 && one < 5) && (four > 4 && four < 9) && (five > 8 && five < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five one two four three
        ((five > 0 && five < 5) && (one > 4 && one < 9) && (two > 8 && two < 13) && (four > 12 && four < 17) &&
        (three > 16 && three < 21)) ||
        //three five two one four
        ((three > 0 && three < 5) && (five > 4 && five < 9) && (two > 8 && two < 13) && (one > 12 && one < 17) &&
        (four > 16 && four < 21)) ||
        //one two three four five big straits the same amount of money
        ((one > 20 && one < 25) && (two > 4 && two < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //two three four five one
        ((two > 20 && two < 25) && (three > 4 && three < 9) && (four > 8 && four < 13) && (five > 12 && five < 17) &&
        (one > 16 && one < 21)) ||
        //three four five one two
        ((three > 20 && three < 25) && (four > 4 && four < 9) && (five > 8 && five < 13) && (one > 12 && one < 17) &&
        (two > 16 && two < 21)) ||
        //four five one two three
        ((four > 20 && four < 25) && (five > 4 && five < 9) && (one > 8 && one < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five one two three four
        ((five > 20 && five < 25) && (one > 4 && one < 9) && (two > 8 && two < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //one three two four five
        ((one > 20 && one < 25) && (three > 4 && three < 9) && (two > 8 && two < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //one two three five four
        ((one > 20 && one < 25) && (two > 4 && two < 9) && (three > 8 && three < 13) && (five > 12 && five < 17) &&
        (four > 16 && four < 21)) ||
        //two one three four five
        ((two > 20 && two < 25) && (one > 4 && one < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //three two one four five
        ((three > 20 && three < 25) && (two > 4 && two < 9) && (one > 8 && one < 13) && (four > 12 && four < 17) &&
        (five > 16 && five < 21)) ||
        //four two three one five
        ((four > 20 && four < 25) && (two > 4 && two < 9) && (three > 8 && three < 13) && (one > 12 && one < 17) &&
        (five > 16 && five < 21)) ||
        //five two three four one
        ((five > 20 && five < 25) && (two > 4 && two < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (one > 16 && one < 21)) ||
        //four two one three five
        ((four > 20 && four < 25) && (two > 4 && two < 9) && (one > 8 && one < 13) && (three > 12 && three < 17) &&
        (five > 16 && five < 21)) ||
        //four one two five three
        ((four > 20 && four < 25) && (one > 4 && one < 9) && (two > 8 && two < 13) && (five > 12 && five < 17) &&
        (three > 16 && three < 21)) ||
        //one five two three four
        ((one > 20 && one < 25) && (five > 4 && five < 9) && (two > 8 && two < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //three four one five two
        ((three > 20 && three < 25) && (four > 4 && four < 9) && (one > 8 && one < 13) && (five > 12 && five < 17) &&
        (two > 16 && two < 21)) ||
        //one two five four three
        ((one > 20 && one < 25) && (two > 4 && two < 9) && (five > 8 && five < 13) && (four > 12 && four < 17) &&
        (three > 16 && three < 21)) ||
        //two four one five three
        ((two > 20 && two < 25) && (four > 4 && four < 9) && (one > 8 && one < 13) && (five > 12 && five < 17) &&
        (three > 16 && three < 21)) ||
        //five one three four two
        ((five > 20 && five < 25) && (one > 4 && one < 9) && (three > 8 && three < 13) && (four > 12 && four < 17) &&
        (two > 16 && two < 21)) ||
        //five three two one four
        ((five > 20 && five < 25) && (three > 4 && three < 9) && (two > 8 && two < 13) && (one > 12 && one < 17) &&
        (four > 16 && four < 21)) ||
        //four one three two five
        ((four > 20 && four < 25) && (one > 4 && one < 9) && (three > 8 && three < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five two four three one
        ((five > 20 && five < 25) && (two > 4 && two < 9) && (four > 8 && four < 13) && (three > 12 && three < 17) &&
        (one > 16 && one < 21)) ||
        //five three one four two
        ((five > 20 && five < 25) && (three > 4 && three < 9) && (one > 8 && one < 13) && (four > 12 && four < 17) &&
        (two > 16 && two < 21)) ||
        //three two five four one  
        ((three > 20 && three < 25) && (two > 4 && two < 9) && (five > 8 && five < 13) && (four > 12 && four < 17) &&
        (one > 16 && one < 21)) ||
        //four one three five two 
        ((four > 20 && four < 25) && (one > 4 && one < 9) && (three > 8 && three < 13) && (five > 12 && five < 17) &&
        (two > 16 && two < 21)) ||
        //four one five three two
        ((four > 20 && four < 25) && (one > 4 && one < 9) && (five > 8 && five < 13) && (three > 12 && three < 17) &&
        (two > 16 && two < 21)) ||
        //two five one three four
        ((two > 20 && two < 25) && (five > 4 && five < 9) && (one > 8 && one < 13) && (three > 12 && three < 17) &&
        (four > 16 && four < 21)) ||
        //one four five two three
        ((one > 20 && one < 25) && (four > 4 && four < 9) && (five > 8 && five < 13) && (two > 12 && two < 17) &&
        (three > 16 && three < 21)) ||
        //five one two four three
        ((five > 20 && five < 25) && (one > 4 && one < 9) && (two > 8 && two < 13) && (four > 12 && four < 17) &&
        (three > 16 && three < 21)) ||
        //three five two one four
        ((three > 20 && three < 25) && (five > 4 && five < 9) && (two > 8 && two < 13) && (one > 12 && one < 17) &&
        (four > 16 && four < 21))){
        document.getElementById('whatsOnHand').textContent = 'Straight';
    }else threeOfAKind();
}
