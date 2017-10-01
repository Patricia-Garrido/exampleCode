function prime (n){
	var p =[];
	if (n === 0|| n===1){
		return ['nothing to do'];
	}
	if (n === 2){
		return [2];
	}
	for (var i=1; i<=n; i++){
		if ((i%2) !== 0 && (i%3) !== 0 && 
			(i%5) !== 0 && (i%7) !== 0 && (
				i%11) !== 0 && (i%13) !== 0) {
			p.push(i);
		}
	}
	
return p;
}
var j= 17;
var x = prime(j);
console.log('the largetst prime is ' + x[x.length - 1])

