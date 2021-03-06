function maxSum(n,arr){
    var sum =0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]*i;
    }
    return sum;
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n =+input[0];
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort(function(a,b){return a-b})
    console.log(maxSum(n,arr));
}

if (process.env.USERNAME === "salav") {
runProgram(`4
2 5 1 6`);
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