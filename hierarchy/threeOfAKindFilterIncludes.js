const threeOfAKind = () => {
    let fourOfAces = [21, 22, 23, 24];
    let fourOfKings = [17, 18, 19, 20];
    let fourOfQueens = [13, 14, 15, 16];
    let fourOfJacks = [9, 10, 11, 12];
    let fourOfTens = [5, 6, 7, 8];
    let fourOfNines = [1, 2, 3, 4];

    let whatsOnHand = [one, two, three, four, five];

    let allAces = (y, z) => y.filter((x) => z.includes(x));
    let allKings = (y, z) => y.filter((x) => z.includes(x));
    let allQueens = (y, z) => y.filter((x) => z.includes(x));
    let allJacks = (y, z) => y.filter((x) => z.includes(x));
    let allTenns = (y, z) => y.filter((x) => z.includes(x));
    let allNines = (y, z) => y.filter((x) => z.includes(x));

    let aces = allAces(fourOfAces, whatsOnHand);
    let kings = allKings(fourOfKings, whatsOnHand);
    let queens = allQueens(fourOfQueens, whatsOnHand);
    let jacks = allJacks(fourOfJacks, whatsOnHand);
    let tenns = allTenns(fourOfTens, whatsOnHand);
    let nines = allNines(fourOfNines, whatsOnHand);

    if ((aces.length === 3) || (kings.length === 3) || (queens.length === 3) ||
        (jacks.length === 3) || (tenns.length === 3) || (nines.length === 3)) {
        document.getElementById('whatsOnHand').textContent = 'Three of a Kind';
    } else twoPair();
};