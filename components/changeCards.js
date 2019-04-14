import {data} from '../app.js'
import {playButtons} from './random.js'

export const changeObj = {
    changeSelected: function() {
        const changeFirstOne = () => {
            if(data.firstSelected){
                let newOne;
                newOne = Math.floor(Math.random() * 24 + 1);
                if (newOne != data.one && newOne != data.two && newOne != data.three && newOne != data.four && newOne != data.five) {
                    data.one = newOne;
                    playButtons.check();
                    data.firstSelected = !data.firstSelected;
                }else changeFirstOne()
            };
        };
        const changeSecondOne = () => {
            if(data.secondSelected){
                let newTwo;
                newTwo = Math.floor(Math.random() * 24 + 1);
                if (newTwo != data.one && newTwo != data.two && newTwo != data.three && newTwo != data.four && newTwo != data.five) {
                    data.two = newTwo;
                    playButtons.check();
                    data.secondSelected = !data.secondSelected;
                }else changeSecondOne()
            };
        };
        const changeThirdOne = () => {
            if(data.thirdSelected){
                let newThree;
                newThree = Math.floor(Math.random() * 24 + 1);
                if (newThree != data.one && newThree != data.two && newThree != data.three && newThree != data.four && newThree != data.five) {
                    data.three = newThree;
                    playButtons.check();
                    data.thirdSelected = !data.thirdSelected;
                }else changeThirdOne()
            };
        };
        const changeFourthOne = () => {
            if(data.fourthSelected){
                let newFour;
                newFour = Math.floor(Math.random() * 24 + 1);
                if (newFour != data.one && newFour != data.two && newFour != data.three && newFour != data.four && newFour != data.five) {
                    data.four = newFour;
                    playButtons.check();
                    data.fourthSelected = !data.fourthSelected;
                }else changeFourthOne()
            };
        };
        const changeFifthOne = () => {
            if(data.fifthSelected){
                let newFive;
                newFive = Math.floor(Math.random() * 24 + 1);
                if (newFive != data.one && newFive != data.two && newFive != data.three && newFive != data.four && newFive != data.five) {
                    data.five = newFive;
                    playButtons.check();
                    data.fifthSelected = !data.fifthSelected;
                }else changeFifthOne()
            };
        };
        changeFirstOne();
        changeSecondOne();
        changeThirdOne();
        changeFourthOne();
        changeFifthOne();
        playButtons.whatIsOnHand();
        data.round = 3;
    },
}