function minSorted(arr,low,high){
    while(low < high){
        var mid = mid = Math.floor(low+(high-low)/2);
        if(arr[mid]==arr[high]){
            high--;
        } else if(arr[mid]>arr[low]){
            low = mid+1;
        }else{
            high = mid-2;
        }
    }
    return arr[high-1];
}
function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var low =0;
    var high = arr.length-1;
    // arr.sort(function(a,b){return(a-b)})
    console.log(minSorted(arr,low,high));
   
}

if (process.env.USERNAME === "salav") {
runProgram(`10
4 6 7 9 10 -1 0 1 -2 3`);
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
});
}