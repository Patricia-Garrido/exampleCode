function insert (arr,num){
	var newArray = [];
	var numberInserted = false;
	for (var i = 0; i < arr.length; i++){
		if (arr [i] < num || numberInserted == true){
			newArray.push(arr[i]);
		} else if (numberInserted == false){
			newArray.push(num);
			newArray.push (arr [i]);
			numberInserted = true;
		}
	}
	if (numberInserted == false){
	newArray.push(num);
	}
	return newArray;
}
	var arr = [7,8,10,11,12];
	var num = (9);
	console.log(arr,num);
