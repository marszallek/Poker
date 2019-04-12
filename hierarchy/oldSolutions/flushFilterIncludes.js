const flush = () => {
    let straightFlushHearts = [4, 8, 12, 16, 24];
    let straightFlushDiamonds = [3, 7, 11, 15, 23];
    let straightFlushClubs = [2, 6, 10, 14, 22];
    let straightFlushSpades = [1, 5, 9, 13, 21];

    let whatsOnHand = [one, two, three, four, five];

    let allHearts = (y, z) => y.filter((x) => z.includes(x));
    let allDiamonds = (y, z) => y.filter((x) => z.includes(x));
    let allClubs = (y, z) => y.filter((x) => z.includes(x));
    let allSpades = (y, z) => y.filter((x) => z.includes(x));

    let flushOfHeartsOnHand = allHearts(straightFlushHearts, whatsOnHand);
    let flushOfDiamondsOnHand = allDiamonds(straightFlushDiamonds, whatsOnHand);
    let flushOfClubssOnHand = allClubs(straightFlushClubs, whatsOnHand);
    let flushOfSpadesOnHand = allSpades(straightFlushSpades, whatsOnHand);

    if ((flushOfHeartsOnHand.length === 5) || (flushOfDiamondsOnHand.length === 5) ||
        (flushOfClubssOnHand.length === 5) || (flushOfSpadesOnHand.length === 5)) {
        document.getElementById('whatsOnHand').textContent = 'Flush';
    } else fourOfAKind();
};