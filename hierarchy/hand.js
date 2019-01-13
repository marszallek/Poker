const hand = () => {
    straightFlushBig();
};
const tillGet = (iWant) => {// for testing invokes when needed
        random();
        check();
        hand();
    let word = document.querySelector('#whatsOnHand').textContent
    if(word != iWant){
        tillGet(iWant)
    } 
};