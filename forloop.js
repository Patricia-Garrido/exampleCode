for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) { // <--- This loop is nested in the other
        console.log('i =', + i + ' j = ' + j);
    }
}
