function doesWordExist(searchArray, wordToFind){
	var letters = "";
	var stop = false;
	var match = true;
	var i = 0;
	var j = 0;
	while (j < wordToFind.length){
		stop = false;
		while (stop == false && i <= searchArray.length) {		
			if (wordToFind[j] == searchArray[i]){
				letters += wordToFind[j];
				match = true;
				stop = true;
				j++;
				i++;

			} else {
				if (match == true) {
					letters = "";
					j = 0;
					break;
				} else {
					i++;
				}
			}
			if (stop == false) { 
				i++;
			}
		}
	}
	if (letters == wordToFind){
		return true;
	}
	else if (letters != wordToFind){
		return false;
	}
}
var a = "lcxaxdanielletm";
var b = "danielle";
var x = doesWordExist (a,b);
console.log ('does word exist = ' + x);
