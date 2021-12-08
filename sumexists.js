function sumexists(arr,k,sum,cur){
  
    if(sum == k){
        flag = true;
    }
    if(cur == arr.length){
        return;
    }
    for(var i = cur;i<arr.length;i++){
        return sumexists(arr,k,sum,i+1);
    }
    return sumexists(arr,k,sum+arr[i],i+1);
}

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2];
    var sum = 0;
    var cur = 0;
    console.log(sumexists(arr,k,sum,cur));
 
}

if (process.env.USERNAME === "salav") {
runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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