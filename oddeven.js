function oddeven (arr) {
    var arr = [2,5,7,25,39,44,71,76,];
    var evencount = 0;
    var oddcount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evencount = evencount + 1;
        }
        else {
            oddcount = oddcount + 1;
        }
    }
console.log (evencount +'even numbers');
console.log (oddcount + 'odd numbers');
}
oddeven();

