var monthMap = {'1':'January',
		'2' : 'February',
		'3' : 'March',
		'4' : 'April',
		'5' : 'May',
		'6' : 'June',
		'7' : 'July',
		'8' : 'August',
		'9' : 'September',
		'10' : 'October',
		'11' : 'November',
		'12' : 'December',
};
function getMonthName(month){
	var code = '';
	for (var i=0; i<month.length; i++){
		code += monthMap [month [i]];
	}
	return code;
}
var n = '7';
var x = getMonthName (n);
console.log (x);