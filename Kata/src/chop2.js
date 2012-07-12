//[1,3,5,8,12] num = 8 start = 0 end = 4 mid = 2 

function recChop(s, m, e, num, ia, index) {

	console.log("In Recursion: s="+s+" m="+m+" e="+e+" ia[m]="+ia[m]);
	
	if(num > ia[m]){
		console.log("In 2nd Half");
		s=m;
		m = Math.round((s+e)/2);
		console.log("s="+s+" m="+m+" e="+e+" ia[m]="+ia[m]+" index="+index);
		recChop(s,m,e,num,ia, index);

	}
	else if(num < ia[m]){
		console.log("In 1st Half");
		e=m;
		m = Math.round((s+e)/2);
		recChop(s,m,e,num,ia, index);
	}
	else if(num == ia[m]){
		console.log("Found "+num+"!");
		index = m;
		console.log("s="+s+" m="+m+" e="+e+" ia[m]="+ia[m]+" index="+index);
		//return index;
	}
	return index;
	//else{return index;}
	
}

function chop2 (i, intarr){

	var start = 0;
	var end = intarr.length-1;
	var mid = Math.round((start+end)/2);
	var result=-1;

	recChop(start, mid, end, i, intarr, result);
	console.log("result="+result);
	
}