function middle (arr) {
	if (arr !== undefined && arr.length <= 1) {
		return arr[0];
	} else if (arr !== undefined) {
		var m = arr.length/2; 
		m = Math.floor (m);
		return arr[m];
	} else {
		console.log('your array is undefined idiot');
	}
}
var arr = [2,99,22,44,33],
	arr2 = [1,4,5,6,2,3,4,8,9,0];

var m = middle(arr); //calling it here
console.log ('the middle number of the array is ' + m);

var n = middle(arr2); //action happens here
console.log ('the middle number of the array2 is ' + n);

function middle2(arr) {
	return arr[Math.floor(arr.length/2)];	
}
var k = middle2(arr);
console.log ('the middle number of the array2 is ' + k);

middle(undefined);


















function middle2(arr) {
	return arr[Math.floor(arr.length/2)];	
}
var k = middle2(arr);
console.log ('the middle number of the array2 is ' + k);






function merge(arr) {
	var mergeArr= mergeArr(arr, arr2);
	return mergeArr;
}
var j = merge (arr, arr2);
console.log ('the merged array is ' + j);