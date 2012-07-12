function recChop(start, end, target, intArry) {
	var mid = Math.floor((start+end)/2);
	
	console.log("Args: " + start + ", " + end + ", " + target);

	if( start > end ) { return -1;}

	if(target > intArry[mid]) {
		console.log("In 2nd Half");
		start = mid + 1;
		return recChop(start, end, target, intArry);
	}

	else if(target < intArry[mid]){
		console.log("In 1st Half");
		end = mid - 1;
		return recChop(start,end,target,intArry);
	}

	else if(target == intArry[mid]){
		console.log("Found "+target+"!");
		return mid;
	}
}

function chop2 (target, intArry){
	var start = 0;
	var end = intArry.length - 1;
	return recChop(start, end, target, intArry);
}