function sumInArray(arrayToSearch, sum){
	var num = 0;
	for (var i = 0; i < arrayToSearch.length; i++){
		if (sum > arrayToSearch[i]){
			num = arrayToSearch [i];
			for(var x = 0; x < arrayToSearch.length; x++){
				if(arrayToSearch[x] < num && arrayToSearch [i] + arrayToSearch [x] == sum){
					console.log ('The numbers that equal the sum are ' + arrayToSearch [i],arrayToSearch[x]);
				}
			}
		}
  	}	
}
var a = [2,3,6,7,10];
var b = 5;
var c = sumInArray(a,b);
