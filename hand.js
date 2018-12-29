function hand(){
        //4 of a Kind
	if ((one === two && one === three && one === four) || (one === two && one === three && one === five) ||
		(one === two && one === four && one === five) || (one === three && one === four && one === five) ||
		(two === three && two === four && two === five)) {
		document.getElementById("pair").innerHTML = '4 Of a Kind';
		}
		//Full House
    else if ((one === two && three === four && three === five) || (one === three && two === four && two === five) ||
		(one === four && two === three && two === five) || (one === five && two === three && two === four) ||
		(one === two && one === three && four === five) || (one === two && one === four && three === five) || 
		(two === three && one === four && one === five) || (two === four && one === three && one === five))
		{
        document.getElementById("pair").innerHTML = 'Full House';
    } 
        //3 of a Kind
    else if ((one === two && one === three) || (one === two && one === four) || (one === two && one === five) ||
		(one === three && one === four) || (one === three && one === five) || (one === four && one === five) ||
        (two == three && two == four) || (two === three && two === five) || (two === four && two === five) ||
        (three === four && three === five)){

        document.getElementById("pair").innerHTML = '3 Of a Kind';
    }
        //2 Pairs
	else if ((one === two && three === four) || (one === two && three === five) || (one === two && four === five) ||
		(one === three && two === four) || (one === three && two === five) || (one === three && four === five) ||
		(one === four && two === three) || (one === four && two === five) || (one === four && three === five) ||
        (one === five && two === three) || (one === five && two === four) || (one === five && three === four) || (two == three && four === five) ||
        (two === four && three === five) || (two === five && three === four)){
				
			document.getElementById("pair").innerHTML = '2 Pairs';
	}
        //Pair
    else if ((one === two) || (one === three) || (one === four) || (one === five) || (two === three) || (two === four) || (two === five) ||
        (three === four) || (three === five) || (four === five)){

        document.getElementById("pair").innerHTML = 'Pair'; 
    }
}