function numberOfways(n,dp){
    if(n < 0){
        return 0;
    }
    if(n === 0){
        return 1;
    }
    if(dp[n]!= -1){
        return dp[n];
    } else {
        dp[n]=(numberOfways(n-1,dp)+numberOfways(n-3,dp)+numberOfways(n-4,dp));
        return dp[n];
    }
}

function runProgram(input) {
    input= +input.trim();
    var dp = Array(input+1).fill(-1);
    dp[0]=0;
    console.log(numberOfways(input,dp));
}
if (process.env.USERNAME === "salav") {
runProgram(`5`);
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