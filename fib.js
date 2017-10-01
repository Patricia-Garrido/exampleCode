var previous = 0;
var result = 1;
var sum = 0;
function fib(num){
    for(i = 0; i < num; i++){
    	sum = previous;
    	previous = result;
        result = sum + previous;
        console.log (result);
    }
}
fib(100);














