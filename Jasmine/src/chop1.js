//for loop version
function chop1(i, intarr) {
    console.log("For loop version");
    var start = 0;
    var end = intarr.length - 1;
    var mid = Math.round((start + end) / 2);
    var index = 0;
    //console.log(mid);

    for (; start <= end;) {
        console.log("start=" + start);
        console.log("mid=" + mid);
        console.log("end=" +end);
        if (intarr[start] == i) {
            index = start;
            console.log("Found it!");
            console.log("Index is:" + index);
            break;
        }
        if (intarr[mid] == i) {
            index = mid;
            console.log("Found it in the middle!");
            console.log("Index is: " + index);
            break;
        }
        if (i < intarr[mid]) {
            end = mid;
            mid = Math.round((start + end) / 2);
            console.log("In first half");
            start++;
            continue;
        }
        if (i > intarr[mid]) {
            start = mid;
            mid = Math.round((start + end) / 2);
            console.log("In second half");
            start++;
        }
    }
    if (i != intarr[start] && i != intarr[mid]) {
        
        console.log("Didn't find it :( i="+i+" intarr[mid]="+intarr[mid]);
        index = -1;
    }
    return index;
}
