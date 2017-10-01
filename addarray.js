function add (array){
	var sum = 0;
	var arr = [2, 5, 7];
		for (var i = 0; i < arr.length; i++) {
			sum = sum + arr[i];
	    }
	    return sum;
}
var x = add ();
console.log ('The Total Sum is =' + x );

