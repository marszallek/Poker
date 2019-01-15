const straightFlush = () => {
    //Straight Flush Of Spades
    //one two three four five
    if ((one === 1 && two === 5 && three === 9 && four === 13 && five === 17) ||
        //two three four five one
        (two === 1 && three === 5 && four === 9 && five === 13 && one === 17) ||
        //two three four one five 
        (two === 1 && three === 5 && four === 9 && one === 13 && five === 17) ||
        //three four five one two
        (three === 1 && four === 5 && five === 9 && one === 13 && two === 17) ||
        //three four five two one 
        (three === 1 && four === 5 && five === 9 && two === 13 && one === 17) ||
        //four five one two three
        (four === 1 && five === 5 && one === 9 && two === 13 && three === 17) ||
        //five one two three four
        (five === 1 && one === 5 && two === 9 && three === 13 && four === 17) ||
        //one three two four five
        (one === 1 && three === 5 && two === 9 && four === 13 && five === 17) ||
        //one two three five four
        (one === 1 && two === 5 && three === 9 && five === 13 && four === 17) ||
        //two one three four five
        (two === 1 && one === 5 && three === 9 && four === 13 && five === 17) ||
        //two one three five four 
        (two === 1 && one === 5 && three === 9 && five === 13 && five === 17) ||
        //three two one four five
        (three === 1 && two === 5 && one === 9 && four === 13 && five === 17) ||
        //three two one five four
        (three === 1 && two === 5 && one === 9 && five === 13 && four === 17) ||
        //four two three one five
        (four === 1 && two === 5 && three === 9 && one === 13 && five === 17) ||
        //four two three five one
        (four === 1 && two === 5 && three === 9 && five === 13 && one === 17) ||
        //five two three four one
        (five === 1 && two === 5 && three === 9 && four === 13 && one === 17) ||
        //five two three one four
        (five === 1 && two === 5 && three === 9 && one === 13 && four === 17) ||
        //four two one three five
        (four === 1 && two === 5 && one === 9 && three === 13 && five === 17) ||
        //four one two five three
        (four === 1 && one === 5 && two === 9 && five === 13 && three === 17) ||
        //one five two three four
        (one === 1 && five === 5 && two === 9 && three === 13 && four === 17) ||
        //three four one five two
        (three === 1 && four === 5 && one === 9 && five === 13 && two === 17) ||
        //three four one two five
        (three === 1 && four === 5 && one === 9 && two === 13 && five === 17) ||
        //one two five four three
        (one === 1 && two === 5 && five === 9 && four === 13 && three === 17) ||
        //one two five three four
        (one === 1 && two === 5 && five === 9 && three === 13 && four === 17) ||
        //two four one five three
        (two === 1 && four === 5 && one === 9 && five === 13 && three === 17) ||
        //two four one three five
        (two === 1 && four === 5 && one === 9 && three === 13 && five === 17) ||
        //five one three four two
        (five === 1 && one === 5 && three === 9 && four === 13 && two === 17) ||
        //five three two one four
        (five === 1 && three === 5 && two === 9 && one === 13 && four === 17) ||
        //five three two four one
        (five === 1 && three === 5 && two === 9 && four === 13 && one === 17) ||
        //four one three two five
        (four === 1 && one === 5 && three === 9 && two === 13 && five === 17) ||
        //five two four three one
        (five === 1 && two === 5 && four === 9 && three === 13 && one === 17) ||
        //five two four one three
        (five === 1 && two === 5 && four === 9 && one === 13 && three === 17) ||
        //five three one four two
        (five === 1 && three === 5 && one === 9 && four === 13 && two === 17) ||
        //five three one two four
        (five === 1 && three === 5 && one === 9 && two === 13 && four === 17) ||
        //four one three five two
        (four === 1 && one === 5 && three === 9 && five === 13 && two === 17) ||
        //three two five four one
        (three === 1 && two === 5 && five === 9 && four === 13 && one === 17) ||
        //three two five one four
        (three === 1 && two === 5 && five === 9 && one === 13 && four === 17) ||
        //four one five three two
        (four === 1 && one === 5 && five === 9 && three === 13 && two === 17) ||
        //four one five two three
        (four === 1 && one === 5 && five === 9 && two === 13 && three === 17) ||
        //one four five two three
        (one === 1 && four === 5 && five === 9 && two === 13 && three === 17) ||
        //five one two four three
        (five === 1 && one === 5 && two === 9 && four === 13 && three === 17) ||
        //three five two one four
        (three === 1 && five === 5 && two === 9 && one === 13 && four === 17) ||
        //three five two four one
        (three === 1 && five === 5 && two === 9 && four === 13 && one === 17) ||
        //two one five three four 
        (two === 1 && one === 5 && five === 9 && three === 13 && four === 17) ||
        //two one five four three
        (two === 1 && one === 5 && five === 9 && four === 13 && three === 17) ||
        //four five one three two
        (four === 1 && five === 5 && one === 9 && three === 13 && two === 17) ||
        //five four three one two
        (five === 1 && four === 5 && three === 9 && one === 13 && two === 17) ||
        //five four three two one
        (five === 1 && four === 5 && three === 9 && two === 13 && one === 17) ||
        //four five three one two
        (four === 1 && five === 5 && three === 9 && one === 13 && two === 17) ||
        //four five three two one
        (four === 1 && five === 5 && three === 9 && two === 13 && one === 17) ||
        //five one three two four
        (five === 1 && one === 5 && three === 9 && two === 13 && four === 17) ||
        //one three five two four
        (one === 1 && three === 5 && five === 9 && two === 13 && four === 17) ||
        //one three five four two
        (one === 1 && three === 5 && five === 9 && four === 13 && two === 17) ||
        //one four five three two
        (one === 1 && four === 5 && five === 9 && three === 13 && two === 17) ||
        //one five three two four
        (one === 1 && five === 5 && three === 9 && two === 13 && four === 17) ||
        //one five three four two
        (one === 1 && five === 5 && three === 9 && four === 13 && two === 17) ||
        //one five two four three
        (one === 1 && five === 5 && two === 9 && four === 13 && three === 17) ||
        //one five four two three
        (one === 1 && five === 5 && four === 9 && two === 13 && three === 17) ||
        //one five four three two
        (one === 1 && five === 5 && four === 9 && three === 13 && two === 17) ||
        //two one four five three
        (two === 1 && one === 5 && four === 9 && five === 13 && three === 17) ||
        //two one four three five
        (two === 1 && one === 5 && four === 9 && three === 13 && five === 17) ||
        //one three two five four
        (one === 1 && three === 5 && two === 9 && five === 13 && five === 17) ||
        //five four one three two
        (five === 1 && four === 5 && one === 9 && three === 13 && two === 17) ||
        //five four one two three
        (five === 1 && four === 5 && one === 9 && two === 13 && three === 17) ||
        //two five four one three
        (two === 1 && five === 5 && four === 9 && one === 13 && three === 17) ||
        //two five four three one
        (two === 1 && five === 5 && four === 9 && three === 13 && one === 17) ||
        //two five one three four
        (two === 1 && five === 5 && one === 9 && three === 13 && four === 17) ||
        //two five one four three
        (two === 1 && five === 5 && one === 9 && four === 13 && three === 17) ||
        //two five three one four
        (two === 1 && five === 5 && three === 9 && one === 13 && four === 17) ||
        //two five three four one
        (two === 1 && five === 5 && three === 9 && four === 13 && one === 17) ||
        //one two four three five
        (one === 1 && two === 5 && four === 9 && three === 13 && five === 17) ||
        //one two four five three
        (one === 1 && two === 5 && four === 9 && five === 13 && three === 17) ||
        //four five two three one
        (four === 1 && five === 5 && two === 9 && three === 13 && one === 17) ||
        //four five two one three
        (four === 1 && five === 5 && two === 9 && one === 13 && three === 17) ||
        //four three one two five
        (four === 1 && three === 5 && one === 9 && two === 13 && five === 17) ||
        //four three one five two
        (four === 1 && three === 5 && one === 9 && five === 13 && two === 17) ||
        //four three two one five
        (four === 1 && three === 5 && two === 9 && one === 13 && five === 17) ||
        //four three two five one
        (four === 1 && three === 5 && two === 9 && five === 13 && one === 17) ||
        //four three five two one
        (four === 1 && three === 5 && five === 9 && two === 13 && one === 17) ||
        //four three five one two
        (four === 1 && three === 5 && five === 9 && one === 13 && two === 17) ||
        //four one two three five
        (four === 1 && one === 5 && two === 9 && three === 13 && five === 17) ||
        //one four three two five
        (one === 1 && four === 5 && three === 9 && two === 13 && five === 17) ||
        //one four three five two
        (one === 1 && four === 5 && three === 9 && five === 13 && two === 17) ||
        //one four two three five
        (one === 1 && four === 5 && two === 9 && three === 13 && five === 17) ||
        //one four two five three
        (one === 1 && four === 5 && two === 9 && five === 13 && three === 17) ||
        //three one two four five
        (three === 1 && one === 5 && two === 9 && four === 13 && five === 17) ||
        //three one two five four
        (three === 1 && one === 5 && two === 9 && five === 13 && four === 17) ||
        //three one four two five
        (three === 1 && one === 5 && four === 9 && two === 13 && five === 17) ||
        //three one four five two
        (three === 1 && one === 5 && four === 9 && five === 13 && two === 17) ||
        //three one five four two
        (three === 1 && one === 5 && five === 9 && four === 13 && two === 17) ||
        //three one five two four
        (three === 1 && one === 5 && five === 9 && two === 13 && four === 17) ||
        //three four two one five
        (three === 1 && four === 5 && two === 9 && one === 13 && five === 17) ||
        //three four two five one
        (three === 1 && four === 5 && two === 9 && five === 13 && one === 17) ||
        //five four two three one
        (five === 1 && four === 5 && two === 9 && three === 13 && one === 17) ||
        //five four two one three
        (five === 1 && four === 5 && two === 9 && one === 13 && three === 17) ||
        //four two five one three
        (four === 1 && two === 5 && five === 9 && one === 13 && three === 17) ||
        //four two five three one
        (four === 1 && two === 5 && five === 9 && three === 13 && one === 17) ||
        //one three four five two
        (one === 1 && three === 5 && four === 9 && five === 13 && two === 17) ||
        //one three four two five
        (one === 1 && three === 5 && four === 9 && two === 13 && five === 17) ||
        //three five one two four
        (three === 1 && five === 5 && one === 9 && two === 13 && four === 17) ||
        //three five one four two
        (three === 1 && five === 5 && one === 9 && four === 13 && two === 17) ||
        //three five four one two
        (three === 1 && five === 5 && four === 9 && one === 13 && two === 17) ||
        //three five four two one
        (three === 1 && five === 5 && four === 9 && two === 13 && one === 17) ||
        //two four three one five 
        (two === 1 && four === 5 && three === 9 && one === 13 && five === 17) ||
        //two four three five one
        (two === 1 && four === 5 && three === 9 && five === 13 && one === 17) ||
        //two four five three one
        (two === 1 && four === 5 && five === 9 && three === 13 && one === 17) ||
        //two four five one three
        (two === 1 && four === 5 && five === 9 && one === 13 && three === 17) ||
        //five one four two three
        (five === 1 && one === 5 && four === 9 && two === 13 && three === 17) ||
        //five one four three two
        (five === 1 && one === 5 && four === 9 && three === 13 && two === 17) ||
        //two three one five four
        (two === 1 && three === 5 && one === 9 && five === 13 && four === 17) ||
        //two three one four five
        (two === 1 && three === 5 && one === 9 && four === 13 && five === 17) ||
        //two three five four one
        (two === 1 && three === 5 && five === 9 && four === 13 && one === 17) ||
        //two three five one four
        (two === 1 && three === 5 && five === 9 && one === 13 && four === 17) ||
        //three two four five one
        (three === 1 && two === 5 && four === 9 && five === 13 && one === 17) ||
        //three two four one five
        (three === 1 && two === 5 && four === 9 && one === 13 && five === 17) ||
        //five three four two one
        (five === 1 && three === 5 && four === 9 && two === 13 && one === 17) ||
        //five three four one two
        (five === 1 && three === 5 && four === 9 && one === 13 && two === 17) ||
        //five two one three four
        (five === 1 && two === 5 && one === 9 && three === 13 && four === 17) ||
        //five two one four three
        (five === 1 && two === 5 && one === 9 && four === 13 && three === 17) ||
        //Straight Flush Of Clubs
        //one two three four five
        (one === 2 && two === 6 && three === 10 && four === 14 && five === 18) ||
        //two three four five one
        (two === 2 && three === 6 && four === 10 && five === 14 && one === 18) ||
        //two three four one five 
        (two === 2 && three === 6 && four === 10 && one === 14 && five === 18) ||
        //three four five one two
        (three === 2 && four === 6 && five === 10 && one === 14 && two === 18) ||
        //three four five two one 
        (three === 2 && four === 6 && five === 10 && two === 14 && one === 18) ||
        //four five one two three
        (four === 2 && five === 6 && one === 10 && two === 14 && three === 18) ||
        //five one two three four
        (five === 2 && one === 6 && two === 10 && three === 14 && four === 18) ||
        //one three two four five
        (one === 2 && three === 6 && two === 10 && four === 14 && five === 18) ||
        //one two three five four
        (one === 2 && two === 6 && three === 10 && five === 14 && four === 18) ||
        //two one three four five
        (two === 2 && one === 6 && three === 10 && four === 14 && five === 18) ||
        //two one three five four 
        (two === 2 && one === 6 && three === 10 && five === 14 && five === 18) ||
        //three two one four five
        (three === 2 && two === 6 && one === 10 && four === 14 && five === 18) ||
        //three two one five four
        (three === 2 && two === 6 && one === 10 && five === 14 && four === 18) ||
        //four two three one five
        (four === 2 && two === 6 && three === 10 && one === 14 && five === 18) ||
        //four two three five one
        (four === 2 && two === 6 && three === 10 && five === 14 && one === 18) ||
        //five two three four one
        (five === 2 && two === 6 && three === 10 && four === 14 && one === 18) ||
        //five two three one four
        (five === 2 && two === 6 && three === 10 && one === 14 && four === 18) ||
        //four two one three five
        (four === 2 && two === 6 && one === 10 && three === 14 && five === 18) ||
        //four one two five three
        (four === 2 && one === 6 && two === 10 && five === 14 && three === 18) ||
        //one five two three four
        (one === 2 && five === 6 && two === 10 && three === 14 && four === 18) ||
        //three four one five two
        (three === 2 && four === 6 && one === 10 && five === 14 && two === 18) ||
        //three four one two five
        (three === 2 && four === 6 && one === 10 && two === 14 && five === 18) ||
        //one two five four three
        (one === 2 && two === 6 && five === 10 && four === 14 && three === 18) ||
        //one two five three four
        (one === 2 && two === 6 && five === 10 && three === 14 && four === 18) ||
        //two four one five three
        (two === 2 && four === 6 && one === 10 && five === 14 && three === 18) ||
        //two four one three five
        (two === 2 && four === 6 && one === 10 && three === 14 && five === 18) ||
        //five one three four two
        (five === 2 && one === 6 && three === 10 && four === 14 && two === 18) ||
        //five three two one four
        (five === 2 && three === 6 && two === 10 && one === 14 && four === 18) ||
        //five three two four one
        (five === 2 && three === 6 && two === 10 && four === 14 && one === 18) ||
        //four one three two five
        (four === 2 && one === 6 && three === 10 && two === 14 && five === 18) ||
        //five two four three one
        (five === 2 && two === 6 && four === 10 && three === 14 && one === 18) ||
        //five two four one three
        (five === 2 && two === 6 && four === 10 && one === 14 && three === 18) ||
        //five three one four two
        (five === 2 && three === 6 && one === 10 && four === 14 && two === 18) ||
        //five three one two four
        (five === 2 && three === 6 && one === 10 && two === 14 && four === 18) ||
        //four one three five two
        (four === 2 && one === 6 && three === 10 && five === 14 && two === 18) ||
        //three two five four one
        (three === 2 && two === 6 && five === 10 && four === 14 && one === 18) ||
        //three two five one four
        (three === 2 && two === 6 && five === 10 && one === 14 && four === 18) ||
        //four one five three two
        (four === 2 && one === 6 && five === 10 && three === 14 && two === 18) ||
        //four one five two three
        (four === 2 && one === 6 && five === 10 && two === 14 && three === 18) ||
        //one four five two three
        (one === 2 && four === 6 && five === 10 && two === 14 && three === 18) ||
        //five one two four three
        (five === 2 && one === 6 && two === 10 && four === 14 && three === 18) ||
        //three five two one four
        (three === 2 && five === 6 && two === 10 && one === 14 && four === 18) ||
        //three five two four one
        (three === 2 && five === 6 && two === 10 && four === 14 && one === 18) ||
        //two one five three four 
        (two === 2 && one === 6 && five === 10 && three === 14 && four === 18) ||
        //two one five four three
        (two === 2 && one === 6 && five === 10 && four === 14 && three === 18) ||
        //four five one three two
        (four === 2 && five === 6 && one === 10 && three === 14 && two === 18) ||
        //five four three one two
        (five === 2 && four === 6 && three === 10 && one === 14 && two === 18) ||
        //five four three two one
        (five === 2 && four === 6 && three === 10 && two === 14 && one === 18) ||
        //four five three one two
        (four === 2 && five === 6 && three === 10 && one === 14 && two === 18) ||
        //four five three two one
        (four === 2 && five === 6 && three === 10 && two === 14 && one === 18) ||
        //five one three two four
        (five === 2 && one === 6 && three === 10 && two === 14 && four === 18) ||
        //one three five two four
        (one === 2 && three === 6 && five === 10 && two === 14 && four === 18) ||
        //one three five four two
        (one === 2 && three === 6 && five === 10 && four === 14 && two === 18) ||
        //one four five three two
        (one === 2 && four === 6 && five === 10 && three === 14 && two === 18) ||
        //one five three two four
        (one === 2 && five === 6 && three === 10 && two === 14 && four === 18) ||
        //one five three four two
        (one === 2 && five === 6 && three === 10 && four === 14 && two === 18) ||
        //one five two four three
        (one === 2 && five === 6 && two === 10 && four === 14 && three === 18) ||
        //one five four two three
        (one === 2 && five === 6 && four === 10 && two === 14 && three === 18) ||
        //one five four three two
        (one === 2 && five === 6 && four === 10 && three === 14 && two === 18) ||
        //two one four five three
        (two === 2 && one === 6 && four === 10 && five === 14 && three === 18) ||
        //two one four three five
        (two === 2 && one === 6 && four === 10 && three === 14 && five === 18) ||
        //one three two five four
        (one === 2 && three === 6 && two === 10 && five === 14 && five === 18) ||
        //five four one three two
        (five === 2 && four === 6 && one === 10 && three === 14 && two === 18) ||
        //five four one two three
        (five === 2 && four === 6 && one === 10 && two === 14 && three === 18) ||
        //two five four one three
        (two === 2 && five === 6 && four === 10 && one === 14 && three === 18) ||
        //two five four three one
        (two === 2 && five === 6 && four === 10 && three === 14 && one === 18) ||
        //two five one three four
        (two === 2 && five === 6 && one === 10 && three === 14 && four === 18) ||
        //two five one four three
        (two === 2 && five === 6 && one === 10 && four === 14 && three === 18) ||
        //two five three one four
        (two === 2 && five === 6 && three === 10 && one === 14 && four === 18) ||
        //two five three four one
        (two === 2 && five === 6 && three === 10 && four === 14 && one === 18) ||
        //one two four three five
        (one === 2 && two === 6 && four === 10 && three === 14 && five === 18) ||
        //one two four five three
        (one === 2 && two === 6 && four === 10 && five === 14 && three === 18) ||
        //four five two three one
        (four === 2 && five === 6 && two === 10 && three === 14 && one === 18) ||
        //four five two one three
        (four === 2 && five === 6 && two === 10 && one === 14 && three === 18) ||
        //four three one two five
        (four === 2 && three === 6 && one === 10 && two === 14 && five === 18) ||
        //four three one five two
        (four === 2 && three === 6 && one === 10 && five === 14 && two === 18) ||
        //four three two one five
        (four === 2 && three === 6 && two === 10 && one === 14 && five === 18) ||
        //four three two five one
        (four === 2 && three === 6 && two === 10 && five === 14 && one === 18) ||
        //four three five two one
        (four === 2 && three === 6 && five === 10 && two === 14 && one === 18) ||
        //four three five one two
        (four === 2 && three === 6 && five === 10 && one === 14 && two === 18) ||
        //four one two three five
        (four === 2 && one === 6 && two === 10 && three === 14 && five === 18) ||
        //one four three two five
        (one === 2 && four === 6 && three === 10 && two === 14 && five === 18) ||
        //one four three five two
        (one === 2 && four === 6 && three === 10 && five === 14 && two === 18) ||
        //one four two three five
        (one === 2 && four === 6 && two === 10 && three === 14 && five === 18) ||
        //one four two five three
        (one === 2 && four === 6 && two === 10 && five === 14 && three === 18) ||
        //three one two four five
        (three === 2 && one === 6 && two === 10 && four === 14 && five === 18) ||
        //three one two five four
        (three === 2 && one === 6 && two === 10 && five === 14 && four === 18) ||
        //three one four two five
        (three === 2 && one === 6 && four === 10 && two === 14 && five === 18) ||
        //three one four five two
        (three === 2 && one === 6 && four === 10 && five === 14 && two === 18) ||
        //three one five four two
        (three === 2 && one === 6 && five === 10 && four === 14 && two === 18) ||
        //three one five two four
        (three === 2 && one === 6 && five === 10 && two === 14 && four === 18) ||
        //three four two one five
        (three === 2 && four === 6 && two === 10 && one === 14 && five === 18) ||
        //three four two five one
        (three === 2 && four === 6 && two === 10 && five === 14 && one === 18) ||
        //five four two three one
        (five === 2 && four === 6 && two === 10 && three === 14 && one === 18) ||
        //five four two one three
        (five === 2 && four === 6 && two === 10 && one === 14 && three === 18) ||
        //four two five one three
        (four === 2 && two === 6 && five === 10 && one === 14 && three === 18) ||
        //four two five three one
        (four === 2 && two === 6 && five === 10 && three === 14 && one === 18) ||
        //one three four five two
        (one === 2 && three === 6 && four === 10 && five === 14 && two === 18) ||
        //one three four two five
        (one === 2 && three === 6 && four === 10 && two === 14 && five === 18) ||
        //three five one two four
        (three === 2 && five === 6 && one === 10 && two === 14 && four === 18) ||
        //three five one four two
        (three === 2 && five === 6 && one === 10 && four === 14 && two === 18) ||
        //three five four one two
        (three === 2 && five === 6 && four === 10 && one === 14 && two === 18) ||
        //three five four two one
        (three === 2 && five === 6 && four === 10 && two === 14 && one === 18) ||
        //two four three one five 
        (two === 2 && four === 6 && three === 10 && one === 14 && five === 18) ||
        //two four three five one
        (two === 2 && four === 6 && three === 10 && five === 14 && one === 18) ||
        //two four five three one
        (two === 2 && four === 6 && five === 10 && three === 14 && one === 18) ||
        //two four five one three
        (two === 2 && four === 6 && five === 10 && one === 14 && three === 18) ||
        //five one four two three
        (five === 2 && one === 6 && four === 10 && two === 14 && three === 18) ||
        //five one four three two
        (five === 2 && one === 6 && four === 10 && three === 14 && two === 18) ||
        //two three one five four
        (two === 2 && three === 6 && one === 10 && five === 14 && four === 18) ||
        //two three one four five
        (two === 2 && three === 6 && one === 10 && four === 14 && five === 18) ||
        //two three five four one
        (two === 2 && three === 6 && five === 10 && four === 14 && one === 18) ||
        //two three five one four
        (two === 2 && three === 6 && five === 10 && one === 14 && four === 18) ||
        //three two four five one
        (three === 2 && two === 6 && four === 10 && five === 14 && one === 18) ||
        //three two four one five
        (three === 2 && two === 6 && four === 10 && one === 14 && five === 18) ||
        //five three four two one
        (five === 2 && three === 6 && four === 10 && two === 14 && one === 18) ||
        //five three four one two
        (five === 2 && three === 6 && four === 10 && one === 14 && two === 18) ||
        //five two one three four
        (five === 2 && two === 6 && one === 10 && three === 14 && four === 18) ||
        //five two one four three
        (five === 2 && two === 6 && one === 10 && four === 14 && three === 18) ||
        //Straight Flush Of Diamonds
        //one two three four five
        (one === 3 && two === 7 && three === 11 && four === 15 && five === 19) ||
        //two three four five one
        (two === 3 && three === 7 && four === 11 && five === 15 && one === 19) ||
        //two three four one five 
        (two === 3 && three === 7 && four === 11 && one === 15 && five === 19) ||
        //three four five one two
        (three === 3 && four === 7 && five === 11 && one === 15 && two === 19) ||
        //three four five two one 
        (three === 3 && four === 7 && five === 11 && two === 15 && one === 19) ||
        //four five one two three
        (four === 3 && five === 7 && one === 11 && two === 15 && three === 19) ||
        //five one two three four
        (five === 3 && one === 7 && two === 11 && three === 15 && four === 19) ||
        //one three two four five
        (one === 3 && three === 7 && two === 11 && four === 15 && five === 19) ||
        //one two three five four
        (one === 3 && two === 7 && three === 11 && five === 15 && four === 19) ||
        //two one three four five
        (two === 3 && one === 7 && three === 11 && four === 15 && five === 19) ||
        //two one three five four 
        (two === 3 && one === 7 && three === 11 && five === 15 && five === 19) ||
        //three two one four five
        (three === 3 && two === 7 && one === 11 && four === 15 && five === 19) ||
        //three two one five four
        (three === 3 && two === 7 && one === 11 && five === 15 && four === 19) ||
        //four two three one five
        (four === 3 && two === 7 && three === 11 && one === 15 && five === 19) ||
        //four two three five one
        (four === 3 && two === 7 && three === 11 && five === 15 && one === 19) ||
        //five two three four one
        (five === 3 && two === 7 && three === 11 && four === 15 && one === 19) ||
        //five two three one four
        (five === 3 && two === 7 && three === 11 && one === 15 && four === 19) ||
        //four two one three five
        (four === 3 && two === 7 && one === 11 && three === 15 && five === 19) ||
        //four one two five three
        (four === 3 && one === 7 && two === 11 && five === 15 && three === 19) ||
        //one five two three four
        (one === 3 && five === 7 && two === 11 && three === 15 && four === 19) ||
        //three four one five two
        (three === 3 && four === 7 && one === 11 && five === 15 && two === 19) ||
        //three four one two five
        (three === 3 && four === 7 && one === 11 && two === 15 && five === 19) ||
        //one two five four three
        (one === 3 && two === 7 && five === 11 && four === 15 && three === 19) ||
        //one two five three four
        (one === 3 && two === 7 && five === 11 && three === 15 && four === 19) ||
        //two four one five three
        (two === 3 && four === 7 && one === 11 && five === 15 && three === 19) ||
        //two four one three five
        (two === 3 && four === 7 && one === 11 && three === 15 && five === 19) ||
        //five one three four two
        (five === 3 && one === 7 && three === 11 && four === 15 && two === 19) ||
        //five three two one four
        (five === 3 && three === 7 && two === 11 && one === 15 && four === 19) ||
        //five three two four one
        (five === 3 && three === 7 && two === 11 && four === 15 && one === 19) ||
        //four one three two five
        (four === 3 && one === 7 && three === 11 && two === 15 && five === 19) ||
        //five two four three one
        (five === 3 && two === 7 && four === 11 && three === 15 && one === 19) ||
        //five two four one three
        (five === 3 && two === 7 && four === 11 && one === 15 && three === 19) ||
        //five three one four two
        (five === 3 && three === 7 && one === 11 && four === 15 && two === 19) ||
        //five three one two four
        (five === 3 && three === 7 && one === 11 && two === 15 && four === 19) ||
        //four one three five two
        (four === 3 && one === 7 && three === 11 && five === 15 && two === 19) ||
        //three two five four one
        (three === 3 && two === 7 && five === 11 && four === 15 && one === 19) ||
        //three two five one four
        (three === 3 && two === 7 && five === 11 && one === 15 && four === 19) ||
        //four one five three two
        (four === 3 && one === 7 && five === 11 && three === 15 && two === 19) ||
        //four one five two three
        (four === 3 && one === 7 && five === 11 && two === 15 && three === 19) ||
        //one four five two three
        (one === 3 && four === 7 && five === 11 && two === 15 && three === 19) ||
        //five one two four three
        (five === 3 && one === 7 && two === 11 && four === 15 && three === 19) ||
        //three five two one four
        (three === 3 && five === 7 && two === 11 && one === 15 && four === 19) ||
        //three five two four one
        (three === 3 && five === 7 && two === 11 && four === 15 && one === 19) ||
        //two one five three four 
        (two === 3 && one === 7 && five === 11 && three === 15 && four === 19) ||
        //two one five four three
        (two === 3 && one === 7 && five === 11 && four === 15 && three === 19) ||
        //four five one three two
        (four === 3 && five === 7 && one === 11 && three === 15 && two === 19) ||
        //five four three one two
        (five === 3 && four === 7 && three === 11 && one === 15 && two === 19) ||
        //five four three two one
        (five === 3 && four === 7 && three === 11 && two === 15 && one === 19) ||
        //four five three one two
        (four === 3 && five === 7 && three === 11 && one === 15 && two === 19) ||
        //four five three two one
        (four === 3 && five === 7 && three === 11 && two === 15 && one === 19) ||
        //five one three two four
        (five === 3 && one === 7 && three === 11 && two === 15 && four === 19) ||
        //one three five two four
        (one === 3 && three === 7 && five === 11 && two === 15 && four === 19) ||
        //one three five four two
        (one === 3 && three === 7 && five === 11 && four === 15 && two === 19) ||
        //one four five three two
        (one === 3 && four === 7 && five === 11 && three === 15 && two === 19) ||
        //one five three two four
        (one === 3 && five === 7 && three === 11 && two === 15 && four === 19) ||
        //one five three four two
        (one === 3 && five === 7 && three === 11 && four === 15 && two === 19) ||
        //one five two four three
        (one === 3 && five === 7 && two === 11 && four === 15 && three === 19) ||
        //one five four two three
        (one === 3 && five === 7 && four === 11 && two === 15 && three === 19) ||
        //one five four three two
        (one === 3 && five === 7 && four === 11 && three === 15 && two === 19) ||
        //two one four five three
        (two === 3 && one === 7 && four === 11 && five === 15 && three === 19) ||
        //two one four three five
        (two === 3 && one === 7 && four === 11 && three === 15 && five === 19) ||
        //one three two five four
        (one === 3 && three === 7 && two === 11 && five === 15 && five === 19) ||
        //five four one three two
        (five === 3 && four === 7 && one === 11 && three === 15 && two === 19) ||
        //five four one two three
        (five === 3 && four === 7 && one === 11 && two === 15 && three === 19) ||
        //two five four one three
        (two === 3 && five === 7 && four === 11 && one === 15 && three === 19) ||
        //two five four three one
        (two === 3 && five === 7 && four === 11 && three === 15 && one === 19) ||
        //two five one three four
        (two === 3 && five === 7 && one === 11 && three === 15 && four === 19) ||
        //two five one four three
        (two === 3 && five === 7 && one === 11 && four === 15 && three === 19) ||
        //two five three one four
        (two === 3 && five === 7 && three === 11 && one === 15 && four === 19) ||
        //two five three four one
        (two === 3 && five === 7 && three === 11 && four === 15 && one === 19) ||
        //one two four three five
        (one === 3 && two === 7 && four === 11 && three === 15 && five === 19) ||
        //one two four five three
        (one === 3 && two === 7 && four === 11 && five === 15 && three === 19) ||
        //four five two three one
        (four === 3 && five === 7 && two === 11 && three === 15 && one === 19) ||
        //four five two one three
        (four === 3 && five === 7 && two === 11 && one === 15 && three === 19) ||
        //four three one two five
        (four === 3 && three === 7 && one === 11 && two === 15 && five === 19) ||
        //four three one five two
        (four === 3 && three === 7 && one === 11 && five === 15 && two === 19) ||
        //four three two one five
        (four === 3 && three === 7 && two === 11 && one === 15 && five === 19) ||
        //four three two five one
        (four === 3 && three === 7 && two === 11 && five === 15 && one === 19) ||
        //four three five two one
        (four === 3 && three === 7 && five === 11 && two === 15 && one === 19) ||
        //four three five one two
        (four === 3 && three === 7 && five === 11 && one === 15 && two === 19) ||
        //four one two three five
        (four === 3 && one === 7 && two === 11 && three === 15 && five === 19) ||
        //one four three two five
        (one === 3 && four === 7 && three === 11 && two === 15 && five === 19) ||
        //one four three five two
        (one === 3 && four === 7 && three === 11 && five === 15 && two === 19) ||
        //one four two three five
        (one === 3 && four === 7 && two === 11 && three === 15 && five === 19) ||
        //one four two five three
        (one === 3 && four === 7 && two === 11 && five === 15 && three === 19) ||
        //three one two four five
        (three === 3 && one === 7 && two === 11 && four === 15 && five === 19) ||
        //three one two five four
        (three === 3 && one === 7 && two === 11 && five === 15 && four === 19) ||
        //three one four two five
        (three === 3 && one === 7 && four === 11 && two === 15 && five === 19) ||
        //three one four five two
        (three === 3 && one === 7 && four === 11 && five === 15 && two === 19) ||
        //three one five four two
        (three === 3 && one === 7 && five === 11 && four === 15 && two === 19) ||
        //three one five two four
        (three === 3 && one === 7 && five === 11 && two === 15 && four === 19) ||
        //three four two one five
        (three === 3 && four === 7 && two === 11 && one === 15 && five === 19) ||
        //three four two five one
        (three === 3 && four === 7 && two === 11 && five === 15 && one === 19) ||
        //five four two three one
        (five === 3 && four === 7 && two === 11 && three === 15 && one === 19) ||
        //five four two one three
        (five === 3 && four === 7 && two === 11 && one === 15 && three === 19) ||
        //four two five one three
        (four === 3 && two === 7 && five === 11 && one === 15 && three === 19) ||
        //four two five three one
        (four === 3 && two === 7 && five === 11 && three === 15 && one === 19) ||
        //one three four five two
        (one === 3 && three === 7 && four === 11 && five === 15 && two === 19) ||
        //one three four two five
        (one === 3 && three === 7 && four === 11 && two === 15 && five === 19) ||
        //three five one two four
        (three === 3 && five === 7 && one === 11 && two === 15 && four === 19) ||
        //three five one four two
        (three === 3 && five === 7 && one === 11 && four === 15 && two === 19) ||
        //three five four one two
        (three === 3 && five === 7 && four === 11 && one === 15 && two === 19) ||
        //three five four two one
        (three === 3 && five === 7 && four === 11 && two === 15 && one === 19) ||
        //two four three one five 
        (two === 3 && four === 7 && three === 11 && one === 15 && five === 19) ||
        //two four three five one
        (two === 3 && four === 7 && three === 11 && five === 15 && one === 19) ||
        //two four five three one
        (two === 3 && four === 7 && five === 11 && three === 15 && one === 19) ||
        //two four five one three
        (two === 3 && four === 7 && five === 11 && one === 15 && three === 19) ||
        //five one four two three
        (five === 3 && one === 7 && four === 11 && two === 15 && three === 19) ||
        //five one four three two
        (five === 3 && one === 7 && four === 11 && three === 15 && two === 19) ||
        //two three one five four
        (two === 3 && three === 7 && one === 11 && five === 15 && four === 19) ||
        //two three one four five
        (two === 3 && three === 7 && one === 11 && four === 15 && five === 19) ||
        //two three five four one
        (two === 3 && three === 7 && five === 11 && four === 15 && one === 19) ||
        //two three five one four
        (two === 3 && three === 7 && five === 11 && one === 15 && four === 19) ||
        //three two four five one
        (three === 3 && two === 7 && four === 11 && five === 15 && one === 19) ||
        //three two four one five
        (three === 3 && two === 7 && four === 11 && one === 15 && five === 19) ||
        //five three four two one
        (five === 3 && three === 7 && four === 11 && two === 15 && one === 19) ||
        //five three four one two
        (five === 3 && three === 7 && four === 11 && one === 15 && two === 19) ||
        //five two one three four
        (five === 3 && two === 7 && one === 11 && three === 15 && four === 19) ||
        //five two one four three
        (five === 3 && two === 7 && one === 11 && four === 15 && three === 19) ||
        //Straight Flush Of Hearts
        //one two three four five
        (one === 4 && two === 8 && three === 12 && four === 16 && five === 20) ||
        //two three four five one
        (two === 4 && three === 8 && four === 12 && five === 16 && one === 20) ||
        //two three four one five 
        (two === 4 && three === 8 && four === 12 && one === 16 && five === 20) ||
        //three four five one two
        (three === 4 && four === 8 && five === 12 && one === 16 && two === 20) ||
        //three four five two one 
        (three === 4 && four === 8 && five === 12 && two === 16 && one === 20) ||
        //four five one two three
        (four === 4 && five === 8 && one === 12 && two === 16 && three === 20) ||
        //five one two three four
        (five === 4 && one === 8 && two === 12 && three === 16 && four === 20) ||
        //one three two four five
        (one === 4 && three === 8 && two === 12 && four === 16 && five === 20) ||
        //one two three five four
        (one === 4 && two === 8 && three === 12 && five === 16 && four === 20) ||
        //two one three four five
        (two === 4 && one === 8 && three === 12 && four === 16 && five === 20) ||
        //two one three five four 
        (two === 4 && one === 8 && three === 12 && five === 16 && five === 20) ||
        //three two one four five
        (three === 4 && two === 8 && one === 12 && four === 16 && five === 20) ||
        //three two one five four
        (three === 4 && two === 8 && one === 12 && five === 16 && four === 20) ||
        //four two three one five
        (four === 4 && two === 8 && three === 12 && one === 16 && five === 20) ||
        //four two three five one
        (four === 4 && two === 8 && three === 12 && five === 16 && one === 20) ||
        //five two three four one
        (five === 4 && two === 8 && three === 12 && four === 16 && one === 20) ||
        //five two three one four
        (five === 4 && two === 8 && three === 12 && one === 16 && four === 20) ||
        //four two one three five
        (four === 4 && two === 8 && one === 12 && three === 16 && five === 20) ||
        //four one two five three
        (four === 4 && one === 8 && two === 12 && five === 16 && three === 20) ||
        //one five two three four
        (one === 4 && five === 8 && two === 12 && three === 16 && four === 20) ||
        //three four one five two
        (three === 4 && four === 8 && one === 12 && five === 16 && two === 20) ||
        //three four one two five
        (three === 4 && four === 8 && one === 12 && two === 16 && five === 20) ||
        //one two five four three
        (one === 4 && two === 8 && five === 12 && four === 16 && three === 20) ||
        //one two five three four
        (one === 4 && two === 8 && five === 12 && three === 16 && four === 20) ||
        //two four one five three
        (two === 4 && four === 8 && one === 12 && five === 16 && three === 20) ||
        //two four one three five
        (two === 4 && four === 8 && one === 12 && three === 16 && five === 20) ||
        //five one three four two
        (five === 4 && one === 8 && three === 12 && four === 16 && two === 20) ||
        //five three two one four
        (five === 4 && three === 8 && two === 12 && one === 16 && four === 20) ||
        //five three two four one
        (five === 4 && three === 8 && two === 12 && four === 16 && one === 20) ||
        //four one three two five
        (four === 4 && one === 8 && three === 12 && two === 16 && five === 20) ||
        //five two four three one
        (five === 4 && two === 8 && four === 12 && three === 16 && one === 20) ||
        //five two four one three
        (five === 4 && two === 8 && four === 12 && one === 16 && three === 20) ||
        //five three one four two
        (five === 4 && three === 8 && one === 12 && four === 16 && two === 20) ||
        //five three one two four
        (five === 4 && three === 8 && one === 12 && two === 16 && four === 20) ||
        //four one three five two
        (four === 4 && one === 8 && three === 12 && five === 16 && two === 20) ||
        //three two five four one
        (three === 4 && two === 8 && five === 12 && four === 16 && one === 20) ||
        //three two five one four
        (three === 4 && two === 8 && five === 12 && one === 16 && four === 20) ||
        //four one five three two
        (four === 4 && one === 8 && five === 12 && three === 16 && two === 20) ||
        //four one five two three
        (four === 4 && one === 8 && five === 12 && two === 16 && three === 20) ||
        //one four five two three
        (one === 4 && four === 8 && five === 12 && two === 16 && three === 20) ||
        //five one two four three
        (five === 4 && one === 8 && two === 12 && four === 16 && three === 20) ||
        //three five two one four
        (three === 4 && five === 8 && two === 12 && one === 16 && four === 20) ||
        //three five two four one
        (three === 4 && five === 8 && two === 12 && four === 16 && one === 20) ||
        //two one five three four 
        (two === 4 && one === 8 && five === 12 && three === 16 && four === 20) ||
        //two one five four three
        (two === 4 && one === 8 && five === 12 && four === 16 && three === 20) ||
        //four five one three two
        (four === 4 && five === 8 && one === 12 && three === 16 && two === 20) ||
        //five four three one two
        (five === 4 && four === 8 && three === 12 && one === 16 && two === 20) ||
        //five four three two one
        (five === 4 && four === 8 && three === 12 && two === 16 && one === 20) ||
        //four five three one two
        (four === 4 && five === 8 && three === 12 && one === 16 && two === 20) ||
        //four five three two one
        (four === 4 && five === 8 && three === 12 && two === 16 && one === 20) ||
        //five one three two four
        (five === 4 && one === 8 && three === 12 && two === 16 && four === 20) ||
        //one three five two four
        (one === 4 && three === 8 && five === 12 && two === 16 && four === 20) ||
        //one three five four two
        (one === 4 && three === 8 && five === 12 && four === 16 && two === 20) ||
        //one four five three two
        (one === 4 && four === 8 && five === 12 && three === 16 && two === 20) ||
        //one five three two four
        (one === 4 && five === 8 && three === 12 && two === 16 && four === 20) ||
        //one five three four two
        (one === 4 && five === 8 && three === 12 && four === 16 && two === 20) ||
        //one five two four three
        (one === 4 && five === 8 && two === 12 && four === 16 && three === 20) ||
        //one five four two three
        (one === 4 && five === 8 && four === 12 && two === 16 && three === 20) ||
        //one five four three two
        (one === 4 && five === 8 && four === 12 && three === 16 && two === 20) ||
        //two one four five three
        (two === 4 && one === 8 && four === 12 && five === 16 && three === 20) ||
        //two one four three five
        (two === 4 && one === 8 && four === 12 && three === 16 && five === 20) ||
        //one three two five four
        (one === 4 && three === 8 && two === 12 && five === 16 && five === 20) ||
        //five four one three two
        (five === 4 && four === 8 && one === 12 && three === 16 && two === 20) ||
        //five four one two three
        (five === 4 && four === 8 && one === 12 && two === 16 && three === 20) ||
        //two five four one three
        (two === 4 && five === 8 && four === 12 && one === 16 && three === 20) ||
        //two five four three one
        (two === 4 && five === 8 && four === 12 && three === 16 && one === 20) ||
        //two five one three four
        (two === 4 && five === 8 && one === 12 && three === 16 && four === 20) ||
        //two five one four three
        (two === 4 && five === 8 && one === 12 && four === 16 && three === 20) ||
        //two five three one four
        (two === 4 && five === 8 && three === 12 && one === 16 && four === 20) ||
        //two five three four one
        (two === 4 && five === 8 && three === 12 && four === 16 && one === 20) ||
        //one two four three five
        (one === 4 && two === 8 && four === 12 && three === 16 && five === 20) ||
        //one two four five three
        (one === 4 && two === 8 && four === 12 && five === 16 && three === 20) ||
        //four five two three one
        (four === 4 && five === 8 && two === 12 && three === 16 && one === 20) ||
        //four five two one three
        (four === 4 && five === 8 && two === 12 && one === 16 && three === 20) ||
        //four three one two five
        (four === 4 && three === 8 && one === 12 && two === 16 && five === 20) ||
        //four three one five two
        (four === 4 && three === 8 && one === 12 && five === 16 && two === 20) ||
        //four three two one five
        (four === 4 && three === 8 && two === 12 && one === 16 && five === 20) ||
        //four three two five one
        (four === 4 && three === 8 && two === 12 && five === 16 && one === 20) ||
        //four three five two one
        (four === 4 && three === 8 && five === 12 && two === 16 && one === 20) ||
        //four three five one two
        (four === 4 && three === 8 && five === 12 && one === 16 && two === 20) ||
        //four one two three five
        (four === 4 && one === 8 && two === 12 && three === 16 && five === 20) ||
        //one four three two five
        (one === 4 && four === 8 && three === 12 && two === 16 && five === 20) ||
        //one four three five two
        (one === 4 && four === 8 && three === 12 && five === 16 && two === 20) ||
        //one four two three five
        (one === 4 && four === 8 && two === 12 && three === 16 && five === 20) ||
        //one four two five three
        (one === 4 && four === 8 && two === 12 && five === 16 && three === 20) ||
        //three one two four five
        (three === 4 && one === 8 && two === 12 && four === 16 && five === 20) ||
        //three one two five four
        (three === 4 && one === 8 && two === 12 && five === 16 && four === 20) ||
        //three one four two five
        (three === 4 && one === 8 && four === 12 && two === 16 && five === 20) ||
        //three one four five two
        (three === 4 && one === 8 && four === 12 && five === 16 && two === 20) ||
        //three one five four two
        (three === 4 && one === 8 && five === 12 && four === 16 && two === 20) ||
        //three one five two four
        (three === 4 && one === 8 && five === 12 && two === 16 && four === 20) ||
        //three four two one five
        (three === 4 && four === 8 && two === 12 && one === 16 && five === 20) ||
        //three four two five one
        (three === 4 && four === 8 && two === 12 && five === 16 && one === 20) ||
        //five four two three one
        (five === 4 && four === 8 && two === 12 && three === 16 && one === 20) ||
        //five four two one three
        (five === 4 && four === 8 && two === 12 && one === 16 && three === 20) ||
        //four two five one three
        (four === 4 && two === 8 && five === 12 && one === 16 && three === 20) ||
        //four two five three one
        (four === 4 && two === 8 && five === 12 && three === 16 && one === 20) ||
        //one three four five two
        (one === 4 && three === 8 && four === 12 && five === 16 && two === 20) ||
        //one three four two five
        (one === 4 && three === 8 && four === 12 && two === 16 && five === 20) ||
        //three five one two four
        (three === 4 && five === 8 && one === 12 && two === 16 && four === 20) ||
        //three five one four two
        (three === 4 && five === 8 && one === 12 && four === 16 && two === 20) ||
        //three five four one two
        (three === 4 && five === 8 && four === 12 && one === 16 && two === 20) ||
        //three five four two one
        (three === 4 && five === 8 && four === 12 && two === 16 && one === 20) ||
        //two four three one five 
        (two === 4 && four === 8 && three === 12 && one === 16 && five === 20) ||
        //two four three five one
        (two === 4 && four === 8 && three === 12 && five === 16 && one === 20) ||
        //two four five three one
        (two === 4 && four === 8 && five === 12 && three === 16 && one === 20) ||
        //two four five one three
        (two === 4 && four === 8 && five === 12 && one === 16 && three === 20) ||
        //five one four two three
        (five === 4 && one === 8 && four === 12 && two === 16 && three === 20) ||
        //five one four three two
        (five === 4 && one === 8 && four === 12 && three === 16 && two === 20) ||
        //two three one five four
        (two === 4 && three === 8 && one === 12 && five === 16 && four === 20) ||
        //two three one four five
        (two === 4 && three === 8 && one === 12 && four === 16 && five === 20) ||
        //two three five four one
        (two === 4 && three === 8 && five === 12 && four === 16 && one === 20) ||
        //two three five one four
        (two === 4 && three === 8 && five === 12 && one === 16 && four === 20) ||
        //three two four five one
        (three === 4 && two === 8 && four === 12 && five === 16 && one === 20) ||
        //three two four one five
        (three === 4 && two === 8 && four === 12 && one === 16 && five === 20) ||
        //five three four two one
        (five === 4 && three === 8 && four === 12 && two === 16 && one === 20) ||
        //five three four one two
        (five === 4 && three === 8 && four === 12 && one === 16 && two === 20) ||
        //five two one three four
        (five === 4 && two === 8 && one === 12 && three === 16 && four === 20) ||
        //five two one four three
        (five === 4 && two === 8 && one === 12 && four === 16 && three === 20)) {
        document.getElementById('whatsOnHand').textContent = 'Straight Flush';
    } else flush();
};