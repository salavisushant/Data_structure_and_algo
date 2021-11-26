
function runProgram(input) {
    input = input.trim().split('\n');
    var [n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>a-b);
    var sum = 0;
    if(arr[0]>k){
        console.log(0);
    } else {
        for(var i=0;i<arr.length;i++){
            sum += arr[i];
            if(sum>k){
                console.log(i);
                break;
            }
        }
    }

   
}

if (process.env.USERNAME === "salav") {
runProgram(`4 10
5 4 2 4`);
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