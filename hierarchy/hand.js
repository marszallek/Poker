const hand = () => {
       //straightFlush();
       //fourOfAKind();
       //fullHouse()
       //flush()
       straight();
};
const tillGet = (iWant) => {// for testing invoke when needed
    let word = document.querySelector('#whatsOnHand').innerHTML
    if(word === iWant){
        word = "ok"
    }else random();
    check();
    hand();
};