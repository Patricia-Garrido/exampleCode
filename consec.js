var arr = [0,2,3,4,5];

function isConsecutive(arr) {
    var isCons = true;
    if (arr == undefined) {
        return false;
    }
    for (var i = 0; i < arr.length - 1; i++) {
        if ((arr[i] + 1) != arr[i + 1]) {
            isCons = false;
            break;
        }
    }
    return isCons;
}
console.log(isConsecutive(arr));