const pair = () => {
    let fourAces = [21, 22, 23, 24];
    let fourKings = [17, 18, 19, 20];
    let fourQueens = [13, 14, 15, 16];
    let fourJacks = [9, 10, 11, 12];
    let fourTens = [5, 6, 7, 8];
    let fourNines = [1, 2, 3, 4];

    let whatsOnHand = [one, two, three, four, five];

    let allAces = (y, z) => y.filter((x) => z.includes(x));
    let allKings = (y, z) => y.filter((x) => z.includes(x));
    let allQueens = (y, z) => y.filter((x) => z.includes(x));
    let allJacks = (y, z) => y.filter((x) => z.includes(x));
    let allTenns = (y, z) => y.filter((x) => z.includes(x));
    let allNines = (y, z) => y.filter((x) => z.includes(x));

    let aces = allAces(fourAces, whatsOnHand);
    let kings = allKings(fourKings, whatsOnHand);
    let queens = allQueens(fourQueens, whatsOnHand);
    let jacks = allJacks(fourJacks, whatsOnHand);
    let tenns = allTenns(fourTens, whatsOnHand);
    let nines = allNines(fourNines, whatsOnHand);

    if ((aces.length === 2) || (kings.length === 2) || (queens.length === 2) ||
        (jacks.length === 2) || (tenns.length === 2) || (nines.length === 2)) {
        document.getElementById('whatsOnHand').textContent = 'Pair';
    } else document.getElementById('whatsOnHand').textContent = 'Try Again';
};