const straightFlushSmall = () => {
    let straightFlushHearts = [4, 8, 12, 16, 20];
    let straightFlushDiamonds = [3, 7, 11, 15, 19];
    let straightFlushClubs = [2, 6, 10, 14, 18];
    let straightFlushSpades = [1, 5, 9, 13, 17];

    let whatsOnHand = [one, two, three, four, five];

    let allHearts = [];
    let allDiamonds = [];
    let allClubs = [];
    let allSpades = [];

    for (let i = 0; i < straightFlushHearts.length; i++){
        for (let j = 0; j < whatsOnHand.length; j++){
            if (straightFlushHearts[i] === whatsOnHand[j]){
                allHearts.push(straightFlushHearts[i]);
            };
        };
    };
    for (let i = 0; i < straightFlushDiamonds.length; i++){
        for (let j = 0; j < whatsOnHand.length; j++){
            if (straightFlushDiamonds[i] === whatsOnHand[j]){
                allDiamonds.push(straightFlushDiamonds[i]);
            };
        };
    };
    for (let i = 0; i < straightFlushClubs.length; i++){
        for (let j = 0; j < whatsOnHand.length; j++){
            if (straightFlushClubs[i] === whatsOnHand[j]){
                allClubs.push(straightFlushClubs[i]);
            };
        };
    };
    for (let i = 0; i < straightFlushSpades.length; i++){
        for (let j = 0; j < whatsOnHand.length; j++){
            if (straightFlushSpades[i] === whatsOnHand[j]){
                allSpades.push(straightFlushSpades[i]);
            };
        };
    };
    //console.log(score);
    if ((allHearts.length === 5) || (allDiamonds.length === 5) ||
    (allClubs.length === 5) || (allSpades.length === 5)){
    document.getElementById('whatsOnHand').textContent = 'Small Straight Flush';
    }else flush();
};