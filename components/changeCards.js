import {data} from '../app.js';
import {playButtons} from './random.js';

export const changeSelected = ({firstSelected, secondSelected, thirdSelected, fourthSelected, fifthSelected}) => {
    let cardsLeft = playButtons.allCards.length;    
    if(firstSelected){    
        data.one = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
        cardsLeft--
    }if(secondSelected){
        data.two = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
        cardsLeft--
    }if(thirdSelected){
        data.three = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
        cardsLeft--
    }if(fourthSelected){
        data.four = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
        cardsLeft--
    }if(fifthSelected){
        data.five = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
        cardsLeft--
    }
    playButtons.check();
    playButtons.whatIsOnHand();
    Object.keys(data).filter((elem) => data[elem] === true).forEach(x => data[x] = false);
    return data.round = 3;
};