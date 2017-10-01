function piglatin(word){
	var latin = '';
	var vowels = ['a','e','i','o','u'];
	var first = word.slice(0);
	var end = 'ay';
	var vend = 'way';
	for(var v = 0; v < vowels.length; v++) {
		//for (var w = 0; w < word.length; w++){
			if(word[0] == vowels [v]){
				return word + vend;
			}else if(word[0] !== vowels [v] && word [1] !== vowels [v]){
				latin = word.slice(1) + word [0] + end



				for(var n = w; n < word.length; n++){
					latin += word[n];
				}
				for(var f = 0; f < w; f++){
					latin += word[f];
				}
				return latin + end;
			}
			
		//}			
	}
}
var pl = piglatin('joshua');
console.log(pl)









