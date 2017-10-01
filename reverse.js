function reverse (array) {
	var backward = []
   for (var i = array.length-1; i >= 0;i--) {
       rev = array[i];
       backward.push(array [i]);
   }
   return backward
 }
 var a = ['orange', 'apples','bananas', 'kiwi', 'strawberries'];
 var x=reverse (a);
 console.log (x);
 
