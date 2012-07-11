//for loop version
function chop1(i, intarr) {
    console.log("For loop version");
    var start = 0;
    var end = intarr.length - 1;
    var mid = Math.round((start + end) / 2);
    console.log(mid);

    for (; start <= end;) {
        console.log("start=" + start);
        console.log("mid=" + mid);
        if (intarr[start] == i) {
            console.log("Found it!");
            console.log("Index is:" + start);
            break;
        }
        if (intarr[mid] == i) {
            console.log("Found it in the middle!");
            console.log("Index is: " + mid);
            break;
        }
        if (i < intarr[mid]) {
            end = mid;
            console.log("In first half");
            start++;
        }
        if (i > intarr[mid]) {
            start = mid;
            mid = (start + end) / 2;
            console.log("In second half");
            start++;
        }
    }
    if (i != intarr[start] && i != intarr[mid]) {
        
        console.log("Didn't find it :( i="+i+" intarr[mid]="+intarr[mid]);
    }

}
