
    var one = Math.round(Math.random() * 5 + 1);
    var two = Math.round(Math.random() * 5 + 1);
    var three = Math.round(Math.random() * 5 + 1);
    var four = Math.round(Math.random() * 5 + 1);
    var five = Math.round(Math.random() * 5 + 1);
	
function poker(){
    if (one == 1 ){
        one = "9";
    }
        else if (one == 2){
        one = '10';
    }
        else if (one == 3){
        one = 'J';
    }
        else if (one == 4){
        one = 'Q';
    }
        else if (one == 5){
        one = 'K';
    }
        else one = 'A';


    if (two == 1 ){
        two = "9";
    }
        else if (two == 2){
        two = '10';
    }
        else if (two == 3){
        two = 'J';
    }
        else if (two == 4){
        two = 'Q';
    }
        else if (two == 5){
        two = 'K';
    }
        else two = 'A';


    if (three == 1 ){
        three = "9";
    }
        else if (three == 2){
        three = '10';
    }
        else if (three == 3){
        three = 'J';
    }
        else if (three == 4){
        three = 'Q';
    }
        else if (three == 5){
        three = 'K';
    }
        else three = 'A';
    

    if (four == 1 ){
        four = "9";
    }
        else if (four == 2){
        four = '10';
    }
        else if (four == 3){
        four = 'J';
    }
        else if (four == 4){
        four = 'Q';
    }
        else if (four == 5){
        four = 'K';
    }
        else four = 'A';


    if (five == 1 ){
        five = "9";
    }
        else if (five == 2){
        five = '10';
    }
        else if (five == 3){
        five = 'J';
    }
        else if (five == 4){
        five = 'Q';
    }
        else if (five == 5){
        five = 'K';
    }
        else five = 'A';
    
        var my = [one, two, three, four, five];
		document.getElementById("pok1").innerHTML = my.join(' ');
    }
function hand(){
	if ((one === two && one === three && one === four) || (one === two && one === three && one === five) ||
		(one === two && one === four && one === five) || (one === three && one === four && one === five) ||
		(two === three && two === four && two === five)) {
		document.getElementById("pair").innerHTML = '4 Of a Kind';
		}
		
    else if ((one === two && three === four && three === five) || (one === three && two === four && two === five) ||
		(one === four && two === three && two === five) || (one === five && two === three && two === four) ||
		(one === two && one === three && four === five) || (one === two && one === four && three === five) || 
		(two === three && one === four && one === five) || (two === four && one === three && one === five))
		{
        document.getElementById("pair").innerHTML = 'Full House';
    } 

    else if ((one === two && one === three) || (one === two && one === four) || (one === two && one === five) ||
		(one === three && one === four) || (one === three && one === five) || (one === four && one === five) ||
        (two == three && two == four) || (two === three && two === five) || (two === four && two === five) ||
        (three === four && three === five)){

        document.getElementById("pair").innerHTML = '3 Of a Kind';
    }
	
	else if ((one === two && three === four) || (one === two && three === five) || (one === two && four === five) ||
		(one === three && two === four) || (one === three && two === five) || (one === three && four === five) ||
		(one === four && two === three) || (one === four && two === five) || (one === four && three === five) ||
        (one === five && two === three) || (one === five && two === four) || (one === five && three === four) || (two == three && four === five) ||
        (two === four && three === five) || (two === five && three === four)){
				
			document.getElementById("pair").innerHTML = '2 Pairs';
	}
			
    else if ((one === two) || (one === three) || (one === four) || (one === five) || (two === three) || (two === four) || (two === five) ||
        (three === four) || (three === five) || (four === five)){

        document.getElementById("pair").innerHTML = 'Pair'; 
    }
        
}