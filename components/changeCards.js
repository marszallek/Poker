import {data} from '../app.js'
import {playButtons} from './random.js'

export const changeObj = {
    changeSelected: function() {
        const changeFirstOne = () => {
            if(data.firstSelected){
                data.one = playButtons.allCards.splice(Math.random()*46+1, 1)[0];
                playButtons.check();
                data.firstSelected = !data.firstSelected
            };
            console.log(playButtons.allCards)
        };
        const changeSecondOne = () => {
            if(data.secondSelected){
                data.two = playButtons.allCards.splice(Math.random()*45+1, 1)[0];
                playButtons.check();
                data.secondSelected = !data.secondSelected;
            };
            console.log(playButtons.allCards)
        };
        const changeThirdOne = () => {
            if(data.thirdSelected){
                data.three = playButtons.allCards.splice(Math.random()*44+1, 1)[0];
                playButtons.check();
                    playButtons.check();
                    data.thirdSelected = !data.thirdSelected
            };
            console.log(playButtons.allCards)
        };
        const changeFourthOne = () => {
            if(data.fourthSelected){
                data.four = playButtons.allCards.splice(Math.random()*43+1, 1)[0];
                playButtons.check();
                data.fourthSelected = !data.fourthSelected
            };
            console.log(playButtons.allCards)
        };
        const changeFifthOne = () => {
            if(data.fifthSelected){
                data.five = playButtons.allCards.splice(Math.random()*42+1, 1)[0];
                playButtons.check();
                data.fifthSelected = !data.fifthSelected
            };
            console.log(playButtons.allCards)
        };
        changeFirstOne();
        changeSecondOne();
        changeThirdOne();
        changeFourthOne();
        changeFifthOne();
        playButtons.whatIsOnHand();
        data.round = 3
    },
}