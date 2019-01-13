const flush = () => {
if(//flush of Hearts
    //one two three four five
    (one === 4 && two === 8 && three === 12 && four === 16 && five === 24) ||
    //two three four five one
    (two === 4 && three === 8 && four === 12 && five === 16 && one === 24) ||
    //two three four one five 
    (two === 4 && three === 8 && four === 12 && one === 16 && five === 24) ||
    //three four five one two
    (three === 4 && four === 8 && five === 12 && one === 16 && two === 24) ||
    //three four five two one 
    (three === 4 && four === 8 && five === 12 && two === 16 && one === 24) ||
    //four five one two three
    (four === 4 && five === 8 && one === 12 && two === 16 && three === 24) ||
    //five one two three four
    (five === 4 && one === 8 && two === 12 && three === 16 && four === 24) ||
    //one three two four five
    (one === 4 && three === 8 && two === 12 && four === 16 && five === 24) ||
    //one two three five four
    (one === 4 && two === 8 && three === 12 && five === 16 && four === 24) ||
    //two one three four five
    (two === 4 && one === 8 && three === 12 && four === 16 && five === 24) ||
    //two one three five four 
    (two === 4 && one === 8 && three === 12 && five === 16 && five === 24) ||
    //three two one four five
    (three === 4 && two === 8 && one === 12 && four === 16 && five === 24) ||
    //three two one five four
    (three === 4 && two === 8 && one === 12 && five === 16 && four === 24) ||
    //four two three one five
    (four === 4 && two === 8 && three === 12 && one === 16 && five === 24) ||
    //four two three five one
    (four === 4 && two === 8 && three === 12 && five === 16 && one === 24) ||
    //five two three four one
    (five === 4 && two === 8 && three === 12 && four === 16 && one === 24) ||
    //five two three one four
    (five === 4 && two === 8 && three === 12 && one === 16 && four === 24) ||
    //four two one three five
    (four === 4 && two === 8 && one === 12 && three === 16 && five === 24) ||
    //four one two five three
    (four === 4 && one === 8 && two === 12 && five === 16 && three === 24) ||
    //one five two three four
    (one === 4 && five === 8 && two === 12 && three === 16 && four === 24) ||
    //three four one five two
    (three === 4 && four === 8 && one === 12 && five === 16 && two === 24) ||
    //three four one two five
    (three === 4 && four === 8 && one === 12 && two === 16 && five === 24) ||
    //one two five four three
    (one === 4 && two === 8 && five === 12 && four === 16 && three === 24) ||
    //one two five three four
    (one === 4 && two === 8 && five === 12 && three === 16 && four === 24) ||
    //two four one five three
    (two === 4 && four === 8 && one === 12 && five === 16 && three === 24) ||
    //two four one three five
    (two === 4 && four === 8 && one === 12 && three === 16 && five === 24) ||
    //five one three four two
    (five === 4 && one === 8 && three === 12 && four === 16 && two === 24) ||
    //five three two one four
    (five === 4 && three === 8 && two === 12 && one === 16 && four === 24) ||
    //five three two four one
    (five === 4 && three === 8 && two === 12 && four === 16 && one === 24) ||
    //four one three two five
    (four === 4 && one === 8 && three === 12 && two === 16 && five === 24) ||
    //five two four three one
    (five === 4 && two === 8 && four === 12 && three === 16 && one === 24) ||
    //five two four one three
    (five === 4 && two === 8 && four === 12 && one === 16 && three === 24) ||
    //five three one four two
    (five === 4 && three === 8 && one === 12 && four === 16 && two === 24) ||
    //five three one two four
    (five === 4 && three === 8 && one === 12 && two === 16 && four === 24) ||
    //four one three five two
    (four === 4 && one === 8 && three === 12 && five === 16 && two === 24) ||
    //three two five four one
    (three === 4 && two === 8 && five === 12 && four === 16 && one === 24) ||
    //three two five one four
    (three === 4 && two === 8 && five === 12 && one === 16 && four === 24) ||
    //four one five three two
    (four === 4 && one === 8 && five === 12 && three === 16 && two === 24) ||
    //four one five two three
    (four === 4 && one === 8 && five === 12 && two === 16 && three === 24) ||
    //one four five two three
    (one === 4 && four === 8 && five === 12 && two === 16 && three === 24) ||
    //five one two four three
    (five === 4 && one === 8 && two === 12 && four === 16 && three === 24) ||
    //three five two one four
    (three === 4 && five === 8 && two === 12 && one === 16 && four === 24) ||
    //three five two four one
    (three === 4 && five === 8 && two === 12 && four === 16 && one === 24) ||
    //two one five three four 
    (two === 4 && one === 8 && five === 12 && three === 16 && four === 24) ||
    //two one five four three
    (two === 4 && one === 8 && five === 12 && four === 16 && three === 24) ||
    //four five one three two
    (four === 4 && five === 8 && one === 12 && three === 16 && two === 24) ||
    //five four three one two
    (five === 4 && four === 8 && three === 12 && one === 16 && two === 24) ||
    //five four three two one
    (five === 4 && four === 8 && three === 12 && two === 16 && one === 24) ||
    //four five three one two
    (four === 4 && five === 8 && three === 12 && one === 16 && two === 24) ||
    //four five three two one
    (four === 4 && five === 8 && three === 12 && two === 16 && one === 24) ||
    //five one three two four
    (five === 4 && one === 8 && three === 12 && two === 16 && four === 24) ||
    //one three five two four
    (one === 4 && three === 8 && five === 12 && two === 16 && four === 24) ||
    //one three five four two
    (one === 4 && three === 8 && five === 12 && four === 16 && two === 24) ||
    //one four five three two
    (one === 4 && four === 8 && five === 12 && three === 16 && two === 24) ||
    //one five three two four
    (one === 4 && five === 8 && three === 12 && two === 16 && four === 24) ||
    //one five three four two
    (one === 4 && five === 8 && three === 12 && four === 16 && two === 24) ||
    //one five two four three
    (one === 4 && five === 8 && two === 12 && four === 16 && three === 24) ||
    //one five four two three
    (one === 4 && five === 8 && four === 12 && two === 16 && three === 24) ||
    //one five four three two
    (one === 4 && five === 8 && four === 12 && three === 16 && two === 24) ||
    //two one four five three
    (two === 4 && one === 8 && four === 12 && five === 16 && three === 24) ||
    //two one four three five
    (two === 4 && one === 8 && four === 12 && three === 16 && five === 24) ||
    //one three two five four
    (one === 4 && three === 8 && two === 12 && five === 16 && five === 24) ||
    //five four one three two
    (five === 4 && four === 8 && one === 12 && three === 16 && two === 24) ||
    //five four one two three
    (five === 4 && four === 8 && one === 12 && two === 16 && three === 24) ||
    //two five four one three
    (two === 4 && five === 8 && four === 12 && one === 16 && three === 24) ||
    //two five four three one
    (two === 4 && five === 8 && four === 12 && three === 16 && one === 24) ||
    //two five one three four
    (two === 4 && five === 8 && one === 12 && three === 16 && four === 24) ||
    //two five one four three
    (two === 4 && five === 8 && one === 12 && four === 16 && three === 24) ||
    //two five three one four
    (two === 4 && five === 8 && three === 12 && one === 16 && four === 24) ||
    //two five three four one
    (two === 4 && five === 8 && three === 12 && four === 16 && one === 24) ||
    //one two four three five
    (one === 4 && two === 8 && four === 12 && three === 16 && five === 24) ||
    //one two four five three
    (one === 4 && two === 8 && four === 12 && five === 16 && three === 24) ||
    //four five two three one
    (four === 4 && five === 8 && two === 12 && three === 16 && one === 24) ||
    //four five two one three
    (four === 4 && five === 8 && two === 12 && one === 16 && three === 24) ||
    //four three one two five
    (four === 4 && three === 8 && one === 12 && two === 16 && five === 24) ||
    //four three one five two
    (four === 4 && three === 8 && one === 12 && five === 16 && two === 24) ||
    //four three two one five
    (four === 4 && three === 8 && two === 12 && one === 16 && five === 24) ||
    //four three two five one
    (four === 4 && three === 8 && two === 12 && five === 16 && one === 24) ||
    //four three five two one
    (four === 4 && three === 8 && five === 12 && two === 16 && one === 24) ||
    //four three five one two
    (four === 4 && three === 8 && five === 12 && one === 16 && two === 24) ||
    //four one two three five
    (four === 4 && one === 8 && two === 12 && three === 16 && five === 24) ||
    //one four three two five
    (one === 4 && four === 8 && three === 12 && two === 16 && five === 24) ||
    //one four three five two
    (one === 4 && four === 8 && three === 12 && five === 16 && two === 24) ||
    //one four two three five
    (one === 4 && four === 8 && two === 12 && three === 16 && five === 24) ||
    //one four two five three
    (one === 4 && four === 8 && two === 12 && five === 16 && three === 24) ||
    //three one two four five
    (three === 4 && one === 8 && two === 12 && four === 16 && five === 24) ||
    //three one two five four
    (three === 4 && one === 8 && two === 12 && five === 16 && four === 24) ||
    //three one four two five
    (three === 4 && one === 8 && four === 12 && two === 16 && five === 24) ||
    //three one four five two
    (three === 4 && one === 8 && four === 12 && five === 16 && two === 24) ||
    //three one five four two
    (three === 4 && one === 8 && five === 12 && four === 16 && two === 24) ||
    //three one five two four
    (three === 4 && one === 8 && five === 12 && two === 16 && four === 24) ||
    //three four two one five
    (three === 4 && four === 8 && two === 12 && one === 16 && five === 24) ||
    //three four two five one
    (three === 4 && four === 8 && two === 12 && five === 16 && one === 24) ||
    //five four two three one
    (five === 4 && four === 8 && two === 12 && three === 16 && one === 24) ||
    //five four two one three
    (five === 4 && four === 8 && two === 12 && one === 16 && three === 24) ||
    //four two five one three
    (four === 4 && two === 8 && five === 12 && one === 16 && three === 24) ||
    //four two five three one
    (four === 4 && two === 8 && five === 12 && three === 16 && one === 24) ||
    //one three four five two
    (one === 4 && three === 8 && four === 12 && five === 16 && two === 24) ||
    //one three four two five
    (one === 4 && three === 8 && four === 12 && two === 16 && five === 24) ||
    //three five one two four
    (three === 4 && five === 8 && one === 12 && two === 16 && four === 24) ||
    //three five one four two
    (three === 4 && five === 8 && one === 12 && four === 16 && two === 24) ||
    //three five four one two
    (three === 4 && five === 8 && four === 12 && one === 16 && two === 24) ||
    //three five four two one
    (three === 4 && five === 8 && four === 12 && two === 16 && one === 24) ||
    //two four three one five 
    (two === 4 && four === 8 && three === 12 && one === 16 && five === 24) ||
    //two four three five one
    (two === 4 && four === 8 && three === 12 && five === 16 && one === 24) ||
    //two four five three one
    (two === 4 && four === 8 && five === 12 && three === 16 && one === 24) ||
    //two four five one three
    (two === 4 && four === 8 && five === 12 && one === 16 && three === 24) ||
    //five one four two three
    (five === 4 && one === 8 && four === 12 && two === 16 && three === 24) ||
    //five one four three two
    (five === 4 && one === 8 && four === 12 && three === 16 && two === 24) ||
    //two three one five four
    (two === 4 && three === 8 && one === 12 && five === 16 && four === 24) ||
    //two three one four five
    (two === 4 && three === 8 && one === 12 && four === 16 && five === 24) ||
    //two three five four one
    (two === 4 && three === 8 && five === 12 && four === 16 && one === 24) ||
    //two three five one four
    (two === 4 && three === 8 && five === 12 && one === 16 && four === 24) ||
    //three two four five one
    (three === 4 && two === 8 && four === 12 && five === 16 && one === 24) ||
    //three two four one five
    (three === 4 && two === 8 && four === 12 && one === 16 && five === 24) ||
    //five three four two one
    (five === 4 && three === 8 && four === 12 && two === 16 && one === 24) ||
    //five three four one two
    (five === 4 && three === 8 && four === 12 && one === 16 && two === 24) ||
    //five two one three four
    (five === 4 && two === 8 && one === 12 && three === 16 && four === 24) ||
    //five two one four three
    (five === 4 && two === 8 && one === 12 && four === 16 && three === 24) ||
    //one two three four five
    //flush of Diamonds
    (one === 3 && two === 7 && three === 11 && four === 15 && five === 23) ||
    //two three four five one
    (two === 3 && three === 7 && four === 11 && five === 15 && one === 23) ||
    //two three four one five 
    (two === 3 && three === 7 && four === 11 && one === 15 && five === 23) ||
    //three four five one two
    (three === 3 && four === 7 && five === 11 && one === 15 && two === 23) ||
    //three four five two one 
    (three === 3 && four === 7 && five === 11 && two === 15 && one === 23) ||
    //four five one two three
    (four === 3 && five === 7 && one === 11 && two === 15 && three === 23) ||
    //five one two three four
    (five === 3 && one === 7 && two === 11 && three === 15 && four === 23) ||
    //one three two four five
    (one === 3 && three === 7 && two === 11 && four === 15 && five === 23) ||
    //one two three five four
    (one === 3 && two === 7 && three === 11 && five === 15 && four === 23) ||
    //two one three four five
    (two === 3 && one === 7 && three === 11 && four === 15 && five === 23) ||
    //two one three five four 
    (two === 3 && one === 7 && three === 11 && five === 15 && five === 23) ||
    //three two one four five
    (three === 3 && two === 7 && one === 11 && four === 15 && five === 23) ||
    //three two one five four
    (three === 3 && two === 7 && one === 11 && five === 15 && four === 23) ||
    //four two three one five
    (four === 3 && two === 7 && three === 11 && one === 15 && five === 23) ||
    //four two three five one
    (four === 3 && two === 7 && three === 11 && five === 15 && one === 23) ||
    //five two three four one
    (five === 3 && two === 7 && three === 11 && four === 15 && one === 23) ||
    //five two three one four
    (five === 3 && two === 7 && three === 11 && one === 15 && four === 23) ||
    //four two one three five
    (four === 3 && two === 7 && one === 11 && three === 15 && five === 23) ||
    //four one two five three
    (four === 3 && one === 7 && two === 11 && five === 15 && three === 23) ||
    //one five two three four
    (one === 3 && five === 7 && two === 11 && three === 15 && four === 23) ||
    //three four one five two
    (three === 3 && four === 7 && one === 11 && five === 15 && two === 23) ||
    //three four one two five
    (three === 3 && four === 7 && one === 11 && two === 15 && five === 23) ||
    //one two five four three
    (one === 3 && two === 7 && five === 11 && four === 15 && three === 23) ||
    //one two five three four
    (one === 3 && two === 7 && five === 11 && three === 15 && four === 23) ||
    //two four one five three
    (two === 3 && four === 7 && one === 11 && five === 15 && three === 23) ||
    //two four one three five
    (two === 3 && four === 7 && one === 11 && three === 15 && five === 23) ||
    //five one three four two
    (five === 3 && one === 7 && three === 11 && four === 15 && two === 23) ||
    //five three two one four
    (five === 3 && three === 7 && two === 11 && one === 15 && four === 23) ||
    //five three two four one
    (five === 3 && three === 7 && two === 11 && four === 15 && one === 23) ||
    //four one three two five
    (four === 3 && one === 7 && three === 11 && two === 15 && five === 23) ||
    //five two four three one
    (five === 3 && two === 7 && four === 11 && three === 15 && one === 23) ||
    //five two four one three
    (five === 3 && two === 7 && four === 11 && one === 15 && three === 23) ||
    //five three one four two
    (five === 3 && three === 7 && one === 11 && four === 15 && two === 23) ||
    //five three one two four
    (five === 3 && three === 7 && one === 11 && two === 15 && four === 23) ||
    //four one three five two
    (four === 3 && one === 7 && three === 11 && five === 15 && two === 23) ||
    //three two five four one
    (three === 3 && two === 7 && five === 11 && four === 15 && one === 23) ||
    //three two five one four
    (three === 3 && two === 7 && five === 11 && one === 15 && four === 23) ||
    //four one five three two
    (four === 3 && one === 7 && five === 11 && three === 15 && two === 23) ||
    //four one five two three
    (four === 3 && one === 7 && five === 11 && two === 15 && three === 23) ||
    //one four five two three
    (one === 3 && four === 7 && five === 11 && two === 15 && three === 23) ||
    //five one two four three
    (five === 3 && one === 7 && two === 11 && four === 15 && three === 23) ||
    //three five two one four
    (three === 3 && five === 7 && two === 11 && one === 15 && four === 23) ||
    //three five two four one
    (three === 3 && five === 7 && two === 11 && four === 15 && one === 23) ||
    //two one five three four 
    (two === 3 && one === 7 && five === 11 && three === 15 && four === 23) ||
    //two one five four three
    (two === 3 && one === 7 && five === 11 && four === 15 && three === 23) ||
    //four five one three two
    (four === 3 && five === 7 && one === 11 && three === 15 && two === 23) ||
    //five four three one two
    (five === 3 && four === 7 && three === 11 && one === 15 && two === 23) ||
    //five four three two one
    (five === 3 && four === 7 && three === 11 && two === 15 && one === 23) ||
    //four five three one two
    (four === 3 && five === 7 && three === 11 && one === 15 && two === 23) ||
    //four five three two one
    (four === 3 && five === 7 && three === 11 && two === 15 && one === 23) ||
    //five one three two four
    (five === 3 && one === 7 && three === 11 && two === 15 && four === 23) ||
    //one three five two four
    (one === 3 && three === 7 && five === 11 && two === 15 && four === 23) ||
    //one three five four two
    (one === 3 && three === 7 && five === 11 && four === 15 && two === 23) ||
    //one four five three two
    (one === 3 && four === 7 && five === 11 && three === 15 && two === 23) ||
    //one five three two four
    (one === 3 && five === 7 && three === 11 && two === 15 && four === 23) ||
    //one five three four two
    (one === 3 && five === 7 && three === 11 && four === 15 && two === 23) ||
    //one five two four three
    (one === 3 && five === 7 && two === 11 && four === 15 && three === 23) ||
    //one five four two three
    (one === 3 && five === 7 && four === 11 && two === 15 && three === 23) ||
    //one five four three two
    (one === 3 && five === 7 && four === 11 && three === 15 && two === 23) ||
    //two one four five three
    (two === 3 && one === 7 && four === 11 && five === 15 && three === 23) ||
    //two one four three five
    (two === 3 && one === 7 && four === 11 && three === 15 && five === 23) ||
    //one three two five four
    (one === 3 && three === 7 && two === 11 && five === 15 && five === 23) ||
    //five four one three two
    (five === 3 && four === 7 && one === 11 && three === 15 && two === 23) ||
    //five four one two three
    (five === 3 && four === 7 && one === 11 && two === 15 && three === 23) ||
    //two five four one three
    (two === 3 && five === 7 && four === 11 && one === 15 && three === 23) ||
    //two five four three one
    (two === 3 && five === 7 && four === 11 && three === 15 && one === 23) ||
    //two five one three four
    (two === 3 && five === 7 && one === 11 && three === 15 && four === 23) ||
    //two five one four three
    (two === 3 && five === 7 && one === 11 && four === 15 && three === 23) ||
    //two five three one four
    (two === 3 && five === 7 && three === 11 && one === 15 && four === 23) ||
    //two five three four one
    (two === 3 && five === 7 && three === 11 && four === 15 && one === 23) ||
    //one two four three five
    (one === 3 && two === 7 && four === 11 && three === 15 && five === 23) ||
    //one two four five three
    (one === 3 && two === 7 && four === 11 && five === 15 && three === 23) ||
    //four five two three one
    (four === 3 && five === 7 && two === 11 && three === 15 && one === 23) ||
    //four five two one three
    (four === 3 && five === 7 && two === 11 && one === 15 && three === 23) ||
    //four three one two five
    (four === 3 && three === 7 && one === 11 && two === 15 && five === 23) ||
    //four three one five two
    (four === 3 && three === 7 && one === 11 && five === 15 && two === 23) ||
    //four three two one five
    (four === 3 && three === 7 && two === 11 && one === 15 && five === 23) ||
    //four three two five one
    (four === 3 && three === 7 && two === 11 && five === 15 && one === 23) ||
    //four three five two one
    (four === 3 && three === 7 && five === 11 && two === 15 && one === 23) ||
    //four three five one two
    (four === 3 && three === 7 && five === 11 && one === 15 && two === 23) ||
    //four one two three five
    (four === 3 && one === 7 && two === 11 && three === 15 && five === 23) ||
    //one four three two five
    (one === 3 && four === 7 && three === 11 && two === 15 && five === 23) ||
    //one four three five two
    (one === 3 && four === 7 && three === 11 && five === 15 && two === 23) ||
    //one four two three five
    (one === 3 && four === 7 && two === 11 && three === 15 && five === 23) ||
    //one four two five three
    (one === 3 && four === 7 && two === 11 && five === 15 && three === 23) ||
    //three one two four five
    (three === 3 && one === 7 && two === 11 && four === 15 && five === 23) ||
    //three one two five four
    (three === 3 && one === 7 && two === 11 && five === 15 && four === 23) ||
    //three one four two five
    (three === 3 && one === 7 && four === 11 && two === 15 && five === 23) ||
    //three one four five two
    (three === 3 && one === 7 && four === 11 && five === 15 && two === 23) ||
    //three one five four two
    (three === 3 && one === 7 && five === 11 && four === 15 && two === 23) ||
    //three one five two four
    (three === 3 && one === 7 && five === 11 && two === 15 && four === 23) ||
    //three four two one five
    (three === 3 && four === 7 && two === 11 && one === 15 && five === 23) ||
    //three four two five one
    (three === 3 && four === 7 && two === 11 && five === 15 && one === 23) ||
    //five four two three one
    (five === 3 && four === 7 && two === 11 && three === 15 && one === 23) ||
    //five four two one three
    (five === 3 && four === 7 && two === 11 && one === 15 && three === 23) ||
    //four two five one three
    (four === 3 && two === 7 && five === 11 && one === 15 && three === 23) ||
    //four two five three one
    (four === 3 && two === 7 && five === 11 && three === 15 && one === 23) ||
    //one three four five two
    (one === 3 && three === 7 && four === 11 && five === 15 && two === 23) ||
    //one three four two five
    (one === 3 && three === 7 && four === 11 && two === 15 && five === 23) ||
    //three five one two four
    (three === 3 && five === 7 && one === 11 && two === 15 && four === 23) ||
    //three five one four two
    (three === 3 && five === 7 && one === 11 && four === 15 && two === 23) ||
    //three five four one two
    (three === 3 && five === 7 && four === 11 && one === 15 && two === 23) ||
    //three five four two one
    (three === 3 && five === 7 && four === 11 && two === 15 && one === 23) ||
    //two four three one five 
    (two === 3 && four === 7 && three === 11 && one === 15 && five === 23) ||
    //two four three five one
    (two === 3 && four === 7 && three === 11 && five === 15 && one === 23) ||
    //two four five three one
    (two === 3 && four === 7 && five === 11 && three === 15 && one === 23) ||
    //two four five one three
    (two === 3 && four === 7 && five === 11 && one === 15 && three === 23) ||
    //five one four two three
    (five === 3 && one === 7 && four === 11 && two === 15 && three === 23) ||
    //five one four three two
    (five === 3 && one === 7 && four === 11 && three === 15 && two === 23) ||
    //two three one five four
    (two === 3 && three === 7 && one === 11 && five === 15 && four === 23) ||
    //two three one four five
    (two === 3 && three === 7 && one === 11 && four === 15 && five === 23) ||
    //two three five four one
    (two === 3 && three === 7 && five === 11 && four === 15 && one === 23) ||
    //two three five one four
    (two === 3 && three === 7 && five === 11 && one === 15 && four === 23) ||
    //three two four five one
    (three === 3 && two === 7 && four === 11 && five === 15 && one === 23) ||
    //three two four one five
    (three === 3 && two === 7 && four === 11 && one === 15 && five === 23) ||
    //five three four two one
    (five === 3 && three === 7 && four === 11 && two === 15 && one === 23) ||
    //five three four one two
    (five === 3 && three === 7 && four === 11 && one === 15 && two === 23) ||
    //five two one three four
    (five === 3 && two === 7 && one === 11 && three === 15 && four === 23) ||
    //five two one four three
    (five === 3 && two === 7 && one === 11 && four === 15 && three === 23) ||
    //one two three four five
    //Flush Of Clubs
    (one === 2 && two === 6 && three === 10 && four === 14 && five === 22) ||
    //two three four five one
    (two === 2 && three === 6 && four === 10 && five === 14 && one === 22) ||
    //two three four one five 
    (two === 2 && three === 6 && four === 10 && one === 14 && five === 22) ||
    //three four five one two
    (three === 2 && four === 6 && five === 10 && one === 14 && two === 22) ||
    //three four five two one 
    (three === 2 && four === 6 && five === 10 && two === 14 && one === 22) ||
    //four five one two three
    (four === 2 && five === 6 && one === 10 && two === 14 && three === 22) ||
    //five one two three four
    (five === 2 && one === 6 && two === 10 && three === 14 && four === 22) ||
    //one three two four five
    (one === 2 && three === 6 && two === 10 && four === 14 && five === 22) ||
    //one two three five four
    (one === 2 && two === 6 && three === 10 && five === 14 && four === 22) ||
    //two one three four five
    (two === 2 && one === 6 && three === 10 && four === 14 && five === 22) ||
    //two one three five four 
    (two === 2 && one === 6 && three === 10 && five === 14 && five === 22) ||
    //three two one four five
    (three === 2 && two === 6 && one === 10 && four === 14 && five === 22) ||
    //three two one five four
    (three === 2 && two === 6 && one === 10 && five === 14 && four === 22) ||
    //four two three one five
    (four === 2 && two === 6 && three === 10 && one === 14 && five === 22) ||
    //four two three five one
    (four === 2 && two === 6 && three === 10 && five === 14 && one === 22) ||
    //five two three four one
    (five === 2 && two === 6 && three === 10 && four === 14 && one === 22) ||
    //five two three one four
    (five === 2 && two === 6 && three === 10 && one === 14 && four === 22) ||
    //four two one three five
    (four === 2 && two === 6 && one === 10 && three === 14 && five === 22) ||
    //four one two five three
    (four === 2 && one === 6 && two === 10 && five === 14 && three === 22) ||
    //one five two three four
    (one === 2 && five === 6 && two === 10 && three === 14 && four === 22) ||
    //three four one five two
    (three === 2 && four === 6 && one === 10 && five === 14 && two === 22) ||
    //three four one two five
    (three === 2 && four === 6 && one === 10 && two === 14 && five === 22) ||
    //one two five four three
    (one === 2 && two === 6 && five === 10 && four === 14 && three === 22) ||
    //one two five three four
    (one === 2 && two === 6 && five === 10 && three === 14 && four === 22) ||
    //two four one five three
    (two === 2 && four === 6 && one === 10 && five === 14 && three === 22) ||
    //two four one three five
    (two === 2 && four === 6 && one === 10 && three === 14 && five === 22) ||
    //five one three four two
    (five === 2 && one === 6 && three === 10 && four === 14 && two === 22) ||
    //five three two one four
    (five === 2 && three === 6 && two === 10 && one === 14 && four === 22) ||
    //five three two four one
    (five === 2 && three === 6 && two === 10 && four === 14 && one === 22) ||
    //four one three two five
    (four === 2 && one === 6 && three === 10 && two === 14 && five === 22) ||
    //five two four three one
    (five === 2 && two === 6 && four === 10 && three === 14 && one === 22) ||
    //five two four one three
    (five === 2 && two === 6 && four === 10 && one === 14 && three === 22) ||
    //five three one four two
    (five === 2 && three === 6 && one === 10 && four === 14 && two === 22) ||
    //five three one two four
    (five === 2 && three === 6 && one === 10 && two === 14 && four === 22) ||
    //four one three five two
    (four === 2 && one === 6 && three === 10 && five === 14 && two === 22) ||
    //three two five four one
    (three === 2 && two === 6 && five === 10 && four === 14 && one === 22) ||
    //three two five one four
    (three === 2 && two === 6 && five === 10 && one === 14 && four === 22) ||
    //four one five three two
    (four === 2 && one === 6 && five === 10 && three === 14 && two === 22) ||
    //four one five two three
    (four === 2 && one === 6 && five === 10 && two === 14 && three === 22) ||
    //one four five two three
    (one === 2 && four === 6 && five === 10 && two === 14 && three === 22) ||
    //five one two four three
    (five === 2 && one === 6 && two === 10 && four === 14 && three === 22) ||
    //three five two one four
    (three === 2 && five === 6 && two === 10 && one === 14 && four === 22) ||
    //three five two four one
    (three === 2 && five === 6 && two === 10 && four === 14 && one === 22) ||
    //two one five three four 
    (two === 2 && one === 6 && five === 10 && three === 14 && four === 22) ||
    //two one five four three
    (two === 2 && one === 6 && five === 10 && four === 14 && three === 22) ||
    //four five one three two
    (four === 2 && five === 6 && one === 10 && three === 14 && two === 22) ||
    //five four three one two
    (five === 2 && four === 6 && three === 10 && one === 14 && two === 22) ||
    //five four three two one
    (five === 2 && four === 6 && three === 10 && two === 14 && one === 22) ||
    //four five three one two
    (four === 2 && five === 6 && three === 10 && one === 14 && two === 22) ||
    //four five three two one
    (four === 2 && five === 6 && three === 10 && two === 14 && one === 22) ||
    //five one three two four
    (five === 2 && one === 6 && three === 10 && two === 14 && four === 22) ||
    //one three five two four
    (one === 2 && three === 6 && five === 10 && two === 14 && four === 22) ||
    //one three five four two
    (one === 2 && three === 6 && five === 10 && four === 14 && two === 22) ||
    //one four five three two
    (one === 2 && four === 6 && five === 10 && three === 14 && two === 22) ||
    //one five three two four
    (one === 2 && five === 6 && three === 10 && two === 14 && four === 22) ||
    //one five three four two
    (one === 2 && five === 6 && three === 10 && four === 14 && two === 22) ||
    //one five two four three
    (one === 2 && five === 6 && two === 10 && four === 14 && three === 22) ||
    //one five four two three
    (one === 2 && five === 6 && four === 10 && two === 14 && three === 22) ||
    //one five four three two
    (one === 2 && five === 6 && four === 10 && three === 14 && two === 22) ||
    //two one four five three
    (two === 2 && one === 6 && four === 10 && five === 14 && three === 22) ||
    //two one four three five
    (two === 2 && one === 6 && four === 10 && three === 14 && five === 22) ||
    //one three two five four
    (one === 2 && three === 6 && two === 10 && five === 14 && five === 22) ||
    //five four one three two
    (five === 2 && four === 6 && one === 10 && three === 14 && two === 22) ||
    //five four one two three
    (five === 2 && four === 6 && one === 10 && two === 14 && three === 22) ||
    //two five four one three
    (two === 2 && five === 6 && four === 10 && one === 14 && three === 22) ||
    //two five four three one
    (two === 2 && five === 6 && four === 10 && three === 14 && one === 22) ||
    //two five one three four
    (two === 2 && five === 6 && one === 10 && three === 14 && four === 22) ||
    //two five one four three
    (two === 2 && five === 6 && one === 10 && four === 14 && three === 22) ||
    //two five three one four
    (two === 2 && five === 6 && three === 10 && one === 14 && four === 22) ||
    //two five three four one
    (two === 2 && five === 6 && three === 10 && four === 14 && one === 22) ||
    //one two four three five
    (one === 2 && two === 6 && four === 10 && three === 14 && five === 22) ||
    //one two four five three
    (one === 2 && two === 6 && four === 10 && five === 14 && three === 22) ||
    //four five two three one
    (four === 2 && five === 6 && two === 10 && three === 14 && one === 22) ||
    //four five two one three
    (four === 2 && five === 6 && two === 10 && one === 14 && three === 22) ||
    //four three one two five
    (four === 2 && three === 6 && one === 10 && two === 14 && five === 22) ||
    //four three one five two
    (four === 2 && three === 6 && one === 10 && five === 14 && two === 22) ||
    //four three two one five
    (four === 2 && three === 6 && two === 10 && one === 14 && five === 22) ||
    //four three two five one
    (four === 2 && three === 6 && two === 10 && five === 14 && one === 22) ||
    //four three five two one
    (four === 2 && three === 6 && five === 10 && two === 14 && one === 22) ||
    //four three five one two
    (four === 2 && three === 6 && five === 10 && one === 14 && two === 22) ||
    //four one two three five
    (four === 2 && one === 6 && two === 10 && three === 14 && five === 22) ||
    //one four three two five
    (one === 2 && four === 6 && three === 10 && two === 14 && five === 22) ||
    //one four three five two
    (one === 2 && four === 6 && three === 10 && five === 14 && two === 22) ||
    //one four two three five
    (one === 2 && four === 6 && two === 10 && three === 14 && five === 22) ||
    //one four two five three
    (one === 2 && four === 6 && two === 10 && five === 14 && three === 22) ||
    //three one two four five
    (three === 2 && one === 6 && two === 10 && four === 14 && five === 22) ||
    //three one two five four
    (three === 2 && one === 6 && two === 10 && five === 14 && four === 22) ||
    //three one four two five
    (three === 2 && one === 6 && four === 10 && two === 14 && five === 22) ||
    //three one four five two
    (three === 2 && one === 6 && four === 10 && five === 14 && two === 22) ||
    //three one five four two
    (three === 2 && one === 6 && five === 10 && four === 14 && two === 22) ||
    //three one five two four
    (three === 2 && one === 6 && five === 10 && two === 14 && four === 22) ||
    //three four two one five
    (three === 2 && four === 6 && two === 10 && one === 14 && five === 22) ||
    //three four two five one
    (three === 2 && four === 6 && two === 10 && five === 14 && one === 22) ||
    //five four two three one
    (five === 2 && four === 6 && two === 10 && three === 14 && one === 22) ||
    //five four two one three
    (five === 2 && four === 6 && two === 10 && one === 14 && three === 22) ||
    //four two five one three
    (four === 2 && two === 6 && five === 10 && one === 14 && three === 22) ||
    //four two five three one
    (four === 2 && two === 6 && five === 10 && three === 14 && one === 22) ||
    //one three four five two
    (one === 2 && three === 6 && four === 10 && five === 14 && two === 22) ||
    //one three four two five
    (one === 2 && three === 6 && four === 10 && two === 14 && five === 22) ||
    //three five one two four
    (three === 2 && five === 6 && one === 10 && two === 14 && four === 22) ||
    //three five one four two
    (three === 2 && five === 6 && one === 10 && four === 14 && two === 22) ||
    //three five four one two
    (three === 2 && five === 6 && four === 10 && one === 14 && two === 22) ||
    //three five four two one
    (three === 2 && five === 6 && four === 10 && two === 14 && one === 22) ||
    //two four three one five 
    (two === 2 && four === 6 && three === 10 && one === 14 && five === 22) ||
    //two four three five one
    (two === 2 && four === 6 && three === 10 && five === 14 && one === 22) ||
    //two four five three one
    (two === 2 && four === 6 && five === 10 && three === 14 && one === 22) ||
    //two four five one three
    (two === 2 && four === 6 && five === 10 && one === 14 && three === 22) ||
    //five one four two three
    (five === 2 && one === 6 && four === 10 && two === 14 && three === 22) ||
    //five one four three two
    (five === 2 && one === 6 && four === 10 && three === 14 && two === 22) ||
    //two three one five four
    (two === 2 && three === 6 && one === 10 && five === 14 && four === 22) ||
    //two three one four five
    (two === 2 && three === 6 && one === 10 && four === 14 && five === 22) ||
    //two three five four one
    (two === 2 && three === 6 && five === 10 && four === 14 && one === 22) ||
    //two three five one four
    (two === 2 && three === 6 && five === 10 && one === 14 && four === 22) ||
    //three two four five one
    (three === 2 && two === 6 && four === 10 && five === 14 && one === 22) ||
    //three two four one five
    (three === 2 && two === 6 && four === 10 && one === 14 && five === 22) ||
    //five three four two one
    (five === 2 && three === 6 && four === 10 && two === 14 && one === 22) ||
    //five three four one two
    (five === 2 && three === 6 && four === 10 && one === 14 && two === 22) ||
    //five two one three four
    (five === 2 && two === 6 && one === 10 && three === 14 && four === 22) ||
    //five two one four three
    (five === 2 && two === 6 && one === 10 && four === 14 && three === 22) ||
    //Flush Of Spades
    //one two three four five
    (one === 1 && two === 5 && three === 9 && four === 13 && five === 21) ||
    //two three four five one
    (two === 1 && three === 5 && four === 9 && five === 13 && one === 21) ||
    //two three four one five 
    (two === 1 && three === 5 && four === 9 && one === 13 && five === 21) ||
    //three four five one two
    (three === 1 && four === 5 && five === 9 && one === 13 && two === 21) ||
    //three four five two one 
    (three === 1 && four === 5 && five === 9 && two === 13 && one === 21) ||
    //four five one two three
    (four === 1 && five === 5 && one === 9 && two === 13 && three === 21) ||
    //five one two three four
    (five === 1 && one === 5 && two === 9 && three === 13 && four === 21) ||
    //one three two four five
    (one === 1 && three === 5 && two === 9 && four === 13 && five === 21) ||
    //one two three five four
    (one === 1 && two === 5 && three === 9 && five === 13 && four === 21) ||
    //two one three four five
    (two === 1 && one === 5 && three === 9 && four === 13 && five === 21) ||
    //two one three five four 
    (two === 1 && one === 5 && three === 9 && five === 13 && five === 21) ||
    //three two one four five
    (three === 1 && two === 5 && one === 9 && four === 13 && five === 21) ||
    //three two one five four
    (three === 1 && two === 5 && one === 9 && five === 13 && four === 21) ||
    //four two three one five
    (four === 1 && two === 5 && three === 9 && one === 13 && five === 21) ||
    //four two three five one
    (four === 1 && two === 5 && three === 9 && five === 13 && one === 21) ||
    //five two three four one
    (five === 1 && two === 5 && three === 9 && four === 13 && one === 21) ||
    //five two three one four
    (five === 1 && two === 5 && three === 9 && one === 13 && four === 21) ||
    //four two one three five
    (four === 1 && two === 5 && one === 9 && three === 13 && five === 21) ||
    //four one two five three
    (four === 1 && one === 5 && two === 9 && five === 13 && three === 21) ||
    //one five two three four
    (one === 1 && five === 5 && two === 9 && three === 13 && four === 21) ||
    //three four one five two
    (three === 1 && four === 5 && one === 9 && five === 13 && two === 21) ||
    //three four one two five
    (three === 1 && four === 5 && one === 9 && two === 13 && five === 21) ||
    //one two five four three
    (one === 1 && two === 5 && five === 9 && four === 13 && three === 21) ||
    //one two five three four
    (one === 1 && two === 5 && five === 9 && three === 13 && four === 21) ||
    //two four one five three
    (two === 1 && four === 5 && one === 9 && five === 13 && three === 21) ||
    //two four one three five
    (two === 1 && four === 5 && one === 9 && three === 13 && five === 21) ||
    //five one three four two
    (five === 1 && one === 5 && three === 9 && four === 13 && two === 21) ||
    //five three two one four
    (five === 1 && three === 5 && two === 9 && one === 13 && four === 21) ||
    //five three two four one
    (five === 1 && three === 5 && two === 9 && four === 13 && one === 21) ||
    //four one three two five
    (four === 1 && one === 5 && three === 9 && two === 13 && five === 21) ||
    //five two four three one
    (five === 1 && two === 5 && four === 9 && three === 13 && one === 21) ||
    //five two four one three
    (five === 1 && two === 5 && four === 9 && one === 13 && three === 21) ||
    //five three one four two
    (five === 1 && three === 5 && one === 9 && four === 13 && two === 21) ||
    //five three one two four
    (five === 1 && three === 5 && one === 9 && two === 13 && four === 21) ||
    //four one three five two
    (four === 1 && one === 5 && three === 9 && five === 13 && two === 21) ||
    //three two five four one
    (three === 1 && two === 5 && five === 9 && four === 13 && one === 21) ||
    //three two five one four
    (three === 1 && two === 5 && five === 9 && one === 13 && four === 21) ||
    //four one five three two
    (four === 1 && one === 5 && five === 9 && three === 13 && two === 21) ||
    //four one five two three
    (four === 1 && one === 5 && five === 9 && two === 13 && three === 21) ||
    //one four five two three
    (one === 1 && four === 5 && five === 9 && two === 13 && three === 21) ||
    //five one two four three
    (five === 1 && one === 5 && two === 9 && four === 13 && three === 21) ||
    //three five two one four
    (three === 1 && five === 5 && two === 9 && one === 13 && four === 21) ||
    //three five two four one
    (three === 1 && five === 5 && two === 9 && four === 13 && one === 21) ||
    //two one five three four 
    (two === 1 && one === 5 && five === 9 && three === 13 && four === 21) ||
    //two one five four three
    (two === 1 && one === 5 && five === 9 && four === 13 && three === 21) ||
    //four five one three two
    (four === 1 && five === 5 && one === 9 && three === 13 && two === 21) ||
    //five four three one two
    (five === 1 && four === 5 && three === 9 && one === 13 && two === 21) ||
    //five four three two one
    (five === 1 && four === 5 && three === 9 && two === 13 && one === 21) ||
    //four five three one two
    (four === 1 && five === 5 && three === 9 && one === 13 && two === 21) ||
    //four five three two one
    (four === 1 && five === 5 && three === 9 && two === 13 && one === 21) ||
    //five one three two four
    (five === 1 && one === 5 && three === 9 && two === 13 && four === 21) ||
    //one three five two four
    (one === 1 && three === 5 && five === 9 && two === 13 && four === 21) ||
    //one three five four two
    (one === 1 && three === 5 && five === 9 && four === 13 && two === 21) ||
    //one four five three two
    (one === 1 && four === 5 && five === 9 && three === 13 && two === 21) ||
    //one five three two four
    (one === 1 && five === 5 && three === 9 && two === 13 && four === 21) ||
    //one five three four two
    (one === 1 && five === 5 && three === 9 && four === 13 && two === 21) ||
    //one five two four three
    (one === 1 && five === 5 && two === 9 && four === 13 && three === 21) ||
    //one five four two three
    (one === 1 && five === 5 && four === 9 && two === 13 && three === 21) ||
    //one five four three two
    (one === 1 && five === 5 && four === 9 && three === 13 && two === 21) ||
    //two one four five three
    (two === 1 && one === 5 && four === 9 && five === 13 && three === 21) ||
    //two one four three five
    (two === 1 && one === 5 && four === 9 && three === 13 && five === 21) ||
    //one three two five four
    (one === 1 && three === 5 && two === 9 && five === 13 && five === 21) ||
    //five four one three two
    (five === 1 && four === 5 && one === 9 && three === 13 && two === 21) ||
    //five four one two three
    (five === 1 && four === 5 && one === 9 && two === 13 && three === 21) ||
    //two five four one three
    (two === 1 && five === 5 && four === 9 && one === 13 && three === 21) ||
    //two five four three one
    (two === 1 && five === 5 && four === 9 && three === 13 && one === 21) ||
    //two five one three four
    (two === 1 && five === 5 && one === 9 && three === 13 && four === 21) ||
    //two five one four three
    (two === 1 && five === 5 && one === 9 && four === 13 && three === 21) ||
    //two five three one four
    (two === 1 && five === 5 && three === 9 && one === 13 && four === 21) ||
    //two five three four one
    (two === 1 && five === 5 && three === 9 && four === 13 && one === 21) ||
    //one two four three five
    (one === 1 && two === 5 && four === 9 && three === 13 && five === 21) ||
    //one two four five three
    (one === 1 && two === 5 && four === 9 && five === 13 && three === 21) ||
    //four five two three one
    (four === 1 && five === 5 && two === 9 && three === 13 && one === 21) ||
    //four five two one three
    (four === 1 && five === 5 && two === 9 && one === 13 && three === 21) ||
    //four three one two five
    (four === 1 && three === 5 && one === 9 && two === 13 && five === 21) ||
    //four three one five two
    (four === 1 && three === 5 && one === 9 && five === 13 && two === 21) ||
    //four three two one five
    (four === 1 && three === 5 && two === 9 && one === 13 && five === 21) ||
    //four three two five one
    (four === 1 && three === 5 && two === 9 && five === 13 && one === 21) ||
    //four three five two one
    (four === 1 && three === 5 && five === 9 && two === 13 && one === 21) ||
    //four three five one two
    (four === 1 && three === 5 && five === 9 && one === 13 && two === 21) ||
    //four one two three five
    (four === 1 && one === 5 && two === 9 && three === 13 && five === 21) ||
    //one four three two five
    (one === 1 && four === 5 && three === 9 && two === 13 && five === 21) ||
    //one four three five two
    (one === 1 && four === 5 && three === 9 && five === 13 && two === 21) ||
    //one four two three five
    (one === 1 && four === 5 && two === 9 && three === 13 && five === 21) ||
    //one four two five three
    (one === 1 && four === 5 && two === 9 && five === 13 && three === 21) ||
    //three one two four five
    (three === 1 && one === 5 && two === 9 && four === 13 && five === 21) ||
    //three one two five four
    (three === 1 && one === 5 && two === 9 && five === 13 && four === 21) ||
    //three one four two five
    (three === 1 && one === 5 && four === 9 && two === 13 && five === 21) ||
    //three one four five two
    (three === 1 && one === 5 && four === 9 && five === 13 && two === 21) ||
    //three one five four two
    (three === 1 && one === 5 && five === 9 && four === 13 && two === 21) ||
    //three one five two four
    (three === 1 && one === 5 && five === 9 && two === 13 && four === 21) ||
    //three four two one five
    (three === 1 && four === 5 && two === 9 && one === 13 && five === 21) ||
    //three four two five one
    (three === 1 && four === 5 && two === 9 && five === 13 && one === 21) ||
    //five four two three one
    (five === 1 && four === 5 && two === 9 && three === 13 && one === 21) ||
    //five four two one three
    (five === 1 && four === 5 && two === 9 && one === 13 && three === 21) ||
    //four two five one three
    (four === 1 && two === 5 && five === 9 && one === 13 && three === 21) ||
    //four two five three one
    (four === 1 && two === 5 && five === 9 && three === 13 && one === 21) ||
    //one three four five two
    (one === 1 && three === 5 && four === 9 && five === 13 && two === 21) ||
    //one three four two five
    (one === 1 && three === 5 && four === 9 && two === 13 && five === 21) ||
    //three five one two four
    (three === 1 && five === 5 && one === 9 && two === 13 && four === 21) ||
    //three five one four two
    (three === 1 && five === 5 && one === 9 && four === 13 && two === 21) ||
    //three five four one two
    (three === 1 && five === 5 && four === 9 && one === 13 && two === 21) ||
    //three five four two one
    (three === 1 && five === 5 && four === 9 && two === 13 && one === 21) ||
    //two four three one five 
    (two === 1 && four === 5 && three === 9 && one === 13 && five === 21) ||
    //two four three five one
    (two === 1 && four === 5 && three === 9 && five === 13 && one === 21) ||
    //two four five three one
    (two === 1 && four === 5 && five === 9 && three === 13 && one === 21) ||
    //two four five one three
    (two === 1 && four === 5 && five === 9 && one === 13 && three === 21) ||
    //five one four two three
    (five === 1 && one === 5 && four === 9 && two === 13 && three === 21) ||
    //five one four three two
    (five === 1 && one === 5 && four === 9 && three === 13 && two === 21) ||
    //two three one five four
    (two === 1 && three === 5 && one === 9 && five === 13 && four === 21) ||
    //two three one four five
    (two === 1 && three === 5 && one === 9 && four === 13 && five === 21) ||
    //two three five four one
    (two === 1 && three === 5 && five === 9 && four === 13 && one === 21) ||
    //two three five one four
    (two === 1 && three === 5 && five === 9 && one === 13 && four === 21) ||
    //three two four five one
    (three === 1 && two === 5 && four === 9 && five === 13 && one === 21) ||
    //three two four one five
    (three === 1 && two === 5 && four === 9 && one === 13 && five === 21) ||
    //five three four two one
    (five === 1 && three === 5 && four === 9 && two === 13 && one === 21) ||
    //five three four one two
    (five === 1 && three === 5 && four === 9 && one === 13 && two === 21) ||
    //five two one three four
    (five === 1 && two === 5 && one === 9 && three === 13 && four === 21) ||
    //five two one four three
    (five === 1 && two === 5 && one === 9 && four === 13 && three === 21)){
    document.getElementById('whatsOnHand').textContent = 'Flush';
    }else fourOfAKind();
}; 