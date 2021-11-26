function binarySearchRecursive (n,target,arr,low,high) {
    var mid = low +(Math.floor ((high - low)/2));
    if(arr[mid]==target){
        return true;
    }else if(arr[mid] > target){
        high = mid;
    } else if (arr[mid]<target){
        low = mid+1;
    }
    if(low==high && arr[mid]!=target){
        return false;
    }
    return binarySearchRecursive (n,target,arr,low,high);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [n,target]=input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    var low = 0;
    var high = arr.length-1;
    arr.sort(function(a, b){return a - b});
    if(binarySearchRecursive (n,target,arr,low,high)){
        console.log(1)
    } else {
        console.log(-1)
    }
   
}

if (process.env.USERNAME === "salav") {
runProgram(`5 0
2 -2 0 3 4`);
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