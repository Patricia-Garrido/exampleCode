/*
function merge (arr1,arr2) {
	var arr3 = [];
	for (var i = 0; i < arr1.length; i++){
		arr3.push(arr1[i]);
	}
	for (var j = 0; j < arr2.length; j++){
		arr3.push(arr2[j]);
	}
	return arr3;
}
var arr1 = [1 ,2, 3];
var arr2 = [4, 5, 6];
var result = merge (arr1,arr2);
console.log (result)

function merge (arr1,arr2) {
	var arr3 = [];
	var i = 0;
	var j = 0;
	while (i < arr1.length && j < arr2.length){
		arr3.push(arr1[i] && arr2[j]);
	    i++;
	    j++;
	}
	return arr3;
}
var arr1 = [1 ,2, 3];
var arr2 = [4, 5, 6];
var result = merge (arr1,arr2);
console.log (result)
*/


function mergeEven (arr1, arr2){
	var arr3 = [];
	for (var i = 0; i<arr1.length; i++){
		if(arr1 [i] % 2 == 0){
			arr3.push(arr1 [i]);
		}
	}
	for (var j = 0; j<arr2.length; j++){
		if(arr2 [j] % 2 == 0){
			arr3.push(arr2 [j]);
		}
	}
	return arr3;
}
var arr1 = [1 ,2, 3, 4];
var arr2 = [5, 6, 7, 8];
var result = mergeEven (arr1,arr2);
console.log (result);


function deleteMiddle (arr1){
	var b=[];
	var middle=[Math.floor(arr1.length/2)];
	console.log(middle);
	for (var i=0; i<arr1.length; i++){
		if (i!==middle){
			b.push(arr1[i]);
		}
	}
	return b;
}
var arr1 = [1,2,3,4,5];
var x = deleteMiddle (arr1);
console.log (x);














