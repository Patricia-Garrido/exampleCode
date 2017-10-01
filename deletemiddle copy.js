
function deleteMiddle (arr1){
	var b=[];
	var middle=[Math.floor(arr1.length/2)];
	for (var i=0; i<arr1.length; i++){
		if (i!=middle){
			b.push(arr1[i]);
		}
	}
	return b;
}
var arr1 = [1,2,3,4,5];
var x = deleteMiddle (arr1);
console.log ('the new array without the middle number is ' + x);

