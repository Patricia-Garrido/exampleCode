
var add = require('./addition.js');
var sub = require('./subtract.js');
var mult = require('./multiply.js');
var div = require('./divide.js');
var b,c,x,y,r,n,i,j;
if (process.argv[3] == '+'){
	b = parseInt(process.argv[2]);
	c = parseInt(process.argv[4]);
	var a = add(b,c);
	console.log(a);
}

if (process.argv[3] == '-'){
	 x = parseInt(process.argv[2]);
	 y = parseInt(process.argv[4]);
	var s = sub(x,y);
	console.log(s);
}

if (process.argv[3] == 'x'){
	 r = parseInt(process.argv[2]);
	 n = parseInt(process.argv[4]);
	var m = mult(r,n);
	console.log(m);
}

if (process.argv[3] == '/' ){
	 i = parseInt(process.argv[2]);
	 j = parseInt(process.argv[4]);
	var d = div(i,j);
	console.log(d);
}

