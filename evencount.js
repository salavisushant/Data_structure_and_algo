function runProgram(input) {
    var arr = input.trim().split("").map(Number);
    var output = [];
    var j = 0;
    for(var i = arr.length; i>=0; i--){
       if(arr[i]%2==0) {
            j++;
            output.push(j);
       } else{
           output.push(j)
       }
    }
    var out = []
    for(var k = output.length-1;k>=1;k--){
        out.push(output[k]);
    }
    console.log(out.join(" "));
   
}

if (process.env.USERNAME === "salav") {
runProgram(`574674546476`);
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