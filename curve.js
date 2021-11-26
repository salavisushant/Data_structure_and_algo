function curve(A,B,C,K){
    var i =0
    while(i<100){
        var x = i++;
        if(A*x*x + B*x*x + C>= K){
            if(x>0){
                return x;
            } else{
                return -1;
            }
        }
    }
   
}

function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line =1;
    for (var i =0;i<test;i++) {
        var [A,B,C,K]=input[line++].trim().split(" ").map(Number);
        console.log(curve(A,B,C,K));
}
 
}

if (process.env.USERNAME === "salav") {
runProgram(`1
1 2 4 150000`);
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