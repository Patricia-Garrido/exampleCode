function margin(revenue, cost){
	var amount = 0;
	var margin = 0;
	amount = revenue - cost;
	margin = amount/revenue;
	return margin
}
var r = process.argv [2];
var c = process.argv [3];
var m = margin(r,c);
console.log('Margin value is ' + m);