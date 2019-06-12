import {data} from '../app.js';
import {playButtons} from './random.js';

export const changeObj = {
    changeSelected: function() {
        const changeFirstOne = () => {
            if(data.firstSelected){
                let cardsLeft = playButtons.allCards.length;
                data.one = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
                playButtons.check();
                data.firstSelected = !data.firstSelected;
            }
        };
        const changeSecondOne = () => {
            if(data.secondSelected){
                let cardsLeft = playButtons.allCards.length;
                data.two = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
                playButtons.check();
                data.secondSelected = !data.secondSelected;
            }
        };
        const changeThirdOne = () => {
            if(data.thirdSelected){
                let cardsLeft = playButtons.allCards.length;
                data.three = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
                playButtons.check();
                data.thirdSelected = !data.thirdSelected;
            }
        };
        const changeFourthOne = () => {
            if(data.fourthSelected){
                let cardsLeft = playButtons.allCards.length;
                data.four = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
                playButtons.check();
                data.fourthSelected = !data.fourthSelected;
            }
        };
        const changeFifthOne = () => {
            if(data.fifthSelected){
                let cardsLeft = playButtons.allCards.length;
                data.five = playButtons.allCards.splice(Math.random()*cardsLeft, 1)[0];
                playButtons.check();
                data.fifthSelected = !data.fifthSelected;
            }
        };
        changeFirstOne();
        changeSecondOne();
        changeThirdOne();
        changeFourthOne();
        changeFifthOne();
        playButtons.whatIsOnHand();
        data.round = 3;
    },
};