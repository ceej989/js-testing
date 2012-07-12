function recChop(start, end, target, intArry) {
	var mid = Math.floor((start+end)/2);
	if(start==end) {
		return intArry[start] == target ? start : -1;
	}
	else if(target > intArry[mid]) {
		console.log("In 2nd Half");
		start = mid;
		return recChop(start, end, target, intArry);
	}

	else if(target < intArry[mid]){
		console.log("In 1st Half");
		end = mid;
		return recChop(start,end,target,intArry);
	}

	else if(target == intArry[mid]){
		console.log("Found "+target+"!");
		return mid;
	}
}

function chop2 (target, intArry){

	var start = 0;
	var end = intArry.length;
	return recChop(start, end, target, intArry);
}