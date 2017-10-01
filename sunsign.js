function sunsign(month, day){
	var ss = ['Aquarius', 'Pieces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 
				'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']
    if ((month == 1 && day >= 21) || (month == 2 && day <= 18)){
    	return ss[0]
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)){
    	return ss[1];
  	} else if((month == 3 && day >= 21) || (month == 4 && day <= 20)){
    	return ss[2];
  	} else if((month == 4 && day >= 21) || (month == 5 && day <= 20)){
    	return ss[3];
  	} else if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
    	return ss[4];
  	} else if((month == 6 && day >= 22) || (month == 7 && day <= 22)){
    	return ss[5];
  	} else if((month == 7 && day >= 23) || (month == 8 && day <= 23)){
    	return ss[6];
  	} else if((month == 8 && day >= 24) || (month == 9 && day <= 23)){
    	return ss[7];
  	} else if((month == 9 && day >= 24) || (month == 10 && day <= 23)){
    	return ss[8];
  	} else if((month == 10 && day >= 24) || (month == 11 && day <= 22)){
    	return ss[9];
  	} else if((month == 11 && day >= 23) || (month == 12 && day <= 21)){
    	return ss[10];
  	} else if((month == 12 && day >= 22) || (month == 1 && day <= 20)){
    	return ss[11]	
    }		
}
var m = process.argv[2];
var d = process.argv[4];
x=sunsign(m,d);
console.log('Your sunsign is ' + x);