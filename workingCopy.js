lowCard1: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('firstSecret').src = fristLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won';
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };      
},
lowCard2: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('secondSecret').src = secondLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won !'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard3: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('thirdSecret').src = thirdLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won !!'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard4: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('fourthSecret').src = fourthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won Again :)'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard5: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('fifthSecret').src = fifthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'And Won Again !!! :)'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard6: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('sixthSecret').src = sixthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'And Again !!! :)'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard7: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('seventhSecret').src = seventhLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'Won You Lucky You... :)'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard8: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('eightSecret').src = eightLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'Won You Lucky Bastardo'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard9: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('ninethSecret').src = ninethLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = '9 In The Row Won !!!'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard10: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('tenthSecret').src = tenthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Should Try Lottery :)'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard11: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('eleventhSecret').src = eleventhLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'One More And JACKPOT !!!'
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
lowCard12: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('twelvethSecret').src = twelvethLowCard;
        this.moneyWon *= 10;
        alert('You Smash The Bank');
        this.secretLevel = 0
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard1: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('firstSecret').src = fristHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };      
},
highCard2: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('secondSecret').src = secondHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won !'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard3: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('thirdSecret').src = thirdHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won !!'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard4: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('fourthSecret').src = fourthHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Won Again :)'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard5: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('fifthSecret').src = fifthHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'And Won Again !!! :)'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard6: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('sixthSecret').src = sixthHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'And Again !!! :)'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard7: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('seventhSecret').src = seventhHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'Won You Lucky You... :)'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard8: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('eightSecret').src = eightHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'Won You Lucky Bastardo'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard9: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('ninethSecret').src = ninethHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = '9 In The Row Won !!!'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard10: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('tenthSecret').src = tenthHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'You Should Try Lottery :)'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard11: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('eleventhSecret').src = eleventhHighCard;
        this.moneyWon *= 2;
        this.secretLevel ++;
        this.riskMessage = 'One More And JACKPOT !!!'
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},
highCard12: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard > 12){
        document.getElementById('twelvethSecret').src = twelvethHighCard;
        this.moneyWon *= 2;
        alert('You Smash The Bank');
        this.secretLevel = 0
    }else if (secretCard < 13){
        this.moneyWon = 0;
        this.secretLevel = 0;
        this.score = 'You Lost';
        this.round = 5
    };
},