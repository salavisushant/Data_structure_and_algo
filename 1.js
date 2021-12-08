function sumExist(arr,k){
  var out =[]
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    for(var j =i+1;j<=arr.length; j++){
        for(var k =i;k<j;k++){
        out.push[arr[k]]
      } 
    }
    console.log(out);
    if(sum===k){
      return "yes"
    }
  }
  return "no"
}
function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var k = +input[2];
  console.log(sumExist(arr,k));   
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

