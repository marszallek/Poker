const straightFlushBig = () => {
    //Straight Flush Of Hearts
    //one two three four five
    if ((one === 24 && two === 8 && three === 12 && four === 16 && five === 20) ||
    //two three four five one
    (two === 24 && three === 8 && four === 12 && five === 16 && one === 20) ||
    //two three four one five 
    (two === 24 && three === 8 && four === 12 && one === 16 && five === 20) ||
    //three four five one two
    (three === 24 && four === 8 && five === 12 && one === 16 && two === 20) ||
    //three four five two one 
    (three === 24 && four === 8 && five === 12 && two === 16 && one === 20) ||
    //four five one two three
    (four === 24 && five === 8 && one === 12 && two === 16 && three === 20) ||
    //five one two three four
    (five === 24 && one === 8 && two === 12 && three === 16 && four === 20) ||
    //one three two four five
    (one === 24 && three === 8 && two === 12 && four === 16 && five === 20) ||
    //one two three five four
    (one === 24 && two === 8 && three === 12 && five === 16 && four === 20) ||
    //two one three four five
    (two === 24 && one === 8 && three === 12 && four === 16 && five === 20) ||
    //two one three five four 
    (two === 24 && one === 8 && three === 12 && five === 16 && five === 20) ||
    //three two one four five
    (three === 24 && two === 8 && one === 12 && four === 16 && five === 20) ||
    //three two one five four
    (three === 24 && two === 8 && one === 12 && five === 16 && four === 20) ||
    //four two three one five
    (four === 24 && two === 8 && three === 12 && one === 16 && five === 20) ||
    //four two three five one
    (four === 24 && two === 8 && three === 12 && five === 16 && one === 20) ||
    //five two three four one
    (five === 24 && two === 8 && three === 12 && four === 16 && one === 20) ||
    //five two three one four
    (five === 24 && two === 8 && three === 12 && one === 16 && four === 20) ||
    //four two one three five
    (four === 24 && two === 8 && one === 12 && three === 16 && five === 20) ||
    //four one two five three
    (four === 24 && one === 8 && two === 12 && five === 16 && three === 20) ||
    //one five two three four
    (one === 24 && five === 8 && two === 12 && three === 16 && four === 20) ||
    //three four one five two
    (three === 24 && four === 8 && one === 12 && five === 16 && two === 20) ||
    //three four one two five
    (three === 24 && four === 8 && one === 12 && two === 16 && five === 20) ||
    //one two five four three
    (one === 24 && two === 8 && five === 12 && four === 16 && three === 20) ||
    //one two five three four
    (one === 24 && two === 8 && five === 12 && three === 16 && four === 20) ||
    //two four one five three
    (two === 24 && four === 8 && one === 12 && five === 16 && three === 20) ||
    //two four one three five
    (two === 24 && four === 8 && one === 12 && three === 16 && five === 20) ||
    //five one three four two
    (five === 24 && one === 8 && three === 12 && four === 16 && two === 20) ||
    //five three two one four
    (five === 24 && three === 8 && two === 12 && one === 16 && four === 20) ||
    //five three two four one
    (five === 24 && three === 8 && two === 12 && four === 16 && one === 20) ||
    //four one three two five
    (four === 24 && one === 8 && three === 12 && two === 16 && five === 20) ||
    //five two four three one
    (five === 24 && two === 8 && four === 12 && three === 16 && one === 20) ||
    //five two four one three
    (five === 24 && two === 8 && four === 12 && one === 16 && three === 20) ||
    //five three one four two
    (five === 24 && three === 8 && one === 12 && four === 16 && two === 20) ||
    //five three one two four
    (five === 24 && three === 8 && one === 12 && two === 16 && four === 20) ||
    //four one three five two
    (four === 24 && one === 8 && three === 12 && five === 16 && two === 20) ||
    //three two five four one
    (three === 24 && two === 8 && five === 12 && four === 16 && one === 20) ||
    //three two five one four
    (three === 24 && two === 8 && five === 12 && one === 16 && four === 20) ||
    //four one five three two
    (four === 24 && one === 8 && five === 12 && three === 16 && two === 20) ||
    //four one five two three
    (four === 24 && one === 8 && five === 12 && two === 16 && three === 20) ||
    //one four five two three
    (one === 24 && four === 8 && five === 12 && two === 16 && three === 20) ||
    //five one two four three
    (five === 24 && one === 8 && two === 12 && four === 16 && three === 20) ||
    //three five two one four
    (three === 24 && five === 8 && two === 12 && one === 16 && four === 20) ||
    //three five two four one
    (three === 24 && five === 8 && two === 12 && four === 16 && one === 20) ||
    //two one five three four 
    (two === 24 && one === 8 && five === 12 && three === 16 && four === 20) ||
    //two one five four three
    (two === 24 && one === 8 && five === 12 && four === 16 && three === 20) ||
    //four five one three two
    (four === 24 && five === 8 && one === 12 && three === 16 && two === 20) ||
    //five four three one two
    (five === 24 && four === 8 && three === 12 && one === 16 && two === 20) ||
    //five four three two one
    (five === 24 && four === 8 && three === 12 && two === 16 && one === 20) ||
    //four five three one two
    (four === 24 && five === 8 && three === 12 && one === 16 && two === 20) ||
    //four five three two one
    (four === 24 && five === 8 && three === 12 && two === 16 && one === 20) ||
    //five one three two four
    (five === 24 && one === 8 && three === 12 && two === 16 && four === 20) ||
    //one three five two four
    (one === 24 && three === 8 && five === 12 && two === 16 && four === 20) ||
    //one three five four two
    (one === 24 && three === 8 && five === 12 && four === 16 && two === 20) ||
    //one four five three two
    (one === 24 && four === 8 && five === 12 && three === 16 && two === 20) ||
    //one five three two four
    (one === 24 && five === 8 && three === 12 && two === 16 && four === 20) ||
    //one five three four two
    (one === 24 && five === 8 && three === 12 && four === 16 && two === 20) ||
    //one five two four three
    (one === 24 && five === 8 && two === 12 && four === 16 && three === 20) ||
    //one five four two three
    (one === 24 && five === 8 && four === 12 && two === 16 && three === 20) ||
    //one five four three two
    (one === 24 && five === 8 && four === 12 && three === 16 && two === 20) ||
    //two one four five three
    (two === 24 && one === 8 && four === 12 && five === 16 && three === 20) ||
    //two one four three five
    (two === 24 && one === 8 && four === 12 && three === 16 && five === 20) ||
    //one three two five four
    (one === 24 && three === 8 && two === 12 && five === 16 && five === 20) ||
    //five four one three two
    (five === 24 && four === 8 && one === 12 && three === 16 && two === 20) ||
    //five four one two three
    (five === 24 && four === 8 && one === 12 && two === 16 && three === 20) ||
    //two five four one three
    (two === 24 && five === 8 && four === 12 && one === 16 && three === 20) ||
    //two five four three one
    (two === 24 && five === 8 && four === 12 && three === 16 && one === 20) ||
    //two five one three four
    (two === 24 && five === 8 && one === 12 && three === 16 && four === 20) ||
    //two five one four three
    (two === 24 && five === 8 && one === 12 && four === 16 && three === 20) ||
    //two five three one four
    (two === 24 && five === 8 && three === 12 && one === 16 && four === 20) ||
    //two five three four one
    (two === 24 && five === 8 && three === 12 && four === 16 && one === 20) ||
    //one two four three five
    (one === 24 && two === 8 && four === 12 && three === 16 && five === 20) ||
    //one two four five three
    (one === 24 && two === 8 && four === 12 && five === 16 && three === 20) ||
    //four five two three one
    (four === 24 && five === 8 && two === 12 && three === 16 && one === 20) ||
    //four five two one three
    (four === 24 && five === 8 && two === 12 && one === 16 && three === 20) ||
    //four three one two five
    (four === 24 && three === 8 && one === 12 && two === 16 && five === 20) ||
    //four three one five two
    (four === 24 && three === 8 && one === 12 && five === 16 && two === 20) ||
    //four three two one five
    (four === 24 && three === 8 && two === 12 && one === 16 && five === 20) ||
    //four three two five one
    (four === 24 && three === 8 && two === 12 && five === 16 && one === 20) ||
    //four three five two one
    (four === 24 && three === 8 && five === 12 && two === 16 && one === 20) ||
    //four three five one two
    (four === 24 && three === 8 && five === 12 && one === 16 && two === 20) ||
    //four one two three five
    (four === 24 && one === 8 && two === 12 && three === 16 && five === 20) ||
    //one four three two five
    (one === 24 && four === 8 && three === 12 && two === 16 && five === 20) ||
    //one four three five two
    (one === 24 && four === 8 && three === 12 && five === 16 && two === 20) ||
    //one four two three five
    (one === 24 && four === 8 && two === 12 && three === 16 && five === 20) ||
    //one four two five three
    (one === 24 && four === 8 && two === 12 && five === 16 && three === 20) ||
    //three one two four five
    (three === 24 && one === 8 && two === 12 && four === 16 && five === 20) ||
    //three one two five four
    (three === 24 && one === 8 && two === 12 && five === 16 && four === 20) ||
    //three one four two five
    (three === 24 && one === 8 && four === 12 && two === 16 && five === 20) ||
    //three one four five two
    (three === 24 && one === 8 && four === 12 && five === 16 && two === 20) ||
    //three one five four two
    (three === 24 && one === 8 && five === 12 && four === 16 && two === 20) ||
    //three one five two four
    (three === 24 && one === 8 && five === 12 && two === 16 && four === 20) ||
    //three four two one five
    (three === 24 && four === 8 && two === 12 && one === 16 && five === 20) ||
    //three four two five one
    (three === 24 && four === 8 && two === 12 && five === 16 && one === 20) ||
    //five four two three one
    (five === 24 && four === 8 && two === 12 && three === 16 && one === 20) ||
    //five four two one three
    (five === 24 && four === 8 && two === 12 && one === 16 && three === 20) ||
    //four two five one three
    (four === 24 && two === 8 && five === 12 && one === 16 && three === 20) ||
    //four two five three one
    (four === 24 && two === 8 && five === 12 && three === 16 && one === 20) ||
    //one three four five two
    (one === 24 && three === 8 && four === 12 && five === 16 && two === 20) ||
    //one three four two five
    (one === 24 && three === 8 && four === 12 && two === 16 && five === 20) ||
    //three five one two four
    (three === 24 && five === 8 && one === 12 && two === 16 && four === 20) ||
    //three five one four two
    (three === 24 && five === 8 && one === 12 && four === 16 && two === 20) ||
    //three five four one two
    (three === 24 && five === 8 && four === 12 && one === 16 && two === 20) ||
    //three five four two one
    (three === 24 && five === 8 && four === 12 && two === 16 && one === 20) ||
    //two four three one five 
    (two === 24 && four === 8 && three === 12 && one === 16 && five === 20) ||
    //two four three five one
    (two === 24 && four === 8 && three === 12 && five === 16 && one === 20) ||
    //two four five three one
    (two === 24 && four === 8 && five === 12 && three === 16 && one === 20) ||
    //two four five one three
    (two === 24 && four === 8 && five === 12 && one === 16 && three === 20) ||
    //five one four two three
    (five === 24 && one === 8 && four === 12 && two === 16 && three === 20) ||
    //five one four three two
    (five === 24 && one === 8 && four === 12 && three === 16 && two === 20) ||
    //two three one five four
    (two === 24 && three === 8 && one === 12 && five === 16 && four === 20) ||
    //two three one four five
    (two === 24 && three === 8 && one === 12 && four === 16 && five === 20) ||
    //two three five four one
    (two === 24 && three === 8 && five === 12 && four === 16 && one === 20) ||
    //two three five one four
    (two === 24 && three === 8 && five === 12 && one === 16 && four === 20) ||
    //three two four five one
    (three === 24 && two === 8 && four === 12 && five === 16 && one === 20) ||
    //three two four one five
    (three === 24 && two === 8 && four === 12 && one === 16 && five === 20) ||
    //five three four two one
    (five === 24 && three === 8 && four === 12 && two === 16 && one === 20) ||
    //five three four one two
    (five === 24 && three === 8 && four === 12 && one === 16 && two === 20) ||
    //five two one three four
    (five === 24 && two === 8 && one === 12 && three === 16 && four === 20) ||
    //five two one four three
    (five === 24 && two === 8 && one === 12 && four === 16 && three === 20) ||
    //StraightFlush Diamonds 
    //one two three four five
    (one === 23 && two === 7 && three === 11 && four === 15 && five === 19) ||
    //two three four five one
    (two === 23 && three === 7 && four === 11 && five === 15 && one === 19) ||
    //two three four one five 
    (two === 23 && three === 7 && four === 11 && one === 15 && five === 19) ||
    //three four five one two
    (three === 23 && four === 7 && five === 11 && one === 15 && two === 19) ||
    //three four five two one 
    (three === 23 && four === 7 && five === 11 && two === 15 && one === 19) ||
    //four five one two three
    (four === 23 && five === 7 && one === 11 && two === 15 && three === 19) ||
    //five one two three four
    (five === 23 && one === 7 && two === 11 && three === 15 && four === 19) ||
    //one three two four five
    (one === 23 && three === 7 && two === 11 && four === 15 && five === 19) ||
    //one two three five four
    (one === 23 && two === 7 && three === 11 && five === 15 && four === 19) ||
    //two one three four five
    (two === 23 && one === 7 && three === 11 && four === 15 && five === 19) ||
    //two one three five four 
    (two === 23 && one === 7 && three === 11 && five === 15 && five === 19) ||
    //three two one four five
    (three === 23 && two === 7 && one === 11 && four === 15 && five === 19) ||
    //three two one five four
    (three === 23 && two === 7 && one === 11 && five === 15 && four === 19) ||
    //four two three one five
    (four === 23 && two === 7 && three === 11 && one === 15 && five === 19) ||
    //four two three five one
    (four === 23 && two === 7 && three === 11 && five === 15 && one === 19) ||
    //five two three four one
    (five === 23 && two === 7 && three === 11 && four === 15 && one === 19) ||
    //five two three one four
    (five === 23 && two === 7 && three === 11 && one === 15 && four === 19) ||
    //four two one three five
    (four === 23 && two === 7 && one === 11 && three === 15 && five === 19) ||
    //four one two five three
    (four === 23 && one === 7 && two === 11 && five === 15 && three === 19) ||
    //one five two three four
    (one === 23 && five === 7 && two === 11 && three === 15 && four === 19) ||
    //three four one five two
    (three === 23 && four === 7 && one === 11 && five === 15 && two === 19) ||
    //three four one two five
    (three === 23 && four === 7 && one === 11 && two === 15 && five === 19) ||
    //one two five four three
    (one === 23 && two === 7 && five === 11 && four === 15 && three === 19) ||
    //one two five three four
    (one === 23 && two === 7 && five === 11 && three === 15 && four === 19) ||
    //two four one five three
    (two === 23 && four === 7 && one === 11 && five === 15 && three === 19) ||
    //two four one three five
    (two === 23 && four === 7 && one === 11 && three === 15 && five === 19) ||
    //five one three four two
    (five === 23 && one === 7 && three === 11 && four === 15 && two === 19) ||
    //five three two one four
    (five === 23 && three === 7 && two === 11 && one === 15 && four === 19) ||
    //five three two four one
    (five === 23 && three === 7 && two === 11 && four === 15 && one === 19) ||
    //four one three two five
    (four === 23 && one === 7 && three === 11 && two === 15 && five === 19) ||
    //five two four three one
    (five === 23 && two === 7 && four === 11 && three === 15 && one === 19) ||
    //five two four one three
    (five === 23 && two === 7 && four === 11 && one === 15 && three === 19) ||
    //five three one four two
    (five === 23 && three === 7 && one === 11 && four === 15 && two === 19) ||
    //five three one two four
    (five === 23 && three === 7 && one === 11 && two === 15 && four === 19) ||
    //four one three five two
    (four === 23 && one === 7 && three === 11 && five === 15 && two === 19) ||
    //three two five four one
    (three === 23 && two === 7 && five === 11 && four === 15 && one === 19) ||
    //three two five one four
    (three === 23 && two === 7 && five === 11 && one === 15 && four === 19) ||
    //four one five three two
    (four === 23 && one === 7 && five === 11 && three === 15 && two === 19) ||
    //four one five two three
    (four === 23 && one === 7 && five === 11 && two === 15 && three === 19) ||
    //one four five two three
    (one === 23 && four === 7 && five === 11 && two === 15 && three === 19) ||
    //five one two four three
    (five === 23 && one === 7 && two === 11 && four === 15 && three === 19) ||
    //three five two one four
    (three === 23 && five === 7 && two === 11 && one === 15 && four === 19) ||
    //three five two four one
    (three === 23 && five === 7 && two === 11 && four === 15 && one === 19) ||
    //two one five three four 
    (two === 23 && one === 7 && five === 11 && three === 15 && four === 19) ||
    //two one five four three
    (two === 23 && one === 7 && five === 11 && four === 15 && three === 19) ||
    //four five one three two
    (four === 23 && five === 7 && one === 11 && three === 15 && two === 19) ||
    //five four three one two
    (five === 23 && four === 7 && three === 11 && one === 15 && two === 19) ||
    //five four three two one
    (five === 23 && four === 7 && three === 11 && two === 15 && one === 19) ||
    //four five three one two
    (four === 23 && five === 7 && three === 11 && one === 15 && two === 19) ||
    //four five three two one
    (four === 23 && five === 7 && three === 11 && two === 15 && one === 19) ||
    //five one three two four
    (five === 23 && one === 7 && three === 11 && two === 15 && four === 19) ||
    //one three five two four
    (one === 23 && three === 7 && five === 11 && two === 15 && four === 19) ||
    //one three five four two
    (one === 23 && three === 7 && five === 11 && four === 15 && two === 19) ||
    //one four five three two
    (one === 23 && four === 7 && five === 11 && three === 15 && two === 19) ||
    //one five three two four
    (one === 23 && five === 7 && three === 11 && two === 15 && four === 19) ||
    //one five three four two
    (one === 23 && five === 7 && three === 11 && four === 15 && two === 19) ||
    //one five two four three
    (one === 23 && five === 7 && two === 11 && four === 15 && three === 19) ||
    //one five four two three
    (one === 23 && five === 7 && four === 11 && two === 15 && three === 19) ||
    //one five four three two
    (one === 23 && five === 7 && four === 11 && three === 15 && two === 19) ||
    //two one four five three
    (two === 23 && one === 7 && four === 11 && five === 15 && three === 19) ||
    //two one four three five
    (two === 23 && one === 7 && four === 11 && three === 15 && five === 19) ||
    //one three two five four
    (one === 23 && three === 7 && two === 11 && five === 15 && five === 19) ||
    //five four one three two
    (five === 23 && four === 7 && one === 11 && three === 15 && two === 19) ||
    //five four one two three
    (five === 23 && four === 7 && one === 11 && two === 15 && three === 19) ||
    //two five four one three
    (two === 23 && five === 7 && four === 11 && one === 15 && three === 19) ||
    //two five four three one
    (two === 23 && five === 7 && four === 11 && three === 15 && one === 19) ||
    //two five one three four
    (two === 23 && five === 7 && one === 11 && three === 15 && four === 19) ||
    //two five one four three
    (two === 23 && five === 7 && one === 11 && four === 15 && three === 19) ||
    //two five three one four
    (two === 23 && five === 7 && three === 11 && one === 15 && four === 19) ||
    //two five three four one
    (two === 23 && five === 7 && three === 11 && four === 15 && one === 19) ||
    //one two four three five
    (one === 23 && two === 7 && four === 11 && three === 15 && five === 19) ||
    //one two four five three
    (one === 23 && two === 7 && four === 11 && five === 15 && three === 19) ||
    //four five two three one
    (four === 23 && five === 7 && two === 11 && three === 15 && one === 19) ||
    //four five two one three
    (four === 23 && five === 7 && two === 11 && one === 15 && three === 19) ||
    //four three one two five
    (four === 23 && three === 7 && one === 11 && two === 15 && five === 19) ||
    //four three one five two
    (four === 23 && three === 7 && one === 11 && five === 15 && two === 19) ||
    //four three two one five
    (four === 23 && three === 7 && two === 11 && one === 15 && five === 19) ||
    //four three two five one
    (four === 23 && three === 7 && two === 11 && five === 15 && one === 19) ||
    //four three five two one
    (four === 23 && three === 7 && five === 11 && two === 15 && one === 19) ||
    //four three five one two
    (four === 23 && three === 7 && five === 11 && one === 15 && two === 19) ||
    //four one two three five
    (four === 23 && one === 7 && two === 11 && three === 15 && five === 19) ||
    //one four three two five
    (one === 23 && four === 7 && three === 11 && two === 15 && five === 19) ||
    //one four three five two
    (one === 23 && four === 7 && three === 11 && five === 15 && two === 19) ||
    //one four two three five
    (one === 23 && four === 7 && two === 11 && three === 15 && five === 19) ||
    //one four two five three
    (one === 23 && four === 7 && two === 11 && five === 15 && three === 19) ||
    //three one two four five
    (three === 23 && one === 7 && two === 11 && four === 15 && five === 19) ||
    //three one two five four
    (three === 23 && one === 7 && two === 11 && five === 15 && four === 19) ||
    //three one four two five
    (three === 23 && one === 7 && four === 11 && two === 15 && five === 19) ||
    //three one four five two
    (three === 23 && one === 7 && four === 11 && five === 15 && two === 19) ||
    //three one five four two
    (three === 23 && one === 7 && five === 11 && four === 15 && two === 19) ||
    //three one five two four
    (three === 23 && one === 7 && five === 11 && two === 15 && four === 19) ||
    //three four two one five
    (three === 23 && four === 7 && two === 11 && one === 15 && five === 19) ||
    //three four two five one
    (three === 23 && four === 7 && two === 11 && five === 15 && one === 19) ||
    //five four two three one
    (five === 23 && four === 7 && two === 11 && three === 15 && one === 19) ||
    //five four two one three
    (five === 23 && four === 7 && two === 11 && one === 15 && three === 19) ||
    //four two five one three
    (four === 23 && two === 7 && five === 11 && one === 15 && three === 19) ||
    //four two five three one
    (four === 23 && two === 7 && five === 11 && three === 15 && one === 19) ||
    //one three four five two
    (one === 23 && three === 7 && four === 11 && five === 15 && two === 19) ||
    //one three four two five
    (one === 23 && three === 7 && four === 11 && two === 15 && five === 19) ||
    //three five one two four
    (three === 23 && five === 7 && one === 11 && two === 15 && four === 19) ||
    //three five one four two
    (three === 23 && five === 7 && one === 11 && four === 15 && two === 19) ||
    //three five four one two
    (three === 23 && five === 7 && four === 11 && one === 15 && two === 19) ||
    //three five four two one
    (three === 23 && five === 7 && four === 11 && two === 15 && one === 19) ||
    //two four three one five 
    (two === 23 && four === 7 && three === 11 && one === 15 && five === 19) ||
    //two four three five one
    (two === 23 && four === 7 && three === 11 && five === 15 && one === 19) ||
    //two four five three one
    (two === 23 && four === 7 && five === 11 && three === 15 && one === 19) ||
    //two four five one three
    (two === 23 && four === 7 && five === 11 && one === 15 && three === 19) ||
    //five one four two three
    (five === 23 && one === 7 && four === 11 && two === 15 && three === 19) ||
    //five one four three two
    (five === 23 && one === 7 && four === 11 && three === 15 && two === 19) ||
    //two three one five four
    (two === 23 && three === 7 && one === 11 && five === 15 && four === 19) ||
    //two three one four five
    (two === 23 && three === 7 && one === 11 && four === 15 && five === 19) ||
    //two three five four one
    (two === 23 && three === 7 && five === 11 && four === 15 && one === 19) ||
    //two three five one four
    (two === 23 && three === 7 && five === 11 && one === 15 && four === 19) ||
    //three two four five one
    (three === 23 && two === 7 && four === 11 && five === 15 && one === 19) ||
    //three two four one five
    (three === 23 && two === 7 && four === 11 && one === 15 && five === 19) ||
    //five three four two one
    (five === 23 && three === 7 && four === 11 && two === 15 && one === 19) ||
    //five three four one two
    (five === 23 && three === 7 && four === 11 && one === 15 && two === 19) ||
    //five two one three four
    (five === 23 && two === 7 && one === 11 && three === 15 && four === 19) ||
    //five two one four three
    (five === 23 && two === 7 && one === 11 && four === 15 && three === 19) ||
    //StraightFlush Clubs
    //one two three four five
    (one === 22 && two === 6 && three === 10 && four === 14 && five === 18) ||
    //two three four five one
    (two === 22 && three === 6 && four === 10 && five === 14 && one === 18) ||
    //two three four one five 
    (two === 22 && three === 6 && four === 10 && one === 14 && five === 18) ||
    //three four five one two
    (three === 22 && four === 6 && five === 10 && one === 14 && two === 18) ||
    //three four five two one 
    (three === 22 && four === 6 && five === 10 && two === 14 && one === 18) ||
    //four five one two three
    (four === 22 && five === 6 && one === 10 && two === 14 && three === 18) ||
    //five one two three four
    (five === 22 && one === 6 && two === 10 && three === 14 && four === 18) ||
    //one three two four five
    (one === 22 && three === 6 && two === 10 && four === 14 && five === 18) ||
    //one two three five four
    (one === 22 && two === 6 && three === 10 && five === 14 && four === 18) ||
    //two one three four five
    (two === 22 && one === 6 && three === 10 && four === 14 && five === 18) ||
    //two one three five four 
    (two === 22 && one === 6 && three === 10 && five === 14 && five === 18) ||
    //three two one four five
    (three === 22 && two === 6 && one === 10 && four === 14 && five === 18) ||
    //three two one five four
    (three === 22 && two === 6 && one === 10 && five === 14 && four === 18) ||
    //four two three one five
    (four === 22 && two === 6 && three === 10 && one === 14 && five === 18) ||
    //four two three five one
    (four === 22 && two === 6 && three === 10 && five === 14 && one === 18) ||
    //five two three four one
    (five === 22 && two === 6 && three === 10 && four === 14 && one === 18) ||
    //five two three one four
    (five === 22 && two === 6 && three === 10 && one === 14 && four === 18) ||
    //four two one three five
    (four === 22 && two === 6 && one === 10 && three === 14 && five === 18) ||
    //four one two five three
    (four === 22 && one === 6 && two === 10 && five === 14 && three === 18) ||
    //one five two three four
    (one === 22 && five === 6 && two === 10 && three === 14 && four === 18) ||
    //three four one five two
    (three === 22 && four === 6 && one === 10 && five === 14 && two === 18) ||
    //three four one two five
    (three === 22 && four === 6 && one === 10 && two === 14 && five === 18) ||
    //one two five four three
    (one === 22 && two === 6 && five === 10 && four === 14 && three === 18) ||
    //one two five three four
    (one === 22 && two === 6 && five === 10 && three === 14 && four === 18) ||
    //two four one five three
    (two === 22 && four === 6 && one === 10 && five === 14 && three === 18) ||
    //two four one three five
    (two === 22 && four === 6 && one === 10 && three === 14 && five === 18) ||
    //five one three four two
    (five === 22 && one === 6 && three === 10 && four === 14 && two === 18) ||
    //five three two one four
    (five === 22 && three === 6 && two === 10 && one === 14 && four === 18) ||
    //five three two four one
    (five === 22 && three === 6 && two === 10 && four === 14 && one === 18) ||
    //four one three two five
    (four === 22 && one === 6 && three === 10 && two === 14 && five === 18) ||
    //five two four three one
    (five === 22 && two === 6 && four === 10 && three === 14 && one === 18) ||
    //five two four one three
    (five === 22 && two === 6 && four === 10 && one === 14 && three === 18) ||
    //five three one four two
    (five === 22 && three === 6 && one === 10 && four === 14 && two === 18) ||
    //five three one two four
    (five === 22 && three === 6 && one === 10 && two === 14 && four === 18) ||
    //four one three five two
    (four === 22 && one === 6 && three === 10 && five === 14 && two === 18) ||
    //three two five four one
    (three === 22 && two === 6 && five === 10 && four === 14 && one === 18) ||
    //three two five one four
    (three === 22 && two === 6 && five === 10 && one === 14 && four === 18) ||
    //four one five three two
    (four === 22 && one === 6 && five === 10 && three === 14 && two === 18) ||
    //four one five two three
    (four === 22 && one === 6 && five === 10 && two === 14 && three === 18) ||
    //one four five two three
    (one === 22 && four === 6 && five === 10 && two === 14 && three === 18) ||
    //five one two four three
    (five === 22 && one === 6 && two === 10 && four === 14 && three === 18) ||
    //three five two one four
    (three === 22 && five === 6 && two === 10 && one === 14 && four === 18) ||
    //three five two four one
    (three === 22 && five === 6 && two === 10 && four === 14 && one === 18) ||
    //two one five three four 
    (two === 22 && one === 6 && five === 10 && three === 14 && four === 18) ||
    //two one five four three
    (two === 22 && one === 6 && five === 10 && four === 14 && three === 18) ||
    //four five one three two
    (four === 22 && five === 6 && one === 10 && three === 14 && two === 18) ||
    //five four three one two
    (five === 22 && four === 6 && three === 10 && one === 14 && two === 18) ||
    //five four three two one
    (five === 22 && four === 6 && three === 10 && two === 14 && one === 18) ||
    //four five three one two
    (four === 22 && five === 6 && three === 10 && one === 14 && two === 18) ||
    //four five three two one
    (four === 22 && five === 6 && three === 10 && two === 14 && one === 18) ||
    //five one three two four
    (five === 22 && one === 6 && three === 10 && two === 14 && four === 18) ||
    //one three five two four
    (one === 22 && three === 6 && five === 10 && two === 14 && four === 18) ||
    //one three five four two
    (one === 22 && three === 6 && five === 10 && four === 14 && two === 18) ||
    //one four five three two
    (one === 22 && four === 6 && five === 10 && three === 14 && two === 18) ||
    //one five three two four
    (one === 22 && five === 6 && three === 10 && two === 14 && four === 18) ||
    //one five three four two
    (one === 22 && five === 6 && three === 10 && four === 14 && two === 18) ||
    //one five two four three
    (one === 22 && five === 6 && two === 10 && four === 14 && three === 18) ||
    //one five four two three
    (one === 22 && five === 6 && four === 10 && two === 14 && three === 18) ||
    //one five four three two
    (one === 22 && five === 6 && four === 10 && three === 14 && two === 18) ||
    //two one four five three
    (two === 22 && one === 6 && four === 10 && five === 14 && three === 18) ||
    //two one four three five
    (two === 22 && one === 6 && four === 10 && three === 14 && five === 18) ||
    //one three two five four
    (one === 22 && three === 6 && two === 10 && five === 14 && five === 18) ||
    //five four one three two
    (five === 22 && four === 6 && one === 10 && three === 14 && two === 18) ||
    //five four one two three
    (five === 22 && four === 6 && one === 10 && two === 14 && three === 18) ||
    //two five four one three
    (two === 22 && five === 6 && four === 10 && one === 14 && three === 18) ||
    //two five four three one
    (two === 22 && five === 6 && four === 10 && three === 14 && one === 18) ||
    //two five one three four
    (two === 22 && five === 6 && one === 10 && three === 14 && four === 18) ||
    //two five one four three
    (two === 22 && five === 6 && one === 10 && four === 14 && three === 18) ||
    //two five three one four
    (two === 22 && five === 6 && three === 10 && one === 14 && four === 18) ||
    //two five three four one
    (two === 22 && five === 6 && three === 10 && four === 14 && one === 18) ||
    //one two four three five
    (one === 22 && two === 6 && four === 10 && three === 14 && five === 18) ||
    //one two four five three
    (one === 22 && two === 6 && four === 10 && five === 14 && three === 18) ||
    //four five two three one
    (four === 22 && five === 6 && two === 10 && three === 14 && one === 18) ||
    //four five two one three
    (four === 22 && five === 6 && two === 10 && one === 14 && three === 18) ||
    //four three one two five
    (four === 22 && three === 6 && one === 10 && two === 14 && five === 18) ||
    //four three one five two
    (four === 22 && three === 6 && one === 10 && five === 14 && two === 18) ||
    //four three two one five
    (four === 22 && three === 6 && two === 10 && one === 14 && five === 18) ||
    //four three two five one
    (four === 22 && three === 6 && two === 10 && five === 14 && one === 18) ||
    //four three five two one
    (four === 22 && three === 6 && five === 10 && two === 14 && one === 18) ||
    //four three five one two
    (four === 22 && three === 6 && five === 10 && one === 14 && two === 18) ||
    //four one two three five
    (four === 22 && one === 6 && two === 10 && three === 14 && five === 18) ||
    //one four three two five
    (one === 22 && four === 6 && three === 10 && two === 14 && five === 18) ||
    //one four three five two
    (one === 22 && four === 6 && three === 10 && five === 14 && two === 18) ||
    //one four two three five
    (one === 22 && four === 6 && two === 10 && three === 14 && five === 18) ||
    //one four two five three
    (one === 22 && four === 6 && two === 10 && five === 14 && three === 18) ||
    //three one two four five
    (three === 22 && one === 6 && two === 10 && four === 14 && five === 18) ||
    //three one two five four
    (three === 22 && one === 6 && two === 10 && five === 14 && four === 18) ||
    //three one four two five
    (three === 22 && one === 6 && four === 10 && two === 14 && five === 18) ||
    //three one four five two
    (three === 22 && one === 6 && four === 10 && five === 14 && two === 18) ||
    //three one five four two
    (three === 22 && one === 6 && five === 10 && four === 14 && two === 18) ||
    //three one five two four
    (three === 22 && one === 6 && five === 10 && two === 14 && four === 18) ||
    //three four two one five
    (three === 22 && four === 6 && two === 10 && one === 14 && five === 18) ||
    //three four two five one
    (three === 22 && four === 6 && two === 10 && five === 14 && one === 18) ||
    //five four two three one
    (five === 22 && four === 6 && two === 10 && three === 14 && one === 18) ||
    //five four two one three
    (five === 22 && four === 6 && two === 10 && one === 14 && three === 18) ||
    //four two five one three
    (four === 22 && two === 6 && five === 10 && one === 14 && three === 18) ||
    //four two five three one
    (four === 22 && two === 6 && five === 10 && three === 14 && one === 18) ||
    //one three four five two
    (one === 22 && three === 6 && four === 10 && five === 14 && two === 18) ||
    //one three four two five
    (one === 22 && three === 6 && four === 10 && two === 14 && five === 18) ||
    //three five one two four
    (three === 22 && five === 6 && one === 10 && two === 14 && four === 18) ||
    //three five one four two
    (three === 22 && five === 6 && one === 10 && four === 14 && two === 18) ||
    //three five four one two
    (three === 22 && five === 6 && four === 10 && one === 14 && two === 18) ||
    //three five four two one
    (three === 22 && five === 6 && four === 10 && two === 14 && one === 18) ||
    //two four three one five 
    (two === 22 && four === 6 && three === 10 && one === 14 && five === 18) ||
    //two four three five one
    (two === 22 && four === 6 && three === 10 && five === 14 && one === 18) ||
    //two four five three one
    (two === 22 && four === 6 && five === 10 && three === 14 && one === 18) ||
    //two four five one three
    (two === 22 && four === 6 && five === 10 && one === 14 && three === 18) ||
    //five one four two three
    (five === 22 && one === 6 && four === 10 && two === 14 && three === 18) ||
    //five one four three two
    (five === 22 && one === 6 && four === 10 && three === 14 && two === 18) ||
    //two three one five four
    (two === 22 && three === 6 && one === 10 && five === 14 && four === 18) ||
    //two three one four five
    (two === 22 && three === 6 && one === 10 && four === 14 && five === 18) ||
    //two three five four one
    (two === 22 && three === 6 && five === 10 && four === 14 && one === 18) ||
    //two three five one four
    (two === 22 && three === 6 && five === 10 && one === 14 && four === 18) ||
    //three two four five one
    (three === 22 && two === 6 && four === 10 && five === 14 && one === 18) ||
    //three two four one five
    (three === 22 && two === 6 && four === 10 && one === 14 && five === 18) ||
    //five three four two one
    (five === 22 && three === 6 && four === 10 && two === 14 && one === 18) ||
    //five three four one two
    (five === 22 && three === 6 && four === 10 && one === 14 && two === 18) ||
    //five two one three four
    (five === 22 && two === 6 && one === 10 && three === 14 && four === 18) ||
    //five two one four three
    (five === 22 && two === 6 && one === 10 && four === 14 && three === 18) ||
    //StraightFlush Spades
    //one two three four five
    (one === 21 && two === 5 && three === 9 && four === 13 && five === 17) ||
    //two three four five one
    (two === 21 && three === 5 && four === 9 && five === 13 && one === 17) ||
    //two three four one five 
    (two === 21 && three === 5 && four === 9 && one === 13 && five === 17) ||
    //three four five one two
    (three === 21 && four === 5 && five === 9 && one === 13 && two === 17) ||
    //three four five two one 
    (three === 21 && four === 5 && five === 9 && two === 13 && one === 17) ||
    //four five one two three
    (four === 21 && five === 5 && one === 9 && two === 13 && three === 17) ||
    //five one two three four
    (five === 21 && one === 5 && two === 9 && three === 13 && four === 17) ||
    //one three two four five
    (one === 21 && three === 5 && two === 9 && four === 13 && five === 17) ||
    //one two three five four
    (one === 21 && two === 5 && three === 9 && five === 13 && four === 17) ||
    //two one three four five
    (two === 21 && one === 5 && three === 9 && four === 13 && five === 17) ||
    //two one three five four 
    (two === 21 && one === 5 && three === 9 && five === 13 && five === 17) ||
    //three two one four five
    (three === 21 && two === 5 && one === 9 && four === 13 && five === 17) ||
    //three two one five four
    (three === 21 && two === 5 && one === 9 && five === 13 && four === 17) ||
    //four two three one five
    (four === 21 && two === 5 && three === 9 && one === 13 && five === 17) ||
    //four two three five one
    (four === 21 && two === 5 && three === 9 && five === 13 && one === 17) ||
    //five two three four one
    (five === 21 && two === 5 && three === 9 && four === 13 && one === 17) ||
    //five two three one four
    (five === 21 && two === 5 && three === 9 && one === 13 && four === 17) ||
    //four two one three five
    (four === 21 && two === 5 && one === 9 && three === 13 && five === 17) ||
    //four one two five three
    (four === 21 && one === 5 && two === 9 && five === 13 && three === 17) ||
    //one five two three four
    (one === 21 && five === 5 && two === 9 && three === 13 && four === 17) ||
    //three four one five two
    (three === 21 && four === 5 && one === 9 && five === 13 && two === 17) ||
    //three four one two five
    (three === 21 && four === 5 && one === 9 && two === 13 && five === 17) ||
    //one two five four three
    (one === 21 && two === 5 && five === 9 && four === 13 && three === 17) ||
    //one two five three four
    (one === 21 && two === 5 && five === 9 && three === 13 && four === 17) ||
    //two four one five three
    (two === 21 && four === 5 && one === 9 && five === 13 && three === 17) ||
    //two four one three five
    (two === 21 && four === 5 && one === 9 && three === 13 && five === 17) ||
    //five one three four two
    (five === 21 && one === 5 && three === 9 && four === 13 && two === 17) ||
    //five three two one four
    (five === 21 && three === 5 && two === 9 && one === 13 && four === 17) ||
    //five three two four one
    (five === 21 && three === 5 && two === 9 && four === 13 && one === 17) ||
    //four one three two five
    (four === 21 && one === 5 && three === 9 && two === 13 && five === 17) ||
    //five two four three one
    (five === 21 && two === 5 && four === 9 && three === 13 && one === 17) ||
    //five two four one three
    (five === 21 && two === 5 && four === 9 && one === 13 && three === 17) ||
    //five three one four two
    (five === 21 && three === 5 && one === 9 && four === 13 && two === 17) ||
    //five three one two four
    (five === 21 && three === 5 && one === 9 && two === 13 && four === 17) ||
    //four one three five two
    (four === 21 && one === 5 && three === 9 && five === 13 && two === 17) ||
    //three two five four one
    (three === 21 && two === 5 && five === 9 && four === 13 && one === 17) ||
    //three two five one four
    (three === 21 && two === 5 && five === 9 && one === 13 && four === 17) ||
    //four one five three two
    (four === 21 && one === 5 && five === 9 && three === 13 && two === 17) ||
    //four one five two three
    (four === 21 && one === 5 && five === 9 && two === 13 && three === 17) ||
    //one four five two three
    (one === 21 && four === 5 && five === 9 && two === 13 && three === 17) ||
    //five one two four three
    (five === 21 && one === 5 && two === 9 && four === 13 && three === 17) ||
    //three five two one four
    (three === 21 && five === 5 && two === 9 && one === 13 && four === 17) ||
    //three five two four one
    (three === 21 && five === 5 && two === 9 && four === 13 && one === 17) ||
    //two one five three four 
    (two === 21 && one === 5 && five === 9 && three === 13 && four === 17) ||
    //two one five four three
    (two === 21 && one === 5 && five === 9 && four === 13 && three === 17) ||
    //four five one three two
    (four === 21 && five === 5 && one === 9 && three === 13 && two === 17) ||
    //five four three one two
    (five === 21 && four === 5 && three === 9 && one === 13 && two === 17) ||
    //five four three two one
    (five === 21 && four === 5 && three === 9 && two === 13 && one === 17) ||
    //four five three one two
    (four === 21 && five === 5 && three === 9 && one === 13 && two === 17) ||
    //four five three two one
    (four === 21 && five === 5 && three === 9 && two === 13 && one === 17) ||
    //five one three two four
    (five === 21 && one === 5 && three === 9 && two === 13 && four === 17) ||
    //one three five two four
    (one === 21 && three === 5 && five === 9 && two === 13 && four === 17) ||
    //one three five four two
    (one === 21 && three === 5 && five === 9 && four === 13 && two === 17) ||
    //one four five three two
    (one === 21 && four === 5 && five === 9 && three === 13 && two === 17) ||
    //one five three two four
    (one === 21 && five === 5 && three === 9 && two === 13 && four === 17) ||
    //one five three four two
    (one === 21 && five === 5 && three === 9 && four === 13 && two === 17) ||
    //one five two four three
    (one === 21 && five === 5 && two === 9 && four === 13 && three === 17) ||
    //one five four two three
    (one === 21 && five === 5 && four === 9 && two === 13 && three === 17) ||
    //one five four three two
    (one === 21 && five === 5 && four === 9 && three === 13 && two === 17) ||
    //two one four five three
    (two === 21 && one === 5 && four === 9 && five === 13 && three === 17) ||
    //two one four three five
    (two === 21 && one === 5 && four === 9 && three === 13 && five === 17) ||
    //one three two five four
    (one === 21 && three === 5 && two === 9 && five === 13 && five === 17) ||
    //five four one three two
    (five === 21 && four === 5 && one === 9 && three === 13 && two === 17) ||
    //five four one two three
    (five === 21 && four === 5 && one === 9 && two === 13 && three === 17) ||
    //two five four one three
    (two === 21 && five === 5 && four === 9 && one === 13 && three === 17) ||
    //two five four three one
    (two === 21 && five === 5 && four === 9 && three === 13 && one === 17) ||
    //two five one three four
    (two === 21 && five === 5 && one === 9 && three === 13 && four === 17) ||
    //two five one four three
    (two === 21 && five === 5 && one === 9 && four === 13 && three === 17) ||
    //two five three one four
    (two === 21 && five === 5 && three === 9 && one === 13 && four === 17) ||
    //two five three four one
    (two === 21 && five === 5 && three === 9 && four === 13 && one === 17) ||
    //one two four three five
    (one === 21 && two === 5 && four === 9 && three === 13 && five === 17) ||
    //one two four five three
    (one === 21 && two === 5 && four === 9 && five === 13 && three === 17) ||
    //four five two three one
    (four === 21 && five === 5 && two === 9 && three === 13 && one === 17) ||
    //four five two one three
    (four === 21 && five === 5 && two === 9 && one === 13 && three === 17) ||
    //four three one two five
    (four === 21 && three === 5 && one === 9 && two === 13 && five === 17) ||
    //four three one five two
    (four === 21 && three === 5 && one === 9 && five === 13 && two === 17) ||
    //four three two one five
    (four === 21 && three === 5 && two === 9 && one === 13 && five === 17) ||
    //four three two five one
    (four === 21 && three === 5 && two === 9 && five === 13 && one === 17) ||
    //four three five two one
    (four === 21 && three === 5 && five === 9 && two === 13 && one === 17) ||
    //four three five one two
    (four === 21 && three === 5 && five === 9 && one === 13 && two === 17) ||
    //four one two three five
    (four === 21 && one === 5 && two === 9 && three === 13 && five === 17) ||
    //one four three two five
    (one === 21 && four === 5 && three === 9 && two === 13 && five === 17) ||
    //one four three five two
    (one === 21 && four === 5 && three === 9 && five === 13 && two === 17) ||
    //one four two three five
    (one === 21 && four === 5 && two === 9 && three === 13 && five === 17) ||
    //one four two five three
    (one === 21 && four === 5 && two === 9 && five === 13 && three === 17) ||
    //three one two four five
    (three === 21 && one === 5 && two === 9 && four === 13 && five === 17) ||
    //three one two five four
    (three === 21 && one === 5 && two === 9 && five === 13 && four === 17) ||
    //three one four two five
    (three === 21 && one === 5 && four === 9 && two === 13 && five === 17) ||
    //three one four five two
    (three === 21 && one === 5 && four === 9 && five === 13 && two === 17) ||
    //three one five four two
    (three === 21 && one === 5 && five === 9 && four === 13 && two === 17) ||
    //three one five two four
    (three === 21 && one === 5 && five === 9 && two === 13 && four === 17) ||
    //three four two one five
    (three === 21 && four === 5 && two === 9 && one === 13 && five === 17) ||
    //three four two five one
    (three === 21 && four === 5 && two === 9 && five === 13 && one === 17) ||
    //five four two three one
    (five === 21 && four === 5 && two === 9 && three === 13 && one === 17) ||
    //five four two one three
    (five === 21 && four === 5 && two === 9 && one === 13 && three === 17) ||
    //four two five one three
    (four === 21 && two === 5 && five === 9 && one === 13 && three === 17) ||
    //four two five three one
    (four === 21 && two === 5 && five === 9 && three === 13 && one === 17) ||
    //one three four five two
    (one === 21 && three === 5 && four === 9 && five === 13 && two === 17) ||
    //one three four two five
    (one === 21 && three === 5 && four === 9 && two === 13 && five === 17) ||
    //three five one two four
    (three === 21 && five === 5 && one === 9 && two === 13 && four === 17) ||
    //three five one four two
    (three === 21 && five === 5 && one === 9 && four === 13 && two === 17) ||
    //three five four one two
    (three === 21 && five === 5 && four === 9 && one === 13 && two === 17) ||
    //three five four two one
    (three === 21 && five === 5 && four === 9 && two === 13 && one === 17) ||
    //two four three one five 
    (two === 21 && four === 5 && three === 9 && one === 13 && five === 17) ||
    //two four three five one
    (two === 21 && four === 5 && three === 9 && five === 13 && one === 17) ||
    //two four five three one
    (two === 21 && four === 5 && five === 9 && three === 13 && one === 17) ||
    //two four five one three
    (two === 21 && four === 5 && five === 9 && one === 13 && three === 17) ||
    //five one four two three
    (five === 21 && one === 5 && four === 9 && two === 13 && three === 17) ||
    //five one four three two
    (five === 21 && one === 5 && four === 9 && three === 13 && two === 17) ||
    //two three one five four
    (two === 21 && three === 5 && one === 9 && five === 13 && four === 17) ||
    //two three one four five
    (two === 21 && three === 5 && one === 9 && four === 13 && five === 17) ||
    //two three five four one
    (two === 21 && three === 5 && five === 9 && four === 13 && one === 17) ||
    //two three five one four
    (two === 21 && three === 5 && five === 9 && one === 13 && four === 17) ||
    //three two four five one
    (three === 21 && two === 5 && four === 9 && five === 13 && one === 17) ||
    //three two four one five
    (three === 21 && two === 5 && four === 9 && one === 13 && five === 17) ||
    //five three four two one
    (five === 21 && three === 5 && four === 9 && two === 13 && one === 17) ||
    //five three four one two
    (five === 21 && three === 5 && four === 9 && one === 13 && two === 17) ||
    //five two one three four
    (five === 21 && two === 5 && one === 9 && three === 13 && four === 17) ||
    //five two one four three
    (five === 21 && two === 5 && one === 9 && four === 13 && three === 17)){
    document.getElementById('whatsOnHand').textContent = 'Big Straight Flush';
    }else straightFlush();
};