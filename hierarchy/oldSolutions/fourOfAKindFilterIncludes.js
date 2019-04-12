const fourOfAKind = () => {
    let fourOfAKindAces = [21, 22, 23, 24];
    let fourOfAKindKings = [17, 18, 19, 20];
    let fourOfAKindQueens = [13, 14, 15, 16];
    let fourOfAKindJacks = [9, 10, 11, 12];
    let fourOfAKindTens = [5, 6, 7, 8];
    let fourOfAKindNines = [1, 2, 3, 4];

    let whatsOnHand = [one, two, three, four, five];

    let allAces = (y, z) => y.filter((x) => z.includes(x));
    let allKings = (y, z) => y.filter((x) => z.includes(x));
    let allQueens = (y, z) => y.filter((x) => z.includes(x));
    let allJacks = (y, z) => y.filter((x) => z.includes(x));
    let allTenns = (y, z) => y.filter((x) => z.includes(x));
    let allNines = (y, z) => y.filter((x) => z.includes(x));

    let fourOfAKindAcesOnHand = allAces(fourOfAKindAces, whatsOnHand);
    let fourOfAKindKingsOnHand = allKings(fourOfAKindKings, whatsOnHand);
    let fourOfAKindQueensOnHand = allQueens(fourOfAKindQueens, whatsOnHand);
    let fourOfAKindJacksOnHand = allJacks(fourOfAKindJacks, whatsOnHand);
    let fourOfAKindTennsOnHand = allTenns(fourOfAKindTens, whatsOnHand);
    let fourOfAKindNinesOnHand = allNines(fourOfAKindNines, whatsOnHand);

    if ((fourOfAKindAcesOnHand.length === 4) || (fourOfAKindKingsOnHand.length === 4) ||
        (fourOfAKindQueensOnHand.length === 4) || (fourOfAKindJacksOnHand.length === 4) ||
        (fourOfAKindTennsOnHand.length === 4) || (fourOfAKindNinesOnHand.length === 4)) {
        document.getElementById('whatsOnHand').innerHTML = 'Four Of a Kind';
    } else fullHouse();
};