function fibAgain(n,dp){
    if(dp[n]!=-1){
        return dp[n];
    } else {
        dp[n]=(fibAgain(n-1,dp)+fibAgain(n-2,dp));
        return dp[n];
    }
}
function fib(n){
    var dp = Array(n+1).fill(-1)
    dp[0]=0;
    dp[1]=1;
    return fibAgain(n,dp)
}
function runProgram(input) {
    input = +input.trim();
    console.log(fib(input)); 
}

if (process.env.USERNAME === "salav") {
runProgram(`45`);
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