function partyNot(N,C,R,arr){
    var sum = 0;
    for(var i=0;i<C;i++){
        sum+=arr[i];
    }
     if(sum<=R){
            return "Party";
        } else{
            return "Sad";
        }
}

function runProgram(input) {
    input = input.trim().split("\n");
    var [N,C,R] =input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    arr.sort((a,b)=>{return(a-b)})
    console.log(partyNot(N,C,R,arr));
}

if (process.env.USERNAME === "salav") {
runProgram(`5 3 24
    6 4 21 20 13`);
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