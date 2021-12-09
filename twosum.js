function twoSum(n,k,arr){
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if(arr[i]+arr[j]==k){
                return i+" "+j;
            }
        }
    }
    return -1+" "+-1;
}

function runProgram(input) {
   input = input.trim().split("\n");
   var testcase = +input[0];
   var line =1;
   for(var i = 0; i < testcase;i++){
       var [n,k]=input[line++].trim().split(" ").map(Number);
       var arr = input[line++].trim().split(" ").map(Number);
       console.log(twoSum(n,k,arr));
   } 
}

if (process.env.USERNAME === "salav") {
runProgram(`3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49`);
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