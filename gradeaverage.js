function average(grades){
	var average = 0;
	var low = grades [0];
	var highest = 0;
	for (var i=0; i < grades.length; i++){
		average += grades[i];
		if (low > grades [i]){
			low = grades [i];
		}
		if (highest < grades [i]){
			highest = grades [i];	
		}
	}
	console.log ('the lowest grade is ' + low);
	console.log ('the highest grade is ' + highest);
	average = average/grades.length;
	return average;
}
	var grades = [50, 80, 100, 25, 10, 75]
	var x = average (grades);
	console.log ('the average of the grades is ' + x)
