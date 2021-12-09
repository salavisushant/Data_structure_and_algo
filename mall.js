function mallParking(k,carin,carout){
    var count = 0;
    var i =1;
    var j =0;
    while(i<carin.length && j<carout.length){
        if(carin[i]<=carout[j]){
            count++;
            i++;
        } else{
            j++;
            // count--;
        }
    }
   if(count>=k){
       return "Not Possible";
   }else{
       return "Possible"
   }
}
function runProgram(input) {
  input = input.trim().split("\n");
  var k =+input[0];
  var carin = input[1].trim().split(" ").map(Number);
  var carout =input[2].trim().split(" ").map(Number);
  carin.sort((a,b) => a-b);
  carout.sort((a,b) => a-b);
  console.log(mallParking(k,carin,carout));
}
if (process.env.USERNAME === "salav") {
runProgram(`5
1 2 3 5 4
6 6 6 6 5`);
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