const pair = () => {
    if ( //pairs of Aces
        //one with, two, three, four and five
        ((one > 20 && one < 25) && (two > 20 && two < 25)) || ((one > 20 && one < 25) && (three > 20 && three < 25)) ||
        ((one > 20 && one < 25) && (four > 20 && four < 25)) || ((one > 20 && one < 25) && (five > 20 && five < 25)) ||
        //two with three, four and five
        ((two > 20 && two < 25) && (three > 20 && three < 25)) || ((two > 20 && two < 25) && (four > 20 && four < 25)) ||
        ((two > 20 && two < 25) && (five > 20 && five < 25)) ||
        //three with four and five
        ((three > 20 && three < 25) && (four > 20 && four < 25)) || ((three > 20 && three < 25) && (five > 20 && five < 25)) ||
        //four with five
        ((four > 20 && four < 25) && (five > 20 && five < 25))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else if ( //pairs of Kings
        //one with, two, three, four and five
        ((one > 16 && one < 21) && (two > 16 && two < 21)) || ((one > 16 && one < 21) && (three > 16 && three < 21)) ||
        ((one > 16 && one < 21) && (four > 16 && four < 21)) || ((one > 16 && one < 21) && (five > 16 && five < 21)) ||
        //two with three, four and five
        ((two > 16 && two < 21) && (three > 16 && three < 21)) || ((two > 16 && two < 21) && (four > 16 && four < 21)) ||
        ((two > 16 && two < 21) && (five > 16 && five < 21)) ||
        //three with four and five
        ((three > 16 && three < 21) && (four > 16 && four < 21)) || ((three > 16 && three < 21) && (five > 16 && five < 21)) ||
        //four with five
        ((four > 16 && four < 21) && (five > 16 && five < 21))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else if ( //pairs of Queens
        //one with, two. three, four and five
        ((one > 12 && one < 17) && (two > 12 && two < 17)) || ((one > 12 && one < 17) && (three > 12 && three < 17)) ||
        ((one > 12 && one < 17) && (four > 12 && four < 17)) || ((one > 12 && one < 17) && (five > 12 && five < 17)) ||
        //two with three, four and five
        ((two > 12 && two < 17) && (three > 12 && three < 17)) || ((two > 12 && two < 17) && (four > 12 && four < 17)) ||
        ((two > 12 && two < 17) && (five > 12 && five < 17)) ||
        //three with four and five
        ((three > 12 && three < 17) && (four > 12 && four < 17)) || ((three > 12 && three < 17) && (five > 12 && five < 17)) ||
        //four with five
        ((four > 12 && four < 17) && (five > 12 && five < 17))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else if ( //pairs of Jackss
        //one with, two. three, four and five
        ((one > 8 && one < 13) && (two > 8 && two < 13)) || ((one > 8 && one < 13) && (three > 8 && three < 13)) ||
        ((one > 8 && one < 13) && (four > 8 && four < 13)) || ((one > 8 && one < 13) && (five > 8 && five < 13)) ||
        //two with three, four and five
        ((two > 8 && two < 13) && (three > 8 && three < 13)) || ((two > 8 && two < 13) && (four > 8 && four < 13)) ||
        ((two > 8 && two < 13) && (five > 8 && five < 13)) ||
        //three with four and five
        ((three > 8 && three < 13) && (four > 8 && four < 13)) || ((three > 8 && three < 13) && (five > 8 && five < 13)) ||
        //four with five
        ((four > 8 && four < 13) && (five > 8 && five < 13))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else if ( //pairs of 10
        //one with, two. three, four and five
        ((one > 4 && one < 9) && (two > 4 && two < 9)) || ((one > 4 && one < 9) && (three > 4 && three < 9)) ||
        ((one > 4 && one < 9) && (four > 4 && four < 9)) || ((one > 4 && one < 9) && (five > 4 && five < 9)) ||
        //two with three, four and five
        ((two > 4 && two < 9) && (three > 4 && three < 9)) || ((two > 4 && two < 9) && (four > 4 && four < 9)) ||
        ((two > 4 && two < 9) && (five > 4 && five < 9)) ||
        //three with four and five
        ((three > 4 && three < 9) && (four > 4 && four < 9)) || ((three > 4 && three < 9) && (five > 4 && five < 9)) ||
        //four with five
        ((four > 4 && four < 9) && (five > 4 && five < 9))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else if ( //pairs of 9
        //one with, two. three, four and five
        ((one > 0 && one < 5) && (two > 0 && two < 5)) || ((one > 0 && one < 5) && (three > 0 && three < 5)) ||
        ((one > 0 && one < 5) && (four > 0 && four < 5)) || ((one > 0 && one < 5) && (five > 0 && five < 5)) ||
        //two with three, four and five
        ((two > 0 && two < 5) && (three > 0 && three < 5)) || ((two > 0 && two < 5) && (four > 0 && four < 5)) ||
        ((two > 0 && two < 5) && (five > 0 && five < 5)) ||
        //three with four and five
        ((three > 0 && three < 5) && (four > 0 && four < 5)) || ((three > 0 && three < 5) && (five > 0 && five < 5)) ||
        //four with five
        ((four > 0 && four < 5) && (five > 0 && five < 5))) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else document.getElementById('whatsOnHand').textContent = 'Try Again';
};