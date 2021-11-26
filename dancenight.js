function danceNight(N,M,boys,girls){
    var flag=true
    for(var i=0;i<M;i++){
        if(boys[i]<=girls[i]){
            flag = false;
        }
    }
    if(flag){
        return "YES"
    } else{
        return "NO"
    }
}
function runProgram(input) {
   input = input.trim().split("\n");
   var testcase = +input[0];
   var line = 1;
   for(var i = 0; i < testcase; i++) {
       var [N,M] = input[line++].trim().split(" ").map(Number);
       var boys = input[line++].trim().split(" ").map(Number);
       boys.sort((a,b) => a-b)
       var girls = input[line++].trim().split(" ").map(Number);
       girls.sort((a,b) => a-b)
       console.log( danceNight(N,M,boys,girls));
   } 


   
}

if (process.env.USERNAME === "salav") {
runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);
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