for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) { // <--- This loop is nested in the other
        process.stdout.write(" " + i * j);
        if (j === 12) {
            process.stdout.write("\n");
        }
    }
}
