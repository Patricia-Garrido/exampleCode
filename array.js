
/* Find the greatest number in an array */
function greatest () {
	var great = 0;
	var arr = [109, 122, 5, 7000, 25, 7102, 76, 66, 88 ,99, 111];
	//console.log('the length of your arra is ' + arr.length)
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > great) {
			great = arr[i];
		}
	}
	return great;
}
var x = greatest(100);
// console.log ('The largest number is ' + x);

/* Find the smallest number in an array */
function least () {
	var least = (1000);
	var arr = [2, 5, 7, 15, 23, 25, 73];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]<least){
			least = arr [i];
		}
	}
 	return least;
}
var n = least ();
console.log ('The lowest number is ' + n);




