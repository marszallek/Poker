lowCard1: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('firstSecret').src = fristLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };      
},
lowCard2: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('secondSecret').src = secondLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard3: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('thirdSecret').src = thirdLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard4: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('fourthSecret').src = fourthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard5: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('fifthSecret').src = fifthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard6: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('sixthSecret').src = sixthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard7: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('seventhSecret').src = seventhLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard8: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('eightSecret').src = eightLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard9: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('ninethSecret').src = ninethLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard10: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('tenthSecret').src = tenthLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard11: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('eleventhSecret').src = eleventhLowCard;
        this.moneyWon *= 2;
        this.secretLevel ++
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},
lowCard12: function() {
    let secretCard = 0;
    secretCard = Math.floor(Math.random() * 24 + 1);
    if(secretCard < 13){
        document.getElementById('twelvethSecret').src = twelvethLowCard;
        this.moneyWon *= 2;
        alert('You Smash The Bank');
        this.secretLevel = 0
    }else if (secretCard > 12){
        this.moneyWon = 0;
        this.secretLevel = 0
    };
},