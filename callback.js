function foo(cb){
	console.log('I am foo');
	cb();
}
function bar(){
	console.log('I am bar');
}
foo(bar)