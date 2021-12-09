function neelamJourney(n,arr){
    var sum = 0;
    for(var i=0;i<arr.length-1;i++){
        sum+=arr[i]
    }
    return sum;
}
function runProgram(input) {
    input = input.trim().split("\n");
    var n =+input[0];
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort(function(a,b){return a-b})
    console.log(neelamJourney(n,arr));


   
}

if (process.env.USERNAME === "salav") {
runProgram(`5
4 7 8 3 4`);
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